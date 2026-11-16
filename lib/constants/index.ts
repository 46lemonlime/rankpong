/**
 * Core Application Constants
 */

export const APP_CONFIG = {
  name: "RankPong",
  description:
    "A modern web platform for table tennis clubs, matches, global ELO rankings, leagues and tournaments.",
  tagline: "Play. Compete. Climb.",
  version: "0.1.0",
} as const;

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  CLUBS: "/clubs",
  PLAYERS: "/players",
  MATCHES: "/matches",
  RANKINGS: "/rankings",
  TOURNAMENTS: "/tournaments",
} as const;
