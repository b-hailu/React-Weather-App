import React, { useEffect, useState} from 'react';
// import Forecast from './components/Forecast/Forecast';
// import Logo from './components/Logo/Logo';
// import Conditions from './components/Conditions/Conditions';
// import Forms from './components/Forms/Forms';
import List from './component/List';
import WithListLoading from './component/WithListLoading';
import './App.css';

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(()=>{
    setAppState({ loading: true});
    const apiUrl=`https://api.github.com/users/b-hailu/repos`;
      fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <div className="container">
      <h1>My Repositories</h1>
      </div>
      <main>
        {/* add weather fetching component */}
        {/* <Forms  />
        <Forecast />
        <Conditions /> */}
        {/* <Weather /> */}
      </main>
      <div className='repo-container'>
      <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
        <span role='img' arial-label='love'>

        </span>{' '}
        with by Bella
        </div>
      </footer>
    </div>
  );
}

export default App;
