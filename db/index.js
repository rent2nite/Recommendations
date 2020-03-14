const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FECplaceholder');

const recommendationSchema = mongoose.Schema({
  _id: Number,
  location: String,
  photos: Array
});

const Property = mongoose.model('Property', recommendationSchema);

const saveProp = (propInfo, callback) => {
  let property = new Property();
  property._id = propInfo.id;
  property.location = propInfo.location;
  property.photos = propInfo.photos;
  property.save((err) => {
    if (err) {
      console.log('err saving into db', err);
    } else {
      console.log('successfully saved');
    }
  });
};
