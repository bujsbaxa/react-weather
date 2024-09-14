import s from './Navbar.module.scss'
import logoIcon from '../../assets/images/logo.svg'
import kaplyaIcon from '../../assets/images/kaplya.svg'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getLatLon } from "../../store/weather/weatherSlice"
import { toggleTheme } from '../../store/theme/themeSlice'


const Navbar = () => {
    
    
    
    const [city, setCity] = useState('')
    const dispatch  = useDispatch()
    
    const submit = (event) => {
        event.preventDefault()
        dispatch(getLatLon(city))
        setCity('')
    }
    
  return (
   <>
    <nav className={s.nav}>
        <a href="#" className={s.logo}>
            <img src={logoIcon} alt="" />
            <span className={s.logo__span}>react weather</span>
        </a>
        <div className={s.nav__search}>
            <img 
            src={kaplyaIcon} 
            alt="" style={{ cursor:'pointer' }}
            onClick={() => dispatch(toggleTheme())}
            />
            <form onSubmit={(event) => submit(event)} className={s.nav__form}>
                <input 
                    placeholder="Выбрать город" 
                    type="text" 
                    className={s.nav__input}
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
            </form>
        </div>
    </nav>
   </>
  )
}

export default Navbar