'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'model';
  content: string;
  timestamp?: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: 'Namaste! 🙏 Welcome to DeewanSolar.com. We provide premium Tata Power Solar and Adani Solar rooftop installations in Rajasthan with up to ₹95,000 subsidy and exclusive SBI collateral-free solar loans (@ 6% interest). Bajaj Finserv 0% EMIs are available for our showroom electronics. How can I assist you today?',
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const savedConvId = localStorage.getItem('deewan_conv_id');
    if (savedConvId) {
      setConversationId(savedConvId);
      const savedMessages = localStorage.getItem('deewan_chat_messages');
      if (savedMessages) {
        try {
          setMessages(JSON.parse(savedMessages));
        } catch (e) {
          console.error(e);
        }
      }
    } else {
      const timer = setTimeout(() => {
        if (!isOpen) setShowNotification(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('deewan_chat_messages', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: textToSend, timestamp: new Date().toISOString() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setShowNotification(false);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversationId,
          message: textToSend,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.conversationId) {
        setConversationId(data.conversationId);
        localStorage.setItem('deewan_conv_id', data.conversationId);
      }

      const modelMsg: Message = { role: 'model', content: data.reply, timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, modelMsg]);
      
      if (data.leadSubmitted) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'model',
            content: '✨ Lead Ingestion: Request logged successfully. Our team will contact you shortly.',
            timestamp: new Date().toISOString()
          }
        ]);
      }

    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content: 'I had trouble connecting. Please try again or call our Behror team directly at +91 95718 39696.',
          timestamp: new Date().toISOString()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (actionText: string) => {
    handleSendMessage(actionText);
  };

  const clearChat = () => {
    setConversationId(null);
    localStorage.removeItem('deewan_conv_id');
    localStorage.removeItem('deewan_chat_messages');
    setMessages([
      {
        role: 'model',
        content: 'Chat reset. Hello! I am the DeewanSolar.com Assistant. Ask me anything about Tata & Adani Solar quotations, ₹95,000 subsidy, SBI solar loans (@ 6%), or our Behror electronics showroom.',
        timestamp: new Date().toISOString()
      }
    ]);
  };

  const quickSuggestions = [
    'Solar Quote (Tata / Adani)',
    'Check ₹95,000 Subsidy',
    'SBI Solar Loan (6%)',
    'Bajaj Electronics EMI'
  ];

  return (
    <>
      {/* Floating Bubble */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
        {/* Welcome Notification Badge */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                setIsOpen(true);
                setShowNotification(false);
              }}
              className="mb-3 flex max-w-[calc(100vw-36px)] sm:max-w-xs cursor-pointer items-start gap-2.5 rounded-2xl bg-white text-[#1d1d1f] p-3 sm:p-3.5 border border-[#e5e5ea] shadow-xl hover:shadow-2xl transition-shadow"
            >
              <Sparkles className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[#0071e3]" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#86868b]">Deewan Solar & Electronics</span>
                <p className="text-xs font-semibold mt-0.5 leading-snug text-[#1d1d1f]">Instant Solar Quotation (Tata / Adani) & ₹95k Subsidy Support</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotification(false);
                }}
                className="text-[#86868b] hover:text-[#1d1d1f] p-0.5"
                aria-label="Dismiss Notification"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bubble Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotification(false);
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1d1d1f] hover:bg-black text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
          aria-label="Toggle Assistant"
        >
          {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
        </button>
      </div>

      {/* Chat Card Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-18 sm:bottom-22 right-3 sm:right-6 z-50 flex h-[calc(100vh-100px)] max-h-[560px] w-[calc(100vw-24px)] sm:w-[380px] max-w-[420px] flex-col rounded-3xl border border-[#e5e5ea] bg-white shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#fbfbfd] px-5 py-3.5 border-b border-[#f0f0f4]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f2ff] text-[#0071e3] border border-[#cbe2ff]">
                  <Bot className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#1d1d1f]">Deewan Solar Assistant</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#24b33e]" />
                    <span className="text-[9px] text-[#6e6e73] font-bold uppercase tracking-wider">Online • Tata & Adani Partner</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#6e6e73] transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#86868b] hover:text-[#1d1d1f] rounded-lg p-1 transition-colors"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#fbfbfd]">
              {messages.map((msg, idx) => {
                const isModel = msg.role === 'model';
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-2 ${isModel ? 'justify-start' : 'justify-end'}`}
                  >
                    {isModel && (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#e5e5ea] text-[#0071e3] mt-0.5 shrink-0 shadow-2xs">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                        isModel
                          ? 'bg-white text-[#1d1d1f] rounded-tl-sm border border-[#e5e5ea] shadow-2xs font-normal'
                          : 'bg-[#0071e3] text-white font-medium rounded-tr-sm shadow-2xs'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                );
              })}

              {/* Loader */}
              {isLoading && (
                <div className="flex items-start gap-2 justify-start">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#e5e5ea] text-[#0071e3] shrink-0 shadow-2xs">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-3 border border-[#e5e5ea] shadow-2xs flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#86868b] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#86868b] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#86868b] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 3 && !isLoading && (
              <div className="px-4 py-2.5 bg-white border-t border-[#f0f0f4] space-y-1.5">
                <span className="text-[9px] uppercase font-bold text-[#86868b] tracking-wider">Quick Inquiries</span>
                <div className="flex flex-wrap gap-1.5">
                  {quickSuggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleQuickAction(s)}
                      className="text-[10.5px] bg-[#f5f5f7] border border-[#e5e5ea] hover:border-[#0071e3] hover:bg-[#e8f2ff] hover:text-[#0071e3] text-[#424245] font-medium rounded-full px-2.5 py-1 transition-all text-left"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-3 border-t border-[#f0f0f4] bg-white flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Tata Solar quote, ₹95k subsidy, SBI..."
                disabled={isLoading}
                className="flex-1 bg-[#f5f5f7] border border-[#e5e5ea] outline-none text-xs px-3.5 py-2.5 rounded-full text-[#1d1d1f] placeholder-[#86868b] focus:border-[#0071e3] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0071e3] hover:bg-[#0077ed] disabled:opacity-40 text-white transition-all cursor-pointer shrink-0 shadow-2xs"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
