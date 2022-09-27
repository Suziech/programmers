function solution(a, b) {
    if(Math.abs(a-b)===0){
        return a;
    } 
    
let result = 0;
    if(a<b){
        for(let i=a; i<b+1; i++){
            result+=i;
        }
        return result;
        
    } else if(a>b) {
        for(let i=b; i<a+1; i++){
          result+=i;
        }
        return result;
    }
}
