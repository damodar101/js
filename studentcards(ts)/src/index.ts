interface Student {
  name: string;
  age: number;
  grade: string;
  address: string;
  gender: string;
}

const students: Student[] = [
  { name: "Arjun", age: 15, grade: "9", address: "Hyderabad", gender: "Male" },
  { name: "Saniya", age: 14, grade: "8", address: "Bangalore", gender: "Female" },
  { name: "Rahul", age: 16, grade: "10", address: "Hyderabad", gender: "Male" },
  { name: "Megha", age: 15, grade: "9", address: "Bangalore", gender: "Female" },
  { name: "Kiran", age: 13, grade: "7", address: "Hyderabad", gender: "Male" },
  { name: "Priya", age: 17, grade: "11", address: "Bangalore", gender: "Female" },
  { name: "Vivek", age: 14, grade: "8", address: "Hyderabad", gender: "Male" },
  { name: "Ananya", age: 16, grade: "10", address: "Bangalore", gender: "Female" },
  { name: "Rohit", age: 15, grade: "9", address: "Hyderabad", gender: "Male" },
  { name: "Sneha", age: 13, grade: "7", address: "Bangalore", gender: "Female" },
];

// Get HTML elements with proper type casting
const container = document.getElementById("main") as HTMLElement;
const searchBar = document.querySelector("#search") as HTMLInputElement;

function renderStudents(lst: Student[]): void {
  let output = "";

  lst.forEach((item) => {
    output += `
      <div class="itemsin">
        <h2 style="color:#00fff7">Name: ${item.name}</h2>
        <p>Age: ${item.age}</p>
        <p>Grade: ${item.grade}</p>
        <p>Location: ${item.address}</p>
        <p>Gender: ${item.gender}</p>  
      </div>
    `;
  });

  container.innerHTML = output;
}

function searchStudents(searchBar: HTMLInputElement): void {
  const valueFromBar = searchBar.value.toLowerCase();

  const resultStudents = students.filter((currStudent) => {
    return (
      currStudent.name.toLowerCase().includes(valueFromBar) ||
      currStudent.address.toLowerCase().includes(valueFromBar) ||
      currStudent.grade.toLowerCase().includes(valueFromBar)
    );
  });

  renderStudents(resultStudents);
}

// Event listener
searchBar.addEventListener("input", () => {
  searchStudents(searchBar);
});

// Initial render
renderStudents(students);
