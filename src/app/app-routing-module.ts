import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NavigationComponent} from "./navigation/navigation.component";
import {NicknameInputComponent} from "./nickname-input/nickname-input.component";
import {NoteComponent} from "./note/note.component";
import {AddDialogComponent} from "./navigation/add-dialog/add-dialog.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes:Routes=[
  {path:'',redirectTo:"/nickname", pathMatch:'full'},
  {path:'nickname',component:NicknameInputComponent},
  {path:'notes/:name',component:NoteComponent},
  {path:'registration',component:RegistrationComponent}
]

@NgModule(
  {
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
  }
)
export  class AppRoutingModule{

}
