import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffDebuffComponent } from './buff-debuff.component';

describe('BuffDebuffComponent', () => {
  let component: BuffDebuffComponent;
  let fixture: ComponentFixture<BuffDebuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuffDebuffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuffDebuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
