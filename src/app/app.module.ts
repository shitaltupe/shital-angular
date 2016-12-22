import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { FlatCompComponent } from './flat-comp.component';
import { DatabindingComponent } from './databinding/databinding.component';
//import { IntercompcommComponent } from './intercompcomm/intercompcomm.component';
import { PropertybindingComponent } from './databinding/propertybinding.component';
import { EventbindingComponent } from './databinding/eventbinding.component';
import { TwowaybindingComponent } from './databinding/twowaybinding.component';
import { DemoexamplebindingComponent } from './databinding/demoexamplebinding.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ProjectionComponent } from './projection/projection.component';
import { LifecycleindexComponent } from './lifecycle/lifecycleindex.component';
import { ProjectionindexComponent } from './projection/projectionindex.component';
import { IntercompcommComponent } from './intercompcomm/intercompcomm.component';
import { BtnpanelComponent } from './intercompcomm/btnpanel.component';
import { ImgpanelComponent } from './intercompcomm/imgpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    FlatCompComponent,
    DatabindingComponent,
    PropertybindingComponent,
//PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DemoexamplebindingComponent,
  //  IntercompcommComponent,
   LifecycleComponent,
   ProjectionComponent,
   LifecycleindexComponent,
   ProjectionindexComponent,
   IntercompcommComponent,
   BtnpanelComponent,
   ImgpanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
