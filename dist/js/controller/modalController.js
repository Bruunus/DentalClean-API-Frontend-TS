export class ModalController {
    constructor() {
        this.renderTemplateFather = document.querySelector('#container-pai');
    }
    modalInformationUpdateDentist(modalname, id, objectDataForUpdate) {
        console.log('Entrado em modalInformationUpdateDentist');
        this.btnSaveUpdateDentist = document.querySelector('#btnSave');
        switch (modalname) {
            case 'MODAL_CHANGE_NAME':
                this.btnSaveUpdateDentist.setAttribute('data-target', '#modalChangeName');
                const templateModalChangeName = `

            <head>
            <style>
            </style>
            </head>
            
            <!-- Modal -->
            <div class="modal fade" id="modalChangeName" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content modal-responsive">
                        <div class="modal-header justify-content-start">
                            <img src="img/warning_icon.png" alt="Warning">
                            <h4 class="modal-title system-color-text no-select" id="exampleModalLabel">Atenção!</h4>
                        </div>
                        <div class="modal-body">
                            <div class="modal-body no-select">
                                Você alterou o campo <span class="focus-error">Nome completo</span> porém o campo <span class="focus-error">CRO</span>
                                consta como o mesmo, pode haver conflitos no sistema.<br><br>
                                Deseja prosseguir?
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btnCancelar" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary btnModalUpdate" data-dismiss="modal">Atualizar mesmo assim</button>
                        </div>
                    </div>
                </div>
            </div>
            
            
            `;
                this.renderTemplateFather.insertAdjacentHTML('beforeend', templateModalChangeName);
                const btnModalUpdateChangeNome = document.querySelector('#btnModalUpdateChangeNome');
                btnModalUpdateChangeNome.addEventListener('click', () => {
                    this.controllerRouterTs.updateDentist(id, objectDataForUpdate);
                });
                break;
            case 'MODAL_CHANGE_CRO':
                this.btnSaveUpdateDentist.setAttribute('data-target', '#modalChangeCro');
                const templateModalChangeCro = `
            
            <!-- Modal -->
            <div class="modal fade" id="modalChangeCro" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-responsive" role="document">
                <div class="modal-content modal-responsive">
                    <div class="modal-header justify-content-start">
                        <img src="img/warning_icon.png" class="img-fluid" alt="Warning">
                        <h4 class="modal-title system-color-text no-select" id="exampleModalLabel">Atenção!</h4>
                    </div>
                <div class="modal-body">
                    <div class="modal-body no-select">
                        Você alterou o campo <span class="focus-error">CRO</span> porém o campo <span class="focus-error">Nome completo</span> 
                        consta como o mesmo dentista, pode haver conflitos no sistema.
                        <br><br>
                        Deseja prosseguir?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btnCancelar" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary btnModalUpdate" data-dismiss="modal">Atualizar mesmo assim</button>
                </div>
                </div>
            </div>
            </div>
            
            
            `;
                this.renderTemplateFather.insertAdjacentHTML('beforeend', templateModalChangeCro);
                const btnModalUpdateChangeCro = document.querySelector('#btnModalUpdateChangeCro');
                btnModalUpdateChangeCro.addEventListener('click', () => {
                    this.controllerRouterTs.updateDentist(id, objectDataForUpdate);
                });
                break;
            case 'NEW_CRO_AND_NEW_NAME':
                this.btnSaveUpdateDentist.setAttribute('data-target', '#modalChangeCro');
                const templateModalNewCroAndNewName = `
            
            <!-- Modal -->
            <div class="modal fade" id="modalChangeCro" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-responsive" role="document">
                <div class="modal-content modal-responsive">
                    <div class="modal-header justify-content-start">
                        <img src="img/warning_icon.png" class="img-fluid" alt="Warning">
                        <h4 class="modal-title system-color-text no-select" id="exampleModalLabel">Atenção!</h4>
                    </div>
                <div class="modal-body">
                    <div class="modal-body no-select">
                    <span class="focus-new">Nome completo</span> e <span class="focus-new">CRO</span> novo inserido.
                        <br><br>
                        Deseja prosseguir com o novo cadastro mantendo os mesmo dados restantes?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btnCancelar" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary btnModalUpdate" data-dismiss="modal">Atualizar mesmo assim</button>
                </div>
                </div>
            </div>
            </div>
            
            
            `;
                this.renderTemplateFather.insertAdjacentHTML('beforeend', templateModalNewCroAndNewName);
                const btnModalNewCroAndNewName = document.querySelector('#btnModalNewCroAndNewName');
                btnModalNewCroAndNewName.addEventListener('click', () => {
                    this.controllerRouterTs.updateDentist(id, objectDataForUpdate);
                });
                break;
        }
    }
}
