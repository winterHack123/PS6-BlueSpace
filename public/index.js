const form = document.querySelector('form')
const card_1 = document.querySelector(".card")
const card_2 = document.querySelector(".card-2")
const enteredMail = document.getElementById("enteredMail")
const errorMessage = document.getElementById("errorMessage")
var validationEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const submit = document.querySelector('.submit')
// const input = document.querySelector('input')
const input = document.getElementById("email")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
});

submit.addEventListener("click", function () {
    // if (input.value.match(validationEmail)) {
    //     enteredMail.textContent = input.value;
    //     enteredMail.textContent = input.value;
    // }
    if (input.value.match(validationEmail)) {
        enteredMail.textContent = input.value;
    }

    else {
        errorMessage.textContent = "Valid email required"
        errorMessage.style.color = "hsl(4, 100%, 67%)";
        errorMessage.style.fontWeight = "bold"
        input.style.borderColor = "red";
        input.style.color = "red";
        input.style.background = "hsl(351, 93%, 89%)"
    }
})

function val(){
    const inp1=document.getElementById("name");
    const inp2=document.getElementById("email");
    const inp3=document.getElementById("password");
    obj={
        name:inp1.value,
        email:inp2.value,
        password:inp3.value
    }
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Response from the server
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
