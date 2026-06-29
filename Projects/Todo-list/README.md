# Lumina cy

A modern, dark-themed blog web application built with Node.js, Express.js, and EJS.

## About

Lumina Prose lets users create, view, edit, and delete blog posts. Posts are stored in-memory (no database) and do not persist between sessions.

## Pages

- **Home** — Create a new post with a title and optional description
- **Posts** — Browse all posts as a vertical list of titles. Click a title to open a modal showing the full post. Edit or delete from the three-dot menu inside the modal.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Templating:** EJS
- **Styling:** CSS (dark theme)

## Design

- **Theme:** Dark mode with cool tones

### Colors

#### Text Colors

| What it colors | Color | Hex |
| --- | --- | --- |
| Main text (titles, body, headings) | Light gray | `#e2e2e2` |
| Subtitle text, descriptions, hints | Cool gray | `#bbc9cf` |
| "Home" nav link, active states, accents | Light cyan | `#a8e8ff` |
| Text on "Publish" button | Deep teal | `#00586b` |
| Secondary text (tags, metadata) | Lavender | `#c6c4df` |
| Tertiary highlights | Soft blue | `#d5deff` |
| Error messages | Soft red | `#ffb4ab` |

#### Background Colors

| What it colors | Color | Hex |
| --- | --- | --- |
| Page background (body) | Dark black | `#0f0f0f` |
| Footer background | Dark charcoal | `#121414` |
| Header/navbar background | Dark gray (80% opacity + blur) | `#1e2020` |
| Form inputs, cards (raised surfaces) | Slightly lighter dark | `#282a2b` |
| Modal overlay background | Deepest dark | `#0d0e0f` |
| "Publish" button, glowing accents | Electric cyan | `#00d4ff` |
| Dropdown menu background, badges | Muted purple | `#47475d` |
| "Delete" button background | Deep red | `#93000a` |

#### Border Colors

| What it colors | Color | Hex |
| --- | --- | --- |
| Borders, dividers | Gray blue | `#859398` |
| Subtle borders (header bottom, card edges) | Dark border | `#3c494e` |

### Glass Effect

```css
background: rgba(30, 30, 46, 0.4);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 0 20px 40px rgba(0, 212, 255, 0.03);
```

### Fonts

- [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) — headlines and display text
- [Inter](https://fonts.google.com/specimen/Inter) — body text and captions
- [Geist](https://fonts.google.com/specimen/Geist) — labels, buttons, and nav links
- **Icons:** [Material Symbols Outlined](https://fonts.google.com/icons)

## Routes

| Method | Route         | Description                  |
| ------ | ------------- | ---------------------------- |
| GET    | `/`           | Home page (create post form) |
| GET    | `/posts`      | View all post titles         |
| POST   | `/create`     | Create a new post            |
| POST   | `/edit/:id`   | Update an existing post      |
| POST   | `/delete/:id` | Delete a post                |

## Setup

```bash
npm install
node index.js
```

## Features

- Post creation with title and optional description
- Post list view with clickable titles
- Modal popup to view full post content
- Edit and delete via three-dot dropdown menu
- Responsive design (desktop and mobile)
- Dark mode UI with glassmorphism elements
