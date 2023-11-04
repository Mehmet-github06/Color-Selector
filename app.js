// Renk kodu oluşturan fonksiyon
function getRandomColor() {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
}




// HTML öğelerini seçme
const main = document.querySelector(".bgDiv");
const inputbox = document.querySelector("#colorInput");
const colorno = document.querySelector("#colorText");
const clipboard = document.querySelector("#coppy");
const h1 = document.getElementById("baslik");

// Sayfa yüklendiğinde veya "Renk Al" düğmesine tıkladığında bir rastgele renk atama
function assignRandomColor() {
    const randomColor = getRandomColor();
    h1.style.color = inputbox.value = main.style.backgroundColor = colorno.textContent = randomColor;
}

// "Renk Al" düğmesine tıklama olayı
document.getElementById("ColorButton").addEventListener("click", assignRandomColor);

// Fare üzerine gelindiğinde rastgele bir renk atama
document.getElementById("mouseover").addEventListener("mouseover", assignRandomColor);

// Sayfa yüklendiğinde başlangıçta bir rastgele renk atama
window.addEventListener('load', assignRandomColor);

// Input kutusundaki renk kodunu gösterme ve arka plan rengini güncelleme
inputbox.addEventListener("input", () => {
    colorno.innerText = inputbox.value;
    const selectColor = inputbox.value;
    main.style.backgroundColor = selectColor;
});

// Kopyala düğmesine tıklama olayı
clipboard.addEventListener('click', () => {
    const textToCopy = colorno.innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(function () {
            console.log("Renk kodu kopyalandı: " + textToCopy);
        })
        .catch(function (err) {
            console.error("Kopyalama sırasında hata oluştu: " + err);
        });
});

