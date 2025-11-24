const students = [
  {
    name: "Arjun",
    age: 15,
    grade: "9",
    address: "Hyderabad",
    gender: "Male",
  },
  {
    name: "Saniya",
    age: 14,
    grade: "8",
    address: "Bangalore",
    gender: "Female",
  },
  {
    name: "Rahul",
    age: 16,
    grade: "10",
    address: "Hyderabad",
    gender: "Male",
  },
  {
    name: "Megha",
    age: 15,
    grade: "9",
    address: "Bangalore",
    gender: "Female",
  },
  {
    name: "Kiran",
    age: 13,
    grade: "7",
    address: "Hyderabad",
    gender: "Male",
  },
  {
    name: "Priya",
    age: 17,
    grade: "11",
    address: "Bangalore",
    gender: "Female",
  },
  {
    name: "Vivek",
    age: 14,
    grade: "8",
    address: "Hyderabad",
    gender: "Male",
  },
  {
    name: "Ananya",
    age: 16,
    grade: "10",
    address: "Bangalore",
    gender: "Female",
  },
  {
    name: "Rohit",
    age: 15,
    grade: "9",
    address: "Hyderabad",
    gender: "Male",
  },
  {
    name: "Sneha",
    age: 13,
    grade: "7",
    address: "Bangalore",
    gender: "Female",
  },
];

let container = document.getElementById("main");
let searchBar=document.querySelector("#search")

function renderStudents(lst) {
  let output = "";

  lst.forEach((item) => {

    output += `
     <div class="itemsin">
        <h2 style="color:#00fff7">Name:${item.name}</h2>
        <p>Age:${item.age}</p>
        <p>Grade:${item.grade}</p>
        <p>Location:${item.address}</p>
        <p>Gender:${item.gender}</p>  
    
    </div>
    
   `;
  });

   container.innerHTML = output;
}


function searchStudents(searchBar){
    let valueFromBar=searchBar.value.toLowerCase();
   

    const resultStudents=students.filter((currStudent)=>{
       return  (currStudent.name.toLowerCase().includes(valueFromBar)||
               currStudent.address.toLowerCase().includes(valueFromBar)||
             currStudent.grade.toLowerCase().includes(valueFromBar)
    )
    })


   
    renderStudents(resultStudents)
}
searchBar.addEventListener("input",()=>{
    searchStudents(searchBar)
})

renderStudents(students);

