import * as mongoose from 'mongoose';
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as morgan from 'morgan';
import * as errorHandler from 'errorhandler';
import * as bodyParser from 'body-parser';
import { printSchema } from 'graphql/utilities/schemaPrinter';
import * as cors from 'cors';

import { config } from './config';
import { graphqlSchema } from './schema';

// Use node like promise for mongoose
(mongoose as any).Promise = global.Promise;

// Main App
const app = express();

// Setup MongoDb connection
mongoose.connect(config.MONGODB_CONNECTION_URI, { useMongoClient: true });

// Express morgan logs
app.use(morgan('combined'));
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.text({ type: 'application/graphql' }));

// Parse application/json
app.use(bodyParser.json());

app.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
app.use(/\/((?!graphql).)*/, bodyParser.json());

app.use('/graphql',
    graphqlHTTP(() => {
        return {
            schema: graphqlSchema,
            graphiql: true,
        };
    })
);

app.use('/schema',
    (req, res) => {
        res.set('Content-Type', 'text/plain');
        res.send(printSchema(graphqlSchema));
    }
);

app.use(errorHandler());

app.listen(config.PORT, '0.0.0.0');

console.log(`Server started on http://localhost:${config.PORT}/`);
