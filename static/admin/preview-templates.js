
// 1. Define your Preview Component (for the 'home' collection)
const HomePagePreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    // 'body' is the default field name for the markdown content body
    const content = this.props.widgetFor('body');
    
    // Access the entire 'card' list
    const cards = entry.getIn(['data', 'card']);
    
    // Iterate and render each card item
    const renderedCards = cards ? cards.map((card, index) => {
      // Get data for the current card item
      const honorific = card.get('honorific');
      const name = card.get('name');
      
      return h('div', { key: index, className: 'card' },
        h('h2', {}, `${honorific} ${name}`),
      );
    }) : null; // Handle case where 'cards' is null/undefined
    /*
- label: card
            name: card
            widget: object
            fields:
              - label: Honorific
                name: honorific
                widget: select
                options: [ "Mr.", "Ms." ]
                #  - { label: "Mr.", value: "Mr." }
                #  - { label: "Ms.", value: "Ms." }
              - label: Name
                name: name
                widget: string
              - label: Portrait
                name: portrait
                widget: string
              - label: Position
                name: position
                widget: string
*/
          
    // Render the structured preview using h()
    return h('div', { className: 'homepage-preview' },
      h('h1', { className: 'site-title' }, title),
      h('section', { className: 'site-content' }, renderedCards)
    );
  }
});

// 2. Register the Preview Template
// Maps the 'home' collection (from config.yml) to the component
window.CMS.registerPreviewTemplate('home', HomePagePreview);

// 3. Register Styles
// Load your site's main CSS for the preview pane to use
window.CMS.registerPreviewStyle('/css/main.css');