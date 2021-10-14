
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var myTable = 'AWSQuiz2';

//var params = { 
//  TableName: myTable,
//  Item: {
//	    'qnum' : {N: '0'},
//	    'question': {S: 'Which of the following services allow you to run your application when needed, without having to provision servers all the time?'},
//	    'choices': {L : [{S:"AWS EC2 instances"}, {S:"AWS Lambda"}, {S:"AWS LightSail"}, {S:"AWS RDS instances"}]},
//	    'correctAnswer': {N : '1'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '1'}, 
//	     'question': {S: 'What does Amazon ElastiCache provide?'},
//	     'choices': {L : [{S:"A service with taht name doesn't exist"},{S:"A virtual server with a huge amount of memory"},{S:"Manage in-memory cache service"},{S:"An Amazon EC2 instance with the Memcached software already pre-installed"}]},
//	     'correctAnswer': {N : '2'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '2'}, 
//	     'question': {S: 'You have decided to pay a low upfront fee in order to get a significantly discounted hourly rate. What payment model are you planning to use?'},
//	     'choices': {L : [{S:"A pay as you go"}, {S:"Save when you reserve"}, {S:"Pay less as AWS grows"}, {S:"Pay less by using more"}]},
//	     'correctAnswer': {N : '1'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '3'}, 
//	     'question': {S:'There is a need to automate the creation of sandbox accounts for developers and granting entities in those accounts access only to the necessary AWS services. Which of the following services would help?'},
//	     'choices': {L : [{S:"AWS Organizations"}, {S:"Amazon Dev pay"}, {S:"AWS Trusted Advisor"},{S:"AWS Cost Explorer"}]},
//	     'correctAnswer': {N : '0'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '4'}, 
//	     'question': {S: 'What is the feature provided by AWS that enables fast and secure transfer of files over long distances between your client and your Amazon S3 bucket?'},
//	     'choices': {L : [{S:"Snowball"},{S:"HTTP Snowball Transfer"},{S:"Transfer Acceleration"},{S:"File transfer Accelerator"}]},
//	     'correctAnswer': {N : '2'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '5'}, 
//	     'question': {S: 'A company currently uses VM Templates to spin up virtual machines on their on-premise infrastructure. Which of the following can be used in a similar way to spin up EC2 instances on the AWS Cloud?'},
//	     'choices': {L : [{S:"EBS Volumes"},{S:"Amazon Machine Images"},{S:"EBS Snapshots"},{S:"Amazon VMWare"}]},
//	     'correctAnswer': {N : '1'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '6'}, 
//	     'question': {S: 'Which of the following AWS security features is associated with a subnet in a VPC and functions to filter incoming traffic requests?'},
//	     'choices': {L : [{S:"AWS Inspector"},{S:"Subnet Groups"},{S:"NACL"},{S:"Security Groups"}]},
//	     'correctAnswer': {N : '2'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '7'}, 
//	     'question': {S: 'Which of the following AWS Cloud services is designed with native Multi-AZ fault tolerance in mind? '},
//	     'choices': {L : [{S:"Amazon DynamoDB"},{S:"Amazon ElastiCache"},{S:"Elastic Load Balancing"},{S:"Amazon Virtual Private Cloud"}]},
//	     'correctAnswer': {N : '0'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '8'}, 
//	     'question': {S: 'Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities?'},
//	     'choices': {L : [{S:"Managing the database settings"},{S:"Installing the database software"},{S:"Performing backups"},{S:"Patching the database software"}]},
//	     'correctAnswer': {N : '0'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '9'}, 
//	     'question': {S: 'Which Cloud Computing model removes the need for your organization to manage operating systems?'},
//	     'choices': {L : [{S:"LaaS"},{S:"PaaS"},{S:"SaaS"},{S:"GaaS"}]},
//	     'correctAnswer': {N : '0'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '10'}, 
//	     'question': {S: 'What does S3 stand for?'},
//	     'choices': {L : [{S:"Simple Storage Service"},{S:"Simplified Storage Service"},{S:"Simple Store Service"},{S:"Service for Simple Storage)"}]},
//	     'correctAnswer': {N : '0'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '11'}, 
//	     'question': {S: 'Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?'},
//	     'choices': {L : [{S:"Amazon Aurora"},{S:"IAM"},{S:"AWS WAF"},{S:"Amazon Cognito"}]},
//	     'correctAnswer': {N : '2'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '12'}, 
//	     'question': {S: 'Under the Shared Responsibility Model, which of the following are controls which a customer fully inherits from AWS?'},
//	     'choices': {L : [{S:"Environmental Cognito"},{S:"Patch management controls"},{S:"Database control"},{S:"Physical control"}]},
//	     'correctAnswer': {N : '3'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '13'}, 
//	     'question': {S: 'Which of the following aspects of security are managed by AWS? '},
//	     'choices': {L : [{S:"Securing global physical infrastructure"},{S:"VPC security"},{S:"Encryption of EBS volumes"},{S:"Access permissions"}]},
//	     'correctAnswer': {N : '0'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '14'}, 
//	     'question': {S: 'Barry is working with a large data set, and he needs to import it into a relational database service. What AWS service will meet his needs?'},
//	     'choices': {L : [{S:"RDS"},{S:"DynamoDB"},{S:"ElastiCache"},{S:"Neptune"}]},
//	     'correctAnswer': {N : '0'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '15'}, 
//	     'question': {S: 'Which of the following is NOT a feature of an edge location?'},
//	     'choices': {L : [{S:"Distributes content to users"},{S:"Cache common responses"},{S:"Distributes load across multiple resources"},{S:"Used in conjunction with the cloudfront service"}]},
//	     'correctAnswer': {N : '2'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '16'}, 
//	     'question': {S: 'An organization runs many systems and uses many AWS products. Which of the following services allow them to control how each developer interacts with these products?'},
//	     'choices': {L : [{S:"Amazon RDS"},{S:"Network Acces Control Lists"},{S:"AWS Identity and Access Management"},{S:"Amazon EMR"}]},
//	     'correctAnswer': {N : '2'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '17'}, 
//	     'question': {S: 'Which service allows the customer to retain full administrative privileges of the underlying virtual infrastructure?'},
//	     'choices': {L : [{S:"Amazon DynamoDB"},{S:"Amazon RDS"},{S:"Amazon Redshift"},{S:"Amazon EC2"}]},
//	     'correctAnswer': {N : '1'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '18'}, 
//	     'question': {S: 'Which of the following features of RDS allows for data redundancy across regions and improves disaster recovery?'},
//	     'choices': {L : [{S:"Multi-region replication"},{S:"Multi AZ"},{S:"Creating Write Replicas"},{S:"Creating Read Replicas"}]},
//	     'correctAnswer': {N : '3'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '19'}, 
//	     'question': {S: 'Which of the following is one of the benefits of AWS Security?'},
//	     'choices': {L : [{S:"Free for AWS premium members"},{S:"Starts automatically once you upload your data"},{S:"Scales quickly"},{S:"None of the above"}]},
//	     'correctAnswer': {N : '2'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '20'}, 
//	     'question': {S: 'Which of the following services allows you to run containerized applications on a cluster of EC2 instances?'},
//	     'choices': {L : [{S:"Amazon Elastic Container Service"},{S:"Amazon Elastic Docker Service"},{S:"Amazon Elastic Compute Service"},{S:"AWS Docker Manager"}]},
//	     'correctAnswer': {N : '0'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '21'}, 
//	     'question': {S: 'What information is required to calculate the Total Cost of Ownership for the AWS Cloud?'},
//	     'choices': {L : [{S:"The number of end users you are currently serving"},{S:"The number of on-premise applications"},{S:"The number of active databases"},{S:"The number of non-premise virtual machines"}]},
//	     'correctAnswer': {N : '3'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '22'}, 
//	     'question': {S: 'What services/features are required to maintain a highly available and fault-tolerant architecture in AWS?'},
//	     'choices': {L : [{S:"Elastic Load Balancer"},{S:"CloudFormation"},{S:"AWS NACL"},{S:"ElastiCache"}]},
//	     'correctAnswer': {N : '0'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '23'}, 
//	     'question': {S: 'A company is hosting a web application in the AWS Cloud using a set of EC2 instances. Which of the following can help to protect them from DDoS attacks?'},
//	     'choices': {L : [{S:"Useing CloudHSM"},{S:"Using Network Access Control Lists"},{S:"Using the Internet Gateway"},{S:"Using AWS Batch"}]},
//	     'correctAnswer': {N : '1'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '24'}, 
//	     'question': {S: 'There is a need to analyze and process a large number of data sets. Which of the following services can help fulfill this requirement?'},
//	     'choices': {L : [{S:"S3"},{S:"EMR"},{S:"Glacier"},{S:"Storage Gateway"}]},
//	     'correctAnswer': {N : '1'}
//  }
//};
//post();
//
//var params = {
//  TableName: myTable,
//  Item: {'qnum' : {N: '25'}, 
//	     'question': {S: 'Sharon is managing a web application running on the AWS Cloud. The application is currently utilizing eight EC2 servers for its computing platform. Earlier today, two of those web servers crashed; however, none of her customers were affected. What has Sharon done correctly in this scenario?'},
//	     'choices': {L : [{S:"She has properly built an elastic system"},{S:"She has properly built a scalable system"},{S:"She has properly built a fault tolerant system"},{S:"None of the above"}]},
//	     'correctAnswer': {N : '2'}
//  }
//};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '26'}, 
//			     'question': {S: 'A company created a solution that will help AWS customers improve their architecture on AWS. Which AWS program may support this company?'},
//			     'choices': {L : [{S:"APN Consulting partners"},{S:"APN RTechnology Partners"},{S:"AWS Professional Service"},{S:"AWS TAM"}]},
//			     'correctAnswer': {N : '0'}
//		  }
//		};
//post();

