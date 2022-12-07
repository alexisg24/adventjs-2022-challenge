function getGiftsToRefill(a1:string[], a2:string[], a3:string[]):string[] {
    const set1 = new Set<string>([...a1])
    const set2 = new Set<string>([...a2])
    const set3 = new Set<string>([...a3])
    return[...new Set<string>([...set1, ...set2, ...set3])]
    .filter(item => (set1.has(item) && !set2.has(item) && !set3.has(item)) 
    || (!set1.has(item) && set2.has(item) && !set3.has(item)) 
    || (!set1.has(item) && !set2.has(item) && set3.has(item)))
  }