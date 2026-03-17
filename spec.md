# Vidura Analytics Website

## Current State
Full multi-page website with Navigation (Home, Services, Industries, Sample Submission, Reports & Disclaimers, About, FAQ, Contact) and policy pages. TanStack Router is used for routing.

## Requested Changes (Diff)

### Add
- New `/tutorials` page with:
  - A list of tutorial entries, each having: title, description, YouTube video embed, and an optional Google Form quiz link
  - Page hero section with title and subtitle
  - Tutorial cards laid out in a clean grid/list
  - YouTube videos embedded via `<iframe>` (responsive, 16:9 ratio)
  - Google Form quiz link shown as a styled CTA button below the video
  - A static data array at the top of the file so the owner can easily add/edit tutorials by updating title, YouTube URL, description, and Google Form URL
- New route `/tutorials` in App.tsx
- New nav link "Tutorials" in Navigation.tsx

### Modify
- Navigation.tsx: add Tutorials link
- App.tsx: add tutorialsRoute

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/pages/Tutorials.tsx` with static tutorial data array and page UI
2. Update `src/frontend/src/App.tsx` to import and register `/tutorials` route
3. Update `src/frontend/src/components/Navigation.tsx` to add Tutorials nav link
