const floors = [
  {
    floorNumber: 1,
    slots: [
      {
        slotNumber: 1,
        parked: false,
      },
      {
        slotNumber: 2,
        parked: false,
      },
      {
        slotNumber: 3,
        parked: false,
      },
      {
        slotNumber: 4,
        parked: false,
      },
      {
        slotNumber: 5,
        parked: false,
      },
    ]
  },
  {
    floorNumber: 1,
    slots: [
      {
        slotNumber: 1,
        parked: false,
      },
      {
        slotNumber: 2,
        parked: false,
      },
      {
        slotNumber: 3,
        parked: false,
      },
      {
        slotNumber: 4,
        parked: false,
      },
      {
        slotNumber: 5,
        parked: false,
      },
    ]
  },
  {
    floorNumber: 1,
    slots: [
      {
        slotNumber: 1,
        parked: false,
      },
      {
        slotNumber: 2,
        parked: false,
      },
      {
        slotNumber: 3,
        parked: false,
      },
      {
        slotNumber: 4,
        parked: false,
      },
      {
        slotNumber: 5,
        parked: false,
      },
    ]
  }
];

function run() {
  const carRegistrationNumber = "MH 04 AH 9841";
  let freeSlot;
  let freeFloor;

  for (floor of floors) {
    for (slot of floor.slots) {
      if (!slot.parked) {
        freeSlot = slot;
        freeFloor = floor;
        break;
      }
    }
  }

  const ticket = {
    carRegistrationNumber,
    floorNumber: freeFloor.floorNumber,
    slotNumber: freeSlot.slotNumber
  };

  console.log(ticket);

  let slotToPark;

  for (floor of floors) {
    for (slot of floor.slots) {
      if (!slot.parked) {
        slotToPark = slot;
        break;
      }
    }
  }

  slotToPark.parked = true;
}

run();