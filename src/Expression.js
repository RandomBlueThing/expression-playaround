export class Expression{
    constructor(){
        this.property = "";
        this.operator = "AND";
        this.value = "";
        this.children = [];

        // So, parent isn't going to be part of the model...
        this.parent = null;
        this.isDeleteVisible = true;        
    }

    mouseOver(){
        this.isDeleteVisible = true;
    }

    mouseOut(){
        this.isDeleteVisible = false;
    }
}