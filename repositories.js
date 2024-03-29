/**
 * Repositories
 */
const path = require("path");

const {
  WAVE_SECRET,
  TURTLE_SECRET,
  SHELL_SECRET,
  ANCHOR_SECRET,
  HOOKS_SECRET,
  SUNRISE_SECRET,
  PRE_REGISTRATION_SECRET,
  SHELL_2018_SECRET,
  SHELL_2017_SECRET
} = process.env;

const pull = "git pull";
const build = "yarn build";
const update = "yarn"; // update dependencies
const restart = "yarn restart";
const reload = "systemctl reload nginx";

module.exports = [
  {
    path: path.resolve(__dirname, "../Waves"),
    secret: WAVE_SECRET,
    commands: `${pull} && ${update} && ${build} && ${restart}`
  },
  {
    path: path.resolve(__dirname, "../Turtle"),
    secret: TURTLE_SECRET,
    commands: `${pull} && ${update} && ${restart}`
  },
  {
    path: path.resolve(__dirname, "../Shell"),
    secret: SHELL_SECRET,
    commands: `${pull} && ${update} && ${restart}`
  },
  {
    path: path.resolve(__dirname, "../Anchor"),
    secret: ANCHOR_SECRET,
    commands: `${pull} && ${update} && ${build} && ${reload}`
  },
  {
    path: path.resolve(__dirname, "../Sunrise"),
    secret: SUNRISE_SECRET,
    commands: `${pull} && ${update} && ${build} && ${reload}`
  },
  {
    path: path.resolve(__dirname),
    secret: HOOKS_SECRET,
    commands: `${pull} && ${update} && ${restart}`
  },
  {
    path: path.resolve(__dirname, "../Shell-Pre-registration-2019"),
    secret: PRE_REGISTRATION_SECRET,
    commands: pull
  },
  {
    path: path.resolve(__dirname, "../shellhacks-2018"),
    secret: SHELL_2018_SECRET,
    commands: pull
  },
  {
    path: path.resolve(__dirname, "../shellhacks-2017"),
    secret: SHELL_2017_SECRET,
    commands: pull
  }
];
