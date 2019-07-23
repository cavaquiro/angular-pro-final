import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDefinitionComponent } from './icon-definition.component';

describe('IconDefinitionComponent', () => {
  let component: IconDefinitionComponent;
  let fixture: ComponentFixture<IconDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
