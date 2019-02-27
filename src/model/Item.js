const Datastore = require('react-native-local-mongodb')
db = new Datastore({ filename: 'counterApp', autoload: true })

const getAllItems = (callback) => {
  db.find({}, (err, docs) => {
    if(err) throw err
    callback(docs)
  })
}

const insertItem = (newItem, callback) => {
  db.insert(newItem, (err, newDoc) => {
    if(err) throw err
    callback(newDoc)
  })
}

const updateItemCount = (id, count) => {
  db.update({_id: id}, { $set: {count: count} }, {}, (err, numReplaced) => {
    if (err) throw err
  })
}

const deleteItem = (id) => {
  db.remove({ _id: id }, {}, function (err, numRemoved) {
    if (err) throw err
  })
}

module.exports = {
  getAllItems,
  insertItem,
  updateItemCount,
  deleteItem
}