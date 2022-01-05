# NetflixClone App 

## Informations
- [x] Video: [NetflixClone](https://youtu.be/CNaLOa-6X7U)
- [x] Youtube Channel: [SavinVadim](https://www.youtube.com/hashtag/vadimsavin)
- [x] Github source code: [Savinvadim1312/NetflixClone](https://github.com/Savinvadim1312/NetflixClone)
- [x] Dummy Data (data, image, icons): <https://assets.notjust.dev/netflix>
  
### AWS config

GraphQL endpoint: <https://53gsinyusfhnxe64566svrnh3a.appsync-api.eu-west-1.amazonaws.com/graphql>

Hosted UI Endpoint: <https://netflixclonefb34748f-fb34748f-dev.auth.eu-west-1.amazoncognito.com/>
Test Your Hosted UI Endpoint: <https://netflixclonefb34748f-fb34748f-dev.auth.eu-west-1.amazoncognito.com/login?response_type=code&client_id=7blm55tl0p4bcilfg0gpf2s9it&redirect_uri=https://localhost:19000/>

### Start project


#### Create project
##### Initialize project
````shell
$ npm i
````
#### AWS Amplify
This project use AWS Amplify as backend.
[Install and configure AWS Amplify](https://docs.amplify.aws/cli/start/install/) before starting app
````shell
$ amplify init

$ amplify push 
````

##### Amplify Authentication
AWS Cognito is used for authenticating users and give them authorization on some resources
``````shell
$ amplify add auth 
$ amplify push
``````

##### Amplify API
[AWS Amplify](https://docs.amplify.aws/start/q/integration/react-native/) is used 
``````shell
$ amplify add api
$ cp docs/db/schema.graphql.save amplify/backend/api/netflixclone/schema.graphql
$ amplify push
``````

#### Amplify Storage 
[AWS S3](https://docs.amplify.aws/lib/storage/getting-started/q/platform/js/) is used to store files like music, video

````shell
$ amplify add storage
$ amplify push
````
#### Create folder in storage
Create folders and add files from ``docs/poster docs/trailer``
````shell
[public/trailer]
public/poster
protected/films
protected/series
````

#### Import data to 


### To Do
- MovieDetail component for series
- Episode component
- Dropdown picker for seasons 
  - add @react-native-picker/picker
- 
## Remaques
#### AWS S3 bucket 
S3Image - Image doesn't appear
S3 Bucket : All public files must be in a directory "public/".
Because Storage.get() add a prefix 'public/' on the key example "s3Directory/public/file.ext"
if the level of protection is public.

#### Video player
Component ``expo-av`` doesn't support ``.avi`` video file extension!
