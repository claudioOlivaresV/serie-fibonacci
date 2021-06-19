import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { send } from 'process';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app : AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    app = new AppComponent();
  });

  it('debe dar 1, para pa posicion 2', () => {
    expect(app.enviar(2)).toEqual(1);

  });

});
