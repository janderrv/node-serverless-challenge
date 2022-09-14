### Documentação

 - https://documenter.getpostman.com/view/1358274/2s7YYvaNCg

### Requisitos
 - Node.js >= 16.x
 - Possuir credenciais AWS
 - Definir as variáves de ambiente
	 - ACESS_KEY_ID = <b>KEY AWS</b>
	 - SECRET_ACCESS_KEY =  <b>SECRET KEY AWS</b>
	 - REGION = <b>Região de preferência, por default é sa-east-1</b>

###  Executar o deploy na aws
 1. npm i -g serverless
 2. sls config credentials --provider aws --key KEY--secret SECRET
 3. npm i
 4. sls deploy

### Executar localmente
	OBS: Para executar localmente é necessário ter JRE instalado e suas variáveis configuradas

 1. sls dynamodb install
 2. sls offline start

### TO DO

 - [ ] Testes
 - [ ] Validar os tipos dos dados de entrada
