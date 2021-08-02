import { LitElement } from 'lit-element';

export declare class HelloLit extends LitElement {
  static styles: import('lit-element').CSSResult;

  title: string;

  personName: string;

  counter: number;

  __increment(): void;

  render(): import('lit-element').TemplateResult;
}
