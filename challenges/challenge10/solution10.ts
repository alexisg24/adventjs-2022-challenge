function checkJump(heights:number[]):boolean {
    const maxVal:number = Math.max(...heights)
    const indexValue:number = heights.indexOf(maxVal);
    const major:number[] = heights.slice(0, indexValue);
    const minor:number[] = heights.slice(indexValue+1);
    const minorEval:boolean =  minor.slice(1).every((item, idx) => item <=minor[idx]);
    const majorEval:boolean = major.slice(1).every((item, idx) => item >= major[idx]);
    return major.length > 0 && minor.length > 0 && minorEval && majorEval
  }