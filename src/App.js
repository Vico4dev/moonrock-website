import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Assurez-vous de créer ce fichier de thème
import CssBaseline from '@mui/material/CssBaseline'; // Pour normaliser les styles
import Accueil from './pages/Accueil';
import Wiki from './pages/Wiki';
import StatutServeur from './pages/StatutServeur';
// Importez les composants MUI pour la navigation
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalise les styles de base et applique le fond */}
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MoonRock RP
            </Typography>
            <Button color="inherit" component={Link} to="/">Accueil</Button>

            <Button color="inherit" component={Link} to="/statut-serveur">Statut Serveur</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Accueil />} />

          <Route path="/statut-serveur" element={<StatutServeur />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
