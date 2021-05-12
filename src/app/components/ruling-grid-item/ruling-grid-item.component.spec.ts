import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulingGridItemComponent } from './ruling-grid-item.component';

describe('RulingGridItemComponent', () => {
  let component: RulingGridItemComponent;
  let fixture: ComponentFixture<RulingGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulingGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
