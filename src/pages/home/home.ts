import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value: string = '0'
  op:number[] = [] 
  constructor(public navCtrl: NavController) {
  }


  type(e) {
    switch (e) {
      case '+': 
        this.value = '='
      break
      case '-': 
        (this.op[0] == null ? this.value = '0' : this.op.push('-'))
      break
      case '*': 
        this.value = ' '
        console.log(this.op)
        break
      case '/': 
        this.value = ' '
        console.log(this.op)
        break
      case '%': 
        this.op.push(this.value)
        console.log(this.op)
      break
      case 'delete': 
        this.value = ' '
      break
      case 'invert': 
        this.op.push(this.value)
        console.log(this.op)
      break
      case '.': 
        this.op.push(this.value)
        console.log(this.op)
      break
      case '=': 
        this.value = String(this.op[0]  +this.value)
        console.log('HERE')
        console.log(this.op)
      break
      default:
        (this.value == '0' ? this.value = ""+e : this.value += e)
      break
    }
  }

  two() {
    console.log(this.value)
    console.log(this.value == '')
  }
}
