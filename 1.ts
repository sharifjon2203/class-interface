interface Vehicle {
    brand: string,
    model: string,
    year: number,
    start: () => void
}



class Car implements Vehicle {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`Car - ${this.brand} ${this.model} started`);
    }
}

const car1 = new Car("Toyota", "Camry", 2023);
const car2 = new Car("Toyota 2", "Camry", 2024);
const car3 = new Car("Toyota 3", "Camry", 2025);

car1.start();
car2.start();
car3.start();

