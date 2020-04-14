import { Component } from '@angular/core';
import { staticArr } from './../constants/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD App';
  model = {name: '', mobile: null, email: '', id: null};
  arr = staticArr;
  formCreateTitle  = 'Create User';
  formUpdateTitle  = 'Update User';
  isCreateForm = true;

  removeItem(itemId){
    console.log('remove item', itemId);
    this.arr = this.arr.filter(el=>el.id !== itemId);
  }

  UpdateData(item){
    this.isCreateForm = false;
    this.model = {
      name: item.name,
      mobile: item.mobile,
      email: item.email,
      id: item.id
    }
  }

  submitUpdateForm(data){
    console.log('submit update data', data);
    let newData = this.arr.map(val=>{
      if(val.id==data.id){
        val = data;
        return val;
      }else{
        return val;
      }
    })
    this.arr = newData;
    this.isCreateForm = true;
  }

  submitForm(val){
    console.log('submit val', val);
    console.log(val);
    if(this.isCreateForm){
      val.id = this.arr.length+1;
      this.arr.unshift(val);
    }else{
      this.submitUpdateForm(val);
    }
  }
}
