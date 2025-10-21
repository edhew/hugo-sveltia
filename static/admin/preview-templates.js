// Get the current entry (all unsaved data)
const HomePagePreview = createClass({
  render: function() {
    // Get the data from the entry object
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const content = this.props.widgetFor('body');

    // Return the HTML structure formatted with the site's styling
    return h('div', {},
      h('h1', {}, title),
      h('div', { className: 'content-body' }, content)
    );
  }
});

// Map the 'home' collection name from config.yml to the component
CMS.registerPreviewTemplate('home', HomePagePreview);