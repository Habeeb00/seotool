// Static benchmark data for MVP
// Structure: "FROM-TO-CLASS" → { avg, low, high }

const benchmarkData = {
  // North America → Europe
  "NYC-LON-economy": { avg: 45000, low: 30000, high: 70000 },
  "NYC-LON-business": { avg: 85000, low: 57500, high: 140000 },
  "NYC-LON-first": { avg: 140000, low: 85000, high: 220000 },
  "NYC-CDG-economy": { avg: 48000, low: 32000, high: 72000 },
  "NYC-CDG-business": { avg: 90000, low: 60000, high: 145000 },
  "NYC-CDG-first": { avg: 145000, low: 90000, high: 230000 },
  "LAX-LON-economy": { avg: 50000, low: 35000, high: 75000 },
  "LAX-LON-business": { avg: 90000, low: 60000, high: 150000 },
  "SFO-LON-economy": { avg: 48000, low: 33000, high: 73000 },
  "SFO-LON-business": { avg: 88000, low: 58000, high: 148000 },
  "ORD-LON-economy": { avg: 47000, low: 31000, high: 71000 },
  "ORD-LON-business": { avg: 87000, low: 57000, high: 142000 },

  // North America → Asia
  "NYC-NRT-economy": { avg: 55000, low: 35000, high: 85000 },
  "NYC-NRT-business": { avg: 100000, low: 70000, high: 160000 },
  "NYC-NRT-first": { avg: 160000, low: 110000, high: 250000 },
  "NYC-HND-economy": { avg: 55000, low: 35000, high: 85000 },
  "NYC-HND-business": { avg: 100000, low: 70000, high: 160000 },
  "LAX-NRT-economy": { avg: 50000, low: 30000, high: 80000 },
  "LAX-NRT-business": { avg: 95000, low: 65000, high: 155000 },
  "LAX-HKG-economy": { avg: 52000, low: 32000, high: 82000 },
  "LAX-HKG-business": { avg: 98000, low: 68000, high: 158000 },
  "SFO-NRT-economy": { avg: 48000, low: 28000, high: 78000 },
  "SFO-NRT-business": { avg: 92000, low: 62000, high: 152000 },
  "SFO-SIN-economy": { avg: 55000, low: 35000, high: 85000 },
  "SFO-SIN-business": { avg: 95000, low: 65000, high: 155000 },

  // North America → Middle East
  "NYC-DXB-economy": { avg: 52000, low: 35000, high: 80000 },
  "NYC-DXB-business": { avg: 95000, low: 62500, high: 150000 },
  "NYC-DXB-first": { avg: 155000, low: 100000, high: 240000 },
  "LAX-DXB-economy": { avg: 55000, low: 38000, high: 82000 },
  "LAX-DXB-business": { avg: 100000, low: 65000, high: 155000 },
  "ORD-DXB-economy": { avg: 53000, low: 36000, high: 81000 },
  "ORD-DXB-business": { avg: 97000, low: 63000, high: 152000 },
  "NYC-DOH-economy": { avg: 50000, low: 33000, high: 78000 },
  "NYC-DOH-business": { avg: 90000, low: 60000, high: 145000 },

  // North America → South Asia
  "NYC-DEL-economy": { avg: 50000, low: 32000, high: 78000 },
  "NYC-DEL-business": { avg: 92000, low: 60000, high: 148000 },
  "NYC-BOM-economy": { avg: 50000, low: 32000, high: 78000 },
  "NYC-BOM-business": { avg: 92000, low: 60000, high: 148000 },
  "SFO-DEL-economy": { avg: 52000, low: 34000, high: 80000 },
  "SFO-DEL-business": { avg: 95000, low: 63000, high: 150000 },

  // Europe → Asia
  "LON-NRT-economy": { avg: 45000, low: 28000, high: 72000 },
  "LON-NRT-business": { avg: 85000, low: 55000, high: 140000 },
  "LON-SIN-economy": { avg: 48000, low: 30000, high: 75000 },
  "LON-SIN-business": { avg: 88000, low: 58000, high: 145000 },
  "LON-HKG-economy": { avg: 46000, low: 29000, high: 73000 },
  "LON-HKG-business": { avg: 86000, low: 56000, high: 142000 },
  "CDG-NRT-economy": { avg: 47000, low: 30000, high: 74000 },
  "CDG-NRT-business": { avg: 87000, low: 57000, high: 143000 },

  // Middle East → South Asia
  "DXB-DEL-economy": { avg: 25000, low: 15000, high: 45000 },
  "DXB-DEL-business": { avg: 50000, low: 30000, high: 80000 },
  "DXB-BOM-economy": { avg: 25000, low: 15000, high: 45000 },
  "DXB-BOM-business": { avg: 50000, low: 30000, high: 80000 },
  "DOH-DEL-economy": { avg: 23000, low: 14000, high: 42000 },
  "DOH-DEL-business": { avg: 48000, low: 28000, high: 78000 },

  // Intra-Europe
  "LON-CDG-economy": { avg: 12000, low: 7500, high: 22000 },
  "LON-CDG-business": { avg: 25000, low: 15000, high: 45000 },
  "LON-FCO-economy": { avg: 18000, low: 10000, high: 32000 },
  "LON-FCO-business": { avg: 35000, low: 22000, high: 58000 },

  // North America → South America
  "NYC-GRU-economy": { avg: 40000, low: 25000, high: 65000 },
  "NYC-GRU-business": { avg: 75000, low: 50000, high: 120000 },
  "MIA-GRU-economy": { avg: 35000, low: 22000, high: 58000 },
  "MIA-GRU-business": { avg: 70000, low: 45000, high: 115000 },

  // Transpacific
  "LAX-SYD-economy": { avg: 60000, low: 40000, high: 90000 },
  "LAX-SYD-business": { avg: 110000, low: 75000, high: 175000 },
  "LAX-SYD-first": { avg: 175000, low: 120000, high: 280000 },
  "SFO-SYD-economy": { avg: 58000, low: 38000, high: 88000 },
  "SFO-SYD-business": { avg: 108000, low: 73000, high: 172000 },
};

