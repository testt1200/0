import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bake } from "../model/bake.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable()
export class BakeService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/bakeshop';

  getAllBakes() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/");
  }

  getBakeById(id): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/view-bake-by-id/" + id);
  }

  createBake(bake: Bake): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "/add-bake",bake);
  }

  updateBake(bake: Bake): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl+"/update-bake/"+ bake.id, bake);
  }

  deleteBake(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl+ "/delete-bake/" + id);
  }
}