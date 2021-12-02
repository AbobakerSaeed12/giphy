let input = document.querySelector('[name=name]');
let form = document.querySelector(".js-search-form");
form.addEventListener('submit', getGifs);

function getGifs(e) {
    e.preventDefault()
    let searchValue = input.value;
    input.value = '';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qXe0K6tr5cahunGnhKEd2278R9lwDkeE&q=${searchValue}&limit=15&offset=0&rating=g&lang=en`;
    fetch(url)
    .then(res => res.json())
    .then(renderGifs)
    .catch(err => {
        console.log("something is wrong")
    })
}

function renderGifs(response) {
    let gifArray = response.data;
     htmlPage = "";
     for (gif of gifArray){
     htmlPage += `
     <div>
     <img class="images" src="${gif.images.original.url}" alt="${gif.title}">
     </div>
     `
     }
     let sectionContainer = document.querySelector('.js-gifs-container');
     sectionContainer.innerHTML = htmlPage;
}