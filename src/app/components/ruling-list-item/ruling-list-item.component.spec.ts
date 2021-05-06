import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulingListItemComponent } from './ruling-list-item.component';

describe('RulingListItemComponent', () => {
  let component: RulingListItemComponent;
  let fixture: ComponentFixture<RulingListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulingListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
