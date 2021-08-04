# NetflixClone App 

## Informations

- Youtube Channel: <https://youtu.be/CNaLOa-6X7U>
- Github source code: <https://github.com/Savinvadim1312/NetflixClone>
- Dummy Data (data, image, icons):
<https://assets.notjust.dev/netflix>
  
### AWS config

GraphQL endpoint: <https://53gsinyusfhnxe64566svrnh3a.appsync-api.eu-west-1.amazonaws.com/graphql>

Hosted UI Endpoint: <https://netflixclonefb34748f-fb34748f-dev.auth.eu-west-1.amazoncognito.com/>
Test Your Hosted UI Endpoint: <https://netflixclonefb34748f-fb34748f-dev.auth.eu-west-1.amazoncognito.com/login?response_type=code&client_id=7blm55tl0p4bcilfg0gpf2s9it&redirect_uri=https://localhost:19000/>

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
Because Storage.get() add a prefix 'public/' on the key example "s3Directory/publicfile.ext"
if the level of protection is public.

#### Video player
Component ``expo-av`` doesn't support ``.avi`` video file extension!
