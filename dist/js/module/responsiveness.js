export class Responsiveness {
    constructor() {
        window.addEventListener('resize', this.getContainerResponsive);
        this.getContainerResponsive();
    }
    getContainerResponsive() {
        const containerChildLeft_div_1_existe = document.querySelector('.containerChildLeft_div_1');
        const containerChildLeft_div_2_existe = document.querySelector('.containerChildLeft_div_2');
        const imgLogo = document.querySelector('.img-logo');
        if (window.matchMedia("(max-width: 1200px) and (min-width: 844px)").matches) {
            imgLogo.setAttribute('src', 'img/logo-dental-clean-menu-notebook.PNG');
        }
        else if (window.matchMedia("(max-width: 843px)").matches) {
            imgLogo.setAttribute('src', 'img/logo-dental-clean-menu-tablet.PNG');
            const containerChildLeft = document.querySelector('#container-child-left');
            const linkImg = document.querySelector('.img-link');
            const containerBotoesMenu = document.querySelector('.container-botoes-menu');
            const containerChildLeft_div_1 = document.createElement('div');
            const containerChildLeft_div_2 = document.createElement('div');
            if (!containerChildLeft_div_1_existe && !containerChildLeft_div_2_existe) {
                containerChildLeft_div_1.classList.add('containerChildLeft_div_1');
                containerChildLeft_div_2.classList.add('containerChildLeft_div_2');
                containerChildLeft_div_1.appendChild(linkImg);
                containerChildLeft_div_2.appendChild(containerBotoesMenu);
                containerChildLeft.appendChild(containerChildLeft_div_1);
                containerChildLeft.appendChild(containerChildLeft_div_2);
            }
        }
    }
}
