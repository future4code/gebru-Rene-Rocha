let usrLogin = ''
const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]
const cadastro = () => {
    const cadastro = [{
        nome: "",
        ano:0,
        nacionalidae: "",
        senha: "",
        vacina: "",
        imunizacao: ""
    }]
     cadastro.ano = prompt('Em que ano você nasceu?')
     cadastro.nacionalidade = prompt('Qual a sua Nacionalidade?')
     if(2022-cadastro.ano>=18 && cadastro.nacionalidade ==="Brasileira"){
        cadastro.nome = prompt('Qual seu nome?')
        cadastro.senha = prompt('Qual a sua senha?')
        return usuarios.push(cadastro)
    }else return console.log('Você não tem idade pra isso!')


     
}
console.log(cadastro());

const login = () => {
    usrLogin = prompt('Login:')
    let usrSenha = prompt('Senha:')
    while(usrLogin.usuarios.nome!==usrSenha.usuarios.senha){
        usrLogin = prompt('Login:')
        usrSenha = prompt('Senha:')
        console.log('Credênciais inexistente!')
        
    }return usrLogin
}
console.log(login());
201
const primeiraDose = () => {
    console.log(`Olá ${usrLogin.usuarios.nome}`)
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());