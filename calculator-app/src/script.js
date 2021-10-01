let input = document.getElementById("finalValue")
const keys = document.querySelectorAll(".keys")
const funs = document.querySelectorAll(".keys.fun")
const del = document.getElementById("del")
const evaluate = document.getElementById("evaluate")
const reset = document.querySelector("#reset")
console.log(funs)


// Calculator Display
let realtimeValue = []

// To Clear
let clear = () => {
    input.textContent = "0.00"
    realtimeValue = []
}

// Get value of any button clicked and display to the screen
keys.forEach(btn => {

    btn.addEventListener("click", () => {
        realtimeValue.length = Math.min(12, realtimeValue.length)
        if (!btn.id.match("del")) {
            realtimeValue.push(btn.value)
            input.textContent = realtimeValue.join('')
        }
        if (btn.id.match("del")) {
            realtimeValue.pop(btn.value)
            input.textContent = realtimeValue.join('')
        }

        if (btn.className.match("fun")) {
            funs.forEach(fun => {
                if (realtimeValue[realtimeValue.length - 2] == fun.value) {
                    realtimeValue.pop()
                    input.textContent = "error"
                }

            })

        }
        if (btn.id.match("evaluate")) {
            input.textContent = eval(realtimeValue.join(''))
        }

        if (btn.id.match("reset")) {
            clear()
        }

        if (typeof eval(realtimeValue.join('')) == "undefined" && !btn.id.match("reset")) {
            //console.log(realtimeValue.join(''))
            input.textContent = "error"
        }

    })





})


// when clicked button is not erased button 
// To display value on btn press
// To evaluate answer in real time
// When erase button is clicked
// When clicked button is evaluate button
// To prevent undefined error in screen