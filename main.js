// Thay đổi nội dung búc thư ở đây
var letterContent =" Hế lô bạn. Chúc Hân có một sinh nhật thật vui và thật ý nghĩa, mong những điều tốt đẹp sẽ luôn đến với Hân và chúc Hân luôn luôn đạt được những thứ mình muốn. Chúc Hân thật nhiều điều tốt đẹp, bao nhiêu điều tốt, đều là của Hân nha. Sinh nhật vui vẻ, không chỉ 1 mà là mỗi ngày nha!💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");
    const openBtn = document.querySelector(".openBtn");

    if (audio && openBtn) {
        openBtn.addEventListener("click", () => {
            audio.play().catch((err) => {
                console.log("Không thể phát nhạc tự động:", err);
            });
        });
    }
});


function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