// Airport code → City name lookup
export const airportNames = {
  NYC: "New York", JFK: "New York", EWR: "Newark", LGA: "LaGuardia",
  LAX: "Los Angeles", SFO: "San Francisco", ORD: "Chicago", MIA: "Miami",
  LON: "London", LHR: "London Heathrow", CDG: "Paris", FCO: "Rome",
  NRT: "Tokyo Narita", HND: "Tokyo Haneda", HKG: "Hong Kong", SIN: "Singapore",
  DXB: "Dubai", DOH: "Doha", DEL: "Delhi", BOM: "Mumbai",
  GRU: "São Paulo", SYD: "Sydney",
};

// Popular airport codes for autocomplete/suggestions
export const popularAirports = [
  { code: "NYC", city: "New York", country: "US" },
  { code: "LAX", city: "Los Angeles", country: "US" },
  { code: "SFO", city: "San Francisco", country: "US" },
  { code: "ORD", city: "Chicago", country: "US" },
  { code: "MIA", city: "Miami", country: "US" },
  { code: "LON", city: "London", country: "UK" },
  { code: "CDG", city: "Paris", country: "FR" },
  { code: "FCO", city: "Rome", country: "IT" },
  { code: "NRT", city: "Tokyo Narita", country: "JP" },
  { code: "HND", city: "Tokyo Haneda", country: "JP" },
  { code: "HKG", city: "Hong Kong", country: "HK" },
  { code: "SIN", city: "Singapore", country: "SG" },
  { code: "DXB", city: "Dubai", country: "AE" },
  { code: "DOH", city: "Doha", country: "QA" },
  { code: "DEL", city: "Delhi", country: "IN" },
  { code: "BOM", city: "Mumbai", country: "IN" },
  { code: "GRU", city: "São Paulo", country: "BR" },
  { code: "SYD", city: "Sydney", country: "AU" },
];

/**
 * Lookup benchmark data for a given route + cabin class.
 * Tries both directions (FROM-TO and TO-FROM).
 */
