class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        console.log(`radius: ${this.radius}`);
    }
    setRadius(radius){
        this.radius = radius;
        console.log(`radius: ${radius}`);
    }
    getColor(){
        console.log(`color: ${this.color}`);
    }
    setColor(color){
        this.color = color;
        console.log(`color: ${color}`);
    }
    toString(){
        console.log(`Circle:[radius: ${this.radius},color: ${this.color}]`);
    }
    getArea(){
        let Area = 22/7*Math.pow(this.radius,2);
        console.log(`Radius: ${this.radius}, Area: ${Area}`);
    }
    getCircumference(){
        let circumference = 2*22/7*(this.radius);
        console.log(`Radius: ${this.radius}, Circumference: ${circumference}`);
    }

}



let circle1 = new Circle (1.0,"red");

circle1.getRadius();

circle1.setRadius(3.0);

circle1.getColor();

circle1.setColor("blue");

circle1.toString();

circle1.getArea();

circle1.getCircumference();