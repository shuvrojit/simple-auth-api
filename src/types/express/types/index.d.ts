import {IUser} from "../../index"

 declare namespace Express {
    export interface Request {
      user?: IUser;
    }
  }