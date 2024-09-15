function moveLastThreeToStart(str) {
    if (str.length < 3) {
        throw new Error("String length must be greater or equal to three.");
    }

    let lastThree = str.slice(-3);
    let remainingString = str.slice(0, -3);
    return lastThree + remainingString;
}

let inputString = "IlliaKonik";
let result = moveLastThreeToStart(inputString);
console.log(result);
