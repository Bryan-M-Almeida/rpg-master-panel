const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.static('docs'));
app.use('/data', express.static('data'));



app.get('/data/personagem.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'personagem.json'));
});

app.post('/salvar-personagem', (req, res) => {
    const personagens = req.body;
    console.log("RECEBIDO DO FRONT:", personagens);

    if (!Array.isArray(personagens)) {
        return res.status(400).send("Formato inválido");
    }

    const filePath = path.join(__dirname, 'data', 'personagem.json');

    fs.writeFile(filePath, JSON.stringify(personagens, null, 2), (err) => {
        if (err) {
            console.error("Erro ao salvar:", err);
            return res.status(500).send("Erro ao salvar arquivo");
        }

        console.log("✅ Salvou com sucesso!");
        res.send("Personagem salvo com sucesso");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} link: http://localhost:${PORT}/index.html`);
});
