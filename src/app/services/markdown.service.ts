import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable()
export class MarkdownService {

  private md: MarkedStatic;

  constructor() {
    this.md = marked;
    this.md.setOptions({
      gfm: true,
      tables: true,
      smartypants: true,
      breaks: true,
      sanitize: true
    });
  }

  convert(markdown: string) {
    return this.md.parse(markdown);
  }

}
