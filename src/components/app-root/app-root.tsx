import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
          <ion-route url="/main/" component="app-main" />
          <ion-route url="/terawih/" component="app-terawih" />
          <ion-route url="/witir/" component="app-witir" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
