import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinterOutputComponent } from './linter-output.component';

describe('LinterOutputComponent', () => {
  let component: LinterOutputComponent;
  let fixture: ComponentFixture<LinterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinterOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
