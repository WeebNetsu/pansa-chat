# Pansa Chat

This is a basic chat app that works by getting data from the database once the database updates. So the process:

1. User Send Message (to database)
2. Database gets updated
3. Page sees database is changed
4. Content reloads on all clients
5. All users sees new message

If you want to see how this was done, [here is a tutorial on it](https://youtu.be/1D0UKDXIRDQ).