document.addEventListener("DOMContentLoaded", (evt) => {
    const calculerBtn = document.querySelector("button[id='calculer']");
    const coef_a_input = document.querySelector("input[name='coef_a']");
    const coef_b_input = document.querySelector("input[name='coef_b']");
    const coef_c_input = document.querySelector("input[name='coef_c']");

    const errorpart = document.querySelector("div[id='error-part']")
    const solutionpart = document.querySelector("div[id='solution-part']")


});

function calculer() {
    let coef_a = document.getElementById("coef_a");
    let coef_b = document.getElementById("coef_b");
    let coef_c = document.getElementById("coef_c");
    console.info(coef_a.value, coef_b.value, coef_c.value);
    let a = coef_a.value;
    let b = coef_b.value;
    let c = coef_c.value;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    const valider = validercoefs(a, b, c);

    document.querySelector('#error-part').style.display = valider ? "none" : "block";

    if (valider) {
        const delta = discrimant(a, b, c);

        document.querySelector('#solution-part').innerHTML = getSolutions(delta,a,b,c);
        document.querySelector('#solution-part').style.display = "block";

        console.log(delta);
    }

    

    console.log(valider);
};

const getSolutions = (delta,a,b,c) => {
    let solution = "";
    if (delta > 0) {
        const x1 = (-b - Math.sqrt(delta)) / (2 * a);
        const x2 = (-b + Math.sqrt(delta)) / (2 * a);

        solution += "Δ>0, alors l'équation admet deux solutions réelles.";
        solution += `</br>x<sub>1</sub>=${x1} </br>et</br> x<sub>2</sub>=${x2}`
        return solution;
    }

    if (delta < 0) {
        return (solution = "Δ<0, alors l'équation n'admet pas de solutions réelles mais elle admet deux solution complexes.");
    }

    if (delta === 0) {
        const x0 = (-b) / (2 * a);
        solution += "Δ=0, alors l'équation admet une solution réelle.";
        solution += `<br>x<sub>0</sub>=${x0}`;
        return solution;
    }

};

const validercoefs = (...args) => {
    for (coef of args) {
        if (isNaN(Number(coef))) {
            return false;
        }
    }
    return true;
};

const discrimant = (a, b, c) => {
    const delta = Math.pow(b, 2) - 4 * a * c;
    return delta;
}





