class DeckPlanWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const shadow = this.shadowRoot;

    // Load CSS
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://gist.githubusercontent.com/CruiseShipCrayz25/7198f985187f6a030a313c2e0999a211/raw/a1ccd386ed5e40716ee12e05ef5547fc249181f6/msc-deck-plan.css';
    shadow.appendChild(style);

    // Create structure
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div id="deck-selector">
        ${[5,6,7,8,18,19,20,21,22].map(num => `<button data-deck="${num}">Deck ${num}</button>`).join('')}
      </div>
      <img id="deck-image" src="" alt="Deck Plan">
      <div id="deck-disclaimer">PHOTOS COURTESY OF MSC CRUISES</div>
    `;
    shadow.appendChild(wrapper);

    const img = shadow.getElementById('deck-image');
    img.src = this.getDeckImageUrl(5); // Default image

    // Handle deck switching
    shadow.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        const deck = button.dataset.deck;
        img.src = this.getDeckImageUrl(deck);
      });
    });
  }

  getDeckImageUrl(deckNumber) {
    const urls = {
      5: "https://static.wixstatic.com/media/8e080d_c894fb32fd6041cf97d7c329be387e80~mv2.jpg",
      6: "https://static.wixstatic.com/media/8e080d_20dd2f99e8a04bd09f3678ccf681d94e~mv2.jpg",
      7: "https://static.wixstatic.com/media/8e080d_6f6e2ecef3ed46d9ac96651e694c9f53~mv2.jpg",
      8: "https://static.wixstatic.com/media/8e080d_2854bd296ba94ecb93fec846c392811a~mv2.jpg",
      18: "https://static.wixstatic.com/media/8e080d_45c4467ecbd842c9a7646620619c3f7b~mv2.jpg",
      19: "https://static.wixstatic.com/media/8e080d_738fc182e62c4321bb5c1d3e2425d801~mv2.jpg",
      20: "https://static.wixstatic.com/media/8e080d_45c4467ecbd842c9a7646620619c3f7b~mv2.jpg",
      21: "https://static.wixstatic.com/media/8e080d_2d0fce7ab64642aca02a10c9ceaadcdd~mv2.jpg",
      22: "https://static.wixstatic.com/media/8e080d_350a5eedfdbf4b98b1e7dd25413df8bf~mv2.jpg"
    };
    return urls[deckNumber] || urls[5];
  }
}

customElements.define('deck-plan-widget', DeckPlanWidget);
