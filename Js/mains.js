const form = document.querySelector("#form");

if (form) {

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let text1 = document.querySelector("#input1").value;
        let text2 = document.querySelector("#input2");
        let token = "6630799729:AAE-C7hmYFMEEzMTMUt6dFjSV9aSpI8vTcY";
        let chat_id = "-4122751096";
        let my_text = `my text is ${text1}`
            // let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

        let api = new XMLHttpRequest()
        api.open("GET", url, true);
        api.send();
        text1.value = "";
    });

}