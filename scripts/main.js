function makeElement(name) {
  customElements.define(name,
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById(name);
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({mode: 'open'})
          .appendChild(templateContent.cloneNode(true));
      }
    }
  );
}

makeElement('my-griditemtemplate');
