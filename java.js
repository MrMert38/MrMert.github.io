document.addEventListener('keydown', function(event) {
    var resim = document.createElement('img');
    resim.className = 'resim';

    switch(event.key) {
        case 'ArrowUp':
            resim.src = '1.png';
            break;
        case 'ArrowDown':
            resim.src = '2.png';
            break;
        case 'ArrowLeft':
            resim.src = '3.png';
            break;
        case 'ArrowRight':
            resim.src = '4.png';
            break;
        default:
            return;
    }

    document.body.appendChild(resim);
});
