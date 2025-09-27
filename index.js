
const handleCount = () => {

    let index = 0
    console.log(index);

    return function () {
        return index++;
    }


}
handleCount();
handleCount();