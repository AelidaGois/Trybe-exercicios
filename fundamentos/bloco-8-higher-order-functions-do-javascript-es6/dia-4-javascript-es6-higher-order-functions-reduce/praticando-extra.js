const rockets = [
{country:'Rússia', launches:32},
{country:'US', launches:23},
{country:'China', launches:16},
{country:'Europe', launches:7},
{country:'índia',launches:4},
{country:'Japan', launches:3},

]
// Descobrir o total de lançamentos de foguetes em relação a todos os países.

function lancamentoFoguetes(){
return rockets.reduce((anterior,rocketCurr,index)=> {
    if(anterior === ''){
        return rocketCurr.country;
    }
    if(index === rockets.length-1){
        return anterior + '.';
    }
return `${anterior}, ${rocketCurr.country}` 
},'')
} 
console.log(lancamentoFoguetes());
console.log();