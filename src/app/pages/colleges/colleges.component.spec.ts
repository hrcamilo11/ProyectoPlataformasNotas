import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesComponent } from './colleges.component';

describe('CollegesComponent', () => {
  let component: CollegesComponent;
  let fixture: ComponentFixture<CollegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
