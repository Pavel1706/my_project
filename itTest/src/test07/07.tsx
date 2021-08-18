// let usersObj= {
//     '0':'Pavel',
//     '1':'Dasha',
//     '2':'Yulia',
//     '3':'Roman',
//     '4':'Alex'}
// console.log(usersObj[4])
//
// usersObj['table']='yellow';
// console.log(usersObj)
// usersObj['how`s life?']='I`m pretty good';
// usersObj[null]='hey'
// usersObj[true]='hey'
// usersObj[false]= false
// usersObj[{'hy':'ke ke'}]= 'ky ky'
// usersObj[{name:'klava', toString(){return'blabla'}}]='value of blabla'
//
//
// console.log(usersObj)
// console.log(usersObj['how`s life?'])
// let usersObj2= {
//     '0':'Pavel',
//     '1':'Dasha',
//     '2':'Yulia',
//     '3':'Roman',
//     '4':'Alex'}
// console.log(Object.keys(usersObj2))
// console.log(Object.values(usersObj2))




export const usersObj = {
    '0': 'Pavel',
    '1':'Dasha',
    '2':'Yulia',
    '3':'Roman',
    '4':'Alex'
}


let user = {id: 1003120, name:'Igor'}

users[user.id]= user;

delete users[user.id]
users[user.id].name='Vitya'
console.log(users)
export const usersArray =[
    {id:111, name:'Pavel'},
    {id:12347, name:'Dasha'},
    {id:547, name:'Yulia'},
    {id:65745, name:'Roman'},
    {id:5643, name:'Alex'}
    ]

usersArray.push(user)