Repro for https://twitter.com/notbrent/status/1190754474857381888

## Steps to reproduce

- Clone the repo, run `yarn` , run `react-native run-ios`. App will be running in simulator, good. Fast refresh enabled by default, great.
- Open `Screen.js` and change the text content inside `render()` and verify that fast refresh is indeed working as intended.
- Change the `title` in `static navigationOptions` and observe that the title is not updated.