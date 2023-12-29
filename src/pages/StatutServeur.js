import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import headerImage from './img/statut.png'; // Remplacez 'header-image.jpg' par le nom de votre fichier image


function StatutServeur() {
  const [statutServeur, setStatutServeur] = useState('Chargement...');
  const [erreur, setErreur] = useState(null);
  const [dernierFetch, setDernierFetch] = useState('');

  useEffect(() => {
    const verifierStatutServeur = () => {
      fetch('/info.json')
        .then(response => {
          setDernierFetch(new Date().toLocaleString());
          if (response.ok) {
            setStatutServeur('Le serveur est en ligne.');
          } else {
            throw new Error('Le serveur ne répond pas correctement');
          }
        })
        .catch(error => {
          console.error('Erreur:', error);
          setStatutServeur('Hors ligne');
          setErreur(error.message);
        });
    };

    verifierStatutServeur();
    const intervalId = setInterval(verifierStatutServeur, 60000); // Répétez la vérification toutes les minutes

    return () => clearInterval(intervalId); // Nettoyez l'intervalle lors du démontage du composant
  }, []);
  
  return (
    <Container maxWidth="md" style={{ padding: '20px' }}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh" padding="20px">
      <img src={headerImage} alt="En-tête" style={{ width: '50%', height: 'auto', marginTop: '20px' }} />
        <Typography variant="h6" style={{ marginBottom: '10px' }}>
          Statut du serveur : {statutServeur}
          <span style={{
            display: 'inline-block',
            marginLeft: '10px',
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: statutServeur === 'Le serveur est en ligne.' ? 'green' : 'red',
          }}></span>
        </Typography>
        {erreur && <Alert severity="error">{erreur}</Alert>}
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          Dernière vérification : {dernierFetch}
        </Typography>
        {statutServeur === 'Chargement...' && <CircularProgress />}
      </Box>
    </Container>
  );
}

export default StatutServeur;
