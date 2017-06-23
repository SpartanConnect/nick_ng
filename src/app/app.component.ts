import { Component } from '@angular/core';

const HEROES: Hero[] = [  { id: 11, name: 'Mr. Nice' },
                          { id: 12, name: 'Narco' },
                          { id: 13, name: 'Bombasto' },
                          { id: 14, name: 'Celeritas' },
                          { id: 15, name: 'Magneta' },
                          { id: 16, name: 'RubberMan' },
                          { id: 17, name: 'Dynama' },
                          { id: 18, name: 'Dr IQ' },
                          { id: 19, name: 'Magma' },
                          { id: 20, name: 'Tornado' }];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <md-list dense class="heroes">
      <md-list-item *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span class="badge">#{{hero.id}}</span> <button md-raised-button>{{hero.name}}</button>
      </md-list-item>
    </md-list>
    <h2>{{hero.name}} details!</h2>
    <div><label>id:</label>{{hero.id}}</div>
    <div>
      <md-input-container><input mdInput [(ngModel)]="hero.name" placeholder="Name"></md-input-container>
    </div>
  `
})
export class AppComponent {
  heroes=HEROES;

  selectedHero: Hero;
}

export class Hero {
  id:number;
  name:string;
}
