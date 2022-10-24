import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsMasterListComponent } from './tenants-master-list.component';

describe('TenantsMasterListComponent', () => {
  let component: TenantsMasterListComponent;
  let fixture: ComponentFixture<TenantsMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantsMasterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantsMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
