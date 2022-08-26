let a=[]
let n=100; 
let k=2;
//sieve of erathothenes
//check for no and eliminates its mutiples


var checkprime=function(i){
  
  if(i== 0 || i==1) {
    return false
    
  }
  if(i==2 || i==3){
    return true
  }
  if(i%2 ==0 || i%3 == 0){
    return false
  }
  for(let j=5 ;j<=Math.sqrt(i);j=j+6){
    if(i%j==0 || i%(j+2)==0){
      return false
    }
  }
    return true;
}
while(k<=n){
  if(checkprime(k)){
    a.push(k)
  }
  k++
}
console.log(a)
