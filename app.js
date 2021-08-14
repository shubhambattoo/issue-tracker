const express = require('express');

const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(express.json({ limit: '10kb' }));

app.use('/api/issues', require('./routes/issueRoutes'));

// Will show 404 if no route found
app.use('*', (req, res, next) => {
  return next(new AppError('Not Found', 404));
});

app.use(globalErrorHandler);

module.exports = app;
