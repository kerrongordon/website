import { trigger, state, style, animate, transition } from '@angular/animations'

export const fadeInOutImg = trigger('fadeInOut', [
    state('in', style({ opacity: 1 })),
    state('out', style({ opacity: 0 })),
    transition('in <=> out', [ animate('1s ease-in-out') ])
])
