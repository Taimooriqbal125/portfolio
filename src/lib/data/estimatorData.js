export const ESTIMATOR_COPY = {
  heading: "Ballpark your project cost",
  sub: "Select features to get a rough estimate. Final quote provided after we review your requirements on a call.",
  email: "taimooriqbal308@gmail.com",
};

export const FEATURE_GROUPS = [
  {
    id: "auth",
    label: "Auth",
    items: [
      { id: "auth-email", label: "Email & Password Signup", price: 350 },
      { id: "auth-otp", label: "Phone Number OTP Login", price: 350 },
      { id: "auth-google", label: "Google Sign-In", price: 250 },
      { id: "auth-apple", label: "Apple Sign-In", price: 300 },
      { id: "auth-facebook", label: "Facebook Login", price: 400 },
      { id: "auth-mfa", label: "Multi-Factor Authentication", price: 150 },
      { id: "auth-forgot", label: "Forgot Password Flow", price: 130 },
    ],
  },
  {
    id: "core",
    label: "Core",
    items: [
      { id: "core-onboarding", label: "Onboarding & Profile", price: 400 },
      { id: "core-dashboard", label: "Home / Dashboard", price: 450 },
      { id: "core-search", label: "Search & Filters", price: 350 },
      { id: "core-cms", label: "CMS-backed Content", price: 300 },
    ],
  },
  {
    id: "chat",
    label: "Chat",
    items: [
      { id: "chat-1to1", label: "1-on-1 Messaging", price: 500 },
      { id: "chat-group", label: "Group Chats", price: 400 },
      { id: "chat-media", label: "Media & Voice Notes", price: 300 },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    items: [
      { id: "pay-stripe", label: "Stripe Card Payments", price: 600 },
      { id: "pay-sub", label: "Subscriptions", price: 450 },
      { id: "pay-wallet", label: "In-app Wallet", price: 500 },
    ],
  },
];

export const PLATFORMS = [
  { id: "ios", label: "iOS", multiplier: 1 },
  { id: "android", label: "Android", multiplier: 1 },
  { id: "both", label: "Both", multiplier: 1.6 },
];

export const HOURLY_CARD = {
  tagline: "Start Immediately",
  title: "Hourly Rate",
  rate: 45,
  note: "No commitment. Pay as you go.",
  perks: [
    "Start within 24–48 hours",
    "Flexible scope adjustments",
    "Weekly billing cycles",
    "Cancel anytime",
  ],
  cta: "Book hourly session",
  href: "https://calendly.com/taimooriqbal308/30min",
};