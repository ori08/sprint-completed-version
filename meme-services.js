var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var picsNumbers = 24
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];
var storedMem = [{}]
// 

var gEditedMem = {

    line: [{

        imageID: 1,
        sticker: 0,
        txt: '',
        size: 20,
        font: "Impact",
        align: 'left',
        color: 'red',
        locationY: 60,
        locationX: 0
    }
    ]


}



function renderAllPics() {
    var strHtml = ""
    for (var i = 1; i <= picsNumbers; i++) {
        strHtml += ` <img class="resize3" src="img/${i}.jpg" onclick="selectedIMG(${i})" alt="">`
    }
    document.querySelector(".main-container-gllary").innerHTML = strHtml


    var picsContain = document.querySelectorAll(".resize3")

    for (i = 0; i < picsContain.length; i++) {
        console.log(picsContain[i])
        picsContain[i].addEventListener("click", function () {
            document.getElementsByClassName("main-container-editor")[0].classList.add("animate__animated")
            document.getElementsByClassName("main-container-editor")[0].classList.add("animate__lightSpeedInLeft")
        })

    }





}

id = "goToEditor"

function getMeme() {

    return gEditedMem.line

}