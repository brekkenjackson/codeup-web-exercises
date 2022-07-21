import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function homeHTMLFunction(props) {
    return `
        <header>
            <h1 class="home-title">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
            <img id="image-one" id="img1" src="assets/jalopy1.jpeg" alt="jalopy-img1"
                <p>
                Welcome to my Jalopy application!
                </p>    
                <button id="img-button">Change Image</button>
            </div>
        </main>
    `;
}

let imageArr = [
    "assets/jalopy1.jpeg",
    "assets/jalopy2.jpeg",
    "assets/jalopy3.jpeg"
    ]
let regVar = 1

export function homeJSFunction() {
    let button = document.querySelector("#img-button");
        button.addEventListener("click", function (event){
            const img = document.querySelector("#image-one");
            img.setAttribute("src", imageArr[regVar]);
            regVar++;
            if (regVar === 3) {
                regVar = 0;
            }
        });
}