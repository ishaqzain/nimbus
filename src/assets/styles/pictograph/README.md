# Pictograph
A gem for serving Bukalapak’s icon assets.

## Project Structure

```ruby
index.scss # for importing as npm package
pictograph.scss # for desktop
pictograph_mweb.scss # for mweb
pictograph_bbm.scss # for bbm
vendor/ # Assets to be served go here
  pictograph/
    images/ # Image assets go here (sprites, individual icon SVGs, etc.)
    stylesheets/ # .scss files go here
    typefaces/ # Font files go here
  pictograph_mweb
    images/ # Image assets go here (sprites, individual icon SVGs, etc.)
    stylesheets/ # .scss files go here
    typefaces/ # Font files go here
preview/ # For previewing icons
  stylesheets/ # Some basic stylesheets, should just stay as is
  templates/ # pug files to render the icons
```

## What's Included in This Gem
- Desktop and mobile web icon fonts
- Desktop and mobile web duotone icons
- BBM duotone icons
- Stroke icons (in development)

## Installation

### Ruby Gem

Add this line to your application’s Gemfile

```ruby
gem 'pictograph', git: 'https://[github_auth_token]:x-oauth-basic@github.com/bukalapak/pictograph'
```

And then execute

```bash
$ bundle
```

### NPM Package

Add this to your dependencies in package.json file

```javascript
pictograph: "git+https://[github_auth_token]:x-oauth-basic@github.com/bukalapak/pictograph
```

Execute

```bash
$ npm install
# or
$ yarn
```

Add these variables on the top-most section of your scss

```scss
$global-component-namespace: "c-"; // IMPORTANT
// note: this path could be different based on your project
// this is an example for nuxt
$pictograph-asset-path-prefix: "~pictograph"; // IMPORTANT

$imported-global-settings: true; // not so important, just to make the warnings go away
```

Then import the scss files

```scss
@import "pictograph"; // for all platforms
@import "pictograph/pictograph"; // desktop
@import "pictograph/pictograph_mweb"; // mweb
@import "pictograph/pictograph_bbm"; // bbm

// note: the path could be different based on your project
// for example if you are using nuxt
@import "~pictograph"; // for all platforms
```


## Contributing Guide

### BL Icons & Stroke Icons
1. Grab the latest `selection.json` file from `vendor/pictograph|pictograph_mweb/typefaces/`.
2. Import the `selection.json` into [IcoMoon](https://icomoon.io/app), preserve the settings.
3. The latest icons collection will be displayed. Upload and select your additional icons, then proceed to Generate Font option.
4. Pay attention to the unicode placement, try to use contiguous unicode spaces with existing icons.
5. Generate and download the files.
6. Push the new icon fonts, bump the version as needed while preserving old versions (to avoid caching issues).
7. Modify the SCSS files accordingly (`vendor/pictograph|pictograph_mweb/stylesheets/1-settings/_settings.icons.scss` and `vendor/pictograph|pictograph_mweb/stylesheets/6-components/_components.icons.scss`), push the new `selection.json` file as well.
8. [Preview your work](#previewing-your-work).
9. In mothership repository, update the gem `bundle update pictograph` to pull in the latest changes. Push the resulting `Gemfile.lock` afterwards.

### Previewing your work
1. Run `npm install`.
2. Run `npm start`.
3. Add the newly added icon to the corresponding template file in `preview/templates/`.
4. Preview is available at `localhost:5555`.

### Generating static preview page
1. Run `npm install`.
2. Run `npm run build`.
3. Your page with all its assets are in `docs/`.

## Contact
UI Engineers

## Caveats
We start BL Icons font characters unicode placement in the ASCII range, as opposed to the Private Use Area (PUA) commonly used by various icon fonts. This is due to cases of foreign characters appearance reported by our users in the past.
