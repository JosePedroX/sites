# MANUAL DE UTILIZAÇÃO DO SISTEMA/SITE
## PASSO 1 - PRIMEIRASCONFIGURAÇÕES
Tutorial de instalação do repositório GIT 

 <p align="justify">
    Realize a busca do termo [Instalar GIT](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git) para Windows.
</p>

 <p align="center">
    <a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git" target="_blank">
        <img src="Docs/Imagens/Git.png" width="400"> 
    </a>
</p>

## PASSO 2 - COMO CONFIGURARA CONTA GIT PELO TERMINAL
É necessário realizar alguns comandos no Terminal do Windows para extrair a chave.

<p align="center">
    <img src="/image/exp.png" width="400"> 
</p>

- git --version
- git config --global user.name "Seu nome cadastrado no github"
- git config --global user.email gmailcadastradonogithub@exemplo.br
- ssh-keygen | Comando para gerar sua chave (pública e privada), o que necessita de uma criação de segurança para chave: apertando enter 2x após o comando
- cat id | para ler a chave pública que você adicionará ao seu repositório Git hub 

## PASSO 3 - CONFIGURANDO GIT
Ao gerar a chave em seu Terminal, você precisa "mostrar o caminho" da chave no git, realizando os seguintes passos:
Perfil > configurações > SSH and GPG Keys > nova chave SSH

<p align="center">
    <img src="/image/Captura de Tela (11).png" width="400"><br>
    <img src="/image/Captura de Tela (12).png>"width="400"><br>
    <img src="/image/Captura de Tela (13).png>"width="400"><br> 
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

## Jogar todo conteúdo de uma Branch para outra Branch
Primeiramente precisa trocar de branch para que possa fazer o processo.

<p align="center">
    <img src="Docs/Imagens/Puxar de uma branch.png" width="400">
</p>