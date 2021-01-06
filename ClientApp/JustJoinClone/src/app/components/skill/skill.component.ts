import { Component, Input, OnInit } from '@angular/core';
import { SkillModel } from '../../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  @Input() skill: SkillModel;

  constructor() {}
  text: string;
  ngOnInit(): void {
    let map = new Map([
      [1, 'nice to have'],
      [2, 'junior'],
      [3, 'regular'],
      [4, 'advanced'],
      [5, 'master'],
    ]);
    this.text = map.get(this.skill.level);
  }
  color(number: number) {
    return {
      'circle-gray': number > this.skill.level,
      'circle-pink': number <= this.skill.level,
    };
  }
}
