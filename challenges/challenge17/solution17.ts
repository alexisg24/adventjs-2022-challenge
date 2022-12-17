function carryGifts(gifts:string[], maxWeight:number) {
    const res:string[] = [];
    gifts.filter(item => item.length <= maxWeight)
      .forEach((item) =>{
        (res.length > 0 ) && (res[res.length - 1].replace(/ /g,'').length + item.length <= maxWeight)
          ? res[res.length - 1] += ` ${item}`
          : res[res.length] = item
    })
    return res
  }