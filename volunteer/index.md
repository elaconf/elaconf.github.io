---
layout: page
title: Volunteers
description: Volunteer at Ela Conf to receive a ticket to the event and help our community.
---

Big thank you to our volunteers. We couldn't do this without you! Our volunteers are helping before and during the event as speaker mentors, timekeepers, sketchnoters, and more!

<div class="volunteers">
{% assign volunteers = site.data.volunteers | sort: 'name' %}
{% for volunteer in volunteers %}
<a class="volunteer" href="https://www.{{volunteer.social}}.com/{{volunteer.handle}}">
<div class="speaker-img" style="background-image:url('{{site.baseurl}}/images/volunteers/{{volunteer.name | slugify}}.jpg')"></div>
<div class="speaker-title">{{volunteer.name}}</div>
</a>
{% endfor %}
</div>
