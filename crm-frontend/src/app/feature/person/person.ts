import { Authority } from "../authority/authority";

export interface Person {
    id: number,
    name: string,
    dni: string,
    enabled: boolean,
    cityId: number,
    authorities: Authority[]
}
