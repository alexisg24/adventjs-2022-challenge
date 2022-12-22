function printTable(gifts:Gift[]):string {
  gifts = [{name: 'Gift', quantity: 'Quantity'}, ...gifts];
  const sideALength:number = Math.max(...gifts.map(item => item.name.length));
  const sideBLength:number = Math.max(...gifts.map(item => `${item.quantity}`.length));
  const sectionsA:string = '-'.repeat(sideALength);
  const sectionsB:string = '-'.repeat(sideBLength);
  const totalLength:number = 7 + sideALength + sideBLength;

  gifts.splice(1,0,{name: sectionsA, quantity: sectionsB})
  const res = gifts.map((item) =>{
    const sideASubstract:number = sideALength - item.name.length;
    const sideASpaces:string = ' '.repeat(sideASubstract);
    const sideA:string = `| ${item.name}${sideASpaces} |`;
    
    const sideBSubstract:number = sideBLength - (`${item.quantity}`.length);
    const sideBSpaces:string = ' '.repeat(sideBSubstract);
    const sideB:string = ` ${item.quantity}${sideBSpaces} |`;
  
    return `${sideA}${sideB}\n`
  }).join('')

  const borderTop:string = '+'.repeat(totalLength);
  const borderBottom:string = '*'.repeat(totalLength);
  return `${borderTop}\n${res}${borderBottom}`
}

interface Gift {
  name:string;
  quantity: number | string;
}

/* For more points use JS
function printTable(gifts) {
  gifts = [{name: 'Gift', quantity: 'Quantity'}, ...gifts];
  const sideALength = Math.max(...gifts.map(item => item.name.length));
  const sideBLength = Math.max(...gifts.map(item => `${item.quantity}`.length));
  const sectionsA = '-'.repeat(sideALength);
  const sectionsB = '-'.repeat(sideBLength);
  const totalLength = 7 + sideALength + sideBLength;
  gifts.splice(1,0,{name: sectionsA, quantity: sectionsB})
  const res = gifts.map((item) =>{
    const sideASubstract = sideALength - item.name.length;
    const sideASpaces = ' '.repeat(sideASubstract);
    const sideA = `| ${item.name}${sideASpaces} |`;
    
    const sideBSubstract = sideBLength - (`${item.quantity}`.length);
    const sideBSpaces = ' '.repeat(sideBSubstract);
    const sideB = ` ${item.quantity}${sideBSpaces} |`;
  
    return `${sideA}${sideB}\n`
  }).join('')

  const borderTop = '+'.repeat(totalLength);
  const borderBottom = '*'.repeat(totalLength);
  return `${borderTop}\n${res}${borderBottom}`
}
} */