# Task Tracker, Version 3

Design Decisions

I wanted to make the single page application seem as much like a regular multi-page application as possible.
When a user goes to the homepage, they have the option to login or register an account.  Here, they will find
instructions on how to do both of these tasks.  If they register, the form checks to make sure the email address 
is valid and the password is at least 8 characters long.  

Once logged in, they are taken to the Task Directory page,
which lists all the tasks, broken out by tasks assigned to them at the top, and tasks they assigned to others at
the bottom.  I did this because it is important to be able to see all the tasks on a single page.  I beleive tasks
that are assigned to you are more important than tasks you assigned to others, so that is why tasks assigned to you
are on top.  Here, the user has clear buttons that will allow them to edit and delete tasks.  If the user tries to 
delete a task, a confirmation page opens up asking them if they are sure, which will help eliminate them from 
accidentally deleting tasks. 

On the banner at the top of the page, the user can select an option to create a new task.  Here, they can assign 
the task to another user in the system, create a task name, description, add in minutes worked (15 minute intervals) 
and mark it complete.  If any of the inputs are invalid, an error pops up and alerts the user what is wrong, and also 
fails to create the task.

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
