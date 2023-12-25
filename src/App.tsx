import { Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';
import Form from './pages/form/Form';

function App() {
  return (
    <div className='container'>
      <section className='form-wrapper'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
