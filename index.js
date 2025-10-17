
let IsModalOpen = false;
const scaleFactor = 1/ 20;

function toggleModal() {
    if (IsModalOpen) {
        IsModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    IsModalOpen = true;
    document.body.classList += " modal__open"
}

function moveBackground(event) {
    const icons = document.querySelectorAll(".icon");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < icons.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        icons[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}


