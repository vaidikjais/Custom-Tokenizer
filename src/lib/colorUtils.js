// A simple hashing function to convert a string to a number
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// A predefined palette of nice, modern colors
const colors = [
  '#a855f7', '#8b5cf6', '#6366f1', '#3b82f6', '#0ea5e9', '#06b6d4',
  '#14b8a6', '#10b981', '#22c55e', '#84cc16', '#eab308', '#f59e0b',
  '#f97316', '#ef4444', '#ec4899', '#d946ef'
];

export function getColorForToken(token) {
  const hash = simpleHash(token);
  return colors[hash % colors.length];
}