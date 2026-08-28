import { Product } from '@/types';

export const PRODUCTS_DATA: Product[] = [
  {
    slug: 'webroot-antivirus',
    name: 'Webroot SecureAnywhere AntiVirus',
    tagline: 'Lightweight, ultra-fast real-time cloud antivirus for PC and Mac.',
    category: 'antivirus',
    description: 'Webroot SecureAnywhere AntiVirus provides cloud-driven real-time threat protection against viruses, malware, ransomware, keyloggers, and phishing links. Featuring a tiny footprint of under 5MB, it installs in seconds and scans in under 20 seconds without slowing down system performance.',
    shortDescription: 'Essential real-time protection against viruses, malware, keyloggers, and ransomware for 1 PC or Mac.',
    supportedPlatforms: ['windows', 'mac'],
    deviceLimit: '1 PC or Mac (Multi-device plans available)',
    features: [
      'Real-Time Cloud Security',
      'Ransomware Rollback Shield',
      'Web Threat Shield',
      'Real-Time Anti-Phishing',
      'Identity & Data Shield',
      'Fast 20-Second Scans'
    ],
    pros: [
      'Ultra-lightweight installation file (less than 5MB)',
      'Scans complete in under 20 seconds',
      'Does not slow down system startup or RAM usage',
      'Behavioral cloud engine detects zero-day malware'
    ],
    considerations: [
      'Requires internet connection for full cloud threat intelligence lookup',
      'Does not include password manager or cloud backup (available in higher tiers)',
      'Basic tier is limited to PC and Mac (does not include mobile app support)'
    ],
    systemRequirements: {
      os: ['Windows 11, 10, 8.1, 8 (32-bit & 64-bit)', 'macOS 11 (Big Sur) or higher'],
      ram: '2 GB RAM minimum',
      diskSpace: '15 MB free hard drive space',
      browser: ['Google Chrome', 'Mozilla Firefox', 'Microsoft Edge', 'Apple Safari']
    },
    targetAudience: 'Individual users looking for lightweight, hassle-free computer protection without system lag.',
    officialUrl: 'https://www.webroot.com/us/en/home/products/av',
    supportUrl: 'https://answers.webroot.com/Webroot/ukp.aspx',
    downloadUrl: 'https://www.webroot.com/us/en/home/products/av',
    lastVerified: '2026-08-01',
    isPopular: true
  },
  {
    slug: 'webroot-internet-security-plus',
    name: 'Webroot Internet Security Plus',
    tagline: 'Multi-device security protecting PCs, Macs, smartphones, and tablets.',
    category: 'antivirus',
    description: 'Webroot Internet Security Plus expands essential protection across up to 3 or 5 devices, covering Windows, macOS, Android, and iOS. Includes an integrated LastPass password manager to create, encrypt, and sync strong master passwords across mobile and desktop devices.',
    shortDescription: 'Multi-device protection for PCs, Macs, Android, and iOS with integrated password management.',
    supportedPlatforms: ['windows', 'mac', 'android', 'ios'],
    deviceLimit: '3 to 5 PCs, Macs, Smartphones, or Tablets',
    features: [
      'Real-Time Cloud Security',
      'Ransomware Rollback Shield',
      'Web Threat Shield',
      'Real-Time Anti-Phishing',
      'Identity & Data Shield',
      'Mobile Security for Android & iOS',
      'Password Manager (LastPass Integration)'
    ],
    pros: [
      'Single subscription covers multi-platform family devices',
      'Includes LastPass password management for secure log-ins',
      'Android app scans installed apps and SMS links for spyware',
      'Lightweight footprint across all desktop and mobile devices'
    ],
    considerations: [
      'iOS protection is focused on browser safety and network security due to iOS sandboxing limits',
      'Cloud storage backup is reserved for the Complete plan tier'
    ],
    systemRequirements: {
      os: ['Windows 11, 10, 8.1', 'macOS 11+', 'Android 8.0+', 'iOS 14.0+'],
      ram: '2 GB RAM minimum',
      diskSpace: '15 MB free space (Desktop), 20 MB (Mobile)',
      browser: ['Chrome', 'Firefox', 'Edge', 'Safari']
    },
    targetAudience: 'Families and individual power users managing multiple smartphones, laptops, and tablets.',
    officialUrl: 'https://www.webroot.com/us/en/home/products/plus',
    supportUrl: 'https://answers.webroot.com/Webroot/ukp.aspx',
    downloadUrl: 'https://www.webroot.com/us/en/home/products/plus',
    lastVerified: '2026-08-01',
    isPopular: true
  },
  {
    slug: 'webroot-internet-security-complete',
    name: 'Webroot Internet Security Complete',
    tagline: 'Ultimate security suite with system optimization and 25GB secure cloud backup.',
    category: 'antivirus',
    description: 'Webroot Internet Security Complete is Webroot’s top-tier security suite. It pairs real-time malware defense and mobile protection with a PC Optimizer to clean system clutter and 25GB of automated encrypted cloud backup for critical files.',
    shortDescription: 'Full security suite featuring multi-device protection, system optimizer, and 25GB encrypted cloud backup.',
    supportedPlatforms: ['windows', 'mac', 'android', 'ios'],
    deviceLimit: '5 Devices (PCs, Macs, Tablets, Mobile)',
    features: [
      'Real-Time Cloud Security',
      'Ransomware Rollback Shield',
      'Web Threat Shield',
      'Real-Time Anti-Phishing',
      'Identity & Data Shield',
      'Mobile Security for Android & iOS',
      'Password Manager (LastPass Integration)',
      'System Optimizer & Analyzer',
      '25GB Secure Cloud Backup'
    ],
    pros: [
      'Comprehensive security plus performance maintenance in one package',
      'Automatic backup safeguards files against ransomware corruption or hardware failure',
      'Wipes online privacy traces, cookies, and temporary cache files',
      'Protects 5 devices under one license key'
    ],
    considerations: [
      'System optimizer features are available for Windows PCs',
      '25GB cloud backup requires initial background upload setup'
    ],
    systemRequirements: {
      os: ['Windows 11, 10, 8.1', 'macOS 11+', 'Android 8.0+', 'iOS 14.0+'],
      ram: '2 GB RAM',
      diskSpace: '15 MB (Desktop installation)',
      browser: ['Chrome', 'Firefox', 'Edge', 'Safari']
    },
    targetAudience: 'Users who want complete security, online backup, and automatic PC performance cleanup.',
    officialUrl: 'https://www.webroot.com/us/en/home/products/complete',
    supportUrl: 'https://answers.webroot.com/Webroot/ukp.aspx',
    downloadUrl: 'https://www.webroot.com/us/en/home/products/complete',
    lastVerified: '2026-08-01',
    isPopular: false
  },
  {
    slug: 'webroot-gamers',
    name: 'Webroot AntiVirus for PC Gamers',
    tagline: 'Zero-lag antivirus built for competitive PC gaming.',
    category: 'antivirus',
    description: 'Webroot AntiVirus for PC Gamers delivers high-octane malware protection engineered to run silently without causing framerate drops, high latency, or interruptive pop-up notifications during active gaming sessions.',
    shortDescription: 'Ultra-fast antivirus engineered specifically for PC gamers without CPU slowdown or game pop-ups.',
    supportedPlatforms: ['windows'],
    deviceLimit: '1 PC',
    features: [
      'Silent Gaming Optimization',
      'Real-Time Cloud Security',
      'Ransomware Rollback Shield',
      'Web Threat Shield',
      'Identity & Data Shield',
      'Fast Background Scans'
    ],
    pros: [
      'Zero impact on FPS or game ping times',
      'Uses under 5MB of RAM during gameplay',
      'Suppresses notification alerts while in full-screen gaming mode',
      'Prevents malicious keyloggers from hijacking game accounts and passwords'
    ],
    considerations: [
      'Engineered specifically for Windows PC gaming rigs',
      'Does not include password manager or VPN'
    ],
    systemRequirements: {
      os: ['Windows 11, 10 (64-bit recommended)'],
      ram: '2 GB RAM (4 GB+ recommended for gaming)',
      diskSpace: '15 MB free space',
      browser: ['Chrome', 'Firefox', 'Edge']
    },
    targetAudience: 'PC gamers, streamers, and eSports enthusiasts needing strong security without sacrificing hardware performance.',
    officialUrl: 'https://www.webroot.com/us/en/home/products/gamers',
    supportUrl: 'https://answers.webroot.com/Webroot/ukp.aspx',
    downloadUrl: 'https://www.webroot.com/us/en/home/products/gamers',
    lastVerified: '2026-08-01',
    isPopular: false
  },
  {
    slug: 'webroot-chromebook',
    name: 'Webroot Security for Chromebook',
    tagline: 'Customized web and app security designed for ChromeOS.',
    category: 'antivirus',
    description: 'Webroot Security for Chromebook provides essential cloud defense against malicious Android apps, dangerous web extensions, phishing attempts, and network threats on ChromeOS devices.',
    shortDescription: 'Cloud-driven protection tailored for Chromebooks to block malicious extensions, phishing, and app threats.',
    supportedPlatforms: ['chromebook', 'android'],
    deviceLimit: '1 Chromebook',
    features: [
      'Real-Time Cloud Security',
      'Web Threat Shield',
      'Real-Time Anti-Phishing',
      'Malicious Extension Blocking',
      'App Security Scanner'
    ],
    pros: [
      'Seamlessly integrated with ChromeOS and Google Play Store apps',
      'Low battery usage and zero system lag',
      'Blocks phishing sites pretending to be Google Workspace logins'
    ],
    considerations: [
      'ChromeOS uses sandbox architecture; primary focus is web and app threat filtering'
    ],
    systemRequirements: {
      os: ['ChromeOS with Google Play support enabled'],
      ram: '2 GB RAM',
      diskSpace: '10 MB free space',
      browser: ['Google Chrome']
    },
    targetAudience: 'Students, remote workers, and Chromebook owners seeking extra web and app security.',
    officialUrl: 'https://www.webroot.com/us/en/home/products/chromebook',
    supportUrl: 'https://answers.webroot.com/Webroot/ukp.aspx',
    downloadUrl: 'https://www.webroot.com/us/en/home/products/chromebook',
    lastVerified: '2026-08-01'
  },
  {
    slug: 'webroot-secure-vpn',
    name: 'Webroot Secure VPN',
    tagline: 'Bank-grade encryption for private browsing and public Wi-Fi security.',
    category: 'privacy',
    description: 'Webroot Secure VPN encrypts your internet connection with AES-256 encryption, hiding your IP address and safeguarding private data over unsecured public Wi-Fi networks at airports, cafes, and hotels.',
    shortDescription: 'AES-256 encrypted VPN tunnel protecting online privacy, IP address, and public Wi-Fi connections.',
    supportedPlatforms: ['windows', 'mac', 'android', 'ios'],
    deviceLimit: 'Up to 5 devices',
    features: [
      'Webroot Secure VPN',
      'AES-256 Bit Encryption',
      'Automatic Public Wi-Fi Protection',
      'No Traffic Logs Policy',
      'Global Server Locations'
    ],
    pros: [
      'Prevents ISPs, hackers, and trackers from monitoring browsing history',
      'Automatic activation on untrusted public Wi-Fi networks',
      'Fast server connection speeds optimized for streaming and browsing',
      'Simple one-tap connection on mobile and desktop apps'
    ],
    considerations: [
      'Can be purchased standalone or bundled with Webroot security plans'
    ],
    systemRequirements: {
      os: ['Windows 11, 10', 'macOS 11+', 'Android 8.0+', 'iOS 14.0+'],
      ram: '2 GB RAM',
      diskSpace: '30 MB free space',
      browser: ['All major browsers']
    },
    targetAudience: 'Frequent travelers, mobile workers, and privacy-conscious users accessing public networks.',
    officialUrl: 'https://www.webroot.com/us/en/home/products/vpn',
    supportUrl: 'https://answers.webroot.com/Webroot/ukp.aspx',
    downloadUrl: 'https://www.webroot.com/us/en/home/products/vpn',
    lastVerified: '2026-08-01',
    isPopular: true
  },
  {
    slug: 'webroot-pc-optimizer',
    name: 'Webroot System Optimizer',
    tagline: 'Reclaim hard drive space and boost PC performance.',
    category: 'utility',
    description: 'Webroot System Optimizer analyzes your Windows PC, removing junk files, temporary browser caches, broken registry items, and privacy traces to restore peak system speed and reclaim valuable disk space.',
    shortDescription: 'Windows performance tool that cleans system junk, temp files, and browser privacy traces.',
    supportedPlatforms: ['windows'],
    deviceLimit: '1 Windows PC',
    features: [
      'System Optimizer & Analyzer',
      'Junk File Cleaner',
      'Privacy Trace Eraser',
      'Registry Clean Routine'
    ],
    pros: [
      'Frees up gigabytes of redundant system cache and temp files',
      'Removes browsing history traces across Chrome, Edge, and Firefox',
      'One-click optimization routine'
    ],
    considerations: [
      'Available exclusively for Windows PCs',
      'Included built-in with Webroot Internet Security Complete plan'
    ],
    systemRequirements: {
      os: ['Windows 11, 10, 8.1'],
      ram: '2 GB RAM',
      diskSpace: '10 MB free space',
      browser: ['Chrome', 'Firefox', 'Edge']
    },
    targetAudience: 'Windows users experiencing slow boot times, low disk space, or accumulated system clutter.',
    officialUrl: 'https://www.webroot.com/us/en/home/products/complete',
    supportUrl: 'https://answers.webroot.com/Webroot/ukp.aspx',
    downloadUrl: 'https://www.webroot.com/us/en/home/products/complete',
    lastVerified: '2026-08-01'
  }
];
