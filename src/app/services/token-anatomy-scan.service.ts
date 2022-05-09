import { Injectable } from '@angular/core';
import {JwtAnatomy} from "../models";

@Injectable({
  providedIn: 'root'
})
export class TokenAnatomyScanService {

  constructor() { }

  public scanTokenAnatomy(token: string): JwtAnatomy {
    let anatomy = {

    } as JwtAnatomy;
    return anatomy;
  }
}
