function sortToys(toys:string[], positions:number[]):string[] {
    return toys.sort((a:string,b:string)=> {
        const posA:number = toys.indexOf(a);
        const posB:number = toys.indexOf(b);
        return positions[posA] - positions[posB]
    })
  }