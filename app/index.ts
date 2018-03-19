import App from './App';

const port = Number.parseInt(process.env.PORT) || 30300;
const app = new App(port);
app.run((err: Error) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`server is listening on ${port}`);
});
