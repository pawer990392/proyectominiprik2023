import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducCreateComponent } from './produc-create.component';

describe('ProducCreateComponent', () => {
  let component: ProducCreateComponent;
  let fixture: ComponentFixture<ProducCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducCreateComponent]
    });
    fixture = TestBed.createComponent(ProducCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
