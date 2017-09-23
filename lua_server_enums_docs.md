---
layout: null
permalink: /lua_server_enums/docs
---

```lua
{% for enum_class in site.data.lua_server_enums %}
{%- for enum_field in enum_class[1] %}
{%- if enum_field["key"] | upcase == enum_field["key"] %}
{% if enum_field contains "description"%}
--- {{enum_field["description"] | escape}}
{% endif %}
{{enum_field["key"] | escape}} = {{enum_field["value"] | append: '' | escape}}
{% endif -%}
{% endfor -%}
{% endfor %}
```
