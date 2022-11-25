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



// let btn = document.getElementById("submitBtn");
// btn.addEventListener("click", event => {
//     event.preventDefault();
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("msg").value;
//     let data = {
//         name,
//         email,
//         message
//     };
//     fetch("127.0.0.1:5000", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(res => {
//         console.log(res);
//         if (res.status == 200) {
//             alert("Message sent successfully!");
//         }
//     }).catch(err => {
//         console.log(err);
//     });
// });
    

