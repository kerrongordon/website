/*jshint esversion: 6 */ 

var functions = require('firebase-functions');
const gcs = require('@google-cloud/storage')();
const spawn = require('child-process-promise').spawn;

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.generateThumbnail = functions.storage.object().onChange(event => {
// [END generateThumbnailTrigger]
  // [START eventAttributes]
  const object = event.data; // The Storage object.

  const fileBucket = object.bucket; // The Storage bucket that contains the file.
  const filePath = object.name; // File path in the bucket.
  const contentType = object.contentType; // File content type.
  const resourceState = object.resourceState; // The resourceState is 'exists' or 'not_exists' (for file/folder deletions).
  // [END eventAttributes]

  // [START stopConditions]
  // Exit if this is triggered on a file that is not an image.
  if (!contentType.startsWith('image/')) {
    console.log('This is not an image.');
    return;
  }

  // Get the file name.
  const fileName = filePath.split('/').pop();
  // Exit if the image is already a thumbnail.
  if (fileName.startsWith('thumb_')) {
    console.log('Already a Thumbnail.');
    return;
  }

  // Exit if this is a move or deletion event.
  if (resourceState === 'not_exists') {
    console.log('This is a deletion event.');
    return;
  }
  // [END stopConditions]

  // [START thumbnailGeneration]
  // Download file from bucket.
  const bucket = gcs.bucket(fileBucket);
  const tempFilePath = `/tmp/${fileName}`;
  return bucket.file(filePath).download({
    destination: tempFilePath
  }).then(() => {
    console.log('Image downloaded locally to', tempFilePath);
    // Generate a thumbnail using ImageMagick.
    return spawn('convert', [tempFilePath, '-thumbnail', '200x200>', tempFilePath]).then(() => {
      console.log('Thumbnail created at', tempFilePath);
      // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
      const thumbFilePath = filePath.replace(/(\/)?([^\/]*)$/, `$1thumb_$2`);
      // Uploading the thumbnail.
      return bucket.upload(tempFilePath, {
        destination: thumbFilePath
      });
    });
  });
  // [END thumbnailGeneration]
});
// [END generateThumbnail]