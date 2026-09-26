export type ModuleKey =
  | 'financial-accounting'
  | 'taxation-accounting'
  | 'management-accounting'
  | 'auditing'

export type Module = {
  key: ModuleKey
  name: string
  short: string
  tagline: string
  description: string
  subtopics: string[]
  tutorSlugs: TutorSlug[]
}

export type TutorSlug = 'tawanda-muradzikwa' | 'itai-munemo'

export type Tutor = {
  slug: TutorSlug
  name: string
  title: string
  image: string
  initials: string
  rating: number
  reviews: number
  students: number
  years: number
  specialties: ModuleKey[]
  bio: string
  highlights: string[]
}

export const MODULES: Module[] = [
  {
    key: 'financial-accounting',
    name: 'Financial Accounting',
    short: 'Financial',
    tagline: 'IFRS-based reporting from first principles',
    description:
      'Master the preparation and interpretation of financial statements under IFRS, from the conceptual framework through to complex group accounts.',
    tutorSlugs: ['tawanda-muradzikwa', 'itai-munemo'],
    subtopics: [
      'The Conceptual Framework for Financial Reporting',
      'Presentation of Financial Statements (IAS 1)',
      'Statement of Cash Flows (IAS 7)',
      'Accounting Policies, Estimates & Errors (IAS 8)',
      'Property, Plant & Equipment (IAS 16)',
      'Intangible Assets (IAS 38)',
      'Impairment of Assets (IAS 36)',
      'Inventories (IAS 2)',
      'Revenue from Contracts with Customers (IFRS 15)',
      'Leases (IFRS 16)',
      'Financial Instruments (IFRS 9)',
      'Provisions, Contingent Liabilities & Assets (IAS 37)',
      'Income Taxes (IAS 12)',
      'Employee Benefits (IAS 19)',
      'Business Combinations (IFRS 3)',
      'Consolidated Financial Statements (IFRS 10)',
      'Investments in Associates & Joint Ventures (IAS 28)',
      'The Effects of Changes in Foreign Exchange Rates (IAS 21)',
      'Earnings per Share (IAS 33)',
      'Events After the Reporting Period (IAS 10)',
      'Fair Value Measurement (IFRS 13)',
      'Related Party Disclosures (IAS 24)',
    ],
  },
  {
    key: 'taxation-accounting',
    name: 'Taxation Accounting',
    short: 'Taxation',
    tagline: 'Zimbabwean tax law, computation and planning',
    description:
      'Understand the Zimbabwean tax system in depth — income tax, VAT, capital gains and administration — with practical computation techniques.',
    tutorSlugs: ['itai-munemo', 'tawanda-muradzikwa'],
    subtopics: [
      'Introduction to the Zimbabwean Tax System',
      'Sources & Framework of Income Tax',
      'The Definition of Gross Income',
      'Exempt Income',
      'Allowable Deductions (General Deduction Formula)',
      'Prohibited & Specific Deductions',
      'Capital Allowances & Wear and Tear',
      'Employment Income & PAYE',
      'Taxation of Fringe Benefits',
      'Trade & Business Income',
      'Investment & Passive Income',
      'Value Added Tax (VAT)',
      'Capital Gains Tax',
      "Withholding Taxes & Non-Residents' Tax",
      'Taxation of Rental Income',
      'Taxation of Partnerships',
      'Taxation of Companies & Corporate Tax',
      'Taxation of Trusts & Deceased Estates',
      'Presumptive Tax',
      'Double Taxation Agreements & Relief',
      'Tax Administration, Returns & Assessments',
      'Tax Planning, Avoidance & Ethics',
    ],
  },
  {
    key: 'management-accounting',
    name: 'Management Accounting',
    short: 'Management',
    tagline: 'Costing, budgeting and decision-making',
    description:
      'Build the costing, planning and performance skills managers rely on — from cost behaviour and CVP analysis to investment appraisal.',
    tutorSlugs: ['itai-munemo', 'tawanda-muradzikwa'],
    subtopics: [
      'Cost Classification & Cost Behaviour',
      'Material, Labour & Overhead Costs',
      'Overhead Analysis & Absorption Costing',
      'Activity-Based Costing (ABC)',
      'Marginal vs Absorption Costing',
      'Job & Batch Costing',
      'Process Costing & Joint Products',
      'Service & Operation Costing',
      'Cost-Volume-Profit (CVP) Analysis',
      'Break-even & Margin of Safety',
      'Budgeting & Budgetary Control',
      'Fixed & Flexible Budgets',
      'Standard Costing',
      'Variance Analysis & Reconciliation',
      'Relevant Costing for Decision-Making',
      'Limiting Factor & Throughput Analysis',
      'Pricing Decisions & Strategies',
      'Capital Investment Appraisal (NPV, IRR, Payback)',
      'Working Capital Management',
      'Divisional Performance Measurement',
      'The Balanced Scorecard',
      'Transfer Pricing',
    ],
  },
  {
    key: 'auditing',
    name: 'Applied Auditing',
    short: 'Auditing',
    tagline: 'Assurance engagements from planning to opinion',
    description:
      'Learn the full external audit process under ISA — risk, evidence and reporting — plus assurance and internal audit fundamentals.',
    tutorSlugs: ['tawanda-muradzikwa', 'itai-munemo'],
    subtopics: [
      'Nature, Objectives & Scope of Auditing',
      'The Audit Profession & Regulatory Framework',
      'Professional Ethics & Independence',
      'Engagement Acceptance & Continuance',
      'Audit Planning & Strategy',
      'Understanding the Entity & Its Environment',
      'The Audit Risk Model',
      'Materiality in Planning & Performance',
      'Internal Control Systems',
      'Tests of Controls',
      'Audit Evidence & Assertions',
      'Audit Sampling & Data Analytics',
      'Substantive Procedures',
      'Audit of Revenue & Receivables',
      'Audit of Purchases & Payables',
      'Audit of Inventory',
      'Audit of Non-Current Assets',
      'Audit of Cash & Bank Balances',
      'Going Concern Considerations',
      'Subsequent Events Review',
      "The Auditor's Report & Opinions",
      'Internal Audit & Assurance Engagements',
    ],
  },
]

