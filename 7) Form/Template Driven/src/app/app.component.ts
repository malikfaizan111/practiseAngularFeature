import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') SignupForm: NgForm;
  answer = '';

  genders = ['male','female'];

  user = {
    username : '',
    email:'',
    secretquestion:'',
    answer:'',
    gender:''

  }
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.SignupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionaswer:'',
    //   gender:'male'
    // })
    this.SignupForm.form.patchValue({
      userData: {
        username: suggestedName
      }

    });
    // this.SignupForm.reset();
  }

  // onSubmit(f : NgForm)
  // {
  //   console.log('Submitted Form' + f);
  // }

  onSubmit()
  {
    // console.log(this.SignupForm);
    this.submitted = true;
    this.user.username = this.SignupForm.value.userData.username;
    this.user.email = this.SignupForm.value.userData.email;
    this.user.secretquestion = this.SignupForm.value.secret;
    this.user.answer = this.SignupForm.value.questionaswer;
    this.user.gender = this.SignupForm.value.gender;
   this.SignupForm.reset();
  }
}
