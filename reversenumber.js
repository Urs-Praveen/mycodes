let n=1535
let temp=n
let ans=0,rem=0
var reverse=(n) =>{
  while(temp>0){
     rem=temp%10
    ans=ans*10+rem
    temp=Math.floor(temp/10)
  }
  return ans
}
console.log(reverse(n))
