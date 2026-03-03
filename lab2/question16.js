function parseURL(url) {
    let urlObj = new URL(url);

    console.log("Protocol:", urlObj.protocol);
    console.log("Host:", urlObj.hostname);
    console.log("Port:", urlObj.port);
    console.log("Path:", urlObj.pathname);
    console.log("Query:", urlObj.search);
}

parseURL("https://www.example.com:8080/path/page?name=John&id=101");

