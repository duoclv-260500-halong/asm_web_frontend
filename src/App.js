import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AlbumFeature from './features/Album';
import Album from './features/Album/components/Album';
import HomePage from './features/HomePage';
import Login from './features/Login';
import PageNotFound from './features/PageNotFound';
import TodoFeature from './features/Todo';
import { useEffect } from 'react';
import currentWhetherApi from './components/api/currentWhetherApi';
function App() {

  useEffect(() => {
    const getWhether = async () => {
      const whether = await currentWhetherApi.getByLatAndLon({
        lat: '51.5085',
        lon: '-0.1257',
        appid: '7a6a4ee2d066df40f58f1f4d81b4071d'
      })
      console.log(whether)
    }
    getWhether()
  }, [])

  return (
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
              {/* <Route path='nhac-tre' element={<Album/>}></Route>
              <Route index element={<Album/>}></Route>
              <Route path='nhac-vang' element={<Album/>}></Route> */}
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App;
