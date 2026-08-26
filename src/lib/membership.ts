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
    name: "Lifetime FJMCAANA Membership",
    price: "$500",
    priceNote: "No expiration",
    highlight: true,
    benefits: [
      "Voting rights in all elections",
      "No annual dues—one-time payment only",
      "Support charitable projects like corneal transplants",
      "Recognition as a lifelong contributor",
      "Stay part of the mission. Support, connect, and give back—forever.",
    ],
  },
  {
    slug: "annual",
    name: "Annual FJMCAANA Membership",
    price: "$50",
    priceNote: "Valid until August 24, 2027",
    benefits: [
      "Voting rights in all elections",
      "Supports meeting and office expenses",
      "Remaining funds support charitable projects",
      "Renews annually",
    ],
  },
  {
    slug: "allied",
    name: "Allied/Non-Working Physician Lifetime Membership",
    price: "$250",
    priceNote: "No expiration",
    benefits: [
      "For allied health professionals and non-working physicians",
      "One-time payment, lifetime standing",
      "Full community access and voting rights",
    ],
  },
  {
    slug: "resident",
    name: "Resident/Fellow Membership",
    price: "Free",
    priceNote: "Valid until August 24, 2027",
    benefits: [
      "Open to current residents and fellows",
      "Full community access while training",
      "Complimentary membership during training period",
    ],
  },
];