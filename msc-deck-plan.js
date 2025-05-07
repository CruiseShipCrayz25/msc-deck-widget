class DeckPlanWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const shadow = this.shadowRoot;
    const box = document.createElement('div');
    box.innerHTML = `
      <h1 style="color: red; font-family: sans-serif;">
        ✅ TEST LOADED FROM GITHUB PAGES
      </h1>
    `;
    shadow.appendChild(box);
  }
}

customElements.define('deck-plan-widget', DeckPlanWidget);
