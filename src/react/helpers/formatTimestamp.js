function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const options = { month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const formattedYear = date.getFullYear();
  return `${formattedDate} ${formattedYear}`;
}

export default formatTimestamp