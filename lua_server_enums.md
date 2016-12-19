---
layout: page
title: Lua Enums (Server)
permalink: /lua_server_enums/
---

{% for enum_class in site.data.lua_server_enums %}
# {{ enum_class[0] }}
{% for enum_field in enum_class[1] %}
* {{enum_field["key"] | escape}} = {{enum_field["value"] | escape}}
{% if enum_field contains "description"%}
    * {{enum_field["description"] | escape}}
{% endif %}
{% endfor %}
{% endfor %}