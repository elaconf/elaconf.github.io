# Ela Conf

Ela Conference works to eliminate the existing diversity gap in tech by empowering more individuals identifying as a woman (18+) in a way that is significant to them to be leaders and take action through practical training and thoughtful mentorships.

## Build

This site is built with [Jekyll](http://jekyllrb.com/), see [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/) for more information about installing and running Jekyll.

Recommended build: `bundle exec jekyll serve -w`

## Updating/adding organizers, sponsors, & speakers

The data for all three is saved in a yaml file in the `_data/` folder. As soon as you save (and merge) the file, Jekyll will automatically add these changes to the home page.

### Organizers

* Each organizer has her own page located in `/organizer/_posts/`
* Each file is named: `0000-01-0#-first-last.md` (where # is incremented).
* In the front matter of each file, please include:
  - `title` &mdash; first and last name
  - `image` &mdash; the name and extension of the image
  - `twitter` &mdash; the handle only
* The bio goes directly in the post content area (below the front matter)
* Save organizer images in the [/images/organizer/](https://github.com/elaconf/elaconf.github.io/tree/master/images/organizers) folder.


### Sponsors

* You can add or update sponsors from the [sponsors.yml](https://github.com/elaconf/elaconf.github.io/blob/master/_data/sponsors.yml) file. Please include:
  - `name` &mdash; name of the sponsor
  - `site` &mdash; URL to the sponsor's site
  - `image` &mdash; file name and extension of the sponsor's logo
  - `type` &mdash; the level of sponsorship taken from the [Sponsorship Packages](http://elaconf.com/sponsorship-packages/) page
* Save sponsor images in the [/images/sponsors/](https://github.com/elaconf/elaconf.github.io/tree/master/images/sponsors) folder.

### Speakers

* Each speaker has her own page located in `/speakers/_posts/`
* Each file is named: `0000-01-0#-first-last.md` (where # is incremented).
* In the front matter of each file, please include:
  - `title` &mdash; first and last name
  - `image` &mdash; the name and extension of the image
  - `twitter` &mdash; the handle only
* The bio goes directly in the post content area (below the front matter)
* Save speakers images in the [/images/speakers/](https://github.com/elaconf/elaconf.github.io/tree/master/images/speakers) folder.


### Talks

* Each talk has its own page located in `/agenda/_posts/`
* Each file is named: `yyyy-mm-dd-talk-title.md` 
* In the front matter of each file, please include:
  - `title` &mdash; title of the talk
  - `time` &mdash; start and end time of the talk
  - `room` &mdash; the room assigned
  - `speakers` &mdash; list of speakers givin the talk
  - `date` &mdash; the date and time in 24-hour format
* The talk abstract goes directly in the post content area (below the front matter)
