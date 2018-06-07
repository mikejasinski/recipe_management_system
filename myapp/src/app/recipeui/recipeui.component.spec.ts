import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeuiComponent } from './recipeui.component';

describe('RecipeuiComponent', () => {
  let component: RecipeuiComponent;
  let fixture: ComponentFixture<RecipeuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
