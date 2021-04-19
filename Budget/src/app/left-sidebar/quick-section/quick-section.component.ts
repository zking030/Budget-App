import { Component} from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'quick-section',
  templateUrl: './quick-section.component.html',
  styleUrls: ['./quick-section.component.css']
})
export class QuickSectionComponent {

  itemIsActive: boolean = false;
  activeItem:any = undefined;

  transForm=new FormGroup({
    transDate: new FormControl(),
    transCategory: new FormControl(),
    transDescription: new FormControl(),
    transAmount: new FormControl()
  });

  depositForm= new FormGroup ({
    depositDate: new FormControl(),
    depositCategory: new FormControl(),
    depositDescription: new FormControl(),
    depositAccount: new FormControl(),
    depositAmount: new FormControl(),
  });

  saveForm= new FormGroup({
    saveDate: new FormControl(),
    saveCategory: new FormControl(),
    saveDescription: new FormControl(),
    saveFromAccount: new FormControl(),
    saveAmount: new FormControl(),
});

onClick(item:string){
  this.activeItem=item;
  this.itemIsActive=!this.itemIsActive;
}

}
