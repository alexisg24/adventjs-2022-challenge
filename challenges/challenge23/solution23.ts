function executeCommands(commands:string[]):number[] {
  const CPU = {
     V00: 0,
     V01: 0,
     V02: 0,
     V03: 0,
     V04: 0,
     V05: 0,
     V06: 0,
     V07: 0,
   }
  
  const command = {
      MOV: (params:string)=> {
        const [value, cpu] = params.split(',');
        return value.startsWith('V')
        ? CPU[cpu] = Number(CPU[value]) 
        : CPU[cpu] = command.EVAL(Number(value));
      },

      ADD: (params:string)=> {
        const [value1, value2] = params.split(',');
        let res = Number(CPU[value1]) + Number(CPU[value2]);
        return CPU[value1] = command.EVAL(res)
      },
      
      DEC: (params:string)=> {
        return CPU[params] = command.EVAL(Number(--CPU[params]))
      },

      INC: (params:string)=> {
        return CPU[params] = command.EVAL(Number(++CPU[params]))
      },

      EVAL: (number:number)=> {
        return number < 0
        ? (((number % 256) + 256) % 256)
        : number % 256
      },

      JMP : (params: string | number) =>{
        params = Number(params)
        const index = commands.indexOf(`JMP ${params}`)
        return CPU.V00 == 0
        ? 0
        : commands = commands.concat(commands.slice(params, index+1))
      }
  }

  for (let i = 0; i < commands.length; i++) {
    const [commandText, value] = commands[i].split(' ');
    command[commandText](value);
  }

  return Object.values(CPU)
}