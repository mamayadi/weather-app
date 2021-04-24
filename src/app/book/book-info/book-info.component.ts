import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/model/book.model';
import { livres } from '../book.component';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {
  id: number;
  book: Book;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadlivre();
  }

  loadlivre(): void {
    this.id = this.route.snapshot.params.id;
    this.id = Number(this.id) - 1;
    this.book = livres[this.id];
  }

  getColor(): string {
    return this.book.commander ? 'green' : 'red';
  }

  onObtenir(): void {
    this.book.commander = true;
  }

  reinitialiser(): void {
    this.book.commander = false;
  }
}
