import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export function getPlatformBadgeColor(platform: string): string {
  switch (platform.toLowerCase()) {
    case 'windows':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'mac':
      return 'bg-slate-100 text-slate-800 border-slate-300';
    case 'android':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'ios':
      return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    case 'chromebook':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
}
