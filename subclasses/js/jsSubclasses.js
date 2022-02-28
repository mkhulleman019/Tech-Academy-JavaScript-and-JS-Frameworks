class shape {
    constructor(color){
        this.color = color;
    }
    getArea(){
        return "";
    }
}

class rectangle extends shape{
    constructor(color, height, width){
        super(color);
        this.height =  height;
        this.width = width;
    }
    getArea(width, height){
       return this.width * this.height;
    }
}
let rectangle1 = new rectangle("blue", 4, 5);
console.log(rectangle1.getArea());


class triangle extends shape{
    constructor(color, base, height){
        super(color);
        this.base = base;
        this.height = height;
    }
    getArea(base, height){
        return (.5 * this.base) * this.height;
    }  
}
let triangle1 = new triangle("red", 6, 6);
console.log(triangle1.getArea());

class circle extends shape{
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }
    getArea(radius){
        return 3.1415 * (this.radius ** 2);
    }
}
let circle1 = new circle("yellow", 5);
console.log(circle1.getArea());
