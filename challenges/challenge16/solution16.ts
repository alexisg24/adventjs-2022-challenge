function fixLetter(letter:string):string {
    return letter.trim()
      .replaceAll('santa',  'Santa')
      .replaceAll('claus', 'Claus')
      .replace(/ ,/g, ', ')
      .replace(/ [.]/g, '. ')
      .replace(/  +/g, ' ')
      .replace(/[??]+/g, '?')
      .replace(/(\s+([,.?!]))/g,(m:string, s1:string, s2:string) => s2)
      .replace(/^([A-z])/, (m:string, p:string) => p.toUpperCase())
      .replace(/([?.!])\s+([A-z])/g, (m:string, s1:string, s2:string) => `${s1} ${s2.toUpperCase()}`)
      .replace(/([A-z])$/, (m:string, s:string) => `${s}.`);
  }

//For more points use JS Solution
/*
function fixLetter(letter) {
  return letter.trim()
    .replaceAll('santa',  'Santa')
    .replaceAll('claus', 'Claus')
    .replace(/ ,/g, ', ')
    .replace(/ [.]/g, '. ')
    .replace(/  +/g, ' ')
    .replace(/[??]+/g, '?')
    .replace(/(\s+([,.?!]))/g,(m, s1, s2) => s2)
    .replace(/^([A-z])/, (m, p) => p.toUpperCase())
    .replace(/([?.!])\s+([A-z])/g, (m, s1, s2) => `${s1} ${s2.toUpperCase()}`)
    .replace(/([A-z])$/, (m, s) => `${s}.`);
}
*/