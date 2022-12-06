# Stage 08 Desafio 01 :rocket:

## Project with node.js

Back-end of users with notes about movies :movie_camera:

Using express

>
> To **Run** the project: 
>
> First type the command `npm install` to install the **dependencies**
>
> Then type the command `npm run migrate` to create the **database.db**
>
> Then type the command `npm start` to run the **node**
>

### End-points

>
>to create user: `POST` in `http://localhost:3335/users` in JSON:
>

```json
  {
    "name": "User name",
    "email": "User e-mail",
    "password": "User password"
  }
```

>
>to create a token to authenticate: `POST` in `http://localhost:3335/sessions` in JSON:>

```json
  {
    "email": "E-mail valid",
    "password": "Password valid"
  }
```

>
>to update user: `PUT` in `http://localhost:3335/users` in JSON:
>

If want to make changes in `name` or `e-mail`:

```json
  {
    "name": "User name",
    "email": "User e-mail"
  }
```

If want to change the `password`:

```json
  {
    "name": "User name",
    "email": "User e-mail",
    "password": "New password",
    "old_password": "Old password"
  }
```

>
> To create a movie note: `POST` in `http://localhost:3335/movie_notes` in JSON:
>

```json
  {
    "title": "movie title",
    "description": "movie description",
    "tags": ["tag", "tag"],
    "rating": <rating>
  }
```

>
> To show a note: `GET` in `http://localhost:3335/movie_notes/<note_id>`
>
> To delete a note: `DELETE` in `http://localhost:3335/movie_notes/<note_id>`
>
> To show all notes: `GET` in `http://localhost:3335/movie_notes`
>
> To show all tags of user: `GET` in `http://localhost:3335/movie_tags`
>
