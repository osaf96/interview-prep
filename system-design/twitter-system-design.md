---
tree_title: Twitter System Design
description: System Design - Twitter.
last_modified: 2022-06-11T16:40:29.4029
---

# Twitter System Design

## Contents

### Functional Requirements of the System.

### Non-Functional Requirements of the System.

### Characteristics of the System.

### Statistics of the System.

| Description           | Value                             |
| --------------------- | --------------------------------- |
| Write                 | 600 per second.                   |
| Read                  | 600,000 per second.               |
| Total number of Users | 330 million Monthly Active Users. |

Twitter is a Read Heavy System. So the system that you make should be Read Heavy, Eventual Consistency and Storage Efficient. <br/>
📖Read Heavy: _Something_ <br/>
📖Eventual Consistency: _Something_ <br/>
📖Storage Efficient: _Something_ <br/>

### Sub-Systems of the System.

#### How to generate User Timelines.

#### How to generate Home Timelines.

#### How to generate the Trending Topics.

### Database Design.

#### Choosing a Database.

Best choice for the database is Redis and along with it have to use some DB to store the data.

##### How Redis supports the Twitter System

📖 _Redis drives Timeline, Twitter's most important service. Timeline is an index of tweets indexed by an id. Chaining tweets together in a list produces the Home Timeline. The User Timeline, which consists of tweets the user has tweeted, is just another list._ <br />

📖 <strong>Hybrid List</strong> : _Added Hybrid List to Redis for more predictable memory performance._ Timeline is a list of Tweet IDs, so it's a list of integers. Each ID is small.<br />

📖 \_Redis supports two list types: ziplist and linklist. Ziplist is space efficient. linklist is flexible, but as a doubly linked list has the overhead of two pointers per key, which given the size of the ID is very high overhead.<br />

📖 _Hybrid List is a linked list of ziplists. A threshold is set of how big each ziplist can be in bytes. In bytes because to memory efficient it helps to allocate and deallocate blocks of the same size. When a list goes over it is spilled into the next ziplist. A ziplist is not recycled until the list is empty, which means it is possible, through deletion, to have each ziplist have only one entry. In practice, tweets aren't deleted all that often._<br />

📖 <strong>BTree</strong>

✅   _Added BTree to Redis to support range queries on hierarchical keys to return a list of results._<br />

✅   _In Redis the way to deal with secondary keys or fields is a hash map. To have sorted data in order to perform a range query a sorted set is used. Sorted set orders by a score which is a double, so an arbitrary secondary key or an arbitrary name can't be used for the sorting. Since hash map uses a linear search it's not great if there are a lot of secondary keys or fields._<br />

✅   _BTree is the attempt fix the shortcomings of hash map and sorted set. It's better to just have one data structure that does what you want. It's easier to understand and reason about._<br />

✅   _Borrowed the BSD implementation of BTree and added it to Redis to create a BTree. Supports key lookup as well as range query. Has good lookup performance. The code is relatively simple. The downside is BTree is not memory efficient. It has a lot of meta data overhead due to the pointers._<br />

#### Database Structure.

✅ User Table

| Description       | Value                            |
| ----------------- | -------------------------------- |
| User ID           | Unique ID of the User.           |
| Followers         | Number of Followers of the User. |
| Tweets            | Number of Tweets of the User.    |

✅ Tweet Table

| Description   | Value                            |
| ------------- | -------------------------------- |
| Tweet ID      | Unique ID of the Tweet.          |
| User ID       | User ID of the User.             |
| Text          | Text of the Tweet.               |
| Retweet Count | Number of Retweets of the Tweet. |

✅ Follower Table

| Description | Value                    |
| ----------- | ------------------------ |
| User ID     | User ID of the User.     |
| Follower ID | User ID of the Follower. |

#### Scaling Database.

### API Design and Implementation.

#### GET Requests.

#### POST Requests.

#### PUT Requests.

#### DELETE Requests.

#### Authentication.

#### Authorization.

#### Rate Limiting.

#### Error Handling.

#### Caching.

#### Monitoring.
