import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharGridItemComponent } from './char-grid-item.component';

describe('CharGridItemComponent', () => {
  let component: CharGridItemComponent;
  let fixture: ComponentFixture<CharGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharGridItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
