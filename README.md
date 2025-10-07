# PEDRI-PEDRI-PEDRI-BACKEND

## Resumo

Este projeto apresenta o desenvolvimento do backend para um portal de fã dedicado ao jogador Pedri, centralizando informações atualmente dispersas em diferentes fontes. A aplicação web, integrada a esta API, reúne biografia, carreira no clube e na Seleção Espanhola, galeria multimídia, curiosidades, notícias e área de cadastro para fãs.

O público-alvo são jovens e adultos (13 a 45 anos), conectados e interessados em futebol, que buscam acesso rápido e organizado a conteúdo sobre o jogador.

A estrutura do portal é composta por cinco páginas principais: Home (entrada e destaque), Listagem (conteúdos principais), Detalhes (informações aprofundadas do contéeúdo da listagem), Cadastro (interação de fãs) e Sobre Mim (apresentação do autor). O fluxo de navegação é garantido por um header com links globais e um footer que direciona para a página de apresentação pessoal.

**Palavras-chave:** Pedri; futebol; portal de fã; aplicação web; API.

## Abstract

This project presents the development of the backend for a fan portal dedicated to the football player Pedri, centralizing information that is currently dispersed across different sources. The web application, integrated with this API, gathers his biography, club and Spanish National Team career, multimedia gallery, curiosities, news, and a fan registration area.

The target audience consists of young people and adults (ages 13 to 45), digitally connected and interested in football, who seek quick and organized access to content about the player.

The structure is composed of five main pages: Home (entry and highlight), Listing (main content), Details (in-depth information), Registration (fan interaction), and About Me (author’s presentation). Navigation flow is ensured by a header with global links and a footer directing to the author’s presentation page.

**Keywords:** Pedri; football; fan portal; web application; API.

---

## Ideia Principal

- **Projeto:** Portal de fã sobre o jogador Pedri.
- **Problema que resolve:** Fãs do Pedri encontram informações espalhadas (biografia, carreira, estatísticas, fotos e notícias). O portal centraliza tudo em uma experiência única, acessível e organizada, consumindo dados de uma API própria (back‑end).

### Principais funcionalidades do backend

- Exibir biografia e trajetória de Pedri


---

## Público-Alvo

- **Quem usa:** Fãs do jogador Pedri, torcedores do Barcelona e da Seleção Espanhola, além de pessoas interessadas em futebol.
- **Idade/perfil:** Jovens e adultos (13 a 45 anos), conectados, que acompanham esportes principalmente pelo celular e redes sociais.
- **Necessidades:** Acessar rapidamente informações da carreira, ver fotos e vídeos, acompanhar notícias, conhecer curiosidades e interagir como fã.

---

## Estrutura das Páginas do Portal (Frontend)

1. **Home:** Página de boas-vindas com foto destaque, frase marcante e resumo sobre Pedri.
2. **Listagem:** Reúne conteúdos principais sobre Pedri (biografia, carreira, seleção, galeria, curiosidades, notícias).
3. **Detalhes:** Exibe o conteúdo escolhido da listagem em profundidade.
4. **Cadastro:** Formulário para fãs se cadastrarem, informando nome, e-mail e mensagem.
5. **Sobre Mim:** Apresentação da autora/dev, com links de contato.

Fluxo de navegação: Todas as páginas possuem header com links globais e footer com link para Sobre Mim. O usuário navega facilmente entre as páginas.

> **Integração entre Backend e Frontend**
>
> A API foi estruturada para oferecer tabelas e endpoints para todas as cinco páginas do portal (Listagem, Detalhes, Galeria e Notícias).  
> No entanto, o consumo de dados pelo frontend ocorre apenas nas páginas de Listagem, Galeria Multimídia e Notícias.  
> As páginas Home, Detalhes (Biografia, Carreira no clube, Seleção Espanhola e Curiosidades e Lifestyle), Cadastro e Sobre Mim apresentam conteúdos estáticos definidos no próprio frontend.

---

## Tecnologias Utilizadas

- **JavaScript** (Node.js)
- **Express.js** (framework para rotas)
- **PostgreSQL** (banco de dados)
- **pg** (conexão com PostgreSQL)
- **multer** (upload de arquivos)
- **dotenv** (variáveis de ambiente)
- **Postman** (testes de API)
- **Visual Studio Code** (IDE)

---

## Estrutura do Projeto

```
PEDRI-PEDRI-PEDRI-BACKEND/
│
├── node_modules/           # Dependências instaladas pelo npm
├── src/
│   ├── config/             # Configurações (ex: upload.js, conexão com banco)
│   ├── controllers/        # Lógica das rotas (ex: galeriaController.js, noticiasController.js)
│   ├── database/           # Scripts SQL (ex: schema.sql)
│   ├── models/             # Acesso ao banco de dados (ex: galeriaModel.js, noticiasModel.js)
│   ├── routes/             # Definição das rotas da API (ex: galeriaRoutes.js, noticiasRoutes.js)
│
├── uploads/                # Pasta para arquivos enviados (imagens)
├── .env                    # Variáveis de ambiente (dados sensíveis do projeto)
├── .exemple.env            # Exemplo de variáveis de ambiente para configuração
├── .gitignore              # Arquivos/pastas ignorados pelo Git
├── package-lock.json       # Controle de versões das dependências
├── package.json            # Dependências e scripts do projeto
├── README.md               # Documentação do projeto
└── server.js               # Arquivo principal para inicializar o servidor Express
```