export function getBenchmark(from, to, cabin) {
  const key1 = `${from}-${to}-${cabin}`.toUpperCase().replace(/-ECONOMY/, '-economy').replace(/-BUSINESS/, '-business').replace(/-FIRST/, '-first');
  const key2 = `${to}-${from}-${cabin}`.toUpperCase().replace(/-ECONOMY/, '-economy').replace(/-BUSINESS/, '-business').replace(/-FIRST/, '-first');

  const normalizeKey = (k) => {
    const parts = k.split('-');
    return `${parts[0]}-${parts[1]}-${parts[2].toLowerCase()}`;
  };

  return benchmarkData[normalizeKey(key1)] || benchmarkData[normalizeKey(key2)] || null;
}

/**
 * Compare user points against benchmark and generate verdict
 */
export function analyzeRedemption(userPoints, benchmark) {
  const { avg, low, high } = benchmark;
  const difference = userPoints - avg;
  const percentage = Math.round((difference / avg) * 100);

  let verdict, emoji, color, message, detailMessages;

  if (userPoints <= low) {
    verdict = "Excellent Deal";
    emoji = "🔥";
    color = "excellent";
    message = "You found an incredible redemption!";
    detailMessages = [
      `You're paying ${formatPoints(low - userPoints)} points less than the best known rate`,
      `This is in the top 5% of redemptions for this route`,
      `Outstanding value — don't second-guess this one`,
    ];
  } else if (userPoints <= avg) {
    verdict = "Good Value";
    emoji = "👍";
    color = "good";
    message = "This is a solid redemption.";
    detailMessages = [
      `You're paying ${formatPoints(avg - userPoints)} points below average`,
      `This route typically costs ${formatPoints(avg)}–${formatPoints(high)} points`,
      `You're getting better value than most travelers`,
    ];
  } else if (userPoints <= avg * 1.2) {
    verdict = "Slightly Expensive";
    emoji = "⚖️";
    color = "warning";
    message = "You're paying a bit more than average.";
    detailMessages = [
      `You're paying ${formatPoints(difference)} points more than average`,
      `That's about ${Math.abs(percentage)}% above the typical rate`,
      `Better deals are likely available with some searching`,
    ];
  } else {
    verdict = "You're Overpaying";
    emoji = "❌";
    color = "overpay";
    message = "This redemption is significantly above average.";
    detailMessages = [
      `You're paying ${formatPoints(difference)} more than average (${Math.abs(percentage)}% higher)`,
      `Most travelers book this route for ${formatPoints(avg)}–${formatPoints(Math.round(avg * 1.1))} points`,
      `We found options ${formatPoints(Math.round(difference * 0.8))}+ points cheaper`,
    ];
  }

  return {
    verdict,
    emoji,
    color,
    message,
    detailMessages,
    userPoints,
    avgPoints: avg,
    lowPoints: low,
    highPoints: high,
    difference,
    percentage,
  };
}

/**
 * Generate mock alternatives (for the locked section)
 */
export function generateAlternatives(benchmark, userPoints) {
  const { avg, low } = benchmark;
  const alternatives = [];

  // Generate 4 alternatives that are lower than user's points
  const basePoints = [
    Math.round(low * (0.95 + Math.random() * 0.1)),
    Math.round(low + (avg - low) * 0.3),
    Math.round(avg * (0.9 + Math.random() * 0.05)),
    Math.round(avg * (0.95 + Math.random() * 0.05)),
  ].filter(p => p < userPoints).sort((a, b) => a - b);

  const labels = ["Best value found", "Great option", "Smart alternative", "Good deal", "Recommended"];
  const programs = ["via ???", "via ???", "via ???", "via ???", "via ???"];
  const timings = ["Flexible dates", "Nearby airport", "Off-peak timing", "Different connection", "Direct route"];

  basePoints.forEach((pts, i) => {
    alternatives.push({
      points: pts,
      label: labels[i] || "Alternative",
      program: programs[i],
      timing: timings[i] || "",
      savings: userPoints - pts,
    });
  });

  // Ensure at least 3 alternatives
  while (alternatives.length < 3) {
    const pts = Math.round(avg * (0.85 + alternatives.length * 0.05));
    if (pts < userPoints) {
      alternatives.push({
        points: pts,
        label: labels[alternatives.length],
        program: "via ???",
        timing: "Flexible dates",
        savings: userPoints - pts,
      });
    } else break;
  }

  return alternatives.slice(0, 4);
}

export function formatPoints(num) {
  if (num >= 1000) {
    return num.toLocaleString();
  }
  return num.toString();
}

export default benchmarkData;
