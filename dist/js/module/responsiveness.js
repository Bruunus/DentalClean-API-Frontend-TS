export class Responsiveness {
    constructor() {
        window.addEventListener('resize', () => {
            this.getImageContainerResponsive();
            this.getHeightAlertError();
        });
        this.getImageContainerResponsive();
        this.getHeightAlertError();
    }
    getImageContainerResponsive() {
        const PHOTO_NORMAL = document.querySelector('#photo-normal');
        const PHOTO_TABLET = document.querySelector('#photo-tablet');
        const PHOTO_NOTEBOOK = document.querySelector('#photo-notebook');
        if (window.matchMedia("(min-width: 1602px)").matches) {
            if (PHOTO_NOTEBOOK.style.display === 'none' || PHOTO_TABLET.style.display === 'none') {
                PHOTO_TABLET.style.display = 'none';
                PHOTO_NOTEBOOK.style.display = 'none';
                PHOTO_NORMAL.style.display = 'block';
            }
        }
        else if (window.matchMedia("(max-width: 1200px) and (min-width: 844px)").matches) {
            if (PHOTO_NORMAL.style.display === 'block' || PHOTO_TABLET.style.display === 'block') {
                PHOTO_NORMAL.style.display = 'none';
                PHOTO_TABLET.style.display = 'none';
                PHOTO_NOTEBOOK.style.display = 'block';
            }
        }
        else if (window.matchMedia("(max-width: 844px)").matches) {
            if (PHOTO_NORMAL.style.display === 'none' || PHOTO_NOTEBOOK.style.display === 'none') {
                PHOTO_NORMAL.style.display = 'none';
                PHOTO_NOTEBOOK.style.display = 'none';
                PHOTO_TABLET.style.display = 'block';
            }
            else {
                PHOTO_TABLET.style.display = 'none';
                PHOTO_NOTEBOOK.style.display = 'none';
                PHOTO_NORMAL.style.display = 'block';
            }
        }
    }
    getHeightAlertError() {
    }
}
