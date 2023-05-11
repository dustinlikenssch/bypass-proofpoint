// domains to bypass proofpoint url defense
const hostnames = ["github.com"]

chrome.tabs.onUpdated.addListener(() => {
  const queryOptions = { active: true, lastFocusedWindow: true }
  chrome.tabs.query(queryOptions, ([tab]) => {
    const url = new URL(tab.url)
    if (url.hostname == "urlisolation.com") {
      const targetUrl = new URL(decodeURIComponent(url.search.split("url=")[1]))
      if (hostnames.includes(targetUrl.hostname))
        chrome.tabs.update(undefined, { url: targetUrl.href })
    }
  })
})
