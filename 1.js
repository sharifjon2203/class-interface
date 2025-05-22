var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car - ".concat(this.brand, " ").concat(this.model, " started"));
    };
    return Car;
}());
var car1 = new Car("Toyota", "Camry", 2023);
var car2 = new Car("Toyota 2", "Camry", 2024);
var car3 = new Car("Toyota 3", "Camry", 2025);
car1.start();
car2.start();
car3.start();
