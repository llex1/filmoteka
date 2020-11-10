import mainTemplate from "./templates/mainTemplate.hbs";
import libraryTemplate from "./templates/libraryTemplate.hbs";
import refs from './refs.js';

const renderMain = function (arr) {
    const film = mainTemplate(filmArr);
    refs.filmList.insertAdjacentHTML('beforeend', film);
}

const renderLibrary = function (arr) {
    const film = libraryTemplate(filmArr);
    refs.filmList.insertAdjacentHTML('beforeend', film);
}

export default { renderMain,renderLibrary };

