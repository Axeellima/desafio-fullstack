Aplicação para DESAFIO FULL STACK - Kenzie Academy Brasil

Como não foi solicitado na entrega de fato o deploy da aplicação, seu funcionamento está sendo feito localmente... Dessa forma se torna necessário algumas pré-configurações para o teste da aplicação que estarão por aqui descritos

1° Passo - Dentro da pasta do "/back-end" está a aplicação do CRUD de usuário e contato, sendo assim necessário instalar as dependências da mesma utilizando
"npm install", da mesma forma com a aplicação de front-end na pasta "/front-end".

2° Passo - Configuração de arquivo ".env" as siglas estão explicitas para melhor entendimento do próprio arquivo. Obs: É necessário criar ou ter uma database POSTGRESQL para poder popular a mesma com as entidades da aplicação

3° Passo - Executar as migrações para gerar as tabelas em nossa database através dos comandos:

- yarn typeorm migration:create src/migrations/initialMigration
- yarn typeorm migration:generate src/migrations/generateTables -d src/data-source.ts
- yarn typeorm migration:run -d src/data-source.ts

4° Passo - Iniciar o servidor da aplicação back-end utilizando o comando "yarn dev"

5° Passo - Iniciar o servidor da aplicação front-end utilizando o comando "npm start" ou "yarn start"

Após isso a aplicação está pronta para uso! Espero que tenha gostado da aplicação desde já agradeço a atenção
