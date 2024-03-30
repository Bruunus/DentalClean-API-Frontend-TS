export class KeyEvents {
    eventKeyCadastroDentista(button) {
        button.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && document.activeElement === button) {
                button.style.backgroundColor = 'black';
            }
        });
    }
}
