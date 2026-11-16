# Matches Feature (`features/matches`)

## Scope
Logging match results (sets, games, tiebreaks), match verification (mutual confirmation), match history, and casual vs ranked gameplay.

## Planned Structure
- `components/` - MatchForm, MatchCard, MatchHistoryList, ScoreInput, MatchVerificationBanner
- `actions/` - logMatchAction, confirmMatchAction, disputeMatchAction
- `schemas/` - matchSubmissionSchema
- `types/` - MatchDetail, SetScore, MatchStatus
