

# Tocco Product Impact Data Management

## Overview

This web application allows users to input and manage product impact data. It's designed to be used by administrators of Tocco's platform to ensure accurate and comprehensive data collection for each product. Users can enter details such as product information, environmental impact metrics, certifications, and attachments.

## Features

- **Product Information**: Enter product title, description, and image.
- **Impact Data**: Input various environmental impact metrics including carbon footprint, water consumption, and recyclability.
- **Certifications**: Select applicable certifications from a predefined list.
- **Attachments**: Upload supporting documents and reports.

## Technologies Used

- React
- Next.js
- Formik for form management
- Yup for validation
- React Query for data fetching and caching
- Uppy for file uploads
- Tailwind CSS for styling
- DaisyUI for UI components
- Nestjs for API

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/repo
    cd repo
    ```

2. **Install Dependencies**:
    ```bash
    npm install or yarn install
    ```

3. **Environment Variables**:
   Create a `.env.local` file in the apps/client folder directory and add the following environment variables:
    ```plaintext
    NEXT_PUBLIC_API_URL=https://api.yourdomain.com
    NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.com
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

     Create a `.env` file in the apps/server folder directory and add the following environment variables:
    ```plaintext
    POSTGRES_NAME="tocco"
    POSTGRES_USER="postgres"
    POSTGRES_PASSWORD="master123"

    DATABASE_URL=postgresql://postgres:master123@127.0.0.1:5432/tocco?schema=public
    ```

4. **Run the Development Server** :
    - run the docker composer to spin up the server

   it will run both the server and client side
    ```bash
    yarn migrate
    yarn dev
    ```

## Usage

1. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to access the development version of the application.
   Api is running on `http://localhost:4000`

2. **Add a New Product**:
   - Click on "Create Product".
   - Fill in the product information fields including title, description, and image.
   - Input the environmental impact data in the respective fields.
   - Select applicable certifications from the dropdown list.
   - Upload any relevant attachments such as reports and technical specifications.
   - Click "Save" to submit the form.

3. **View Product Details**:
   - Navigate to the product list to view all entered products.
   - Click on a product to view detailed information, including impact data and attachments.

4. **Error Handling**:
   - The form will display validation errors if required fields are missing or contain invalid data.
   - File uploads will show progress and errors if they fail to upload.

## Folder Structure

```
client/
├── components/
│   ├── catalogForm/
│   │   ├── InputField.tsx
│   │   ├── TextAreaField.tsx
│   │   ├── ImpactDataField.tsx
│   │   ├── SelectField.tsx
│   │   ├── UppyDashboard.tsx
│   └── ...
├── pages/
│   ├── product-form.tsx
│   ├── products/
│   │   ├── [id].tsx
│   └── ...
├── utils/
│   ├── api.ts
│   ├── type.ts
│   ├── constats.ts 
│   └── ...
├── public/
├── styles/
├── .env.local
├── package.json
├── README.md
└── ...
```