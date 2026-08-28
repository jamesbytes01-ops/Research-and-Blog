import { Guide } from '@/types';

export const GUIDES_DATA: Guide[] = [
  {
    slug: 'how-to-install-webroot-on-windows',
    title: 'How to Download and Install Webroot on Windows 11 & 10',
    category: 'installation',
    description: 'Complete step-by-step walkthrough for downloading, installing, and running your first Webroot SecureAnywhere scan on Windows PCs.',
    platform: 'windows',
    readingTime: '4 min read',
    publishedDate: '2026-01-15',
    updatedDate: '2026-08-01',
    lastVerified: '2026-08-01',
    prerequisites: [
      'Active internet connection',
      'Valid 20-character Webroot Keycode (xxxx-xxxx-xxxx-xxxx-xxxx)',
      'Administrator rights on Windows PC'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Download the Webroot Installer',
        description: 'Navigate to the official Webroot download page or click your confirmation email link. Download the `wsainstall.exe` file (approx. 4MB-5MB). Save it to your Downloads folder.',
        warningOrNote: 'IMPORTANT: Always download installers from official Webroot web domains to avoid rogue third-party adware.'
      },
      {
        stepNumber: 2,
        title: 'Run the Setup Executable',
        description: 'Locate `wsainstall.exe` in your Downloads folder and double-click it. When the Windows User Account Control (UAC) prompt appears asking "Do you want to allow this app to make changes to your device?", click Yes.',
        codeOrKeyLocation: 'Downloads > wsainstall.exe'
      },
      {
        stepNumber: 3,
        title: 'Enter Your 20-Character Keycode',
        description: 'The Webroot installer box will appear. Enter your 20-character product keycode into the field provided. Click Agree and Install.',
        codeOrKeyLocation: 'Format: XXXX-XXXX-XXXX-XXXX-XXXX'
      },
      {
        stepNumber: 4,
        title: 'Complete Initial Configuration & First Scan',
        description: 'Webroot will establish a connection to the cloud threat database, configure system shields, and automatically run a fast initial deep scan of your system processes and startup files (takes 1-2 minutes).'
      },
      {
        stepNumber: 5,
        title: 'Confirm Active Protection Status',
        description: 'Look for the green Webroot icon in your Windows notification area (bottom right taskbar). Open the main console interface to verify "You are protected" status.'
      }
    ],
    commonTroubleshooting: [
      {
        title: 'Installer stuck on "Analyzing System Requirements"',
        solution: 'Check your internet connection. Ensure Windows Firewall or third-party DNS is not blocking `*.webrootanywhere.com` endpoints.'
      },
      {
        title: 'Invalid Keycode Error during installation',
        solution: 'Verify keycode characters. Common confusions include mistaking "8" for "B", "0" for "O", or trailing spaces when copy-pasting.'
      }
    ],
    sources: [
      {
        title: 'Official Webroot Windows Installation Guide',
        url: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=12&app=vw&solutionid=1028',
        publisher: 'OpenText / Webroot Documentation',
        accessedAt: '2026-08-01'
      }
    ],
    relatedProductSlugs: ['webroot-antivirus', 'webroot-internet-security-plus', 'webroot-internet-security-complete'],
    relatedGuideSlugs: ['where-to-find-webroot-keycode', 'webroot-activation-troubleshooting']
  },
  {
    slug: 'how-to-install-webroot-on-mac',
    title: 'How to Install Webroot SecureAnywhere on macOS',
    category: 'installation',
    description: 'Detailed instructions for installing Webroot on macOS including required Accessibility and Full Disk Access permissions.',
    platform: 'mac',
    readingTime: '5 min read',
    publishedDate: '2026-02-10',
    updatedDate: '2026-08-01',
    lastVerified: '2026-08-01',
    prerequisites: [
      'macOS 11 (Big Sur) or higher',
      'Administrator Account Password on Mac',
      '20-Character Webroot Keycode'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Download Webroot SecureAnywhere for Mac',
        description: 'Download `wsamac.dmg` from the official Webroot account manager or download link.'
      },
      {
        stepNumber: 2,
        title: 'Mount DMG and Launch Webroot SecureAnywhere App',
        description: 'Double-click `wsamac.dmg` to mount the disk image, then double-click the Webroot SecureAnywhere icon.'
      },
      {
        stepNumber: 3,
        title: 'Enter Keycode & Administrator Password',
        description: 'Enter your keycode when prompted, then type your Mac administrator password to approve system extension installation.'
      },
      {
        stepNumber: 4,
        title: 'Grant macOS Privacy & Security Permissions',
        description: 'Open macOS System Settings > Privacy & Security. Enable "Full Disk Access" and "Accessibility" permissions for Webroot SecureAnywhere so the real-time engine can scan system files.',
        warningOrNote: 'CRITICAL: Without Full Disk Access enabled in macOS System Settings, Webroot cannot scan protected system areas.'
      },
      {
        stepNumber: 5,
        title: 'Verify Menu Bar Icon',
        description: 'Confirm the Webroot shield icon appears in the macOS top menu bar.'
      }
    ],
    commonTroubleshooting: [
      {
        title: 'System Extension Blocked alert on macOS',
        solution: 'Go to System Settings > Privacy & Security, scroll to Security section, click "Allow" next to OpenText / Webroot extension.'
      }
    ],
    sources: [
      {
        title: 'Mac Installation and Authorization Steps',
        url: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=12&app=vw&solutionid=1969',
        publisher: 'Webroot Knowledge Base',
        accessedAt: '2026-08-01'
      }
    ],
    relatedProductSlugs: ['webroot-antivirus', 'webroot-internet-security-plus'],
    relatedGuideSlugs: ['how-to-install-webroot-on-windows']
  },
  {
    slug: 'where-to-find-webroot-keycode',
    title: 'Where to Find Your Webroot 20-Character Keycode',
    category: 'activation',
    description: 'Learn how to locate your lost or existing Webroot product keycode from email confirmation receipts, retail boxes, or installed desktop software.',
    readingTime: '3 min read',
    publishedDate: '2026-01-20',
    updatedDate: '2026-08-01',
    lastVerified: '2026-08-01',
    steps: [
      {
        stepNumber: 1,
        title: 'Check Your Order Confirmation Email',
        description: 'Search your email inbox for "Webroot Keycode", "Webroot Order", or "Webroot Purchase Confirmation". Look for a 20-character alphanumeric string formatted as 5 groups of 4 characters.'
      },
      {
        stepNumber: 2,
        title: 'Locate Keycode on Retail Box or Card',
        description: 'If purchased in a retail store (Best Buy, Amazon boxed version), look at the sticker on the back of the card inside the physical packaging.'
      },
      {
        stepNumber: 3,
        title: 'Retrieve Keycode from Currently Installed Webroot Console',
        description: 'Open Webroot SecureAnywhere on an active PC. Click My Account (gear icon next to My Account). Your keycode will be displayed with middle digits masked or visible.'
      },
      {
        stepNumber: 4,
        title: 'Log Into Webroot Management Portal',
        description: 'Sign in to `my.webrootanywhere.com`. Navigate to Subscription / Keycode Management tab to view active product keys registered under your account email.'
      }
    ],
    sources: [
      {
        title: 'Finding Your Webroot Keycode',
        url: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=12&app=vw&solutionid=1025',
        publisher: 'Webroot Support',
        accessedAt: '2026-08-01'
      }
    ],
    relatedGuideSlugs: ['webroot-activation-troubleshooting', 'how-to-reinstall-webroot']
  },
  {
    slug: 'webroot-activation-troubleshooting',
    title: 'How to Fix Webroot Keycode Activation Errors',
    category: 'troubleshooting',
    description: 'Step-by-step solutions for "Invalid Keycode", "Keycode Expired", and "Activation Server Connection Failed" error messages.',
    readingTime: '4 min read',
    publishedDate: '2026-02-01',
    updatedDate: '2026-08-01',
    lastVerified: '2026-08-01',
    steps: [
      {
        stepNumber: 1,
        title: 'Verify Keycode Formatting',
        description: 'Double check character entries. Webroot keycodes do not contain the letters "O" or "I" to avoid confusion with zero (0) or one (1).'
      },
      {
        stepNumber: 2,
        title: 'Check PC Date & Time Settings',
        description: 'Incorrect system date or time zone settings break SSL certificate validation with Webroot activation servers. Ensure Windows/Mac time is synchronized automatically.'
      },
      {
        stepNumber: 3,
        title: 'Verify Internet Access & DNS Resolution',
        description: 'Open a web browser and confirm you can access `my.webrootanywhere.com`. Temporarily disable custom VPNs or proxy settings during keycode submission.'
      },
      {
        stepNumber: 4,
        title: 'Re-activate Keycode in Console',
        description: 'Open Webroot, click "My Account" > enter the new keycode in the right-hand panel box and click "Activate".'
      }
    ],
    sources: [
      {
        title: 'Webroot Activation Troubleshooting Guide',
        url: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=12&app=vw&solutionid=1001',
        publisher: 'Webroot Documentation',
        accessedAt: '2026-08-01'
      }
    ],
    relatedGuideSlugs: ['where-to-find-webroot-keycode', 'how-to-reinstall-webroot']
  },
  {
    slug: 'how-to-reinstall-webroot',
    title: 'How to Reinstall Webroot Without Losing Subscription Days',
    category: 'getting-started',
    description: 'How to perform a clean reinstallation of Webroot SecureAnywhere on formatted computers or after OS updates.',
    readingTime: '4 min read',
    publishedDate: '2026-03-01',
    updatedDate: '2026-08-01',
    lastVerified: '2026-08-01',
    steps: [
      {
        stepNumber: 1,
        title: 'Locate Active Subscription Keycode',
        description: 'Ensure you have your 20-character keycode available before uninstalling.'
      },
      {
        stepNumber: 2,
        title: 'Uninstall Existing Installation',
        description: 'Use Windows Apps & Features to uninstall Webroot SecureAnywhere or run the installer command clean flag if damaged.'
      },
      {
        stepNumber: 3,
        title: 'Download Fresh Official Installer',
        description: 'Download the latest `wsainstall.exe` build from `webroot.com`.'
      },
      {
        stepNumber: 4,
        title: 'Install & Reactivate',
        description: 'Run setup, enter your existing keycode. Subscription days automatically remain synced from cloud records.'
      }
    ],
    sources: [
      {
        title: 'Reinstalling Webroot SecureAnywhere',
        url: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=12&app=vw&solutionid=1028',
        publisher: 'Webroot Knowledge Base',
        accessedAt: '2026-08-01'
      }
    ],
    relatedGuideSlugs: ['how-to-uninstall-webroot-completely', 'how-to-install-webroot-on-windows']
  },
  {
    slug: 'how-to-uninstall-webroot-completely',
    title: 'How to Uninstall Webroot SecureAnywhere Completely',
    category: 'uninstallation',
    description: 'Guide for cleanly removing Webroot software from Windows or Mac computers when normal uninstallation fails.',
    readingTime: '4 min read',
    publishedDate: '2026-03-15',
    updatedDate: '2026-08-01',
    lastVerified: '2026-08-01',
    steps: [
      {
        stepNumber: 1,
        title: 'Standard Windows Uninstall',
        description: 'Open Settings > Apps > Installed apps. Search for Webroot SecureAnywhere, click Uninstall and follow prompts.'
      },
      {
        stepNumber: 2,
        title: 'Command Prompt Forced Uninstall (If Needed)',
        description: 'If uninstallation is blocked or password protected, open Command Prompt as Administrator and run: `"C:\\Program Files\\Webroot\\WRSA.exe" -uninstall`',
        codeOrKeyLocation: '"C:\\Program Files\\Webroot\\WRSA.exe" -uninstall'
      },
      {
        stepNumber: 3,
        title: 'Standard Mac Uninstall',
        description: 'Open Webroot SecureAnywhere from Applications, click Webroot dropdown in top menu bar > Uninstall Webroot SecureAnywhere.'
      }
    ],
    sources: [
      {
        title: 'Uninstalling Webroot SecureAnywhere',
        url: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=12&app=vw&solutionid=1013',
        publisher: 'Webroot Support',
        accessedAt: '2026-08-01'
      }
    ],
    relatedGuideSlugs: ['how-to-reinstall-webroot']
  },
  {
    slug: 'webroot-scan-stuck-troubleshooting',
    title: 'What to Do If Webroot Scan Is Stuck or Frozen',
    category: 'troubleshooting',
    description: 'Diagnose and resolve stuck scans caused by giant archive files, corrupted drive sectors, or system file locks.',
    readingTime: '4 min read',
    publishedDate: '2026-04-01',
    updatedDate: '2026-08-01',
    lastVerified: '2026-08-01',
    steps: [
      {
        stepNumber: 1,
        title: 'Check Scanning File Location',
        description: 'Observe the file path displayed in the scan dialog window to see which directory or file format is currently being processed.'
      },
      {
        stepNumber: 2,
        title: 'Cancel Scan and Clear Temporary Files',
        description: 'Cancel current scan. Run Disk Cleanup (`cleanmgr`) to remove huge temp files or massive `.iso` archives.'
      },
      {
        stepNumber: 3,
        title: 'Exclude Giant Compressed Archives',
        description: 'In Webroot settings > System Control > Custom Scan settings, toggle off archive deep scanning if scanning 50GB+ compressed archives.'
      }
    ],
    sources: [
      {
        title: 'Webroot Scan Performance Troubleshooting',
        url: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=12&app=vw&solutionid=1055',
        publisher: 'Webroot Support',
        accessedAt: '2026-08-01'
      }
    ],
    relatedGuideSlugs: ['how-to-install-webroot-on-windows']
  },
  {
    slug: 'how-to-install-webroot-on-android',
    title: 'How to Install Webroot Mobile Security on Android',
    category: 'installation',
    description: 'Step-by-step setup guide for protecting Android smartphones and tablets with Webroot Mobile Security.',
    platform: 'android',
    readingTime: '3 min read',
    publishedDate: '2026-04-10',
    updatedDate: '2026-08-01',
    lastVerified: '2026-08-01',
    steps: [
      {
        stepNumber: 1,
        title: 'Open Google Play Store',
        description: 'Search for "Webroot Mobile Security" in the Google Play Store.'
      },
      {
        stepNumber: 2,
        title: 'Install & Launch App',
        description: 'Tap Install. Once finished, open Webroot Mobile Security.'
      },
      {
        stepNumber: 3,
        title: 'Enter Keycode & Grant Accessibility Rights',
        description: 'Enter your 20-character keycode. Enable App Overlay and Accessibility permissions to allow real-time URL and app scanning.'
      }
    ],
    sources: [
      {
        title: 'Android Mobile Security Guide',
        url: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=12&app=vw&solutionid=1250',
        publisher: 'Webroot Mobile Documentation',
        accessedAt: '2026-08-01'
      }
    ],
    relatedProductSlugs: ['webroot-internet-security-plus', 'webroot-internet-security-complete']
  }
];
