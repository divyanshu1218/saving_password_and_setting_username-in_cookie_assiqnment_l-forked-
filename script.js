document.addEventListener('DOMContentLoaded', function() {
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }


  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }


  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');
  
  if (count) {
    count = parseInt(count) + 1; // Increment the count
  } else {
    count = 1; // Initialize the count
  }
  
  setCookie('count', count, 7); // Update the cookie with the new count
  console.log("Current cookie count:", count); // Log the current cookie count for debugging
  document.getElementById('countDisplay').textContent = count; // Display the count on the webpage


});
