import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/Main";
import VocabularyQuizPage from "./pages/VocabularyQuiz";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path="/vocabulary/en-tr" component={VocabularyQuizPage} />
            <Route path="/" component={MainPage} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
