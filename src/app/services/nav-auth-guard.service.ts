import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NavAuthGuardService  {

  constructor (private _router: Router) { }
  async canActivate() {
      if (!window.localStorage.getItem("role")) {
        this._router.navigate(['/settings']);
      }
      return true;
    }
}