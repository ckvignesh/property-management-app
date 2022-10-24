import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesMasterListComponent } from './properties-master-list.component';

describe('PropertiesMasterListComponent', () => {
  let component: PropertiesMasterListComponent;
  let fixture: ComponentFixture<PropertiesMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesMasterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
