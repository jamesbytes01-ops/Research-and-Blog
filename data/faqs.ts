import { FAQ } from '@/types';

export const FAQS_DATA: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What is Webroot SecureAnywhere?',
    answer: 'Webroot SecureAnywhere is a lightweight, cloud-based antivirus and cybersecurity suite developed by Webroot (an OpenText company). Unlike traditional antivirus software that requires large local definition updates, Webroot uses cloud threat intelligence to analyze files in real time.',
    category: 'general',
    officialLink: 'https://www.webroot.com/us/en/home/products/av'
  },
  {
    id: 'faq-2',
    question: 'How long does a Webroot scan take?',
    answer: 'Most Webroot scans complete in under 2 minutes (often around 20 to 60 seconds). Because it scans active system memory, processes, and registry startup items using cloud intelligence, it does not need to slowly read every unchanged file on your hard drive unless performing a deep custom scan.',
    category: 'products'
  },
  {
    id: 'faq-3',
    question: 'Where do I enter my Webroot keycode?',
    answer: 'During installation, you will be prompted to paste your 20-character keycode into the installer box. If Webroot is already installed, open Webroot SecureAnywhere on your computer, click "My Account" (or the gear icon next to My Account), enter your new keycode in the right-hand panel, and click "Activate".',
    category: 'activation',
    officialLink: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=12&app=vw&solutionid=1025'
  },
  {
    id: 'faq-4',
    question: 'Does Webroot slow down my PC or games?',
    answer: 'No. Webroot has one of the smallest performance footprints in the antivirus industry, taking up less than 5MB of disk space and under 15MB of RAM during active protection. It is engineered to prevent game lag, high ping times, or high CPU utilization.',
    category: 'products'
  },
  {
    id: 'faq-5',
    question: 'How do I download Webroot for a second computer?',
    answer: 'If your subscription covers multiple devices (such as Webroot Internet Security Plus or Complete), log into your account at my.webrootanywhere.com from the new computer, download the installer, and enter your existing 20-character keycode during setup.',
    category: 'download',
    officialLink: 'https://my.webrootanywhere.com'
  },
  {
    id: 'faq-6',
    question: 'What devices and operating systems does Webroot support?',
    answer: 'Webroot supports Windows 11, 10, 8.1 (32-bit & 64-bit), macOS 11 (Big Sur) and newer, Android devices (Android 8.0+), Apple iOS (iOS 14.0+), and Chromebooks with Google Play support enabled.',
    category: 'general'
  },
  {
    id: 'faq-7',
    question: 'What should I do if Webroot blocks a safe website?',
    answer: 'If Webroot Web Threat Shield blocks a safe website, open Webroot SecureAnywhere, go to Utilities > Web Threat Shield > View Blocked Sites. You can manually request unblocking or add the domain to your local whitelist if you know it is trustworthy.',
    category: 'troubleshooting',
    officialLink: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=12&app=vw&solutionid=1055'
  },
  {
    id: 'faq-8',
    question: 'How do I transfer my Webroot license to a new PC?',
    answer: 'First, uninstall Webroot from your old computer. Then download the installer on your new computer and enter your existing 20-character keycode. If your device count limit is reached, manage active devices inside your my.webrootanywhere.com portal dashboard.',
    category: 'subscription'
  },
  {
    id: 'faq-9',
    question: 'What is Webroot Secure VPN?',
    answer: 'Webroot Secure VPN is a virtual private network service that encrypts your web traffic with AES-256 bit encryption. It protects your personal passwords, banking details, and IP address when connected to public Wi-Fi networks.',
    category: 'vpn'
  },
  {
    id: 'faq-10',
    question: 'How do I completely uninstall Webroot from Windows?',
    answer: 'Open Windows Settings > Apps > Installed Apps. Find Webroot SecureAnywhere, click Uninstall. Alternatively, open Command Prompt as Administrator and execute: "C:\\Program Files\\Webroot\\WRSA.exe" -uninstall',
    category: 'installation'
  }
];
