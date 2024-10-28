function calculateTip() {
    let bill = document.getElementById("bill").value;
    let perc = document.getElementById("percentage").value;
    let totalSpan = document.getElementById("total");
    bill = Number(bill)
    perc = Number(perc)
    let total = bill * (perc / 100);

    totalSpan.innerText = `$${total}`
    return false
}
