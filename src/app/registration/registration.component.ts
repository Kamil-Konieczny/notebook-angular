import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpNotesServiceService} from "../services/http-notes-service.service";
import {User} from "../models/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user!: User;
  constructor(
    private router: Router,
    private httpNotesService: HttpNotesServiceService
  ) { }

  ngOnInit(): void {
  }

  registerUser(nickname: string)
  {
      this.httpNotesService.addUser(nickname);
      this.router.navigate(['/notes/'+nickname]);

  }
}
