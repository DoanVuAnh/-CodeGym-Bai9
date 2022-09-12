    function sqaEdge() {
        let Edge = +document.getElementById("Edge").value;
        let Perimeter = Edge  * 4;
        let Area = Edge * Edge;
        document.getElementById("Perimeter").innerHTML = "Perimeter: " + Perimeter;
        document.getElementById("Area").innerHTML = "Area: " + Area;

    }
    function mathpow() {
        let base = +document.getElementById("base").value;
        let exponents  = +document.getElementById("exponents ").value;
        let result1 = Math.pow(base,2);
        let result2 = Math.pow(base,exponents );
        document.getElementById("result1").innerHTML = "Result 1: " + result1;
        document.getElementById("result2").innerHTML = "Result 2: " + result2;

    }
    function totalnumber() {
        let numberfirst = +document.getElementById("first").value;
        let numberlast = +document.getElementById("last").value;
        let numbers = Math.abs(numberlast - numberfirst) + 1;
        let totalnumber = (numberfirst + numberlast) * numbers / 2;
        document.getElementById("totalnumber").innerHTML = "Total number: " + totalnumber;

    }
    function numberyear() {
        let numberyear = +document.getElementById("numberyear").value;
        let numberyear2 = numberyear / 100;
        if (numberyear % 100 ==0){
            document.getElementById("textyear").innerHTML= "Century: " + numberyear2;
        }else {
            let century = Math.floor(numberyear2) + 1;
            document.getElementById("textyear").innerHTML = "Century: " + century;
        }
    }
    function triangle() {
        let edge1 = +document.getElementById("edge1").value;
        let edge2 = +document.getElementById("edge2").value;
        let edge3 = +document.getElementById("edge3").value;
        if ((Math.abs(edge1-edge2) < edge3) && (edge3 < (edge1 + edge2))) {
            if ((edge1 == edge2) || (edge2 == edge3) || (edge3 == edge1)) {
                document.getElementById("triangle").innerHTML = "Isosceles triangle";
            } else if ((edge1 == edge2) && (edge2 == edge3) && (edge3 == edge1)) {
                document.getElementById("triangle").innerHTML = "Equilateral triangle";
            } else if ((edge1 * edge1 == edge2 * edge2 + edge3 * edge3) || (edge2 * edge2 == edge3 * edge3 + edge1 * edge1) || (edge3 * edge3 == edge2 * edge2 + edge1 * edge1)) {
                document.getElementById("triangle").innerHTML = "Right triangle";
            } else {
                document.getElementById("triangle").innerHTML = "Triangle";
            }
        }else{
            document.getElementById("triangle").innerHTML = "Not a Triangle";
        }
    }
    //} else if ((edge1 == edge2) || (edge2 == edge3) || (edge3 == edge1)){
    //             document.getElementById("triangle").innerHTML = "Isosceles triangle";
    //         } else if ((edge1 == edge2) && (edge2 == edge3) && (edge3 == edge1)){
    //             document.getElementById("triangle").innerHTML = "Equilateral triangle";
    //         } else if ((edge1 * edge1== edge2 * edge2 + edge3 * edge3) || (edge2 * edge2 == edge3 * edge3 + edge1 * edge1) || (edge3 * edge3 == edge2 * edge2 + edge1 * edge1)){
    //             document.getElementById("triangle").innerHTML = "Right triangle"