/* Subtract the current number of milliseconds (from epoch) from the number
 * of milliseconds as of June 21, 2016 (Overwatch release).
 */
var getMillis = function() {
  var now = new Date();
  var launch = new Date(2016, 4, 24, 6, 0, 0);
  var millis = launch.getTime() - now.getTime();
  return millis;
}

/* Convert milliseconds into days.
 * Return the floored number of days.
 */
var getDays = function() {
  var days = getMillis() / (1000 * 60 * 60 * 24);
  return Math.floor(days);
}

/* Convert milliseconds into hours.
 * Return the number of hours, rounded up to the nearest integer.
 */
var getHrs = function() {
  var hours = getMillis() / (1000 * 60 * 60);
  return Math.ceil(hours % 24);
}

/* Convert milliseconds into minutes.
 * Return the floored number of minutes.
 */

var getMins = function() {
  var minutes = getMillis() / (1000 * 60);
  return Math.floor(minutes % 60);
}

/* Convert milliseconds into seconds.
 * Return the floored number of seconds, rounded to the nearest integer.
 */
var getSecs = function() {
  var seconds = getMillis() / (1000);
  return Math.floor(seconds % 60);
}

/* Fill in the timer divs with the days, hours, minutes, and seconds.
 */
var getCountdown = function() {
  document.getElementById("numDays").innerHTML = getDays();
  document.getElementById("numHours").innerHTML = getHrs();
  document.getElementById("numMinutes").innerHTML = getMins();
  document.getElementById("numSeconds").innerHTML = getSecs();
}

/* Wait for the DOM to load, then run getCountdown every 0.5 seconds.
 */
window.onload = function() {
  setInterval(getCountdown, 500);
}
