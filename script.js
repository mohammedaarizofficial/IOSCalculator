function display(button) {
    const textValue = button.value;
    const textbox = document.getElementById("text_box");
    let currentValue = textbox.innerText;

    if (textValue === "+/-") {
        if (currentValue.charAt(0) === "-") {
            textbox.innerText = currentValue.substring(1);
        } else {
            textbox.innerText = "-" + currentValue;
        }
        return;
    }

    if (textValue === "%") {
        textbox.innerText = (parseFloat(currentValue) / 100).toString();
        return;
    }

    if (textbox.innerText === "0") {
        textbox.innerText = textValue;
    } else {
        textbox.innerText += textValue;
    }
    textbox.style.color = "white";
}

function calculate() {
    const textbox = document.getElementById("text_box");
    let expression = textbox.innerText;

    // Replace custom symbols with JavaScript operators
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');

    try {
        const result = eval(expression);
        textbox.innerText = result;
    } catch (error) {
        textbox.innerText = 'Error';
    }
}

function clearText() {
    const textbox = document.getElementById("text_box");
    textbox.innerText = "0";
}
