import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable()
export class MarkdownService {

  private md: MarkedStatic;

  constructor() {
    this.md = marked;
  }

  convert(markdown: string) {
    return this.md.parse(markdown);
  }

}
