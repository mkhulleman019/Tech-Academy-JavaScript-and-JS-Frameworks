class shape {
    constructor(color){
        this.color = color;
    }
    getArea(){
        return "getting area of shape";
    }
}

class rectangle extends shape{
    constructor(color){
        super(color);
        this.height =  height;
        this.width = width;
    }
}

class triangle extends shape{
    constructor(color){
        super(color);
        this.base = base;
        this.height = height;
    }
}

class circle extends shape{
    constructor(color){
        super(color);
        this.radius = radius;
    }
}
