import {
    trigger,
    animate,
    transition,
    style,
    state
  } from '@angular/animations';
  

export const logoTranslationAnimation =   trigger('logoTranslation', [
    state(
      'void',
      style({
        transform: `translate({{voidTranslationLength}})`,
      }),{ params: { voidTranslationLength: "-300px"}}
    ),
    state(
      'translateRight',
      style({
        transform: 'translate(0px)',
      })
    ),
    state(
      'translateLeft',
      style({
        transform: 'translate({{leftTranslationLength}})',
      }),{ params: { leftTranslationLength: "-600px"}}
    ),
    transition('void => translateRight', [animate('0.5s')]),
    transition('void => translateLeft', [animate('0.5s')]),
    transition('translateRight => void', [animate('0s')]),
    transition('translateLeft => void', [animate('0s')]),
  ])
