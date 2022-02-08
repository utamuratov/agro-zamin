import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SEOService } from '../services/seo.service';

@Injectable()
export class SEOResolver implements Resolve<boolean> {
  /**
   *
   */
  constructor(private $sEOService: SEOService) {}

  /**
   *
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.setMeta(route);
    return of(true);
  }

  /**
   *
   */
  setMeta(node: ActivatedRouteSnapshot) {
    console.log(node.data);
    if (node.data['meta']) {
      const meta = node.data['meta'];
      this.$sEOService.updateTitle(meta.title);
      this.$sEOService.updateDescription(meta.description);
    }
  }
}
