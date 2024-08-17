class JavaHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="header__menu__l"><img src="img/buttons__panel.webp" usemap="#buttons__menu__l"></div>
            <p>
                <map name="buttons__menu__l">
                    <area shape="rect" href="nuntia.html" coords="13, 10, 111, 46">
                    <area shape="rect" href="sodalitas.html" coords="115, 10, 214, 46">
                    <area shape="rect" href="apopsis.html" coords="218, 10, 316, 46">
                    <area shape="rect" href="regnum.html" coords="320, 10, 419, 46">
                    <area shape="rect" href="pandektes.html" coords="422, 10, 521, 46">
                    <area shape="rect" href="cultura.html" coords="525, 10, 624, 46">
                    <area shape="rect" href="civitas.html" coords="628, 10, 727, 46">
                </map>
            </p>
            <div class="header__menu__m"><img src="img/buttons__panel__m.webp" usemap="#buttons__menu__m"></div>
            <p>
                <map name="buttons__menu__m">
                    <area shape="rect" href="nuntia.html" coords="11, 9, 93, 38">
                    <area shape="rect" href="sodalitas.html" coords="97, 9, 178, 38">
                    <area shape="rect" href="apopsis.html" coords="183, 9, 264, 38">
                    <area shape="rect" href="regnum.html" coords="269, 9, 350, 38">
                    <area shape="rect" href="pandektes.html" coords="355, 9, 436, 38">
                    <area shape="rect" href="cultura.html" coords="441, 9, 522, 38">
                    <area shape="rect" href="civitas.html" coords="527, 9, 608, 38">
                </map>
            </p>
            <div class="menu__burger">
                <span></span>
            </div>
            <nav class="navbar">
                <ul class="navbar__list">
                    <li><a href="nuntia.html" class="navbar__link">Nuntia</a></li>
                    <li><a href="sodalitas.html" class="navbar__link">Sodalitas</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="administration.html" class="navbar__sublink">Administratio</a></li>
                            <li><a href="legislation.html" class="navbar__sublink">Lex</a></li>
                            <li><a href="statistics.html" class="navbar__sublink">Statisticum</a></li>
                            <li><a href="dignitatum.html" class="navbar__sublink">Notitia Dignitatum</a></li>
                        </ul>
                    </li>
                    <li><a href="apopsis.html" class="navbar__link">Apopsis</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="methodology.html" class="navbar__sublink">Methodologia</a></li>
                            <li><a href="articles.html" class="navbar__sublink">Articuli</a></li>
                            <li><a href="polemics.html" class="navbar__sublink">Polemikos</a></li>
                        </ul>
                    </li>
                    <li><a href="regnum.html" class="navbar__link">Regnum</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="hist_koryanna.html" class="navbar__sublink">Historia Coriannae</a></li>
                            <li><a href="hist_igf.html" class="navbar__sublink">Historia Praetorianae</a></li>
                            <li><a href="government.html" class="navbar__sublink">Rectio</a></li>
                            <li><a href="praetorium.html" class="navbar__sublink">Praetorium</a></li>
                            <li><a href="economy.html" class="navbar__sublink">Oeconomia</a></li>
                        </ul>
                    </li>
                    <li><a href="pandektes.html" class="navbar__link">Pandektes</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="astrography.html" class="navbar__sublink">Astrographia</a></li>
                            <li><a href="astropolitics.html" class="navbar__sublink">Astropolitika</a></li>
                            <li><a href="documents.html" class="navbar__sublink">Documenta</a></li>
                            <li><a href="military_encyclopedia.html" class="navbar__sublink">Magnum Lexicon Militare</a></li>
                            <li><a href="linguistics.html" class="navbar__sublink">Linguisticus</a></li>
                            <li><a href="mysticism.html" class="navbar__sublink">Mystica</a></li>
                            <li><a href="prosopography.html" class="navbar__sublink">Prosopographia</a></li>
                            <li><a href="technopedia.html" class="navbar__sublink">Technopaedia</a></li>
                            <li><a href="uniformology.html" class="navbar__sublink">Uniformologia</a></li>
                            <li><a href="chronology.html" class="navbar__sublink">Chronologia</a></li>
                        </ul>
                    </li>
                    <li><a href="cultura.html" class="navbar__link">Cultura</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="library.html" class="navbar__sublink">Librarium</a></li>
                            <li><a href="gallery.html" class="navbar__sublink">Galeria</a></li>
                        </ul>
                    </li>
                    <li><a href="civitas.html" class="navbar__link">Civitas</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="forum.html" class="navbar__sublink">Forum</a></li>
                            <li><a href="links.html" class="navbar__sublink">Nexus</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        `
    }
}
class JavaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="footer__lt">
                <div class="disclaimer"><p>Все оригинальные тексты, переводы, изображения и модели являются © Корианской империи и Эдварда Никсона. Пожалуйста, не используйте данные материалы без разрешения авторов.</p></div>
                <div class="disclaimer__tab"><p>Все оригинальные тексты, переводы, изображения и модели являются © Корианской империи и Эдварда Никсона. Пожалуйста, не используйте данные материалы без разрешения авторов.</p></div>
                <div class="disclaimer__mob"><p>Все оригинальные материалы являются © Корианской империи и Эдварда Никсона. Пожалуйста, не используйте их без разрешения авторов.</p></div>
                <div class="disclaimer__mob__s"><p>© Корианской империи. Пожалуйста, не используйте материалы без разрешения авторов.</p></div>
            </div>
            <div class="footer__md">
                <div class="footer__visuals">
                    <div class="footer__logo"><img src="img/footer__logo.webp"></div>
                    <div class="footer__logo__s"><img src="img/footer__logo__s.webp"></div>
                    <div class="footer__dataport"><img src="img/footer__dataport__l.webp"></div>
                    <div class="footer__dataport__s"><img src="img/footer__dataport__s.webp"></img></div>
                    <div class="footer__dataport__ss"><img src="img/footer__dataport__ss.webp"></img></div>
                    <div class="footer__btns"><img src="img/footer__buttons.webp"></div>
                    <div class="footer__btn"><img src="img/footer__button.webp"></div>
                </div>
            </div>
            <div class="footer__rt"></div>
        </footer>
        `
    }
}

customElements.define('templ-header', JavaHeader)
customElements.define('templ-footer', JavaFooter)

"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () { 
        return navigator.userAgent.match(/BlackBerry/i);
    },
	iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
	Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
	Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
	any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.navbar__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

const burgerMenu = document.querySelector('.menu__burger');
if (burgerMenu) {
    const navbarMenu = document.querySelector('.navbar');
    burgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        navbarMenu.classList.toggle('_active');
    });
}