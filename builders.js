class VendingMachine {
  constructor(parkingLotBuilding) {
    this.parkingLotBuilding = parkingLotBuilding;   
  }

  issueTicket(carRegistrationNumber) {
  }
}

class Ticket {
  constructor(carRegistrationNumber, floorNumber, slotNumber) {
    this.carRegistrationNumber = carRegistrationNumber;
    this.floorNumber = floorNumber;
    this.slotNumber = slotNumber;   
  }
}

class ParkingLotBuilding {
  constructor(floors) {
    this.floors = floors;
  }

  park(car, ticket) {
  }
}

class Floor {
  constructor(floorNumber, slots) {
    this.floorNumber = floorNumber;
    this.slots = slots;
  }
}

class Slot {
  constructor(floorNumber, slotNumber) {
    this.floorNumber = floorNumber;
    this.slotNumber = slotNumber;
    this.car = null;
  }
}

class Car {
  constructor(registrationNumber) {
    this.registrationNumber = registrationNumber;
  }
}

function buildFloor(floorNumber) {
  return new Floor(floorNumber, [
    new Slot(floorNumber, 1),
    new Slot(floorNumber, 2),
    new Slot(floorNumber, 3),
    new Slot(floorNumber, 4),
    new Slot(floorNumber, 5),
  ]);
}

function buildParkingLotBuilding() {
  const floor1 = buildFloor(1);
  const floor2 = buildFloor(2);
  const floor3 = buildFloor(3);

  return new ParkingLotBuilding([
    floor1,
    floor2,
    floor3,
  ]);
}

// Running the program -----------------

function runProgram() {
  const parkingLotBuilding = buildParkingLotBuilding();
  const vendingMachine = new VendingMachine(parkingLotBuilding);
}

runProgram();