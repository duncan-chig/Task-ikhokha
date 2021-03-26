import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkhokhaHomepageComponent } from './ikhokha-homepage.component';

describe('IkhokhaHomepageComponent', () => {
  let component: IkhokhaHomepageComponent;
  let fixture: ComponentFixture<IkhokhaHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkhokhaHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkhokhaHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
