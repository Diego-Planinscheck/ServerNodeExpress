const express = require("express");
const server = express();

const listPeople = [
    { id: 1, name: "Diego", surname: "Planinscheck" },
    { id: 2, name: "Gabriel", surname: "Rocha" },
    { id: 3, name: "Arthur", surname: "Schmitz" },
    { id: 4, name: "Leonardo", surname: "Rafaelli" },
];

server.use(express.json());

server.get("/api/people", (req, res) => {
    res.json(listPeople);
});

server.get("/api/people/:id", (req, res) => {
    const id = req.params.id;
    const person = listPeople.find(e => e.id == id);
    res.json(person);
});

server.post("/api/people", (req, res) => {
    const data = req.body;
    data.id = listPeople.length + 1;
    listPeople.push(data);
    res.json(listPeople);
});

server.patch("/api/people/:id", (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const index = listPeople.findIndex(e => e.id == id);
    data.id = id;
    listPeople[index] = data;
    res.json(listPeople);
});

server.delete("/api/people/:id", (req, res) => {
    const id = req.params.id;
    const personToDelete = listPeople.findIndex(e => e.id == id)
    listPeople.splice(personToDelete, 1);
    res.json(listPeople);
});

server.get("/", (req, res) => {
    res.json({ "message": "Server success!" })
});

server.listen(8080, () => {
    console.log(`Server started on port 8080`);
});