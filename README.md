# Edwin's Ollie Assessment

### Clone this repository 

Run the following commands:

* git clone https://github.com/Epothos333/ollie
* cd ollie/

### activate the virtualenv and install python requirements

Run the following commands:

* . bin/activate
* pip install -r requirements.txt

### install dependencies for front end and build front end code

Run the following commands:

* cd frontend/
* npm i
* npm run buildStatic

### run the server and check it out

Run the following commands:

* cd ../backend/
* python manage.py runserver

That command should give you a server address to follow. You can enter that in the browser to see the app. I usually replace the numbers with localhost: + the port number. For example instead of typing 'http://127.0.0.1:8000/' in my browser, I just type in 'localhost:8000/'

You can save the dog info there.

### Find your dogs info on the admin site

Assuming you are on localhost:8000/, now enter localhost:8000/admin/ to the address bar.

Click 'Pets'

You should see a list of Dog information which will hopefully contain your pet as well.