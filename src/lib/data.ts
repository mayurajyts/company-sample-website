import {
  Code2,
  Globe,
  Smartphone,
  Building2,
  Cloud,
  PenTool,
  Plug,
  RefreshCw,
  BrainCircuit,
  Lightbulb,
  Boxes,
  ShoppingCart,
  Users,
  Contact,
  BarChart3,
  Rocket,
  ShieldCheck,
  Layers,
  Headphones,
  Target,
  BadgeCheck,
  Lock,
  Compass,
  Search,
  ClipboardList,
  PencilRuler,
  TestTube2,
  UploadCloud,
  LifeBuoy,
  HeartPulse,
  Store,
  GraduationCap,
  Landmark,
  Factory,
  Truck,
  UtensilsCrossed,
  Scale,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  soon?: boolean;
};

export const services: Service[] = [
  {
    title: 'Custom Software Development',
    description:
      'Tailor-made applications engineered around your exact workflows, built to scale as your business grows.',
    icon: Code2,
  },
  {
    title: 'Web Application Development',
    description:
      'Fast, secure, and responsive web platforms using modern frameworks and clean, maintainable architecture.',
    icon: Globe,
  },
  {
    title: 'Mobile App Development',
    description:
      'Native-quality iOS and Android experiences that keep your customers engaged wherever they are.',
    icon: Smartphone,
  },
  {
    title: 'Enterprise Solutions',
    description:
      'Robust, mission-critical systems that unify operations and support thousands of concurrent users.',
    icon: Building2,
  },
  {
    title: 'Cloud Solutions',
    description:
      'Cloud-native infrastructure, migration, and DevOps that make your systems resilient and cost-efficient.',
    icon: Cloud,
  },
  {
    title: 'UI/UX Design',
    description:
      'Research-driven, elegant interfaces that turn complex products into effortless user experiences.',
    icon: PenTool,
  },
  {
    title: 'API Integration',
    description:
      'Seamless integrations that connect your tools, payment gateways, and third-party services reliably.',
    icon: Plug,
  },
  {
    title: 'System Modernization',
    description:
      'Modernize legacy systems into secure, cloud-ready platforms without disrupting daily operations.',
    icon: RefreshCw,
  },
  {
    title: 'AI Solutions',
    description:
      'Intelligent automation, predictive analytics, and machine learning tailored to real business problems.',
    icon: BrainCircuit,
    soon: true,
  },
  {
    title: 'IT Consulting',
    description:
      'Strategic technology guidance that aligns your digital roadmap with measurable business outcomes.',
    icon: Lightbulb,
  },
];

export type Product = {
  name: string;
  full: string;
  description: string;
  icon: LucideIcon;
  status: string;
};

export const products: Product[] = [
  {
    name: 'Axiyana ERP',
    full: 'Enterprise Resource Planning',
    description:
      'Unify finance, inventory, procurement, and operations into a single, real-time source of truth.',
    icon: Boxes,
    status: 'In Development',
  },
  {
    name: 'Axiyana POS',
    full: 'Point of Sale',
    description:
      'A fast, offline-ready point of sale for retail and hospitality with rich sales analytics.',
    icon: ShoppingCart,
    status: 'In Development',
  },
  {
    name: 'Axiyana HRM',
    full: 'Human Resource Management',
    description:
      'Streamline hiring, attendance, payroll, and performance in one intuitive people platform.',
    icon: Users,
    status: 'Planned',
  },
  {
    name: 'Axiyana CRM',
    full: 'Customer Relationship Management',
    description:
      'Manage leads, pipelines, and customer relationships to close more deals with less effort.',
    icon: Contact,
    status: 'Planned',
  },
  {
    name: 'Axiyana Analytics',
    full: 'Business Intelligence',
    description:
      'Turn raw data into clear dashboards and insights that drive confident, faster decisions.',
    icon: BarChart3,
    status: 'Planned',
  },
];

