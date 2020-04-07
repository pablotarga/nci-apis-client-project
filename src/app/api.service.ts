import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private REST_SERVER = 'http://localhost:49000/api/';

  constructor(protected httpClient: HttpClient) { }

  protected post = (path: string, body: any) => this.httpClient.post(this.getUrl(path), body, {});
  protected put = (path: string, body: any) => this.httpClient.put(this.getUrl(path), body, {});
  protected get = (path: string, params?: any) => this.httpClient.get(this.getUrl(path), { params });
  protected delete = (path: string) => this.httpClient.delete(this.getUrl(path), {});

  private getUrl = (path: string) => this.REST_SERVER + path;
}
