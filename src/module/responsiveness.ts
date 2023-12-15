export class Responsiveness {




    public constructor() {
        window.addEventListener('resize', this.getContainerResponsive);
        this.getContainerResponsive();
       
    }

    
    
    /**
     * Método que trata responsividade do menu principal para telas menores entre  1200px a  
     */
    public getContainerResponsive(): void {

 


      
      
      // voce precisa fazer um if para verificar se as divs ja existem, caso não então crie elas
      const containerChildLeft_div_1_existe = document.querySelector('.containerChildLeft_div_1');
      const containerChildLeft_div_2_existe = document.querySelector('.containerChildLeft_div_2');
      


       
      const imgLogo = document.querySelector('.img-logo') as HTMLImageElement;

     if(window.matchMedia("(max-width: 1200px) and (min-width: 844px)").matches) {

        imgLogo.setAttribute('src', 'img/logo-dental-clean-menu-notebook.PNG');


      } else if (window.matchMedia("(max-width: 843px)").matches) {


        imgLogo.setAttribute('src', 'img/logo-dental-clean-menu-tablet.PNG');

        const containerChildLeft = document.querySelector('#container-child-left');
        const linkImg = document.querySelector('.img-link');
        const containerBotoesMenu = document.querySelector('.container-botoes-menu');
      

        // criando as divs...

        const containerChildLeft_div_1 = document.createElement('div');
        const containerChildLeft_div_2 = document.createElement('div');


        // se não existe então crie...
        if(!containerChildLeft_div_1_existe && !containerChildLeft_div_2_existe) {

          

          containerChildLeft_div_1.classList.add('containerChildLeft_div_1');
          containerChildLeft_div_2.classList.add('containerChildLeft_div_2');


          // colocando os componentes como filhos de cada uma...
          containerChildLeft_div_1.appendChild(linkImg);
          containerChildLeft_div_2.appendChild(containerBotoesMenu);


          // adicionando as divs como filhas do container...
          containerChildLeft.appendChild(containerChildLeft_div_1);
          containerChildLeft.appendChild(containerChildLeft_div_2); 

        } else if (window.matchMedia("(min-width: 1602px)").matches) {

          imgLogo.setAttribute('src', 'img/logo-dental-clean-original.PNG');

        } 



      const btnModalUpdateChangeNome = document.querySelector('#btnModalUpdateChangeNome');

      
      if(window.matchMedia("(max-width: 360px)").matches) {
        btnModalUpdateChangeNome.textContent = 'Atualizar';
      } else {
        
        btnModalUpdateChangeNome.textContent = 'Atualizar mesmo assim';
      }

    }
        

    }  

        
        





 



  

}