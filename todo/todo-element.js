import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button';

/**
 * `todo-element`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TodoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>[[name]]</h2>
      <div class="todo-list">
        <div class="task">
          <paper-checkbox></paper-checkbox>
          <paper-input label="Task:"></paper-input>
        </div>
        <paper-button>add task</paper-button>
        <h4>[[submit]]</h4>
      </div>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'Todo List'
      },
      submit: {
        type: String,
        value: 'Completed:'
      }
    };
  }
}

window.customElements.define('todo-element', TodoElement);
