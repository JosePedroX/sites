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
    
<img src="/image/Captura de Tela (12).png" width="400"><br> 

<img src="/image/Captura de Tela (13).png" width="400"><br>
 </p>

## PASSO 4 - CRIAÇÃO DO REPOSITORIO

## Criando um repositorio:

- git init
- git remote add origin
- git branch -m brain
- git push -u origin main ou master

<p align="center">
    <img src="/image/Captura de Tela (14).png" width="400"> 
 Após isso, inicie o Visual Studio Code, em seu terminal executando o código: code . 
</p>

## PASSO 4 - COMANDOS ADMINISTRATIVOS DO GIT NO TERMINAL DO VSCODE

## comandos:
<p align="center">
    <img src="Docs/Imagens/Terminal VScode.png" width="400"> 
</p>

- git status | para verificar o conteúdo adicionado/excluído
- git add . | para adicionar o conteúdo adicionado/editado
- git commit -m "mensagem de atualização" EX: "Projetov1.0.0"
- git push -u origion main/master

## Modo de clonagem do Github: 
git clone github.com/seurepositório (copia e cola o link do repositório)

## Criação de branchs
Comandos branchs: 
- git branch | para visualizar em que branch você se situa
- git branch develop | após o "branch", o próximo nome é já é a nova branch. Criamos uma develop para o desenvolvimento do site, antes de subir pra master/main.
- git branch teste | também criamos uma para teste, antes de subir para o desenvolvimento.
- git checkout develop/teste | ultilizamos checkout + o nome da branch para mudança de branch (sempre faça o git commit, e git push, antes da mudança de branch)
- git merge teste/develop | para puxar o conteúdo de uma branch inferior. EX: puxar de teste para develop, e develop para master/main.
 

<p align="center">
 
</p>