const React = require('react')

exports.onRenderBody = (
  { setHeadComponents },
  { 
    appId, 
    enableDuringDevelop = true, 
    zESettings = {}
  },
) => {
  if (!enableDuringDevelop && process.env.NODE_ENV === 'development') {
    console.log(
      'enableDuringDevelop is set to false - gatsby-plugin-zendesk-configurable-chat will not load in development mode',
    )
    return null
  }

  if (!appId) {
    console.log(
      'No Zendesk App ID provided! gatsby-plugin-zendesk-configurable-chat will not load. Please add appId in gatsby-config.js',
    )
    return null
  }

  // Yikes, this is awkward. This might also mitigate the risks of dangerous code eval.
  const javascriptString = `
    window.zESettings = JSON.parse('${JSON.stringify(zESettings)}');
  `

  return setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: javascriptString
      }}
     />,
    <script
      id="ze-snippet"
      key="gatsby-plugin-zendesk-configurable-chat"
      src={`https://static.zdassets.com/ekr/snippet.js?key=${appId}`}
    />,
  ])
}
