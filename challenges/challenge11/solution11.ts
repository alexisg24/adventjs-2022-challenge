function getCompleted(part:string, total:string):string {
    const formatTime = (time:string):number =>{
      const [h, m, s] = time.split(':');
      return (Number(h) * 3600) + (Number(m) * 60) + Number(s)
    } 
    const partFormated:number = formatTime(part);
    const totalFormated:number = formatTime(total);
    let evalPart:number = partFormated;
    let evalTotal:number = totalFormated;
    while (evalTotal) {
          let tempPart = evalTotal
          evalTotal = evalPart % evalTotal
          evalPart = tempPart
      }
  
    return `${partFormated/evalPart}/${totalFormated/evalPart}`
  }