class UberPrice {
    constructor(price,surgePrices,distance){
        this.price = price;
        this.surgePrices = surgePrices;
        this.distance = distance;

    }
    getPrice(){
        if(this.distance < 4){
            console.log(`distance:${this.distance}km, UberPrice : ${this.price}Rs`);
        }
        else
        {
            let uberPrice = this.distance*this.surgePrices;
            console.log(`distance:${this.distance}km, UberPrice : ${uberPrice}Rs`);
        }
    }
}

let trip1 = new UberPrice(50,7,3);

trip1.getPrice();

