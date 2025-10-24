

- Project status: ✔ Complete
- Decap status: ⛔ Replaced
- Sveltia status: ✔ functional ✔ Sveltia setup documentation

# Sveltia Notes:

## Installation: Sveltia

Currently, you can only migrate from Decap, see decap branch for decap setup.

## Local only requirements

- Initialize a project git repo.

## Setup

1. Manually create the Sveltia structure, it is identical to Decap [see docs](https://decapcms.org/docs/install-decap-cms/).

```
hugo-project/
└── static/
    └── admin/
        ├── index.html    <-- Sveltia loaded via CDN here
        ├── config.yml    <-- Sveltia admin, collections settings
        └── previews.js   <-- Not yet supported
```

2. `git init` the hugo project
3. Update `config.yml`, remove related Decap settings:
  ```yaml
  backend:
    name: github
    repo: github-username/github-repo
    # it works with fake credentials, repo: [fake-username]/[fake-repo]
  ```

## Running Sveltia

1. Run `hugo server`
2. Sveltia admin is at `localhost:1313/admin`, your web browser must support the [File System Access API](https://wicg.github.io/file-system-access/), Firefox at this time does not, either use Chrome, Edge, or Brave browser ([setting is required](https://github.com/sveltia/sveltia-cms?tab=readme-ov-file#enabling-local-development-in-brave)).
3. Choose “Work with Local Repository”, even though Sveltia does NOT save to any git repo.
4. Navigate to your project root
5. Allow file access

## Customizing Preview pane in Sveltia

Not yet supported