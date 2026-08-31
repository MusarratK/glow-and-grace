// Offers & Promotions Data

export const specialOfferData = {
  title: "Glow More, Spend Less",
  discountBadge: "Flat 20% OFF",
  subtitle: "Special Season Discount",
  description: "Enjoy 20% off on all selected facial, hair spa, and luxury beauty care services this week!",
  code: "GLOW20",
  // Initial countdown hours relative to render time
  countdownHours: 48,
  buttonText: "Grab the Offer",
  validTill: "Limited Time Offer"
};

export const activeVouchers = [
  {
    id: "v1",
    title: "Flat 20% OFF Facials",
    code: "FACIAL20",
    discount: "20% OFF",
    validOn: "All Skin & Facial Services",
    expiry: "Valid till end of month"
  },
  {
    id: "v2",
    title: "Free Hair Spa with Keratin",
    code: "KERASPA",
    discount: "FREE SPA",
    validOn: "Keratin & Smoothening Packages",
    expiry: "Limited slots available"
  },
  {
    id: "v3",
    title: "Bridal Consultation Voucher",
    code: "BRIDAL1000",
    discount: "₹1,000 OFF",
    validOn: "Royal Bridal Packages above ₹4,999",
    expiry: "Pre-booking offer"
  }
];