export const TUTORS: Tutor[] = [
  {
    slug: 'tawanda-muradzikwa',
    name: 'Tawanda Muradzikwa',
    title: 'Financial Reporting & Auditing Specialist',
    image: '/tutors/tawanda-muradzikwa.png',
    initials: 'TM',
    rating: 5,
    reviews: 1,
    students: 0,
    years: 0,
    specialties: ['financial-accounting', 'auditing'],
    bio:'Tawanda Muradzikwa is a dedicated Trainee Accountant, currently pursuing the Chartered Accountant (CA (Z)) qualification. He holds both IAC and ZCTA qualifications and doing his APC Board Exam, is a graduate of Chinhoyi University of Technology, and has practical experience in accounting, auditing, and financial reporting. In addition to his professional career, Tawanda has a strong passion for teaching and has previously tutored aspiring accounting students through Precision Teaching, helping them build confidence and achieve academic success. His blend of industry expertise, academic excellence, and commitment to student development makes him a valuable tutor at Precision Tutor Connect.',
    highlights: [
      'IFRS & consolidated financial statements',
      'External audit process under ISA',
      'Board exam and CTA-level coaching',
      'Structured, exam-technique focused sessions',
    ],
  },
  {
    slug: 'itai-munemo',
    name: 'Itai Munemo',
    title: 'Taxation & Management Accounting Specialist',
    image: '/tutors/itai-munemo.png',
    initials: 'IM',
    rating: 5,
    reviews: 1,
    students:0,
    years: 0,
    specialties: ['taxation-accounting', 'management-accounting'],
    bio: 'Itai Munemo is a Harare-based aspiring Chartered Accountant and Trainee Accountant, currently progressing through the CA (Z) qualification pathway under the Institute of Chartered Accountants of Zimbabwe (ICAZ). He holds a Bachelor of Accountancy degree from the University of Zimbabwe, completed the ZCTA (Certificate in Theory of Accounting) with a Top 10 ranking, and passed the Initial Assessment of Competence (IAC) in 8th position nationally. His experience spans finance, audit, and business operations.',
    highlights: [
      'Zimbabwean taxation law & computations',
      'Costing, budgeting & variance analysis',
      'Investment appraisal & decision-making',
      'Patient, worked-example driven approach',
    ],
  },
]

export type Plan = {
  key: string
  name: string
  price: string
  cadence: string
  description: string
  features: string[]
  popular?: boolean
}

