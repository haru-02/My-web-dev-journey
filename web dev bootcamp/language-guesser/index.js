const franc = require("franc");
const langs = require("langs");
const sentence = process.argv[2];
const langCode = franc(sentence);
const l = langs.where("3",langCode)
console.log(l);
if(langCode == 'und')
console.log('sorry i dont know what that was');