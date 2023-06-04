import {weathers} from "./data";

const root = document.getElementById('root');

export function createElements() {
    const background = document.createElement('img')
    const wrapper = document.createElement("div")
    const container = document.createElement("div")
    const weatherTitle = document.createElement('h1')
    const input = document.createElement('input')

    weatherTitle.innerText = "Weather sound"

    wrapper.classList.add("wrapper")
    container.classList.add("container")
    background.src = weathers[0].picture
    background.classList.add('background')

    input.type = 'range'
    input.id = 'volume'
    input.min = "0"
    input.max = "100"
    input.value = "100"

    wrapper.appendChild(container)
    wrapper.appendChild(background)
    wrapper.appendChild(input)

    weathers.forEach(elem => {
        const item = document.createElement("div");

        const img = document.createElement("img");
        const icon = document.createElement('img')
        const pauseIcon =  document.createElement('img')
        const audio = document.createElement('audio');


        item.id = elem.id

        img.src = elem.picture
        img.classList.add('picture')

        icon.src = elem.icon
        icon.classList.add('icon')

        pauseIcon.src = elem.pauseIcon;
        pauseIcon.classList.add('pauseIcon')

        audio.src = elem.audio
        audio.id = `audio-${elem.id}`
        audio.classList.add('audio')

        // оптимизировать
        item.appendChild(img)
        item.appendChild(audio)
        item.appendChild(icon)
        item.appendChild(pauseIcon)
        item.classList.add("item");

        wrapper.prepend(weatherTitle)

        container.appendChild(item)


    })
    root.appendChild(wrapper)

}