function distributeGifts(packOfGifts:string[], reindeers:string[]):number {
    return Math.floor(reindeers.join('').length/packOfGifts.join('').length*2)
  }