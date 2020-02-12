# gatsby-plugin-zendesk-configurable-chat

Easily add a [Zendesk chat widget](https://www.zendesk.com/chat/) to a Gatsby site.

## Install

`npm install --save gatsby-plugin-zendesk-configurable-chat`

## How to Use

You'll need a Zendesk account to use this plugin - sign up at [https://www.zendesk.com/register/](https://www.zendesk.com/register/).

When you open the chat dashboard you will see a welcome popup; click through to the "Embed widget" step. Here you will see a script to embed the widget that contains your key:

```js
<!-- Start of  Zendesk Widget script -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=<appId>"> </script>
<!-- End of  Zendesk Widget script -->
```

The string of characters after `key=` is your Zendesk app ID.

You can also access the embed script by clicking Settings -> Widget in the left-hand menu of the chat dashboard.

In `gatsby-config.js` configure the plugin with your app ID:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-zendesk-configurable-chat',
      options: {
        appId: 'your-zendesk-app-id',
        enableDuringDevelop: false, // Optional. Disables Zendesk chat widget when running Gatsby dev server. Defaults to true.
        zESettings: {} // zESettings object on page load: https://developer.zendesk.com/embeddables/docs/widget/chat
      },
    },
  ],
}
```

Restart your Gatsby server for the plugin to take effect.

## Acknowledgements

Modified from [gatsby-plugin-zendesk-chat](https://github.com/garethpbk/gatsby-plugin-zendesk-chat)
