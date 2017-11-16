<?php
//THE FILE BELOW CREATES A CONNECTION TO THE SQL DB AND BRINGS IN JQUERY
require_once($_SERVER['DOCUMENT_ROOT'].'/do-not-modify.php');
?>

<script type="text/javascript">
$(document).ready(function(){console.log('JQuery Is Loaded Should You Need It');});
</script>


<?php
//Question #1 - get search number of total sessions by region
//link sessions.id to stadiums.region with inner join, group by region, order by most to least
$qry1 = "SELECT stadiums.region, COUNT(sessions.id) AS total_sessions \n
  FROM stadiums \n
  INNER JOIN sessions \n
  ON stadiums.stadium = sessions.stadium \n
  GROUP BY stadiums.region
  ORDER BY total_sessions DESC";

//query results
$result1 = mysql_query($qry1) or die(mysql_error());

//while loop to translate search result to html table
echo"<h3>#1. Overall Sessions by Region</h3>";
echo"<table border='1'>
  <tr>
    <th>Region</th>
    <th>Sessions</th>
  </tr>";
  while($row = mysql_fetch_array($result1))
    {
       echo "<tr>";
       echo "<td>" . $row['region'] . "</td>";
       echo "<td>" . $row['total_sessions'] . "</td>";
       echo "</tr>";
    }
echo "</table>";


//Question #2 - display genre popularity by region
//link sessions, performers and stadiums tables to get region, genre and session count
$qry2 = "SELECT stadiums.region, performers.genre, COUNT(sessions.id) AS total_sessions \n
  FROM sessions \n
  INNER JOIN performers \n
    ON sessions.performer = performers.performer \n
  INNER JOIN stadiums \n
    ON sessions.stadium = stadiums.stadium \n
  GROUP BY stadiums.region, performers.genre \n
  ORDER BY stadiums.region, total_sessions DESC";

//query results
$result2 = mysql_query($qry2) or die (mysql_error());

//while loop to translate search result to html table
echo"<h3>#2. Genre Sessions by Region</h3>";
echo"<table border = '1'>
  <tr>
    <th>Region</th>
    <th>Genre</th>
    <th>Sessions</th>
  </tr>";
  while($row = mysql_fetch_array($result2))
    {
       echo "<tr>";
       echo "<td>" . $row['region'] . "</td>";
       echo "<td>" . $row['genre'] . "</td>";
       echo "<td>" . $row['total_sessions'] . "</td>";
       echo "</tr>";
    }
echo "</table>";


//Question #3 - Find Region with most searches
echo "<h3>#3. Popularity</h3>";
  //get topRegion from first question ($qry1)
  $result3 = mysql_query($qry1) or die(mysql_error());
  //save to variable topRegion
  $topRegion = mysql_result(mysql_query("SELECT region FROM stadiums LIMIT 1"),0);
  echo "<h4>Region with most sessions is: $topRegion </h4>";

echo "<h4>Most Popular Stadiums in $topRegion</h4>";
  //query for stadiums where region == $topRegion, return stadium rank
  $qry4 = "SELECT stadiums.name, COUNT(sessions.id) AS total_sessions \n
    FROM stadiums \n
    INNER JOIN sessions \n
      ON stadiums.stadium = sessions.stadium \n
    WHERE stadiums.region = '$topRegion' \n
    GROUP BY stadiums.name \n
    ORDER BY total_sessions DESC";

  //query results
  $result4 = mysql_query($qry4) or die(mysql_error());

  //while loop to translate search result to html table
  echo"<table border='1'>
    <tr>
      <th>Stadium Name</th>
      <th>Sessions</th>
    </tr>";
    while($row = mysql_fetch_array($result4))
      {
         echo "<tr>";
         echo "<td>" . $row['name'] . "</td>";
         echo "<td>" . $row['total_sessions'] . "</td>";
         echo "</tr>";
      }
    echo "</table>";

echo "<h4>Most Popular Performers in $topRegion</h4>";
  //query for performers where region == $topRegion, return performer rank
  $qry5 = "SELECT performers.performer, COUNT(sessions.id) AS total_sessions \n
    FROM performers \n
    INNER JOIN sessions \n
      ON performers.performer = sessions.performer \n
    INNER JOIN stadiums \n
      ON sessions.stadium = stadiums.stadium \n
    WHERE stadiums.region = '$topRegion' \n
    GROUP BY performers.performer \n
    ORDER BY total_sessions DESC";

  //query results
  $result5 = mysql_query($qry5) or die(mysql_error());

  //while loop to translate search result to html table
  echo"<table border='1'>
    <tr>
      <th>Performer</th>
      <th>Sessions</th>
    </tr>";
    while($row = mysql_fetch_array($result5))
      {
         echo "<tr>";
         echo "<td>" . $row['performer'] . "</td>";
         echo "<td>" . $row['total_sessions'] . "</td>";
         echo "</tr>";
      }
    echo "</table>";


echo "<h4>Most Popular Performer & Stadiums in $topRegion</h4>";
  //query for performers stadiums where region == $topRegion, return performer_stadium rank
  $qry6 = "SELECT performers.performer, stadiums.name, COUNT(sessions.id) AS total_sessions \n
    FROM performers \n
    INNER JOIN sessions \n
      ON performers.performer = sessions.performer \n
    INNER JOIN stadiums \n
      ON sessions.stadium = stadiums.stadium \n
    WHERE stadiums.region = '$topRegion' \n
    GROUP BY performers.performer, stadiums.name \n
    ORDER BY total_sessions DESC";

  //query results
  $result6 = mysql_query($qry6) or die(mysql_error());

  //while loop to translate search result to html table
  echo"<table border='1'>
    <tr>
      <th>Performer</th>
      <th>Stadium</th>
      <th>Sessions</th>
    </tr>";
    while($row = mysql_fetch_array($result6))
      {
         echo "<tr>";
         echo "<td>" . $row['performer'] . "</td>";
         echo "<td>" . $row['name'] . "</td>";
         echo "<td>" . $row['total_sessions'] . "</td>";
         echo "</tr>";
      }
    echo "</table>";
?>
