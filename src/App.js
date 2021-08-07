import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/Main";
import VocabularyQuizPage from "./pages/VocabularyQuiz";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/vocabulary/en-tr" component={VocabularyQuizPage} />
            <Route path="/" component={MainPage} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
