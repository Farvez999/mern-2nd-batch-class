document.getElementById('btn-deposit').addEventListener('click', function () {

    //Step 1
    const depositField = document.getElementById('deposit-field');
    const depositAmmount = depositField.value
    const newDepositAmmount = parseFloat(depositAmmount)
    console.log(newDepositAmmount)

    //Step 2
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    const preDepositTotal = parseFloat(depositTotal)
    console.log(preDepositTotal)

    //step 3 claculation
    const currentDipositTotal = preDepositTotal + newDepositAmmount
    depositTotalElement.innerText = currentDipositTotal
    console.log(currentDipositTotal)

    // setp 4
    const blanceTotalElement = document.getElementById('blance-total');
    const blanceTotalString = blanceTotalElement.innerText;
    const blanceTotal = parseFloat(blanceTotalString)
    console.log(blanceTotal)

    // setp 5
    const currentBlanceTotal = newDepositAmmount + blanceTotal
    blanceTotalElement.innerText = currentBlanceTotal
    console.log(currentBlanceTotal)

    depositField.value = ""
})