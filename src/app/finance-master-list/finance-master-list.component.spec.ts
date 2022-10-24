import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceMasterListComponent } from './finance-master-list.component';

describe('FinanceMasterListComponent', () => {
  let component: FinanceMasterListComponent;
  let fixture: ComponentFixture<FinanceMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceMasterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
