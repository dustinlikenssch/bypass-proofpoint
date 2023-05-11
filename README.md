# Bypass Proofpoint
Chrome extension for bypassing Proofpoint Url Defense on github.com links and other domains

## Setup 
1. Clone repository
2. Navigate to `chrome://extensions` in Chrome
3. Enable Developer mode  <img width="155" alt="image" src="https://github.com/dustinlikenssch/bypass-proofpoint/assets/53537928/368cdf38-0f27-4b4f-916b-4c5cd8e4fd4b">
4. Click  <img width="132" alt="image" src="https://github.com/dustinlikenssch/bypass-proofpoint/assets/53537928/9969d39f-b058-4f31-aaab-2698c928bb3a">  to import extension
5. Select root directory of repository

### Optional 
Add domains to hostnames array to bypass URL Defense on additional domains 
```
// background.js
const hostnames = ["github.com"]
```

