# Desafio Técnico - Full Stack Junior

## Objetivos do desafio

Este desafio irá verificar se o candidato possuí as seguintes habilidades em um nível básico:

- Noções de Nextjs
- Noções de Tailwind
- Noções de Backend
- Git e Github

## O que deverá ser desenvolvido

- O candidato deverá escolher e desenvolver uma das heros sections dentro deste figma: https://encurtador.com.br/buzKZ
- O candidato deverá desenvolver uma rota backend utilizando Nextjs
- Tanto o front-end quanto o back-end devem ser feitos no mesmo projeto do Nextjs

## Requisitos técnico

- O projeto foi criado utilizando o Nextjs
- Foi configurado tailwind
- ### Frontend
  - A rota / exibe um hero, de acordo com o design escolhido, com pixel perfect
- ### Backend

  - Todas as rotas recebem um secret
    - Caso o secret seja diferente de "naranja-labs", deverá retornar um erro com o melhor status code para essa situação.
  - A rota /jobs retorna um json com todas as informações do arquivo jobs.ts (O local onde este arquivo esta localizado pode ser alterado de acordo com seu desejo)
  - a rota /jobs?level=Junior deverá retornar apenas os jobs de level Junior
  - a rota /job/[id] deverá ter o seguinte comportamento:
    - Caso o id não exista no arquivo jobs.ts, deverá retornar um erro com um status code mais adequado para essa situação e uma messagem.
    - Caso o id exista, deverá retornar apenas o job ao qual o id seja correspondente.
  - a rota /job/submit deverá receber um body com a seguinte estrutura:

    ```
    {
      name: string,
      age: number,
      phone: string,
      state:string,
      city: string
    }
    ```

    - Caso o body não seja enviado, deverá retornar um erro com o melhor status code para esse caso e uma mensagem
    - Caso esteja tudo ok com o body, deverá retornar um json com a seguinte estrutura:

    ```
    {
      message: Thank you for your
      application, ${name}
    }
    ```

## Como deverá ser feito o desenvolvimento e entrega

- Faça um fork desse repositório
- No seu readme, inclua detalhes como:
  - Nome completo
  - Linkedin
  - Github
  - Telefone
  - Email
- Ao finalizar, envie o link do seu repositório para mateus@naranjalabs.dev

## Dicas

- Atente-se a qualidade do seu código
- Atente-se ao pixel perfect
- Cuidado com commit bomba
- Faça commits bem descritivos

## Observações

- Após a data final de entrega, nenhum novo commit será considerado
