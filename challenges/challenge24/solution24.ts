/* Basada en la solucion de https://github.com/Achalogy */
function canExit(maze:string[][]):boolean {
  const replace = (str:string) => str
  .replace((/([S][\sE])|([\sE][S])/g  ), "SS")
  .split("");

  let x:string[][][] = [];

  new Array(maze[0].length * maze.length).fill(0).forEach(() => {
    let check:string[][] = [...maze];

    maze.map((horizontal, i) => {
      maze[i] = replace(horizontal.join(""));

      const v = maze[0].map((_, i) => replace(maze
        .map((x) => x[i])
        .join("")));

      maze[i] = v.map((x) => x[i]);
      
    });
    check.flat().join("") == maze.flat().join("") && x.push(check);
  });
  
  return !x.flat(2).includes("E");
}