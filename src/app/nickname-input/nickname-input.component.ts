import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpNotesServiceService} from "../services/http-notes-service.service";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-nickname-input',
  templateUrl:'./nickname-input.component.html',
  styleUrls: ['./nickname-input.component.css']
})
export class NicknameInputComponent implements OnInit {

  @Input()
  user : Observable<User> = new Observable<User>();

  constructor(
    private router: Router,
    private httpNotesService: HttpNotesServiceService
  ) {}

  ngOnInit(): void {
  }
  goToMainPage(nickname: string)
  {
   this.user = this.httpNotesService.getUser(nickname);

    this.user.subscribe(
  x=>{
    if(!x) { alert("Nie ma takiego użytkownika");}
    else {
      this.router.navigate(['/notes/'+nickname]);
    }
  }
)}
goToRegistrationPage()
{
  this.router.navigate(['/registration/']);

}
}
