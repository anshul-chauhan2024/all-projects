let toggleBtn = document.getElementById("btn");
let changeVal = document.getElementById("str");

let val = 0;

toggleBtn.addEventListener("click", function () {
    if (val === 0) {
        changeVal.textContent = "Friends";
        changeVal.style.color = "green";
        toggleBtn.innerText = "Remove Friends";
        toggleBtn.style.backgroundColor = "#ccc";
        toggleBtn.style.color = "#000";
        val = 1;

    } else {
        changeVal.textContent = "Stranger";
        changeVal.style.color = "red";
        toggleBtn.innerText = "Add Friend"
        toggleBtn.style.backgroundColor = "cadetblue";
        toggleBtn.style.color = "#fff";

        val = 0;
    }
})