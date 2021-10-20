import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  genders = ['male', 'female'];
  forbiddenUsernames = ['faizan','humayoun'];

  signupForm : FormGroup;

  ngOnInit()
  {
    this.signupForm = new FormGroup ({
      'userData': new FormGroup ({
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null,[Validators.required,Validators.email], this.Asyncinvalidemail),
      }),
      'gender':new FormControl('male'),
      'Hobbies': new FormArray([])
    });

    this.signupForm.statusChanges.subscribe(
      (status)=>{
        console.log(status);
      }
    )
  }

  onSubmit()
{
  console.log(this.signupForm);
  // this.signupForm.get('userData.username').reset();
}

onAddHobby(){
const control = new FormControl(null, Validators.required);
(<FormArray>this.signupForm.get('Hobbies')).push(control);
}
// getControls() {
//   return (<FormArray>this.signupForm.get('Hobbies')).controls;
// }

forbiddenNames(control : FormControl) : {[s:string]:boolean}{
  if(this.forbiddenUsernames.indexOf(control.value) !== -1 )
  {
    return {'nameIsForbidden': true};
  }
  else{ 
    return null;
  }

}

Asyncinvalidemail(control:FormControl): Promise<any> | Observable<any> {

  const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(control.value === 'faizanatifmasood@gmail.com'){
        return {'emailisInvalide':true};
      }
      else
      resolve(null);
    }, 1500);
  })
  return promise;
}


}
