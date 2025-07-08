import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasePipe',
})
export class TitleCasePipePipe implements PipeTransform {
  transform(value: string): string | null {
    if (!value) return null;

    let words = value.split(' ');
    //['the', 'rise', 'of', 'the', 'planet', 'of', 'ape']

    words.forEach((word: string, index: number) => {
      if (index > 0 && this.isPreposition(word)) {
        words[index] = word.toLowerCase();
      } else {
        words[index] = this.titleCase(word);
      }
    });

    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    let preposition = ['of', 'the'];

    return preposition.includes(word.toLowerCase());
  }

  private titleCase(word: string): string {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }
}
