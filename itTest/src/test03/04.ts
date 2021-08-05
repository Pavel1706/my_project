

export let predicate =(age: number)=>{
    return age > 90;
}

let oldAge =[]

type CoursesType = {
    title: string
    price: number
}


const courses = [
    {title:'css', price: 100},
    {title:"JS", price: 300},
    {title:'HTML', price: 200}
]
//<160
let cheapPredicate=(course: CoursesType)=> {
    return course.price < 160
}

let cheapCourses = [
    {title:'css', price: 100}
];