# Youtube-Search-Clone
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/GabrielSS187/Youtube-Search-Clone/blob/main/LICENSE) 
![t-fundo](https://user-images.githubusercontent.com/86306877/214639199-c3dd0ac8-bbaa-446e-8b87-3634260e928d.png)

# Sobre o projeto

### Link: [Youtube-Search-Clone](https://youtube-search-clone-six.vercel.app/)

``Youtube-Search-Clone``

É um app web básico que é um clone do YouTube que através da `api` oficial do google para desenvolvedores consigo pegar
todos os vídeos atualizados da plataforma. Também esta com o recurso de `Scroll Infinito` implementado.

OBS: A `api` do google / youtube tem um limite de cota. Então caso você entrar neste app web e não tiver nenhum vídeo
é por que essa cota acabou e só vai voltar após 24 horas. Regras do ( GOOGLE ).

## Demostração
https://user-images.githubusercontent.com/86306877/214641879-c9fae9a2-bfa2-4b82-9173-9249961f99ad.mp4

# Tecnologias utilizadas

## Front end
- HTML / CSS / JS / TypeScript
- React JS/TS
- Vite
- Tailwind Css
- Axios
- React-Router-DOM-V6
- React-Infinite-Scroller
- Tailwind-Scrollbar-Hide

## Container
- Docker

## Implantação em produção

- Front end web: Vercel

## Inspiração / Template
- https://www.youtube.com/

# Como executar o projeto

## Front end web

### Container com Docker
Pré-requisitos: Docker instalado na sua máquina

```bash
# clonar repositório
git clone https://github.com/GabrielSS187/Youtube-Search-Clone.git

# entrar na pasta do projeto
cd Youtube-Search-Clone

# criar imagem do projeto
docker build -t youtube-search-clone .

# rodar a imagem do projeto
docker run -p 5173:5173 youtube-search-clone
```

### Após esse procedimento o projeto deverá esta rodando no endereço: http://localhost:5173/

### Máquina local
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/GabrielSS187/Youtube-Search-Clone.git

# entrar na pasta do projeto
cd Youtube-Search-Clone

# instalar dependências
npm install

# executar o projeto
npm run dev
```

### Após esse procedimento o projeto deverá esta rodando no endereço: http://localhost:5173/

# Autor

Gabriel Silva Souza

https://www.linkedin.com/in/gabriel-silva-souza-developer
