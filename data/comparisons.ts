import { ComparisonPage } from '@/types';

export const COMPARISONS_DATA: ComparisonPage[] = [
  {
    slug: 'webroot-vs-norton-360',
    title: 'Webroot vs Norton 360: Detailed Comparison',
    subtitle: 'System Impact, Scan Speed, Features, and Independent Test Evaluation',
    competitorName: 'Norton 360',
    category: 'antivirus',
    webrootProductSlug: 'webroot-internet-security-plus',
    overview: 'Webroot SecureAnywhere and Norton 360 represent two distinct antivirus design philosophies. Webroot prioritizes an ultra-lightweight, 5MB cloud-based architecture that scans in under 2 minutes with zero system drag. Norton 360 offers a heavier, feature-packed security ecosystem including integrated dark web monitoring, cloud backup, and bundled VPN options.',
    verdict: 'Choose Webroot if you want ultra-fast scans, minimal RAM/disk usage, and zero system slowdown. Choose Norton 360 if you require full identity theft restoration services and bundled dark web monitoring out of the box.',
    lastVerified: '2026-08-01',
    items: [
      {
        featureName: 'Installer File Size',
        category: 'System Footprint',
        webrootStatus: 'included',
        webrootDetails: '< 5 MB (Installs in seconds)',
        competitorStatus: 'included',
        competitorDetails: '~500 MB (Requires longer setup)'
      },
      {
        featureName: 'Average RAM Usage',
        category: 'System Footprint',
        webrootStatus: 'included',
        webrootDetails: '10 - 15 MB RAM during active protection',
        competitorStatus: 'included',
        competitorDetails: '150 - 350 MB RAM'
      },
      {
        featureName: 'Average Full Scan Duration',
        category: 'Performance',
        webrootStatus: 'included',
        webrootDetails: '1 to 2 minutes',
        competitorStatus: 'included',
        competitorDetails: '15 to 45 minutes'
      },
      {
        featureName: 'Real-Time Cloud Scanning',
        category: 'Antivirus Engine',
        webrootStatus: 'included',
        webrootDetails: 'Real-Time BrightCloud Intelligence Network',
        competitorStatus: 'included',
        competitorDetails: 'Hybrid Cloud & Local Signatures'
      },
      {
        featureName: 'Ransomware Rollback Shield',
        category: 'Antivirus Engine',
        webrootStatus: 'included',
        webrootDetails: 'Behavioral journaling & unencrypted file restore',
        competitorStatus: 'included',
        competitorDetails: 'Behavioral monitoring & Ransomware Protection'
      },
      {
        featureName: 'Web Threat & Phishing Protection',
        category: 'Network & Privacy',
        webrootStatus: 'included',
        webrootDetails: 'Web Threat Shield (Real-time URL scoring)',
        competitorStatus: 'included',
        competitorDetails: 'Norton Safe Web'
      },
      {
        featureName: 'Password Manager',
        category: 'Privacy Tools',
        webrootStatus: 'included',
        webrootDetails: 'LastPass Integration (Plus & Complete plans)',
        competitorStatus: 'included',
        competitorDetails: 'Norton Password Manager'
      },
      {
        featureName: 'VPN Option',
        category: 'Privacy Tools',
        webrootStatus: 'addon',
        webrootDetails: 'Webroot Secure VPN (Available standalone or in bundle)',
        competitorStatus: 'included',
        competitorDetails: 'Norton Secure VPN (Included in Deluxe/Select plans)'
      }
    ],
    sources: [
      {
        title: 'Webroot SecureAnywhere Official Specifications',
        url: 'https://www.webroot.com/us/en/home/products/av',
        publisher: 'Webroot / OpenText',
        accessedAt: '2026-08-01'
      },
      {
        title: 'Norton 360 Plan Comparison',
        url: 'https://us.norton.com/products/norton-360-deluxe',
        publisher: 'Gen Digital / Norton',
        accessedAt: '2026-08-01'
      }
    ]
  },
  {
    slug: 'webroot-vs-bitdefender-total-security',
    title: 'Webroot vs Bitdefender Total Security: Feature & Speed Comparison',
    subtitle: 'Comparing Light Cloud Defense Against Full-Suite Endpoint Protection',
    competitorName: 'Bitdefender Total Security',
    category: 'complete-security',
    webrootProductSlug: 'webroot-internet-security-complete',
    overview: 'Bitdefender is renowned for top-tier independent laboratory detection scores and comprehensive privacy tools, but comes with a larger system footprint. Webroot excels in background performance, offering lightning-fast scans without impacting high-end workstations or gaming PCs.',
    verdict: 'Webroot is recommended for users seeking maximum system responsiveness, fast scans, and lightweight protection. Bitdefender is ideal for users looking for granular firewall controls and built-in anti-tracker features.',
    lastVerified: '2026-08-01',
    items: [
      {
        featureName: 'Installation Size',
        category: 'System Footprint',
        webrootStatus: 'included',
        webrootDetails: 'Under 5 MB',
        competitorStatus: 'included',
        competitorDetails: 'Over 400 MB'
      },
      {
        featureName: 'Scan Speed',
        category: 'Performance',
        webrootStatus: 'included',
        webrootDetails: 'Under 120 seconds',
        competitorStatus: 'included',
        competitorDetails: '10 to 30 minutes'
      },
      {
        featureName: 'Multi-Device Support (Win/Mac/Android/iOS)',
        category: 'Device Support',
        webrootStatus: 'included',
        webrootDetails: 'Available in Plus & Complete plans',
        competitorStatus: 'included',
        competitorDetails: 'Total Security includes multi-platform support'
      },
      {
        featureName: 'Cloud Backup Storage',
        category: 'Backup',
        webrootStatus: 'included',
        webrootDetails: '25GB Encrypted Backup (Complete plan)',
        competitorStatus: 'not-included',
        competitorDetails: 'Requires separate subscription'
      }
    ],
    sources: [
      {
        title: 'Bitdefender Total Security Overview',
        url: 'https://www.bitdefender.com',
        publisher: 'Bitdefender Labs',
        accessedAt: '2026-08-01'
      }
    ]
  },
  {
    slug: 'webroot-vs-microsoft-defender',
    title: 'Webroot vs Microsoft Defender: Is Built-In Windows Protection Enough?',
    subtitle: 'Evaluating Windows 11 Free Security vs Dedicated Webroot Cloud Protection',
    competitorName: 'Microsoft Defender',
    category: 'antivirus',
    webrootProductSlug: 'webroot-antivirus',
    overview: 'Microsoft Defender comes pre-installed for free on Windows 10 and 11. While Defender has improved significantly, Webroot provides vital extra layers including real-time keylogger defense, identity shielding, faster scan times, and cross-platform Mac/mobile support.',
    verdict: 'Microsoft Defender offers baseline protection for budget users. Webroot adds dedicated anti-phishing, keyboard encryption, rapid cloud scanning, and multi-platform coverage.',
    lastVerified: '2026-08-01',
    items: [
      {
        featureName: 'Real-Time Anti-Phishing Shield',
        category: 'Network Protection',
        webrootStatus: 'included',
        webrootDetails: 'Web Threat Shield (Works across Chrome, Firefox, Edge, Safari)',
        competitorStatus: 'included',
        competitorDetails: 'Microsoft SmartScreen (Primary optimization for Edge)'
      },
      {
        featureName: 'Identity & Keylogger Protection',
        category: 'Identity Security',
        webrootStatus: 'included',
        webrootDetails: 'Identity Shield encrypts keystrokes in browser',
        competitorStatus: 'not-included',
        competitorDetails: 'No dedicated keystroke encryption'
      },
      {
        featureName: 'Cross-Platform Management',
        category: 'Platform',
        webrootStatus: 'included',
        webrootDetails: 'Single console for Windows, Mac, Android, iOS',
        competitorStatus: 'not-included',
        competitorDetails: 'Personal Defender app requires Microsoft 365 tier'
      }
    ],
    sources: [
      {
        title: 'Microsoft Security Documentation',
        url: 'https://www.microsoft.com/security',
        publisher: 'Microsoft Security',
        accessedAt: '2026-08-01'
      }
    ]
  }
];
