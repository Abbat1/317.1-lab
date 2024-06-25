// @ts-check

class NCycle<T> {
    public status: string = "stopped";
    public make: T | T[];
    public model: T | T[];
    public wheels: number;
  
    constructor(make: T | T[], model: T | T[], wheels: number) {
        this.model = model;
        this.wheels = wheels;
        this.make = make;
    
    }
    start() {
      this.status = "begun";
    }
    stop() {
      this.status = "paused";
    }
  
    print(num: number = 0) {
      if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
        console.log(`This is a ${this.make} ${this.model} NCycle.`);
      } else if (Array.isArray(this.make) && Array.isArray(this.model)) {
        if (this.make[num] != undefined && this.model[num] != undefined) {
          console.log(
            `This NCycle has a ${this.make[num]} ${this.model[num]} at ${num}`
          );
        } else {
          console.log("This NCycle was created correctly");
        }
      } else {
        console.log("This NCycle was not created correctly");
      }
    }
  
    printAll() {
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
        let longer: number =
          this.make.length > this.model.length
            ? this.make.length
            : this.model.length;
        if (this.make.length === this.model.length) {
          for (let i = 0; i < this.make.length; i++) {
            this.print(i);
          }
        } else {
          this.print(longer);
        }
      } else {
        this.print();
      }
    }
  }
  
  class Vehicle {
    public status: string = "paused";
    public make: string;
    public model: string;
    public wheels: number;
  
    constructor(make: string, model: string, wheels: number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "begun";
    }
    stop() {
      this.status = "paused";
    }
  }
  
  class Fullsizecar extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 4);
    }
  }
  
  class dirtbike extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "begun") {
      console.log("The vehicle is now on.");
    } else {
      console.log("The vehicle is now off.");
    }
}
  /*const motorcycle = atv4wheeler("X-pro", "ATV quads");
  atv4wheeler.start();
  printStatus(atv4wheeler);
  console.log(atv4wheeler.make.toUpperCase());
  
  const myBuick = new Car("corvette", "c6z06");
  myCorvette.wheels = myCorvette.wheels - 1;
  console.log(myCorvette.wheels);*/
  
  //Testing cycle for code from canva website
  const testCycle1 = new NCycle<number>(1, 2, 3);
  testCycle1.print();
  testCycle1.printAll();
  
  const testCycle2 = new NCycle<string>("This", "That", 4);
  testCycle2.print();
  testCycle2.printAll();
  
  const makes4 = ["bmw", "Audi", "mustang"];
  const models4 = ["m5", "RS3", "Terminator-cobra"];
  const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
  testCycle4.print(2);
  testCycle4.printAll();
  
  const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const models5 = [1, 1, 2, 3, 5];
  const testCycle5 = new NCycle<number[]>(makes5, models5, 0);
  testCycle5.print(7);
  testCycle5.printAll();