# Marvel Characters Explorer

Welcome to the Marvel Characters Explorer! This front-end application, built with Next.js, allows you to explore Marvel characters and their related connections within the comic universe.

## Overview

This project aims to provide an interactive platform to discover Marvel characters and their relationships in the vast Marvel universe.

### Features

- **Character Details**: View detailed information about Marvel characters, including their name, image, description, and related characters.
- **Related Characters**: Explore connections and relationships among Marvel characters based on comic appearances.
- **Spectrum's Page**: The initial landing page showcases details about the character Spectrum and her connections to other characters.
- **Dynamic Character Pages**: Accessing any character triggers a request to find related characters based on their comic appearances.

## How It Works

### Technologies Used

- **Next.js**: Framework used for building React applications with server-side rendering and routing.
- **Marvel API**: Utilized to fetch character data and comic-related information.
- **Prisma**: ORM used to interact with the database to store character information.

### Getting Started

To run this project locally:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up environment variables required for the Marvel API.
4. Run the application using `npm run dev`.
5. Add the PRIVATE_KEY and PUBLIC_KEY values to the .env file

Alternativaly you can just add the RIVATE_KEY and PUBLIC_KEY to the .env file and run the Dockerfile.

### Usage

- Access the Spectrum's page at the root URL to see her details and related characters.
- Click on any character to view their details and explore their connections within the Marvel universe.
- The application dynamically fetches related characters based on the comics the selected character appears in.

