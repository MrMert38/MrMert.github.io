var button = document.createElement('button');
button.textContent = "Kırmızı mı mavi mi?";
button.classList.add("buton9"); // Butonun sınıfını buton9 olarak ayarla
document.body.appendChild(button);

button.addEventListener('click', function() {
    var secim = prompt("Kırmızı mı mavi mi? (kırmızı/mavi)");

    if (secim === "kırmızı") {
        window.location.href = "kırmızı.html";
    } else if (secim === "mavi") {
        window.location.href = "mavi.html";
    } else {
        alert("Geçersiz seçenek!");
    }
});