export type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const reasons: Reason[] = [
  {
    title: 'Innovation Driven',
    description: 'We embrace emerging technology to keep your business ahead of the curve.',
    icon: Rocket,
  },
  {
    title: 'Experienced Engineering',
    description: 'Disciplined engineers who write clean, tested, and maintainable code.',
    icon: Code2,
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems designed to grow smoothly from your first user to your millionth.',
    icon: Layers,
  },
  {
    title: 'Reliable Support',
    description: 'Responsive, dependable support that keeps your products running smoothly.',
    icon: Headphones,
  },
  {
    title: 'Business Focused',
    description: 'Every decision is tied to measurable outcomes and real business value.',
    icon: Target,
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and reviews ensure a polished, dependable end product.',
    icon: BadgeCheck,
  },
  {
    title: 'Secure Development',
    description: 'Security-first practices protect your data and your customers’ trust.',
    icon: Lock,
  },
  {
    title: 'Future Ready',
    description: 'Architected for change so your platform adapts to whatever comes next.',
    icon: Compass,
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn your goals, users, and constraints to define the right problem.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Planning',
    description: 'We shape scope, architecture, and a clear roadmap with realistic milestones.',
    icon: ClipboardList,
  },
  {
    step: '03',
    title: 'Design',
    description: 'We craft intuitive interfaces and experiences validated with your users.',
    icon: PencilRuler,
  },
  {
    step: '04',
    title: 'Development',
    description: 'We build in agile iterations with transparent progress and frequent demos.',
    icon: Code2,
  },
  {
    step: '05',
    title: 'Testing',
    description: 'We test thoroughly across devices to ensure quality, speed, and security.',
    icon: TestTube2,
  },
  {
    step: '06',
    title: 'Deployment',
    description: 'We launch smoothly with automated pipelines and zero-downtime releases.',
    icon: UploadCloud,
  },
  {
    step: '07',
    title: 'Support',
    description: 'We maintain, monitor, and evolve your product long after launch day.',
    icon: LifeBuoy,
  },
];

export type Industry = {
  name: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Retail', icon: Store },
  { name: 'Education', icon: GraduationCap },
  { name: 'Finance', icon: Landmark },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Logistics', icon: Truck },
  { name: 'Hospitality', icon: UtensilsCrossed },
  { name: 'Government', icon: Scale },
];

export const technologies: string[] = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Java',
  'Spring Boot',
  'Python',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Docker',
  'AWS',
  'Azure',
  'Firebase',
  'GitHub',
  'REST APIs',
  'GraphQL',
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 5, suffix: '+', label: 'Projects Engineered' },
  { value: 7, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Solutions Delivered' },
  { value: 24, suffix: '/7', label: 'Support Availability' },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Axiyana delivered a platform that transformed how we operate. The quality of engineering and attention to detail exceeded our expectations.',
    name: 'Mayura Jayatissa',
    role: 'Computer Engineer',
    company: 'Unleash',
  },
  {
    quote:
      'From discovery to launch, the team was professional, transparent, and genuinely invested in our success. A true technology partner.',
    name: 'Sudara Jayatissa',
    role: 'Tutor',
    company: 'Chemistry',
  },
  {
    quote:
      'They modernized our legacy systems without a single day of downtime. Reliable, secure, and remarkably easy to work with.',
    name: 'Gamini Jayatissa',
    role: 'Manager',
    company: 'Car Lovers',
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'What services does Axiyana Technology Solutions offer?',
    answer:
      'We offer custom software development, web and mobile applications, enterprise and cloud solutions, UI/UX design, API integration, system modernization, and IT consulting. We are also building a suite of our own software products.',
  },
  {
    question: 'Where is Axiyana based?',
    answer:
      'We are proudly headquartered in Sri Lanka and serve clients both locally and internationally, with a long-term vision of becoming a globally recognized software company.',
  },
  {
    question: 'How do you price your projects?',
    answer:
      'Every project is unique. After an initial discovery call we provide a transparent, itemized proposal based on scope, complexity, and timeline — with no hidden costs.',
  },
  {
    question: 'Do you provide support after the project is delivered?',
    answer:
      'Yes. We offer ongoing maintenance, monitoring, and support packages to keep your product secure, up to date, and continuously improving after launch.',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'We use a modern, battle-tested stack including React, Next.js, Node.js, TypeScript, Java, Spring Boot, Python, cloud platforms like AWS and Azure, and both SQL and NoSQL databases.',
  },
  {
    question: 'Can you work with our existing team and systems?',
    answer:
      'Absolutely. We frequently integrate with in-house teams and existing systems, adapting to your processes and tools to deliver a seamless collaboration.',
  },
];
