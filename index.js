let CustomerInput = prompt(     // PROMPT a visitor receives upon opening the website to enter their froyo order with commas separating each flavor then stores the order.
    "Welcome to YOLO FROYO! What froyo flavors would you like to order today? Please separate each flavor by a comma. Thank you!",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

console.log(`You ordered: \n${CustomerInput}`);

function getFroyoObj(froyoOrder) {      // FUNCTION creating an object from customer's order
    const froyoArray = froyoOrder.split(",");
    const froyoObj = {};

    for (let i = 0; i < froyoArray.length; i++) {    // FORLOOP iterating through froyoArray to add flavors and count to object
        const currentFlavor = froyoArray[i];    // VARIABLE pointing to current element
        if (!froyoObj[currentFlavor]) {
            froyoObj[currentFlavor] = 1;    // IF the froyoObj does not have the currentFlavor -> adds it & adds count of 1
        } else {
            froyoObj[currentFlavor] += 1;    // ELSE the currentFlavor already exists -> adds 1 to count
        }
    }
    return froyoObj;    // RETURN froyoObj after iterating through array
}

console.table(getFroyoObj(CustomerInput));  // CALL invoking the function and printing as table into browser console