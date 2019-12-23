const opcodeTest = [3, 225, 1, 225, 6, 6, 1100, 1, 238, 225, 104, 0, 1101, 82, 10, 225, 101, 94, 44, 224, 101, -165, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 3, 224, 224, 1, 224, 223, 223, 1102, 35, 77, 225, 1102, 28, 71, 225, 1102, 16, 36, 225, 102, 51, 196, 224, 101, -3468, 224, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 7, 224, 1, 223, 224, 223, 1001, 48, 21, 224, 101, -57, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 6, 224, 224, 1, 223, 224, 223, 2, 188, 40, 224, 1001, 224, -5390, 224, 4, 224, 1002, 223, 8, 223, 101, 2, 224, 224, 1, 224, 223, 223, 1101, 9, 32, 224, 101, -41, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 2, 224, 1, 223, 224, 223, 1102, 66, 70, 225, 1002, 191, 28, 224, 101, -868, 224, 224, 4, 224, 102, 8, 223, 223, 101, 5, 224, 224, 1, 224, 223, 223, 1, 14, 140, 224, 101, -80, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 2, 224, 224, 1, 224, 223, 223, 1102, 79, 70, 225, 1101, 31, 65, 225, 1101, 11, 68, 225, 1102, 20, 32, 224, 101, -640, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 5, 224, 1, 224, 223, 223, 4, 223, 99, 0, 0, 0, 677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1105, 0, 99999, 1105, 227, 247, 1105, 1, 99999, 1005, 227, 99999, 1005, 0, 256, 1105, 1, 99999, 1106, 227, 99999, 1106, 0, 265, 1105, 1, 99999, 1006, 0, 99999, 1006, 227, 274, 1105, 1, 99999, 1105, 1, 280, 1105, 1, 99999, 1, 225, 225, 225, 1101, 294, 0, 0, 105, 1, 0, 1105, 1, 99999, 1106, 0, 300, 1105, 1, 99999, 1, 225, 225, 225, 1101, 314, 0, 0, 106, 0, 0, 1105, 1, 99999, 8, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 329, 101, 1, 223, 223, 1008, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 344, 101, 1, 223, 223, 1107, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 359, 101, 1, 223, 223, 1008, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 374, 1001, 223, 1, 223, 1108, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 389, 1001, 223, 1, 223, 7, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 404, 101, 1, 223, 223, 7, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 419, 101, 1, 223, 223, 8, 226, 677, 224, 1002, 223, 2, 223, 1006, 224, 434, 1001, 223, 1, 223, 7, 226, 677, 224, 1002, 223, 2, 223, 1006, 224, 449, 1001, 223, 1, 223, 107, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 464, 1001, 223, 1, 223, 1007, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 479, 101, 1, 223, 223, 1007, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 494, 1001, 223, 1, 223, 1108, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 509, 101, 1, 223, 223, 1008, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 524, 1001, 223, 1, 223, 1007, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 539, 101, 1, 223, 223, 1108, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 554, 101, 1, 223, 223, 108, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 569, 101, 1, 223, 223, 108, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 584, 101, 1, 223, 223, 1107, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 599, 101, 1, 223, 223, 8, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 614, 1001, 223, 1, 223, 108, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 629, 1001, 223, 1, 223, 1107, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 644, 1001, 223, 1, 223, 107, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 659, 101, 1, 223, 223, 107, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 674, 1001, 223, 1, 223, 4, 223, 99, 226];

var readline = require('readline');

const numberOfParametersPerOp = {};
numberOfParametersPerOp[1] = 3;
numberOfParametersPerOp[2] = 3;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readInput(query) {
    return new Promise(resolve => rl.question(query, ans => {
        resolve(ans);
    }));
}

function computeAddition(index, opcode, operationMode) {
    input1 = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 1]) ? opcode[index + 1] : opcode[opcode[index + 1]]);
    input2 = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 2]) ? opcode[index + 2] : opcode[opcode[index + 2]]);
    output = opcode[index + 3];
    opcode[output] = input1 + input2;
}

