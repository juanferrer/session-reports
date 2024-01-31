---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

{% for campaign in site.collections %}
{% if campaign.label != "posts" %}
<a href="{{campaign.label}}">{{campaign.pretty_name}}</a><br/>
{% endif %}
{% endfor %}