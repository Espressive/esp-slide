# esp-slide

- [esp-slide](#esp-slide)
 - [Why?](#why)
 - [Get Started](#get-started)
 - [Command Options](#options)
 - [Slide Markdown Syntax](#slide-markdown-syntax)
 - [Styles](#styles)

## esp-slide

`esp-slide` is a fully contained solution to generate simple slideshow presentations from markdown.

#### Why?

There are a lot of options out there for creating presentations. Many of these tools are more complex than most teams need for simple presentations and documentation to be shared between teams. We wanted a way to simplify this process and make it easy to check presentations into our repositories without having to include large, proprietary files.

`remark` is a widely used solution which works great but it requires a presentation to be built and served. We do not want to have to check a bunch of redundant build files into our repositories, just the markdown for the slides.

We decided to combine `remark` with `browser-sync`, a self contained tool that is capable of serving files, watching them for changes, and injecting those changes into the browser.

#### Get Started

It is recommended to install esp-slide globally so you can create a slideshow from any location in your file system.

```
npm install @espressive/esp-slide -g 
```

Now you can generate a slideshow from a markdown file from any directory by running: 
```
esp-slide <filename>
```

#### Command Options

By default, `esp-slide` will generate a slideshow from the file named `SLIDES.md` in the root of your current folder if you do not pass a filename or a path to a file.

#### Slide Markdown Syntax

`remark` uses most basic formatting that people are used for basic text, images, etc. For slides, there are [additional markdown rules exclusive to `remark` for things like slide dividers, background images, templates, etc](https://github.com/gnab/remark/wiki/Markdown).

#### Styles

In the > 1.0 releases, all styles are self contained with Espressive company branding. If you would like to customize the styles for this project, that can only be done by forking the project and publishing your own.

If there is interest in the future we may update this project with an easy way to customize presentations by defining overrides in a project config file.