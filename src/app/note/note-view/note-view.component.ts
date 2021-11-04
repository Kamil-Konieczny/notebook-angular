import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../models/note";
import {HttpNotesServiceService} from "../../services/http-notes-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  @Input() note!: Note;
  private user!: Observable<User>;
  private nickname!:string;
  constructor(
    private http: HttpNotesServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.user = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=> this.http.getUser(params.get('name')||' '))
    );
    this.user.subscribe(x=> this.nickname=x.nickname);
  }
  delete(note_id: number) {
    this.http.deleteNote(this.nickname,note_id);
    window.location.reload();
  }
}
