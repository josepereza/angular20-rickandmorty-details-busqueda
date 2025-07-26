import { Component, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-detail',
  imports: [RouterLink],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css'
})
export class CharacterDetail {
 private route = inject(ActivatedRoute);
  private characterService = inject(CharacterService);
  character = signal<Character | undefined>(undefined);
  id = input<number>(0);
 constructor() {
    effect(() => {
      if (this.id() > 0) {
        this.characterService.getCharacterById(this.id())
          .subscribe(char => this.character.set(char));
      }
    });
  }
  ngOnInit() {
    
  }
}
