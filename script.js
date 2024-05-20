document.getElementById("mertButton").addEventListener("click", function() {
    window.location.href = "yan_sayfa.html";
});



function saatiGoster() {
    const simdi = new Date();
    const saat = simdi.getHours();
    const dakika = simdi.getMinutes();
    const saniye = simdi.getSeconds();
    const zaman = `${saat.toString().padStart(2, '0')}:${dakika.toString().padStart(2, '0')}:${saniye.toString().padStart(2, '0')}`;
    document.getElementById('saat').innerText = zaman;
}

setInterval(saatiGoster, 1000); 



function rastgeleUcBasamakliSayi() {
    var rastgeleSayi = Math.floor(Math.random() * 900) + 100; 
    return rastgeleSayi;
}

console.log(rastgeleUcBasamakliSayi());


document.getElementById('mertButton').addEventListener('click', function() {
    window.location.href = 'yan_sayfa.html';
});




function arkaplanRenginiDegistir() {
    var renkKodu = document.getElementById("renkSec").value;
    document.body.style.backgroundColor = renkKodu;
}


window.onload = function() {
    var mesajDiv = document.getElementById('mesaj');
    mesajDiv.innerText = "Hoşgeldiniz";
    mesajDiv.classList.add('goster');
    setTimeout(function() {
        mesajDiv.classList.remove('goster');
    }, 5000);
};


document.addEventListener('DOMContentLoaded', function() {
    var resimler = ['resim1.png', 'resim2.png'];
    var resimIndex = 0;
    var resim = document.getElementById('resim');

    resim.addEventListener('click', function() {
        resim.src = resimler[resimIndex];
        resim.style.width = '100%'; 
        resim.style.height = '50px'; 
        resimIndex = (resimIndex + 1) % resimler.length;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('geriyeSay');
    button.addEventListener('click', function() {
        setTimeout(function() {
            var kediGif = document.createElement('img');
            kediGif.src = 'kedi.gif';
            kediGif.alt = 'Kedi';
            document.body.appendChild(kediGif);
        }, 5000); 
    });
});


document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('mouseover', function() {
        btn.style.backgroundColor = 'red';
    });
    btn.addEventListener('mouseout', function() {
        btn.style.backgroundColor = '';
    });
    btn.addEventListener('click', function() {
        btn.style.transform = 'rotate(10deg)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 300);
    });
});

