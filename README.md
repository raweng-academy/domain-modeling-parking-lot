# Parking lot problem for the Domain Modeling session

## The problem statement

A parking lot building has three floors, numbered 1, 2, and 3, respectively. The entrance gate of the park lot building is at floor number 1.

Each floor has five parking slots, numbered 1, 2, 3, 4, and 5, respectively, with 1 being nearest to the gate and 5 being the farthest.

You are required to write code for a ticket vending machine that issues a ticket to any car that enters the parking lot building. Here are a few things to keep in mind while writing the code:

The vending machine should issue a ticket to the car for the nearest empty slot 
To issue a ticket, the vending machine needs the car's registration number
If the parking lot is full, the car will not be issued a ticket

## Nouns, verbs and relations - extracting the domain from the problem statement

### Nouns and their attributes:

- ParkingLotBuilding
- Floor
  - floorNumber
- Slot
  - slotNumber
- VendingMachine
- Ticket
  - carRegistrationNumber
  - floorNumber
  - slotNumber
- Car
  - registrationNumber

### Verbs

- VendingMachine
  - issueTicket given a carRegistrationNumber
- ParkingLotBuilding
  - park the car with the ticket

### Relations

- ParkingLotBuilding
  - has floors
- Floor
  - has slots
- Slot
  - may have a car parked
- VendingMachine
  - is connected to a ParkingLotBuilding

## Extensions to the problem statement

- Implement car exiting the parking lot
- Implement 2 wheeler vehicles in addition to car
- Given a vehicle's registration number, find out the slot where the vehicle is parked


## Further Learning Materials

- Domain Driven Design by Martin Fowler: https://martinfowler.com/bliki/DomainDrivenDesign.html
- Making a case for domain modelling: https://hackernoon.com/making-a-case-for-domain-modeling-17cf47030732
- A book on Domain Driven Design by Eric Evans: https://www.amazon.in/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215