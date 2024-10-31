function solution(keyinput, board) {
  //좌표 최대값
    
  const maxX = Math.floor(board[0]/2);
  const maxY = Math.floor(board[1]/2);

  //시작 좌표

  let x = 0;
  let y = 0;

  //각 방향 이동처리

  keyinput.forEach(direction => {
    if(direction === 'up'){
      y = Math.min(y+1, maxY)
    } else if(direction === 'down'){
      y = Math.max(y-1, -maxY)
    } else if(direction === 'left'){
      x = Math.max(x-1, -maxX)
    } else if(direction === 'right'){
      x = Math.min(x+1, maxX)
    }
  })
    
  return [x,y]
}