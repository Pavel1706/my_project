export type PeopleType ={
    name:string
    age: number
}

const PavelFormat = (man:PeopleType)=>({
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })

const people: Array<PeopleType> = [
    {name: 'Pavel Radz', age:34},
    {name: 'Alex Radz', age:35},
    {name: 'Darya Britova', age:32}
]



const dev1 = [
    {
        stack:['js','html','css','react','tdd'],
        firstName: "Pavel", lastName:"Radz"
    },
    {
        stack:['js','html','css','react','tdd'],
        firstName: "Alex", lastName:"Radz"
    },
    {
        stack:['js','html','css','react','tdd'],
        firstName: "Darya", lastName:"Britova"
    }
]

let d1 = PavelFormat(people[0])
let d2 = PavelFormat(people[1])
let d3 = PavelFormat(people[2])

let dev2 = [
    d1, d2, d3
]

let dev3 = people.map( PavelFormat )
let dev4 = people.map( man=>({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}) )

let messages = people.map(t => `Hello ${t.name.split(' ')[0]}.Welcome to It-incubator` )
console.log(messages)