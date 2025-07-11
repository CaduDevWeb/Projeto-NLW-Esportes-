# 🎮 Assistente de Games Inteligente

Um assistente interativo para jogadores que buscam dicas e informações precisas sobre seus jogos favoritos: **Valorant**, **Counter-Strike 2 (CS2)** e **League of Legends (LoL)**. Desenvolvido para oferecer respostas rápidas e diretas, este assistente utiliza inteligência artificial para fornecer informações atualizadas, considerando o patch mais recente dos jogos.

-----

## ✨ Funcionalidades

  * **Dicas Personalizadas por Jogo:** Obtenha conselhos específicos para Valorant, CS2 e League of Legends.
  * **Respostas Diretas:** Respostas concisas, com no máximo 500 caracteres, focando na informação essencial.
  * **Atualização Constante:** Considera a data atual para pesquisar e fornecer dicas baseadas nos patches mais recentes dos jogos.
  * **Validação de Informação:** Não inventa respostas e informa quando a pergunta não está relacionada ao jogo ou quando não possui a informação.
  * **Interação Natural:** Desenvolvido para entender suas perguntas e responder sem formalidades desnecessárias.

-----

## 🛠️ Tecnologias Utilizadas

  * **HTML:** Para a estrutura e conteúdo da interface.
  * **CSS:** Para estilização e design visual da aplicação.
  * **JavaScript:** Para a lógica de programação e interação dinâmica com o usuário.
  * **API Google Gemini:** A inteligência artificial por trás das respostas do assistente.
  * **(Outras tecnologias, se houver)**: (Ex: `Git` para controle de versão, `Docker` para conteinerização, etc.)

-----

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o assistente em sua máquina.

### Pré-requisitos

Certifique-se de ter um navegador web moderno instalado (Chrome, Firefox, Edge, Safari).

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/CaduDevWeb/Projeto-NLW-Esportes-.git
    cd Projeto-NLW-Esportes-
    ```
2.  **Configurar a API Key do Gemini:**
      * Obtenha sua chave de API Gemini no [Google AI Studio](https://aistudio.google.com/app/apikey).
      * No seu código JavaScript (ou onde você está fazendo a chamada à API), certifique-se de que sua chave de API esteja configurada de forma segura (idealmente, via um backend simples ou através de variáveis de ambiente no ambiente de produção). Para fins de desenvolvimento local, você pode adicioná-la diretamente (mas **não** a inclua no controle de versão se for para um projeto público).

### Execução

1.  **Abra o arquivo `index.html`** no seu navegador web preferido.

-----

## 💡 Como Usar

Após abrir o programa no navegador, você será solicitado a escolher um jogo e, em seguida, poderá fazer suas perguntas.

**Exemplos de Interação:**

1.  **Escolha do Jogo:**

      * Usuário: `Valorant`
      * Usuário: `CS2`
      * Usuário: `League of Legends`

2.  **Perguntas (após escolher o jogo):**

      * "Qual o melhor agente sentinela para o mapa Ascent?" (Valorant)
      * "Qual o meta de armas atual?" (CS2)
      * "Quais campeões estão fortes na rota do meio?" (League of Legends)
      * "Como faço para subir de elo?" (Qualquer jogo)

-----

## 示 Exemplos de Respostas

  * **Valorant:** "O agente mais popular no patch 8.08 para a função de Sentinela é o Cypher, com uma taxa de escolha de 18% em mapas como Split e Ascent. Sua capacidade de armadilhas e câmera oferece controle de área. Boa sorte no VCT\!"
  * **CS2:** "O meta atual do CS2 no patch de 10/07/2025 favorece o uso intenso de rifles como AK-47 e M4A4. Granadas incendiárias e smokes são cruciais para controle de áreas e retakes. Deagle ainda é forte em pistol rounds. Que a mira esteja calibrada\!"
  * **League of Legends:** "No patch 14.13, campeões como Smolder e Corki estão dominando a rota do Meio devido ao seu scaling e dano em área. Para a selva, Viego e Nocturne são escolhas fortes por sua capacidade de pick-off e controle de objetivos. Partiu ranqueada\!"
  * **Fora do Tópico:** "Essa pergunta não está relacionada ao jogo."
  * **Não Sei:** "Não sei."

-----

## 🤝 Contribuição

Contribuições são bem-vindas\! Se você tiver sugestões, melhorias ou encontrar algum bug, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

-----

## 📄 Licença

Este projeto está licenciado sob a Licença [Nome da Licença, ex: MIT]. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

-----

Este README agora reflete as tecnologias de front-end que você usou. Lembre-se de preencher `[SeuUsuario]`, `[NomeDoSeuRepositorio]` e a `[Nome da Licença]` conforme seu projeto.

Ficou como você esperava?
