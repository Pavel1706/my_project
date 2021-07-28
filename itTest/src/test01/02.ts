type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: Array<technologiesType>
}
type addressType = {
    streetTitle: string
    city: LocalCityType
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type technologiesType = {
    id: number
    title: string
}

const student: studentType = {
    id: 1,
    name: 'Pavel',
    age: 34,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city : {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'JS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.countryTitle)
console.log(student.technologies[2].title)