import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';

describe('UsersComponent', () => {
  let comp: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        BrowserAnimationsModule,
      ],
      providers: [UserService],
      declarations: [
        UserFormComponent,
        UserListComponent,
        UsersComponent,
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(UsersComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement;
      el = de.nativeElement;
    });
  }));

  it('should create the users component', () => {
    fixture.detectChanges();

    const userForm  = de.query(By.css('user-form')).nativeElement;
    const userList = de.query(By.css('user-list')).nativeElement;

    expect(comp).toBeTruthy();
    expect(userForm).toBeTruthy();
    expect(userList).toBeTruthy();
  });

});
