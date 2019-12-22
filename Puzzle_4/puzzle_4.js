const range = [197487, 673251];

function computePassword(minNumber, maxRange) {
    begin = new Date();
    const resultatFound = [];
    for (let num = minNumber; num <= maxRange; num++) {
        const numberFormatted = num.toString();
        let moreThanDouble = 0;
        let doubleFound = false;
        let increaseRespected = true;
        let min = numberFormatted[0];
        for (let i = 0; i <= 5; i++) {
            if (numberFormatted[i] >= min) {
                min = numberFormatted[i];
            } else {
                increaseRespected = false;
            }
            if (i != 5 && numberFormatted[i] === numberFormatted[i + 1] && numberFormatted[i] != moreThanDouble) {
                if(numberFormatted[i + 2] == numberFormatted[i]) {
                    moreThanDouble = numberFormatted[i];
                } else { 
                    doubleFound = true;
                }
            }
        }
        if (doubleFound && increaseRespected) {
            resultatFound.push(num);
        }
    }
    end = new Date();
    console.log("Times to execute: ", end - begin);
    return resultatFound;
}

const result = computePassword(range[0], range[1]);
console.log("Password #: ", result.length);