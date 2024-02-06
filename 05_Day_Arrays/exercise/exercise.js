const arr= Array();
const arr2 = Array(5).fill(3);
console.log(arr2.length);
console.log(arr2[0]);
console.log(arr2[arr2.length - 1]);
console.log(arr2[(arr2.length - 1)/2]);
mixedDataTypes=[1,'Rahul',[1,3],4.5,true,'India']
console.log(mixedDataTypes.length);
let itCompanies = ['Facebook', 'Twitter', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle','Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[parseInt((itCompanies.length-1)/2)]);
for(let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i]);
}


for(let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i].toUpperCase());
}

console.log(itCompanies.join());

if(itCompanies.includes('Google')){
    console.log('Google');
}else{
    console.log('is not found');
}
for(let i=0;i<itCompanies.length;i++){
    let compnay= itCompanies[i]
    let counter=0;
    for(let j=0;j<compnay.length;j++){
        if(compnay[j].toLowerCase()=='o'){
            counter++;
        }
    }
    if (counter>1){
         console.log(compnay)
    }
    
}
console.log("Array:",itCompanies)
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(itCompanies.length-3));
console.log(itCompanies.slice(parseInt(itCompanies.length/2),parseInt(itCompanies.length/2)+1));
console.log(itCompanies.shift())
console.log(itCompanies);
let middleIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex, itCompanies.length % 2 === 0 ? 2 : 1);
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

itCompanies = [];
console.log(itCompanies);
