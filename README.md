## Image Processing API

Udacity fullstack javacript nano degree image processing api project

### Description

An image processing api that resizes and saves images to user specification when visiting a url
- Images are loaded from source file in code
- Thumbnail filename includes the image size to allow for multiple sizes of the same image
- logging to record when images are processed or accessed

### Technologies

- Nodejs
- Express
- Typescript
- Jasmine

### Local machine setup

1. Clone repo to your local machine using
   `git clone https://github.com/kmwamasali/image-processing-api.git`

2. Install the project local dependecies
   `npm install`

3. Start the server using
   `npm run start`

4. Available Endpoints
   `\` returns status of 200
   `\api\images?filename=fjord&width=200&height=200` returns the resized image from filename and size params
