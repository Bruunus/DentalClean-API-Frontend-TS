export class CadastroService {

    public cadastrarPaciente(nome: string, dataNascimento: string, genero: string, email: string, 
        convenio: string, numeroCarteirinha: string, rua: string, numero: string, bairro: string, cidade:string, estado: string): void {
 
         const pacienteDataJSON = {
            nomeCompleto : nome,
            dataNascimento : dataNascimento,
            genero : genero,
            email : email,
            convenio : convenio,
            numeroCarteirinha : numeroCarteirinha,
            rua : rua,
            numero : numero,
            bairro : bairro,
            cidade : cidade,
            estado : estado  
        }


        /* for(const key in pacienteDataJSON) {
            if (Object.prototype.hasOwnProperty.call(pacienteDataJSON, key)) {
                const value = pacienteDataJSON[key as keyof typeof pacienteDataJSON];
                console.log(`Property: ${key}, Value: ${value},`);
            }
        } */


        fetch('http://localhost:8080/api/cadastro/paciente', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(pacienteDataJSON),
        })
            .then((response) => {
                if(!response.ok) {
                    throw new Error('Erro ao enviar os dados para o servidor.');
                }
                if(!response.ok) {
                    return response.json();
                }
            })

            .then((data) => {
                console.log('then do fetch acionado')
                console.log('Resposta do servidor:', data);
                console.log('Dados gravados com sucesso !!!');
                console.log(pacienteDataJSON);
                
            })

            .catch((error) => {
                console.error(error);
            })
           
 
    }


    public cadastrarDentista(
        nomeCompleto: string, 
        dataNascimento: string, 
        cpf: string, 
        cro: string, 
        especialidade: string,  
        telefoneResidencial: string,
        telefoneCelular: string, 
        email: string, 
        rua: string, 
        numero: string, 
        bairro: string, 
        cidade: string,
        estado: string
        ) :void {

            const dentistaDataJSON = {
                nomeCompleto: nomeCompleto,
                rua: rua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                email: email,
                dataNascimento: dataNascimento,
                telefoneResidencial: telefoneResidencial,
                telefoneCelular: telefoneCelular,
                especialidade: especialidade,
                cro: cro,
                cpf: cpf
            }

            
            fetch('http://localhost:8080/api/cadastro/dentista', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(dentistaDataJSON),
        })
            .then((response) => {
                if(!response.ok) {
                    throw new Error('Erro ao enviar os dados para o servidor.');
                }
                if(!response.ok) {
                    return response.json();
                }
            })

            .then((data) => {
                console.log('then do fetch acionado')
                console.log('Resposta do servidor:', data);
                console.log('Dados gravados com sucesso !!!');
                console.log(dentistaDataJSON);
            })

            .catch((error) => {
                console.error(error);
            })
            

    }
    
    
}