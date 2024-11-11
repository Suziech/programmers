function solution(rank, attendance) {
    const eligibleStudents = rank.map((rank, index)=>({rank,index}))
    const filteredStudents = eligibleStudents.filter((item,index) => attendance[index]).sort((a,b)=> a.rank - b.rank)
    
    console.log('filteredStudents',filteredStudents[0].index * 10000)
    
    return (10000 * filteredStudents[0].index) + (100 * filteredStudents[1].index) + filteredStudents[2].index
}