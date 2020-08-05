let speechApiConfig = {
  key: "32a8034b77844bfd9d77945c8072cb33",
  src: "Hello, world!",
  hl: "en-us",
  v: "Linda",
  r: 0,
  c: "mp3",
  f: "44khz_16bit_stereo",
  ssml: false,
};
const button = document.getElementById("button");
const quote = document.getElementById("quote");
function speaker() {
  VoiceRSS.speech(speechApiConfig);
}

async function getJokes() {
  button.disabled = true;
  let joke = "";
  try {
    let response = await fetch(
      "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist"
    );
    let data = await response.json();
    if (data.setup) {
      joke = `${data.setup}   \n${data.delivery}`;
    } else {
      joke = data.joke;
    }
    speechApiConfig.src = joke;
    quote.innerText = joke;

    speaker();
  } catch (err) {
    console.err(err);
  }
}

const handleButtonClick = () => {
  getJokes();
};

button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", () => {
  button.disabled = false;
  quote.innerText = "Try again !";
});
