# To Do Fancy API

----------------

Todo fancy docs with external API For Quotes in Management and Career

----------------

## Test API Connection

```
GET {{serverurl}}/api
```

Test API Connection

----------------

### Request

> 

### Examples:

> 
> **Example: Success**
> 
> > 
> > ```
> > GET {{serverurl}}/api
> > ```
> > 
> > **Request**
> > 
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "This API Works!"
> > > }
> > > ```
> > > 
> > 
> 

----------------

## Check API auth connection

```
GET {{serverurl}}/api/auths
```

Checking if the api AUTH is exist

----------------

### Request

> 

### Examples:

> 

----------------

## Create User

```
POST {{serverurl}}/api/auths/signup
```

Creating User with name, password and email

----------------

### Request

> 
> **Header**
> 
> |Key|Value|Description|
> |---|---|---|
> |Content-Type|application/x-www-form-urlencoded||
> 
> **Body**
> 
> |Key|Value|Type|Description|
> |---|---|---|---|
> |name|yournamehere|text|New Username|
> |email|youremail@gmail.com|text|New Email|
> |password|123456|text|password|
> 

### Examples:

> 
> **Example: Create User- Success Response**
> 
> > 
> > ```
> > POST {{serverurl}}/api/auths/signup
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |Content-Type|application/x-www-form-urlencoded||
> > > 
> > > **Body**
> > > 
> > > |Key|Value|Type|Description|
> > > |---|---|---|---|
> > > |name|yournamehere|text||
> > > |email|youremail@gmail.com|text||
> > > |password|123456|text||
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "success", 
> > >   "data": {
> > >     "_id": "5b793b8bbfee5f380c3ea0a4", 
> > >     "name": "yournamehere", 
> > >     "userTodos": [], 
> > >     "created_at": "2018-08-19T09:42:35.148Z", 
> > >     "updated_at": "2018-08-19T09:42:35.148Z", 
> > >     "__v": 0, 
> > >     "password": "$2a$10$SH9x4tp4SzaBA1BWkcxPDO23sCfP.MTa0aDWvP5p44q86GMUb3S3y", 
> > >     "email": "youremail@gmail.com"
> > >   }
> > > }
> > > ```
> > > 
> > 
> 

----------------

## User Login

```
POST {{serverurl}}/api/auths/login
```

User Login with email and Password

----------------

### Request

> 
> **Header**
> 
> |Key|Value|Description|
> |---|---|---|
> |Content-Type|application/x-www-form-urlencoded||
> 
> **Body**
> 
> |Key|Value|Type|Description|
> |---|---|---|---|
> |email|youremail@gmail.com|text|user's email|
> |password|123456|text|user's password|
> 

### Examples:

> 
> **Example: User Login-Success**
> 
> > 
> > ```
> > POST {{serverurl}}/api/auths/login
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |Content-Type|application/x-www-form-urlencoded||
> > > 
> > > **Body**
> > > 
> > > |Key|Value|Type|Description|
> > > |---|---|---|---|
> > > |email|youremal@gmail.com|text||
> > > |password|123456|text||
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "Login Success", 
> > >   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNzkzYjhiYmZlZTVmMzgwYzNlYTBhNCIsImlhdCI6MTUzNDY3MTgxOSwiZXhwIjoxNTM0NzU4MjE5fQ.oPaMkd2CMdRbEvE0osiHvB8t2x0KMWB5I17PwRNhUv0"
> > > }
> > > ```
> > > 
> > 
> 
> **Example: User Login - Invalid Login**
> 
> > 
> > ```
> > POST {{serverurl}}/api/auths/login
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |Content-Type|application/x-www-form-urlencoded||
> > > 
> > > **Body**
> > > 
> > > |Key|Value|Type|Description|
> > > |---|---|---|---|
> > > |email|youremil@gmail.com|text||
> > > |password|123456|text||
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "Wrong Email or Password"
> > > }
> > > ```
> > > 
> > 
> 

----------------

## Verify Token

```
POST {{serverurl}}/api/auths/verifytoken
```

to verify token in browser. each token lasted for 24 hours

----------------

### Request

> 
> **Header**
> 
> |Key|Value|Description|
> |---|---|---|
> |Content-Type|application/x-www-form-urlencoded||
> 
> **Body**
> 
> |Key|Value|Type|Description|
> |---|---|---|---|
> |token|{{token}}|text||
> 

### Examples:

> 
> **Example: Verify Token - success**
> 
> > 
> > ```
> > POST {{serverurl}}/api/auths/verifytoken
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |Content-Type|application/x-www-form-urlencoded||
> > > 
> > > **Body**
> > > 
> > > |Key|Value|Type|Description|
> > > |---|---|---|---|
> > > |token|{{token}}|text||
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "OK", 
> > >   "data": {
> > >     "name": "yournamehere"
> > >   }
> > > }
> > > ```
> > > 
> > 
> 

----------------

## User Dashboard

```
GET {{serverurl}}/api/me
```

Seeing the whole user info with their Todos

----------------

### Request

> 
> **Header**
> 
> |Key|Value|Description|
> |---|---|---|
> |Content-Type|application/x-www-form-urlencoded||
> |token|{{token}}||
> 
> **Body**
> 
> |Key|Value|Type|Description|
> |---|---|---|---|
> |token|{{token}}|text||
> 

### Examples:

> 
> **Example: Success Response**
> 
> > 
> > ```
> > GET {{serverurl}}/api/me
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |Content-Type|application/x-www-form-urlencoded||
> > > |token|{{token}}||
> > > 
> > > **Body**
> > > 
> > > |Key|Value|Type|Description|
> > > |---|---|---|---|
> > > |token|{{token}}||
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "success", 
> > >   "data": {
> > >     "_id": "5b78cf89ad978d6747f7d654", 
> > >     "name": "eri", 
> > >     "userTodos": [], 
> > >     "created_at": "2018-08-19T02:01:46.001Z", 
> > >     "updated_at": "2018-08-19T02:01:46.001Z", 
> > >     "__v": 0, 
> > >     "password": "$2a$10$DgKXNdO2HTN4XJSG3YcyDe5JE23z9yqMbBmlsVk/hh2GON2zcLOdq", 
> > >     "email": "joanlamrack@gmail.com"
> > >   }
> > > }
> > > ```
> > > 
> > 
> 
> **Example: Invalid Key**
> 
> > 
> > ```
> > GET {{serverurl}}/api/me
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |Content-Type|application/x-www-form-urlencoded||
> > > |token|{{token}}||
> > > 
> > > **Body**
> > > 
> > > |Key|Value|Type|Description|
> > > |---|---|---|---|
> > > |token|{{token}}|text||
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "Invalid Signature"
> > > }
> > > ```
> > > 
> > 
> 

----------------

## Get User's Todo

```
GET {{serverurl}}/api/me/todos
```

get all user todo

----------------

### Request

> 
> **Header**
> 
> |Key|Value|Description|
> |---|---|---|
> |token|{{token}}||
> 

### Examples:

> 
> **Example: Success Response**
> 
> > 
> > ```
> > GET {{serverurl}}/api/me/todos
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |token|{{token}}|Token From registration|
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "Todo Found", 
> > >   "data": [
> > >     {
> > >       "title": "Belajar Hacktiv8", 
> > >       "notes": "restapi", 
> > >       "updated_at": "2018-08-19T03:51:40.090Z", 
> > >       "priority": "None", 
> > >       "__v": 0, 
> > >       "deadline": "2018-08-19T03:51:33.543Z", 
> > >       "_id": "5b78e94c75209e79bc71fe62", 
> > >       "created_at": "2018-08-19T03:51:40.090Z"
> > >     }
> > >   ]
> > > }
> > > ```
> > > 
> > 
> 
> **Example: No Todo On User**
> 
> > 
> > ```
> > GET {{serverurl}}/api/me/todos
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |token|{{token}}||
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "Todo empty"
> > > }
> > > ```
> > > 
> > 
> 

----------------

## Create To do

```
POST {{serverurl}}/api/me/todos
```

Create todo

----------------

### Request

> 
> **Header**
> 
> |Key|Value|Description|
> |---|---|---|
> |token|{{token}}||
> |Content-Type|application/x-www-form-urlencoded||
> 
> **Body**
> 
> |Key|Value|Type|Description|
> |---|---|---|---|
> |title|Belajar Hacktiv8|text||
> |notes|restapi|text||
> 

### Examples:

> 
> **Example: Success Response**
> 
> > 
> > ```
> > POST {{serverurl}}/api/me/todos
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |token|{{token}}|token from login|
> > > |Content-Type|application/x-www-form-urlencoded||
> > > 
> > > **Body**
> > > 
> > > |Key|Value|Type|Description|
> > > |---|---|---|---|
> > > |title|Belajar Hacktiv8|text|Title of Todo|
> > > |notes|restapi|text|Note of Todo|
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "todo successfully created", 
> > >   "data": {
> > >     "title": "Belajar Hacktiv8", 
> > >     "notes": "restapi", 
> > >     "updated_at": "2018-08-19T03:51:40.090Z", 
> > >     "priority": "None", 
> > >     "__v": 0, 
> > >     "deadline": "2018-08-19T03:51:33.543Z", 
> > >     "_id": "5b78e94c75209e79bc71fe62", 
> > >     "created_at": "2018-08-19T03:51:40.090Z"
> > >   }
> > > }
> > > ```
> > > 
> > 
> 

----------------

## Delete To do by id

```
DELETE {{serverurl}}/api/me/todos/5b791254b650c7013f8a9375
```

delete todo by id

----------------

### Request

> 
> **Header**
> 
> |Key|Value|Description|
> |---|---|---|
> |token|{{token}}||
> |Content-Type|application/x-www-form-urlencoded||
> 

### Examples:

> 
> **Example: Success Deleting**
> 
> > 
> > ```
> > DELETE {{serverurl}}/api/me/todos/:todoId
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |token|{{token}}||
> > > |Content-Type|application/x-www-form-urlencoded||
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "_id": "5b78cf89ad978d6747f7d654", 
> > >   "name": "eri", 
> > >   "userTodos": [
> > >     "5b791254b650c7013f8a9375"
> > >   ], 
> > >   "created_at": "2018-08-19T02:01:46.001Z", 
> > >   "updated_at": "2018-08-19T06:46:44.700Z", 
> > >   "__v": 3, 
> > >   "password": "$2a$10$DgKXNdO2HTN4XJSG3YcyDe5JE23z9yqMbBmlsVk/hh2GON2zcLOdq", 
> > >   "email": "joanlamrack@gmail.com"
> > > }
> > > ```
> > > 
> > 
> 

----------------

## Update Todo By ID

```
PATCH {{serverurl}}/api/me/todos/:todoId
```

Update To Do from User by ID

----------------

### Request

> 
> **Header**
> 
> |Key|Value|Description|
> |---|---|---|
> |Content-Type|application/x-www-form-urlencoded||
> |token|{{token}}||
> 
> **Body**
> 
> |Key|Value|Type|Description|
> |---|---|---|---|
> |priority|High|text||
> |title|Hello|text||
> |deadline||text||
> |notes|I'm learning for tommorow|text||
> 

### Examples:

> 
> **Example: Update with Multiple  body parameters**
> 
> > 
> > ```
> > PATCH {{serverurl}}/api/me/todos/5b792d70ac8b1a2efa5a6d77
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |Content-Type|application/x-www-form-urlencoded||
> > > |token|{{token}}||
> > > 
> > > **Body**
> > > 
> > > |Key|Value|Type|Description|
> > > |---|---|---|---|
> > > |priority|High|text|None | Low | Medium | High   default: None|
> > > |title|Hello|text|String|
> > > |deadline||text|Date Format in string, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date|
> > > |notes|I'm learning for tommorow|text|String|
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "To do Successfully Updated"
> > > }
> > > ```
> > > 
> > 
> 
> **Example: Not Authorized**
> 
> > 
> > ```
> > PATCH {{serverurl}}/api/me/todos/5b792d0ac8b1a2efa5a6d77
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |Content-Type|application/x-www-form-urlencoded||
> > > |token|{{token}}||
> > > 
> > > **Body**
> > > 
> > > |Key|Value|Type|Description|
> > > |---|---|---|---|
> > > |priority|High|text|None | Low | Medium | High   default: None|
> > > |title||text|String|
> > > |deadline||text|Date Format, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date|
> > > |notes||text|String|
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "Not Authorized"
> > > }
> > > ```
> > > 
> > 
> 
> **Example: Success**
> 
> > 
> > ```
> > PATCH {{serverurl}}/api/me/todos/5b792d70ac8b1a2efa5a6d77
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |Content-Type|application/x-www-form-urlencoded||
> > > |token|{{token}}|Token From Registration|
> > > 
> > > **Body**
> > > 
> > > |Key|Value|Type|Description|
> > > |---|---|---|---|
> > > |priority|High|text|None | Low | Medium | High   default: None|
> > > |title||text|String|
> > > |deadline||text|Date Format, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date|
> > > |notes||text|String|
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "message": "To do Successfully Updated"
> > > }
> > > ```
> > > 
> > 
> 

----------------

## Delete User Account

```
DELETE {{serverurl}}/api/me/
```

delete user's own account when logged in

----------------

### Request

> 
> **Header**
> 
> |Key|Value|Description|
> |---|---|---|
> |token|{{token}}||
> |Content-Type|application/x-www-form-urlencoded||
> 

### Examples:

> 

----------------

## Quote Of the Day

```
GET {{serverurl}}/api/me/qod
```

Retriving data Quotes of the day from https://quotes.rest

----------------

### Request

> 
> **Header**
> 
> |Key|Value|Description|
> |---|---|---|
> |token|{{token}}||
> 

### Examples:

> 
> **Example: Success Response**
> 
> > 
> > ```
> > GET {{serverurl}}/api/me/qod
> > ```
> > 
> > **Request**
> > 
> > > 
> > > **Header**
> > > 
> > > |Key|Value|Description|
> > > |---|---|---|
> > > |token|{{token}}||
> > > 
> > 
> > ----------------
> > 
> > **Response**
> > 
> > > 
> > > **Body**
> > > 
> > > ```json
> > > {
> > >   "contents": {
> > >     "quotes": [
> > >       {
> > >         "category": "management", 
> > >         "permalink": "https://theysaidso.com/quote/qpbyRnAKKtANQ4kMYtBulweF/mahatma-gandhi-the-history-of-the-world-is-full-of-men-who-rose-to-leadership-by", 
> > >         "tags": [
> > >           "history", 
> > >           "leadership", 
> > >           "management"
> > >         ], 
> > >         "quote": "The history of the world is full of men who rose to leadership, by sheer force of self-confidence, bravery and tenacity.", 
> > >         "author": "Mahatma Gandhi", 
> > >         "length": "120", 
> > >         "background": "https://theysaidso.com/img/bgs/hang_on_building_top.jpg", 
> > >         "date": "2018-08-19", 
> > >         "title": "Management Quote of the day", 
> > >         "id": "qpbyRnAKKtANQ4kMYtBulweF"
> > >       }
> > >     ], 
> > >     "copyright": "2017-19 theysaidso.com"
> > >   }, 
> > >   "success": {
> > >     "total": 1
> > >   }
> > > }
> > > ```
> > > 
> > 
> 

----------------

----------------

Built with [Postdown][PyPI].

Author: [Titor](https://github.com/TitorX)

[PyPI]:    https://pypi.python.org/pypi/Postdown
