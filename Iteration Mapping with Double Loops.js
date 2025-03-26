let maxLimit = parseInt(prompt("Enter the Max Limit of the Loops:"));

let outerCounter = 0;
let innerCounter = 0;

for (outerCounter = 0; outerCounter < maxLimit; outerCounter++) {
    for (innerCounter = 0; innerCounter < maxLimit; innerCounter++) {
        let addedValue = outerCounter + innerCounter;
        console.log(`Outer Loop: ${outerCounter}, Inner Loop: ${innerCounter}, Added Value: ${addedValue}`);
    }
}
