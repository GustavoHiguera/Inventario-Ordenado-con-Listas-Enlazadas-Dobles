export default class Product{
    constructor(code, name, amount, cost){
        this.code=code;
        this.name=name;
        this.amount=amount;
        this.cost=cost;
        this.next=null;
        this.before=null;

        //Se inicia poniendo el this.next en null porque no tiene un siguiente
        //Se inicia poniendo el this.before en este caso porque son listas dobles
    }

    getCode(){
        return this.code;
    }

    getName(){
        return this.name;
    }

    getAmount(){
        return this.amount;
    }

    getCost(){
        return this.cost;
    }

    getTotalCost(){
        return this.amount * this.cost;
    }

    getInfo(){
        return `Código: ${this.getCode()}, Nombre: ${this.getName()}, Cantidad: ${this.getAmount()}, Costo: ${this.getCost()}, Costo Total: ${this.getTotalCost()}`;
    }
}