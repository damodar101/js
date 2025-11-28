"use strict";

let container = document.querySelector("#grid");
let searchValue = document.querySelector("#search");
let buttonValue = document.querySelector("#inputvalue");
let val = document.querySelector("#show");
async function getdata(da) {
    if (!container)
        return;
    container.innerHTML =
        "<p style='text-align:center;color:white'>Loading movies..</p>";
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${da}&apikey=49da69f5`);
        const data = await response.json();
        if (data.Response === "True" && data.Search) {
            display(data.Search);
            if (val)
                val.innerHTML = ""; // clear previous "No movie found"
        }
        else {
            if (val)
                val.innerHTML = "No Movie found";
            container.innerHTML = "";
        }
    }
    catch (error) {
        if (container)
            container.innerHTML =
                "<p style='text-align:center;color:white;margin-top:60px;'>No movie found</p>";
        console.error(error);
    }
}
function display(movies) {
    if (!container)
        return;
    let output = "";
    movies.forEach((movie) => {
        output += `
      <div class="cards">
        <img src="${movie.Poster}" alt="${movie.Title}"/>
        <p>${movie.Title}</p>
        <p>${movie.Year}</p>
      </div>
    `;
    });
    container.innerHTML = output;
}

if (searchValue) {
    searchValue.addEventListener("change", () => {
        let searchValues = searchValue.value.trim();
        if (searchValues) {
            getdata(searchValues);
        }
    });
}
if (buttonValue) {
    buttonValue.addEventListener("click", () => {
        let btnvalue = searchValue.value.trim();
        if (btnvalue) {
            getdata(btnvalue);
        }
    });
}

getdata("avengers");
