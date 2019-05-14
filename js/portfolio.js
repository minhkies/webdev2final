var portfolio = document.querySelectorAll(".portfolio");

function init() {
    if (screen.width > 450) {
        for (i = 0; i < portfolio.length; i++) {
            if (i % 2 == 1) {
                portfolio[i].style.flexDirection = "row-reverse";
                portfolio[i].style.color = "white";
                portfolio[i].style.backgroundColor = "#424949";
            } else {
                portfolio[i].style.flexDirection = "row";
                portfolio[i].style.backgroundColor = "#f5f5f5";
            }
        }
    }
}