import { html, css, LitElement, property } from "lit-element";

export class HySecure extends LitElement {

    @property({ type: String })
    text='Button Demo'

    render() {
        return html`
        <button class="button-demo">${this.text}</button>
        `;
    }
}