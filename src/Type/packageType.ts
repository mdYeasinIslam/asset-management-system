export interface PackageType{
    id: number,
    title: string,
    shortDescription: string,
    price: "FREE" | number,
    buttonText: string,
    services:string[]
}