class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("eee rrr");
  }
}

const veh = new Vehicle("orange");
console.log(veh.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log("VRRRRRRRRRRRRRRRRRRRRR");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
