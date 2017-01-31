import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
    { path: 'test' }, //, component: AgentDetailsComponent },
    { path: '',
        redirectTo: '/test',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule ],
})
export class AppRoutingModule {
}