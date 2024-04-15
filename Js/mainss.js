// const form = document.querySelector("#form");


// let bot = {
//     Token: "6630799729:AAE-C7hmYFMEEzMTMUt6dFjSV9aSpI8vTcY",
//     chatID: "-4122751096",
// }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let text1 = document.querySelector("#input1");
    // let text2 = document.querySelector("#input2");

    fetch(`http://api.telegram.org/bot${form.e.bot.Token}/sendMessage?chat_id=${form.e.bot.chatID}&text=${form.e.text1}`, {
            method: "POST"
        })
        .then(success => {

        }, error => {

            // console.log(error);
        })

});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let text1 = document.querySelector("#input1").value;
    let text2 = document.querySelector("#input2");

    fetch(`http://api.telegram.org/bot${bot.Token}/sendMessage?chat_id=${bot.chatID}&text=${text1}`, {
        method: "POST"
    })
    .then(response => {
        if (response.ok) {
            console.log("Message sent successfully.");
        } else {
            console.error("Failed to send message.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
    fetch(`https://api.telegram.org/bot${bot.Token}/sendMessage?chat_id=${bot.chatID}&text=${encodedText}`, {
    method: "POST"
})
.then(response => {
    if (response.ok) {
        console.log("Message sent successfully.");
    } else {
        console.error("Failed to send message.");
    }
})
.catch(error => {
    console.error("Error:", error);
});

});
const form = document.querySelector("#form");

let bot = {
    Token: "6630799729:AAE-C7hmYFMEEzMTMUt6dFjSV9aSpI8vTcY",
    chatID: "-4122751096",
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let text1 = document.querySelector("#input1").value;
    let encodedText = encodeURIComponent(text1); // Define encodedText here

    fetch(`https://api.telegram.org/bot${bot.Token}/sendMessage?chat_id=${bot.chatID}&text=${encodedText}`, {
        method: "POST"
    })
    .then(response => {
        if (response.ok) {
            console.log("Message sent successfully.");
        } else {
            console.error("Failed to send message.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

let email = document.getElementById('input2');
let name = document.getElementById('input1');
let errorelement = document.getElementById('error');
let forms = document.getElementById('form')
forms.addEventListener('submit', (e) => {
    let messages = [];
    if (name.value === '' || name.value === null) {
        messages.push("Name is required");

    }
    if (name.value <= 5) {
        messages.push("Name is 6 min!!")
    }
    if(name.value >=20){
        messages.push("Name is not max 18");
    }
    if (email.value === "" || email.value === null) {
        messages.push("Email required");
    }
    if (email.value <= 6) {
        messages.push("Email isnot min 6");
    }
    if (email.value >= 20) {
        messages.push("Email max in 18");
    }
    if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        messages.push("Email is not erorrs!");
        errorelement.innerHTML="email isnots gmails";
   
    }
    if(messages.length >0){
        e.preventDefault()
        errorelement.innerText=messages.join(', ')
    }
   
})
// function validationForm() {
//     let email = document.myform.email.value;
//     let name = document.myform.name.value;
//     if (email == null || email == "") {
//         alert("Email Error!");
//         return false;
//     }
//     else if (name.length < 6) {
//         alert("error is 6");
//         return false;
//     }
// }