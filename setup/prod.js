import helmet from 'helmet';
import compression from 'compression';

function prod(app) {
    app.use(helmet());
    app.use(compression());
}
export default prod;
