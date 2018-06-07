import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeViewerComponent } from './fridge-viewer.component';

describe('FridgeViewerComponent', () => {
  let component: FridgeViewerComponent;
  let fixture: ComponentFixture<FridgeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
