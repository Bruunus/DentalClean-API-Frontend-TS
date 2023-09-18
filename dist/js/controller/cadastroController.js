export class CadastroController {
    cadastrarPaciente(nome, dataNascimento, genero, email, convenio, numeroCarteirinha, rua, numero, bairro, cidade, estado) {
        const pacienteDataJSON = {
            nomeCompleto: nome,
            dataNascimento: dataNascimento,
            genero: genero,
            email: email,
            convenio: convenio,
            numeroCarteirinha: numeroCarteirinha,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado
        };
        fetch('http://localhost:8080/api/cadastro/paciente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pacienteDataJSON),
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao enviar os dados para o servidor.');
            }
            if (!response.ok) {
                return response.json();
            }
        })
            .then((data) => {
            console.log('then do fetch acionado');
            console.log('Resposta do servidor:', data);
            console.log('Dados gravados com sucesso !!!');
            console.log(pacienteDataJSON);
        })
            .catch((error) => {
            console.error(error);
        });
    }
    cadastrarDentista(nome, dataNascimento, cpf, especialidade, cro, telefoneResidencial, telefoneCelular, email, rua, numero, bairro, cidade, estado) {
        const dentistaDataJSON = {
            nomeCompleto: nome,
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
        };
        fetch('http://localhost:8080/api/cadastro/dentista', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dentistaDataJSON),
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao enviar os dados para o servidor.');
            }
            if (!response.ok) {
                return response.json();
            }
        })
            .then((data) => {
            console.log('then do fetch acionado');
            console.log('Resposta do servidor:', data);
            console.log('Dados gravados com sucesso !!!');
            console.log(dentistaDataJSON);
        })
            .catch((error) => {
            console.error(error);
        });
    }
}
