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
