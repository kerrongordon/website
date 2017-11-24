import { trigger, state, style, animate, transition } from '@angular/animations'


export const fadeInOutImg = trigger('fadeInOut', [
    state('in', style({ opacity: 1 })),
    state('out', style({ opacity: 0.5, transform: 'translateY(10px)', filter: 'blur(10px)' })),
    transition('in <=> out', [ animate('3s ease-out') ])
])
