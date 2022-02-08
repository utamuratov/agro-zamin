import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class SetTokenAndHandleErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // !Set token
    // req = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${this.auth.getToken()}`,
    //   },
    // });

    return next.handle(req).pipe(
      catchError((err) => {
        // !Catch error and do SMTH
        console.log(err);
        return throwError(() => new Error('error'));
      })
    );
  }
}