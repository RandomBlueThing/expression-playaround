export class Expression{
    constructor(){
        this.property = "";
        this.operator = "AND";
        this.value = "";
        this.children = [];
        this.parent = null;
        this.operators = [
            { key: '=', display: '=' },
            { key: '!=', display: '!=' },
            { key: 'CONTAINS', display: 'Contains' },
            { key: 'AND', display: 'Match All' },
            { key: 'OR', display: 'Match Any' }
        ];
        this.isDeleteVisible = true;        
    }

    mouseOver(){
        this.isDeleteVisible = true;
    }

    mouseOut(){
        this.isDeleteVisible = false;
    }
}