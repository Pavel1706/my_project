

type UsersType = {
    [key: string]: {id: number, name:string}
}


let users: UsersType

beforeEach( ()=> {
    users = {
        '111': {id:111, name:'Pavel'},
        '12347': {id:12347, name:'Dasha'},
        '547':{id:547, name:'Yulia'},
        '65745':{id:65745, name:'Roman'},
        '5643':{id:5643, name:'Alex'}
    }
})


test('should select user', ()=> {
    users['547'].name='Julia'

    expect(users['547']).toEqual({id:547, name:'Julia'})
})
test('should delete user', ()=> {
   delete users['547']

    expect(users['547']).toBeUndefined()
})