// lib/membership.ts
export interface MembershipTier {
  slug: string;
  name: string;
  price: string;
  priceNote: string; // "No expiration" / "Valid until Dec 31" / "Free"
  benefits: string[];
  highlight?: boolean; // visually emphasize (Lifetime)
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    slug: "lifetime",
    name: "Lifetime Membership",
    price: "$500",
    priceNote: "No expiration",
    highlight: true,
    benefits: [
      "Voting rights in all elections",
      "No annual dues — one-time payment only",
      "Supports charitable projects like corneal transplants",
      "Recognition as a lifelong contributor",
    ],
  },
  {
    slug: "annual",
    name: "Annual Membership",
    price: "$50",
    priceNote: "Membership year: Jan 1 – Dec 31",
    benefits: [
      "Voting rights in all elections",
      "Supports meeting and office expenses",
      "Remaining funds support charitable projects",
    ],
  },
  {
    slug: "allied",
    name: "Allied / Non-Working Physician Lifetime",
    price: "$250",
    priceNote: "No expiration",
    benefits: [
      "For allied health professionals and non-working physicians",
      "One-time payment, lifetime standing",
    ],
  },
  {
    slug: "resident",
    name: "Resident / Fellow",
    price: "Free",
    priceNote: "Renews annually",
    benefits: [
      "Open to current residents and fellows",
      "Full community access while training",
    ],
  },
];