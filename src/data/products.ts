export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  image_url: string;
  description: string;
  specifications: Record<string, string>;
  in_stock: boolean;
  featured: boolean;
}

export const STATIC_PRODUCTS: Product[] = [
  // --- 1. Televisions ---
  {
    id: 'samsung-tv-crystal-55',
    name: 'Samsung Crystal 4K Vivid Ultra HD Smart LED TV (55 inches)',
    category: 'Televisions',
    brand: 'Samsung',
    image_url: 'https://thfvnext.bing.com/th/id/OIP.ia1VQNeJEKX3LVdyMU36MwHaHa?cb=thfvnextfalcon2&pid=Api',
    description: 'Experience rich, vivid colors with Samsung\'s Crystal Processor 4K. Features PurColor, HDR 10+, and OTS Lite for immersive, smart screen streaming.',
    specifications: { ScreenSize: '55 inches', Resolution: '4K Ultra HD', SmartTV: 'Yes', RefreshRate: '60 Hz', HDMI: '3 Ports', USB: '2 Ports', AudioOutput: '20W', Warranty: '1 Year' },
    in_stock: true,
    featured: true
  },
  {
    id: 'sony-tv-bravia-55',
    name: 'Sony BRAVIA 4K Ultra HD Smart LED Google TV KD-55X74L (55 inches)',
    category: 'Televisions',
    brand: 'Sony',
    image_url: 'https://tse2.mm.bing.net/th/id/OIP.tl19v8iha84rOBEz9AvXvgHaE4?pid=Api',
    description: 'Sony\'s 4K Processor X1 delivers smooth, contrast-rich pictures. Features X-Balanced speakers, Google Assistant voice search, and premium minimalist design.',
    specifications: { ScreenSize: '55 inches', Resolution: '4K Ultra HD', SmartTV: 'Google TV', RefreshRate: '60 Hz', HDMI: '3 Ports', USB: '2 Ports', AudioOutput: '20W (Dolby Audio)', Warranty: '2 Years' },
    in_stock: true,
    featured: true
  },

  // --- 2. Inverters ---
  {
    id: 'luminous-inverter-zelio-1100',
    name: 'Luminous Zelio+ 1100 Intelligent Home UPS Inverter (900VA/12V)',
    category: 'Inverters',
    brand: 'Luminous',
    image_url: 'https://tse2.mm.bing.net/th/id/OIP.68EBbLFU5Tj1jZHfG9obKwHaHa?pid=Api',
    description: 'India\'s most popular smart home UPS with a digital display that shows power backup time and battery status. Safe for all sensitive electronic appliances.',
    specifications: { Capacity: '900VA / 756W', InputVoltage: '12V', OutputWaveform: 'Pure Sine Wave', Display: 'Smart LCD', Protection: 'Overload, Short-circuit, Deep discharge', Warranty: '2 Years' },
    in_stock: true,
    featured: true
  },
  {
    id: 'microtek-inverter-sebz-1100',
    name: 'Microtek UPS SEBz 1100 V2 Pure Sine Wave Inverter (900VA/12V)',
    category: 'Inverters',
    brand: 'Microtek',
    image_url: 'https://tse3.mm.bing.net/th/id/OIP.PjXCtftdZ8GnIaalo62O0wHaHa?pid=Api',
    description: 'Highly reliable sine wave inverter with smart overload protection and fast charging technology. Designed for durable performance during long outages.',
    specifications: { Capacity: '900VA / 720W', InputVoltage: '12V', OutputWaveform: 'Pure Sine Wave', Technology: 'Micro Controller Based Intelligent Control', Efficiency: '>85%', Warranty: '2 Years' },
    in_stock: true,
    featured: false
  },

  // --- 3. Batteries ---
  {
    id: 'luminous-battery-rc18000',
    name: 'Luminous Red Charge RC 18000 (150Ah Tall Tubular Inverter Battery)',
    category: 'Batteries',
    brand: 'Luminous',
    image_url: 'https://tse1.mm.bing.net/th/id/OIP.v_PzX_hInMaTUs3z1WpD3wHaHa?pid=Api',
    description: 'Robust tall tubular battery built with alloy grid technology to withstand frequent, prolonged power outages. Extremely low maintenance.',
    specifications: { Capacity: '150Ah', BatteryType: 'Tall Tubular', NominalVoltage: '12V', WaterLevelIndicators: '6', Warranty: '36+18 Months' },
    in_stock: true,
    featured: true
  },
  {
    id: 'exide-battery-ib1500',
    name: 'Exide Instabrite IB1500 (150Ah Flat Plate Inverter Battery)',
    category: 'Batteries',
    brand: 'Exide',
    image_url: 'https://thf.bing.com/th/id/OIP.CkVwIHL52URtl0Jsi-ccNwHaHa?cb=thfc1falcon2&pid=Api',
    description: 'Premium flat plate battery designed for high power demand and quick charge recovery. Features lead-antimony plates for extra-long life.',
    specifications: { Capacity: '150Ah', BatteryType: 'Flat Plate', NominalVoltage: '12V', WaterLevelIndicators: '6', Warranty: '36 Months' },
    in_stock: true,
    featured: false
  },

  // --- 4. Refrigerators ---
  {
    id: 'lg-fridge-gl-i292',
    name: 'LG 242 L 3 Star Smart Inverter Double Door Refrigerator GL-I292RPZX',
    category: 'Refrigerators',
    brand: 'LG',
    image_url: 'https://tse1.mm.bing.net/th/id/OIP.8ZLY8snXGeUxdTS4uqfotgHaHa?r=0&pid=Api',
    description: 'Smart double door refrigerator with multi-airflow cooling and Door Cooling+ technology. Extremely quiet and energy-efficient performance.',
    specifications: { Capacity: '242 Litres', DoorType: 'Double Door', DefrostSystem: 'Frost Free', Compressor: 'Smart Inverter', EnergyRating: '3 Star', Warranty: '10 Years on Compressor' },
    in_stock: true,
    featured: true
  },
  {
    id: 'samsung-fridge-rt28',
    name: 'Samsung 236 L 3 Star Digital Inverter Double Door Refrigerator RT28C3053S8/HL',
    category: 'Refrigerators',
    brand: 'Samsung',
    image_url: 'https://tse2.mm.bing.net/th/id/OIP.oFsgSIH12DLemYEXYMMD1QAAAA?pid=Api',
    description: 'Advanced double door refrigerator featuring all-around cooling, a moist fresh zone, and convertible freezer options. Powered by a long-lasting digital inverter.',
    specifications: { Capacity: '236 Litres', DoorType: 'Double Door', DefrostSystem: 'Frost Free', Compressor: 'Digital Inverter', EnergyRating: '3 Star', Warranty: '20 Years on Compressor' },
    in_stock: true,
    featured: false
  },

  // --- 5. Washing Machines ---
  {
    id: 'lg-washing-top-semi',
    name: 'LG 7 Kg 5 Star Semi-Automatic Top Loading Washing Machine P7020NGAZ',
    category: 'Washing Machines',
    brand: 'LG',
    image_url: 'https://thfvnext.bing.com/th/id/OIP.d11LtwT0nEKSytOkoNy-8QHaJQ?cb=thfvnextfalcon2&pid=Api',
    description: 'Durable semi-automatic washing machine featuring a wind jet dry system, collar scrubber, and 3 wash programs (Gentle, Normal, Strong). Perfect for compact homes.',
    specifications: { Capacity: '7.0 Kg', LoadingType: 'Top Load', Operation: 'Semi-Automatic', EnergyRating: '5 Star', Pulsator: 'Roller Jet Pulsator', Warranty: '2 Years' },
    in_stock: true,
    featured: false
  },
  {
    id: 'samsung-washing-ecobubble',
    name: 'Samsung 8.0 Kg EcoBubble Fully-Automatic Top Loading Washing Machine WA80BG4441BG',
    category: 'Washing Machines',
    brand: 'Samsung',
    image_url: 'https://tse3.mm.bing.net/th/id/OIP.ID5VDBGONVTplFclPFHfRAAAAA?r=0&pid=Api',
    description: 'High-capacity fully-automatic washing machine with bubble technology to dissolve detergent quickly and remove tough stains. Includes digital inverter motor.',
    specifications: { Capacity: '8.0 Kg', LoadingType: 'Top Load', Operation: 'Fully-Automatic', Technology: 'EcoBubble', Motor: 'Digital Inverter', SmartConnectivity: 'Yes (SmartThings)', Warranty: '20 Years on Motor' },
    in_stock: true,
    featured: true
  },

  // --- 6. Coolers & Fans ---
  {
    id: 'symphony-cooler-diet-30i',
    name: 'Symphony Diet 3D 30i Personal Tower Air Cooler (30 Litres)',
    category: 'Coolers',
    brand: 'Symphony',
    image_url: 'https://tse3.mm.bing.net/th/id/OIP.ogtKxwURUjw9ESIw5AzrSgHaHa?pid=Api',
    description: 'Sleek and tall personal tower cooler featuring 3D cooling pads and multistage air purification. Perfect for compact bedrooms and study spaces.',
    specifications: { Capacity: '30 Litres', CoverageArea: 'Up to 150 sq. ft.', PowerConsumption: '145 Watts', SpeedControl: '3 Speeds', Filter: 'i-Pure Technology', ControlType: 'Remote Control', Warranty: '1 Year' },
    in_stock: true,
    featured: true
  },
  {
    id: 'bajaj-cooler-px97',
    name: 'Bajaj PX 97 Torque New 36L Personal Air Cooler',
    category: 'Coolers',
    brand: 'Bajaj',
    image_url: 'https://thf.bing.com/th/id/OIP.GEqfJmJQ_7CfpbS-M5d5HAHaHa?r=0&cb=thfc1falcon2&pid=Api',
    description: 'Compact and powerful personal cooler featuring hexagonal design cooling media. Delivers fresh, chilled air with low power draw.',
    specifications: { Capacity: '36 Litres', CoverageArea: 'Up to 150 sq. ft.', AirDelivery: '1500 m3/hr', Technology: 'Hexacool Technology Pads', PowerConsumption: '100 Watts', Warranty: '1 Year' },
    in_stock: true,
    featured: false
  },
  {
    id: 'atomberg-fan-renesa',
    name: 'Atomberg Renesa 1200mm BLDC Ceiling Fan with Remote',
    category: 'Fans',
    brand: 'Atomberg',
    image_url: 'https://tse1.explicit.bing.net/th/id/OIP.y8QSJ7hR7Lg6uMOZE5V5kwHaHa?cb=thfvnextfalcon2&pid=Api',
    description: 'Energy-efficient BLDC fan that saves up to 65% on electricity bills. Operates smoothly even during voltage fluctuations with dedicated remote.',
    specifications: { SweepSize: '1200 mm', MotorType: 'BLDC Motor', PowerConsumption: '28 Watts', SpeedSettings: '6 Speeds', RemoteControl: 'Yes (Boost, Sleep, Timer Modes)', Warranty: '2+1 Years' },
    in_stock: true,
    featured: true
  },
  {
    id: 'havells-fan-ambrose',
    name: 'Havells Ambrose 1200mm Decorative Ceiling Fan',
    category: 'Fans',
    brand: 'Havells',
    image_url: 'https://tse3.mm.bing.net/th/id/OIP.KqWXwnkpQLrNdieKpxRswQHaEl?r=0&pid=Api',
    description: 'Elegant ceiling fan with metallic paint finish and decorative trims. Designed for wide air delivery and quiet operation.',
    specifications: { SweepSize: '1200 mm', MotorType: 'Double Ball Bearing Copper Motor', PowerConsumption: '74 Watts', AirDelivery: '225 m3/min', Speed: '390 RPM', Warranty: '2 Years' },
    in_stock: true,
    featured: false
  },

  // --- 7. Air Conditioners ---
  {
    id: 'daikin-ac-mtkl50u',
    name: 'Daikin 1.5 Ton 3 Star Inverter Split AC MTKL50U',
    category: 'Air Conditioners',
    brand: 'Daikin',
    image_url: 'https://thf.bing.com/th/id/OIP.4Jv6Rtd4baF1Ej5kJQUZUQHaHa?cb=thfc1falcon2&pid=Api',
    description: 'High efficiency split air conditioner featuring Daikin\'s patented Swing Compressor and PM 2.5 filter. Delivers quick cooling without drafts.',
    specifications: { Capacity: '1.5 Ton', EnergyRating: '3 Star', Compressor: 'Inverter', 'PM2.5Filter': 'Yes', Airflow: 'Coanda Airflow', Warranty: '10 Years on Compressor' },
    in_stock: true,
    featured: true
  },
  {
    id: 'voltas-ac-vectra-prism',
    name: 'Voltas 1.5 Ton 3 Star Inverter Split AC 183V Vectra Prism',
    category: 'Air Conditioners',
    brand: 'Voltas',
    image_url: 'https://tse2.mm.bing.net/th/id/OIP.Ltxw_rigZZfUVQeESaPCogHaHa?pid=Api',
    description: 'Advanced inverter AC that operates at different capacities based on room heat load. Excellent cooling performance under extreme temperatures.',
    specifications: { Capacity: '1.5 Ton', EnergyRating: '3 Star', Compressor: 'Adjustable Inverter', AntiDustFilter: 'Yes', Mode: '4-in-1 Adjustable Cooling', Warranty: '10 Years on Compressor' },
    in_stock: true,
    featured: true
  },

  // --- 8. Solar Panels & Inverters ---
  {
    id: 'tata-solar-topcon-550',
    name: 'Tata Power Solar TP-550-MB TopCon Bifacial Solar Module (550W)',
    category: 'Solar Panels',
    brand: 'Tata Power Solar',
    image_url: 'https://tse1.mm.bing.net/th/id/OIP.Gja5Vnsm2MK-b382RfMl_wHaHa?pid=Api',
    description: 'Next-generation N-Type TOPCon dual-glass bifacial solar panel from Tata Power Solar. Delivers up to 22.4% cell efficiency with dual-side energy capture, ideal for intense Rajasthan sunlight.',
    specifications: { Wattage: '550 Watts', Technology: 'N-Type TOPCon Bifacial', CellEfficiency: '22.4%', GlassType: 'Dual Glass 2.0mm', TempCoefficient: '-0.30% / °C', Warranty: '30 Years Linear Performance (12 Years Product)' },
    in_stock: true,
    featured: true
  },
  {
    id: 'adani-solar-elan-550',
    name: 'Adani Solar Elan Shine Dual-Glass Bifacial Module (540-550W)',
    category: 'Solar Panels',
    brand: 'Adani Solar',
    image_url: 'https://tse1.mm.bing.net/th/id/OIP.4nPORcudxyK4XtHUo5IWyAHaHa?r=0&pid=Api',
    description: 'Tier-1 ultra-durable solar module engineered by Adani Solar for desert and high-temperature conditions. Resistant to PID and salt mist, ensuring maximum power yield for decades.',
    specifications: { Wattage: '545 Watts', Technology: 'Mono PERC Bifacial', CellEfficiency: '21.8%', Dimensions: '2278 x 1134 x 35 mm', WindLoad: '5400 Pa', Warranty: '25 Years Performance Warranty' },
    in_stock: true,
    featured: true
  },
  {
    id: 'waaree-arka-545',
    name: 'Waaree Energies Arka Series 545W Mono PERC Solar Panel',
    category: 'Solar Panels',
    brand: 'Waaree',
    image_url: 'https://tse1.mm.bing.net/th/id/OIP.Gja5Vnsm2MK-b382RfMl_wHaHa?pid=Api',
    description: 'India\'s largest solar manufacturer. Half-cut multi-busbar technology significantly lowers internal resistance and shadow loss on rooftop installations.',
    specifications: { Wattage: '545 Watts', Technology: 'Half-Cut Mono PERC', CellEfficiency: '21.3%', Busbars: '10 BB Architecture', Connector: 'MC4 Compatible IP68', Warranty: '25 Years Performance Warranty' },
    in_stock: true,
    featured: true
  },
  {
    id: 'utl-solar-panel-mono-540',
    name: 'UTL Solar High-Efficiency 540W Mono PERC 24V Panel',
    category: 'Solar Panels',
    brand: 'UTL Solar',
    image_url: 'https://tse1.mm.bing.net/th/id/OIP.4nPORcudxyK4XtHUo5IWyAHaHa?r=0&pid=Api',
    description: 'High efficiency mono PERC solar panel capable of producing robust electricity in low light and morning/evening hours. Outstanding value for residential setups.',
    specifications: { Wattage: '540 Watts', NominalVoltage: '24 Volts', PanelType: 'Mono PERC', Cells: '144 Half-Cells', Warranty: '25 Years Performance Warranty' },
    in_stock: true,
    featured: false
  },
  {
    id: 'sungrow-inverter-5kw',
    name: 'Sungrow SG5K-D 5kW On-Grid Solar Inverter (Dual MPPT)',
    category: 'Solar Inverters',
    brand: 'Tata Power Solar',
    image_url: 'https://thf.bing.com/th/id/OIP.9V6I5GAVD2sb-Dx2HeiluAHaFx?cb=thfc1falcon2&pid=Api',
    description: 'World-renowned on-grid string inverter with 98.4% peak efficiency. Features built-in Wi-Fi real-time mobile app monitoring, dual MPPT trackers, and integrated surge protection.',
    specifications: { Capacity: '5 kW / 5000W', Type: 'On-Grid Tie', Efficiency: '98.4%', MPPTTrackers: '2 Independent Trackers', Protection: 'IP65 Water & Dust Proof', Warranty: '10 Years Standard Warranty' },
    in_stock: true,
    featured: true
  },
  {
    id: 'luminous-solar-nxt-5kw',
    name: 'Luminous Solar NXG / NXT+ 5kW Hybrid Intelligent PCU',
    category: 'Solar Inverters',
    brand: 'Luminous',
    image_url: 'https://thf.bing.com/th/id/OIP.9V6I5GAVD2sb-Dx2HeiluAHaFx?cb=thfc1falcon2&pid=Api',
    description: 'Intelligent hybrid solar inverter with solar optimization technology to save utility bills by prioritising solar power usage and battery storage during grid cuts.',
    specifications: { Capacity: '5000VA / 48V', InverterType: 'Hybrid Solar PCU', Waveform: 'Pure Sine Wave', SolarChargerType: 'MPPT (High Efficiency)', MaxSolarPanelSupport: 'up to 5500Wp', Warranty: '5 Years' },
    in_stock: true,
    featured: true
  },
  {
    id: 'microtek-solar-inverter-msun1135',
    name: 'Microtek Solar UPS M-SUN 1135 12V Pure Sine Wave Inverter',
    category: 'Solar Inverters',
    brand: 'Microtek',
    image_url: 'https://thfvnext.bing.com/th/id/OIP.1Y-Go4W3ah53e5dvPewAYwHaHa?r=0&cb=thfvnextfalcon2&pid=Api',
    description: 'Smart hybrid inverter with a micro-controller that intelligently manages battery charging from solar panels and utility power.',
    specifications: { Capacity: '935VA / 12V', InverterType: 'Hybrid Solar UPS', Waveform: 'Pure Sine Wave', SolarChargerType: 'PWM', MaxPanelSupport: 'up to 600Wp', Warranty: '2 Years' },
    in_stock: true,
    featured: false
  },
  {
    id: 'exide-solar-battery-6lms150',
    name: 'Exide Solar Tubetech 150Ah / 12V C10 Deep Cycle Solar Battery',
    category: 'Batteries',
    brand: 'Exide',
    image_url: 'https://thf.bing.com/th/id/OIP.CkVwIHL52URtl0Jsi-ccNwHaHa?cb=thfc1falcon2&pid=Api',
    description: 'Specialized C10 rated deep-discharge solar tubular battery engineered for high ambient temperatures. Provides 1500+ cycles at 80% DOD with minimal water topping required.',
    specifications: { Capacity: '150Ah @ C10', BatteryType: 'Solar Tall Tubular', Voltage: '12V', CycleLife: '1500+ Cycles @ 80% DOD', LowMaintenance: 'Yes (Ceramic Vent Plugs)', Warranty: '5 Years Replacement Guarantee' },
    in_stock: true,
    featured: true
  },

  // --- 9. Chairs & Ladders (Furniture) ---
  {
    id: 'nilkamal-chair-plastic',
    name: 'Nilkamal Premium Plastic Chair (Set of 4)',
    category: 'Chairs',
    brand: 'Usha',
    image_url: 'https://tse3.mm.bing.net/th/id/OIP.ufGpF8iXMBzqdUD0dxrNvwHaEK?pid=Api',
    description: 'Durable and weather-resistant plastic chairs suitable for living rooms, lawns, offices, and commercial establishments.',
    specifications: { Material: 'High-grade Polypropylene', ChairType: 'Armless Plastic Chair', WeightCapacity: 'up to 120 Kg', PackCount: '4 Chairs', Dimensions: '58cm x 46cm x 88cm', Warranty: '1 Year' },
    in_stock: true,
    featured: false
  },
  {
    id: 'savya-chair-office',
    name: 'Savya Home Apex Premium High Back Ergonomic Office Chair',
    category: 'Chairs',
    brand: 'Usha',
    image_url: 'https://thfvnext.bing.com/th/id/OIP.8se2K0lJqQ6fcDuvoJTVaAHaHa?r=0&cb=thfvnextfalcon2&pid=Api',
    description: 'Ergonomic mesh high back chair with thick padded seat and adjustable lumbar support. Designed to prevent back fatigue during long sitting sessions.',
    specifications: { ChairType: 'Ergonomic Office Chair', FrameMaterial: 'Nylon Structure', BaseMaterial: 'Chrome Steel Base', Adjustments: 'Pneumatic Height, Tilt Tension Control', BackSupport: 'Mesh back with lumbar support', Warranty: '1 Year' },
    in_stock: true,
    featured: true
  },
  {
    id: 'bathla-ladder-advance',
    name: 'Bathla Advance 5-Step Folding Aluminium Ladder with Sure-Claw Feet',
    category: 'Ladders',
    brand: 'Usha',
    image_url: 'https://tse4.mm.bing.net/th/id/OIP.0yvmncmv3B9MMlQPRf8oZQHaHa?pid=Api',
    description: 'Ultra-portable folding aluminum ladder featuring non-slip steps and skid-resistant rubber feet for secure residential and utility access.',
    specifications: { Material: 'High-grade Rust-Proof Aluminium', StepCount: '5 Steps', ReachHeight: '10 feet', LoadCapacity: 'up to 150 Kg', FoldedSize: 'Compact', Warranty: '5 Years' },
    in_stock: true,
    featured: true
  },
  {
    id: 'paras-ladder-steel',
    name: 'Paras Premium 6-Step Folding Steel Ladder with Wide Anti-Skid Steps',
    category: 'Ladders',
    brand: 'Usha',
    image_url: 'https://thf.bing.com/th/id/OIP.DL6LNkfij0Mf6WUF32TWXQHaHa?cb=thfc1falcon2&pid=Api',
    description: 'Highly stable steel step ladder with wide safety steps and knee guard. Easy to fold and store, perfect for commercial use.',
    specifications: { Material: 'Heavy-gauge Epoxy Powder-Coated Steel', StepCount: '6 Steps', ReachHeight: '11 feet', LoadCapacity: 'up to 120 Kg', Steps: 'Wide steps with rubber grip pads', Warranty: '3 Years' },
    in_stock: true,
    featured: false
  }
];
