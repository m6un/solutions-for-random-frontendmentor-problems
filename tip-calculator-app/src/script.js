const buttons1 = document.querySelectorAll("button.btn1")
const CustomTipInput = document.getElementById("custom")
const NumberofPeople = document.getElementById("number-of-people")
const BillInput = document.getElementById("bill")
const resetbutton = document.getElementById("btn7")

resetbutton.addEventListener("click", reset)

BillInput.addEventListener("change", () => {
    const wrapper = document.getElementById("btn7")

    wrapper.classList.remove("inactive1")
    wrapper.classList.add("active1")
    console.log(wrapper.classList)
})

NumberofPeople.addEventListener("change", () => {
    if (NumberofPeople.value != 0) {
        document.getElementsByClassName("errorIfZero")[0].textContent = ""
        document.getElementsByClassName("input-box3")[0].style.outline = "none"
    } else {
        reset()
        document.getElementsByClassName("errorIfZero")[0].textContent = "Can't be zero!"
        document.getElementsByClassName("input-box3")[0].style.outline = "2px solid rgb(255, 92, 92)"

    }





})


CustomTipInput.addEventListener("click", () => {
    calculatetip(parseFloat(BillInput.value), parseFloat(CustomTipInput.value), parseFloat(NumberofPeople.value))
})
buttons1.forEach((btn) => {

    btn.addEventListener("click", () => {
        const wrapper = document.getElementsByClassName("active")[0]
        wrapper.classList.remove("active")

        btn.classList.add("active")




        tipPercent = btn.value;
        calculatetip(parseFloat(BillInput.value), tipPercent, parseFloat(NumberofPeople.value));
    });
});



function calculatetip(bill, tipPercentage, numberofPeople) {

    bill = bill.toFixed(2)
    let totalTip = parseFloat((bill * (tipPercentage / 100))).toFixed(2);
    let total = parseFloat(parseFloat(bill) + parseFloat(totalTip)).toFixed(2);
    console.log(total, bill, totalTip)
    let tipPerPerson = (totalTip / numberofPeople).toFixed(2);
    let totalPerPeson = (total / numberofPeople).toFixed(2);

    document.getElementById('Tip-amount').textContent = `\$ ${tipPerPerson}`
    document.getElementById('Total').textContent = `\$ ${totalPerPeson}`
}

function reset() {
    document.getElementById('Tip-amount').textContent = "$ 0.00"
    document.getElementById('Total').textContent = "$ 0.00"
    BillInput.value = 0
    NumberofPeople.value = 0

}