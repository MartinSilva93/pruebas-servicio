import { Component } from '@angular/core';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { ImgContainerComponent } from './components/img-container/img-container.component';
import { NewimageFormComponent } from './components/newimage-form/newimage-form.component';
import { ImgService } from '../../services/img.service';
import { Image } from '../../Models/image.model';

@Component({
  selector: 'app-main',
  imports: [AddButtonComponent, ImgContainerComponent, NewimageFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

newImageModalId:number=1;

imgArray:Image[]=[];

constructor(private imgService:ImgService){

}

ngOnInit():void{
  this.imgArray = this.imgService.getImages();
}

}
