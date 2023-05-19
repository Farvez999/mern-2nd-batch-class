document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmmonut = withdrawField.value;
    const newWithdraw = parseFloat(withdrawAmmonut);


    const withthdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmmount = withthdrawTotal.innerText;
    const preWithdrawTotal = parseFloat(withdrawTotalAmmount);

    const currentWithdrawTotal = preWithdrawTotal + newWithdraw;
    withthdrawTotal.innerText = currentWithdrawTotal;

    const blanceTotalElement = document.getElementById('blance-total');
    const blanceString = blanceTotalElement.innerText;
    const blancTotal = parseFloat(blanceString);


    const newBlance = blancTotal - newWithdraw;
    console.log(newBlance)

    blanceTotalElement.innerText = newBlance;

    withdrawField.value = '';
})