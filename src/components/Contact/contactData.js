import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";

// Replace these sample details with your real ones.
export const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: "hello@limonexa.com", href: "mailto:hello@limonexa.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210", href: "https://wa.me/919876543210" },
  { icon: MapPin, label: "Office", value: "Chennai, Tamil Nadu, India", href: null },
  { icon: Clock, label: "Business hours", value: "Mon – Sat, 9:30 AM – 6:30 PM IST", href: null },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

export const SERVICE_OPTIONS = [
  "AI Automation",
  "Web & App Development",
  "Custom Solutions",
  "Cloud & Integration",
  "Consulting & Strategy",
  "Not sure yet",
];

export const QUICK_FACTS = [
  "Reply within 1 working day",
  "Free consultation",
  "No obligation",
];


export const OFFICE = {
  heading: "Visit our office",
  address: ["Limonexa Business Automation", "Your Street Address, Area", "Chennai, Tamil Nadu 600001", "India"],
};
