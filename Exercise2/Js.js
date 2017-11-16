var teams=[
  {"stadium":"la-angels-baseball","team":"Los Angeles Angels"},
  {"stadium":"sf-giants-baseball","team":"San Francisco Giants"},
  {"stadium":"stl-cardinals-baseball","team":"St. Louis Cardinals"},
  {"stadium":"arz-dbacks-baseball","team":"Arizona Diamondbacks"},
  {"stadium":"ny-mets-baseball","team":"New York Mets"},
  {"stadium":"phl-phillies-baseball","team":"Philadelphia Phillies"},
  {"stadium":"det-tigers-baseball","team":"Detroit Tigers"},
  {"stadium":"col-rockies-baseball","team":"Colorado Rockies"},
  {"stadium":"la-dodgers-baseball","team":"Los Angeles Dodgers"},
  {"stadium":"bst-redsox-baseball","team":"Boston Red Sox"},
  {"stadium":"cin-reds-baseball","team":"Cincinnati Reds"},
  {"stadium":"kc-royals-baseball","team":"Kansas City Royals"},
  {"stadium":"mia-marlins-baseball","team":"Miami Marlins"},
  {"stadium":"mil-brewers-baseball","team":"Milwaukee Brewers"},
  {"stadium":"hou-astros-baseball","team":"Houston Astros"},
  {"stadium":"wsh-nationals-baseball","team":"Washington Nationals"},
  {"stadium":"oak-as-baseball","team":"Oakland Athletics"},
  {"stadium":"bal-orioles-baseball","team":"Baltimore Orioles"},
  {"stadium":"sd-padres-baseball","team":"San Diego Padres"},
  {"stadium":"pit-pirates-baseball","team":"Pittsburgh Pirates"},
  {"stadium":"cle-indians-baseball","team":"Cleveland Indians"},
  {"stadium":"tex-rangers-baseball","team":"Texas Rangers"},
  {"stadium":"tor-bluejays-baseball","team":"Toronto Blue Jays"},
  {"stadium":"sea-mariners-baseball","team":"Seattle Mariners"},
  {"stadium":"atl-braves-baseball","team":"Atlanta Braves"},
  {"stadium":"min-twins-baseball","team":"Minnesota Twins"},
  {"stadium":"tb-rays-baseball","team":"Tampa Bay Rays"},
  {"stadium":"chi-whitesox-baseball","team":"Chicago White Sox"},
  {"stadium":"chi-cubs-baseball","team":"Chicago Cubs"},
  {"stadium":"ny-yankees-baseball","team":"New York Yankees"}
];

