const opcodeBase = [1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 13, 19, 1, 9, 19, 23, 1, 6, 23, 27, 2, 27, 9, 31, 2, 6, 31, 35, 1, 5, 35, 39, 1, 10, 39, 43, 1, 43, 13, 47, 1, 47, 9, 51, 1, 51, 9, 55, 1, 55, 9, 59, 2, 9, 59, 63, 2, 9, 63, 67, 1, 5, 67, 71, 2, 13, 71, 75, 1, 6, 75, 79, 1, 10, 79, 83, 2, 6, 83, 87, 1, 87, 5, 91, 1, 91, 9, 95, 1, 95, 10, 99, 2, 9, 99, 103, 1, 5, 103, 107, 1, 5, 107, 111, 2, 111, 10, 115, 1, 6, 115, 119, 2, 10, 119, 123, 1, 6, 123, 127, 1, 127, 5, 131, 2, 9, 131, 135, 1, 5, 135, 139, 1, 139, 10, 143, 1, 143, 2, 147, 1, 147, 5, 0, 99, 2, 0, 14, 0];
const expectedResult = 19690720;
// const opcode = [2,4,4,5,99,0];

function testingOpcode() {
    let noun = 0;
    let verb = 0;
    for(noun = 0; noun <= 99; noun ++) {
        for(verb = 0; verb <= 99; verb ++) {
            let opcodeTemp = [...opcodeBase];
            opcodeTemp[1]= noun;
            opcodeTemp[2] = verb;
            if(computeOpCode(opcodeTemp, expectedResult)) {
                console.log("Result found with: ", noun, verb);
                console.log("Inputed: ", 100 * noun + verb);
                return;
            }
        }
    }
}
function computeOpCode(opcode, expected) {
    let index = 0;
    let input1;
    let input2;
    let output;
    for (index = 0; index <= opcode.length; index += 4) {
        let read = opcode[index];
        input1 = opcode[index + 1];
        input2 = opcode[index + 2];
        output = opcode[index + 3];

        switch (read) {
            case 1:
                opcode[output] = opcode[input1] + opcode[input2];
                break;
            case 2:
                opcode[output] = opcode[input1] * opcode[input2];
                break;
            default:
                // console.log("Final state: ", opcode[0], read);
                if(opcode[0] === expected) {
                    console.log("Found: ", opcode[0]);
                    return true;
                } else {
                    console.log("Bad result ", opcode[0]);
                    return false;
                }
        }
    }
}

testingOpcode();
