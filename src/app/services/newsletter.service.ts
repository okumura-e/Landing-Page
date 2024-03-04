import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterResponse {
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class NewsletterService {
  private endpointUrl = 'https://www.youtube.com/redirect?event=live_chat&redir_token=QUFFLUhqbjNaZVVUT3UwblAxX29CWE9CUnprenNpeldmUXxBQ3Jtc0tsS0IyUHVfZ0FvZ05WOXUxMkVhRF9NWTliUV9UTENhb1hfaXQxSG1IT2FQd3dCMmtSaWdERFFqZjh2M3VxM0I5MGhtLU50WlFEcmZOM0xMUGpsWGN5ZVNyVEhoZ1lHX1prX1ZjR0taSVkzZmZQZ19ROA&q=https%3A%2F%2Ffaed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws%2F%27%3B';

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsletterResponse> {
    const data = { name, email};

    return this.http.post<NewsletterResponse>(this.endpointUrl, data);
  }
}
