import { cloud, sun, sunrain, minicloud, minirain, rain  } from "./reExportImg";


export const  weatherName = {   
    'дымка': minicloud,
    'ясно': sun,
    'небольшая облачность':  cloud,
    'пасмурно': cloud,
    'облачно с прояснениями' : sunrain,
    'небольшой дождь':  minirain,
    'дождь':  rain,
    'переменная облачность':  cloud,
}
