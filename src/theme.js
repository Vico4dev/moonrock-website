import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Définir le mode sur 'dark' active le thème sombre
    primary: {
      main: '#90caf9', // Vous pouvez ajuster ces couleurs selon vos préférences
    },
    secondary: {
      main: '#f48fb1',
    },
    // Ajoutez d'autres couleurs si nécessaire
  },
  // Vous pouvez ajouter d'autres personnalisations ici
});

export default theme;
