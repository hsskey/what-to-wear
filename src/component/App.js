import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import '../App.css';
import WeatherInformation from './WeatherInformation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>오늘 뭐입지?</p>
        <RecoilRoot>
          <Suspense fallback={<div>Loading...</div>}>
            <WeatherInformation />
          </Suspense>
        </RecoilRoot>
      </header>
    </div>
  );
}

export default App;
