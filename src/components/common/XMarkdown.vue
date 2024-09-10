<template>
  <div class="xarr-markdown markdown-body" v-html="html"></div>
</template>

<script lang="ts">
import MarkdownIt from "markdown-it";
import Vue from "vue";

import markdownItAbbr from "markdown-it-abbr";
import markdownItEmoji from "markdown-it-emoji";
import markdownItFootnote from "markdown-it-footnote";
import markdownItTaskLists from "markdown-it-task-lists";

import markdownItContainer from "markdown-it-container";

import "github-markdown-css";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
export default Vue.extend({
  props: {
    source: {
      type: String,
    },
  },
  data() {
    return {
      md: new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return (
                '<pre><code class="hljs">' +
                hljs.highlight(str, { language: lang, ignoreIllegals: true })
                  .value +
                "</code></pre>"
              );
            } catch (__) {}
          }

          return (
            '<pre><code class="hljs">' +
            this.md.utils.escapeHtml(str) +
            "</code></pre>"
          );
        },
      })
        .use(markdownItFootnote)
        .use(markdownItTaskLists, { enabled: true })
        .use(markdownItAbbr)
        .use(markdownItEmoji)
        .use(markdownItContainer, "warning"),
    };
  },
  computed: {
    html: {
      get() {
        return this.md.render(this.source);
      },
    },
  },
  created() {
    // const markdown = new MarkdownIt();
    // console.log(this.source, "source");
    // markdown.render(this.source ?? "");
  },
});
</script>

<style lang="less" scoped>
.xarr-markdown {
  background: none;
  color: #555;
  :deep(table) tr {
    background: none;
  }
}
</style>