export class Sprint {
    constructor() {
        this.template = `
        <head>
            <style>
                #container-div-sprint {
                    max-height: 96vh;
                    border: 1px dashed grey;
                    border-radius: 10px 10px 0 0;
                    color: black;
                    padding: 1rem;
                }

                #container-div-sprint div h4 {
                    color: tomato;
                    margin-bottom: 4rem.
                }


                
                #container-div-sprint .row  {
                    border: 1px solid lightgray;
                    padding: 1rem;
                    margin: 4rem 0 0 0;
                    border-radius: 15px;
                    

                }

                #container-div-sprint .row div button {
                    max-width: 100%;
                    width: 100%;
                }


                #container-table {
                    margin: 0;
                    padding: 1rem;
                    border: 1px solid lightgray;
                    max-heigth: 10rem;
                    heigth: 10rem;
                }
                

                #div-table table {
                    max-width: 100%;
                    width: 100%;
                }
                 

            </style>
        </head>

        <div id="container-div-sprint">
            <div>
                <h4>Sprint</h4>
            </div>  

            <div class="row d-flex align-items-center">
                    <div class="col-lg-1 col-md-1">
                        <button type="button" class="btn btn-primary">Sprint</button>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-lg-2 col-md-2">
                        <button type="button" class="btn btn-primary">Criar</button>
                    </div>
            </div> 



            <div id="container-table" class="row">
                
                <div id="div-table" class="table table-striped">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Sprint</th>
                                <th scope="col">Data criação</th>
                                <th scope="col" colspan="2" style="text-align: center;">Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Quero que faça uma tela com 10 divs no centro repetindo de modo diagnal</td>
                                <td>14/12/2023</td>
                                <td><button type="button" class="btn btn-info">Concluir</button></td>
                                <td><button type="button" class="btn btn-info">Excluir</button></td>
                            </tr>
                            <tr>
                                <td>Quero que faça uma tela com 10 divs no centro repetindo de modo diagnal</td>
                                <td>14/12/2023</td>
                                <td><button type="button" class="btn btn-info">Concluir</button></td>
                                <td><button type="button" class="btn btn-info">Excluir</button></td>
                            </tr>
                            <tr>
                                <td>Quero que faça uma tela com 10 divs no centro repetindo de modo diagnal</td>
                                <td>14/12/2023</td>
                                <td><button type="button" class="btn btn-info">Concluir</button></td>
                                <td><button type="button" class="btn btn-info">Excluir</button></td>
                            </tr>
                                
                                
                        </tbody>
                    </table>


                </div>
                


            </div> 


            <div id="container-table" class="row">
                
                <div id="div-table" class="table table-striped">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Sprint</th>
                                <th scope="col">Data criação</th>
                                <th scope="col" colspan="2" style="text-align: center;">Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-active">
                                <td>Quero que faça uma tela com 10 divs no centro repetindo de modo diagnal</td>
                                <td>14/12/2023</td>
                                <td><button type="button" class="btn btn-warning">Ressucitar</button></td>
                            </tr>
                            <tr class="table-active">
                                <td>Quero que faça uma tela com 10 divs no centro repetindo de modo diagnal</td>
                                <td>14/12/2023</td>
                                <td><button type="button" class="btn btn-warning">Ressucitar</button></td>
                            </tr>
                            <tr class="table-active">
                                <td>Quero que faça uma tela com 10 divs no centro repetindo de modo diagnal</td>
                                <td>14/12/2023</td>
                                <td><button type="button" class="btn btn-warning">Ressucitar</button></td>
                            </tr>
                                
                                
                        </tbody>
                    </table>


                </div>
                


            </div> 












        </div>


        
        
        
        `;
        const elementDOM = document.querySelector('#container-child-right');
        elementDOM.innerHTML = this.template;
    }
}
