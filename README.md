# NodeJS_LoginJWT_example
#### How to set up ?
<code>npm install</code>
#### Start
<code>npm run start</code>
#### Docker
<code>docker-compose up --build</code>

#### Register (/register)
``` bash
{
  "firstname": "jiratheep",
  "lastname": "chookorn",
  "username": "nomelize",
  "password": "12345678",
  "email" : "jiratheep@hotmail.com"
}
```

#### Login (/login)
``` bash
{
 "username":"nomelize",
 "password":"12345678"
}
```
#### Main Page (/)
##### Input token when you login on header Key = <code>x-access-token</code> and value = <code>token when you loging in</code>. This page will show "U can do it (login-with-Auth)" if it's correct. 


