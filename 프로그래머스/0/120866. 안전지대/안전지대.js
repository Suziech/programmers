function solution(board) {
    const n = board.length;
    const directions = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const dangerMap = Array.from({length:n}, () => Array(n).fill(0));
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(board[i][j] === 1){
                for(const [dx, dy] of directions) {
                    dangerMap[i][j] = 1
                    const ni = dx + i
                    const nj = dy + j
                    if(ni >= 0 && ni < n && nj >= 0 && nj < n){
                        dangerMap[ni][nj] = 1
                    }
            }
            }

        }
    }
    const answer = dangerMap.map(item => item.filter(location => location === 0).length).reduce((acc,cur) => acc+cur)
   return answer
    }