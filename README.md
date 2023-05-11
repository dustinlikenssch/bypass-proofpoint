# Bypass Proofpoint
Chrome extension for bypassing Proofpoint Url Defense on github.com links and other domains

## Setup 
1. Clone repository
2. Navigate to `chrome://extensions` in Chrome
3. Enable Developer mode <img width="158" alt="image" src="https://github.com/dustinlikenssch/bypass-proofpoint/assets/53537928/44b719d2-fb8d-4949-ae1a-cf153b4b3394">
4. Click <img width="136" alt="image" src="https://github.com/dustinlikenssch/bypass-proofpoint/assets/53537928/6bf06f40-3800-411b-a800-386c890f0f87">
to import extension
5. Select root directory of repository

### Optional 
Add domains to hostnames array to bypass URL Defense on additional domains 
```
// background.js
const hostnames = ["github.com"]
```

