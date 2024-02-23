### Language Translation to Any Language

Follow these steps to set up the project:

1. **Download the Source Code**
2. Run `npm install` or `yarn install`
3. Create a `.env` file and add the following value:
   ```
   PROJECT_ID="YOUR_PROJECT_ID" // Obtain this from your Google Cloud Project ID
   ```
4. Run the code using `yarn dev` or `npm run dev`

#### API Endpoint

- **POST Request:** `http://localhost:3003/translateFrench`
- **Body:**
  ```json
  {
      "text": "Hello How are you",
      "toLang": "French", // Specify the language to which you want to translate the text (default: "French")
      "fromLang": "English" // Specify the language of the provided text for translation (default: "English")
  }
  ```
- **Response:**
  ```json
  {
      "translation": "Bonjour ! Comment ça va ?" // Translated text from the provided request
  }
  ```
