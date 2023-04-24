//STYLES

//EXTERNALS
import dot from "dot-object";

//LOCALS
import en_US from "./en_US.json";
import fr_FR from "./fr_FR.json";
import { INTL } from "../const/intl/intl";
import { useConfigStore } from "../store/store";

export class I18n {
  constructor() {
    this.lang = this._getLang();
    this.copy = this._getCopy();
  }

  t(key) {
    let copy = this.copy;
    //we are using pick in order to make life easier when the day for plurals and copy with params arrives
    return dot.pick(key, copy);
  }

  _getLang() {
    let urlParams = new URLSearchParams(window.location.search);
    let fromUrl = urlParams.get("l");

    if (fromUrl) {
      useConfigStore.setState({ lang: fromUrl });
    }

    return fromUrl || useConfigStore.getState().lang || INTL.EN_us;
  }

  _getCopy() {
    let lang = this.lang;

    if (lang === INTL.EN_us) {
      return en_US;
    } else if (lang === INTL.FR_fr) {
      return fr_FR;
    } else {
      console.warn(
        `I18n::_getCopy:: We may not support yet ${lang}. Loading 'en_US' then... `
      );
      return en_US;
    }
  }
}

const Intl = new I18n();
Object.freeze(Intl);

export default Intl;
