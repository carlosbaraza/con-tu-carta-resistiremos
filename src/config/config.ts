export let API_URL: string;
switch (window.location.hostname) {
  case "localhost":
    API_URL = "http://localhost:3001";
    break;
  case "con-tu-carta-resistiremos.com":
    API_URL = "https://api.con-tu-carta-resistiremos.com";
    break;
}
