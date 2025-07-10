const apiKeyInput = document.getElementById('api-key')
const gameSelect = document.getElementById('game-select')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const form = document.getElementById('form')
const aiResponse = document.getElementById('aiResponse')

const askAI = async (question, game, apiKey) => {
    const model = "gemini-2.5-flash"
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}` 
    const pergunta = `
        olha, tenho esse jogo ${game} e queria saber ${question}
    `
    const contents = [{
        parts: [{
            text: pergunta
        }]
    }]

    // chamada API
    const response = await fetch(geminiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents
        })
    })

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
}

const sendForm = async (event) => {
    event.preventDefault()
    const apiKey = apiKeyInput.value
    const game = gameSelect.value
    const question =questionInput.value

    console.log(apiKey, game, question)

    if(apiKey === '' || game === "" || question === '') {
        alert('Por favor, preencha todos os campos')
        return
    }

    askButton.disabled = true;
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading')

    try {
        // perguntar para a IA
        const text = await askAI(question, game, apiKey)
        aiResponse.innerHTML = text;
    } catch(error) {
        console.log('Erro: ',error)
    }finally {
        askButton.disabled = false
        askButton.textContent = 'Perguntar'
        askButton.classList.remove('loading')
    }
}
form.addEventListener('submit',sendForm)