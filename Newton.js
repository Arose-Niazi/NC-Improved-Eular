class Newton {
    constructor(start) {
        printHeading("Newton Ramphson Method", true, "h2");

        this.a = parseFloat(start).toFixed(fixedLength);
        createTable(["n","x<sub>n</sub>", "f(x<sub>n</sub>)","ff(x<sub>n</sub>)", "x<sub>n+1</sub>", 'f(x<sub>n+1</sub>)', "e"]);
        this.i = 0;

        this.funSolve = equationSolve(this.a);
        this.funDeriSolve =  equationDerivativeSolve(this.a);
        this.oldc = null;
        this.solve();
    }

    solve()
    {
        if(rootResultChecker(this.funDeriSolve))
            return printHeading("Roots is parallel to" + this.a, true, "h3");

        this.b = this.calculate(this.a);
        this.e = this.relativeErrorFind();
        let atC = equationSolve(this.b);
        if(this.funSolve.includes(atC,0))
            return printHeading("Roots found at " + this.a, true, "h3");
        addTableRow([this.i++, this.a, this.funSolve, this.funDeriSolve, this.b, atC, this.e]);
        if(rootResultChecker(atC))
            return printHeading("Roots found at " + this.b, true, "h3");
        
        this.a = this.b;
        this.funSolve = atC;
        this.funDeriSolve = equationDerivativeSolve(this.a);
        this.oldc = this.b
        this.solve();
    }

    relativeErrorFind()
    {
        if(this.oldc == null) return "-";
        let y = ((parseFloat(this.b) - parseFloat(this.oldc))/Math.abs(this.b));
        return y.toFixed(fixedLength);
    }

    calculate(val)
    {
        let y = val - (this.funSolve / this.funDeriSolve);
        y = y.toFixed(fixedLength);
        return y;
    }

}