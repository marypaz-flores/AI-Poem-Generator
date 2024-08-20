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
  let prompt = `Generate a poem about ${instructionsInput.value} in the language most commonly associated with that word. For example, if the word is in German, write the poem in German; if it’s in French, write it in French; if it’s in English, write it in English, and so on. Ensure that the entire poem is consistent in the identified language.`;
  let context =
    "You are an expert in writing romantic poems. Your task is to create exactly 4 lines of poetry following the user instructions below. Each line should be separated using <br>. The poem should be presented in basic HTML with no title, and the signature 'SheCodes AI' should appear on a separate line at the end inside a <strong> element. Do not count the signature as one of the 4 lines of the poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem for you about ${instructionsInput.value} </div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
