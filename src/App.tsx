import { Suspense } from 'react';
import s from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './utils/config/routeConfig';

function App() {
  return (
    <div className={s.page}>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(route => {
            return <Route key={route.path} path={route.path} element={route.element} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
