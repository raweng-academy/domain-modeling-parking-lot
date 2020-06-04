class VendingMachine {

}

class Ticket {
  constructor(carRegistrationNumber, floorNumber, slotNumber) {
    this.carRegistrationNumber = carRegistrationNumber;
    this.floorNumber = floorNumber;
    this.slotNumber = slotNumber;   
  }
}

class ParkingLotBuilding {

}

class Floor {
  constructor(floorNumber) {
    this.floorNumber = floorNumber;
  }
}

class Slot {
  constructor(floorNumber, slotNumber) {
    this.floorNumber = floorNumber;
    this.slotNumber = slotNumber;
  }
}

class Car {
  constructor(registrationNumber) {
    this.registrationNumber = registrationNumber;
  }
}