function computeMultiplication(index, opcode, operationMode) {
    input1 = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 1]) ? opcode[index + 1] : opcode[opcode[index + 1]]);
    input2 = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 2]) ? opcode[index + 2] : opcode[opcode[index + 2]]);
    output = opcode[index + 3];
    opcode[output] = input1 * input2;
}

async function computeInput(index, opcode) {
    const inputParam = await readInput("Input the parameters ");
    opcode[opcode[index + 1]] = inputParam;
}

function computeOutput(index, opcode, operationMode) {
    const output = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 1]) ? opcode[index + 1] : opcode[opcode[index + 1]]);
    console.log("OUTPUTING: ", output);
}

function computeJumpIfTrue(index, opcode, operationMode) {
    inputCheck = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 1]) ? opcode[index + 1] : opcode[opcode[index + 1]]);
    inputJump = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 2]) ? opcode[index + 2] : opcode[opcode[index + 2]]);
    if (!!inputCheck) {
        return inputJump;
    } else {
        return index + 3;
    }
}

function computeJumpIfFalse(index, opcode, operationMode) {
    inputCheck = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 1]) ? opcode[index + 1] : opcode[opcode[index + 1]]);
    inputJump = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 2]) ? opcode[index + 2] : opcode[opcode[index + 2]]);
    if (!inputCheck) {
        return inputJump;
    } else {
        return index + 3;
    }
}

function computeLessThan(index, opcode, operationMode) {
    input1 = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 1]) ? opcode[index + 1] : opcode[opcode[index + 1]]);
    input2 = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 2]) ? opcode[index + 2] : opcode[opcode[index + 2]]);
    output = opcode[index + 3];
    if (input1 < input2) {
        opcode[output] = 1;
        return;
    }
    opcode[output] = 0;
    return;
}

function computeEqual(index, opcode, operationMode) {
    input1 = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 1]) ? opcode[index + 1] : opcode[opcode[index + 1]]);
    input2 = Number.parseInt(Number.parseInt(operationMode.input[operationMode.input.length - 2]) ? opcode[index + 2] : opcode[opcode[index + 2]]);
    output = opcode[index + 3];
    if (input1 === input2) {
        opcode[output] = 1;
        return;
    }
    opcode[output] = 0;
    return;
}

function getInputParameters(params, numberOfInput) {
    let input = params;
    for (let i = params.length; i < numberOfInput; i++) {
        input = '0' + input;
    }
    input = [...input];
    return input;
}

function getOperationAndParameters(paramMode) {
    const operationWithParam = {};
    let mode = paramMode.toString();
    const operation = (mode[mode.length - 2] || 0) + mode[mode.length - 1];
    operationWithParam.operation = Number.parseInt(operation);
    const parametersMode = mode.slice(0, mode.length - 2);
    operationWithParam.input = getInputParameters(parametersMode, numberOfParametersPerOp[operationWithParam.operation]);
    return operationWithParam;
}

async function computeOpCode(opcode) {
    let index = 0;
    while (true) {
        let read = opcode[index];
        let operationMode = getOperationAndParameters(read);
        switch (operationMode.operation) {
            case 1:
                computeAddition(index, opcode, operationMode);
                index += 4;
                break;
            case 2:
                computeMultiplication(index, opcode, operationMode);
                index += 4;
                break;
            case 3:
                await computeInput(index, opcode);
                index += 2;
                break;
            case 4:
                computeOutput(index, opcode, operationMode);
                index += 2;
                break;
            case 5:
                index = computeJumpIfTrue(index, opcode, operationMode);
                break;
            case 6:
                index = computeJumpIfFalse(index, opcode, operationMode);
                break;
            case 7:
                computeLessThan(index, opcode, operationMode);
                index += 4;
                break;
            case 8:
                computeEqual(index, opcode, operationMode);
                index += 4;
                break;
            default:
                // console.log("Final state: ", opcode[0], read);
                return opcode[0];
        }
    }
}

computeOpCode(opcodeTest).then(n => {
    console.log("End of diagnostic: ", n);
    return;
});

module.exports = {
    computeOpCode,
}