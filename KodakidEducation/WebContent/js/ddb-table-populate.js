
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var myTable = 'AWSQuiz';

var params = { 
  TableName: myTable,
  Item: {
	    'qnum' : {N: '0'},
	    'question': {S: 'Under the shared responsibility model, which of the following is the customer responsible for?'},
	    'choices': {L : [{S:" Ensuring that disk drives are wiped after use."}, {S:"Ensuring that firmware is updated on hardware devices."}, {S:"Ensuring that data is encrypted at rest."}, {S:"Ensuring that network cables are category six or higher."}]},
	    'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '1'}, 
	     'question': {S: 'The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?'},
	     'choices': {L : [{S:"Cost allocation tags"},{S:"Consolidated billing"},{S:"AWS Budgets"},{S:" AWS Marketplace"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '2'}, 
	     'question': {S: 'Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?'},
	     'choices': {L : [{S:"Amazon Glacier"}, {S:"AWS Storage Gateway"}, {S:"Amazon S3"}, {S:"Amazon EBS"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '3'}, 
	     'question': {S: 'What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?'},
	     'choices': {L : [{S:"AWS Enterprise Support"}, {S:"AWS Solutions Architects"}, {S:"AWS Professional Services"},{S:"AWS Account Managers"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '4'}, 
	     'question': {S: 'A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?'},
	     'choices': {L : [{S:"AWS Partner Network Technology Partners"},{S:"AWS Marketplace"},{S:"AWS Partner Network Consulting Partners"},{S:"AWS Service Catalog"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '5'}, 
	     'question': {S: 'Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?'},
	     'choices': {L : [{S:"Implement automation."},{S:"Design for agility."},{S:"Design for failure."},{S:"Implement elasticity."}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '6'}, 
	     'question': {S: 'Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?'},
	     'choices': {L : [{S:"AWS Cost Explorer"},{S:"AWS Trusted Advisor"},{S:"Consolidated billing"},{S:"Detailed billing"}]},
	     'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '7'}, 
	     'question': {S: 'Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?'},
	     'choices': {L : [{S:"Spot Instances"},{S:"Reserved Instances"},{S:"Dedicated Hosts"},{S:"On-Demand Instances"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '8'}, 
	     'question': {S: 'Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?'},
	     'choices': {L : [{S:"Amazon CloudWatch"},{S:"AWS CloudTrail"},{S:"AWS Config"},{S:"AWS Health"}]},
	     'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '9'}, 
	     'question': {S: 'What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?'},
	     'choices': {L : [{S:"Project management"},{S:"Antivirus software licensing"},{S:"Data center security"},{S:"Software development"}]},
	     'correctAnswer': {N : '0'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '10'}, 
	     'question': {S: 'A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?'},
	     'choices': {L : [{S:"Amazon Redshift"},{S:"Amazon DynamoDB"},{S:"Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store"},{S:"Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)"}]},
	     'correctAnswer': {N : '0'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '11'}, 
	     'question': {S: 'Which of the following is a correct relationship between regions, Availability Zones, and edge locations?'},
	     'choices': {L : [{S:"Data centers contain regions"},{S:"Regions contain Availability Zones."},{S:"Availability Zones contain edge locations"},{S:"Edge locations contain regions."}]},
	     'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '12'}, 
	     'question': {S: 'Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?'},
	     'choices': {L : [{S:"One-year, No Upfront, Standard RI pricing"},{S:"One-year, All Upfront, Convertible RI pricing"},{S:"Three-year, All Upfront, Standard RI pricing"},{S:"Three-year, No Upfront, Convertible RI pricing"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '13'}, 
	     'question': {S: 'Where are AWS compliance documents, such as an SOC 1 report, located?'},
	     'choices': {L : [{S:"Amazon Inspector"},{S:"AWS CloudTrail"},{S:"AWS Artifact"},{S:"AWS Certificate Manager"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '14'}, 
	     'question': {S: 'Compared with costs in traditional and virtualized data centers, AWS has:'},
	     'choices': {L : [{S:"greater variable costs and greater upfront costs."},{S:"fixed usage costs and lower upfront costs."},{S:"lower variable costs and greater upfront costs."},{S:"lower variable costs and lower upfront costs."}]},
	     'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '15'}, 
	     'question': {S: 'Which is a recommended pattern for designing a highly available architecture on AWS?'},
	     'choices': {L : [{S:"Ensure that components have low-latency network connectivity."},{S:"Run enough Amazon EC2 instances to operate at peak load."},{S:"Ensure that the application is designed to accommodate failure of any single component."},{S:"Use a monolithic application that handles all operations."}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '16'}, 
	     'question': {S: 'A characteristic of edge locations is that they:'},
	     'choices': {L : [{S:"host Amazon EC2 instances closer to users."},{S:"help lower latency and improve performance for users."},{S:"cache frequently changing data without reaching the origin server."},{S:"refresh data changes daily."}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '17'}, 
	     'question': {S: 'According to best practices, how should an application be designed to run in the AWS Cloud?'},
	     'choices': {L : [{S:"Use tighly coupled components."},{S:"Use loosely coupled components."},{S:"Use infrequently coupled components."},{S:"Use frequently coupled components."}]},
	     'correctAnswer': {N : '1'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '18'}, 
	     'question': {S: 'Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?'},
	     'choices': {L : [{S:"A public and private key-pair"},{S:"Amazon Inspector"},{S:"AWS Identity and Access Management (IAM) policies"},{S:"Security Groups"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '19'}, 
	     'question': {S: 'What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?'},
	     'choices': {L : [{S:"It simplifies relational database administration tasks."},{S:"It provides 99.99999999999% reliability and durability."},{S:"It automatically scales databases for loads."},{S:"It enabled users to dynamically adjust CPU and RAM resources."}]},
	     'correctAnswer': {N : '0'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '20'}, 
	     'question': {S: 'Which of the following security-related actions are available at no cost?'},
	     'choices': {L : [{S:"Calling AWS Support"},{S:"Contacting AWS Professional Services to request a workshop"},{S:"Accessing forums, blogs, and whitepapers"},{S:"Attending AWS classes at a local university"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '21'}, 
	     'question': {S: 'A customer needs to run a MySQL database that easily scales.  Which AWS service should they use?'},
	     'choices': {L : [{S:"Amazon Aurora"},{S:"Amazon Redshift"},{S:"Amazon DynamoDB"},{S:"Amazon ElastiCache"}]},
	     'correctAnswer': {N : '0'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '22'}, 
	     'question': {S: 'Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?'},
	     'choices': {L : [{S:"Dedicated RIs"},{S:"Scheduled RIs"},{S:"Convertible RIs"},{S:"Standard RIs"}]},
	     'correctAnswer': {N : '2'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '23'}, 
	     'question': {S: 'Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?'},
	     'choices': {L : [{S:"Availability Zone"},{S:"Edge location"},{S:"Region"},{S:"Private networking"}]},
	     'correctAnswer': {N : '0'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '24'}, 
	     'question': {S: 'Which AWS feature will reduce the customer\'s total cost of ownership (TCO)?'},
	     'choices': {L : [{S:"Shared responsibility security model"},{S:"Single tenancy"},{S:"Elastic computing"},{S:"Encryption"}]},
	     'correctAnswer': {N : '0'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'qnum' : {N: '25'}, 
	     'question': {S: 'Which of the following services will automatically scale with an expected increase in web traffic?'},
	     'choices': {L : [{S:"AWS CodePipeline"},{S:"Elastic Load Balancing"},{S:"Amazon EBS"},{S:"AWS Direct Connect"}]},
	     'correctAnswer': {N : '1'}
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
