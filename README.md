# Even
Even is a clean, responsive theme based on the Hugo theme with the same name featuring categories, tags and pagination.

![even screenshot](https://github.com/getzola/even/blob/master/screenshot.png?raw=true)

## Contents

- [Installation](#installation)
- [Options](#options)
  - [Top menu](#top-menu)
  - [Title](#title)

## Installation
First download this theme to your `themes` directory:

```bash
cd themes
git clone https://github.com/getzola/even.git
```
and then enable it in your `config.toml`:

```toml
theme = "even"
```

The theme requires tags and categories taxonomies to be enabled in your `config.toml`:

```toml
taxonomies = [
    # You can enable/disable RSS
    {name = "categories", feed = true},
    {name = "tags", feed = true},
]
```
If you want to paginate taxonomies pages, you will need to overwrite the templates
as it only works for non-paginated taxonomies by default.

It also requires to put the posts in the root of the `content` folder and to enable pagination, for example in `content/_index.md`:

```
+++
paginate_by = 5
sort_by = "date"
+++
```

## Options

### Top-menu
Set a field in `extra` with a key of `even_menu`:

```toml
# This is the default menu
even_menu = [
    {url = "$BASE_URL", name = "Home"},
    {url = "$BASE_URL/categories", name = "Categories"},
    {url = "$BASE_URL/tags", name = "Tags"},
    {url = "$BASE_URL/about", name = "About"},
]
```

If you put `$BASE_URL` in a url, it will automatically be replaced by the actual
site URL.

### Title
The site title is shown on the header. As it might be different from the `<title>`
element that the `title` field in the config represents, you can set the `even_title`
instead.

### KaTeX math formula support

This theme contains math formula support using [KaTeX](https://katex.org/),
which can be enabled by setting `katex_enable = true` in the `extra` section
of `config.toml`:

```toml
[extra]
katex_enable = true
```

After enabling this extension, the `katex` short code can be used in documents:
* `{{ katex(body="\KaTeX") }}` to typeset a math formula inlined into a text,
  similar to `$...$` in LaTeX
* `{% katex(block=true) %}\KaTeX{% end %}` to typeset a block of math formulas,
  similar to `$$...$$` in LaTeX

#### Automatic rendering without short codes

Optionally, `\\( \KaTeX \\)` inline and `\\[ \KaTeX \\]` / `$$ \KaTeX $$`
block-style automatic rendering is also supported, if enabled in the config:

```toml
[extra]
katex_enable = true
katex_auto_render = true
```

### Special stylesheet classes

#### Rendering YouTube videos in 16:9

If you want to display an embedded YouTube video in 16:9, add class
`.youtube-responsive` when using the appropriate shortcode, e.g.:

```
{{ youtube(id="aqz-KE-bpKQ", class="youtube-responsive") }}
```

The height of the video will be scaled on different devices
responsively.
