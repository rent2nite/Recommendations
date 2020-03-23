const db = require('./index.js');

let tempArray = [];

const propInfo = { id: 0 };

for (let i = 0; i < 41; i++) {
  tempArray.push(
    `https://fec-placeholder-photos.s3-us-west-1.amazonaws.com/${i}`
  );
  if (tempArray.length === 4) {
    propInfo.photos = tempArray;
    tempArray = [];
    db.saveProp(propInfo);
    propInfo.id++;
  }
}
