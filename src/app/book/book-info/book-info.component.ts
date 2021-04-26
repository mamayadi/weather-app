import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/shared/model/book.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { livres } from '../book.component';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {
  id: number;
  book: Book;

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadlivre();
  }

  loadlivre(): void {
    this.id = +this.route.snapshot.params.id;
    this.id -= 1;
    if (this.id < livres.length) {
      this.book = livres[this.id];
    } else {
      this.snackBar.open('Livre introuvable!', 'OK', {
        duration: 3500,
        panelClass: ['mat-toolbar', 'mat-primary'],
      });
      this.router.navigate(['book']);
    }
  }

  getColor(): string {
    return this.book?.commander ? 'green' : 'red';
  }

  onObtenir(): void {
    if (this.book) {
      this.book.commander = true;
    }
  }

  reinitialiser(): void {
    if (this.book) {
      this.book.commander = false;
    }
  }
}
