import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export class JwtInterceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.cookie.get('token');
    console.log(token);
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `{Bearer ${token}}`
        }
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}