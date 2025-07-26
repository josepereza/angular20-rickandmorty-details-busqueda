import { Component, effect, inject, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-character-list',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList {
  private characterService = inject(CharacterService);
  characters = signal<Character[]>([]);
    searchControl = new FormControl('');
 constructor() {
   this.characterService.getCharacters(this.searchControl.value ?? '')
        .subscribe(response => this.characters.set(response.results));
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
 
 this.characterService.getCharacters(this.searchControl.value ?? '')
        .subscribe(response => this.characters.set(response.results));
    });
  }
}
