function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Por favor, insira valores válidos!';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementsById('result').textContent = 'Não é possível dividir por zero';
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}