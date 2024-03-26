import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowBookComponent } from './borrow-book.component';
import { NavComponent } from '../../common/nav/nav.component';

describe('BorrowBookComponent', () => {
  let component: BorrowBookComponent;
  let fixture: ComponentFixture<BorrowBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowBookComponent,NavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorrowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
