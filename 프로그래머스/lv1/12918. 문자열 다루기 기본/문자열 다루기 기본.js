function solution(s) {
s = s.split('').map(Number);
    if(s.length === 4 || s.length=== 6){
     if(!s.includes(NaN)){
       return true
       } else{
           return false
       }
    }else {
        return false
    }
}
