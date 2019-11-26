import serialize from 'serialize-javascript';

export const renderHeader = () => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="shortcut icon" href="//cdn.shopify.com/s/files/1/1251/6841/t/2/assets/favicon.png?297750183291320118" type="image/png">
      <link rel="stylesheet" type="text/css" href="assets/stylesheet.css">
      <title>CAMX A4 CROSSBOW is the quietest crossbow that delivers the smoothest shooting experience. The CAMX A4 shoots at 370 FPS and is hyper-accurate out of the box.</title>
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-37316639-13', 'auto');
        ga('send', 'pageview');
      </script>
    </head>
    <body>
      <div id="root">
`;

export const renderFooter = (loadableState, preloadedState) => `
  </div>
  <script>
    window.__PRELOADED_STATE__ = ${serialize(preloadedState).replace(/</g, '\\u003c')}
  </script>
  <script src="/assets/vendor.js"></script>
  <script src="/assets/client.js"></script>
  ${loadableState.getScriptTag()}
`;
