import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/uni-style.css';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import About from './components/About'

function App() {
  const sectionData = [
    {
      id: 'home',
      title: 'Margaux Padiwan',
      lead_p: 'front end web developer',
      image_src: './images/profile.jpg',
      alt: 'PUP pylon'
    },
    {
      id: 'home-works',
      title: 'PUPAIAS',
      lead_p: 'Alumni Information System',
      isLink: 'link',
      link: 'https://pupiais.herokuapp.com',
      image_src: './pylon-with-bg.svg',
      alt: 'PUP pylon'
    },
    {
      id: 'home-about',
      title: 'About Me',
      lead_p: 'An aspiring Web Developer who loves Technology',
      isLink: 'link',
      link: 'about',
      image_src: './images/web-dev.jpg',
      alt: 'Web Dev'
    },
    {
      id: 'home-contact',
      title: 'Get In Touch',
      email: 'margaux.padiwan23@gmail.com',
      isLinkList: 'linklist',
      listLink: ['https://github.com/JamesMargaux', 'https://ph.linkedin.com', 'https://www.fiverr.com/'],
      image_src: './images/contact-img.jpg',
      alt: 'Contact Us'
    },
  ]
  return (
    <Router>
      <>
        <div className="background"></div>
        <Header linksList={sectionData[3].listLink} />

        <Route path='/' exact render={(props) => (
          <>
            <Main sectionData={sectionData} />
            <div className="side-fix-nav">
              <ul>
                <li><a href="#home"></a></li>
                <li><a href="#home-works"></a></li>
                <li><a href="#home-about"></a></li>
                <li><a href="#home-contact"></a></li>
              </ul>
            </div>
          </>
        )} />
        <Route path='/about' component={About} />
      </>
    </Router>
  );
}

export default App;
