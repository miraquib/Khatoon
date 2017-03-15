import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "../app.component";
import {AboutComponent} from "../about/about.component";
import {ModuleWithProviders} from "@angular/core";
import {ProgramsComponent} from "../programs/programs.component";

const APP_ROUTE : Routes = [
    {path : 'program' , component : ProgramsComponent},
    {path : 'about' , component : AboutComponent},
    {path : '' , component : AppComponent },

];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
