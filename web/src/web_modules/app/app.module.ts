import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {Router, NavigationEnd} from "@angular/router";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        // TODO : add Components here ..
    ],
    providers: [
        // TODO : add Directives here ..
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private router: Router) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd){
                window.scrollTo(0,0);
            }
        });
    }
}
