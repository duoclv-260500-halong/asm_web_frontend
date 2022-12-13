import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AlbumFeature from './features/Album';
import HomePage from './features/HomePage';
import TodoFeature from './features/Todo';
import Login from './features/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from './features/PageNotFound';
import Album from './features/Album/components/Album';
function App() {
  return (
    // <div className="App">
    //   <TodoFeature></TodoFeature>
    //   {/* <AlbumFeature></AlbumFeature> */}
    // </div>
    <div className='container-fluid'>
      <div className='row  min-height'>
        <div className='col-2 bg-secondary'>
          <Sidebar></Sidebar>
        </div>
        <main className='col-10'>
          <Routes>
            <Route path='' element={<HomePage/>}></Route>
            <Route path='/todos' element={<TodoFeature />}></Route>
            <Route path='/albums' element={<AlbumFeature />}>
              <Route path='nhac-tre' element={<Album/>}></Route>
              <Route index element={<Album/>}></Route>
              <Route path='nhac-vang' element={<Album/>}></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App;
