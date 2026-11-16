# Competitions Feature (`features/competitions`)

## Scope
Tournaments (single elimination, double elimination, round-robin), seasonal club leagues, ladder challenges, and bracket management.

## Planned Structure
- `components/` - TournamentBracket, LeagueTable, FixtureList, CompetitionCard
- `actions/` - createTournamentAction, seedParticipantsAction, advanceBracketAction
- `schemas/` - tournamentSchema, leagueSchema
- `types/` - Tournament, League, BracketNode, Fixture
