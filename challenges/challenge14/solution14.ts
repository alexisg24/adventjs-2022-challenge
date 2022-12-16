function getOptimalPath(path:number[][]):number {
    return path.reduceRight((acum, value) =>{
        return value.map((item, index) =>{
            return item + Math.min(acum[index], acum[index + 1])
        })
    })[0]
  }