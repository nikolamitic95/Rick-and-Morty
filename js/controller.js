import { fetchAllCharacters, fetchSingleCharacter } from "./data.js"
import {
    renderAllCharacters,
    renderSingleCharacter,
    goNext,
    goPrevious,
    pagination,
    displayButton,
    buttonLeft,
    buttonRight,
    buttonCenter,
    loading
} from "./ui.js"


const next = goNext();
const previous = goPrevious();

export const homePage = () => {
    loading()
    let id = 1;
    fetchAllCharacters(id, renderAllCharacters);
    displayButton();
    next.click(() => {
        let counter = 1;

        if (id === 30) {
            return;
        } else {
            id++;
        }
        pagination(counter)
        fetchAllCharacters(id, renderAllCharacters)
    })

    previous.click(() => {
        let counter = -1;

        if (id === 1) {
            return;
        } else {
            id--;
        }
        pagination(counter);
        fetchAllCharacters(id, renderAllCharacters);
    })
    buttonLeft().addEventListener("click", () => {
        let pageId = localStorage.getItem("id");
        const a = buttonCenter();
        a.className = "page-link";
        const b = buttonLeft();
        b.className = "page-link actBtn";
        const c = buttonRight();
        c.className = "page-link";
        id = pageId;
        fetchAllCharacters(pageId, renderAllCharacters)
    })
    buttonRight().addEventListener("click", () => {
        let pageId = localStorage.getItem("id2");
        const a = buttonCenter();
        a.className = "page-link";
        const b = buttonLeft();
        b.className = "page-link";
        const c = buttonRight();
        c.className = "page-link actBtn";
        id = pageId;
        fetchAllCharacters(pageId, renderAllCharacters)
    })
    buttonCenter().addEventListener("click", () => {
        let pageId = localStorage.getItem("id3");
        const a = buttonCenter();
        a.className = "page-link actBtn";
        const b = buttonLeft();
        b.className = "page-link";
        const c = buttonRight();
        c.className = "page-link";
        id = pageId;
        fetchAllCharacters(pageId, renderAllCharacters);
    })
}

export const singlePage = () => {
    const id = window.location.search.slice(2);
    fetchSingleCharacter(id, renderSingleCharacter)
}
