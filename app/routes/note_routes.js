// var ObjectID = require('mongodb').ObjectID;

// module.exports = function(app, db) {
// };

// module.exports = function(app, db) {
//   app.post('/notes', (req, res) => {
//     // You'll create your note here.
//     res.send('Hello')
//   });
// };

// module.exports = function(app, db) {
//   app.post('/notes', (req, res) => {
//     console.log(req.body)
//     res.send('Hello')

// module.exports = function(app, db) {
// 	app.get('/notes/:id', (req, res) => {
// 		const id = req.params.id;

//     	const details = { '_id': new ObjectID(id) };
//     	db.collection('notes').findOne(details, (err, item) => {
//       		if (err) {
//         		res.send({'error':'An error has occurred'});
//       				} else {
//         				res.send(item);
//       }
//     });
//   });

//   const collection = 
//   app.post('/notes', (req, res) => {
//     const note = { text: req.body.body, title: req.body.title };
//     db.collection('notes').insert(note, (err, result) => {
//       if (err) { 
//         res.send({ 'error': 'An error has occurred' }); 
//       } else {
//         res.send(result.ops[0]);
//       }
//     });

//   });
// };