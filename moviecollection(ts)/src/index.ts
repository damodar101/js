
let container = document.querySelector("#grid") as HTMLElement;
let searchValue = document.querySelector("#search") as HTMLInputElement;
let buttonValue = document.querySelector("#inputvalue") as HTMLElement;
let val = document.querySelector("#show") as HTMLElement;


interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

interface MovieResponse {
  Search: Movie[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}

async function getdata(da: string): Promise<void> {
  if (!container) return;

  container.innerHTML =
    "<p style='text-align:center;color:white'>Loading movies..</p>";

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${da}&apikey=49da69f5`
    );
    const data: MovieResponse = await response.json();

    if (data.Response === "True" && data.Search) {
      display(data.Search);
      if (val) val.innerHTML = ""; 
    } else {
      if (val) val.innerHTML = "No Movie found";
      container.innerHTML = "";
    }
  } catch (error) {
    if (container)
      container.innerHTML =
        "<p style='text-align:center;color:white;margin-top:60px;'>No movie found</p>";
    console.error(error);
  }
}

function display(movies: Movie[]): void {
  if (!container) return;

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
