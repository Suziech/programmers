function solution(arr) {
    let currentArray = [...arr]; // 현재 배열 초기화
    let previousArray = null; // 이전 배열 초기화
    let answer = 0; // 반환할 결과 값 초기화

    // 이전 배열과 현재 배열이 다를 때까지 반복
    while (previousArray !== currentArray.toString()) {
        previousArray = currentArray.toString(); // 이전 배열 업데이트

        // 배열을 변화시키는 작업 수행
        for (let i = 0; i < currentArray.length; i++) {
            if (currentArray[i] >= 50 && currentArray[i] % 2 === 0) {
                currentArray[i] /= 2;
            } else if (currentArray[i] < 50 && currentArray[i] % 2 !== 0) {
                currentArray[i] = currentArray[i] * 2 + 1;
            }
        }

        // 반복 횟수 증가
        answer++;
    }

    return answer - 1; // 마지막에 한 번 더 반복하므로 1을 빼줍니다.
}