var events=[
  {"stadium":"arz-dbacks-baseball","date":"2018-03-29","event":"Colorado Rockies at Arizona Diamondbacks"},
  {"stadium":"bal-orioles-baseball","date":"2018-03-29","event":"Minnesota Twins at Baltimore Orioles"},
  {"stadium":"cin-reds-baseball","date":"2018-03-29","event":"Washington Nationals at Cincinnati Reds"},
  {"stadium":"det-tigers-baseball","date":"2018-03-29","event":"Pittsburgh Pirates at Detroit Tigers"},
  {"stadium":"kc-royals-baseball","date":"2018-03-29","event":"Chicago White Sox at Kansas City Royals"},
  {"stadium":"la-dodgers-baseball","date":"2018-03-29","event":"San Francisco Giants at Los Angeles Dodgers"},
  {"stadium":"ny-mets-baseball","date":"2018-03-29","event":"St. Louis Cardinals at New York Mets"},
  {"stadium":"oak-as-baseball","date":"2018-03-29","event":"Los Angeles Angels of Anaheim at Oakland Athletics"},
  {"stadium":"sd-padres-baseball","date":"2018-03-29","event":"Milwaukee Brewers at San Diego Padres"},
  {"stadium":"sea-mariners-baseball","date":"2018-03-29","event":"Cleveland Indians at Seattle Mariners"},
  {"stadium":"tb-rays-baseball","date":"2018-03-29","event":"Boston Red Sox at Tampa Bay Rays"},
  {"stadium":"tex-rangers-baseball","date":"2018-03-29","event":"Houston Astros at Texas Rangers"},
  {"stadium":"tor-bluejays-baseball","date":"2018-03-29","event":"New York Yankees at Toronto Blue Jays"},
  {"stadium":"mia-marlins-baseball","date":"2018-03-29","event":"Chicago Cubs at Miami Marlins"},
  {"stadium":"atl-braves-baseball","date":"2018-03-29","event":"Philadelphia Phillies at Atlanta Braves"},
  {"stadium":"arz-dbacks-baseball","date":"2018-03-30","event":"Colorado Rockies at Arizona Diamondbacks"},
  {"stadium":"la-dodgers-baseball","date":"2018-03-30","event":"San Francisco Giants at Los Angeles Dodgers"},
  {"stadium":"oak-as-baseball","date":"2018-03-30","event":"Los Angeles Angels of Anaheim at Oakland Athletics"},
  {"stadium":"sd-padres-baseball","date":"2018-03-30","event":"Milwaukee Brewers at San Diego Padres"},
  {"stadium":"tb-rays-baseball","date":"2018-03-30","event":"Boston Red Sox at Tampa Bay Rays"},
  {"stadium":"tex-rangers-baseball","date":"2018-03-30","event":"Houston Astros at Texas Rangers"},
  {"stadium":"tor-bluejays-baseball","date":"2018-03-30","event":"New York Yankees at Toronto Blue Jays"},
  {"stadium":"mia-marlins-baseball","date":"2018-03-30","event":"Chicago Cubs at Miami Marlins"},
  {"stadium":"atl-braves-baseball","date":"2018-03-30","event":"Philadelphia Phillies at Atlanta Braves"},
  {"stadium":"arz-dbacks-baseball","date":"2018-03-31","event":"Colorado Rockies at Arizona Diamondbacks"},
  {"stadium":"bal-orioles-baseball","date":"2018-03-31","event":"Minnesota Twins at Baltimore Orioles"},
  {"stadium":"cin-reds-baseball","date":"2018-03-31","event":"Washington Nationals at Cincinnati Reds"},
  {"stadium":"det-tigers-baseball","date":"2018-03-31","event":"Pittsburgh Pirates at Detroit Tigers"},
  {"stadium":"kc-royals-baseball","date":"2018-03-31","event":"Chicago White Sox at Kansas City Royals"},
  {"stadium":"la-dodgers-baseball","date":"2018-03-31","event":"San Francisco Giants at Los Angeles Dodgers"},
  {"stadium":"ny-mets-baseball","date":"2018-03-31","event":"St. Louis Cardinals at New York Mets"},
  {"stadium":"oak-as-baseball","date":"2018-03-31","event":"Los Angeles Angels of Anaheim at Oakland Athletics"},
  {"stadium":"sd-padres-baseball","date":"2018-03-31","event":"Milwaukee Brewers at San Diego Padres"},
  {"stadium":"sea-mariners-baseball","date":"2018-03-31","event":"Cleveland Indians at Seattle Mariners"},
  {"stadium":"tb-rays-baseball","date":"2018-03-31","event":"Boston Red Sox at Tampa Bay Rays"},
  {"stadium":"tex-rangers-baseball","date":"2018-03-31","event":"Houston Astros at Texas Rangers"},
  {"stadium":"tor-bluejays-baseball","date":"2018-03-31","event":"New York Yankees at Toronto Blue Jays"},
  {"stadium":"mia-marlins-baseball","date":"2018-03-31","event":"Chicago Cubs at Miami Marlins"},
  {"stadium":"atl-braves-baseball","date":"2018-03-31","event":"Philadelphia Phillies at Atlanta Braves"},
  {"stadium":"bal-orioles-baseball","date":"2018-04-01","event":"Minnesota Twins at Baltimore Orioles"},
  {"stadium":"cin-reds-baseball","date":"2018-04-01","event":"Washington Nationals at Cincinnati Reds"},
  {"stadium":"det-tigers-baseball","date":"2018-04-01","event":"Pittsburgh Pirates at Detroit Tigers"},
  {"stadium":"kc-royals-baseball","date":"2018-04-01","event":"Chicago White Sox at Kansas City Royals"},
  {"stadium":"la-dodgers-baseball","date":"2018-04-01","event":"San Francisco Giants at Los Angeles Dodgers"},
  {"stadium":"ny-mets-baseball","date":"2018-04-01","event":"St. Louis Cardinals at New York Mets"},
  {"stadium":"sea-mariners-baseball","date":"2018-04-01","event":"Cleveland Indians at Seattle Mariners"},
  {"stadium":"tb-rays-baseball","date":"2018-04-01","event":"Boston Red Sox at Tampa Bay Rays"},
  {"stadium":"tex-rangers-baseball","date":"2018-04-01","event":"Houston Astros at Texas Rangers"},
  {"stadium":"tor-bluejays-baseball","date":"2018-04-01","event":"New York Yankees at Toronto Blue Jays"},
  {"stadium":"mia-marlins-baseball","date":"2018-04-01","event":"Chicago Cubs at Miami Marlins"},
  {"stadium":"arz-dbacks-baseball","date":"2018-04-02","event":"Los Angeles Dodgers at Arizona Diamondbacks"},
  {"stadium":"cin-reds-baseball","date":"2018-04-02","event":"Chicago Cubs at Cincinnati Reds"},
  {"stadium":"det-tigers-baseball","date":"2018-04-02","event":"Kansas City Royals at Detroit Tigers"},
  {"stadium":"hou-astros-baseball","date":"2018-04-02","event":"Baltimore Orioles at Houston Astros"},
  {"stadium":"la-angels-baseball","date":"2018-04-02","event":"Cleveland Indians at Los Angeles Angels of Anaheim"},
  {"stadium":"mil-brewers-baseball","date":"2018-04-02","event":"St. Louis Cardinals at Milwaukee Brewers"},
  {"stadium":"ny-mets-baseball","date":"2018-04-02","event":"Philadelphia Phillies at New York Mets"},
  {"stadium":"ny-yankees-baseball","date":"2018-04-02","event":"Tampa Bay Rays at New York Yankees"},
  {"stadium":"oak-as-baseball","date":"2018-04-02","event":"Texas Rangers at Oakland Athletics"},
  {"stadium":"pit-pirates-baseball","date":"2018-04-02","event":"Minnesota Twins at Pittsburgh Pirates"},
  {"stadium":"sd-padres-baseball","date":"2018-04-02","event":"Colorado Rockies at San Diego Padres"},
  {"stadium":"tor-bluejays-baseball","date":"2018-04-02","event":"Chicago White Sox at Toronto Blue Jays"},
  {"stadium":"mia-marlins-baseball","date":"2018-04-02","event":"Boston Red Sox at Miami Marlins"},
  {"stadium":"atl-braves-baseball","date":"2018-04-02","event":"Washington Nationals at Atlanta Braves"},
  {"stadium":"arz-dbacks-baseball","date":"2018-04-03","event":"Los Angeles Dodgers at Arizona Diamondbacks"},
  {"stadium":"cin-reds-baseball","date":"2018-04-03","event":"Chicago Cubs at Cincinnati Reds"},
  {"stadium":"det-tigers-baseball","date":"2018-04-03","event":"Kansas City Royals at Detroit Tigers"},
  {"stadium":"hou-astros-baseball","date":"2018-04-03","event":"Baltimore Orioles at Houston Astros"},
  {"stadium":"la-angels-baseball","date":"2018-04-03","event":"Cleveland Indians at Los Angeles Angels of Anaheim"},
  {"stadium":"mil-brewers-baseball","date":"2018-04-03","event":"St. Louis Cardinals at Milwaukee Brewers"},
  {"stadium":"ny-mets-baseball","date":"2018-04-03","event":"Philadelphia Phillies at New York Mets"},
  {"stadium":"oak-as-baseball","date":"2018-04-03","event":"Texas Rangers at Oakland Athletics"},
  {"stadium":"sd-padres-baseball","date":"2018-04-03","event":"Colorado Rockies at San Diego Padres"},
  {"stadium":"sf-giants-baseball","date":"2018-04-03","event":"Seattle Mariners at San Francisco Giants"},
  {"stadium":"tor-bluejays-baseball","date":"2018-04-03","event":"Chicago White Sox at Toronto Blue Jays"},
  {"stadium":"mia-marlins-baseball","date":"2018-04-03","event":"Boston Red Sox at Miami Marlins"},
  {"stadium":"atl-braves-baseball","date":"2018-04-03","event":"Washington Nationals at Atlanta Braves"},
  {"stadium":"arz-dbacks-baseball","date":"2018-04-04","event":"Los Angeles Dodgers at Arizona Diamondbacks"},
  {"stadium":"det-tigers-baseball","date":"2018-04-04","event":"Kansas City Royals at Detroit Tigers"},
  {"stadium":"hou-astros-baseball","date":"2018-04-04","event":"Baltimore Orioles at Houston Astros"},
  {"stadium":"la-angels-baseball","date":"2018-04-04","event":"Cleveland Indians at Los Angeles Angels of Anaheim"},
  {"stadium":"mil-brewers-baseball","date":"2018-04-04","event":"St. Louis Cardinals at Milwaukee Brewers"},
  {"stadium":"ny-mets-baseball","date":"2018-04-04","event":"Philadelphia Phillies at New York Mets"},
  {"stadium":"ny-yankees-baseball","date":"2018-04-04","event":"Tampa Bay Rays at New York Yankees"},
  {"stadium":"oak-as-baseball","date":"2018-04-04","event":"Texas Rangers at Oakland Athletics"},
  {"stadium":"pit-pirates-baseball","date":"2018-04-04","event":"Minnesota Twins at Pittsburgh Pirates"},
  {"stadium":"sd-padres-baseball","date":"2018-04-04","event":"Colorado Rockies at San Diego Padres"},
  {"stadium":"sf-giants-baseball","date":"2018-04-04","event":"Seattle Mariners at San Francisco Giants"},
  {"stadium":"tor-bluejays-baseball","date":"2018-04-04","event":"Chicago White Sox at Toronto Blue Jays"},
  {"stadium":"atl-braves-baseball","date":"2018-04-04","event":"Washington Nationals at Atlanta Braves"}
];

