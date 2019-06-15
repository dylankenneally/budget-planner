# Backlog of items to do for the Budget Planner app
## Not prioritised / groomed, more of a dump of items

## Guiding principles
- An application to **explore new technology**, as well as be a **public example** of model web based tech for interested parties
- The idea is to **fine tune** skills, learn **new techniques** and explore tech I don't have time to look at during work hours
- Must still be **functional**, working, software
- The code doesn't need to be perfect, the above are more important for this **experiment**
- Must be **responsive**, mobile ready

## Tech stack to work with
- [x] Node JS
- [x] React JS, inc. hooks
- [x] Material UI
- [x] Travis CI/CD
- [x] i18next
- [ ] eslint
- [ ] Redux, maybe
- [ ] Docker, maybe

## Build infrastructure
- [x] Automated builds on Travis CI/CD
- [ ] Eslint checking, failing builds as appropriate
- [ ] PR's using eslint, `prebuild` step, on CI/CD before allowing pulling
- [ ] GitHub infrastructure
    - [x] PR templates
    - [ ] Issue templates
    - [ ] Contributing guide
    - [x] License
    - [ ] Explore GitHub projects, replace this backlog? Epics? User stories?

## UI framework
- [x] i18n / l10n strategy in place (i18next?)
- [x] Material UI
- [ ] Custom Material UI theme?
- [ ] Additional l10n translations, only en-US at the moment

## Primary features
- [ ] Budget entry (single)
- [ ] Budget group
- [ ] Summary group / chart
- [ ] Customisation of entries (will require persistance model)

## Data persistance
- [ ] Local storage
- [ ] Back end persistance (will require OAuth model)
  - [ ] Mongo web service
  - [ ] REST server end points

## OAuth (needed for back end storage)
- [ ] Popular providers
  - [ ] Facebook
  - [ ] Twitter
  - [ ] Google

## Deployment
- [ ] Automated
- [ ] GitHub Pages
- [ ] Digital Ocean
- [ ] AWS

### Snag list, low priority items to do
- favicon
