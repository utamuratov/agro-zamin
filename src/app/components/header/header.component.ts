import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/core/config/constants';
import { LanguageService } from 'src/app/core/services/language.service';
import { Language } from 'src/app/shared/models/language.interface';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  /**
   *
   */
  languages = Constants.LANGUAGES;

  /**
   *
   */
  currentLanguageCode!: string;

  /**
   *
   */
  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    translate.setDefaultLang(Constants.DEFAULT_LANGUAGE_CODE);
   }

   /**
    *
    */
  ngOnInit() {
    this.currentLanguageCode = LanguageService.getCurrentLanguage();
    this.setCurrentLanguage(this.currentLanguageCode);
  }

  /**
   *
   */
  onChangeLanguage() {
    const previousLanguageCode = LanguageService.getCurrentLanguage();
    LanguageService.setCurrentLanguage(this.currentLanguageCode);
    this.router.navigateByUrl(this.router.url.replace(previousLanguageCode, this.currentLanguageCode));
    this.setCurrentLanguage(this.currentLanguageCode);
  }

  /**
   *
   */
   private setCurrentLanguage(curentLanguage: string) {
    this.translate.use(curentLanguage);
  }
}
