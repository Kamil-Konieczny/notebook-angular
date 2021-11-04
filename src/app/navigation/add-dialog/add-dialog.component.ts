import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpNotesServiceService} from "../../services/http-notes-service.service";
import {User} from "../../models/user";
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Note} from "../../models/note";

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {
  closeModal!: string;

  note!:Note;
  @ViewChild('modalData') modal!:ElementRef;
  private user!: Observable<User>;
  private nickname!:string;
  constructor(
    private modalService: NgbModal,
    private http: HttpNotesServiceService,
    private route: ActivatedRoute,
) {}



  public triggerModal() {
    this.modalService.open(this.modal, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.user = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=> this.http.getUser(params.get('name')||' '))
    );
    this.user.subscribe(x=> this.nickname=x.nickname);
  }

  addNote(title: string,content:string)
  {
    this.http.addNote(title,content,this.nickname);
    window.location.reload();
  }
}
