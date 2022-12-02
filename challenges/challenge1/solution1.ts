function wrapping(gifts:string[]):string[] {
    return gifts.map((item:string):string =>{
        const letter:string = `*${item}*`;
        const cover:string = `*`.repeat(letter.length);
        const process:string = [cover,letter,cover].join('\n')
        return process
    })
}
