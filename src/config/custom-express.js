import express from 'express';
import { json, urlencoded } from 'body-parser';
import shops from '../routes/shops';

const app = express();
const port = 3000;

app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

shops(app);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

export default app;