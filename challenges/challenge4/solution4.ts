interface Box {
    l:number;
    w:number;
    h:number;
}

function fitsInOneBox(boxes:Box[]):boolean {
    return boxes.sort((a,b) => b.l - a.l && b.w - a.w && b.h - a.h).every((value:Box, index:number) =>{
        const indexValue:number = index + 1;
        return boxes[indexValue]
        ? value.l > boxes[indexValue].l && value.w > boxes[indexValue].w && value.h > boxes[indexValue].h
        : true
    })
}