export const PLANS: Plan[] = [
  {
    key: 'single',
    name: 'Single Session',
    price: '$15',
    cadence: 'per session',
    description: 'Perfect for a one-off topic or a quick pre-exam boost.',
    features: [
      'One 60-minute live online session',
      'Any module or subtopic',
      'Session recording & notes',
      'Pay per session, no commitment',
    ],
  },
  {
    key: 'module',
    name: 'Module Bundle',
    price: '$99',
    cadence: 'per module',
    description: 'Full coverage of one module across all its subtopics.',
    popular: true,
    features: [
      'Up to 10 live online sessions',
      'Complete coverage of one module',
      'Practice questions & mock feedback',
      'AI study assistant access',
      'Progress tracking with your tutor',
    ],
  },
  {
    key: 'monthly',
    name: 'Monthly Unlimited',
    price: '$60',
    cadence: 'per month',
    description: 'Consistent weekly support across every module.',
    features: [
      'Up to 8 live sessions per month',
      'All four modules included',
      'Priority scheduling',
      'AI study assistant access',
      'Mentorship check-ins',
    ],
  },
  {
    key: 'intensive',
    name: 'Exam Prep Intensive',
    price: '$180',
    cadence: 'per exam block',
    description: 'Structured revision programme for the weeks before exams.',
    features: [
      'Intensive revision timetable',
      'Full mock exams & marking',
      'All modules & subtopics',
      'Daily AI assistant support',
      'One-on-one mentorship sessions',
    ],
  },
]

export const PAYMENT_METHODS = [
  'EcoCash',
  'OneMoney',
  'InnBucks',
  'ZIPIT / Bank Transfer',
  'Visa / Mastercard',
]

export type Testimonial = {
  name: string
  role: string
  tutorSlug: TutorSlug
  module: string
  rating: number
  quote: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rutendo C.',
    role: 'CTA Candidate, Harare',
    tutorSlug: 'tawanda-muradzikwa',
    module: 'Financial Accounting',
    rating: 5,
    quote:
      'Tawanda made consolidations finally click for me. His step-by-step method got me through my board exam on the first attempt.',
    initials: 'RC',
  },
  {
    name: 'Blessing M.',
    role: 'BCom Accounting Student, UZ',
    tutorSlug: 'itai-munemo',
    module: 'Taxation Accounting',
    rating: 5,
    quote:
      'Itai knows Zimbabwean tax inside out. Every session had worked examples I could actually reuse in the exam. Highly recommend.',
    initials: 'BM',
  },
  {
    name: 'Nyasha D.',
    role: 'Aspiring Chartered Accountant',
    tutorSlug: 'itai-munemo',
    module: 'Management Accounting',
    rating: 4,
    quote:
      'Variance analysis used to terrify me. After a few sessions with Itai I was confident and scored my highest mark yet.',
    initials: 'ND',
  },
  {
    name: 'Tapiwa G.',
    role: 'Final Year Student, NUST',
    tutorSlug: 'tawanda-muradzikwa',
    module: 'Applied Auditing',
    rating: 5,
    quote:
      'The auditing sessions were so well structured. I understood the whole audit process and how to answer application questions.',
    initials: 'TG',
  },
  {
    name: 'Chiedza N.',
    role: 'CTA Candidate, Bulawayo',
    tutorSlug: 'tawanda-muradzikwa',
    module: 'Financial Accounting',
    rating: 5,
    quote:
      'Online sessions fit around my work perfectly and the recordings meant I could revise anytime. Worth every dollar.',
    initials: 'CN',
  },
  {
    name: 'Farai K.',
    role: 'BCom Student, MSU',
    tutorSlug: 'itai-munemo',
    module: 'Management Accounting',
    rating: 4,
    quote:
      'Great at explaining investment appraisal in plain language. The mentorship kept me motivated through a tough semester.',
    initials: 'FK',
  },
]

export const CONTACT = {
  phone: '071 455 2095',
  phoneHref: '+263714552095',
  whatsapp: 'https://wa.me/263714552095',
  email: 'hello@tutorconnect.co.zw',
  location: 'Online across Zimbabwe',
}

export function getModule(key: string) {
  return MODULES.find((m) => m.key === key)
}

export function getTutor(slug: string) {
  return TUTORS.find((t) => t.slug === slug)
}

export function modulesForTutor(slug: TutorSlug) {
  return MODULES.filter((m) => m.tutorSlugs.includes(slug))
}
