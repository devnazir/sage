const personal = document.querySelector(".personal");
const coaching = document.querySelector(".coaching");

function scrolling() {
    let scrollY = window.scrollY;
    if (scrollY <= 10) {
        personal.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -${scrollY + 100}, 0, 0, 1)`;
        coaching.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${scrollY + 100}, 0, 0, 1)`;
        return;
    }

    personal.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${scrollY + 100}, 0, 0, 1)`;
    coaching.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${-scrollY + 100}, 0, 0, 1)`;
}

window.addEventListener("scroll", scrolling);