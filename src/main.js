import HyperHTMLElement from 'hyperhtml-element';
import HelloWorldComponent from './components/hello-world/hello-world.component';

const $root = document.getElementById('root');

HyperHTMLElement.bind($root)`
    <h1>HyperHTMLElement test</h1>
    <hello-world />
`;
