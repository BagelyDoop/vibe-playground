# Dave + Grant Vibe Playground

A simple static site starter you can host on GitHub Pages.

## What is here

- `index.html` - home page for your playground
- `styles.css` - shared site styles
- `projects/hello-world/index.html` - sample mini project
- `notes/ideas.md` - idea backlog

## Local preview

You can double-click `index.html`, or from this folder run:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish on GitHub Pages (quick path)

1. Create a new GitHub repository (example: `vibe-playground`).
2. In this folder, run:

```powershell
git init
git add .
git commit -m "Initial playground"
git branch -M main
git remote add origin https://github.com/<your-username>/vibe-playground.git
git push -u origin main
```

3. On GitHub, go to `Settings` -> `Pages`.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` and `/ (root)`
5. Save. After ~1-2 minutes, your site will be live at:

`https://<your-username>.github.io/vibe-playground/`

## Workflow for new projects

1. Create `projects/<project-name>/index.html`
2. Add a card link in `index.html`
3. Commit and push

GitHub Pages auto-updates on every push.
