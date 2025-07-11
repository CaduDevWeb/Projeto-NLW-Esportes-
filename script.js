const apiKeyInput = document.getElementById('api-key')
const gameSelect = document.getElementById('game-select')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const form = document.getElementById('form')
const aiResponse = document.getElementById('aiResponse')

const markdownToHTMl = (text) => {
    const converter = new showdown.Converter();
    return converter.makeHtml(text);
}

const askAI = async (question, game, apiKey) => {
    const model = "gemini-2.5-flash"
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
    let exampleAnswer = ''
    let fraseFinal =''
    switch (game) {
        case "Valorant":
            exampleAnswer = "O agente mais popular no patch 8.08 para a função de Sentinela é o Cypher, com uma taxa de escolha de 18% em mapas como Split e Ascent. Sua capacidade de armadilhas e câmera oferece controle de área.";
            fraseFinal = "Boa sorte no VCT!";
            break; 
        case "cs2":
            exampleAnswer = "O meta atual do CS2 no patch de 10/07/2025 favorece o uso intenso de rifles como AK-47 e M4A4. Granadas incendiárias e smokes são cruciais para controle de áreas e retakes. Deagle ainda é forte em pistol rounds.";
            fraseFinal = "Que a mira esteja calibrada!";
            break;
        case "lol":
            exampleAnswer = "No patch 14.13, campeões como Smolder e Corki estão dominando a rota do Meio devido ao seu scaling e dano em área. Para a selva, Viego e Nocturne são escolhas fortes por sua capacidade de pick-off e controle de objetivos.";
            fraseFinal = "Partiu ranqueada!";
            break;
        default:
            exampleAnswer = "Não tenho um exemplo específico para este jogo no momento.";
            fraseFinal = "Divirta-se jogando!";
            break;
    }
    const defaultPrompt = `
        Você é um assistente de games especialista em ${game}. Responda à seguinte pergunta do usuário: ${question}.

        Siga estas regras rigorosamente:
        - Se não souber a resposta, responda "Não sei".
        - Se a pergunta não estiver relacionada a ${game}, responda "Essa pergunta não está relacionada ao jogo".
        - Considere a data atual: ${new Date().toLocaleDateString()}.
        - Faça pesquisas atualizadas sobre o patch/versão atual do jogo (com base na data atual) para dar uma resposta coerente e precisa.
        - Nunca responda itens que você não tem certeza que existem no patch/versão atual.
        - Seja direto, conciso e responda em no máximo 500 caracteres.

        Exemplo de resposta para ${game}: ${exampleAnswer}.
        E finalize a resposta com essa frase: ${fraseFinal}.
    `

    const contents = [{
        role: "user",
        parts: [{
            text: defaultPrompt
        }]
    }]

    const tools = [{
        google_search: {}
    }]
    // chamada API
    const response = await fetch(geminiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents,
            tools
        })
    })

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
}

const sendForm = async (event) => {
    event.preventDefault()
    const apiKey = apiKeyInput.value
    const game = gameSelect.value
    const question = questionInput.value

    console.log(apiKey, game, question)

    if (apiKey === '' || game === "" || question === '') {
        alert('Por favor, preencha todos os campos')
        return
    }

    askButton.disabled = true;
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading')

    try {
        // perguntar para a IA
        const text = await askAI(question, game, apiKey)
        // aiResponse.innerHTML = text;
        aiResponse.querySelector('.response-content').innerHTML = markdownToHTMl(text)
        aiResponse.classList.remove('hidden')
    } catch (error) {
        console.log('Erro: ', error)
    } finally {
        askButton.disabled = false
        askButton.textContent = 'Perguntar'
        askButton.classList.remove('loading')
    }
}
form.addEventListener('submit', sendForm)