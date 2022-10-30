const solution = (price) => {
   const discount5per = price*0.05;
   const discount10per = price*0.1
   const discount20per = price*0.2;
    
   return Math.floor(100000 <= price && price < 300000 ? price-discount5per
          : 300000 <= price && price < 500000 ? price-discount10per
          : 500000 <= price ? price-discount20per
          : price)
}