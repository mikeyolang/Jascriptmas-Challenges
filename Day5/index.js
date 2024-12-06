let anagrams = [
  ["Can Assault", "Santa Claus"],
  ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
  ["Frosty The Snowman", "Honesty Warms Front"],
  ["Drastic Charms", "Christmas Cards"],
  ["Congress Liar", "Carol Singers"],
  ["The Tin Glints", "Silent Night"],
  ["Be The Helm", "Betlehem"],
  ["Is Car Thieves", "Christmas Eve"],
];

function findAnagrams(array) {
  const results = [];
  for (const [phase1, phase2] of array) {
    // normalize and sort characters of both phrases
    const normalize = (str) =>
      str
        .toLowerCase()
        .replace(/[^a-z]/g, "")
        .split("")
        .sort()
        .join("");
    const normalize1 = normalize(phase1);
    const normalize2 = normalize(phase2);

    if (normalize1 === normalize2) {
      results.push([phase1, phase2]);
    }
  }
  return results;
}

console.log(findAnagrams(anagrams));
