const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("wrapper");
const soundId = document.getElementById("sound");


searchBtn.addEventListener("click", () => {
  let inputValue = document.getElementById("search-input").value;

  fetch(`${url}${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = ` <div class="word-contanier">
    <h2>${inputValue}</h2>

    <button  onclick="playSound()">
      <i class="fa-solid fa-volume-high"></i>
    </button>
  </div>
    
  <div class="details">
    <p>${data[0].meanings[0].partOfSpeech || ""}</p>
    <p>${data[0].phonetics[1].text || ""}</p>
  </div>

  <div class="meaning">
    <p class="word-meaning">${
      data[0].meanings[0].definitions[0].definition || ""
    }</p>
    <p class="word-example">${
      data[0].meanings[0].definitions[0].example || ""
    }</p>
  </div>`;
    soundId.setAttribute("src",`${data[0].phonetics[1].audio}`)
    })
    .catch(() => (result.innerHTML = `<h3>Couldn't Find The Word!!</h3>`));
});

function playSound() {
    soundId.play();
}

