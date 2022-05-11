import { Component, Input, OnInit } from '@angular/core';
import { StatisticsData } from '../types';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  @Input() data: StatisticsData[] = [];

  constructor() {}

  ngOnInit(): void {}
}
