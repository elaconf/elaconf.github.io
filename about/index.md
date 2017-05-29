---
layout: page
title: About
description: Ela Conf is a conference with a goal to create a safe, supportive, inspiring and comfortable _community_ for adult women and marginalized genders (18+) to gain the confidence needed to become leaders, speakers, and teachers in the world of tech.
---

Ela Conf is a conference with a goal to create a safe, supportive, inspiring and comfortable _community_ for adult women and marginalized genders (18+) to gain the confidence needed to become leaders, speakers, and teachers in the world of tech.

In an industry where women are so often marginalized, leadership skills are crucial to making an impact in the field and creating diversity in the workplace. Companies with greater top-level gender diversity perform better financially, are more empathetic, and more innovative. When women become leaders, the entire tech community benefits.

We use an inclusive definition of “woman” and “female” and we welcome all of those with marginalized genders and identities.

## Organizers

<div class="organizers">
  {% assign organizers = site.organizers | sort: 'order' %}
  {% for organizer in organizers %}{% if organizer.image %}
  <div class="organizer">
    <div class="organizer-img" style="background-image:url({{site.baseurl}}/images/organizers/{{organizer.image}})"></div>
    <div class="organizer-bio">
      <div class="hide-mobile">{{organizer.content}}</div>
      <div class="organizer-links">
        <a href="https://www.twitter.com/{{organizer.handle}}" class="fill-purple">{% include svg/twitter.svg %}</a>
        <a href="{{organizer.link}}" class="fill-purple">{% include svg/link.svg %}</a>
      </div>
    </div>
  </div>
  {% endif %}{% endfor %}
</div>
