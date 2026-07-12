// Builds a plain (non-affiliate) Booking.com search URL for a given city.
// Once a Booking.com affiliate account is approved, add the affiliate ID
// here — this is the one place that needs to change.
export function buildBookingUrl(city) {
  const params = new URLSearchParams({ ss: `${city}, Montenegro` });
  // TODO: once approved, uncomment and fill in your Booking.com affiliate ID:
  // params.set("aid", "YOUR_AFFILIATE_ID");
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}
