import './App.css';
import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter';
import theme from "./components/globalStyles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
     <AppRouter/>
    </ThemeProvider>
  );
}

export default App;

