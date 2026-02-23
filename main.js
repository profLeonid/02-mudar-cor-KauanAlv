'use strict'

const botaoTrocarCor = document.getElementById('botao-trocar-cor')
const botaoVerde = document.getElementById('botao-verde')
const botaoVermelho = document.getElementById('botao-vermelho')
    
function trocarCor(){
    const corUsuario = document.getElementById('cor-usuario').value
    if(corUsuario == 'azul' || corUsuario == 'Azul'){
        document.documentElement.style.setProperty('--color-bg', '#008eff')
    }else if(corUsuario == 'bronze' || corUsuario == 'Bronze'){
        document.documentElement.style.setProperty('--color-bg', '#CD7F32')
    }else if(corUsuario == 'prata' || corUsuario == 'Prata'){
        document.documentElement.style.setProperty('--color-bg', '#BAB8B5')
    }else if(corUsuario == 'ouro' || corUsuario == 'Ouro'){
        document.documentElement.style.setProperty('--color-bg', '#D3AF37')
    }else{
        document.documentElement.style.setProperty('--color-bg', corUsuario)
    }
}

function corVerde(){
    document.documentElement.style.setProperty('--color-bg', 'green')
}

function corVermelho(){
    document.documentElement.style.setProperty('--color-bg', 'red')
}

botaoTrocarCor.addEventListener('click', trocarCor)
botaoVerde.addEventListener('click', corVerde)
botaoVermelho.addEventListener('click', corVermelho)