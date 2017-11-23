import { trigger, state, style, animate, transition } from '@angular/animations'


export const fadeInOutImg = trigger('fadeInOut', [
    state('in', style({ opacity: 1, visibility: 'visible' })),
    state('out', style({ opacity: 0.5, visibility: 'visible' })),
    transition('in <=> out', [ animate('3s ease-out') ])
])
