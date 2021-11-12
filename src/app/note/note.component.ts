import {Component, Input, OnInit} from '@angular/core';
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {User} from "../models/user";
import {HttpNotesServiceService} from "../services/http-notes-service.service";
import {Observable} from "rxjs";
import {Note} from "../models/note";
import {AddDialogComponent} from "../navigation/add-dialog/add-dialog.component";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  user!:Observable<User>;
  notes!:Note[];
  module!:HTMLElement;
  constructor(
    private http: HttpNotesServiceService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.user = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=> this.http.getUser(params.get('name')||' '))
    );
  this.user.subscribe(x=> this.notes=x.notes);
  }



}
