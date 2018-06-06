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
        if (this.value.includes('.')) {
          this.value
        } else if (this.value == ' ') {
          this.value = '0.'
        } else if (this.value == '0') {
          this.value = '0.'
        } else {
          this.value += '.'
        }
        //  (this.value.includes('.') ? this.value :this.value += '.' ? this.value = ' ' : this.value = '0.')   
      break
      case '=': 
          if (this.op[0] == undefined) {
            this.value 
          } else if (this.op[0].includes('/') && this.value == '0') {
            this.value = 'Error'  
          } else if (this.op[0] != undefined && this.value == ' ' ) {
            this.op[0] = this.op[0].substring(0, this.op[0].length - 1)
            this.value = this.op[0] 
            this.op.pop()
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
