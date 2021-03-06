import {showNotification} from "../messaging.js";

export default function aboutHTMLFunction(props) {
    // language=HTML
    return `
<header>
    <h1>About Page</h1>
</header>
<main>
    <div class="container-fluid">
         <div class="row">
             <div class="col-12">
                <p id="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
         </div>
        <div>
            <p>About page is here.</p>  
        </div>
        <div class="row">
            <div class="col-4">
                <img src="https://fer-uig.glitch.me?uuid=1" alt="Fake Dev 1">
                <p>Fake Dev 1</p>
            </div>
            <div class="col-4">
                <img src="https://fer-uig.glitch.me?uuid=2" alt="Fake Dev 2">
                <p>Fake Dev 2</p>
            </div>
            <div class="col-4">
                <img src="https://fer-uig.glitch.me?uuid=3" alt="Fake Dev 3">
                <p>Fake Dev 3</p>
            </div>
        </div>
        <div class="row">
        <div class="col-12">
            <button id="change-about-text">Change About Text</button>
        </div>
        <div class="col-12">
            <a href="/" data-link>Go Home</a>
        </div>
        </div>
    </div>
</main>
    `;
}

function changeAboutText() {
    document.querySelector("#about-text").innerText = "Hello World!";
}

export function aboutJSFunction() {
    showNotification("Hey, a message!", "danger");
    document.querySelector("#change-about-text").addEventListener("click", changeAboutText);

}