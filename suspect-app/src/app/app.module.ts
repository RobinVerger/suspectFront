import {MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatRadioModule,
 MatDatepickerModule, MatNativeDateModule, MatIconModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SuspectComponent } from './suspect/suspect.component';
import { SuspectService } from './suspect.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EditSuspectComponent } from './edit-suspect/edit-suspect.component';
import {MatCardModule} from '@angular/material/card';
import { FormSuspectComponent } from './form-suspect/form-suspect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LinkSuspectComponent } from './link-suspect/link-suspect.component';
import { UpdateSuspectComponent } from './update-suspect/update-suspect.component';
import { AllEnqueteComponent } from './all-enquete/all-enquete.component';
import { EnqueteService } from './enquete.service';
import { GetEnqueteComponent } from './get-enquete/get-enquete.component';
import { CreateEnqueteComponent } from './create-enquete/create-enquete.component';
import { UpdateEnqueteComponent } from './update-enquete/update-enquete.component';
import { SuspectOfEnqueteComponent } from './suspect-of-enquete/suspect-of-enquete.component';





@NgModule({
  declarations: [
    AppComponent,
    SuspectComponent,
    EditSuspectComponent,
    FormSuspectComponent,
    LinkSuspectComponent,
    UpdateSuspectComponent,
    AllEnqueteComponent,
    GetEnqueteComponent,
    CreateEnqueteComponent,
    UpdateEnqueteComponent,
    SuspectOfEnqueteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatIconModule
  ],
  providers: [SuspectService, EnqueteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
