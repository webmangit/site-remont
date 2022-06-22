import * as webp from './modules/webp.js'
import * as burger from './modules/burger.js'
import * as device from './modules/device.js'
import * as transfer from './modules/transfer.js'
import * as spoller from './modules/spoller.js'
import * as popup from './modules/popup.js'
import * as calc from './modules/calc.js'

// Проверка поддержки браузером webp
webp.isWebp()
// Обеспечение работы меню бургера
burger.isBurger()
// Определение устройства на котором открыт сайт + навешивание стилей
device.isDevice()
// Перенос HTML-элементов из одного места страницы в любое другое при смене размера экрана
transfer.isTransfer()
// Обеспечение работы споллера
spoller.isSpoller()
// Обеспечение работы попапа (модального окна)
popup.isPopup()
// Обеспечение работы калькуляторов
calc.isCalc()


