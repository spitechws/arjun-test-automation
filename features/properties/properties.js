
let URL = '';

switch (process.env.ENV) {
    case "local":
        URL = 'https://localhost/agnos.io'
        break;
    case "live":
        URL = 'https://www.agnos.io/'
        break;
    default:
        URL = '';
}

export default {
    BASE_URL: URL
}