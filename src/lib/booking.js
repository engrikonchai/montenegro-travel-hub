// Builds a plain (non-affiliate) Booking.com search URL for a given city.
// Once a Booking.com affiliate account is approved, add the affiliate ID
// here — this is the one place that needs to change, and every link on the
// hotels page updates automatically. At that point, also consider swapping
// the search links for an embedded Booking.com affiliate widget or
// hand-picked hotel cards instead.
export function buildBookingUrl(city) {
  const params = new URLSearchParams({ ss: `${city}, Montenegro` });
  // TODO: once approved, uncomment and fill in your Booking.com affiliate ID:
  // params.set("aid", "YOUR_AFFILIATE_ID");
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

// Same as buildBookingUrl(), but pre-fills the search with a specific hotel's
// name so the card links to that property rather than a generic city search.
// When the affiliate ID is added above, add it here too (same `aid` param).
export function buildHotelBookingUrl(hotelName, cityName) {
  const params = new URLSearchParams({ ss: `${hotelName}, ${cityName}, Montenegro` });
  // TODO: once approved, uncomment and fill in your Booking.com affiliate ID:
  // params.set("aid", "YOUR_AFFILIATE_ID");
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}
