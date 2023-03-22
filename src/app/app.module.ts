import { initializeApp } from "firebase/app";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyListComponent } from './my-list/my-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponentComponent } from './test-component/test-component.component';
import { TableFormatterPipe } from './table-formatter.pipe';
import { ModelService } from './model.service';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    TestComponentComponent,
    TableFormatterPipe,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlq4vcl9t1aD5NrQ44euMnCUb_rKr_5iU",
  authDomain: "angular-test-380223.firebaseapp.com",
  projectId: "angular-test-380223",
  storageBucket: "angular-test-380223.appspot.com",
  messagingSenderId: "541118562596",
  appId: "1:541118562596:web:85b6a68ca830858f2bf3b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);