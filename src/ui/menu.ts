import { controls } from "engine/modules/actor/store";

export class Menu {
    private container: HTMLDivElement;
    private viewPaths: HTMLInputElement;
    private label: HTMLLabelElement;

    constructor() {
        this.render();
        this.init();
    }

    private init() {
        // fix type
        this.isDebugMode(controls.debug);

        this.viewPaths.addEventListener("change", (e: any) =>
            this.isDebugMode(e.currentTarget.checked)
        );
    }

    isDebugMode(isChecked: boolean) {
        this.viewPaths.checked = isChecked;
        controls.debug = isChecked;
        controls.debug
            ? document.body.classList.add("debug-mode")
            : document.body.classList.remove("debug-mode");
    }

    render() {
        this.label = document.createElement("label");
        this.label.innerText = "Gridview";

        this.container = document.createElement("div");

        this.viewPaths = document.createElement("input");
        this.viewPaths.type = "checkbox";

        this.container.appendChild(this.label);
        this.container.appendChild(this.viewPaths);

        this.container.classList.add("view-controls");
        document.body.appendChild(this.container);
    }
}
