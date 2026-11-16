/**
 * Common formatting helpers for RankPong.
 */

export function formatElo(rating: number): string {
  return Math.round(rating).toLocaleString();
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function formatScore(p1Score: number, p2Score: number): string {
  return `${p1Score} - ${p2Score}`;
}
