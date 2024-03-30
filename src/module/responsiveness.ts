export class Responsiveness {


    public constructor() {
      window.addEventListener('resize', () => {
        this.getImageContainerResponsive();
        this.getHeightAlertError();
      });
        
        this.getImageContainerResponsive();
        this.getHeightAlertError();
       
     
    }

    
    
    /**
     * Método que trata responsividade do menu principal para telas menores entre  1200px a  
     */
    private getImageContainerResponsive(): void {      

      const PHOTO_NORMAL = document.querySelector('#photo-normal') as HTMLImageElement;
      const PHOTO_TABLET =  document.querySelector('#photo-tablet') as HTMLImageElement;
      const PHOTO_NOTEBOOK = document.querySelector('#photo-notebook') as HTMLImageElement;

      if (window.matchMedia("(min-width: 1602px)").matches) {
          
        if(PHOTO_NOTEBOOK.style.display === 'none' || PHOTO_TABLET.style.display === 'none') {            
          PHOTO_TABLET.style.display = 'none';
          PHOTO_NOTEBOOK.style.display = 'none';
          PHOTO_NORMAL.style.display = 'block';
        }
        
      } else if(window.matchMedia("(max-width: 1200px) and (min-width: 844px)").matches) {

        if(PHOTO_NORMAL.style.display === 'block' || PHOTO_TABLET.style.display === 'block') {
          PHOTO_NORMAL.style.display = 'none';
          PHOTO_TABLET.style.display = 'none';
          PHOTO_NOTEBOOK.style.display = 'block';
        }

      } else if (window.matchMedia("(max-width: 844px)").matches) {
        
        if(PHOTO_NORMAL.style.display === 'none' || PHOTO_NOTEBOOK.style.display === 'none') {
          PHOTO_NORMAL.style.display = 'none';
          PHOTO_NOTEBOOK.style.display = 'none';
          PHOTO_TABLET.style.display = 'block';  

        }    else {

            PHOTO_TABLET.style.display = 'none';
            PHOTO_NOTEBOOK.style.display = 'none';
            PHOTO_NORMAL.style.display = 'block';
        }


      } 

    }  


    private getHeightAlertError(): void {
      
          
    }

        
        





 



  

}