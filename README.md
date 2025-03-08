
# Untitled library app

This project is a personal library management application.


## Features

- **Search Books**: Users can search for books via the Google Books API and view details.
- **Shelves**: Users can add books to their personal library and track their reading state (read, want to read, currently reading).
- **Lending Status**: Users can manage due dates of borrowed books and keep notes regarding books lent out from their personal library.
- **User Preferences**: Users can apply light/dark mode.


## Tech Stack

- **Next.js 15 (App Router)**
- **TypeScript**
- **React**
- **Google Books API**
- **Custom Backend API**
## Run Locally

Once the dependencies are installed, you can start the development server:

```bash
  npm run start
  # or
  yarn dev
```

Navigate to http://localhost:3000 in your browser to see the app running.


## API Reference

#### Get book details

```http
  GET /api/book/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. The Google Books ID of the book to fetch details for |


## Roadmap

### Milestone 1
- [ ] Wishlists and purchasing links
- [ ] Private reviews

### Milestone 2
- [ ] Reading goals
- [ ] Book import (Goodreads, etc)

### Milestone 3
- [ ] Analytics
- [ ] Barcode scanner


## Contributing

This project is closed-source. Contributions, forking, or redistribution are not allowed at this time. However, feel free to reach out for any inquiries or potential collaboration opportunities.