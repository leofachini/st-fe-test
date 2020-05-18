import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../../shared/shared.module';
import { UserListComponent } from './user-list.component';
import { By } from '@angular/platform-browser';

describe('UserList', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        UserListComponent
      ],
    }).compileComponents();
  }));

  it('should create the user list when it\'s empty', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    const userList = fixture.debugElement.componentInstance;
    expect(userList).toBeTruthy();
  });

  it('should create the user list when there is users on it', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    const user = {
      name: 'Test',
    };
    fixture.componentInstance.users = [user];
    fixture.detectChanges();

    const userLabel = fixture.debugElement.query(By.css('.user-label')).nativeElement;
    const editBtn = fixture.debugElement.query(By.css('.edit-btn:not([hidden])')).nativeElement;
    const deleteBtn = fixture.debugElement.query(By.css('.delete-btn:not([hidden])')).nativeElement;
    const saveBtn = fixture.debugElement.query(By.css('.save-btn[hidden]')).nativeElement;

    expect(userLabel.textContent).toContain(user.name);
    expect(editBtn).toBeTruthy();
    expect(deleteBtn).toBeTruthy();
    expect(saveBtn).toBeTruthy();
  });

  it('should show no users message when the user list is empty', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.componentInstance.users = [];
    fixture.detectChanges();
    const userList = fixture.debugElement.nativeElement;
    const messageContent = 'You must add new users!';
    expect(userList.querySelector('.user-list > span:not([hidden])').textContent).toContain(messageContent);
  });

  it('should hide no users message when there are users in the list', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.componentInstance.users = [{
      name: 'Test',
    }];
    fixture.detectChanges();
    const userList = fixture.debugElement.nativeElement;
    expect(userList.querySelector('.user-list > span[hidden]')).toBeTruthy();
  });

  it('should enalbe the edit input and save button while hide the edit and delete button after clicking in edit button', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    const user = {
      name: 'Test',
    };
    fixture.componentInstance.users = [user];

    fixture.detectChanges();

    fixture.debugElement
      .query(By.css('.edit-btn:not([hidden])'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();

    const userLabel = fixture.debugElement.query(By.css('.user-label'));
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const editBtn = fixture.debugElement.query(By.css('.edit-btn[hidden]')).nativeElement;
    const deleteBtn = fixture.debugElement.query(By.css('.delete-btn[hidden]')).nativeElement;
    const saveBtn = fixture.debugElement.query(By.css('.save-btn:not([hidden])')).nativeElement;

    expect(input).toBeTruthy();
    expect(userLabel).toBeNull();
    expect(editBtn).toBeTruthy();
    expect(deleteBtn).toBeTruthy();
    expect(saveBtn).toBeTruthy();
  });


  it('should enalbe the edit input and save button while hide the edit and delete button after clicking in edit button', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    const user = {
      name: 'Test',
    };
    fixture.componentInstance.users = [user];

    fixture.detectChanges();

    fixture.debugElement
      .query(By.css('.edit-btn:not([hidden])'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();

    const userLabel = fixture.debugElement.query(By.css('.user-label'));
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const editBtn = fixture.debugElement.query(By.css('.edit-btn[hidden]')).nativeElement;
    const deleteBtn = fixture.debugElement.query(By.css('.delete-btn[hidden]')).nativeElement;
    const saveBtn = fixture.debugElement.query(By.css('.save-btn:not([hidden])')).nativeElement;

    expect(input).toBeTruthy();
    expect(userLabel).toBeNull();
    expect(editBtn).toBeTruthy();
    expect(deleteBtn).toBeTruthy();
    expect(saveBtn).toBeTruthy();
  });

});
