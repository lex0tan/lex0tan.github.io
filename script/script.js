function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
window.onscroll = e => {
    let element = document.getElementById("nav");
    let logo = document.getElementById("logo");
    let icons = document.getElementsByClassName("icn");
    
    if (window.scrollY > 10 && window.scrollY <=100){
        element.classList.add("opacity-100", "bg-light");
        element.classList.remove("opacity-75");

        logo.style.animation = "small-logo 0.5s";
        logo.style.height = "50px";
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.remove("inverted");
            }
        return;
    }

    else if(window.scrollY <= 10 && window.scrollY > 1 && logo.height != 80) {
        element.classList.remove("opacity-100", "bg-light");
        logo.style.animation = "big-logo 0.5s";
        logo.style.height = "80px";
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.add("inverted");
            }
        return;
    }
}


let txt = document.getElementById("errormsg");
let btn = document.getElementById("submitBtn");
btn.addEventListener("click", event => {
    btn.innerHTML = "<div class='spinner-grow spinner-grow-sm' role='status'>";
    let instagram = document.getElementById("instagram").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let message = document.getElementById("msg").value;
    
    if (instagram == "" || email == "" || name == "") {
        txt.innerHTML = "Please fill in all the fields";
        txt.style.color = "red";
        btn.innerHTML = "submit";
        return
    }
    
    let data = {
        instagram,
        email,
        name,
        message};
        
        fetch("https://blame.pythonanywhere.com", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.status == 200) {
                btn.style.animation = "onsuccess 2s"
                sleep(2000).then(() => {
                    btn.innerHTML = "<img src='https://img.icons8.com/ios-filled/25/null/ok--v1.png'style='margin-right: 5px;'/>Thank you"
                    btn.classList.add("success")
                })}

            else if (res.status != 200) {
                btn.style.animation = "onerror 2s";
                sleep(2000).then(() => {
                    btn.innerHTML = "<img src='https://img.icons8.com/ios-filled/25/null/error--v1.png'style='margin-right: 5px;'/>Error"
                    btn.classList.add("error")
                    txt.style.color = "red";
                });
            };

            }).catch(err => {
                btn.style.animation = "onerror 2s";
                sleep(2000).then(() => {
                    btn.innerHTML = "<img src='https://img.icons8.com/ios-filled/25/null/error--v1.png'style='margin-right: 5px;'/>Error"
                    btn.classList.add("error")
                    txt.style.color = "red";
                }); 
        })
})

document.getElementById('instagram').addEventListener('change', pressHandler =>{
    let input = document.getElementById('instagram').value;
    let regex = /([a-zA-Z0-9_.]+)/;
    if (regex.test(input) == false){
        console.log("ig")
        document.getElementById('errormsg').innerHTML = "Please enter a valid instagram link";
        document.getElementById('errormsg').style.color = "red";
        document.getElementById('submitBtn').disabled = true;
    }
    else {
        document.getElementById('errormsg').innerHTML = "";
        document.getElementById('submitBtn').disabled = false;
    }
});

document.getElementById('email').addEventListener('change', pressHandler =>{
    let input = document.getElementById('email').value;
    let regex = /([a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+)/;
    if (regex.test(input) == false){
        console.log("email")
        document.getElementById('errormsg').innerHTML = "Please enter a valid email";
        document.getElementById('errormsg').style.color = "red";
        document.getElementById('submitBtn').disabled = true;
    }
    else {
        document.getElementById('errormsg').innerHTML = "";
        document.getElementById('submitBtn').disabled = false;
    }
})

document.getElementById('name').addEventListener('change', pressHandler =>{
    let input = document.getElementById('name').value;
    let regex = /([a-zA-Z0-9_.]+)/;
    if (regex.test(input) == false){
        console.log("name")
        document.getElementById('errormsg').innerHTML = "Please enter a valid name";
        document.getElementById('errormsg').style.color = "red";
        document.getElementById('submitBtn').disabled = true;
    }
    else {
        document.getElementById('errormsg').innerHTML = "";
        document.getElementById('submitBtn').disabled = false;
    }
});
