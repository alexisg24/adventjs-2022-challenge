function createCube(size:number):string {
    let top:string = ''
    let bottom:string = ''
    for (let i = 1; i <= size; i++) {
        top += `${' '.repeat(size-i)}${`/\\`.repeat(i)}${`_\\`.repeat(size)}\n`
        bottom = `${' '.repeat(size-i)}${`\\/`.repeat(i)}${`_/`.repeat(size)}\n` + bottom;
    }
    return top+bottom.substring(0, bottom.length - 1);
  }