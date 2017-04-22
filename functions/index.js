/*jshint esversion: 6 */ 
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const gcs = require('@google-cloud/storage')();
const spawn = require('child-process-promise').spawn;
const base64Img = require('base64-img');

admin.initializeApp(functions.config().firebase);

// exports.resizeImage = functions.storage.object().onChange(event => {
//   const object = event.data;
//   const fileBucket = object.bucket;
//   const filePath = object.name;
//   const contentType = object.contentType;
//   const resourceState = object.resourceState;

//   if (!contentType.startsWith('image/')) {
//     console.log('This is not an image.');
//     return;
//   }

//   const fileName = filePath.split('/').pop();
//   if (fileName.startsWith('thumb_')) {
//     console.log('Already a Thumbnail.');
//     return;
//   }

//   if (resourceState === 'not_exists') {
//     console.log('This is a deletion event.');
//     return;
//   }

//   if (!filePath.includes('desktop/')) {
//     console.log('you are thumbnail object', object);
//     generateThumbnail(fileBucket, fileName, filePath, '300x300>', 'thumbnailSmall');
//     return;
//   }

//   if (!filePath.includes('thumbnail/')) {
//     console.log('you are desktop object', object);
//     generateThumbnail(fileBucket, fileName, filePath, '1200x1200>', 'desktopBig');
//     return;
//   }
  
// });

// function generateThumbnail(fileBucket, fileName, filePath, imageSize, type) {
//   const bucket = gcs.bucket(fileBucket);
//   const tempFilePath = `/tmp/${fileName}`;
//   return bucket.file(filePath).download({
//     destination: tempFilePath
//   }).then(() => {
//     console.log('L50 Image downloaded locally to', tempFilePath);
//     return spawn('convert', [tempFilePath, '-thumbnail', imageSize, tempFilePath]).then(() => {
//       console.log('L52 Thumbnail created at', tempFilePath);
//       const thumbFilePath = filePath.replace(/(\/)?([^\/]*)$/, `$1thumb_$2`);
//       return bucket.upload(tempFilePath, {
//         destination: thumbFilePath
//       }).then(() => {
//         return functions.database.ref('/portfolios/{portfolioId}')
//           .onWrite(event => {
//             var portfolio = event.data.val();
//             console.log('L63 thumbFilePath ', thumbFilePath);
//             console.log('L64 thumbFilePath ');
//             portfolio.type = 'I am a Push Do database';
//             return event.data.ref.push(portfolio);
//         });
//       });
//     });
//   });
// }


