import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider, Typography } from '@material-ui/core';
import PortfolioAppbar from './components/PortfolioAppbar';
import PortfolioContentRecPage from './components/PortfolioContentRecPage';

const theme = createTheme({
  palette:{
    primary:{
      main:"#ffac33"
    }
  },
  spacing:8
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PortfolioAppbar></PortfolioAppbar>
        <br></br>
        <br></br>
        <br></br>
        <PortfolioContentRecPage></PortfolioContentRecPage>
      </div>
    </ThemeProvider>
  );
}

export default App;
