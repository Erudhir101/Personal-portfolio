const n=[{title:"first post",summary:"this is a test teste teste teste teste teste teste teste teste teste teste teste teste teste teste",created_date:new Date("2024-01-01T00:00:00.000Z"),author:"jubileu",content:'# second post\n\n```lua\nprint("second")\n```',_meta:{filePath:"first.md",fileName:"first.md",directory:".",extension:"md",path:"first"},id:"first",html:`<h1>second post</h1>
<div class="code-container" style="position: relative;"><button class="copy-btn" data-code="print(&#x22;second&#x22;)
" aria-label="Copy to clipboard"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg></button><figure data-rehype-pretty-code-figure=""><pre style="background-color:#282A36;color:#F8F8F2" tabindex="0" data-language="lua" data-theme="dracula"><code data-language="lua" data-theme="dracula" style="display: grid;"><span data-line=""><span style="color:#8BE9FD">print</span><span style="color:#F8F8F2">(</span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">second</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">)</span></span></code></pre></figure></div>`},{title:"second post",summary:"this is a second text sometimes this happened other things don't occur with some frequence this is a second text sometimes this happened other things don't occur with some frequence",created_date:new Date("2026-01-01T00:00:00.000Z"),author:"pe depano",content:`--
**Advertisement :)**

- **[pica](https://nodeca.github.io/pica/demo/)** - high quality and fast image
  resize in browser.
- **[babelfish](https://github.com/nodeca/babelfish/)** - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with \`+\`, \`-\`, or \`*\`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\`js
var foo = function (bar) {
	return bar++;
};

// this is a comment
console.log(foo(5));
\`\`\`

## Tables

| alguma | coisa | todas |
| ------ | ----- | ----- |
| todos  | algum | assim |

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg 'The Dojocat'

## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

: Definition 1
with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\\*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
_here be dragons_
:::`,_meta:{filePath:"second.md",fileName:"second.md",directory:".",extension:"md",path:"second"},id:"second",html:`<p>--
<strong>Advertisement :)</strong></p>
<ul>
<li><strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong> - high quality and fast image
resize in browser.</li>
<li><strong><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong> - developer friendly
i18n with plurals support and easy syntax.</li>
</ul>
<p>You will like those projects!</p>
<hr>
<h1>h1 Heading 8-)</h1>
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>
<h2>Horizontal Rules</h2>
<hr>
<hr>
<hr>
<h2>Typographic replacements</h2>
<p>Enable typographer option to see result.</p>
<p>(c) (C) (r) (R) (tm) (TM) (p) (P) +-</p>
<p>test.. test... test..... test?..... test!....</p>
<p>!!!!!! ???? ,, -- ---</p>
<p>"Smartypants, double quotes" and 'single quotes'</p>
<h2>Emphasis</h2>
<p><strong>This is bold text</strong></p>
<p><strong>This is bold text</strong></p>
<p><em>This is italic text</em></p>
<p><em>This is italic text</em></p>
<p><del>Strikethrough</del></p>
<h2>Blockquotes</h2>
<blockquote>
<p>Blockquotes can also be nested...</p>
<blockquote>
<p>...by using additional greater-than signs right next to each other...</p>
<blockquote>
<p>...or with spaces between arrows.</p>
</blockquote>
</blockquote>
</blockquote>
<h2>Lists</h2>
<p>Unordered</p>
<ul>
<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
<li>Sub-lists are made by indenting 2 spaces:
<ul>
<li>Marker character change forces new list start:
<ul>
<li>Ac tristique libero volutpat at</li>
</ul>
<ul>
<li>Facilisis in pretium nisl aliquet</li>
</ul>
<ul>
<li>Nulla volutpat aliquam velit</li>
</ul>
</li>
</ul>
</li>
<li>Very easy!</li>
</ul>
<p>Ordered</p>
<ol>
<li>
<p>Lorem ipsum dolor sit amet</p>
</li>
<li>
<p>Consectetur adipiscing elit</p>
</li>
<li>
<p>Integer molestie lorem at massa</p>
</li>
<li>
<p>You can use sequential numbers...</p>
</li>
<li>
<p>...or keep all the numbers as <code>1.</code></p>
</li>
</ol>
<p>Start numbering with offset:</p>
<ol start="57">
<li>foo</li>
<li>bar</li>
</ol>
<h2>Code</h2>
<p>Inline <code>code</code></p>
<p>Indented code</p>
<div class="code-container" style="position: relative;"><button class="copy-btn" data-code="// Some comments
line 1 of code
line 2 of code
line 3 of code
" aria-label="Copy to clipboard"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg></button><pre><code>// Some comments
line 1 of code
line 2 of code
line 3 of code
</code></pre></div>
<p>Block code "fences"</p>
<div class="code-container" style="position: relative;"><button class="copy-btn" data-code="Sample text here...
" aria-label="Copy to clipboard"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg></button><pre><code>Sample text here...
</code></pre></div>
<p>Syntax highlighting</p>
<div class="code-container" style="position: relative;"><button class="copy-btn" data-code="var foo = function (bar) {
	return bar++;
};

// this is a comment
console.log(foo(5));
" aria-label="Copy to clipboard"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg></button><figure data-rehype-pretty-code-figure=""><pre style="background-color:#282A36;color:#F8F8F2" tabindex="0" data-language="js" data-theme="dracula"><code data-language="js" data-theme="dracula" style="display: grid;"><span data-line=""><span style="color:#FF79C6">var</span><span style="color:#50FA7B"> foo</span><span style="color:#FF79C6"> =</span><span style="color:#FF79C6"> function</span><span style="color:#F8F8F2"> (</span><span style="color:#FFB86C;font-style:italic">bar</span><span style="color:#F8F8F2">) {</span></span>
<span data-line=""><span style="color:#FF79C6">	return</span><span style="color:#F8F8F2"> bar</span><span style="color:#FF79C6">++</span><span style="color:#F8F8F2">;</span></span>
<span data-line=""><span style="color:#F8F8F2">};</span></span>
<span data-line=""> </span>
<span data-line=""><span style="color:#6272A4">// this is a comment</span></span>
<span data-line=""><span style="color:#F8F8F2">console.</span><span style="color:#50FA7B">log</span><span style="color:#F8F8F2">(</span><span style="color:#50FA7B">foo</span><span style="color:#F8F8F2">(</span><span style="color:#BD93F9">5</span><span style="color:#F8F8F2">));</span></span></code></pre></figure></div>
<h2>Tables</h2>
<table>
<thead>
<tr>
<th>alguma</th>
<th>coisa</th>
<th>todas</th>
</tr>
</thead>
<tbody>
<tr>
<td>todos</td>
<td>algum</td>
<td>assim</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>path to data files to supply the data that will be passed into templates.</td>
</tr>
<tr>
<td>engine</td>
<td>engine to be used for processing templates. Handlebars is the default.</td>
</tr>
<tr>
<td>ext</td>
<td>extension to be used for dest files.</td>
</tr>
</tbody>
</table>
<p>Right aligned columns</p>
<table>
<thead>
<tr>
<th align="right">Option</th>
<th align="right">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="right">data</td>
<td align="right">path to data files to supply the data that will be passed into templates.</td>
</tr>
<tr>
<td align="right">engine</td>
<td align="right">engine to be used for processing templates. Handlebars is the default.</td>
</tr>
<tr>
<td align="right">ext</td>
<td align="right">extension to be used for dest files.</td>
</tr>
</tbody>
</table>
<h2>Links</h2>
<p><a href="http://dev.nodeca.com">link text</a></p>
<p><a href="http://nodeca.github.io/pica/demo/" title="title text!">link with title</a></p>
<p>Autoconverted link <a href="https://github.com/nodeca/pica">https://github.com/nodeca/pica</a> (enable linkify to see)</p>
<h2>Images</h2>
<p><img src="https://octodex.github.com/images/minion.png" alt="Minion">
<img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat"></p>
<p>Like links, Images also have a footnote style syntax</p>
<p><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat"></p>
<p>With a reference later in the document defining the URL location:</p>
<h2>Plugins</h2>
<p>The killer feature of <code>markdown-it</code> is very effective support of
<a href="https://www.npmjs.org/browse/keyword/markdown-it-plugin">syntax plugins</a>.</p>
<h3><a href="https://github.com/markdown-it/markdown-it-emoji">Emojies</a></h3>
<blockquote>
<p>Classic markup: :wink: :cry: :laughing: :yum:</p>
<p>Shortcuts (emoticons): :-) :-( 8-) ;)</p>
</blockquote>
<p>see <a href="https://github.com/markdown-it/markdown-it-emoji#change-output">how to change output</a> with twemoji.</p>
<h3><a href="https://github.com/markdown-it/markdown-it-sub">Subscript</a> / <a href="https://github.com/markdown-it/markdown-it-sup">Superscript</a></h3>
<ul>
<li>19^th^</li>
<li>H<del>2</del>O</li>
</ul>
<h3><a href="https://github.com/markdown-it/markdown-it-ins">&#x3C;ins></a></h3>
<p>++Inserted text++</p>
<h3><a href="https://github.com/markdown-it/markdown-it-mark">&#x3C;mark></a></h3>
<p>==Marked text==</p>
<h3><a href="https://github.com/markdown-it/markdown-it-footnote">Footnotes</a></h3>
<p>Footnote 1 link<sup><a href="#user-content-fn-first" id="user-content-fnref-first" data-footnote-ref aria-describedby="footnote-label">1</a></sup>.</p>
<p>Footnote 2 link<sup><a href="#user-content-fn-second" id="user-content-fnref-second" data-footnote-ref aria-describedby="footnote-label">2</a></sup>.</p>
<p>Inline footnote^[Text of inline footnote] definition.</p>
<p>Duplicated footnote reference<sup><a href="#user-content-fn-second" id="user-content-fnref-second-2" data-footnote-ref aria-describedby="footnote-label">2</a></sup>.</p>
<h3><a href="https://github.com/markdown-it/markdown-it-deflist">Definition lists</a></h3>
<p>Term 1</p>
<p>: Definition 1
with lazy continuation.</p>
<p>Term 2 with <em>inline markup</em></p>
<p>: Definition 2</p>
<div class="code-container" style="position: relative;"><button class="copy-btn" data-code="    { some code, part of Definition 2 }

Third paragraph of definition 2.
" aria-label="Copy to clipboard"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg></button><pre><code>    { some code, part of Definition 2 }

Third paragraph of definition 2.
</code></pre></div>
<p><em>Compact style:</em></p>
<p>Term 1
~ Definition 1</p>
<p>Term 2
~ Definition 2a
~ Definition 2b</p>
<h3><a href="https://github.com/markdown-it/markdown-it-abbr">Abbreviations</a></h3>
<p>This is HTML abbreviation example.</p>
<p>It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.</p>
<p>*[HTML]: Hyper Text Markup Language</p>
<h3><a href="https://github.com/markdown-it/markdown-it-container">Custom containers</a></h3>
<p>::: warning
<em>here be dragons</em>
:::</p>
<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-first">
<p>Footnote <strong>can have markup</strong></p>
<p>and multiple paragraphs. <a href="#user-content-fnref-first" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref">↩</a></p>
</li>
<li id="user-content-fn-second">
<p>Footnote text. <a href="#user-content-fnref-second" data-footnote-backref="" aria-label="Back to reference 2" class="data-footnote-backref">↩</a> <a href="#user-content-fnref-second-2" data-footnote-backref="" aria-label="Back to reference 2-2" class="data-footnote-backref">↩<sup>2</sup></a></p>
</li>
</ol>
</section>`}];export{n as a};
