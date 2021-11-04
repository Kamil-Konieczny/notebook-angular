import {Note} from "./note";

export interface User
{
  user_id:number;
  nickname: string;
  notes: Note[];
}
