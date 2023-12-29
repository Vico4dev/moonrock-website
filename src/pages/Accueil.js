import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

// Importez vos images ici
import headerImage from './img/logo.png'; // Remplacez 'header-image.jpg' par le nom de votre fichier image
import aboutImage from './img/logo.png'; // De même pour 'about-image.jpg'
import newsImage from './img/logo.png'; // Et pour 'news-image.jpg'

function Accueil() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
{/*             <Typography variant="h2">Bienvenue sur Notre Serveur GTA</Typography>
            <Typography variant="subtitle1">Explorez le monde passionnant que nous avons créé pour vous</Typography> */}
            {/* Image en en-tête */}
            <img src={headerImage} alt="En-tête" style={{ width: '50%', height: 'auto', marginTop: '20px' }} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Contenu avec image */}
          <Typography variant="h4" gutterBottom>À propos du Serveur</Typography>
  {/*         <img src={aboutImage} alt="À propos du Serveur" style={{ width: '50%', height: 'auto', marginBottom: '20px' }} /> */}
          <Typography paragraph>
            Notre serveur GTA offre une expérience de jeu immersive avec des missions uniques, des personnages fascinants et des histoires captivantes. Rejoignez notre communauté et participez à des aventures extraordinaires.
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="h5">Caractéristiques du Serveur</Typography>
              <Typography paragraph>
                - Missions exclusives<br/>
                - Événements hebdomadaires<br/>
                - Communauté active et accueillante<br/>
                - Mises à jour régulières avec de nouveaux contenus
              </Typography>
              <Button variant="outlined">En savoir plus</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Carte avec image */}
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={newsImage}
              alt="Actualités"
            />
            <CardContent>
              <Typography variant="h6">Mise à Jour Majeure</Typography>
              <Typography paragraph>
                Découvrez notre dernière mise à jour qui apporte de nouvelles missions et des véhicules inédits!
              </Typography>
              <Button variant="contained" color="primary">Lire Plus</Button>
            </CardContent>
          </Card>
          {/* Autre carte */}
          {/* ... */}
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="body1">&copy; 2023 Mon Serveur GTA. Tous droits réservés.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Accueil;
