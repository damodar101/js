# User Table

Simple web app that displays a table of users. Each row shows:
- name
- age
- dob
- address
- gender
- cgpa
- course

This project includes live search, filters, sorting by CGPA, and pagination.

## Features
- Render user data in a responsive table.
- Live search by name.
- Filter by gender.
- Sort/filter by CGPA (ascending / descending / all).
- Select rows per page and navigate with pagination controls.

## Data format
Provide users as an array of objects (example shown in app.js):
```js
[
  {
    name: "Aarav Mehta",
    age: 21,
    dob: "2004-03-12",
    address: "45 Sunrise Apartments, Mumbai, Maharashtra",
    gender: "Male",
    cgpa: 8.4,
    course: "Computer Science"
  },
  ...
]
```

## Files
- index.html — UI and controls (search input, selects for gender / cgpa, rows per page, pagination container)
- assessts/js/app.js — rendering, search, filter, sort, and pagination logic
- styles.css — table and control styles

(NOTE: your app.js is at `c:\Users\Naga\Desktop\js\usertable\assessts\js\app.js`)

## Controls / Usage
1. Open index.html in your browser:
   - Double-click index.html, or
   - From project root run a simple server:
     - PowerShell / CMD: python -m http.server 8000
     - Open: http://localhost:8000
2. Use the search box to filter by name (case-insensitive).
3. Use the Gender select to show only Male/Female entries.
4. Use the CGPA sort/select to order results (asc / dsc / all).
5. Change the "rows per page" selector to update pagination. Use Prev/Next buttons to navigate.

## How it works (brief)
- The script keeps a current dataset and current page.
- Search/filter operations produce a filtered array and reset to page 1.
- Pagination slices the current dataset for display and renders page controls.
- Sorting creates a copy of the users array and sorts by cgpa when requested.

## Troubleshooting
- If no rows show, verify the users array is loaded and property names match (name, age, dob, address, gender, cgpa, course).
- If pagination buttons are disabled incorrectly, confirm currentPage and rowPerPage values update as expected.

## License
MIT — reuse and modify as needed.