//JSON sort function
function sorting(json_object, key_to_sort_by) {
  function sortByKey(a, b) {
    var x = a[key_to_sort_by];
    var y = b[key_to_sort_by];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  }
  json_object.sort(sortByKey);
}

//call sort function to alphabatize by team name
sorting(teams, 'team');

//append team names to select box
$(function(){
  $.each(teams, function (i, teams) {
    $('#teamMenu').append('<option value = ' + teams.stadium + ' > ' + teams.team + ' </option>');
  });
});

//on click submit button, set var myStadium, myTeam
$('#teamSearch').click(function() {
  $('#teamTitle').text('');
  $('#list').text('');
  var myStadium = ($('#teamMenu').val());
  var myTeam = $('#teamMenu option:selected').text();

//filter through events based on myStadium to push to myGamesDates and myGamesEvents arrays
  var myGamesDates = [];
  var myGamesEvents = [];
  for (var i = 0; i < events.length; i++) {
    if (events[i].stadium == myStadium) {
      //remove - from date
      var dateSplit = events[i].date.replace(/-/g,'');
      myGamesDates.push(dateSplit);
      myGamesEvents.push(events[i].event);
    }
  }

  //check selected team for home games, if none display no home game message
  if (myGamesDates < 1 && myGamesEvents < 1) {
    $('#teamTitle').text(myTeam + ' have no home games opening week.');
  }
  else {
    //get month, day, day of week from myGamesDates
    var myDates = [];
    for (var i = 0; i < myGamesDates.length; i++) {
      var year = myGamesDates[i].substring(0,4);
      var month = myGamesDates[i].substring(4,6);
      var day = myGamesDates[i].substring(6,8);
      var fullDate = new Date(year, month-1, day);
      myDates.push(fullDate);
    }
    //shorten Dates to day month date
    var shortDates = [];
    for (var i = 0; i < myDates.length; i++) {
      var current_date = new Date (myDates[i]);
      var month_names = new Array ( );
        month_names[month_names.length] = 'January';
        month_names[month_names.length] = 'February';
        month_names[month_names.length] = 'March';
        month_names[month_names.length] = 'April';
        month_names[month_names.length] = 'May';
        month_names[month_names.length] = 'June';
        month_names[month_names.length] = 'July';
        month_names[month_names.length] = 'August';
        month_names[month_names.length] = 'September';
        month_names[month_names.length] = 'October';
        month_names[month_names.length] = 'November';
        month_names[month_names.length] = 'December';
      var day_names = new Array ( );
        day_names[day_names.length] = 'Sunday';
        day_names[day_names.length] = 'Monday';
        day_names[day_names.length] = 'Tuesday';
        day_names[day_names.length] = 'Wednesday';
        day_names[day_names.length] = 'Thursday';
        day_names[day_names.length] = 'Friday';
        day_names[day_names.length] = 'Saturday';
      shortDates.push(day_names[current_date.getDay()] + ' ' + (month_names[current_date.getMonth()] + ' ' + current_date.getDate() ));
    }
    //map myDates and myGamesEvents to myScedule array
    var mySchedule = shortDates.map((e, i) => e + ' - ' + myGamesEvents[i]);

    //insert team name in title
    $('#teamTitle').text(myTeam + ' Opening Week Home Schedule');

    //loop through mySchedule and append to ul
    for (var i = 0; i < mySchedule.length; i++) {
      $('#list').append('<li>' + mySchedule[i] + '</li>');
    }
  }
});
