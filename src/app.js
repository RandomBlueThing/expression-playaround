import {Expression} from './expression';

export class App{
    constructor(){
        this.heading = "Expressions";
        this.expressions = [];
    }


    addExpression(parent){
        if(parent){
            console.log("Creating child");
            let x = new Expression();
            x.property = "Child";
            x.operator = "=";
            x.value = "Test-01";
            x.parent = parent;

            parent.children.push(x);
        }
        else{
            console.log("Creating root");
            let x = new Expression();
            x.property = "";
            x.value = "";
            x.operator = "AND";
            x.parent = null;

            this.expressions.push(x);            
        }
    }


    deleteExpression(expression){
        if(expression){
            if(expression.parent){
                let index = expression.parent.children.indexOf(expression);
                if(index !== -1){
                    expression.parent.children.splice(index, 1);
                }
            }
            else{
                let index = this.expressions.indexOf(expression);
                if(index !== -1){
                    this.expressions.splice(index, 1);
                }            
            }
        }
    }


    dumpExpressions(){
        console.log(JSON.stringify(this.expressions));
    }
}