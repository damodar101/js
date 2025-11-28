"use strict";
const users = [
    { name: "Aarav Mehta", age: 21, dob: "2004-03-12", address: "45 Sunrise Apartments, Mumbai, Maharashtra", gender: "Male", cgpa: 8.4, course: "Computer Science" },
    { name: "Sara Bhandari", age: 22, dob: "2003-07-19", address: "12 Green Park Colony, Jaipur, Rajasthan", gender: "Female", cgpa: 8.9, course: "Information Technology" },
    { name: "Kiran Deshpande", age: 23, dob: "2002-11-05", address: "89 Lotus Residency, Pune, Maharashtra", gender: "Male", cgpa: 7.8, course: "Mechanical Engineering" },
    { name: "Priya Nair", age: 20, dob: "2005-01-28", address: "5 Orchard Street, Kochi, Kerala", gender: "Female", cgpa: 9.1, course: "Biotechnology" },
    { name: "Rohan Singh", age: 24, dob: "2001-06-14", address: "37 Hill View Road, Chandigarh", gender: "Male", cgpa: 7.5, course: "Civil Engineering" },
    { name: "Ishita Kapoor", age: 21, dob: "2004-09-02", address: "22 Maple Residency, Delhi", gender: "Female", cgpa: 8.7, course: "Business Administration" },
    { name: "Dev Patel", age: 19, dob: "2006-02-10", address: "14 Pearl Towers, Ahmedabad, Gujarat", gender: "Male", cgpa: 8.2, course: "Electronics Engineering" },
    { name: "Nisha Sharma", age: 22, dob: "2003-03-18", address: "88 Royal Lane, Lucknow, Uttar Pradesh", gender: "Female", cgpa: 9.0, course: "Psychology" },
    { name: "Manav Khurana", age: 23, dob: "2002-08-07", address: "19 Silver Square, Gurgaon, Haryana", gender: "Male", cgpa: 7.9, course: "Electrical Engineering" },
    { name: "Ananya Bose", age: 20, dob: "2005-05-29", address: "34 Greens Villa, Kolkata, West Bengal", gender: "Female", cgpa: 9.3, course: "English Literature" },
    { name: "Vikram Rao", age: 24, dob: "2001-10-21", address: "9 River View Apartments, Hyderabad, Telangana", gender: "Male", cgpa: 8.1, course: "Data Science" },
    { name: "Tanya Malhotra", age: 21, dob: "2004-12-03", address: "76 Coral Heights, Shimla, Himachal Pradesh", gender: "Female", cgpa: 8.6, course: "Fashion Design" },
    { name: "Ritesh Kumar", age: 22, dob: "2003-04-16", address: "101 Lake View, Patna, Bihar", gender: "Male", cgpa: 7.4, course: "Chemistry" },
    { name: "Meera Iyer", age: 23, dob: "2002-01-25", address: "55 Orchid Homes, Bengaluru, Karnataka", gender: "Female", cgpa: 9.2, course: "Artificial Intelligence" },
    { name: "Aditya Verma", age: 20, dob: "2005-11-09", address: "7 Diamond Plaza, Indore, Madhya Pradesh", gender: "Male", cgpa: 8.0, course: "Physics" },
    { name: "Shreya Kulkarni", age: 19, dob: "2006-08-11", address: "62 Palm Residency, Nagpur, Maharashtra", gender: "Female", cgpa: 9.4, course: "Mathematics" },
    { name: "Arjun Sethi", age: 22, dob: "2003-09-23", address: "18 Sky Tower, Surat, Gujarat", gender: "Male", cgpa: 7.7, course: "Environmental Science" },
    { name: "Lavanya Reddy", age: 23, dob: "2002-02-27", address: "90 Hill Crest, Visakhapatnam, Andhra Pradesh", gender: "Female", cgpa: 8.8, course: "Pharmacy" },
    { name: "Harsh Vikram", age: 21, dob: "2004-06-01", address: "42 Pearl Enclave, Ranchi, Jharkhand", gender: "Male", cgpa: 7.6, course: "Automobile Engineering" },
    { name: "Kavya Menon", age: 20, dob: "2005-04-12", address: "11 Sea Breeze Homes, Trivandrum, Kerala", gender: "Female", cgpa: 9.5, course: "Journalism" },
];
// DOM elements
const rowsData = document.querySelector(".body");
const userSearch = document.querySelector("#search");
const genderValue = document.querySelector("#gender");
const gradeValue = document.querySelector("#sort");
const rowValue = document.querySelector("#btn");
let currentPage = 1;
let rowPerPage = 5;
let currentData = users;
// Pagination
function pagination(data) {
    currentData = data;
    const start = (currentPage - 1) * rowPerPage;
    const end = start + rowPerPage;
    const paginatedData = data.slice(start, end);
    renderFun(paginatedData);
    renderButtons(data.length);
}
// Render buttons
function renderButtons(totalRecords) {
    const totalPages = Math.ceil(totalRecords / rowPerPage);
    const pageInfo = document.querySelector("#pagination");
    pageInfo.innerHTML = `
    <button ${currentPage === 1 ? "disabled" : ""} onClick="prev()">Prev</button>
    <span>Page ${currentPage} of ${totalPages}</span>
    <button ${currentPage === totalRecords ? "disabled" : ""} onClick="next()">Next</button>
  `;
}
// Next page
function next() {
    currentPage++;
    pagination(currentData);
}
// Previous page
function prev() {
    currentPage--;
    pagination(currentData);
}
// Render table
function renderFun(st) {
    let rows = "";
    const noFound = document.querySelector("#display");
    if (st.length === 0) {
        noFound.style.color = "red";
        noFound.style.fontSize = "0.8rem";
        noFound.innerHTML = "NO RECORD";
    }
    else {
        noFound.innerHTML = "";
    }
    st.forEach((item) => {
        rows += `
      <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.dob}</td>
        <td>${item.address}</td>
        <td>${item.gender}</td>
        <td>${item.cgpa}</td>
        <td>${item.course}</td>
      </tr>
    `;
    });
    rowsData.innerHTML = rows;
}
// Search user by name
function searchUser() {
    const userValue = userSearch.value.toLowerCase();
    const filter = users.filter((curr) => curr.name.toLowerCase().includes(userValue));
    currentPage = 1;
    pagination(filter);
}
// Filter by gender
function selectOption() {
    const selectValue = genderValue.value.toLowerCase();
    const filter = users.filter((curr) => curr.gender.toLowerCase() === selectValue);
    currentPage = 1;
    pagination(filter);
}
// Sort by CGPA
function selectGrade() {
    const gradeSelection = gradeValue.value;
    let sortedUsers = [...users];
    if (gradeSelection === "asc") {
        sortedUsers.sort((a, b) => a.cgpa - b.cgpa);
    }
    else if (gradeSelection === "dsc") {
        sortedUsers.sort((a, b) => b.cgpa - a.cgpa);
    }
    else if (gradeSelection === "all") {
        renderFun(users);
    }
    currentPage = 1;
    pagination(sortedUsers);
}
// Change rows per page
function rowSelection() {
    rowPerPage = parseInt(rowValue.value);
    currentPage = 1;
    pagination(currentData);
}
// Initial render
renderFun(users);
// Event listeners
userSearch.addEventListener("input", searchUser);
genderValue.addEventListener("change", selectOption);
gradeValue.addEventListener("change", selectGrade);
rowValue.addEventListener("change", rowSelection);
//# sourceMappingURL=index.js.map