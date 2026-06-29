export interface Service {
  slug: string;
  title: string;
  img: string;
  desc: string;
  offers: string[];
  benefits: string[];
}

export interface Post {
  id: number;
  title: string;
  exc: string;
  cat: string;
  author: string;
  date: string;
  readTime: string;
  img: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'ocean-freight',
    title: 'Ocean Freight Export',
    img: '',
    desc: 'Move large shipments efficiently through trusted global shipping networks. We coordinate every stage to ensure your cargo reaches its destination safely and on schedule.',
    offers: ['FCL & LCL shipments worldwide', 'Port-to-port and door-to-door services', 'Real-time container tracking', 'Dangerous goods handling', 'Reefer container solutions'],
    benefits: ['Competitive freight rates through major shipping lines', 'Dedicated account managers', 'Complete documentation support', 'Customs clearance assistance'],
  },
  {
    slug: 'air-freight',
    title: 'Air Freight Export',
    img: '',
    desc: 'When speed matters, our air freight solutions help deliver time-sensitive shipments quickly and reliably to international destinations.',
    offers: ['Express and economy air freight', 'Charter cargo services', 'Perishable goods handling', 'Temperature-controlled logistics', 'Airport-to-airport and door-to-door'],
    benefits: ['Fastest delivery times for urgent shipments', 'Superior cargo security standards', 'Global network of airline partners', 'Priority handling available'],
  },
  {
    slug: 'customs-clearance',
    title: 'Customs Clearance Support',
    img: '',
    desc: 'Avoid unnecessary delays with expert assistance in export documentation, compliance requirements, and customs procedures.',
    offers: ['Import & export customs declarations', 'HS code classification', 'Duty drawback claims', 'Pre-arrival customs filing', 'Compliance audits'],
    benefits: ['Faster customs release times', 'Reduced risk of penalties', 'Expert knowledge of international regulations', 'Proactive compliance monitoring'],
  },
  {
    slug: 'container-cargo',
    title: 'Container & Cargo Management',
    img: 'https://images.pexels.com/photos/2231742/pexels-photo-2231742.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'From cargo consolidation to container planning and handling, we optimize every shipment for maximum efficiency and cost-effectiveness.',
    offers: ['Container stuffing & unstuffing', 'Warehousing & storage', 'Inland container depot services', 'Container tracking & monitoring', 'Cargo insurance'],
    benefits: ['Reduced port detention charges', 'Secure, monitored storage facilities', 'Flexible storage terms', 'Integrated logistics management'],
  },
  {
    slug: 'export-documentation',
    title: 'Export Documentation',
    img: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Preparation and management of essential export paperwork to ensure smooth international trade operations.',
    offers: ['Form M & FOREX documentation', 'Certificate of Origin', 'Phytosanitary certificates', 'NAFDAC & SON approvals', 'Packing list & commercial invoice'],
    benefits: ['Error-free documentation', 'Faster processing times', 'Regulatory compliance guaranteed', 'Digital document management'],
  },
  {
    slug: 'supply-chain',
    title: 'Supply Chain Coordination',
    img: '',
    desc: 'End-to-end logistics planning that keeps your operations running efficiently from origin to destination.',
    offers: ['Supply chain optimization', 'Market entry strategy', 'Trade agreement advisory', 'Tariff & duty optimization', 'Risk management'],
    benefits: ['Reduced logistics costs by up to 30%', 'Access to preferential trade rates', 'Experienced trade specialists', 'Tailored strategy for your industry'],
  },
];

export const POSTS: Post[] = [
  {
    id: 1,
    title: 'Understanding Nigeria\'s New Export Documentation Requirements in 2024',
    exc: 'The Nigerian Export Promotion Council has introduced new documentation requirements that every exporter must understand. We break down what\'s changed and how to stay compliant.',
    cat: 'Trade Compliance',
    author: 'Adebayo Okafor',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&q=80',
  },
  {
    id: 2,
    title: 'How to Choose Between FCL and LCL for Your Ocean Freight Shipment',
    exc: 'Full container load or less than container load? The right choice depends on your cargo volume, timeline, and budget. Here\'s a comprehensive guide to help you decide.',
    cat: 'Logistics',
    author: 'Priya Nair',
    date: 'Jan 22, 2024',
    readTime: '7 min read',
    img: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'West Africa Trade Corridors: Opportunities Under AfCFTA in 2024',
    exc: 'The African Continental Free Trade Area agreement is creating new opportunities for Nigerian businesses. We explore the most promising trade corridors and how to access them.',
    cat: 'Trade Compliance',
    author: 'Emmanuel Mensah',
    date: 'Feb 3, 2024',
    readTime: '6 min read',
    img: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Navigating Customs Clearance: Common Mistakes That Delay Shipments',
    exc: 'Customs delays are costly and frustrating. Our experts share the most common documentation and compliance errors that hold up shipments — and how to avoid them.',
    cat: 'Customs',
    author: 'Amaka Chukwu',
    date: 'Feb 14, 2024',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: 5,
    title: 'Air vs Ocean Freight: Making the Right Choice for Time-Sensitive Cargo',
    exc: 'When speed matters, air freight seems obvious — but the cost difference can be significant. We break down when it\'s worth paying the premium and when ocean freight is the smarter choice.',
    cat: 'Shipping Guide',
    author: 'Adebayo Okafor',
    date: 'Feb 28, 2024',
    readTime: '5 min read',
    img: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Supply Chain Resilience: Lessons for Nigerian Exporters After Global Disruptions',
    exc: 'Global supply chain disruptions have taught businesses valuable lessons about resilience and diversification. Here\'s what Nigerian exporters need to build more robust logistics strategies.',
    cat: 'Supply Chain',
    author: 'Priya Nair',
    date: 'Mar 8, 2024',
    readTime: '9 min read',
    img: 'https://images.pexels.com/photos/6572431/pexels-photo-6572431.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const FAQS: FAQ[] = [
  {
    q: 'How long does ocean freight from Nigeria typically take?',
    a: 'Transit times vary by destination. Shipments to Europe take 14–21 days, North America 21–28 days, and Asia 25–35 days. These estimates exclude port processing and customs clearance time at the destination.',
  },
  {
    q: 'What documents do I need to export goods from Nigeria?',
    a: 'Standard export documentation includes a Commercial Invoice, Packing List, Bill of Lading or Airway Bill, Certificate of Origin, Form NXP (Nigerian Export Proceeds Form), and any product-specific certificates (e.g., NAFDAC, SON). Our team handles all documentation on your behalf.',
  },
  {
    q: 'Do you provide cargo insurance for shipments?',
    a: 'Yes, we offer comprehensive cargo insurance through our insurance partners. We recommend insuring all shipments to protect against loss, damage, or theft. Our team can advise on appropriate coverage levels for your specific cargo.',
  },
  {
    q: 'Can you handle dangerous goods or hazardous materials?',
    a: 'Yes, we are certified to handle IMDG (sea) and IATA (air) regulated dangerous goods. All hazardous shipments must be properly classified, packaged, and labeled. Contact us early in the process for dangerous goods shipments to ensure compliance.',
  },
  {
    q: 'How do I get a freight quote?',
    a: 'You can request a quote through our website, by email, or by calling our office. To provide an accurate quote, we\'ll need details about your cargo (dimensions, weight, type), origin and destination, preferred mode of transport, and required delivery timeframe. We typically respond within 2 hours.',
  },
];

export const PARTNERS = [
  'Maersk Line', 'MSC', 'CMA CGM', 'HAPAG-LLOYD', 'DHL Express', 'FedEx Freight',
];
