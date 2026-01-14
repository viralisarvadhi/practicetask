/*class color{
    #value;
    constructor(r, g, b){
        this.#value = [r,g,b]
    }
    getred(){
        return this.#value[0];
    }
    setred(value){
        if(value<0 || value>255){
            throw new RangeError("invalid input")
        }
        this.#value[0] = value;
    }
}
const red = new color(255,0,0);*/

/*class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
//Color.isValid(1000, 0, 0); // false*/

class rectangle{
    constructor(){
    this.name="rectangle"
}
}
class ploygon{
    constructor(){
        this.name="polygon"
    }
}
class squre extends ploygon{
    constructor(){
        super();
    }
}
Object.setPrototypeOf(squre, rectangle);

const newinstance = new squre();

console.log(newinstance instanceof ploygon);
console.log(newinstance instanceof rectangle);

console.log(newinstance.name);