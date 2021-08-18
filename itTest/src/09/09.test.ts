
type userType={
    name: string
    age: number
    address: {title:string}
}

function icreaseAge(u:userType){
    u.age++;
}

test('big reference type test', ()=>{


let user:userType ={
    name: 'Pavel',
    age: 34,
    address: {
        title: 'Minsk'
    }
}
icreaseAge(user)

    const superman = user

    superman.age=32

expect(user.age).toBe(32)

})

test('array reference test', ()=>{


    let usersCount =100;

    let adminsCount = usersCount

    adminsCount=usersCount+1

    expect(usersCount).toBe(100)

})

test('value type test', ()=>{


    let users =[
        {
            name: 'Pavel',
            age: 34
        },
        {
            name: 'John',
            age: 34
        }
    ]
    let admins=users

    admins.push({name:'Band', age:10})


    expect(users[2]).toEqual({name:'Band', age:10})

})

test('big  type test', ()=>{

    let address = {
        title:'Minsk'
    }

    let user:userType ={
        name: 'Pavel',
        age: 34,
        address: address

    }
    // let addr =user.address

    let user2: userType = {
        name:'Natasha',
        age: 30,
        address: address
    }

   address.title = 'Katmandy';


    expect(user.address.title).toBe('Katmandy')

})
test('big   array type test', ()=>{

    let address = {
        title:'Minsk'
    }

    let user:userType ={
        name: 'Pavel',
        age: 34,
        address: address

    }
    // let addr =user.address

    let user2: userType = {
        name:'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name:'Misha', age:4, address:address}]

    users[2].age=7
    const admins = [user, user2]
    admins[0].name='Klysha'
    const admin = {...user}
    admin.age = 15

    expect(users[2].age).toBe(7)
    expect(user.name).toBe('Klysha')
    expect(admin.age).toBe(15)
    expect(admins.length).toBe(2)
})
    test('sort array test', ()=> {

        const letters = ['c', 'd', 'a', 'z', 'e']

        passsportist(letters);

        expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
    })

function passsportist(letters: any){

    let copy = [...letters].sort()
    console.log(copy)
}
