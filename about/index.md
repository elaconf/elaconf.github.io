---
layout: page
title: About
description: Ela Conf is a conference with a goal to create a safe, supportive, inspiring and comfortable _community_ for adult women (18+) to gain the confidence needed to become leaders, speakers, and teachers in the world of tech.
---

Ela Conf is a conference with a goal to create a safe, supportive, inspiring and comfortable _community_ for adult women (18+) to gain the confidence needed to become leaders, speakers, and teachers in the world of tech.

In an industry where women are so often marginalized, leadership skills are crucial to making an impact in the field and creating diversity in the workplace. Companies with greater top-level gender diversity perform better financially, are more empathetic, and more innovative. When women become leaders, the entire tech community benefits.

We use an inclusive definition of "woman" and "female" and we welcome trans women, genderqueer women, and non-binary people.

## Organizers

<div class="speakers">
  {% assign organizers = site.organizers | sort: 'order' %}
  {% for organizer in organizers %}{% if organizer.image %}
  <a href="{{site.baseurl}}{{organizer.url}}" class="speaker">
    <div class="speaker-img" style="background-image:url(/images/organizers/{{organizer.image}})">
    </div>
    <div class="speaker-name">{{organizer.title}}</div>
  </a>
  {% endif %}{% endfor %}
</div>