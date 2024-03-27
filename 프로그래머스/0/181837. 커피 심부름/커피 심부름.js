function solution(order) {
    return order.map(coffee => coffee.includes('latte') ? 5000 : 4500).reduce((acc,cur)=>acc+cur)
}