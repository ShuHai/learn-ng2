import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
  type: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
            <h2>{{hero.name}} 开始冒险!</h2>
            <h2>英雄的职业:{{hero.type}}</h2>
            <div>
              <label>修改职业: </label>
              <input [(ngModel)]="hero.type" placeholder="职业">
            </div>`
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: '小羊',
    type: '游侠'
  };
}
