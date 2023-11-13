let speech = new SpeechSynthesisUtterance();

let voices = [];

const voiceSelector = document.querySelector("#voiceSelector");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    voiceSelector.options[i] = new Option(voice.name, i);
  });
};

voiceSelector.addEventListener("change", () => {
  speech.voice = voices[voiceSelector.value];
});

document.querySelector("#playButton").addEventListener("click", () => {
  speech.text = document.querySelector("#textplace").value;

  window.speechSynthesis.speak(speech);
});
