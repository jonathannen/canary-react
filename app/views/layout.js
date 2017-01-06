// (C) Copyright Jon Williams 2015
//

import main from "../main";

var stylesheetPath = main.config.stylesheetPath("app.css");
var javascriptPath = main.config.javascriptPath("app.js");

module.exports = {
    header: `<html>
<head>
<title>Canary React!</title>
<link href='${stylesheetPath}' rel='stylesheet'>
</head>
<body>
<div id='app' class='container'>`,

    footer: `</div><script src='${javascriptPath}' defer>
</script>
</body>
</html>`,
};
