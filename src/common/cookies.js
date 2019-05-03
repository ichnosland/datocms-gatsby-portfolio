import Cookies from 'js-cookie';

/**
 * Prende il valore del cookie con il nome name
 * visto che il cookie può contenere solo stringhe, se
 * rilevo che il contenuto è true o false, faccio un cast
 * a boolean
 * @param {String} name nome del cookie
 * @param {String} defaultValue valore di default del cookie
 */
export const getCookieName = (name, defaultValue = '') => {
  const cookieData = Cookies.get(name) || defaultValue;

  if (['true', 'false'].indexOf(cookieData) > -1) {
    return cookieData === 'true';
  }
  return cookieData;
};


/**
   * Dato in input un oggetto con i cookie dell'utente,
   * va a leggere, se presenti i cookie relativi agli
   * hint degli esercizi (es. aiuto su scrivi, gruppi ecc)
   * @param {Object} hints oggetto con gli hints
   * @param {String} cookiePostfix parte terminale del nome del cookie
   */
export const calculateHints = (hints = {}, cookiePostfix = '') => {
  const cookiesHints = Object.keys(hints)
    .filter((hint) => (hints[hint]));

  return cookiesHints.reduce((acc, hint) => {
    acc[hint] = getCookieName(`${hint}_${cookiePostfix}`, 'true');

    return acc;
  }, {});
};


/**
 * dati in input la chiave e il payloade del cookie,
 * setta un cookie della durata indicata. Se non
 * è indicata una durata esplicitamente, il valore
 * viene settato per 30gg
 * @param {Object} data dati da impostare
 * @param {String} data.cookieKey chiave del cookie
 * @param {String} data.payload valore del cookie
 * @param {Number} expires durata del cookie
 */
export const cookieSet = (data, expires = 30) => {
  Cookies.set(data.cookieKey, data.payload.toString(), { expires });
};
