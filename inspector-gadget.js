const devToolsListener = () => {
  const fakeFiles = [];
  for (let i = 0; i < 1000000; i++) {
    const fakeFile = document.createElement('script');
    fakeFile.src = 'https://example.com/fake.js';
    fakeFiles.push(fakeFile);
  }
  console.log(fakeFiles);
};

const checkDevTools = () => {
  if (new Date() - performance.timeOrigin < 200) {
    devToolsListener();
  }
};

setInterval(checkDevTools, 1000);
