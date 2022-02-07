import { Injectable } from '@angular/core';
import { Constants } from '../config/constants';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /**
   *
   */
  static getCurrentLanguage() {
    let code = localStorage.getItem(LocalStorageService.LANGUAGE);
    if (!code) {
      code = Constants.DEFAULT_LANGUAGE_CODE;
      this.setCurrentLanguage(code);
    }
    return code;
  }

  /**
   *
   */
  static setCurrentLanguage(code: string) {
    localStorage.setItem(LocalStorageService.LANGUAGE, code);
  }
}
