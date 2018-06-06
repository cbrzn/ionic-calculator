import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    value:string = '0'
    op:string[] = [] 
    constructor(public navCtrl: NavController) {
    }


  type(e) {
    switch (e) {
      case '+': 
        if (this.op[0] == null && this.value !== '0') {
          this.op.push(this.value+'+')
          this.value = ' '
        } else {
          this.value = '0'
          this.op.pop()
        }
      break
      case '-': 
        if (this.op[0] == null && this.value !== '0') {
          this.op.push(this.value+'-')
          this.value = ' '
        } else {
          this.value = '0'
          this.op.pop()
        }
      break
      case '*': 
        if (this.op[0] == null && this.value !== '0') {
          this.op.push(this.value+'*')
          this.value = ' '
        } else {
          this.value = '0'
          this.op.pop()
        }
      break
      case '/':
        if (this.op[0] == null && this.value !== '0') {
          this.op.push(this.value+'/')
          this.value = ' '
        } else if (this.op){ 
          
        } else {
          this.value = '0'
          this.op.pop()
        }
      break
      case '%': 
        this.value = eval(this.value+'/100')
      break
      case 'delete': 
        this.value = '0'
        this.op.pop()
      break
      case 'invert': 
        this.value = eval(this.value+'*-1')      
      break
      case '.': 
         (this.value.includes('.') ? this.value : this.value += '.')   
      break
      case '=': 
          if (this.op[0] == undefined) {
            this.value 
          }
          else if (this.op[0].includes('/') && this.value == '0') {
            this.value = 'Error'  
          } else {
            this.value = eval(this.op.toString()+this.value)
            this.op.pop()
          }
      break
      default:
        (this.value == '0' ? this.value = ""+e : this.op[0] == null ? this.value +=""+e : this.value += e)
      break
    }
  }
}
