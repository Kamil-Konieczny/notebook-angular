import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class HttpNotesServiceService {


  constructor(private http:HttpClient) { }

  getUser(nickname: string): Observable<User> {
    return this.http.get<User>('http://localhost:8080/user/' + nickname);
  }

  addNote(title: string, content: string, nickname: string)
  {
    const params = new HttpParams()
      .append('title', title)
      .append('content', content)
      .append('nickname', nickname);
    return this.http.post('http://localhost:8080/addnote/',params)
      .subscribe((res) => console.log(res));
  }
  deleteNote(nickname:string,note_id:number)
  {
    const params = new HttpParams()
      .append('note_id',note_id)
      .append('nickname', nickname);
      return this.http.delete('http://localhost:8080/deletenote/',{params})
      .subscribe((res) => console.log(res));
  }
}
