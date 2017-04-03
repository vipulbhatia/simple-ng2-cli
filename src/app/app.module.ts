import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
//import {AddContactModule} from './add-contact.module.js';
import {AppComponent} from './app.component';
import { RoutingModule } from './routing.module';

/**
 * [NgModule description]
 * import module and use it in 'imports', this will provide all components from that module
 * if there is a single component to be used, just import that instead and use it in 'declarations'
 */
@NgModule({
    imports: [BrowserModule, RoutingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {

}
