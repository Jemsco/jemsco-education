
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
AWS.config.loadFromPath('./config.json');

// Create the IAM service object
var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});


var params = {
  Code: { /* required */
    S3Bucket: 'jaysawsquiz',
    S3Key: 'dynamodbqna.js.zip'
  },
  FunctionName: 'dynamodbqna', /* required */
  Handler: 'dynamodbqna.myHandler', /* required */
  Role: 'arn:aws:iam::922954050442:role/SlotsRole', /* required */
  Runtime: 'nodejs12.x', /* required */
  Description: 'AWS quiz',
};
lambda.createFunction(params, function(err, data) {
  if (err) console.log(err); // an error occurred
  else     console.log(data);           // successful response
});
