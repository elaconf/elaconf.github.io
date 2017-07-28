---
layout: page
title: About
description: Ela Conf is a conference with a goal to create a safe, supportive, inspiring and comfortable _community_ for adult marginalized genders (18+) to gain the confidence needed to become leaders, speakers, and teachers in the world of tech.
---

Ela Conf is a conference with a goal to create a safe, supportive, inspiring and comfortable _community_ for adult marginalized genders (18+) to gain the confidence needed to become leaders, speakers, and teachers in the world of tech.

Leadership skills are crucial to making an impact in the field and creating diversity in the workplace. Companies with greater top-level gender diversity perform better financially, are more empathetic, and more innovative. When marginalized individuals become leaders, the entire tech community benefits.

## Organizers

<div class="organizers-list">
  {% assign organizers = site.organizers | sort: 'order' %}
  {% for organizer in organizers %}{% if organizer.image %}
  <a href="/organizers/{{organizer.title | slugify}}/" class="organizer">
    <div class="organizer-img" style="background-image:url({{site.baseurl}}/images/organizers/{{organizer.image}})"></div>
    <div class="organizer-bio">
      {{organizer.title}}
    </div>
  </a>
  {% endif %}{% endfor %}
</div>
