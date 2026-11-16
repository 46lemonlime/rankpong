# Rankings Feature (`features/rankings`)

## Scope
Global and club-specific ELO calculations, leaderboard standings, rating history charts, and competitive tiers (e.g. Bronze, Silver, Gold, Diamond, Master).

## Planned Structure
- `components/` - LeaderboardTable, RatingBadge, EloHistoryChart, TierProgression
- `actions/` - recalculateEloAction
- `utils/` - calculateEloDelta, getTierFromRating
- `types/` - LeaderboardEntry, EloHistoryPoint, CompetitiveTier
