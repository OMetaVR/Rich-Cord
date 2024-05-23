<!DOCTYPE html>
<html>
<head>
  <title>Discord RPC Control</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Discord RPC Control</h1>
    <form id="rpc-form">
      <label for="details">Details:</label>
      <input type="text" id="details" name="details" required>

      <label for="state">State:</label>
      <input type="text" id="state" name="state" required>

      <label for="large-image">Large Image Key:</label>
      <input type="text" id="large-image" name="largeImageKey">

      <label for="small-image">Small Image Key:</label>
      <input type="text" id="small-image" name="smallImageKey">

      <button type="submit">Update Presence</button>
    </form>
    <button id="clear-button">Clear Presence</button>
  </div>

  <script src="./renderer.js"></script>
</body>
</html>