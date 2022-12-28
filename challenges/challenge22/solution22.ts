function checkStepNumbers(systemNames:string[], stepNumbers:number[]):boolean {
    return systemNames.every((e, i) => {
        const index:number = i + systemNames.slice(i + 1).indexOf(e) + 1;
        const isAscending:boolean = stepNumbers[i] < stepNumbers[index];
        const isLast:boolean = !(systemNames.lastIndexOf(e) - i)
        return  isAscending || isLast
    }
    )
  }