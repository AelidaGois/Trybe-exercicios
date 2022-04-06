const num1 = 52.35;
const num2 = 4;
const num3 = -52.45;

if(num1 > num2 && num1 > num3){
    console.log("Maior número: " + num1);
}else if(num2 > num1 && num2 > num3 ){
    console.log("Maior número: " + num2);
}else{
    console.log("Maior número: " + num3);
}