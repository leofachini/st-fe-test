import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { UserListComponent } from './user-list.component';

describe('UserList', () => {
  let comp: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        UserListComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(UserListComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement;
      el = de.nativeElement;
    });
  }));

  it('should create the user list when it\'s empty', () => {
    expect(comp).toBeTruthy();
  });

  it('should create the user list when there is users on it', () => {
    const user = {
      name: 'Test',
    };
    comp.users = [user];
    fixture.detectChanges();

    const userLabel = de.query(By.css('.user-label')).nativeElement;
    const editBtn = de.query(By.css('.edit-btn:not([hidden])')).nativeElement;
    const deleteBtn = de.query(By.css('.delete-btn:not([hidden])')).nativeElement;
    const saveBtn = de.query(By.css('.save-btn[hidden]')).nativeElement;

    expect(userLabel.textContent).toContain(user.name);
    expect(editBtn).toBeTruthy();
    expect(deleteBtn).toBeTruthy();
    expect(saveBtn).toBeTruthy();
  });

  it('should show no users message when the user list is empty', () => {
    comp.users = [];
    fixture.detectChanges();
    const messageContent = 'You must add new users!';
    expect(el.querySelector('.user-list > span:not([hidden])').textContent).toContain(messageContent);
  });

  it('should hide no users message when there are users in the list', () => {
    comp.users = [{
      name: 'Test',
    }];
    fixture.detectChanges();
    expect(el.querySelector('.user-list > span[hidden]')).toBeTruthy();
  });

  it('should enalbe the edit input and save button while hide the edit and delete button after clicking in edit button', () => {
    const user = {
      name: 'Test',
    };
    comp.users = [user];

    fixture.detectChanges();

    de.query(By.css('.edit-btn:not([hidden])'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();

    const userLabel = de.query(By.css('.user-label'));
    const input = de.query(By.css('input')).nativeElement;
    const editBtn = de.query(By.css('.edit-btn[hidden]')).nativeElement;
    const deleteBtn = de.query(By.css('.delete-btn[hidden]')).nativeElement;
    const saveBtn = de.query(By.css('.save-btn:not([hidden])')).nativeElement;

    expect(input).toBeTruthy();
    expect(userLabel).toBeNull();
    expect(editBtn).toBeTruthy();
    expect(deleteBtn).toBeTruthy();
    expect(saveBtn).toBeTruthy();
  });


  it('should enalbe the edit input and save button while hide the edit and delete button after clicking in edit button', () => {
    const user = {
      name: 'Test',
    };
    comp.users = [user];

    fixture.detectChanges();

    de.query(By.css('.edit-btn:not([hidden])'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();

    const userLabel = de.query(By.css('.user-label'));
    const input = de.query(By.css('input')).nativeElement;
    const editBtn = de.query(By.css('.edit-btn[hidden]')).nativeElement;
    const deleteBtn = de.query(By.css('.delete-btn[hidden]')).nativeElement;
    const saveBtn = de.query(By.css('.save-btn:not([hidden])')).nativeElement;

    expect(input).toBeTruthy();
    expect(userLabel).toBeNull();
    expect(editBtn).toBeTruthy();
    expect(deleteBtn).toBeTruthy();
    expect(saveBtn).toBeTruthy();
  });

});
