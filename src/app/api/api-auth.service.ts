import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { RegistrationForm } from '../interfaces/registration-form';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService extends ApiService {
  constructor(httpClient: HttpClient) { super(httpClient) }

  login = (email: string, password: string) => this.post('login', { email, password });
  logout = () => this.delete('logout');
  register = (form: RegistrationForm) => this.post('register', form);
  me = () => this.get('me');
}
