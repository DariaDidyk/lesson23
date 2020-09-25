// const { request } = require("http");
// console.log('Hello world');

const http = require("http");
const {read, write} = require("./utils");

// console.log(newData);

const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
    switch (request.url) {
        case "/add":
            const massages = read("massages");

            const newData = [
                ...massages,
                {
                    id: massages[massages.length - 1].id + 1,
                    name: "No-name",
                },
            ];
            write("massages", newData);
            break;
    }        
    response.end(JSON.stringify(read("massages")));
});

server.listen(port, hostname, () => {
    console.log(`Server is listening ${hostname} : ${port}`)
});

// const db = JSON.parse(
//     fs.readFileSync("./massages.json", {
//         encoding: "utf-8",
//     })
// );  
// fs.writeFileSync('./massages.json', JSON.stringify(newData));