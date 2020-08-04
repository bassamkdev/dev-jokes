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

function speaker() {
  VoiceRSS.speech(speechApiConfig);
}

speaker();
