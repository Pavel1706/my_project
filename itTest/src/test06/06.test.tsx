import {separated} from "../02_02";
type lessonsType = {
    title: string
    name: string
}

type AddressType = {
    street:StreetType
}

type StreetType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<lessonsType>
    address: AddressType
}



let props: ManType;
beforeEach(()=> {
    props = {
            name: 'pavel',
            age: 33,
            lessons: [{title: '1', name: 'React'}, {title: '2', name: 'HTML'},{title: '3', name: 'JS'}],
            address: {
                street: {
                    title: 'Shshkina'
                }
            }
        }

})


test('', ()=> {
    let props = {
        name: 'pavel',
        age: 33,
        lessons: [{title: 1}, {title: 2}],
        address: {
            street: {
                title: 'Shshkina'
            }
        }
    }

    // const age = props.age
    // const lessons = props.lessons

    const {age, lessons} = props
    const {title} = props.address.street




    expect(age).toBe(33)
    expect(lessons.length).toBe(2)


    expect(title).toBe('Shshkina')

})

test('', ()=> {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [,ls2, ...restLessons]= props.lessons


    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    // expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0].name).toBe('JS')
    expect(restLessons[0]).toStrictEqual({title: '3', name: 'JS'})


})