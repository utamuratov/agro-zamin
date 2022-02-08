import { Constants } from '../config/constants';
import { LocalStorageService } from './local-storage.service';

export class LanguageService {
  /**
   *
   */
  static get currentLanguage() {
    let code = LocalStorageService.get(LocalStorageService.LANGUAGE);
    if (!code) {
      code = Constants.DEFAULT_LANGUAGE_CODE;
      this.currentLanguage = code;
    }
    return code;
  }

  /**
   *
   */
  static set currentLanguage(code: string) {
    LocalStorageService.set(LocalStorageService.LANGUAGE, code);
  }
}
