import Current from "./components/Current/Current"
import Navbar from "./components/Navbar/Navbar"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getLatLon } from "./store/weather/weatherSlice"
import Loader from "./components/Loader"
import Daily from "./components/Daily"
import { initTheme } from "./store/theme/themeSlice"

function App() {
  
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.weather)
  const { theme } = useSelector((state) => state.theme)
  
  useEffect(() => {
    setTimeout(() => {
      dispatch(getLatLon('Ташкент'))
      dispatch(initTheme())
    }, 500);
  }, [])

  return (
    <>
      <div className={`wrapper ${theme}`}>
          {data ? (
            <div className="container">
              <Navbar/>
              <main className="main">
                <Current/>
                <Daily/>
              </main>
            </div>
          ) : <Loader/>}
          
      </div>
    </>
  )
}

export default App
