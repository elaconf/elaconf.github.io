---
title: Jobs
description: Job posts from Ela Conf's amazing sponsors
layout: page
---

Want to see your company's job post on this page? [Become a sponsor](/sponsor) and we'll cross-post it to the Ela Conf #jobs Slack channel and it will appear on our slideshow that will play throughout the conference.

<div class="jobs">
{% for job in site.data.jobs %}
<div class="job">
  <div class="job-image flex-no-shrink">
    {% assign image = job.company | slugify | append: '.svg' | prepend: 'sponsors/' %}
    {% include {{image}} %}
  </div>
  <div class="job-details">
    <a href="{{job.link}}">{{job.position}} at {{job.company}}</a>
  </div>
</div>
{% endfor %}
</div>