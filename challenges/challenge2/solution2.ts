function countHours(year:number, holidays:string[]):number {
    return holidays.reduce((acum, val):number=>{
        const day:number = new Date(`${year}/${val}`).getDay() || 0;
        return (day != 0 && day != 6) ? acum+= 2 : acum
    },0)
  }  