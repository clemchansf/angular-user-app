import {
    animate, state, style, trigger, transition } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    state('in', style({opacity: 1})),
    transition(':enter', [
      style({opacity: 0}),
      animate(500)
    ]),
    transition(':leave',
      animate(500, style({opacity: 0})))
]);

