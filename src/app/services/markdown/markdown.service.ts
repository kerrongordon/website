import { Injectable } from '@angular/core'
import * as marked from 'marked'

@Injectable()
export class MarkdownService {

  md: typeof marked

  constructor() {
    this.md = marked
    this.md.setOptions({
      gfm: true,
      tables: true,
      smartypants: true,
      breaks: true,
      sanitize: true
    })
  }

  convert(markdown: string) {
    return this.md.parse(markdown)
  }

}
