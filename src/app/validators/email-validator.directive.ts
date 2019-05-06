import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, ValidationErrors, AbstractControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { tap, map} from 'rxjs/operators';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]

})
export class EmailValidatorDirective implements AsyncValidator{

  constructor(private _srv:DataService) { }

  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    return this._srv.existEmail (control).pipe( map(booleanExistEmail => {
      if (booleanExistEmail) {
         return {emailExistant : "Cet adresse mail existe déjà ! Veuillez en saisir une autre !"};
      }
      else {
        return null;
      }
    }));
  }

}
