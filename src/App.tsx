import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import SkillList from './components/SkillList';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <SkillList />
      <ProjectList />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
