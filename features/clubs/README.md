# Clubs Feature (`features/clubs`)

## Scope
Club creation, private community management, role-based access (Owner, Admin, Member), membership requests, and invitation tokens.

## Planned Structure
- `components/` - ClubCard, ClubHeader, MemberList, InviteModal, ClubForm
- `actions/` - createClubAction, updateClubAction, inviteMemberAction, processRequestAction
- `schemas/` - clubSchema, inviteSchema
- `types/` - ClubWithMembers, MembershipRequest, ClubRole
