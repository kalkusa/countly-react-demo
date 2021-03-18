import logo from './logo.svg';
import './App.css';
import Countly from 'countly-sdk-web';

function App() {
  console.log('Countly: %o', Countly)
  window.Countly = Countly;
  Countly.init({
    app_key: 'foo',
    url: 'bar',
    session_update: 10,
    use_session_cookie: true,
    debug: false,
    require_consent: true,
    namespace: "Credi2",
    inactivity_time: 1,
    offline_mode: false,
    // device_id: "cly-device-demo-id" //Set only if you want dont want to use countly generated device_id
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
