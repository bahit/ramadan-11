import { Component, h } from "@stencil/core";
import { today } from "../../helpers/utils";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Ramadan 11</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-text color="medium">
          <h5 class="mute">Date today: {today()} </h5>
        </ion-text>
        <p>
          Welcome to Ramadan 11, a Progressive Web Application (PWA) that helps
          you in your Ramadan prayer for Terawih and Witir. This PWA focuses on
          8 raka'at for Terawih and 3 raka'at for Witir.
        </p>

        <p>
          This PWA guides you step by step for surah to read for all the 8
          raka'at for Terawih and 3 raka'at for Witir.
        </p>

        <h1>Summary</h1>
        <h2>Terawih</h2>
        <p>Number below indicate raka'at</p>
        <ol>
          <li>Al-Fatihah + At-Takathur</li>
          <li>Al-Fatihah + Al-Ikhlaas</li>
          <li>Al-Fatihah + Al-Asr</li>
          <li>Al-Fatihah + Al-Ikhlaas</li>
          <li>Al-Fatihah + Al-Humaza</li>
          <li>Al-Fatihah + Al-Ikhlaas</li>
          <li>Al-Fatihah + Al-Fil</li>
          <li>Al-Fatihah + Al-Ikhlaas</li>
        </ol>
        <h2>Witir</h2>
        <p>Number below indicate raka'at</p>
        <ol>
          <li>Al-Fatihah + Al-A'la*</li>
          <li>Al-Fatihah + Al-Ikhlaas*</li>
          <li>Al-Fatihah + Al-Ikhlaas + Al-Falaq + An-Nas**</li>
        </ol>
        <p>Note: *two raka'at together. **one raka'at</p>
        <ion-button href="/main" expand="block">
          Lets us pray (Terawih 8 & Witir 3)
        </ion-button>
        <ion-button href="/essential" expand="block">
          Compact: Lets us pray (Terawih 8 & Witir 3)
        </ion-button>
        <ion-button href="/terawih" expand="block">
          Terawih 8 Raka'at Only
        </ion-button>
        <ion-button href="/witir" expand="block">
          Witir 3 Raka'at Only
        </ion-button>
      </ion-content>,
    ];
  }
}
