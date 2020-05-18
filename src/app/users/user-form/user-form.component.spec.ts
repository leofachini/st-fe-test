import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../../shared/shared.module';
import { UserFormComponent } from './user-form.component';

describe('UserForm', () => {
  let comp: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        UserFormComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(UserFormComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it('should create the user form', () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const userList = fixture.debugElement.componentInstance;
    expect(userList).toBeTruthy();
  });

  it('should call the submitForm method', async(() => {
    fixture.detectChanges();
    spyOn(comp, 'submitForm');
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'New User Test';
    input.dispatchEvent(new Event('input'));

    fixture.debugElement.query(By.css('button')).nativeElement.click();

    expect(comp.submitForm).toHaveBeenCalledTimes(0);
  }));

  it('should be invalid', async(() => {
    comp.userForm.controls['name'].setValue('');
    expect(comp.userForm.valid).toBeFalsy();
  }));

  it('should be valid', async(() => {
    comp.userForm.controls['name'].setValue('Test');
    expect(comp.userForm.valid).toBeTruthy();
  }));

});
