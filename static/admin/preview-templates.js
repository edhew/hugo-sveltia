
const CMS = window.CMS;
const h = window.h || CMS.h; 
const createClass = window.createClass || CMS.createClass;

// --- CRITICAL CHECK ---
// Add this check to your file to confirm the functions are available:
if (typeof createClass !== 'function') {
    console.error("Decap CMS Preview Error: The 'createClass' function is still undefined. Preview rendering will fail.");
    // If you see this error, you need to adjust the access again.
} else {
  console.log('--- createClass exists! ---');
}





/*
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
    */
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
 /*         
    // Render the structured preview using h()
    return h('div', { className: 'homepage-preview' },
      h('h1', { className: 'site-title' }, title),
      h('section', { className: 'site-content' }, renderedCards)
    );
  }
});*/

const HomePagePreview = createClass({
  render: function() {
    // THIS IS PIVOTAL: If your component logic has ANY JavaScript error, 
    // the component will silently fail to render anything in the preview pane.
    
    const entry = this.props.entry;
    
    // Check if your content field is named 'body' (the default) or 'content' 
    // in your config.yml. This name MUST match your config.
    const content = this.props.widgetFor('content'); // Or 'body', 'main_content', etc.
    const title = entry.getIn(['data', 'title']);

    return h('div', { className: 'homepage-preview' },
      h('h1', { className: 'site-title' }, title),
      h('section', { className: 'site-content' }, content)
    );
  }
});

window.CMS.registerPreviewTemplate('home', HomePagePreview);
window.CMS.registerPreviewStyle('/css/main.css');
