
let URL = '';

switch (process.env.ENV) {
    case "local":
        URL = 'http://localhost/agnos.io'
        break;
    case "preProd":
        URL = 'https://preprod.agnos.io/'
        break;
    case "prod":
        URL = 'https://www.agnos.io/'
        break;
    case "qa":
        URL = 'https://qa.agnos.io/'
        break;
    case "dev":
        URL = 'https://dev.agnos.io/'
        break;
    default:
        URL = '';
}

export default {
    BASE_URL: URL
}