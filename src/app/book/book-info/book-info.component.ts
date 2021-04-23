import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/model/book.model';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {
  livres: Book[] = [
    {
      id: '1',
      titre: 'Android',
      imageUrl: 'assets/images/android.png',
      date: new Date('01/10/2020'),
      commander: false,
    },
    {
      id: '2',
      titre: 'Angular',
      imageUrl: 'assets/images/angular.png',
      date: new Date('02/02/2020'),
      commander: true,
    },
    {
      id: '3',
      titre: 'Bootstrap',
      imageUrl: 'assets/images/bootstrap.png',
      date: new Date('03/12/2020'),
      commander: false,
    },
  ];
  id: number;
  liv: Book;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadlivre();
  }

  loadlivre(): void {
    this.id = this.route.snapshot.params.id;
    this.id = Number(this.id) - 1;
    this.liv = this.livres[this.id];
  }

  getColor(): string {
    return this.liv.commander ? 'green' : 'red';
  }

  onObtenir(): void {
    this.liv.commander = true;
  }

  reinitialiser(): void {
    this.liv.commander = false;
  }
}
