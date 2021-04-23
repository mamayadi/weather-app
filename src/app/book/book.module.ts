import { BookComponent } from './book.component';
import { BookRoutingRoutes } from './book-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookInfoComponent } from './book-info/book-info.component';

@NgModule({
  imports: [CommonModule, SharedModule, BookRoutingRoutes],
  declarations: [BookComponent, BookInfoComponent],
})
export class BookModule {}
