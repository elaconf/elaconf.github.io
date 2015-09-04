# Ela Conf

Ela Conference works to eliminate the existing diversity gap in tech by empowering more individuals identifying as a woman (18+) in a way that is significant to them to be leaders and take action through practical training and thoughtful mentorships.

## Build

This site is built with [Jekyll](http://jekyllrb.com/), see [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/) for more information about installing and running Jekyll.

Recommended build: `bundle exec jekyll serve -w`

## Updating/adding organizers, sponsors, & speakers

The data for all three is saved in a yaml file in the `_data/` folder. As soon as you save (and merge) the file, Jekyll will automatically add these changes to the home page.

### Organizers

* You can update organizer information from the [organizers.yml](https://github.com/elaconf/elaconf.github.io/blob/master/_data/organizers.yml) file. Please include:
  - `name` &mdash; first and last
  - `image` &mdash; the name and extention of the image
  - `twitter` &mdash; the handle only
  - `bio` &mdash; start with a verb like "is" as the organizer's name will automatically start this paragraph off
* Save organizer images in the [/images/organizers/](https://github.com/elaconf/elaconf.github.io/tree/master/images/organizers) folder.


### Sponsors

* You can add or update sponsors from the [sponsors.yml](https://github.com/elaconf/elaconf.github.io/blob/master/_data/sponsors.yml) file. Please include:
  - `name` &mdash; name of the sponsor
  - `site` &mdash; URL to the sponsor's site
  - `image` &mdash; file name and extension of the sponsor's logo
  - `type` &mdash; the level of sponsorship taken from the [Sponsorship Packages](http://elaconf.com/sponsorship-packages/) page
* Save sponsor images in the [/images/sponsors/](https://github.com/elaconf/elaconf.github.io/tree/master/images/sponsors) folder.

### Speakers

* You can add or update speakers from the [speakers.yml](https://github.com/elaconf/elaconf.github.io/blob/master/_data/speakers.yml) file. Please include the following:
  - `name` &mdash; first and last
  - `image` &mdash; the name and extention of the image
  - `twitter` &mdash; the handle only
  - `topic` &mdash; this is optional, when provided it will appear above the bio
  - `bio` &mdash; start with a verb like "is" as the speaker's name will automatically start this paragraph off
* Save speakers images in the [/images/speakers/](https://github.com/elaconf/elaconf.github.io/tree/master/images/speakers) folder.
