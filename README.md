# Nest Essentials Schematics

[![NPM Version](https://img.shields.io/npm/v/@cedraz/nest-essentials.svg)](https://www.npmjs.com/package/@cedraz/nest-essentials)

Uma coleção de schematics para o [NestJS](https://nestjs.com/) que estende os geradores padrão (`@nestjs/schematics`) com comandos customizados para acelerar o desenvolvimento de aplicações com arquitetura de Monólito Modular (MMA).

## O que este pacote oferece?

O objetivo deste pacote é simples: **reduzir o trabalho repetitivo**. Ele combina o poder dos schematics padrão do NestJS com um novo gerador, o `mma-module`, criado para seguir os princípios de uma arquitetura modular.

### ✨ Feature Principal: `mma-module`

Com um único comando, você pode criar um módulo de feature completo e bem-estruturado.

**Comando:**
```bash
nest g mma-module user
```

**Estrutura gerada**:

```bash
src/
└── user/
  ├── domain/
  │   ├── entities/
  │   │   └── user.entity.ts
  │   ├── repositories/
  │   │   ├── implementations/
  │   │   │   └── user.in-memory.repository.ts
  │   │   └── user.repository.interface.ts
  │   └── user.service.ts
  ├── http/
  │   ├── dtos/
  │   │   └── create-user.dto.ts
  │   └── user.controller.ts
  └── user.module.ts
```
**Principais diretórios:**
- `domain/`: Lógica de negócio, entidades e repositórios.
- `http/`: Controllers e DTOs para comunicação HTTP.
- `user.module.ts`: Módulo principal da feature.

Essa estrutura facilita a separação de responsabilidades e a escalabilidade do projeto.

# Como utilizar

## Instalação
Para instalar o pacote, é necessário ter o NPM (Node Package Manager) instalado. Você pode instalar o pacote globalmente ou como uma dependência de desenvolvimento no seu projeto NestJS. Além disso, é necessário ter o Nest CLI instalado.

Para instalar o Nest CLI, execute:
```bash
npm install -g @nestjs/cli
```

#### Instalação do Nest Essentials

Com npm:
```bash
npm install --save-dev @cedraz/nest-essentials@latest
```

## Uso

Após instalar o pacote, é necessário configurar seu projeto para utilizar os schematics do Nest Essentials. Para isso, edite o arquivo `nest-cli.json` ou `nest.json` e altere a propriedade `"collection"`:

```json
{
  "collection": "@cedraz/nest-essentials"
}
```

Se o arquivo já possuir `"collection": "@nestjs/schematics"`, basta substituir pelo valor acima.

Com essa configuração, você poderá usar todos os comandos padrão do NestJS, além dos novos comandos exclusivos do Nest Essentials, como o `mma-module`.

Feito isso basta executar o comando para gerar um novo módulo:

```bash
nest generate mma-module <nome do módulo>
```

ou

```bash
nest g mma-module <nome do módulo>
```

**Lembrando que é necessário adicionar esse módulo no `app.module.ts` para que ele seja reconhecido pelo NestJS.**

## Features em desenvolvimento
- [ ] Adicionar o novo módulo criado no `app.module.ts` automaticamente.
- [ ] Criar um comando para gerar apenas o domain.
- [ ] Criar um comando para gerar apenas o http.
- [ ] Criar um comando para gerar o módulo com testes.

## Referências
- [Nestjs Schematics](https://github.com/nestjs/schematics)
- [Documentação Oficial do NestJS](https://docs.nestjs.com/)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)