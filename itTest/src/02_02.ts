export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

export type HouseType = {
    id?: number
    buildedAt : number
    repaired: boolean
    address: AddressType
}

export type AddressType ={
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type GovernmentBuildingsType={
    type: "Hospital" | "Fire station"
    budget: number
    staffCount: number
    address: AddressType

}

// export type StreetType2 = {
//     street: TypeCall
// }
//
// export type TypeCall = {
//     title: string
// }

export const separated = (props: Array<GovernmentBuildingsType>)=>{
    return  props.map(t => t.address.street.title)
}
export const separated2 = (props: Array<HouseType>)=>{
    return  props.map(t => t.address.street.title)
}

export const createHello = (props: Array<HouseType>)=>{
    return props.map(t=> `Hello guys from ${t.address.street.title}`)
}