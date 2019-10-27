# Q1 Assessment

## Getting Started

Fork and clone this repository, the run the following commands in the terminal in the project directory:

```shell
npm install # to install the dependencies of json-server
npm run server # to start the server
```

## Overview

You have been asked by a local bookstore to build an interface that they can use to track their inventory of books.

## User Stories

### Home page

- As a user, when I arrive at the home page, I am able to see a table of books, as well as a button above the list of books that says "Add New Book".
  - The table has the following columns
    - ID
    - Title (string)
    - Author (string)
    - Description (string)
    - Quantity (number)
    - Price (number...and assume there will only ever be whole dollars)
- As a user, when I click the "Add New Book" button, it takes me to a page that will allow me to add a new book

![homepage](/img/homepage.png)

#### Stretch Goals

- As a user, in the last column on the right side "Manage", I see a button that says "Delete". When I click that button, that specific book is removed from the table and deleted from the database
- As a user, in the last column on the right side "Manage", I see another button that says "Edit". When I click that button, it takes me to a new page that will allow me to edit the book information
- Add a navigation bar on the top

### Add new book page

![add book form](/img/add-book-form.png)

- As a user, when I arrive at the "Add New Book" page, I see a form with 5 fields
  - Title (string)
  - Author (string)
  - Description (string)
  - Quantity (number)
  - Price (number...and assume there will only ever be whole dollars)
- As a user, when I submit that form, it will add the new book to the database and redirect me back to the home page.

#### Stretch Goals

- Add validation to the form
