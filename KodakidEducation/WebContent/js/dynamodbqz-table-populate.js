
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var myTable = 'DynamoDBQuiz';

var params = { 
  TableName: myTable,
  Item: {
	    'qnum' : {N: '0'},
	    'question': {S: 'What is DynamoDB?'},
	    'choices': {L : [{S:" A fast and predictable fully managed NoSQL database."}, {S:"A database based on multiple tiles with varying numerical representation."}, 
	    	{S:"An old database that is no longer used."}, {S:"A MySQL and PostgresSQL compatible relational database."}]},
	    'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '1'}, 
	     'question': {S: 'What are the core components of DynamoDB?'},
	     'choices': {L : [{S:"Memory and Data"},{S:"Seeds and Stems"},{S:"Tables, Items and Attributes"},{S:"Rows and Columns"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '2'}, 
	     'question': {S: 'What distinguishes an item in a DynamoDB table?'},
	     'choices': {L : [{S:"Primary Value"}, {S:"AWS Storage Key"}, {S:"Primary Key"}, {S:"Spare Key"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '3'}, 
	     'question': {S: 'Other than the Primary Key, what else needs to be defined beforehand in a DynamoDB table?'},
	     'choices': {L : [{S:"Only Attributes"}, {S:"Only Datatypes"}, {S:"Nothing"},{S:"Attributes and Datatypes"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '4'}, 
	     'question': {S: 'What types of Primary Keys does DynamoDB support?'},
	     'choices': {L : [{S:"Practical Key and Complimentary Key"},{S:"Portable Key and Cosmetic Key"},
	    	 {S:"Initial Key and Secondary Key"},{S:"Partition Key and Composite Key"}]},
	     'correctAnswer': {N : '3'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '5'}, 
	     'question': {S: 'Can DynamoDB attributes be nested?'},
	     'choices': {L : [{S:"No, nested attributes are not supported"},{S:"Yes, to 32 levels."},{S:"Only in Dynamic DynamoDB tables."},{S:"Yes, But only in indexes"}]},
	     'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '6'}, 
	     'question': {S: 'Can two items in a DynamoDB table have the same partition key?'},
	     'choices': {L : [{S:"No"},{S:"Yes, using the Primary Key"},{S:"Yes, using a Composite Key"},{S:"DynamoDB does not have partition keys"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '7'}, 
	     'question': {S: 'How does DynamoDB use the partition key?'},
	     'choices': {L : [{S:"To unlock data"},{S:"To separate tables"},{S:"As input to an internal hash function"},{S:"To hash out non-unique attributes"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '8'}, 
	     'question': {S: 'What is a composite key in DynamoDB?'},
	     'choices': {L : [{S:"A secondary key"},{S:"A partition key and sort key"},{S:"AWS Config key"},{S:"A sort key and secondary sort key"}]},
	     'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '9'}, 
	     'question': {S: 'A partition key of an item is also known as its __?'},
	     'choices': {L : [{S:"Hash attribute"},{S:"Main key"},{S:"Secondary key"},{S:"Local key"}]},
	     'correctAnswer': {N : '0'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '10'}, 
	     'question': {S: 'The sort key of an item is also known as its __?'},
	     'choices': {L : [{S:"Range attribute"},{S:"Range finder"},{S:"Location attribute"},{S:"Home on the range"}]},
	     'correctAnswer': {N : '0'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '11'}, 
	     'question': {S: 'What types of indexes does DynamoDB support?'},
	     'choices': {L : [{S:"Partition indexes and table indexes"},{S:"Global Secondary and Local Secondary"},
	    	 {S:"Clustered and non clustered"},{S:"None"}]},
	     'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '12'}, 
	     'question': {S: 'How do you maintain an index in a DynamoDB table?'},
	     'choices': {L : [{S:"Manually"},{S:"With weekly updates"},{S:"Indexes are maintained automatically"},{S:"At table creation only"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '13'}, 
	     'question': {S: 'What is a secondary index in a DynamoDB table?'},
	     'choices': {L : [{S:"A second primary key index"},{S:"A non-unique value for attributes"},{S:"AWS Artifact"},{S:"A data structure with a subset of attributes"}]},
	     'correctAnswer': {N : '3'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '14'}, 
	     'question': {S: 'What is a DynamoDB stream?'},
	     'choices': {L : [{S:"A continuous list of data."},{S:"An item level change record."},{S:"A duplicate of a table for filtering."},{S:"A unique row of data."}]},
	     'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '15'}, 
	     'question': {S: 'What are DynamoDB read and write capacities?'},
	     'choices': {L : [{S:"The total amount of data a table can hold"},{S:"The total number of reads and writes a table can perform."},
	    	 {S:"The amount of read and write activity a table can support."},{S:"An internal value for AWS admins."}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '16'}, 
	     'question': {S: 'What are two ways to get data from a DynamoDB table?'},
	     'choices': {L : [{S:"Performing a scan or query."},{S:"Manual and automated."},{S:"Cached and on demand."},{S:"Performing simple or complex calls."}]},
	     'correctAnswer': {N : '0'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '17'}, 
	     'question': {S: 'What data types does DynamoDB support?'},
	     'choices': {L : [{S:"Blobs, Clobs and characters."},{S:"Number, String, Binary, Boolean."},{S:"Varchar, Integer and images."},{S:"Any type."}]},
	     'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '18'}, 
	     'question': {S: 'What are DynamoDB projections?'},
	     'choices': {L : [{S:"To be the defacto database used globally"},{S:"A set of values used for internal storage"},
	    	 {S:"A set of table values copied to an index"},{S:"Security Groups"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '19'}, 
	     'question': {S: 'What is one of the advantages of DynamoDB?'},
	     'choices': {L : [{S:"High throughput and very low latency."},{S:"It's an alternative to relational databases."},
	    	 {S:"It automatically loads, updates and deletes data for you."},{S:"It enables users to dynamically adjust CPU and RAM resources."}]},
	     'correctAnswer': {N : '0'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '20'}, 
	     'question': {S: 'How can you get faster response times in DynamoDB?'},
	     'choices': {L : [{S:"Calling AWS Support"},{S:"Using MAX, Multi Access Accelerator"},{S:"Using DAX, DynamoDB Accelerator"},{S:"Attending AWS classes at a local university"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();


function post () {
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}
