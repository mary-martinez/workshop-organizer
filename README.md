# Workshop Organizer Plan

## Database Setup

| workshops table | type    |
| --------------- | ------- |
| name            | varchar |

RLS - only authenticated users can see it

| participants table | type        |
| ------------------ | ----------- |
| name               | varchar     |
| workshop_id        | foreign_key |

RLS - only authenticated users

## /workshops page

-   fetchWorkshops function -- return all the workshops AND their participants
-   TDD a renderWorkshop function
-   TDD render participant function
-   `displayWorkshops` function that loops through each workshop and renders the workshop and its participants

## /create page

-   Form for adding new participant
-   Select will need to be generated using the workshop data
-   On submit -- call supabase and create a new participant - redirect back to the /workshops page

## add deleting by clicking on the participant