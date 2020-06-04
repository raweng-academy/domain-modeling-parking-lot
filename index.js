class VendingMachine {
  constructor(parkingLotBuilding) {
    this.parkingLotBuilding = parkingLotBuilding;   
  }

  issueTicket(carRegistrationNumber) {
    const slot = this.parkingLotBuilding.getNearestAvailableSlot();

    if (!slot) {
      throw new Error('No slots available');
    }

    return new Ticket(carRegistrationNumber, slot.floorNumber, slot.slotNumber);
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
    const floor = this.getFloorByNumber(ticket.floorNumber);
    const slot = floor.getSlotByNumber(ticket.slotNumber);

    slot.park(car);
  }

  getNearestAvailableSlot() {
    for (const floor of this.floors) {
      const slot = floor.getNearestAvailableSlot();
      if (slot) {
        return slot;
      }
    }
  }

  getFloorByNumber(floorNumber) {
    for (const floor of this.floors) {
      if (floor.floorNumber === floorNumber) {
        return floor;
      }
    }
  }
}

class Floor {
  constructor(floorNumber, slots) {
    this.floorNumber = floorNumber;
    this.slots = slots;
  }

  getNearestAvailableSlot() {
    for (const slot of this.slots) {
      if (slot.isAvailable()) {
        return slot;
      }
    }
  }

  getSlotByNumber(slotNumber) {
    for (const slot of this.slots) {
      if (slot.slotNumber === slotNumber) {
        return slot;
      }
    }
  }
}

class Slot {
  constructor(floorNumber, slotNumber) {
    this.floorNumber = floorNumber;
    this.slotNumber = slotNumber;
    this.car = null;
  }

  park(car) {
    this.car = car;
  }

  isAvailable() {
    return this.car === null;
  }
}

class Car {
  constructor(registrationNumber) {
    this.registrationNumber = registrationNumber;
  }
}

// Builders ---------------------

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
  const car1 = new Car('MH48 EH 9841');
  const car2 = new Car('MH48 AH 2048');

  console.log('Issuing ticket for car 1');
  const ticket1 = vendingMachine.issueTicket(car1.registrationNumber);
  console.log('Ticket for car 1', ticket1);
  console.log('Parking car 1 with ticket');
  parkingLotBuilding.park(car1, ticket1);

  console.log('Issuing ticket for car 2');
  const ticket2 = vendingMachine.issueTicket(car2.registrationNumber);
  console.log('Ticket for car 2', ticket2);
  console.log('Parking car 2 with ticket');
  parkingLotBuilding.park(car2, ticket2);
}

runProgram();