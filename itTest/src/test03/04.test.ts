import {predicate} from './04'

test('should take old men older then 90', ()=>{
    let age = [12,54,123,65,32,87,100,90]

    let predicate =(age: number)=>{
        return age > 90;
    }

    let oldAge = age.filter(predicate)

    expect(oldAge.length).toBe(2);
    expect(oldAge[1]).toBe(100);
    expect(oldAge[0]).toBe(123);
})

test('I`m look for cheap course', ()=>{
    const courses = [
        {title:'css', price: 100},
        {title:"JS", price: 300},
        {title:'HTML', price: 200}
    ]



    let cheap = courses.filter(c=> c.price < 160)

    expect(cheap.length).toBe(1)
    expect(cheap[0].price).toBe(100)
    expect(cheap[0].title).toBe('css')
})

test('get only completed tasks', ()=> {
    const tasks = [
        {id:1, title:'bread',price:10, isDone:true},
        {id:2, title:'water',price:7, isDone:false},
        {id:3, title:'milk',price:15, isDone:true}
    ]
    let buy = tasks.filter(c => c.price < 20)
    let buy2 = tasks.filter(c => !c.isDone)

    expect(tasks.length).toBe(3)
    expect(buy.length).toBe(3)
    expect(buy[0].price).toBe(10)
    expect(buy[1].title).toBe('water')
    expect(buy[2].price).toBe(15)

    expect(buy2.length).toBe(1)
    expect(buy2[0].price).toBe(7)
    expect(buy2[0].title).toBe('water')

})













