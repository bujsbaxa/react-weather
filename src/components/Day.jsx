import s from './Daily.module.scss'
import { weatherName } from '../utils/getImg'
import { getDate } from '../utils/getDate'

const Day = ({day,i}) => {
    
    const tempMax = `Макс: ${Math.round(day.temp.max)}°`
    const tempMin = `Мин: ${Math.round(day.temp.min)}°`
    const description = day.weather[0].description
    const img = weatherName[description]
    const weekDay = i == 0 ? 'Сегодня' : i == 1 ? 'Завтра' : getDate(day.dt, 'week')
    const monthDay = getDate(day.dt, 'day')
    const month = getDate(day.dt, 'month')
    
  return (
    <>
        <div className={s.daily__item}>
            <p className={s.daily__item_day}>{weekDay}</p>
            <p className={s.daily__item_date}>{monthDay} {month}</p>
            <img src={img} alt="" className={s.daily__item_img} />
            <p className={s.daily__item_tempmax}>{tempMax}</p>
            <p className={s.daily__item_tempmin}>{tempMin}</p>
            <p className={s.daily__item_info}>{description}</p>
            
        </div>
    </>
  )
}

export default Day