var params = {
		  TableName: myTable,
		  Item: {'qnum' : {N: '27'}, 
			     'question': {S: 'AWS provides a storage option known as Amazon Glacier, which is designed for____________'},
			     'choices': {L : [{S:"Cached session data"},{S:"Long-term analytics"},{S:"Active database storage"},{S:"EBS storage"}]},
			     'correctAnswer': {N : '1'}
		  }
		};
post();

//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '28'}, 
//			     'question': {S: 'Which of the following can be used to automate the management of multiple AWS services through scripts?'},
//			     'choices': {L : [{S:"AWS Service Catalog"},{S:"AWS Opsworks"},{S:"AWS CLI"},{S:"AWS Console"}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();

var params = {
		  TableName: myTable,
		  Item: {'qnum' : {N: '29'}, 
			     'question': {S: 'You have developed a microservices-based application. Which of the following should you use to make sure that each EC2 instance in the system gets the same amount of traffic?'},
			     'choices': {L : [{S:"Network Load Balancer"},{S:"Auto Scaling"},{S:"Amazon EC2 Auto Recovery "},{S:"Application Load Balancer"}]},
			     'correctAnswer': {N : '3'}
		  }
		};
post();

//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '30'}, 
//			     'question': {S: 'Which AWS network feature can establish a private network connection between AWS and your datacenter?'},
//			     'choices': {L : [{S:"AWS Snowball"},{S:"Amazon CloudFront"},{S:"AWS Route 53"},{S:"AWS Direct Connect"}]},
//			     'correctAnswer': {N : '3'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '31'}, 
//			     'question': {S: 'Which service analyzes EC2 Instances against predefined security templates to check for vulnerabilities?'},
//			     'choices': {L : [{S:"AWS Trusted Advisor"},{S:"AWS Inspector"},{S:"AWS WAF"},{S:"AWS Shield"}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '32'}, 
//			     'question': {S: 'Your company is trying to deploy a two-tier, highly available web application to AWS. The application needs a storage layer to store artifacts such as photos and videos. Which of the following services can best be used as the underlying storage mechanism?'},
//			     'choices': {L : [{S:"Amazon EBS volume"},{S:"Amazon EC2 instance store"},{S:"Amazon S3"},{S:"Amazon RDS instance"}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '33'}, 
//			     'question': {S: 'Your company is planning to host its applications in the AWS Cloud. Which of the following services can be used to help decouple distributed software systems and components?'},
//			     'choices': {L : [{S:"AWS SQS"},{S:"AWS EBS"},{S:"Amazon Athena"},{S:"AWS SES"}]},
//			     'correctAnswer': {N : '0'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '34'}, 
//			     'question': {S: 'Which of the following will impact the price paid for an EC2 instance?'},
//			     'choices': {L : [{S:"The Availability Zone where the instance is provisioned"},{S:"Storage capacity"},{S:"Compute time consumed"},{S:"The IAM identity that uses the instance"}]},
//			     'correctAnswer': {N : '0'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '35'}, 
//			     'question': {S: 'Which of the following is a fully-managed, petabyte-scale data warehouse service in the AWS Cloud?'},
//			     'choices': {L : [{S:"Amazon Kinesis"},{S:"Amazon Redshift"},{S:"Amazon RDS"},{S:"Amazon DynamoDB"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '36'}, 
//			     'question': {S: 'Your company\'s upper management is getting very nervous about managing governance, compliance, and risk auditing in AWS. What service should you enable and inform upper management about?'},
//			     'choices': {L : [{S:"CloudAudit"},{S:"CloudTrail"},{S:"Cloud Compliance"},{S:"CloudWatch"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '37'}, 
//			     'question': {S: 'Which of the following AWS services can be used as a compute resource? '},
//			     'choices': {L : [{S:"Amazon S3"},{S:"Amazon EC2"},{S:"Amazon VPC"},{S:"AWS IGW"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '38'}, 
//			     'question': {S: 'What service enables customers to quickly migrate exabyte-scale datasets from on-premises to AWS in a more secure, fast, and low-cost manner?'},
//			     'choices': {L : [{S:"Snowball"},{S:"Snowmobile"},{S:"Snowflake"},{S:"Snowwhite"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '39'}, 
//			     'question': {S: 'Jay is planning to offload some of his batch processing workloads to AWS. These jobs can be interrupted and resumed at any time. Which of the following instance types would be the most cost effective to use?'},
//			     'choices': {L : [{S:"On-Demand"},{S:"Spot"},{S:"Full Upfront Reserved"},{S:"Partial upfront Reserved"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '40'}, 
//			     'question': {S: 'Which of the following storage mechanisms can be used to store and reliably deliver messages effectively across distributed systems?'},
//			     'choices': {L : [{S:"Amazon Glacier"},{S:"Amazon EBS Volumes"},{S:"Amazon EBS Snapshots"},{S:"Amazon SQS"}]},
//			     'correctAnswer': {N : '3'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '41'}, 
//			     'question': {S: 'Which of the following reserved instance payment options result in you paying a discounted hourly rate throughout the duration of the term?'},
//			     'choices': {L : [{S:"All Upfront Options"},{S:"Partial Upfront Option"},{S:"Percentage Upfront Options"},{S:"Deferred billing option"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '42'}, 
//			     'question': {S: 'Which statement is correct with regards to service limits?'},
//			     'choices': {L : [{S:"You can use the AWS Trusted Advisor to monitor your service limits"},{S:"There are no service limits on AWS"},{S:"AWS SES is responsible for sending email when usage approaches limits"},{S:"Each IAM user has the same service limits"}]},
//			     'correctAnswer': {N : '0'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '43'}, 
//			     'question': {S: 'What does Amazon Elastic Beanstalk provide?'},
//			     'choices': {L : [{S:"A scalable storage appliance on top of Amazon Web series"},{S:"An application container on top of Amazon Web Services"},{S:"A service by this name doesn't exist"},{S:"A scalable cluster of EC2 instances"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '44'}, 
//			     'question': {S: 'Rick has created a web application, placing its underlying infrastructure in the N. Virginia (US-East-1) region. After several months, Rick notices that much of his website’s traffic is coming from Japan. What can he do to reduce latency for his users in Japan?'},
//			     'choices': {L : [{S:"Migrate the application to a Japanese hosting service"},{S:"Create a CDN using CloudFront to cache content at Edge locations close to and in Japan"},{S:"Recreate the website content"},{S:"None of the above"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '45'}, 
//			     'question': {S: 'You are working on two projects that require a completely different network configuration. Which of the following would allow you to isolate resources and network configurations for each of them?'},
//			     'choices': {L : [{S:"A Security Group"},{S:"Edge Locations"},{S:"Virtual Public Cloud"},{S:"Virtual Private Cloud"}]},
//			     'correctAnswer': {N : '3'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '46'}, 
//			     'question': {S: 'Which of the following are important design principles when architecting cloud-based systems?'},
//			     'choices': {L : [{S:"Build tightly coupled components"},{S:"Usa as many services as possible"},{S:"Assume everything will fail"},{S:"Assume nothing will fail"}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '47'}, 
//			     'question': {S: 'There are performance issues with your under-development application, being built using microservices architecture. Which of the following AWS services would help you analyze these issues?'},
//			     'choices': {L : [{S:"X-ray"},{S:"Aws CodePipeline"},{S:"AWS Inspector"},{S:"AWS Config"}]},
//			     'correctAnswer': {N : '0'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '48'}, 
//			     'question': {S: 'Which of the following AWS offerings is a MySQL-compatible database that has the ability to grow in storage size on its own?'},
//			     'choices': {L : [{S:"DynamoDB"},{S:"Aurora"},{S:"RDS Microsoft SQL Server"},{S:"RDS PosgresSQL"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '49'}, 
//			     'question': {S: 'What is the primary storage service used by Amazon RDS DB instances?'},
//			     'choices': {L : [{S:"Amazon S3"},{S:"Amazon EFS"},{S:"Amazon EBS"},{S:"Amazon Glacier"}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();

