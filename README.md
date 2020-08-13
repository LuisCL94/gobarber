# Gobarber

## Back-end application
 Inside back-end directory run `yarn install` to install all back-end project dependencies. 
 
 Now you need to setup a postgress, a mongodb and a redis Docker container. If you have docker installed you can run docker ps to see the containers running on your machine.
 
 ### Running the containers
 
 All 3 container can be run with the following commands:
 
 docker run --name postgresql -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres  <br/>
 docker run --name mongodb -p 27017:27017 -d -t mongo <br/>
 docker run --name redis -p 6379:6379 -d -t redis:alpine  <br/>
 
 Run `docker ps` to check if your containers are up. You will see something like this:

| CONTAINER ID | IMAGE        | COMMAND                  | CREATED     | STATUS     | PORTS                    | NAMES    |
| ------------ | ------------ | ------------------------ | ----------- | ---------- | ------------------------ | -------- |
| 55b6f0727b6c | redis:alpine | "docker-entrypoint.s..." | 2 hours ago | Up 1 hours | 0.0.0.0:6379->6379/tcp   | redis    |
| 00f13f8dda62 | mongo        | "docker-entrypoint.s..." | 2 hours ago | Up 1 hours | 0.0.0.0:27017->27017/tcp | mongodb  |
| e376cfb2b6c2 | postgresql    | "docker-entrypoint.s..." | 2 hours ago | Up 1 hours | 0.0.0.0:5432->5432/tcp   | postgres |

### Running database migrations

With your container running you can initialize the tables of our database running the migration: `yarn sequelize db:migrate`

### Run back-end application
Now configure your .env file and run the command `yarn dev` to start the back-end application, it will use the port `3333`.

For our queues, we have a redis database running in background for our jobs, run this with `yarn queue`

<br/>

## Front-end-web application
 Inside front-end-web directory run `yarn install` to install all front-end-web project dependencies. Then run the command `yarn start` to start the front-end-web application
 
 ### Final results of the web front-end app:
 
 * SignUp
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/SignUp.png)
 * SignIn
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/SignIn.png)
 * Profile
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/profile.png)
 
 * Dashboard 1
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/Dashboard1.png)
 
 * Dashboard 2
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/Dashboard2.png)
 
 <br/>
 
 ## Mobile application
 Inside mobile directory run `yarn install` to install all mobile project dependencies. Then ....
 
 ### Final results of the mobile app: 
 
 * SignUp <br/>
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/SignUp-mobile.png)
 
 * SignIn <br/>
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/SignIn-mobile.png)
 
 * Profile <br/>
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/profile-mobile.png)
 
 * Dashboard <br/>
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/Dashboard-mobile.png)
 
  * New Appointment <br/>
  
    - Select provider <br/>
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/newAppointment1-mobile.png)
 
    - Select date and time <br/>
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/selectDateTime-mobile.png)
 
    - Confirm appointment <br/>
 ![](https://raw.githubusercontent.com/LuisCL94/Images/master/Gobarber-web/confirmAppoitment.png)
 
 