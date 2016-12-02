import {inject} from 'aurelia-framework';
import {Expression} from './expression';
import {ExpressionRepository} from './ExpressionRepository';

// Need something to stop JSON.stringify from processing parent
function replacer(key,value){
    var ignore = [
        "parent", 
        "isDeleteVisible"];
        
    if(ignore.indexOf(key) != -1){
        return undefined;
    }
    else{
        return value;
    }
}

//@inject(ExpressionRepository)
export class App{
    constructor(){
        this.heading = "Expressions";

        //this.expressionRepository = expressionRepository;

        this.expressionRoot = new Expression();
        this.expressionRoot.property = "";
        this.expressionRoot.operator = "AND";
        this.expressionRoot.value = "";
        this.expressionRoot.parent = null;

        this.operators = [
            { key: '=', display: '=' },
            { key: '!=', display: '!=' },
            { key: 'CONTAINS', display: 'Contains' },
            { key: 'AND', display: 'Match All' },
            { key: 'OR', display: 'Match Any' }
        ];
    }


    addExpression(parent){
        if(parent){            
            let expression = new Expression();
            expression.property = "Child";
            expression.operator = "=";
            expression.value = "Test-01";
            expression.parent = parent;

            parent.children.push(expression);
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