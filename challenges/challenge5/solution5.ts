function getMaxGifts(giftsCities:number[], maxGifts:number, maxCities:number):number {
    return getArrayCombinations(giftsCities)
        .filter(item => item.length > 0 && item.length <= maxCities)
        .map(item =>{return item.reduce((acum:number, value:number) => acum + value,0);})
        .filter(item => item <= maxGifts)
        .sort((a,b) => b - a)[0] || 0
  }

function getArrayCombinations (array:number[]):number[][]{
    return new Array(1 << array.length)
        .fill(array)
        .map((e1, i) => array.filter((e2, j) => i & (1 << j)));
 }
