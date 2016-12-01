import {Expression} from './expression';

// Need something to stop JSON.stringify from processing parent
function replacer(key,value){
    if (key=="parent") return undefined;
    else if (key=="operators") return undefined;
    else return value;
}

export class App{
    constructor(){
        this.heading = "Expressions";

        this.expressionRoot = new Expression();
        this.expressionRoot.property = "";
        this.expressionRoot.operator = "AND";
        this.expressionRoot.value = "";
        this.expressionRoot.parent = null;
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
    }


    deleteExpression(expression){
        if(expression){
            if(expression.parent){
                let index = expression.parent.children.indexOf(expression);
                if(index !== -1){
                    expression.parent.children.splice(index, 1);
                }
            }
        }
    }


    dumpExpressions(){
        console.log(JSON.stringify(this.expressionRoot, replacer));
    }

}