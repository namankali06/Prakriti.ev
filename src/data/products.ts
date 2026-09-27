// Prakriti EV — Product Data
// NOTE: Color image variants use CSS filter placeholders.
// Replace filterCSS values with real image paths once per-color photography is available.

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  category: string
  tagline: string
  description: string
  /** Primary hero image path */
  image: string
  /** Default CSS filter to apply to the base image */
  defaultFilter: string
  /** Key specifications shown in spec-row format */
  specs: ProductSpec[]
  /** Starting price — leave as empty string if unknown */
  price: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'defender',
    name: 'Big Bull Defender',
    category: 'Heavy-Duty E-Rickshaw',
    tagline: 'Built for the long haul.',
    description:
      'The Defender is engineered for continuous commercial operation. Dual-battery architecture, reinforced chassis, and advanced EABS braking make it the first choice for fleet operators across India.',
    image: '/defender-red.png',
    price: '',
    defaultFilter: 'grayscale(0.7) brightness(1.4)',
    specs: [
      { label: 'Range', value: '140 km (IDC)' },
      { label: 'Battery', value: 'Dual-pack LFP' },
      { label: 'Braking', value: 'EABS + Dual Disc' },
      { label: 'Charging', value: '4 hrs (standard)' },
      { label: 'Motor', value: 'BLDC Hub Motor' },
      { label: 'Load Capacity', value: 'Commercial grade' },
    ],
  },
  {
    id: 'loader',
    name: 'Big Bull Loader',
    category: 'Cargo E-Rickshaw',
    tagline: 'Maximum load. Minimum cost.',
    description:
      'The Loader is purpose-built for last-mile cargo delivery. A deep-bed platform with reinforced suspension handles the demands of daily commercial transport on Indian roads.',
    image: '/loader-black.png',
    price: '',
    defaultFilter: 'grayscale(0.5) brightness(0.7) contrast(1.1)',
    specs: [
      { label: 'Range', value: '120 km (IDC)' },
      { label: 'Battery', value: 'High-capacity LFP' },
      { label: 'Braking', value: 'Disc Braking System' },
      { label: 'Charging', value: '5 hrs (standard)' },
      { label: 'Platform', value: 'Deep-bed cargo' },
      { label: 'Payload', value: 'Commercial rated' },
    ],
  },
  {
    id: 'glider',
    name: 'Big Bull Glider',
    category: 'Passenger E-Rickshaw',
    tagline: 'City precision. Passenger comfort.',
    description:
      'The Glider is designed for urban passenger mobility. Nimble, quiet, and efficient — it reduces operating costs while providing a comfortable ride for city commuters.',
    image: '/glider-blue.png',
    price: '',
    defaultFilter: 'sepia(0.5) saturate(2.5) hue-rotate(195deg) brightness(0.85)',
    specs: [
      { label: 'Range', value: '100 km (IDC)' },
      { label: 'Battery', value: 'Lithium-Ion' },
      { label: 'Braking', value: 'CBS + Disc' },
      { label: 'Charging', value: '3 hrs (standard)' },
      { label: 'Seating', value: 'Driver + 3 passengers' },
      { label: 'Suspension', value: 'Independent front' },
    ],
  },
  {
    id: 'cruiser',
    name: 'Big Bull Cruiser',
    category: 'Urban Mobility',
    tagline: 'Smooth. Silent. Stylish.',
    description: 'The Cruiser is designed for the modern commuter. Built with a lightweight chassis and smart power management, it offers exceptional range and maneuverability through city traffic.',
    image: '/scooter-1.png',
    price: '',
    defaultFilter: '',
    specs: [
      { label: 'Range', value: '110 km (IDC)' },
      { label: 'Battery', value: 'Premium Lithium-Ion' },
      { label: 'Braking', value: 'Dual Disc' },
      { label: 'Charging', value: '3.5 hrs (standard)' },
      { label: 'Motor', value: '3.0 kW BLDC' },
      { label: 'Top Speed', value: '65 km/h' },
    ],
  },
  {
    id: 'explorer',
    name: 'Big Bull Explorer',
    category: 'Adventure E-Scooter',
    tagline: 'Take the long way home.',
    description: 'Featuring enhanced suspension and all-terrain tires, the Explorer provides unmatched stability on rough roads while retaining the sleek aesthetics of a premium scooter.',
    image: '/scooter-2.png',
    price: '',
    defaultFilter: '',
    specs: [
      { label: 'Range', value: '130 km (IDC)' },
      { label: 'Battery', value: 'Extended LFP' },
      { label: 'Braking', value: 'EABS + Disc' },
      { label: 'Charging', value: '4.5 hrs (standard)' },
      { label: 'Motor', value: '4.0 kW BLDC' },
      { label: 'Suspension', value: 'Telescopic Front' },
    ],
  },
  {
    id: 'phantom',
    name: 'Big Bull Phantom',
    category: 'Sport E-Scooter',
    tagline: 'Uncompromising performance.',
    description: 'The Phantom delivers instantaneous torque and aggressive styling. Engineered for those who demand acceleration and precision handling in an electric package.',
    image: '/scooter-3.png',
    price: '',
    defaultFilter: '',
    specs: [
      { label: 'Range', value: '95 km (Sport Mode)' },
      { label: 'Battery', value: 'High-Discharge Li-Ion' },
      { label: 'Braking', value: 'Ventilated Disc' },
      { label: 'Charging', value: '2 hrs (Fast Charge)' },
      { label: 'Motor', value: '5.0 kW PMSM' },
      { label: 'Top Speed', value: '90 km/h' },
    ],
  },
  {
    id: 'alpha',
    name: 'Big Bull Alpha',
    category: 'Utility E-Scooter',
    tagline: 'Your reliable daily workhorse.',
    description: 'Purpose-built with heavy-duty racks and a durable frame, the Alpha is the ideal companion for gig-workers and delivery professionals needing dependability and range.',
    image: '/scooter-4.png',
    price: '',
    defaultFilter: '',
    specs: [
      { label: 'Range', value: '150 km (Eco Mode)' },
      { label: 'Battery', value: 'Dual Swappable' },
      { label: 'Braking', value: 'CBS' },
      { label: 'Charging', value: 'Battery Swap Supported' },
      { label: 'Motor', value: '2.5 kW Hub Motor' },
      { label: 'Payload', value: '150 kg' },
    ],
  },
  {
    id: 'nexus',
    name: 'Big Bull Nexus',
    category: 'Smart E-Scooter',
    tagline: 'Connected to your world.',
    description: 'The Nexus features our most advanced smart dashboard with integrated navigation, telemetry, and smartphone connectivity wrapped in a futuristic design.',
    image: '/scooter-5.png',
    price: '',
    defaultFilter: '',
    specs: [
      { label: 'Range', value: '120 km (IDC)' },
      { label: 'Battery', value: 'Lithium-Ion' },
      { label: 'Braking', value: 'Regenerative Disc' },
      { label: 'Charging', value: '4 hrs' },
      { label: 'Connectivity', value: '4G LTE / Bluetooth' },
      { label: 'Display', value: '7" TFT Touchscreen' },
    ],
  },
  {
    id: 'zenith',
    name: 'Big Bull Zenith',
    category: 'Premium E-Scooter',
    tagline: 'The pinnacle of electric mobility.',
    description: 'Crafted with premium materials and absolute attention to detail, the Zenith represents the finest electric riding experience with whisper-quiet operation and luxurious comfort.',
    image: '/scooter-6.png',
    price: '',
    defaultFilter: '',
    specs: [
      { label: 'Range', value: '140 km (IDC)' },
      { label: 'Battery', value: 'Aero-grade LFP' },
      { label: 'Braking', value: 'EABS + Dual Disc' },
      { label: 'Charging', value: '3 hrs' },
      { label: 'Motor', value: 'Liquid Cooled PMSM' },
      { label: 'Features', value: 'Cruise Control, Reverse' },
    ],
  }
]

// Legacy alias — MODELS kept so un-migrated imports do not break
export interface Model {
  id: string
  name: string
  tagline: string
  range: string
  battery: string
  braking: string
  charging: string
  description: string
  image: string
}

export const MODELS: Model[] = PRODUCTS.map((p) => ({
  id: p.id,
  name: p.name,
  tagline: p.tagline,
  range: p.specs.find((s) => s.label === 'Range')?.value ?? '',
  battery: p.specs.find((s) => s.label === 'Battery')?.value ?? '',
  braking: p.specs.find((s) => s.label === 'Braking')?.value ?? '',
  charging: p.specs.find((s) => s.label === 'Charging')?.value ?? '',
  description: p.description,
  image: p.image,
}))
