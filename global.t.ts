import en from './src/messages/en.json'
import es from './src/messages/es.json'

declare global {
  type IntlMessages = {} & typeof en & typeof es
}
