/**
 * Core Domain Type Definitions Placeholder
 * These represent the high-level domain entities for RankPong.
 * Database-generated types will be synced via Supabase CLI in later phases.
 */

export type UserRole = "member" | "admin" | "owner";

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  eloRating: number;
  createdAt: string;
  updatedAt: string;
}

export interface Club {
  id: string;
  name: string;
  slug: string;
  description?: string;
  ownerId: string;
  isPrivate: boolean;
  memberCount: number;
  createdAt: string;
}

export interface MatchSummary {
  id: string;
  clubId?: string;
  player1Id: string;
  player2Id: string;
  player1Score: number;
  player2Score: number;
  winnerId: string;
  isRanked: boolean;
  playedAt: string;
}
