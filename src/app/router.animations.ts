import {trigger, state, animate, style, transition} from '@angular/core';

export function moveIn() {
  return trigger('moveIn', [
    state('void', style({position: 'relative', overflow: 'hidden'}) ),
    state('*', style({position: 'relative', overflow: 'hidden'}) ),
    transition(':enter', [
      style({opacity:'0', transform: 'translateX(100px)'}),
      animate('.6s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
    ]),
    transition(':leave', [
      style({opacity:'1', transform: 'translateX(0)'}),
      animate('.3s ease-in-out', style({opacity:'0', transform: 'translateX(-200px)'}))
    ])
  ]);
}

export function fallIn() {
  return trigger('fallIn', [
    transition(':enter', [
      style({opacity: '0', transform: 'scale(0)'}),
      animate('1s ease-in-out', style({opacity: '1', transform: 'scale(1)'}))
    ]),
    transition(':leave', [
      style({opacity: '1', transform: 'scale(1)'}),
      animate('1s ease-in-out', style({opacity: '0', transform: 'scale(0)'}))
    ])
  ]);
}

export function moveInLeft() {
  return trigger('moveInLeft', [
    transition(':enter', [
      style({opacity:'0', transform: 'translateX(-100px)'}),
      animate('.6s .2s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
    ])
  ]);
}

export function fadeInOut() {
  return trigger('fadeInOut', [
    transition(':enter', [
      style({opacity: '0', transform: 'scale(0.8)'}),
      animate('1s ease-in-out', style({opacity: '1', transform: 'scale(1)'}))
    ]),
    transition(':leave', [
      style({opacity: '1', transform: 'scale(1)'}),
      animate('1s ease-in-out', style({opacity: '0', transform: 'scale(0.8)'}))
    ])
  ]);
}
