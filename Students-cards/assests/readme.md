# Students Cards Display

A small web app that displays student cards. Each card shows a student's:
- Name
- Age
- Grade
- Location
-Gender

You can search/filter the displayed cards by grade — type a grade (e.g., "A", "B", "10") in the search box and the UI will show only matching student cards.

## Demo Video
If you have a local demo video in this folder, link it here so others can play it locally:
- Demo (local): ./demo.mp4

To view the video on your machine, open this README in a viewer that supports local media or open the file directly (e.g., double-click demo.mp4).

## Features
- Responsive student cards showing key info.
- Live search/filter by grade.
- Simple JSON-style data structure for students (easy to extend).
- Lightweight: plain HTML/CSS/JS.

## Project structure
- index.html — main UI
- styles.css — card styles
- index.js — rendering and search logic
- data.js (or inline) — students array
- demo.mp4 — optional demo video
- assets/ — images or preview screenshots

## Data format example
Add students as an array of objects. Example:
```js
// example students array
[
  { "name": "Anita Kumar", "age": 15, "grade": "A", "location": "Hyderabad","gender":"female" },
  { "name": "Ravi Singh",   "age": 16, "grade": "B", "location": "Delhi" ,"gender":"male"}
]
```

## Usage
1. Clone or copy the folder to your machine.
2. If the project is static, open index.html in a browser:
   - Double-click index.html, or
   - Serve with a simple HTTP server (recommended) from the project root:
     - Windows (PowerShell): python -m http.server 8000
     - Then open: http://localhost:8000
3. Use the search input to filter cards by grade.

## How the search works (quick)
- The script listens for input on the search box.
- On each change it filters the students array by the entered text (case-insensitive).
- Matching cards are rendered; non-matching ones are hidden/removed.


## Troubleshooting
- If cards don’t show, confirm your students data is loaded and the grade field exists.
- If the demo video won't play in the README viewer, open demo.mp4 directly with a media player.

## License
MIT — feel free to reuse and modify.


