import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serie-fibonacci';
  comment = new FormControl('', [Validators.required, Validators.min(1)]);
  resultado: number;
  status = {
    result: false
  }


  enviar(data):number{
    let numero1 = 0;
    let numero2 = 1;
    if(data === '1'){
      this.resultado = 1
    }
    for (let i = 1; i < data; i++) {
      console.log();
      
      this.resultado = numero1 + numero2;
      numero1 = numero2;
      numero2 = this.resultado;
      console.log(this.resultado);
      
      
    }
    console.log(this.resultado);
    this.status.result = true;

    return this.resultado;
    
    

  }
}
