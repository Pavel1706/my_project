export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

export type HouseType = {
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