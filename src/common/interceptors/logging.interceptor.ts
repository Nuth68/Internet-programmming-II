import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const start = Date.now();

    // ✅ HTTP request
    const req = context.switchToHttp().getRequest();

    if (req) {
      const { method, url } = req;

      return next.handle().pipe(
        tap(() => {
          const ms = Date.now() - start;
          console.log(`[HTTP] ${method} ${url} - ${ms}ms`);
        }),
      );
    }

    // ✅ GraphQL request
    return next.handle().pipe(
      tap(() => {
        const ms = Date.now() - start;
        console.log(`[GraphQL] Request - ${ms}ms`);
      }),
    );
  }
}