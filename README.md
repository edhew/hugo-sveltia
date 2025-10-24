
# Decap Notes:

## Installation: Decap

When editing solely offline, Decap needs a proxy server, it appears Sveltia does not.

## Local only requirements

To run Decap admin locally without a cloud repository, `decap-server` available via NPM is required.

## Setup

1. Manually create the decap structure, [see docs](https://decapcms.org/docs/install-decap-cms/).

```
hugo-project/
└── static/
    └── admin/
        ├── index.html    <-- Decap loaded via CDN here
        ├── config.yml    <-- Decap admin, collections settings
        └── previews.js   <-- Preview pane settings
```

2. `git init` the hugo project
3. Install `decap-server`:

```
npm i decap-server
```

4. Run `hugo server`, to make sure Hugo runs.
5. `ctrl+c` once Hugo works, and `localhost:1313` appears correctly

Decap admin is at `localhost:1313/admin`, but you will see a login page at this point.

## Running Decap

number1. Commit changes to local git repo. Once Hugo is running correctly, commit all changes to your local git repo, make sure repo status is clean. **!! IMPORTANT !!** If repo is not clean, Decap won't save correctly (it appears).
2. Launch decap proxy server in a terminal:

    ```
    npx decap-server
    ```
3. Launch another terminal for `hugo server`
4. Visit `localhost:1313` and `localhost:1313/admin`

Admin page should work correctly, edits should save correctly.

## Customizing Preview pane

Without setting up preview templates, the preview pane will not reflect your layouts.

React syntax is used to customize the preview pane, the JavaScript can be defined in admin/index.html.


```js
var HomePreview = createClass({
	render: function() {
		var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']);
    var body = this.props.widgetFor('body');
      	
    return h('div', {className: 'container'},
      h('h1', {style: {text-decoration: 'underline'}}, title || 'Default Title'),
      h('div', {className: 'content'}, body)
    );
  }
});

CMS.registerPreviewTemplate('_index', HomePreview);
```
A gotcha when registering preview templates, the collection name parameter for `files` collections is the `name` under the *files*, not the collection *name* itself. If the collection name is wrong, preview customization, in this case `HomePreview` is not called at all.

### Loading styles

This loads your styles into the Preview pane:

```
CMS.registerPreviewStyle('/css/main.css');
```



