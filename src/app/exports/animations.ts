import { trigger, state, style, animate, transition } from '@angular/animations'

export const fadeInOutImg = trigger('fadeInOut', [
    state('in', style({ opacity: 1 })),
    state('out', style({ opacity: 0.5, transform: 'translateY(5px)', filter: 'blur(5px)' })),
    transition('in <=> out', [ animate('3s ease-out') ])
])

export const fadeInOutImgBig = trigger('fadeInOut', [
    state('in', style({ opacity: 1 })),
    state('out', style({ opacity: 0.5, filter: 'blur(5px)' })),
    transition('in <=> out', [animate('3s ease-out')])
])
