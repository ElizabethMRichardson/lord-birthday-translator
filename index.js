const data = {
  ok: "oak nuggins",
  okay: "oak nuggins",
  yes: "yank train",
  no: "nuns on ripple",
  "i think": "I put a boogie dollar down",
  golf: "slapping the dimpled balls",
  "i feel sick": "Mama's got the nasty jam",
  "good idea": "gold hat, cool cat",
  "this job is killing me": "this gig gonna slash me hips",
  "let's grab lunch on monday": "dip me in ya monday milk",
  "let's go": "limp cone",
  difficult: "grubby grunt house"
};

const translate = str => {
  const keys = Object.keys(data);
  keys.forEach(word => {
    let replaceRegex = new RegExp(`\\b${word}\\b`, "gi");
    str = str.replace(replaceRegex, `${data[word]}`);
  });
  return str;
};

module.exports = str => {
  return translate(str);
};
