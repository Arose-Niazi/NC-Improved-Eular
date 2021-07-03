class ImprovedEular {
    constructor(start, end, iAnswer, step, toShow) {

        printHeading("Improved Eular Method", true, "h2");

        this.start = math.fix(start,fixedLength);
        this.end = math.fix(end,fixedLength);
        this.h =  math.fix(step,fixedLength);
        this.iAnswer =  math.fix(iAnswer,fixedLength);

        printHeading("Starting Condition", true, "h3");
        printHeading(`y(${this.start}) = ${this.iAnswer}`, true, "h3");
        println(`t<sub>0</sub> = ${this.start}`);
        println(`y<sub>0</sub> = ${this.iAnswer}`);
        println(`h = ${this.h}`);

        let predictorsEq = `y + h[${equation}]`;
        let predictorsEqShow = `y<sub>n</sub> + h[${nEquation}]`;
        let correctorEq = `y + (h/2)[${equation} + ${equation.replaceAll("x", "a").replaceAll("y", "b")}]`;
        let correctorEqShow = `y<sub>n</sub> + h[${nEquation} + ${n1Equation.replaceAll("x", "<span class='topL'>x</span>").replaceAll("y", "<span class='topL'>y</span>")}]`;


        let py = 0;
        let y = this.iAnswer;
        let px = 0;
        let x = this.start;
        for (let index = 0; index < toShow || toShow == 0; index++) {

            printHeading("For n =" + index, true, "h3");
            printHeading("Predictor", true, "h4");
           
            printHeading(`<span class='topL'>y</span><sub>n+1</sub>= ${predictorsEqShow}`, false, "h5");
            printHeading(`<span class='topL'>y</span>${index + 1}</sub>= `+predictorsEqShow.replaceAll("n",`${index}`), false, "h5");
            let pEqSolve = predictorsEq.replaceAll("y",`(${y})`).replaceAll("x", `(${x})`).replaceAll("h",`(${this.h})`);

            printHeading(`<span class='topL'>y</span>${index + 1}</sub>= `+pEqSolve, false, "h5");
            py =  math.fix(math.evaluate(pEqSolve.replaceAll("[", "(").replaceAll("]", ")")),fixedLength);
            printHeading(`<span class='topL'>y</span>${index + 1}</sub>= `+py, false, "h5");

            printHeading(`<span class='topL'>x</span><sub>n+1</sub>= x<sub>n</sub> + h`, false, "h5");
            printHeading(`<span class='topL'>x</span><sub>${index + 1}</sub> x<sub>${index}</sub> + ${this.h}`, false, "h5");
            printHeading(`<span class='topL'>x</span><sub>${index + 1}</sub>= ${x} + ${this.h}`, false, "h5");
            px = math.fix(math.evaluate(`${x} + ${this.h}`), fixedLength);
            printHeading(`<span class='topL'>x</span><sub>${index + 1}</sub>= ${px}`, false, "h5");


            printHeading("Corrector", true, "h4");
           
            printHeading(`y<sub>n+1</sub>= ${correctorEqShow}`, false, "h5");
            printHeading(`y${index + 1}</sub>= `+correctorEqShow.replaceAll("n+1",`${index + 1}`).replaceAll("n",`${index}`).replaceAll(`spa${index}`, "span"), false, "h5");
            let cEqSolve = correctorEq.replaceAll("y",`(${y})`).replaceAll("x", `(${x})`).replaceAll("h",`(${this.h})`).replaceAll("a", `(${px})`).replaceAll("b",`(${py})`);

            printHeading(`y${index + 1}</sub>= `+cEqSolve, false, "h5");
            y =  math.fix(math.evaluate(cEqSolve.replaceAll("[", "(").replaceAll("]", ")")),fixedLength);
            printHeading(`y${index + 1}</sub>= `+y, false, "h5");

            printHeading(`x<sub>n+1</sub>= x<sub>n</sub> + h`, false, "h5");
            printHeading(`x<sub>${index + 1}</sub>= x<sub>${index}</sub> + ${this.h}`, false, "h5");
            printHeading(`x<sub>${index + 1}</sub>= ${x} + ${this.h}`, false, "h5");
            x =  math.fix(math.evaluate(`${x} + ${this.h}`), fixedLength);
            printHeading(`x<sub>${index + 1}</sub>= ${x}`, false, "h5");

            if(x >= end) break;
        }

        py = 0;
        y = this.iAnswer;
        px = 0;
        x = this.start;
        createTable(["n", "x<sub>n</sub>", "y<sub>n</sub>", "<span class='topL'>x</span><sub>n+1</sub>", "<span class='topL'>y</span><sub>n+1</sub>", "x<sub>n+1</sub>", "x<sub>n+1</sub>"]);
        for (let index = 0; x < end; index++) {

            
            let ox = x;
            let oy = y;
            let pEqSolve = predictorsEq.replaceAll("y",`(${y})`).replaceAll("x", `(${x})`).replaceAll("h",`(${this.h})`);
            py =  math.fix(math.evaluate(pEqSolve.replaceAll("[", "(").replaceAll("]", ")")),fixedLength);
            px = math.fix(math.evaluate(`${x} + ${this.h}`), fixedLength);
            let cEqSolve = correctorEq.replaceAll("y",`(${y})`).replaceAll("x", `(${x})`).replaceAll("h",`(${this.h})`).replaceAll("a", `(${px})`).replaceAll("b",`(${py})`);

            y =  math.fix(math.evaluate(cEqSolve.replaceAll("[", "(").replaceAll("]", ")")),fixedLength);
            x =  math.fix(math.evaluate(`${x} + ${this.h}`), fixedLength);
            addTableRow([index, ox, oy, px, py, x, y]);
        }
    }
}
