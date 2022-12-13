function getFilesToBackup(lastBackup:number, changes:number[][]):number[] {
    const filter:number[][] = changes.filter(item => item[1] > lastBackup);
    const mapFilter:number[] = filter.map(item => item[0])
    return [...new Set([...mapFilter].sort((a,b)=>  a - b))]
  }