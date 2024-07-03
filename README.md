Blog Platform
Welcome to our Blog Platform, a project designed to give writers a space to share their thoughts, ideas, and stories with a broader audience. Whether you're a professional writer or someone who simply loves to write, our platform provides the perfect space for you to express yourself.

Introduction
Our Blogs is a platform designed to give writers of all kinds a space to share their thoughts, ideas, and stories with a broader audience. Join our community, start sharing your blogs, and connect with readers from all over the world. Here, your words matter.

Features
User Authentication (Sign In, Sign Up, Logout)
Create, Read, Update, and Delete Blogs
Search functionality for blogs
Responsive Design
Technologies Used
Next.js
React
NextAuth.js
MongoDB
TypeScript

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Clone the repo:
git clone https://github.com/Prarabdha-ss/Blog-Next-.git

Contributors and Responsibilities

Prarabdha-
Authentication: Implemented NextAuth.js for user authentication, including Sign In, Sign Up, and Logout functionality.
Frontend Development: Developed the UI components such as BlogCard, Header, Footer, and SearchBar.


Abhay-
API Routes: Set up and handled API routes for authentication and blogs.
Project Structure and Setup: Organized the project structure and setup, ensuring a clean and maintainable codebase.


Siddharth-
Backend Integration: Connected the frontend with the backend services, ensuring seamless data flow.
Blog CRUD Operations: Implemented Create, Read, Update, and Delete operations for blogs in the backend.

Ravneet-
Search Functionality: Developed and integrated the search functionality for blogs.
Styling: Responsible for the overall styling of the application, ensuring a responsive design.

API Routes
Authentication
POST /api/auth/signin - Sign in a user.
POST /api/auth/signup - Sign up a new user.
POST /api/auth/signout - Sign out the current user.

Blogs (First submission)
GET /api/blogs - Fetch all blogs or search blogs with a query parameter.
POST /api/blogs - Create a new blog.
PUT /api/blogs/:id - Update an existing blog.
DELETE /api/blogs/:id - Delete a blog.

Screen shots
![alt text](<public/screenshots/Screenshot (176).png>)
This is our home page

![alt text](<public/screenshots/Screenshot (177).png>)
This is our signup page where the user is stored in mongo

![alt text](<public/screenshots/Screenshot (180).png>)
If user is already there then tells us usert already presnt

![alt text](<public/screenshots/Screenshot (181).png>)
Dashboard page where are blogs are fetched and showed in the form of cards

![alt text](<public/screenshots/Screenshot (183).png>)
Searching the recently added blog


