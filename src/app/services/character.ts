import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/character';

 getCharacters(searchTerm: string = ''): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/?name=${searchTerm}`);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}