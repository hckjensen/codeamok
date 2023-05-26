// MODAL

const openModal = document.getElementById("openModal")
const modal = document.getElementById("modal")

openModal.addEventListener('click', () => {
    console.log("hello");
    modal.classList.add('show')
})

window.addEventListener('click', (event) => {
    if (event.target.id === 'modal') {
        modal.classList.remove('show')
    }
})

//FORM VALIDERING

const signUp = document.getElementById("signUp")
const username = document.getElementById("username")
const psw = document.getElementById("password")
const pswRepeat = document.getElementById("password-repeat")

signUp.addEventListener('click', validation) //kører funktionen 'validation' når der klikkes på Sign Up


// definerer funktionen
function validation(event){
    event.preventDefault();
    let myValidation = true;
    
    if (username.value.length >= 3 && username.value.length <= 10) {
        username.classList.add('succes');
    } else {username.classList.add('error');
        myValidation = false;
        alert("username must be 3-10 characters") 
    }

    if (psw.value.length >= 6 && username.value.length <=12) {
        psw.classList.add('succes');
    } else {psw.classList.add('error');
        myValidation = false;
        alert("password must be 6-12 characters")
    }

    if (pswRepeat.value === psw.value) {
        pswRepeat.classList.add('succes');
        psw.classList.add('succes')
    } else {pswRepeat.classList.add('error')
        myValidation = false
        alert("password must be same")
    }

    if(myValidation){
        alert("Hurra");
        modal.classList.remove('show')
    }
    

}
