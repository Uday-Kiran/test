var sum = 0;
u = [1,23,47,12,56,135,2];

for (let i = 0; i < u.length; i++) {
    console.log(u[i])
    sum += u[i]
    
}
console.log("sum is :"+sum);

// object data type is similar to dictionaries

df = {
    "name" : "DJ",
    "age" : 24,
    "occupation" : "student"
}

for(data in df){
    console.log(data +':' + df[data])
}