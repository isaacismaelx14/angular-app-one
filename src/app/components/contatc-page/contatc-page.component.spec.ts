import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatcPageComponent } from './contatc-page.component';

describe('ContatcPageComponent', () => {
  let component: ContatcPageComponent;
  let fixture: ComponentFixture<ContatcPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatcPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
