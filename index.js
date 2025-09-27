
const handleIncrease = () => {
    console.log("current index:", index);

    return function () {
        return index++;
    }


}
const handleDecrease = () => {
    console.log(index);

}
var index = 0
const ab = handleIncrease()

console.log(ab());
console.log(ab());
handleDecrease();

