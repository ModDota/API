---
layout: page
title: Lua Enums (Bots)
permalink: /lua_bots_enums/
---

* TOC
{:toc}

{% for enum_class in site.data.lua_bots_enums %}
# {{ enum_class[0] }}
{% for enum_field in enum_class[1] %}
* {{enum_field["key"] | escape}} = {{enum_field["value"] | escape}}
{% if enum_field contains "description"%}
    * {{enum_field["description"] | escape}}
{% endif %}
{% endfor %}
{% endfor %}