import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteggioPageComponent } from './conteggio-page.component';

describe('ConteggioPageComponent', () => {
  let component: ConteggioPageComponent;
  let fixture: ComponentFixture<ConteggioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteggioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteggioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
