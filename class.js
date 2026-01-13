const bigday = new Date(2019, 6, 19);
console.log(bigday.toLocaleDateString());
if(bigday.getTime()<Date.now()){
    console.log("once upon time...")
}

function myclass(){
    this.myfield = "foo"

} //creating class 
myclass.mystaticfield = "bar";
const myinstance = new myclass(); //creating instance of the class 
console.log(myinstance.myfield);

class color{
    constructor(r,g,b){
        this.value = [r,g,b];
    }
    getred(){
        return this.value[0];//understand the instance method 
    }
    setred(value){
        this.value[0] = value;
    }
}
const red = new color(20,28,28);
console.log(red);
red.setred(0);
console.log(red.getred());

// same syntax for above like 

class color2{
    constructor(...values){ //noted used rest parameter inside class
        this.values = values;
    }
}
const color1 = new color2(23,23,23,24)
console.log(color1.values);

//understand the instance method 


/*getred(){
        return this.value[0];//understand the instance method 
    }
    setred(value){
        this.value[0] = value;
    }*/

//using direct accses the value without method

