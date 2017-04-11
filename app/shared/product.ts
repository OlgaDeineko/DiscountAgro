export class Product {
    id: number;
    name: string;
    fullName: string;
    typeId: number;
    unit: string;
    img: number;
    activeSubstance: string;
    preparativeForm: string;
    desccription: string;
    applying: string;
    consumptionRate: string;
    recomendation: string;
    actionMechanism: string;
    compatibility: string;
    warning: string;
    type:string;
    characteristic: string;
    advantage: string;
    supplier: string;
    constructor( typeId:number, type: string){
        this.typeId= typeId;
        this.type = type;

    }

}