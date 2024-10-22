function solution(arr) {
    var answer = [[]];
    //3. 만약 행 > 열 이라면, 열의 길이가 행의 길이가 같아질때까지 0 을 각 배열에 넣어준다.
    //4. 만약 열 < 행 이라면, 행의 길이가 열의 길이와 같아질때까지 0이 열의 수만큼 들어간 배열원소를 넣어준다.
    
    const row = arr.length;
    const col = arr[0].length;

    if(row > col) {
        for(let i=0; i<row-col; i++){
            arr.map(item => item.push(0));
        }
        answer = arr;
    } else if(col > row){
               for(let i=0; i< col-row; i++){
            arr.push(new Array(arr[0].length).fill(0))
        }
        answer = arr
    } else if(col === row){
answer= arr
    }
    return answer;
}