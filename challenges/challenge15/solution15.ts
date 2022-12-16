function decorateTree(base:string) {
    const diccionary:Diccionary = {
        'PP': 'P',
        'RR': 'R',
        'BB': 'B',
        'BP': 'R',
        'PB': 'R',
        'RP': 'B',
        'PR': 'B',
        'BR': 'P',
        'RB': 'P'
    }
    const arr:string[] = [];
    const res = base.split(' ');
    res.slice(0, -1).reduce((acum, _) =>{
        acum = acum.slice(0, -1)
          .map((_,index) => diccionary[acum[index]+acum[index+1]]);
        arr.unshift(acum.join(' '));
        return acum
    },res)
    return [...arr, base]
  }

  interface Diccionary{
    PP:string;
    RR:string;
    BB:string;
    BP:string;
    PB:string;
    RP:string;
    PR:string;
    BR:string;
    RB:string;
  }