const DiscordRPC = require('discord-rpc');
const config = require('./config');

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

async function setActivity(activity) {
  if (!rpc) {
    return;
  }

  try {
    await rpc.setActivity(activity);
    console.log('Activity set successfully');
  } catch (error) {
    console.error('Failed to set activity:', error);
  }
}

async function clearActivity() {
  if (!rpc) {
    return;
  }

  try {
    await rpc.clearActivity();
    console.log('Activity cleared successfully');
  } catch (error) {
    console.error('Failed to clear activity:', error);
  }
}

async function initialize() {
  try {
    await rpc.login({ clientId: config.clientId });
    console.log('RPC client initialized');
  } catch (error) {
    console.error('Failed to initialize RPC client:', error);
  }
}

module.exports = {
  setActivity,
  clearActivity,
  initialize
};