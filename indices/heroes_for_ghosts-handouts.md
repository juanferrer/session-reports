---
layout: page
title: Heroes for Ghosts
permalink: /heroes_for_ghosts/handouts
---

Session reports for the {{site.title}} campaign

{% assign reports = site.heroes_for_ghosts | where: "type", "handout" | sort: "number"%}

<ul>
    {% for report in reports %}
        <li>
            <a href="{{report.absolute_path}}{{report.slug}}">{{report.title}}</a>
        </li>
    {% else %}
        Nothing to see here...
    {% endfor %}
</ul>