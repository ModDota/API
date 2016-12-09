---
layout: page
title: Panorama Enums
permalink: /panorama_enums/
---

{% for enum_class in site.data.panorama_enums %}
# {{ enum_class[0] }}
{% for enum_field in enum_class[1] %}
* {{enum_field[0]}} = {{enum_field[1]}}
{% endfor %}
{% endfor %}