var params = {
		  TableName: myTable,
		  Item: {'qnum' : {N: '50'}, 
			     'question': {S: 'What are your options for protecting the confidentiality of data in transit in Amazon S3? '},
			     'choices': {L : [{S:"Use Server-side Encryption"},{S:"Use Cient-side Encryption"},{S:"Use AWS DataTransferProtector"},{S:"RDS Encryption"}]},
			     'correctAnswer': {N : '1'}
		  }
		};
post();

//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '51'}, 
//			     'question': {S: 'Which of the following features of Amazon RDS can you use to improve the availability of your database?'},
//			     'choices': {L : [{S:"Multi ALB Deployment"},{S:"VPC Peering"},{S:"Read Replicas"},{S:"Automatic patching"}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '52'}, 
//			     'question': {S: 'How much data can you store in S3?'},
//			     'choices': {L : [{S:"Storage capacity is virtually unlimited"},{S:"You can store up to 1 PetaByte of data"},{S:"Each account has 50 gigabyte"},{S:"1 petabyte then you need to pay additional fees"}]},
//			     'correctAnswer': {N : '0'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '53'}, 
//			     'question': {S: 'Based on the AWS shared responsibility model, which of the following is the responsibility of AWS?'},
//			     'choices': {L : [{S:"Monitoring network performance"},{S:"Configuring ACLs"},{S:"Installing software on EC2"},{S:"Creating hypervisors"}]},
//			     'correctAnswer': {N : '3'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '54'}, 
//			     'question': {S: 'Which of the following needs a username and password to access AWS resources?'},
//			     'choices': {L : [{S:"AWS Management Console"},{S:"AWS API"},{S:"AWS SDK"},{S:"AWS CLI"}]},
//			     'correctAnswer': {N : '0'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '55'}, 
//			     'question': {S: 'Which AWS service uses Edge Locations to cache content?'},
//			     'choices': {L : [{S:"AWS Glacier"},{S:"AWS KMS"},{S:"AWS CloudFront"},{S:"AWS Inspector"}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '56'}, 
//			     'question': {S: 'Which of the following AWS services are free to use?'},
//			     'choices': {L : [{S:"CloudFormation"},{S:"CloudWatch"},{S:"CloudTrail"},{S:"CloudFront"}]},
//			     'correctAnswer': {N : '0'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '57'}, 
//			     'question': {S: 'Where can you store files in AWS?'},
//			     'choices': {L : [{S:"Amazon SNS"},{S:"Amazon EFS"},{S:"Amazon ECS"},{S:"Amazon EMR"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '58'}, 
//			     'question': {S: 'What service helps you to aggregate log files from your EC2 instances?'},
//			     'choices': {L : [{S:"SQS"},{S:"S3"},{S:"CloudTrail"},{S:"CloudWatch"}]},
//			     'correctAnswer': {N : '3'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '59'}, 
//			     'question': {S: 'Which of the following is required to connect to Amazon EC2 instances?'},
//			     'choices': {L : [{S:"MFA"},{S:"Instance Password"},{S:"Key Pairs"},{S:"Route tables"}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '60'}, 
//			     'question': {S: 'A company needs to host a database for at least 1 year. Which of the following options would be the most cost-effective solution?'},
//			     'choices': {L : [{S:"Spot Instance"},{S:"Partial Upfront Reserved "},{S:"No Upfront Reserved"},{S:"On-Demand "}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '61'}, 
//			     'question': {S: 'An organization has an on-premises application that serves users from all around the world. If instead the application was deployed in AWS, what is the AWS characteristic that could help reduce latency to their users?'},
//			     'choices': {L : [{S:"High Availability"},{S:"Elasticity"},{S:"Global reach"},{S:"Fault tolerance"}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '62'}, 
//			     'question': {S: 'Select the services that can be used to build hybrid cloud architectures.'},
//			     'choices': {L : [{S:"AWS Cloud9"},{S:"AWS Artifact"},{S:"AWS CloudTrail"},{S:"AWS IAM"}]},
//			     'correctAnswer': {N : '3'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '63'}, 
//			     'question': {S: 'Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?'},
//			     'choices': {L : [{S:"The abilty of a system to recover from failure"},{S:"The ability to monitor and improve process"},{S:"Teh ability to provision resources on demand"},{S:"The ability to manage datacenter operations more efficiently"}]},
//			     'correctAnswer': {N : '1'}
//		  }
//		};
//post();
//
//var params = {
//		  TableName: myTable,
//		  Item: {'qnum' : {N: '64'}, 
//			     'question': {S: 'Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?'},
//			     'choices': {L : [{S:"Move all the data stored in S3 standard to EBS"},{S:"Pick the right AZ for your S3 bucket"},{S:"Use the right combination of storage classes based on different use cases"},{S:"Use the Import/Export feature to move old files automatically to Glacier"}]},
//			     'correctAnswer': {N : '2'}
//		  }
//		};
//post();

function post () {
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}
