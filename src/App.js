import './styles/uni-style.css';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const sectionData = [
    {
      id: 'home',
      title: 'Margaux Padiwan',
      lead_p: 'front end web developer'
    },
    {
      id: 'home-works',
      title: 'PUPAIAS',
      lead_p: 'Alumni Information System',
      isLink: 'link',
      link: 'https://pupiais.herokuapp.com',
    },
    {
      id: 'home-about',
      title: 'About Me',
      lead_p: 'I love Technology',
      isLink: 'link',
      link: 'about.html'
    },
    {
      id: 'home-contact',
      title: 'Margaux Padiwan',
      lead_p: 'front end web developer',
      isLinkList: 'linklist',
      listLink: ['https://github.com/JamesMargaux','https://ph.linkedin.com','https://www.fiverr.com/']
    },
  ]
  return (
    <>
    <Header linksList = {sectionData[3].listLink}/>
    <Main sectionData = {sectionData}/>
    <div className="side-fix-nav">
      <ul>
        <li><a href="#home"></a></li>
        <li><a href="#home-works"></a></li>
        <li><a href="#home-about"></a></li>
        <li><a href="#home-contact"></a></li>
      </ul>
    </div>
    </>
  );
}

export default App;
