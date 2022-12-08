function checkPart(part:string):boolean {
    return (part === [...part].reverse().join(''))
    ? true
    : [...part]
    .filter((item, index) =>{
      const str:string = part.substring(0, index) + part.substring(index + 1);
      return str === [...str].reverse().join('')})
    .length >= 1
  }