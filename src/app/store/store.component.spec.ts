import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxGridModule, IgxActionStripModule, IgxButtonModule, IgxToggleModule, IgxIconModule, IgxDialogModule, IgxSelectModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxCardModule } from 'igniteui-angular';
import { StoreComponent } from './store.component';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxGridModule, IgxActionStripModule, IgxButtonModule, IgxToggleModule, IgxIconModule, IgxDialogModule, IgxSelectModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxCardModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
