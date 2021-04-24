import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/model/book.model';

export const livres: Book[] = [
  {
    id: '1',
    titre: 'Android',
    imageUrl: 'assets/images/android.jpg',
    date: new Date('04/10/2020'),
    commander: false,
  },
  {
    id: '2',
    titre: 'Angular',
    imageUrl: 'assets/images/angular.jpg',
    date: new Date('02/02/2020'),
    commander: true,
  },
  {
    id: '3',
    titre: 'Bootstrap',
    imageUrl: 'assets/images/bootstrap.jpg',
    date: new Date('04/10/2020'),
    commander: false,
  },
];

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  livres = livres;
  constructor() {}

  ngOnInit(): void {}
}
