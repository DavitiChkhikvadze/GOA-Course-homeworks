function manualFilter(a, b) {
    const result = [];
    
    for (let i = 0; i < b.length; i++) {
        const item = b[i];
        const shouldInclude = a(item);
        
        if (shouldInclude) {
            result.push(item);
        }
    }

    return result;
}


console.log(Math.sqrt(4));    
console.log(Math.sqrt(9));    
console.log(Math.sqrt(16));   
console.log(Math.sqrt(25));   
console.log(Math.sqrt(0));

console.log(Math.ceil(4.2));  
console.log(Math.ceil(-4.2)); 
console.log(Math.ceil(0));    
console.log(Math.ceil(7.8));  
console.log(Math.ceil(-7.8));

console.log(Math.floor(4.7));  
console.log(Math.floor(-4.7)); 
console.log(Math.floor(0));    
console.log(Math.floor(7.1));  
console.log(Math.floor(-7.1)); 

console.log(Math.trunc(4.9));  
console.log(Math.trunc(-4.9)); 
console.log(Math.trunc(0));    
console.log(Math.trunc(7.1)); 
console.log(Math.trunc(-7.1));

console.log(Math.pow(2, 3));   
console.log(Math.pow(5, 2));   
console.log(Math.pow(7, 0));   
console.log(Math.pow(10, 2)); 
console.log(Math.pow(3, 4));

console.log(Math.abs(5));    
console.log(Math.abs(-5));   
console.log(Math.abs(0));    
console.log(Math.abs(10.5)); 
console.log(Math.abs(-10.5));

console.log(Math.min(1, 2, 3));        
console.log(Math.min(-1, -2, -3));     
console.log(Math.min(5, 10, 0));       
console.log(Math.min(2.5, 2.1, 2.9));  
console.log(Math.min(100, 1000, 10));  

console.log(Math.max(1, 2, 3));        
console.log(Math.max(-1, -2, -3));     
console.log(Math.max(5, 10, 0));       
console.log(Math.max(2.5, 2.1, 2.9));  
console.log(Math.max(100, 1000, 10));

let date = 0;
setInterval(function(){
    date ++;
    console.log("Current minutes are " + date);
    if(date === 34){
        console.log("Time up");
        clearInterval();
    }

},60000)



const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth(); 
const day = currentDate.getDay(); 
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const milliseconds = currentDate.getMilliseconds();


console.log("Year:", year);
console.log("Month:", month); 
console.log("Date:", date);
console.log("Day of Week:", day); 
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);




