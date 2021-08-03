import { html, css, LitElement, property } from 'lit-element';

export class HelloLit extends LitElement {  

  @property({ type: String }) title = 'HySecure';

  @property({ type: String }) appLogo = './images/Logo.svg';

  @property({ type: String }) help_link = 'https://docs.accops.com/hysecure_develop/index.html';

  @property({ type: String }) label = 'data';

  @property({ type: Array }) myArray = [''];

}
