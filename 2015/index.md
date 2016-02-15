---
layout: review
title: 2015 Recap
image: https://farm2.staticflickr.com/1458/24660731299_2dd433d7bf_k.jpg
toc:
- Speakers
- Videos
- Photos
- Evaluation
- Blog posts
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
        titleTextStyle: {fontSize: 22, bold: false, fontName: 'Strait' },
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
        titleTextStyle: {fontSize: 22, bold: false, fontName: 'Strait' },
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
        titleTextStyle: {fontSize: 22, bold: false, fontName: 'Strait' },
        colors: ['#f77557', '#50ddc2', '#5c63a9', '#a758dc', '#231947'],
        backgroundColor: '#faecd0',
        fontName: 'Open Sans'
      };

      var chart = new google.visualization.BarChart(document.getElementById('total'));

      chart.draw(data, options);
    }
  </script>
---

ELA Conf is a conference with a goal to create a safe, supportive, inspiring and comfortable community for adult women (18+) to gain the confidence needed to become leaders, speakers, and teachers in the world of tech. 

Our very first ELA Conf happened on November 20 and 21, 2015 at Huntsman Hall in Philadelphia, Pennsylvania. On Friday night we hosted a meet and greet with scheduled lightning talks and then opened the floor to anyone who wanted to speak.

Saturday's day-long event featured 8 main stage talks and 2 break-out sessions with 3 workshops, panels, or talks each. We concluded Saturday with a networking event.

Overall, we had 97 attendees including 26 speakers, 12 sponsors, 4 volunteers, and 4 organizers. All profits were donated to Girl Develop It.

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

<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PLB1PViL_KEtc0yNMpoKTOJnnVMv0MLIwB" frameborder="0" allowfullscreen></iframe>

## Photos

<div class="photos">
<img src="https://farm2.staticflickr.com/1565/24934960801_86c78c5ee3_b.jpg" alt="ELA Conf" class="img-wide">
<img src="https://farm2.staticflickr.com/1718/24401526593_495dd46dbb_b.jpg" alt="ELA Conf">
<img src="https://farm2.staticflickr.com/1578/25001973526_dc501310e2_b.jpg" alt="ELA Conf">
<img src="https://farm2.staticflickr.com/1642/25028285435_47ac9c7246_b.jpg" alt="ELA Conf" class="img-wide">
<img src="https://farm2.staticflickr.com/1607/24910292952_bf4392ef5a_b.jpg" alt="ELA Conf">
<img src="https://farm2.staticflickr.com/1656/24910358082_900b159882_b.jpg" alt="ELA Conf">
<img src="https://farm2.staticflickr.com/1681/24401540583_453bcf162a_b.jpg" alt="ELA Conf">
<img src="https://farm2.staticflickr.com/1493/24935119821_7770fdc1bf_b.jpg" alt="ELA Conf">
<img src="https://farm2.staticflickr.com/1578/24910324462_d651e7e027_b.jpg" alt="ELA Conf">
<img src="https://farm2.staticflickr.com/1502/25028393575_8fa67190c8_b.jpg" alt="ELA Conf">
<img src="https://farm2.staticflickr.com/1543/24935145311_8f3fd08cf5_b.jpg" alt="ELA Conf">
<img src="https://farm2.staticflickr.com/1515/24732872630_26f7e7d492_b.jpg" alt="ELA Conf">
</div>

Photos by Nhu Nguyen, [see the full album](https://photos.google.com/share/AF1QipP96oYJKS4OJISmoxoPSnhjrxl4rltT1CJOzjjvP6pk4m1aLyzUaca5WTwEes1Tfg?key=RHFIT2lleWg0ZWtMcEdnekdSQTRNeENpbUlaNFRR).

## Evaluation

<div id="total" style="width: 100%; height: 450px;"></div>

<div id="participate" style="width: 100%; height: 450px;"></div>

<div id="attend" style="width: 100%; height: 450px;"></div>

### What did you like most about ELA Conf?


> The sense of community

> Interacting with powerful and inspirational women

> The quality of the talks was amazing! I loved hearing from people who aren't necessarily the usual big names on the speaker circuit, but had amazing and inspiring things to say. The lineup was awesome.

> The inclusive vibe of the event.

> I loved all of the personal stories and becoming more informed on the resources available to increase tech knowledge.

> The openness of everyone that was there. It felt like an environment where we could be ourselves and share really personal stories.

> I loved everything about this conference. The combination of personal experience and content was both education and interesting.

> Everything was fabulous - from Saron's keynote to the imposter syndrome panel to the impromptu lightening talks on Friday. ELA Conf was great because of the people and the knowledge-sharing.

> What I liked most about the ELA Conf were speakers and the breakout sessions. I learned so much and everyone was extremely supportive. As someone who is new to the industry, I felt welcomed and encouraged. I also loved the opportunity to meet new people and hear their stories.

> The supportive atmosphere, the warmth and kindness of fellow attendees, and resources.

> All of the speakers were very accessible, and seemed sincerely invested in my learning.


### Any additional comments about the conference?


> Really amazing work. Congratulations.

> Loved it!! I can't wait for next year!

> A wonderful, wonderful day. Thank you for putting on such an inspiring day!!

> Thank you so much for organizing this. I'm really looking forward to next year's!

> Let's do it all again soon, yeah? :)

> It ruled and I'm so so so honored to have been a part of it.

> It was overall an amazing experience. I wish more women from my area (Central PA) would have been able to attend. Hopefully we can get more on board for the next time, or create a similar experience here.

> Please have this conference next year. Great for people new to the Tech world.

> The organizers deserve a million cookies, lots of love, and the knowledge that they've changed everyone's life for the better.

> So great--PLEASE PLEASE PLEASE do it again!

> Would love to be more involved next year!

> So glad I saw the post on Technically Philly about it. I'm in energy, not tech. But it is a very male-dominated field; I thought all the talks I attended were applicable to my industry, too.

> Amazing conference!

> THANK YOU for the awesome experience!

> Amazing job.

> There was a great amount of diversity!

> Great job! Looking forward to next year...



## Blog posts

Many of our attendees wrote blog posts about their experience, read about ELA Conf through their eyes:

* [Where are the women in tech? Right here. And they’re organized and taking over.](http://killerfemme.com/2015/11/22/where-are-the-women-in-tech-right-here/) by Eleanor Whitney
* [The Sisterhood of the ELA Conf](https://medium.com/@ajpeddakotla/the-sisterhood-of-the-ela-conf-cd3fbc1cba41#.z13032tzn) by Arti Peddakotla
* [Getting Started Speaking Workshop at ELA Conf](http://laurenpittenger.com/getting-started-speaking-workshop-ela-conf/) by Lauren Pittenger
* [My Love Letter to ELA Conf](http://www.erin-good.com/blog/2015/11/23/my-love-letter-to-ela-conf) by Erin Good
* [How these 3 women found their place in the tech scene](http://technical.ly/philly/2015/11/23/dawn-mcdougall-code-for-philly-ela-conf/) by Juliana Reyes
* [My first non-tech talk at ElaConf](http://www.yprabhu.com/2015/11/my-first-non-tech-talk-at-elaconf.html) by Yash Prabhu


