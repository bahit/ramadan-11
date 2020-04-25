/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppMain {
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface AppTerawih {
    }
    interface AppWitir {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppMainElement extends Components.AppMain, HTMLStencilElement {
    }
    var HTMLAppMainElement: {
        prototype: HTMLAppMainElement;
        new (): HTMLAppMainElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTerawihElement extends Components.AppTerawih, HTMLStencilElement {
    }
    var HTMLAppTerawihElement: {
        prototype: HTMLAppTerawihElement;
        new (): HTMLAppTerawihElement;
    };
    interface HTMLAppWitirElement extends Components.AppWitir, HTMLStencilElement {
    }
    var HTMLAppWitirElement: {
        prototype: HTMLAppWitirElement;
        new (): HTMLAppWitirElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-main": HTMLAppMainElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-terawih": HTMLAppTerawihElement;
        "app-witir": HTMLAppWitirElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppMain {
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface AppTerawih {
    }
    interface AppWitir {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-main": AppMain;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-terawih": AppTerawih;
        "app-witir": AppWitir;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-main": LocalJSX.AppMain & JSXBase.HTMLAttributes<HTMLAppMainElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-terawih": LocalJSX.AppTerawih & JSXBase.HTMLAttributes<HTMLAppTerawihElement>;
            "app-witir": LocalJSX.AppWitir & JSXBase.HTMLAttributes<HTMLAppWitirElement>;
        }
    }
}
