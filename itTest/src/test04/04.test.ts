import {PeopleType} from "./04";

let people: Array<PeopleType> = []

beforeEach( () => {
    people = [
        {name: 'Pavel Radz', age:34},
        {name: 'Alex Radz', age:35},
        {name: 'Darya Britova', age:32}
    ]
})

test('should get array of greeting message', ()=>{
    let messages = people.map(t => t.name)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Pavel Radz')
    expect(messages[1]).toBe('Alex Radz')
    expect(messages[2]).toBe('Darya Britova')
})