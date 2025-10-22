
# Decap Notes:

## Installation

When editing solely offline, Decap needs a proxy server, it appears Sveltia does not.

For Decap admin to run local only without a cloud repository, install `npm install decap-server`

Manually create the decap structure, [see docs](https://decapcms.org/docs/install-decap-cms/).

```
hugo-project/
└── static/
    └── admin/
        ├── index.html
        ├── config.yml
        └── previews.js		
```

Decap expects to save changes to remote repositories, a local git repository is a must, but even then you need a proxy to save to it. For that install the `decap-server`:

```
npm i decap-server
```

To use the admin page, you must:

- First initialize a git repo in project root, make a commit, make sure it's clean.
- Launch terminal in the project folder, run:
  ```
  npx decap-server
  ```
- Launch another terminal for `hugo server`

## Setup

Project settings, collections are set in `static/admin/config.yml`.

### Perform admin edit save check

Once everything works here, you will see and edit pages, make sure to do a test save and reload to quickly determine you have the `decap-server` running, and that the local project git repository is clean (all commited).

### Customizing Preview pane

The preview pane will display everything in the frontmatter of the page unformatted by default. To change it, React is used, customizations can be in admin/index.html or imported from JS files.

There is a gotcha when registering preview templates, the collection name parameter for `files` collections is the `name` under the *files*, not the collection *name* itself. When the collection name is wrong, collection customization code won't be called at all.



