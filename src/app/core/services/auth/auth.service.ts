import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DITokens } from '../../config/di-tokens';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(
        @Inject(DITokens.ENDPOINT_URL) private endpoint: string,
        private httpClient: HttpClient) { }
    
    login() {
        return this.httpClient.get<any>(this.endpoint + 'login');
    }
}