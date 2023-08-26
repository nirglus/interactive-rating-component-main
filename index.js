const mainCard = document.querySelector(".card");
const thanksCard = document.querySelector(".thanksCard");
const dig = document.getElementsByClassName("dig");
const submitBtn = document.querySelector(".btn");
const userResult = document.getElementsByClassName("user-result");
submitBtn.addEventListener("click", function(){
    thanksCard.classList.remove("hidden");
    mainCard.classList.add("hidden");
});
