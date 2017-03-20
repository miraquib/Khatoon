import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "../app.component";
import {AboutComponent} from "../about/about.component";
import {ModuleWithProviders} from "@angular/core";
import {ProgramsComponent} from "../programs/programs.component";
import {ContactUsComponent} from "../contact-us/contact-us.component";
import {DataDrivenContactFormComponent} from "../contact-us/data-driven-contact-form.component";

const APP_ROUTE : Routes = [
    {path : 'program' , component : ProgramsComponent},
    {path : 'about' , component : AboutComponent},
    {path : 'contact-us' , component : ContactUsComponent},
    {path : 'contact-dd' , component : DataDrivenContactFormComponent},
    {path : '' , component : AppComponent },

];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
