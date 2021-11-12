import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpNotesServiceService} from "../../services/http-notes-service.service";
import {ActivatedRoute} from "@angular/router";
import {Note} from "../../models/note";

@Component({
  selector: 'app-show-note-dialog',
  templateUrl: './show-note-dialog.component.html',
  styleUrls: ['./show-note-dialog.component.css']
})
export class ShowNoteDialogComponent{

  @Input('notes') notes!: Note[];
  @ViewChild('modalData') modal!:ElementRef;
  closeModal!: string;
   searchedNote!:Note;

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

  public findNote(searchedTitle:string)
  {
    this.searchedNote=null as any;
    for(let i=0;i<this.notes.length;i++)
    {

      if (this.notes[i].title == searchedTitle) {
        this.searchedNote = this.notes[i];
      }
    };
    if(this.searchedNote!=null)
    {
      this.triggerModal();
      console.log(this.searchedNote);
    }
    else
    {
    alert("Nie ma takiej notatki");
    }
  }

}
