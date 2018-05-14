import express from "express";
import server from express();
import bodyP from 'body-parser';

server.use(bodyP.urlencoded({ extended: true}));
server.use(express.static(path.join(__dirname, '../client/public')));

server.listen(3333, () => console.log('the server is up and running!'));
