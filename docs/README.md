 # MANUAL DE UTILIZAÇÃO DO SISTEMA/SITE
## PASSO 1 - CONFIGURAÇÃO INICIAL
Tutorial de instalação do GIT

 <p align="justify">
    Realize a busca do termo [Instalar GIT](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git) para Windows.
</p>

 <p align="center">
    <a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git" target="_blank">
        <img src="Docs/Imagens/Git.png" width="400"> 
    </a>
</p>

## PASSO 2 - CONFIGURANDO A CONTA GIT PELO TERMINAL
Precisa fazer alguns comandos no Terminal do Windows para extrair a chave.

<p align="center">
    <img src="Docs/Imagens/Terminal.png" width="400"> 
</p>

- git --version
- git config --global user.name "Fulano de Tal"
- git config --global user.email fulanodetal@exemplo.br
- ssh-keygen (Comando que gera a chave publica e privada, também irá pedir a criação de uma senha)
- cat (Extrai a chave publica)

## PASSO 3 - CONFIGURANDO GIT
Ao extrair a chave no Terminal, você precisa gravar sua chave no git.
Profile > Setting > SSH and GPG Keys > New SSH Key

<p align="center">
    <img src="Docs/Imagens/Captura de tela 2025-01-23 092848.png" width="400"> 
</p>

## PASSO 4 - CRIAÇÃO DO REPOSITORIO
Como criar um repositorio.

- git init
- git remote add origin
- git branch -m brain
- git push -u origin main ou master

<p align="center">
    <img src="Docs/Imagens/Repositorio.png" width="400"> 
</p>

## EXECUTANDO VSCODE
<p align="center">
    <img src="Docs/Imagens/vscode.png" width="400"> 
</p>

## PASSO 5 - COMANDOS ADMINISTRATIVOS DO GIT NO TERMINAL DO VSCODE

<p align="center">
    <img src="Docs/Imagens/Terminal VScode.png" width="400"> 
</p>

- git status
- git add . or git add index.html
- git commit -m "Mensagem de desenvolvedor" ex: git commit -m "File update"
- git push -u origion master or main

## Clonar Projeto do Github 
git clone (+ link do projeto no git e dentro do diretorio)