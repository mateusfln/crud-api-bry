# Teste Técnico Estagiário Bry - API CRUD de Funcionários e Empresas

Este é um teste técnico proposto pela Bry para avaliar conhecimentos e habilidades no desenvolvimento de uma aplicação web API CRUD (Create, Read, Update, Delete) de funcionários e empresas utilizando Laravel no back-end e Angular no front-end.

## Descrição do Projeto

O objetivo deste projeto é Implementar uma API REST para realizar o gerenciamento de funcionários e empresas de um sistema e consumi-la no front-end:

## Tecnologias Utilizadas

- **Laravel**: Framework Php para desenvolvimento da API REST de forma mais simplificada e ágil.
- **Angular**: Framework Javascript para desenvolvimento mais simplificado e ágil do front-end.
- **PHP**: Linguagem de programação utilizada para o desenvolvimento da aplicação (back-end).
- **Javascript**: Linguagem de programação utilizada para o desenvolvimento da aplicação (front-end).
- **MySQL**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar as informações dos funcionários e empresas.
- **Docker**: Plataforma de contêineres que facilita a criação, distribuição e execução de aplicativos em contêineres.
- 
## Como Executar o Projeto (API)

1. Certifique-se de ter o Docker instalado em sua máquina e também o Docker compose. Você pode baixar o Docker [aqui](https://www.docker.com/get-started).
```
git clone https://github.com/mateusfln/crud-api-bry.git
```

3. Navegue até o diretório do projeto:

```
cd crud-api-bry
```
4. instale as dependencias do composer no projeto

```
composer update
```
5. Inicie os contêineres Docker do laravel:

```
./vendor/bin/sail up
```

7. Rode os arquivos de migrations para criar as tabelas e colunas no banco de dados:

```
./vendor/bin/sail artisan migrate
```

## Como Executar o Projeto (Front-end)

1. Entre no front-end do projeto:

```
cd resoursces/FrontEnd/angular-front-end
```

2. instale as dependencias do npm no projeto

```
npm install
```
3. instale o angular cli no projeto

```
npm install -g @angular/cli
```

3. Inicie front-end:

```
ng serve
```

8. Acesse o endereço:

```
http://localhost:4200/funcionario // para o index de funcionarios
```
```
http://localhost:4200/empresa // para o index de empresa
```
