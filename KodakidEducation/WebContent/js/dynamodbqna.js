'use strict';

// Configuring the AWS SDK
var AWS = require('aws-sdk'),
mydocumentClient = new AWS.DynamoDB.DocumentClient();

exports.myHandler = function(event, context, callback){

   
    // Define parameters JSON for retrieving question data from the database
    var thisQuestionsParams = {
        TableName: "DynamoDBQuiz"
    };

    // Create DynamoDB service object
    var request = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});

    // Call DynamoDB to retrieve the question to use
   mydocumentClient.scan(thisQuestionsParams,function(err,data){
       if(err){
           callback(err,null);
       }else{
           callback(null,data.Items);
       }
       });
   }
