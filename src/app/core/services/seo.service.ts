import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SEOService {
  constructor(
    private $title: Title,
    private $meta: Meta,
    private $translate: TranslateService
  ) {}

  /**
   *
   */
  updateTitle(title: string) {
    title = this.$translate.instant(title);
    this.$title.setTitle(title);
  }

  /**
   *
   */
  updateDescription(content: string) {
    content = this.$translate.instant(content);
    this.$meta.updateTag({ name: 'description', content });
  }

  /**
   *
   */
  createCanonicalLink(url: string) {
    const link: HTMLLinkElement = document.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
}
