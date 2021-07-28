import {CityType, GovernmentBuildingsType, HouseType} from "../../02_02";

export type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: Array<technologiesType>
}
export type addressType = {
    streetTitle: string
    city: LocalCityType
}
export type LocalCityType = {
    title: string
    countryTitle: string
}
export type technologiesType = {
    id: number
    title: string
}

export const student: studentType = {
    id: 1,
    name: 'Pavel',
    age: 34,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
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

export const addSkill = (st: studentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive (st:studentType){
    if(st.isActive == false){
     return st.isActive=true
    }

}

export const doesStudentLiveIn= (q:studentType, cityName: string) =>{
    return q.address.city.title === cityName;
}

export const addMoneyToBudget= (building: GovernmentBuildingsType, budget: number)=>{
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType)=>{
    houseType.repaired = true
}

export const toHireStaff = (Building: GovernmentBuildingsType, staff: number)=>{
   return Building.staffCount += staff;
}

export const toFireStaff = (Building: GovernmentBuildingsType, staff: number)=>{
    return Building.staffCount -=staff;
}

export function createMessage(city: CityType){
    // return 'Hello' + ' '+ city.title + ' '+ 'citizens. I want you be happy. All ' + city.citizensNumber + ' men'
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}