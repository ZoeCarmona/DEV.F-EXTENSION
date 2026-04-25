// Crear un objeto "auto" con propiedades como marca, modelo, año, y un método mostrarInfo que imprima la información del auto.

class Car {
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    showInfo(){
        console.log(this.brand, this.model, this.year)
    }
}

const car1 = new Car('Toyota', 'BC-23', 2025)
car1.showInfo()