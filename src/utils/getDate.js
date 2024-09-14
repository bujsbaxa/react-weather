export function getDate(dt, type) {
    
    const date = new Date(dt * 1000)
    
    return type == 'week' ? date.toLocaleString('ru-Ru', {weekday:'short' }) : 
           type == 'day' ? date.toLocaleString('ru-Ru', {day: 'numeric'})   :
           type == 'month' ? date.toLocaleString('ru-Ru', {month: 'short'}) : ''      
}