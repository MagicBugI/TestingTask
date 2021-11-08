function  taskOne(param = 1) {
  if(param <= 0)return 'The number is not natural';
  if(isNaN(Number(param))) return 'Please enter natural number';
  const numberArr = String(param).split('');  
  const numberSum = numberArr.reduce((prev , cur)=> prev += Number(cur) , 0);
  const numberRow =  numberArr.reduce((prev , cur , index)=>{ 
    return index % 2 === 0 ?  prev += Number(cur) : prev -= Number(cur)
  }, 0);
  
  return {length : numberArr.length , first : Number(numberArr[0]) , numberSum , numberRow};
}

function  taskTwo(param){
    if(!param || param <= 0 || isNaN(Number(param))) return  "Please enter the natural number";
    let counter = 1;
    const numbersArr = []
    while(2**counter - 1 < param){
        numbersArr.push(2**counter - 1);
        counter++;
    }
    return numbersArr;
}
/* console.log(taskTwo(-100)); */
module.exports = {taskOne , taskTwo};