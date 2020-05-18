
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
} from "@angular/material";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
  ],
  exports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
  ]
})
export class SharedModule {}
