# Desafio Full Stack Kenzie Academy Brasil 🚀🔧

Bem-vindo ao repositório do meu desafio full stack durante meu curso na Kenzie Academy Brasil! Este projeto é uma aplicação que inclui um CRUD de usuários e contatos.

**Importante:** Como o deploy não foi solicitado na entrega, a aplicação está operando localmente. Algumas configurações prévias são necessárias para testar a aplicação.

## Configuração Local 🛠️

**1° Passo:** Instale as dependências do back-end e do front-end:

- Dentro da pasta `/back-end`: `npm install`
- Dentro da pasta `/front-end`: `npm install`

**2° Passo:** Configure o arquivo `.env`:

- Siga as instruções no arquivo `.env` para configurar corretamente as variáveis. Certifique-se de ter uma base de dados PostgreSQL para popular com as entidades da aplicação.

**3° Passo:** Execute as migrações para gerar tabelas na base de dados:

```bash
yarn typeorm migration:create src/migrations/initialMigration
yarn typeorm migration:generate src/migrations/generateTables -d src/data-source.ts
yarn typeorm migration:run -d src/data-source.ts
```

**4° Passo:** Inicie o servidor do back-end:

```bash
yarn dev
```

**5° Passo:** Inicie o servidor do front-end:

```bash
npm start
# ou
yarn start
```

A aplicação foi desenvolvida no front-end usando React, Context API e Styled-components. O back-end foi construído com Node.js, Express, TypeORM e PostgreSQL.

Aproveite explorar e testar a aplicação localmente! Sinta-se à vontade para fazer contribuições ou fornecer feedback. Vamos construir algo incrível juntos! 🚀😊
