# BABY NAMES

Implement a web app (API + SPA) that displays a list of baby names that a user submits. The user experience can simply be a text input with a submit button (and a growing list of names below it) on one page. That’s it.

#### Core Requirements
* ~~Upon first visit, Users should default to working on a new distinct list.~~
* ~~A user’s list should have an ID (alphanumeric 12-character string) that uniquely identifies
it.~~
* ~~Users can return to a list by visiting a URL that includes a `list_id` parameter~~
* ~~Returning users that do not provide a list_id parameter are shown the list they most
recently viewed.~~
* ~~Users should be able to add as many names as they would like.~~
* ~~Whitespace should be trimmed from both ends of the submitted names.~~
* ~~Duplicate names (case-insensitive, per-list) should be prevented and result in
appropriate error messaging to the user.~~
* ~~Use PostgreSQL for your database engine~~
* ~~SPA is fully static~~

#### Stretch Goals (completely optional)
* ~~Use React+Redux for the UI~~
* ~~Clicking on a name crosses it out (and clicking again un-crosses it out). This crossed-out
state should persist across sessions and between users viewing the same list.~~
* ~~Only allow names with letters and (at most) one space.~~
    * Good: ‘Sally Lou’, ’Stanley’, ‘JoeBob Pringles’ 
    * Bad: ‘C3P0’, ’Stan the Man’
* ~~Real-time updates when multiple people are working on the same list~~
* Client-side sorting of names (Alphabetical, By Input Time, By Length)
* Allow the user to manually prioritize the list using drag-and-drop functionality
