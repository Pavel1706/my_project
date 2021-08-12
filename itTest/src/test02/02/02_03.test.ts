import {CityType, createHello, separated, separated2} from "../../02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType;

beforeEach(() => {
    city = {

        title: "New York",
        houses: [
            {
                id: 1,
            buildedAt: 2012, repaired: false,
            address: {
                number: 100, street: {
                    title: "White street"
                }
            }
        },
            {
                id:2,
                buildedAt: 2008, repaired: false,
                address: {
                    number: 100, street: {
                        title: "Happy street"
                    }
                }
            }, {
                id: 3,
                buildedAt: 2020, repaired: false,
                address: {
                    number: 101, street: {
                        title: "Happy street"
                    }
                }
            }],
        governmentBuildings: [{
            type: "Hospital", budget: 200000, staffCount: 200,
            address: {
                street: {
                    title: "Central Str"
                }
            }
        },
            {
                type: "Fire station", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }],
        citizensNumber: 1000000
    }
})

test('look for building stuff > 500', ()=>{
    let stuff = city.governmentBuildings.filter(t=>t.staffCount >500)

    expect(stuff.length).toBe(1)
    expect(stuff[0].staffCount).toBe(1000)
    expect(stuff[0].type).toBe('Fire station')
})

test('destroe house on the steer "Happy street"', ()=>{
    let des = city.houses.filter(t=>t.address.street.title !=='Happy street')

    expect(des[0].id).toBe(1)


})

test("Budget should be changed for Hospital", ()=>{
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for Fire-station", ()=>{
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("House should be repared", ()=> {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

test("staff should be increased", ()=>{
    toHireStaff(city.governmentBuildings[0], 20);
    toHireStaff(city.governmentBuildings[1], 100);


    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1100)
})

test("staff should be increased", ()=>{
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})


test("Greeting message should be correct", ()=>{
   const message =  createMessage(city);

    expect(message).toBe('Hello New York citizens. I want you be happy. All 1000000 men')
})

test('list streets', ()=>{
    let a = separated(city.governmentBuildings)
    expect(a.length).toBe(2)
    expect(a[0]).toBe("Central Str")
    expect(a[1]).toBe("South Str")
})

test('list streets houses', ()=>{
    let a = separated2(city.houses)
    expect(a.length).toBe(3)
    expect(a[0]).toBe("White street")
    expect(a[1]).toBe("Happy street")
    expect(a[2]).toBe("Happy street")
})

test("create greetings on the street", ()=>{
    let message =createHello(city.houses)
    expect(message.length).toBe(3)
    expect(message[0]).toBe("Hello guys from White street")
    expect(message[1]).toBe("Hello guys from Happy street")
    expect(message[2]).toBe("Hello guys from Happy street")

})