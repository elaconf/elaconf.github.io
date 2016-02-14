---
layout: review
title: 2015 Recap
head: |
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script type="text/javascript">
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart);
    function drawChart() {
      
      // Attend again?
      var data = google.visualization.arrayToDataTable([
        ['Response', 'Count'],
        ['Maybe with some improvement', 2],
        ['Yes! Definitely!', 40]
      ]);

      var options = {
        title: 'Would you attend ELA Conf again?',
        titleTextStyle: {fontSize: 20, bold: false },
        colors: ['#f77557', '#50ddc2', '#5c63a9', '#a758dc', '#231947'],
        backgroundColor: '#faecd0',
        fontName: 'Open Sans'
      };

      var chart = new google.visualization.PieChart(document.getElementById('attend'));

      chart.draw(data, options);
      
      // Participate
      var data = google.visualization.arrayToDataTable([
        ['Response', 'Count'],
        ['Attendee', 31],
        ['Speaker, moderator, panelist', 11]
      ]);

      var options = {
        title: 'How did you participate at the conference?',
        titleTextStyle: {fontSize: 20, bold: false },
        colors: ['#f77557', '#50ddc2', '#5c63a9', '#a758dc', '#231947'],
        backgroundColor: '#faecd0',
        fontName: 'Open Sans'
      };

      var chart = new google.visualization.PieChart(document.getElementById('participate'));

      chart.draw(data, options);
      
      // Total
      var data = google.visualization.arrayToDataTable([
        ['Response', 'Count'],
        ['Completed evaluation', 42],
        ['Total attendees', 97]
      ]);

      var options = {
        title: 'Total evaluations completed v. total attendees',
        titleTextStyle: {fontSize: 20, bold: false },
        colors: ['#f77557', '#50ddc2', '#5c63a9', '#a758dc', '#231947'],
        backgroundColor: '#faecd0',
        fontName: 'Open Sans'
      };

      var chart = new google.visualization.BarChart(document.getElementById('total'));

      chart.draw(data, options);
    }
  </script>
---

Our very first ELA Conf happened on November 20 and 21, 2015 at Huntsman Hall in Philadelphia, Pennsylvania. On Friday night we hosted a meet and greet with scheduled lightning talks and then opened the floor to anyone who wanted to speak.

Saturday's day-long event featured 8 main stage talks and 2 break-out sessions with 3 workshops, panels, or talks each. We concluded Saturday with a networking event.

Overall, we had 97 attendees including 26 speakers, 12 sponsors, 4 volunteers, and 4 organizers.

## Speakers

<div class="speakers">
  {% assign speakers = (site.posts | where: "category", "speakers" ) %}
  {% for speaker in speakers reversed %}{% if speaker.image %}
  <a href="{{speaker.url}}" class="speaker">
    <div class="speaker-img" style="background-image:url(/images/speakers/{{speaker.image}})"></div>
    <div class="speaker-name">{{speaker.title}}</div>
  </a>
  {% endif %}{% endfor %}
</div>

## Videos


## Photos

[Photos by Nhu Nguyen](https://photos.google.com/share/AF1QipP96oYJKS4OJISmoxoPSnhjrxl4rltT1CJOzjjvP6pk4m1aLyzUaca5WTwEes1Tfg?key=RHFIT2lleWg0ZWtMcEdnekdSQTRNeENpbUlaNFRR)


## Evaluation

<div id="total" style="width: 100%; height: 450px;"></div>

<div id="participate" style="width: 100%; height: 450px;"></div>

<div id="attend" style="width: 100%; height: 450px;"></div>


## Blog posts by attendees

Many of our attendees wrote blog posts about their experience, read about ELA Conf through their eyes:

* [Where are the women in tech? Right here. And they’re organized and taking over.](http://killerfemme.com/2015/11/22/where-are-the-women-in-tech-right-here/) by Eleanor Whitney
* [The Sisterhood of the ELA Conf](https://medium.com/@ajpeddakotla/the-sisterhood-of-the-ela-conf-cd3fbc1cba41#.z13032tzn) by Arti Peddakotla
* [Getting Started Speaking Workshop at ELA Conf](http://laurenpittenger.com/getting-started-speaking-workshop-ela-conf/) by Lauren Pittenger
* [My Love Letter to ELA Conf](http://www.erin-good.com/blog/2015/11/23/my-love-letter-to-ela-conf) by Erin Good
* [How these 3 women found their place in the tech scene](http://technical.ly/philly/2015/11/23/dawn-mcdougall-code-for-philly-ela-conf/) by Juliana Reyes
* [My first non-tech talk at ElaConf](http://www.yprabhu.com/2015/11/my-first-non-tech-talk-at-elaconf.html) by Yash Prabhu


