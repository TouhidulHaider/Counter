import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent implements OnInit {
  counter = 0;
  history: number[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  paginatedHistory: number[] = [];

  ngOnInit(): void {
    this.updatePaginatedHistory();
  }

  increment(): void {
    this.counter++;
    this.history.push(this.counter);
    this.updatePaginatedHistory();
  }

  updatePaginatedHistory(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedHistory = this.history.slice(start, end);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedHistory();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedHistory();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.history.length / this.itemsPerPage);
  }
}