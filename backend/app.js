const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors()); // Gère les en-têtes CORS pour les requêtes depuis un domaine différent
app.use(bodyParser.json()); // Analyse les corps des requêtes au format JSON

// Exemple de route
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running.' });
});

// Lorsqu'aucune route ne correspond, renvoie une réponse 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
