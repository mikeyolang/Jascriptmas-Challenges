const hackedEmojis = {
  " angry": "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

const emojiReverseMap = {
  "😠": "🎁",
  "👎": "👏",
  "🤦‍♂️": "🎅",
  "😭": "😄",
  "🤮": "🤩",
};

function emojifyWord(word) {
  // check if a word starts or end with a colon
  if (word.startsWith(":") && word.endsWith(":")) {
    const shortCode = word.slice(1, -1);
    return hackedEmojis[shortCode] || word;
  }
  return emojiReverseMap[word] || word;
}

console.log(emojifyWord(":cry:"));

function emojifyPhrase(phrase) {
  return phrase.split(" ").map(emojifyWord).join(" ");
}

console.log(emojifyPhrase("Those shoes :puke:"));
