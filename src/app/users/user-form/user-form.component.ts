import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {

  @Output()
  onSubmit = new EventEmitter<User>();

  userForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  submitForm(): void {
    this.onSubmit.emit(this.userForm.value);
    this.userForm.reset();
  }

}
