const solution = angle =>

    angle<90 ? 1 
    : angle===90 ? 2 
    : 90<angle && angle<180 ? 3
    : 4
