---
title: Sponsor
layout: page
description: Your sponsorship will make Ela Conf 2017 even better and support marginalized genders in tech.
---

Ela is a conference and community with a goal to create a safe, supportive, inspiring and comfortable space for adult (18+) marginalized genders to gain the confidence needed to become leaders, speakers, writers, and teachers in the world of tech.

Ela Conf is simply not possible without your support. We aim to keep ticket costs low while also offering childcare stipends, financial and diversity grants, cover all meals, secure a centrally located venue, reimburse speaker travel and lodging, and host a networking party following the event. The spirit of the event focuses on providing a platform for new and experienced speakers to share their stories and knowledge.

<p><a class="button" href="/docs/ela-prospectus-2017.pdf">2017 Sponsorship Prospectus</a></p>

Reach out to us at [hello@elaconf.com](mailto:hello@elaconf.com) to become a sponsor.

## 2017 Sponsors

<div class="sponsors">
{% for sponsor in site.data.sponsors %}
{% assign sponsorName = sponsor.name | downcase | slugify %}
{% assign img = '/sponsors/' | append: sponsorName | append: '.svg' %}
<a href="{{sponsor.site}}" class="sponsor">{% include {{img}} %}</a>
{% endfor %}
</div>