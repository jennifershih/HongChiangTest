import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxGridModule, IgxActionStripModule, IgxButtonModule, IgxIconModule, IgxToggleModule, IgxDialogModule, IgxSelectModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxCardModule } from 'igniteui-angular';
import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxGridModule, IgxActionStripModule, IgxButtonModule, IgxIconModule, IgxToggleModule, IgxDialogModule, IgxSelectModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxCardModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
