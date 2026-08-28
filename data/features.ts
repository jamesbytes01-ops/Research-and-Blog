import { Feature } from '@/types';

export const FEATURES_DATA: Feature[] = [
  {
    id: 'cloud-antivirus',
    name: 'Real-Time Cloud Security',
    description: 'Instant cloud threat database lookup that scans files in milliseconds without requiring heavy local signature updates.',
    category: 'antivirus',
    includedIn: ['webroot-antivirus', 'webroot-internet-security-plus', 'webroot-internet-security-complete', 'webroot-gamers', 'webroot-chromebook']
  },
  {
    id: 'web-threat-shield',
    name: 'Web Threat Shield',
    description: 'Real-time warning system and malicious URL filtering to prevent malware downloads and dangerous site visits.',
    category: 'network',
    includedIn: ['webroot-antivirus', 'webroot-internet-security-plus', 'webroot-internet-security-complete', 'webroot-gamers', 'webroot-chromebook']
  },
  {
    id: 'anti-phishing',
    name: 'Real-Time Anti-Phishing',
    description: 'Proactive detection of spoofed banking, email, and storefront login pages to stop credential theft before entry.',
    category: 'identity',
    includedIn: ['webroot-antivirus', 'webroot-internet-security-plus', 'webroot-internet-security-complete', 'webroot-gamers', 'webroot-chromebook']
  },
  {
    id: 'identity-shield',
    name: 'Identity & Data Shield',
    description: 'Encrypted keyboard input and browser sandboxing to shield usernames, passwords, credit card numbers, and PII from keyloggers.',
    category: 'identity',
    includedIn: ['webroot-antivirus', 'webroot-internet-security-plus', 'webroot-internet-security-complete', 'webroot-gamers']
  },
  {
    id: 'ransomware-protection',
    name: 'Ransomware Rollback Shield',
    description: 'Behavioral analysis engine that isolates unknown executables in a sandbox and automatically reverts modified files if ransomware activity is detected.',
    category: 'antivirus',
    includedIn: ['webroot-antivirus', 'webroot-internet-security-plus', 'webroot-internet-security-complete', 'webroot-gamers']
  },
  {
    id: 'password-manager',
    name: 'Password Manager (LastPass Integration)',
    description: 'Encrypted master key password storage, autofill, and cross-device password sync powered by LastPass.',
    category: 'privacy',
    includedIn: ['webroot-internet-security-plus', 'webroot-internet-security-complete']
  },
  {
    id: 'mobile-security',
    name: 'Mobile Security for Android & iOS',
    description: 'Dedicated protection against malicious mobile apps, dangerous SMS links, and unsecured public Wi-Fi networks.',
    category: 'privacy',
    includedIn: ['webroot-internet-security-plus', 'webroot-internet-security-complete']
  },
  {
    id: 'system-optimizer',
    name: 'System Optimizer & Analyzer',
    description: 'Cleans temporary internet trace files, system logs, cache clutter, and frees up system memory for maximum device speed.',
    category: 'performance',
    includedIn: ['webroot-internet-security-complete', 'webroot-pc-optimizer']
  },
  {
    id: 'cloud-backup',
    name: '25GB Secure Cloud Backup',
    description: 'Automatic encrypted cloud storage backup for important documents, family photos, and critical files.',
    category: 'privacy',
    includedIn: ['webroot-internet-security-complete']
  },
  {
    id: 'secure-vpn',
    name: 'Webroot Secure VPN',
    description: 'AES-256 encrypted VPN tunnel masking IP addresses and protecting online traffic across public Wi-Fi networks.',
    category: 'privacy',
    includedIn: ['webroot-secure-vpn', 'webroot-total-protection-pack']
  },
  {
    id: 'gamer-mode',
    name: 'Silent Gaming Optimization',
    description: 'Background scanning engine running quietly without pop-ups, CPU spikes, or framerate lag during full-screen gaming sessions.',
    category: 'performance',
    includedIn: ['webroot-gamers']
  }
];
