import {Component, OnInit, Output,EventEmitter } from '@angular/core';
import {HttpNotesServiceService} from "../services/http-notes-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() searchingTitle = new EventEmitter<string>();
  user : Observable<User> = new Observable<User>();
  constructor(
    private http: HttpNotesServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
  }


}
