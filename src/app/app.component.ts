import { Component } from '@angular/core';
import { ConfigService } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SVCO';
constructor(private Config: ConfigService){

  console.log(ConfigService.getConfig())
}
ngOnInit(){
  this.Config.getConfig().subscribe((result) =>{
    this.resultArray=resultData;
  })
}

}
