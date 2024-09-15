class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `${this.model} Engine ${this.year}`;
    }
  }
  
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year); 
      this.balance = balance;
    }
  
    info() {
      return `${this.model} has a balance of $${this.balance}`;
    }
  }
  
  const car = new Car("Pontiac Firebird", 1976);
  console.log(car.details());
  
  const sedan = new Sedan("Volvo", 2015, 30000);
  console.log(sedan.info());
  