---

## Instruções para Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/limbea23/PEDRI-PEDRI-PEDRI-BACKEND.git
   cd PEDRI-PEDRI-PEDRI-BACKEND
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   - Renomeie `.exemple.env` para `.env`.
   - Preencha os dados do banco de dados e outras configurações necessárias.

4. **Configure o banco de dados**
   - Crie o banco e as tabelas usando o arquivo `src/database/schema.sql`;
   - Ajuste o usuário e senha conforme sua configuração.

5. **Execute o servidor**
   ```bash
   npm run dev
   ```
   ou
   ```bash
   node server.js
   ```

6. **Acesse a API**
   - O servidor estará rodando em `http://localhost:5080` (ou porta definida no `.env`).

7. **Testes**
   - Utilize o Postman para testar as rotas da API conforme a documentação.

---

## Exemplos de Uso da API

### Criar uma nova galeria

**Endpoint:** `POST /galeria`

Envio via `form-data` (Postman):

- `listagem_id`: ID existente na tabela listagem (4)
- `titulo`: Título da galeria
- `photo`: Arquivo de imagem

#### Exemplo de resposta (JSON)

```json
{
    "id": 22,
    "listagem_id": 4,
    "titulo": "Pedri e Fernando assistindo um jogo de futebol",
    "photo": "1759802945528-pedricomfer2.jpg"
}
```

---

### Criar uma nova notícia

**Endpoint:** `POST /noticias`

Envio via `form-data`:

- `listagem_id`: ID existente na tabela listagem (6)
- `titulo`: Título da notícia
- `subtitulo`: Subtítulo (opcional)
- `texto`: Texto da notícia (opcional)
- `photo`: Arquivo de imagem
- `data_publicacao`: Data no formato YYYY-MM-DD (ex: 2025-10-05)

#### Exemplo de resposta (JSON)

```json
{
    "id": 10,
    "listagem_id": 6,
    "titulo": "Pedri: “Esses são os jogos para aproveitar” —  o prazer de jogar nas noites da Champions",
    "subtitulo": "O jogador das Ilhas Canárias comenta sobre a partida de quarta-feira contra o que considera um dos melhores times do mundo.",
    "texto": "Como é costume na véspera de um confronto da Champions League, Hansi Flick não foi a única voz na coletiva de imprensa desta terça-feira. Desta vez, quem representou o Barcelona foi Pedri, que falou antes do duelo de quarta à noite contra o Paris Saint-Germain, no Estadi Olímpic Lluís Companys (início às 16h, horário de Brasília).\nO meio-campista deixou claro que tem o PSG em alta conta:\n“Eles já mostraram que são um dos melhores times do mundo”, afirmou.\nMas fez questão de destacar que o Barça também pertence a esse nível, afirmando que ambos os elencos têm talento “para vencer a Champions League”. Para Pedri, são esses os jogos que fazem o futebol valer a pena:\n“Queremos jogar essas partidas, porque são as melhores do mundo e as que mais se aproveita.”\nUm time corajoso\nPedri destacou a postura ofensiva que o Barcelona deve adotar:\n“Ambos os times vão querer a bola. Vamos com tudo para dominar e pressionar. Somos uma equipe corajosa desde que o Flick chegou.”\nEle também acredita que o estilo ofensivo do PSG de Luis Enrique pode favorecer o Barça:\n“Há mais espaços. Para nós, é melhor enfrentar um time que joga assim.”\nAo falar sobre seu papel em campo, o jogador de 22 anos ressaltou a importância do meio-campo:\n“Nós vamos equilibrar a balança.”\nHomenagem a Aitana\nEm tom pessoal, Pedri disse sentir-se “valorizado” e agradeceu o carinho que recebe diariamente dos torcedores. Também retribuiu o elogio da vencedora da Bola de Ouro, Aitana Bonmatí:\n“Quero agradecer o que ela disse. Ela só precisa continuar fazendo o que faz, porque é impossível fazer melhor.”\n- Por Equipe FCBarcelona",
    "photo": "1759803136772-noticia4.png",
    "data_publicacao": "2025-09-30T03:00:00.000Z"
}
```

---

### Buscar todas as galerias

**Endpoint:** `GET /galeria`

---

### Buscar uma galeria específica

**Endpoint:** `GET /galeria/:id`

---

### Buscar todas as notícias

**Endpoint:** `GET /noticias`

---

### Buscar uma notícia específica

**Endpoint:** `GET /noticias/:id`

---

> **Observação sobre a tabela "galeria":**  
A tabela criada no backend com o nome "galeria" refere-se ao envio e armazenamento de arquivos, como fotos e/ou vídeos relacionados ao Pedri.  
Embora as operações estejam nomeadas como create galeria, update galeria, etc., todas dizem respeito ao upload, atualização e gestão desses arquivos multimídia, funcionando como um repositório para fotos e vídeos na aplicação.

---

> **Obrigada! 💗🌟🤠💋**  
Qualquer dúvida, pode me chamar!
⚽💙😁❤