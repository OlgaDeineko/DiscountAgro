export class Product {
    id: number;
    name: string;
    fullName: string;
    typeId: number;
    unit: string;
    img: number;
    activeSubstance: string;
    consistence: string;
    desccription: string;
    applying: string;
    consumptionRate: string;
    recomendation: string;
    actionMechanism: string;
    compatibility: string;
    warning: string;
    type:string;
    productPrice: number;
    constructor( typeId:number, type: string){
        this.typeId= typeId;
        this.type = type;

    }

}