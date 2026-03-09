# Dave + Grant Vibe Playground

A multi-page GitHub Pages mini-site with a password-gated entrance and protected internal routes.

## Site structure

- `index.html` - entrance gate (password question)
- `home.html` - immersive homepage after unlock
- `dave.html` - Dave dashboard page
- `grant.html` - Grant dashboard page
- `assets/css/main.css` - shared visual system and animations
- `assets/js/main.js` - unlock flow, protected-route checks, lock action, and interactivity
- `projects/hello-world/index.html` - starter demo project
- `notes/ideas.md` - shared idea list

## Password flow

- Gate question: `What's my favorite word?`
- Correct answer: `in`
- On success, script sets `localStorage['vibe_lab_unlocked'] = 'true'` and redirects to `home.html`
- `home.html`, `dave.html`, and `grant.html` check this unlock key and redirect to `index.html` if missing
- `Lock Site` links clear the unlock key and return to `index.html`

## Zen media sources

Homepage hero uses royalty-free Pexels media:

- Video source: `https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4`
- Poster/fallback image: `https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg?auto=compress&cs=tinysrgb&w=1600`

## Deploy / update

Upload all files in this repo to the `main` branch.

GitHub Pages settings:
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

When Pages rebuilds, `index.html` is the public entry point.
