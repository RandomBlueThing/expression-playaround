export class Expression{
    constructor(){
        this.property = "";
        this.operator = "=";
        this.value = "";
        this.children = [];
        this.parent = null;
        this.operators = ['=', '!=', 'CONTAINS', 'MATCH ALL', 'MATCH ANY'];
    }
}