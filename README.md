# Nest Essentials Schematics

[![NPM Version](https://img.shields.io/npm/v/@cedraz/nest-essentials.svg)](https://www.npmjs.com/package/@cedraz/nest-essentials)

Uma coleção de schematics para o [NestJS](https://nestjs.com/) que estende os geradores padrão (`@nestjs/schematics`) com comandos customizados para acelerar o desenvolvimento de aplicações com arquitetura de Monólito Modular (MMA).

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

Com yarn:
```bash
yarn add --dev @cedraz/nest-essentials@latest
```

Com pnpm:
```bash
pnpm add --save-dev @cedraz/nest-essentials@latest
```

Com bun:
```bash
bun add --dev @cedraz/nest-essentials@latest
```

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
