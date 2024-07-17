import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import './App.css';


function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
        <Header/>
        <div style={{ display: 'flex', flex: 1 }}>
          {/* Sidebar */}
          <div className='sidebar' >
            <Sidebar />
          </div>

          <div style={{ flex: 1, padding: '10px' }}>
          <MainContent />
          </div>
        </div>
        <Footer/>
    </div>
  
);



}

export default App;
