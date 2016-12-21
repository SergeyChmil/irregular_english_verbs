import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: "./app/html/app.component.html",
  styleUrls: ["./bower_components/bootstrap/dist/css/bootstrap.min.css", "bower_components/bootstrap/dist/css/bootstrap-theme.min.css", "./app/css/app.component.css"]
})
export class AppComponent {
  title: string = "IRREGULAR ENGLISH VERBS";

  track(string: string) {
    console.log(string);
  }
}
