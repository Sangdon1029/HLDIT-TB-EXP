const btn = document.querySelector(".btn-exc");
const disOn = document.querySelector(".cont-result");

btn.addEventListener ('click', function time() {
    let Name = document.querySelector(".name").value;
    let Time = document.querySelector(".time").value;
    document.querySelector(".printName").innerText = Name;
    document.querySelector(".printTime").innerText = Math.floor(1000/parseInt(Time)) + '일';
    if (disOn.classList.contains("on")) {
        disOn.classList.remove("on")
    } else { 
    disOn.classList.add("on");
    }
})