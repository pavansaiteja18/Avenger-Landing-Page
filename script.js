let a=121;
let b;
let rev=0;
let rem;
b=a;
while(a>0){
   rem=a%10;
   rev=rev*10+rem;
   a=a/10;
//    console.log(rev);
if(rev==b){
    console.log(`given ${b} is a palindrome`);
}
else{
    console.log(`given ${b} is not a palindrome`);
}
}
