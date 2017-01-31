import {Component, OnInit} from "@angular/core";
// import {Service} from "../...service";

@Component({
    selector: 'tap-registration',
    templateUrl: 'app.component.html',
    providers: [] // TODO : service.
})
export class AppComponent implements OnInit {
    constructor() { // TODO : public ...service:Service
        console.log('testing......');
    }

    ngOnInit() {
        let theParams = window.location.search;
        console.log(theParams);
    }
}
