import {weathers} from "./data";

export function elementAddEventListener() {
    const volume = document.getElementById('volume')
    const background = document.querySelector('.background');
    const weatherItems = document.querySelectorAll('.item');
    const audios = document.querySelectorAll('.audio');

    weathers.forEach(elem => {
        const weatherBtn = document.getElementById(elem.id);
        weatherBtn.addEventListener('click', function () {
            handleBg({elem, weatherBtn, background, weatherItems,audios})
        })
    })

    volume.addEventListener('change', function (el) {
        audios.forEach(audio => {
            audio.volume = +el.target.value/100
        })
    })
}

function handleBg({elem, weatherBtn, background, weatherItems, audios}) {
    const audio = document.querySelector(`#audio-${elem.id}`);

    if (weatherBtn.classList.contains('active')) {
        weatherBtn.classList.remove('active')
        weatherBtn.classList.add('pause')
        audio.pause();
    } else if (weatherBtn.classList.contains('pause')) {
        weatherBtn.classList.remove('pause')
        weatherBtn.classList.add('active')
        audio.play();
    }
    else if (weatherBtn.classList.contains('pause') === false && weatherBtn.classList.contains('active') === false) {
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        weatherItems.forEach(item => {
            item.classList.remove('active')
            item.classList.remove('pause')
        })

        weatherBtn.classList.add('active')
        audio.play();
        background.src = elem.picture
    }


}