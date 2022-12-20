function howManyReindeers(reindeerTypes:ReindeerTypes[], gifts:Gifts[]):Result[] {
    reindeerTypes.sort((a,b) => b.weightCapacity - a.weightCapacity);
    return gifts.map((item) => {
        
      let currentMax = item.weight;

      const weights = reindeerTypes.filter(reindeerType => reindeerType.weightCapacity < currentMax);
      let currentCapacity = weights.reduce((acc, curr) => acc += curr.weightCapacity,0);

      const reindeers:ManyReindeers[] = weights.map((reindeer) => {
        let num = Math.floor(currentMax / currentCapacity);
        currentCapacity -= reindeer.weightCapacity;
        currentMax -= num * reindeer.weightCapacity;
        return { type: reindeer.type, num};
      });

      return { country: item.country, reindeers };
    });
  }


interface ReindeerTypes {
    type: string;
    weightCapacity:number;
}

interface Gifts  {
    country: string;
    weight:number;
}

interface ManyReindeers{
    type:string;
    num: number;
}

interface Result {
    country: string,
    reindeers: ManyReindeers[]
}