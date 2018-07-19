const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

// Configuration
app.disable('x-powered-by');
app.engine('jade', require('jade').__express);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware
app.use(express.static(path.resolve(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('main', { title: 'Template' });
})

// Start listenning
app.listen(
  app.get('port'), 
  () => console.log(`Server is listenning on localhost:${app.get('port')}`)
);