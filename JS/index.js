function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  //API URL
  let apiKey = "19e9ee9138td443ob800fc47e41a5774";
  let prompt = `Generate a poem about ${instructionsInput.value} in the same language of the word. Ensure that the language of the poem matches the language of the input. If the input is in Spanish, write in Spanish; if it's in German, write in German, and so on.`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate always a 4 line poem in basic HTML. Make sure to follow the user instructions below. No tittle should be displayed. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
