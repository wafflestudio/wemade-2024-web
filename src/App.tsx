import './App.css';
import wemadeLogo from './assets/images/wemade-logo-green.png';

function App() {
  return (
    <>
      <div>
        <a
          href="https://www.wemade.com/"
          target="_blank"
        >
          <img
            src={wemadeLogo}
            className="logo"
            alt="wemade logo"
          />
        </a>
      </div>
      <h1>WEMADE 프로젝트</h1>
    </>
  );
}

export default App;
