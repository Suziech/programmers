function solution(n) {
   	const result = Array.from({length:n}, () => Array(n).fill(0));
  	const directions = [[0,1],[1,0],[0,-1],[-1,0]];
  	let directionIndex = 0;
   	let x = 0, y = 0;
  	let num = 1;
  while(num <= n*n) {
  	result[x][y] = num;
    num++
    let nextX = x + directions[directionIndex][0];
    let nextY = y + directions[directionIndex][1];
    
    if(nextX < 0 || nextX >= n || nextY < 0 || nextY >= n || result[nextX][nextY] !== 0) {
    	directionIndex = (directionIndex + 1)%4
      nextX = x + directions[directionIndex][0];
      nextY = y + directions[directionIndex][1];
    }
    
    x = nextX;
    y = nextY;
  }
  
  return result
}