function openPage(section) {
  document.getElementById('settingsPage').classList.add('hidden');
  document.getElementById('subPage').classList.remove('hidden');
  document.getElementById('saveMessage').style.display = 'none';

  let title = "";
  let content = "";

  if (section === "account") {
    title = "Account";
    content = `
      <label>Email:
        <input type="text" name="email" placeholder="user@example.com" required>
      </label>
      <label>Subscription:
        <select name="subscription">
          <option value="free">Free</option>
          <option value="premium" selected>Premium</option>
        </select>
      </label>
      <label>Country:
        <input type="text" name="country" placeholder="Philippines">
      </label>
      <button type="submit" class="btn logout-btn">Save Account Settings</button>
    `;
  } else if (section === "playback") {
    title = "Playback";
    content = `
      <label>
        <input type="checkbox" name="autoplay" checked> Autoplay
      </label>
      <label>Crossfade:
        <select name="crossfade">
          <option value="0">None</option>
          <option value="5" selected>5 seconds</option>
          <option value="10">10 seconds</option>
        </select>
      </label>
      <label>
        <input type="checkbox" name="explicit"> Allow explicit content
      </label>
      <button type="submit" class="btn logout-btn">Save Playback Settings</button>
    `;
  } else if (section === "social") {
    title = "Social";
    content = `
      <label>
        <input type="checkbox" name="facebook" checked> Connect to Facebook
      </label>
      <label>
        <input type="checkbox" name="activity" checked> Share listening activity
      </label>
      <label>
        <input type="checkbox" name="top-artists"> Show top artists on profile
      </label>
      <button type="submit" class="btn logout-btn">Save Social Settings</button>
    `;
  }

  document.getElementById('subPageTitle').innerText = title;
  document.getElementById('subPageContent').innerHTML = content;
}

function goBackToSettings() {
  document.getElementById('subPage').classList.add('hidden');
  document.getElementById('settingsPage').classList.remove('hidden');
}

function saveSettings() {
  document.getElementById('saveMessage').style.display = 'block';
  setTimeout(() => {
    document.getElementById('saveMessage').style.display = 'none';
  }, 2000);
  return false;
}