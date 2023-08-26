const mainCard = document.querySelector(".card");
const thanksCard = document.querySelector(".thanksCard");
const results = document.getElementsByClassName("dig");
const submitBtn = document.querySelector(".btn");
const userResult = document.querySelector(".user-result");

submitBtn.addEventListener("click", function(){
    thanksCard.classList.remove("hidden");
    mainCard.classList.add("hidden");
});

for(let i = 0; i < results.length; i++){
    results[i].addEventListener("click", function(){
        userResult.innerHTML = results[i].innerHTML;
    });
}
