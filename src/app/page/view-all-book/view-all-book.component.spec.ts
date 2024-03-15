import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBookComponent } from './view-all-book.component';
import { NavComponent } from '../../common/nav/nav.component';

describe('ViewAllBookComponent', () => {
  let component: ViewAllBookComponent;
  let fixture: ComponentFixture<ViewAllBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllBookComponent,NavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
