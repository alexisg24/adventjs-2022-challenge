function selectSleigh(distance:number, sleighs: Sleighs[]) {
    const res = sleighs.reverse().find(item => item.consumption * distance <= 20);
    return res ? res.name : null
  }

interface Sleighs {
    name: string;
    consumption: number;
}