var output = document.getElementById('result');

function setInput (value) {
    if (output.value == 0)
        output.value = value;
    else
    output.value += value;
}
function clear1 () {

    output.value = 0;
}

function caculate() {
    output.value = eval(output.value);

}
