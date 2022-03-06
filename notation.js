import { annotate } from "https://unpkg.com/rough-notation?module";

const developer = document.querySelector('#developer');
const brazil = document.querySelector('#brazil');

const developerAnnotation = annotate(developer, { type: 'underline', color: '#52E4DC', padding: 1 });
const brazilAnnotation = annotate(brazil, { type: 'circle', color: '#52E4DC', padding: 1 });

setTimeout(() => {
  developerAnnotation.show();
}, 2000);

setTimeout(() => {
  brazilAnnotation.show();
}, 4000);