import { NextResponse } from 'next/server';

interface ChatRequest {
  message: string;
  conversationId?: string | null;
}

export async function POST(req: Request) {
  try {
    const body: ChatRequest = await req.json();
    const userMessage = (body.message || '').trim();

    if (!userMessage) {
      return NextResponse.json({ error: 'Message cannot be empty.' }, { status: 400 });
    }

    const lower = userMessage.toLowerCase();

    // Check if Gemini API key exists
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      try {
        const { GoogleGenerativeAI } = await import('@google/generative-ai');
        const genAI = new GoogleGenerativeAI(geminiKey);
        const model = genAI.getGenerativeModel({
          model: 'gemini-1.5-flash',
          systemInstruction:
            `You are the Deewan Solar AI Assistant (DeewanSolar.com) representing Deewan Solar and Deewan Electronics in Behror, Rajasthan. ` +
            `Key details:\n` +
            `- Brand: Deewan Solar (DeewanSolar.com). Established in 1995 in Behror.\n` +
            `- Operating Territory: We operate EXCLUSIVELY in the state of Rajasthan (under JVVNL Discom net metering across Behror, Neemrana, Kotputli, Alwar, Bansur, Shahjahanpur, etc.). We DO NOT operate or take installations in Haryana (Rewari, Bawal, Gurugram) or Uttar Pradesh (UP). If a user asks about installations in Haryana or UP, clearly and politely inform them that our operations and JVVNL net-metering approvals are strictly exclusive to Rajasthan.\n` +
            `- Top solar partners: Tata Power Solar (#1 top recommended brand for highest trust, 30-year warranty, N-Type TOPCon) and Adani Solar (Elan Dual-Glass Bifacial).\n` +
            `- Subsidy: 1 kW - ₹30,000 (30k), 2 kW - ₹60,000 (60k), 3 kW - ₹78,000 (78k) standard, or up to ₹95,000 with Rajasthan 100-free-units waiver option.\n` +
            `- Financing: State Bank of India (SBI) is the EXCLUSIVE financing partner for Solar (PM Surya Ghar collateral-free loan at 6% interest p.a.). Bajaj Finserv is ONLY for electronics and home appliances in our showroom, NOT for Solar. Never suggest Bajaj Finserv for solar installations.\n` +
            `- PM Surya Ghar Seller/Vendor Application: When consumers apply on pmsuryaghar.gov.in, they must select "DEEWAN ENTERPRISES" as their registered seller/vendor under State: Rajasthan, DISCOM: Jaipur Vidyut Vitran Nigam Ltd (JVVNL). Alternatively, they can simply send a photo of their JVVNL electricity bill + Aadhaar to +91 95718 39696 on WhatsApp or visit Deewan Enterprises, Behror, and our certified team files the portal application and net-metering on their behalf 100% free.\n` +
            `- 100% turnkey JVVNL net metering handled in Behror, Neemrana, Kotputli, Alwar, Bansur and across Rajasthan.\n` +
            `- Retail Showroom & Office: Near High Secondary Ground Under RB Health GYM, Patel Nagar, Behror, Rajasthan 301701. Open 9:30 AM - 8:30 PM (All 7 Days).\n` +
            `- Phone & WhatsApp: +91 95718 39696.\n` +
            `Be polite, concise, premium, minimal, and informative. Support both Hindi and English.`
        });

        const result = await model.generateContent(userMessage);
        const reply = result.response.text();
        return NextResponse.json({
          reply,
          conversationId: body.conversationId || 'conv-' + Date.now()
        });
      } catch (geminiErr) {
        console.warn('Gemini inference failed, falling back to local knowledge base:', geminiErr);
      }
    }

    // Direct, informative knowledge-base responses
    let reply = '';

    if (lower.includes('haryana') || lower.includes('up') || lower.includes('uttar pradesh') || lower.includes('rewari') || lower.includes('bawal') || lower.includes('gurgaon') || lower.includes('gurugram') || lower.includes('delhi') || lower.includes('हरियाणा')) {
      reply =
        `Deewan Solar operates EXCLUSIVELY in Rajasthan (under JVVNL Discom net-metering across Behror, Neemrana, Kotputli, Alwar, Bansur, etc.).\n\n` +
        `We do NOT service or install solar systems in Haryana or Uttar Pradesh (UP).\n\n` +
        `If your residential or commercial property is in Rajasthan, we will happily provide a 100% free site audit and up to ₹95,000 government subsidy!`;
    } else if (lower.includes('apply') || lower.includes('seller') || lower.includes('vendor') || lower.includes('portal') || lower.includes('registration') || lower.includes('select') || lower.includes('register') || lower.includes('आवेदन') || lower.includes('पंजीकरण') || lower.includes('पोर्टल') || lower.includes('वेंडर') || lower.includes('विक्रेता')) {
      reply =
        `Here is how you apply for Deewan Solar under PM Surya Ghar Yojana:\n\n` +
        `✨ OPTION A: 100% FREE ASSISTED SERVICE (RECOMMENDED & EASIEST)\n` +
        `The national portal requires technical DISCOM entries and document uploads. You do not need to do this yourself!\n` +
        `1. Take a clear photo of your latest JVVNL electricity bill & Aadhaar card.\n` +
        `2. WhatsApp it directly to our verified solar desk at +91 95718 39696.\n` +
        `3. Our certified portal team in Behror registers your file, selects DEEWAN ENTERPRISES, and coordinates the JVVNL net-metering inspection for you for free.\n\n` +
        `🏛️ OPTION B: SELF-APPLICATION ON PMSURYAGHAR.GOV.IN\n` +
        `If you prefer applying yourself on the official portal:\n` +
        `1. Visit pmsuryaghar.gov.in and log in with your mobile OTP.\n` +
        `2. Select State: "Rajasthan", DISCOM: "Jaipur Vidyut Vitran Nigam Ltd (JVVNL)", and enter your K-Number.\n` +
        `3. In the "Choose Registered Vendor / Seller" search bar, type: DEEWAN ENTERPRISES and select us.\n` +
        `4. Confirm your solar capacity (e.g. 3kW). Once submitted, our team receives your file instantly.\n\n` +
        `You can also walk in anytime to Deewan Enterprises, Near High Secondary Ground Under RB Health GYM, Patel Nagar, Behror!`;
    } else if (lower.includes('100 unit') || lower.includes('free unit') || lower.includes('17000') || lower.includes('78000') || lower.includes('95000') || lower.includes('100 यूनिट') || lower.includes('फ्री यूनिट')) {
      reply =
        `Here is the exact Rajasthan Subsidy Policy explained:\n\n` +
        `• 1 kW System: ₹30,000 (30k) direct subsidy.\n` +
        `• 2 kW System: ₹60,000 (60k) direct subsidy.\n` +
        `• 3 kW System (Standard): ₹78,000 (78k) central subsidy, while keeping your existing 100 free electricity units per month on your JVVNL meter.\n` +
        `• 3 kW System (Maximum State Top-Up): ₹95,000 (Central ₹78k + Rajasthan State ₹17k upfront) if you surrender the 100 free units scheme.\n\n` +
        `💡 Recommendation for Homeowners: Since a 3kW solar system generates ~360 to 420 units every month, your electricity bill drops to ₹0 anyway! Taking the full ₹95,000 cash saves you more money immediately.\n\n` +
        `Would you like our Behror solar desk to calculate your exact net price on WhatsApp (+91 95718 39696)?`;
    } else if (lower.includes('subsidy') || lower.includes('सब्सिडी') || lower.includes('cost') || lower.includes('price') || lower.includes('rate') || lower.includes('kit') || lower.includes('quotation') || lower.includes('भाव') || lower.includes('दाम')) {
      reply =
        `Here are the official factory kit quotation details for Deewan Solar (Lowest price guarantee in Behror):\n\n` +
        `⚡ SUBSIDY BREAKDOWN:\n` +
        `• 1 kW: ₹30,000 (30k) Subsidy\n` +
        `• 2 kW: ₹60,000 (60k) Subsidy\n` +
        `• 3 kW: ₹78,000 (78k) to ₹95,000 Subsidy\n\n` +
        `☀️ TATA POWER SOLAR FACTORY KITS (30-Yr Warranty • TOPCon):\n` +
        `• 1 kW Kit: ₹65,000 – ₹75,000 (Net after 30k subsidy: ~₹35,000 – ₹45,000)\n` +
        `• 2 kW Kit: ₹1,25,000 – ₹1,40,000 (Net after 60k subsidy: ~₹65,000 – ₹80,000)\n` +
        `• 3 kW Kit: ₹1,80,000 – ₹2,05,000 (Net after up to 95k subsidy: ~₹85,000 – ₹1,15,000)\n` +
        `• 3.5 kW Kit: ₹2,05,000 – ₹2,30,000 (Net: ~₹1,10,000 – ₹1,40,000)\n` +
        `• 5.3 kW Kit: ₹2,85,000 – ₹3,20,000 (Net: ~₹1,90,000 – ₹2,30,000)\n\n` +
        `☀️ ADANI SOLAR BIFACIAL KITS:\n` +
        `• 1 kW Kit: ₹60,000 – ₹70,000 (Net: ~₹30,000 – ₹40,000)\n` +
        `• 2 kW Kit: ₹1,15,000 – ₹1,30,000 (Net: ~₹55,000 – ₹70,000)\n` +
        `• 3 kW Kit: ₹1,70,000 – ₹1,95,000 (Net after subsidy: ~₹75,000 – ₹1,05,000)\n\n` +
        `All kits include Tier-1 Panels, Inverter, Structure, Safety Gear & 100% JVVNL Net-Meter filing.\n` +
        `Solar financing is assisted exclusively through SBI (subsidized 6% interest p.a., collateral-free). (Bajaj Finserv EMIs are for showroom electronics only).\n\n` +
        `Would you like to WhatsApp our Behror team at +91 95718 39696 to lock in your lowest price and book a free roof survey?`;
    } else if (lower.includes('tata') || lower.includes('adani') || lower.includes('brand') || lower.includes('panel')) {
      reply =
        `We provide pre-engineered factory kits from India's top manufacturers:\n\n` +
        `1. Tata Power Solar (#1 Recommendation): Highest brand trust, 30-year linear performance warranty, N-Type TOPCon bifacial cells engineered for Rajasthan heat. 3kW kit estimated at ₹1.80L – ₹2.05L (Net ~₹85,000 after subsidy).\n\n` +
        `2. Adani Solar: Elan Dual-Glass Bifacial modules with 5400 Pa mechanical wind-load rating. 3kW kit estimated at ₹1.70L – ₹1,95,000 (Net ~₹75,000 after subsidy).\n\n` +
        `We also supply Waaree, UTL, and Luminous for custom requirements. Would you like a written quotation sent to your WhatsApp?`;
    } else if (lower.includes('loan') || lower.includes('emi') || lower.includes('sbi') || lower.includes('bajaj') || lower.includes('finance') || lower.includes('किस्त') || lower.includes('लोन')) {
      reply =
        `Here is our financing distinction:\n\n` +
        `☀️ SOLAR ROOFTOP FINANCING (SBI EXCLUSIVE @ 6% INTEREST):\n` +
        `• Solar is financed EXCLUSIVELY through State Bank of India (SBI) under the PM Surya Ghar Solar Loan scheme.\n` +
        `• Ultra-low subsidized rate at 6% interest p.a. with 100% collateral-free terms (zero property mortgage) and up to 10 years repayment.\n` +
        `• Monthly power bill savings easily exceed your loan installment!\n\n` +
        `📺 ELECTRONICS SHOWROOM EMIs (BAJAJ FINSERV ONLY):\n` +
        `• Bajaj Finserv 0% downpayment EMIs are available ONLY for electronics and home appliances (Inverter ACs, 4K TVs, Refrigerators) at our showroom.\n` +
        `• Note: Bajaj Finserv is NOT available for solar systems.\n\n` +
        `Would you like assistance with an SBI solar loan application on WhatsApp (+91 95718 39696)?`;
    } else if (lower.includes('location') || lower.includes('address') || lower.includes('shop') || lower.includes('showroom') || lower.includes('कहां') || lower.includes('कहा')) {
      reply =
        `Our flagship showroom is located at:\nDeewan Enterprises, Near High Secondary Ground Under RB Health GYM, Patel Nagar, Behror, Rajasthan 301701.\n\nTimings: 9:30 AM to 8:30 PM (Open all 7 days).\nDirect Call / WhatsApp: +91 95718 39696.`;
    } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('number') || lower.includes('whatsapp') || lower.includes('नंबर')) {
      reply =
        `You can reach our senior solar engineering desk directly at +91 95718 39696 or click the WhatsApp button on the website for an instant quotation.`;
    } else {
      reply =
        `Namaste! 🙏 Welcome to DeewanSolar.com. We are Behror’s authorized EPC partner for Tata Power Solar and Adani Solar in Rajasthan, providing up to ₹95,000 government subsidy (1kW: 30k, 2kW: 60k, 3kW: 78k-95k), JVVNL net metering, and exclusive SBI solar loans (@ 6% interest). (Bajaj Finserv EMIs are available for our showroom electronics). How can we assist with your rooftop solar or electronics inquiry?`;
    }

    return NextResponse.json({
      reply,
      conversationId: body.conversationId || 'conv-' + Date.now()
    });

  } catch (error: any) {
    console.error('API Chat Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please contact us at +91 95718 39696.' },
      { status: 500 }
    );
  }
}

