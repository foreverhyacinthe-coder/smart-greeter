function getTimeGreeting(date = new Date()) {
  const hour = date.getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function greet(name, options = {}) {
  if (!name) {
    throw new Error("Name is required");
  }

  const {
    uppercase = false,
    punctuation = "!"
  } = options;

  let message = `${getTimeGreeting()}, ${name}${punctuation}`;

  if (uppercase) {
    message = message.toUpperCase();
  }

  return message;
}

module.exports = {
  greet,
};
