# App

## Architecture

This app's architecture  follows Client Server Model at a client side build a  react frontend app and the server side will build spring boot backend.

That means: 
* Spring boot will manipulate databases and it will expose the data in a Rest Api, see the important parts below: 
	- Model
	- Service 
	- DAO (data access object), it works directly with the database, you can also find it like Repositorys
* React will consume the rest api, see the important parts below: 
	- Router
	- Components
	- Services

