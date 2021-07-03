//Variables to be used
let fixedLength = 5;
let a = b = c = d = e = f = 0;
let scope;
let equation;
let nEquation;
let n1Equation;
let derivative;
const allConstants = ["a","b", "c", "d", "f", "g"];

const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
    println(key +" = "+ value);
});

function preformSettings(values, Precision, eq)
{ 
    scope = {};
    if(values != "")
    {
        values =values.split(",");
        for(let i = 0; i<values.length; i++)
        {
            scope[allConstants[i]] =  parseInt(values[i]);
        }
    }
    
    fixedLength = parseInt(Precision.value);
    equation = eq.value;
    console.log(scope);
}

function Solve(start, end, steps, Precision, values, eq, iAnswer, step)
{
    preformSettings(values.value, Precision, eq);
    printHeading("Precision: 10<sup>-"+fixedLength+"</sup>",false, "h3");
   
    printHeading("Equation: "+math.parse(equation).toHTML(),false, "h3");
    printHeading("Values: ",false, "h3");
    keyValue(scope);

    equation = math.simplify(equation,scope).toString();
    printHeading("Simplified Equation: "+math.parse(equation).toHTML(),false, "h3");

    printHeading("f(x,y) = "+math.parse(equation).toHTML(),false, "h3");
    nEquation = equation.replaceAll("x","x<sub>n</sub>");
    nEquation = nEquation.replaceAll("y","y<sub>n</sub>");
    printHeading("f(x<sub>n</sub>,y<sub>n</sub>) = "+nEquation,false, "h3");
    n1Equation = nEquation.replaceAll("n","n+1");
    printHeading("f(x<sub>n+1</sub>,y<sub>n+1</sub>) = "+n1Equation,false, "h3");

    if(parseInt(start.value) > parseInt(end.value))
    {
        let x = end;
        end = start;
        start = x;
    }
    new ImprovedEular(start.value, end.value, iAnswer.value, step.value, steps.value);

    println("<hr>");
}

function clearOutput()
{
    document.getElementById("Output").innerHTML="";
}

