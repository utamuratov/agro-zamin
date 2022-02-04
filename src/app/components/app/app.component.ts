import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const DEFAULT_LANGUAGE = 'ru';
const LOCAL_STORAGE_LANGUAGE = 'language';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'agro-zamin';
  param = {value: 'world'};

  constructor(translate: TranslateService) {
    let curentLanguage = localStorage.getItem(LOCAL_STORAGE_LANGUAGE);
    if (!curentLanguage) {
      curentLanguage = DEFAULT_LANGUAGE;
      localStorage.setItem(LOCAL_STORAGE_LANGUAGE, curentLanguage);
    }
    translate.setDefaultLang(DEFAULT_LANGUAGE);
    translate.use(curentLanguage);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
  }
}
