# Ela Conf [![Build Status](https://travis-ci.org/elaconf/elaconf.github.io.svg)](https://travis-ci.org/elaconf/elaconf.github.io)

Ela Conf works to eliminate the existing diversity gap in tech by empowering more individuals identifying as a woman (18+) in a way that is significant to them to be leaders and take action through practical training and thoughtful mentorships.

## Build

This site is built with [Jekyll](http://jekyllrb.com/), see [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/) for more information about installing and running Jekyll.

Recommended build: `bundle exec jekyll serve -w`

## Updating/adding organizers, talks, sponsors, & speakers

### Organizers

* Each organizer has her own page located in `_organizers/`
* In the front matter of each file, please include:
  - `title` &mdash; first and last name
  - `image` &mdash; the name and extension of the image. Save images in the `images/organizers/` folder.
  - `twitter` &mdash; the handle only
* The bio goes directly in the post content area (below the front matter)

<!--

### Speakers

* Each speaker has her own page located in `_speakers/`
* Each file is named: `first-last.md`.
* In the front matter of each file, please include:
  - `title` &mdash; first and last name
  - `image` &mdash; optional. The name and extension of the image. Save images in the `/images/speakers/` folder. (If you don't define an image, we'll automatically use the profile picture from the social site you define below.)
  - `social` &mdash; twitter, facebook, instagram, gravatar
  - `handle` &mdash; social handle from platform chosen in `social`
  - `topic` &mdash; optional.
* The bio goes directly in the post content area (below the front matter)

![image](https://cloud.githubusercontent.com/assets/2180540/10857560/2b1f4af8-7f25-11e5-951f-b817bbc24217.png)



### Sponsors

* You can add or update sponsors from the [_data/sponsors.yml](https://github.com/elaconf/elaconf.github.io/blob/master/_data/sponsors.yml) file. Please include:
  - `name` &mdash; name of the sponsor
  - `site` &mdash; URL to the sponsor's site
  - `image` &mdash; file name and extension of the sponsor's logo
  - `level` &mdash; the level of sponsorship taken from the `_data/levels.yml`
* Save sponsor images in the [/images/sponsors/](https://github.com/elaconf/elaconf.github.io/tree/master/images/sponsors) folder.


### Talks

* Each talk has its own page located in `_agenda/`
* Each file is named: `##-title.md`
* In the front matter of each file, please include:
  - `title` &mdash; title of the talk
  - `time` &mdash; start and end time of the talk
  - `room` &mdash; the room assigned
  - `speakers` &mdash; list of speakers giving the talk
  - `date` &mdash; the date and time in 24-hour format
  - `breakout` &mdash; if the talk is during a breakout session add the number `breakout: 1` or `breakout: 2`
* The talk abstract goes directly in the post content area (below the front matter)

![image](https://cloud.githubusercontent.com/assets/2180540/10857537/07e55e1a-7f25-11e5-8604-b4d5eee38c28.png)

### Jobs

* Each jobs is located in `_data/jobs.yml`
* Each jobs must have:
  * `position` &mdash; name of the job
  * `company` &mdash; name of the company
  * `link` &mdash; link to the job listing on the company's website
  * `image` &mdash; file name of sponsor's image found in `images/sponsors/`
-->