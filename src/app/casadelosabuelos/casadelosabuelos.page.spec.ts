import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasadelosabuelosPage } from './casadelosabuelos.page';

describe('CasadelosabuelosPage', () => {
  let component: CasadelosabuelosPage;
  let fixture: ComponentFixture<CasadelosabuelosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CasadelosabuelosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasadelosabuelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
