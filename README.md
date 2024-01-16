# Next.js Image Gallery with Cloudinary Storage

🌟 Welcome to the Next.js Image Gallery repository! 🌟

## Overview

This project is a simple image gallery built with Next.js, where images are stored in [Cloudinary](https://cloudinary.com/). It provides a quick and efficient way to showcase your images with a responsive and performant web application.

## Features

- **Next.js**: Utilizing the power of React with server-side rendering and a great developer experience.
- **Cloudinary**: Storing and managing images in the cloud with Cloudinary's robust and scalable platform.
- **Responsive Design**: Ensuring a seamless experience across various devices and screen sizes.

## Getting Started

Follow these steps to get the project up and running:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/nextjs-cloudinary-gallery.git
    cd nextjs-cloudinary-gallery
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure Cloudinary:

    - Sign up for a [Cloudinary account](https://cloudinary.com/users/register/free).
    - Obtain your Cloudinary API Key, API Secret, and Cloud Name.
    - Create a `.env.local` file in the root directory:

        ```env
        CLOUDINARY_CLOUD_NAME=your-cloud-name
        CLOUDINARY_API_KEY=your-api-key
        CLOUDINARY_API_SECRET=your-api-secret
        ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment

To deploy the Next.js Image Gallery, you can use platforms like Vercel, Netlify, or your preferred hosting service. Make sure to set up environment variables for Cloudinary in your deployment environment.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Your contributions are highly appreciated!

Happy coding! 🚀
