---
layout: page
title: Torchbearers
permalink: /torchbearers/recaps
---

Session reports for the {{site.title}} campaign

{% assign reports = site.torchbearers | where: "type", "recap" %}

<ul>
  {% for report in reports reversed %}
    <li>
      <a href="{{report.absolute_path}}{{report.slug}}">{{report.title}}</a> - <i>{{report.date | date: "%e %b %Y"}}</i>
    </li>
  {% else %}
    Nothing to see here...
  {% endfor %}
</ul>