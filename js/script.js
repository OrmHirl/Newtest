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
                    <div class="footer__logo"><img src="img/footer__logo.png"></div>
                    <div class="footer__logo__s"><img src="img/footer__logo__s.png"></div>
                    <div class="footer__dataport"><img src="img/footer__dataport__l.png"></div>
                    <div class="footer__dataport__s"><img src="img/footer__dataport__s.png"></img></div>
                    <div class="footer__dataport__ss"><img src="img/footer__dataport__ss.png"></img></div>
                    <div class="footer__btns"><img src="img/footer__buttons.png"></div>
                    <div class="footer__btn"><img src="img/footer__button.png"></div>
                </div>
            </div>
            <div class="footer__rt"></div>
        </footer>
        `
    }
}

customElements.define('templ-header', JavaHeader)
customElements.define('templ-footer', JavaFooter)