import HyperHTMLElement from 'hyperhtml-element';

import './hello-world.style.scss';

export default class HelloWorldComponent extends HyperHTMLElement {
    render() {
        return this.html`<p>Hello World!</p>`;
    }
}

HelloWorldComponent.define('hello-world');
