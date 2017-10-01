---
layout: null
permalink: /lua_server_enums/docs
---

```lua
{%- for enum_class in site.data.lua_server_enums %}
    {% for enum_field in enum_class[1] %}
        {%- assign found = nil %}
        {%- if enum_class[0] == "_Unscoped" %}
            {%- for test_enum_class in site.data.lua_server_enums %}
                {%- if test_enum_class[0] == "_Unscoped" %}
                    {%- continue %}
                {%- endif %}
                {%- for test_enum_field in test_enum_class[1] %}
                    {%- if test_enum_field["key"] == enum_field["key"] %}
                        {%- assign found = true %}
                    {%- endif %}
                {%- endfor %}
            {%- endfor %}
        {%- endif %}
        {%- if found == true %}
            {%- continue %}
        {%- endif %}
        {%- capture enum_key_upper %}{{enum_field["key"] | upcase}}{% endcapture %}
        {%- if enum_key_upper == enum_field["key"] %}
        {%- if enum_field contains "description" %}
--- {{enum_field["description"] | escape}}
        {%- endif %}
        {%- unless enum_class[0] == "_Unscoped" %}
--- @type {{enum_class[0] | escape}}
        {%- endunless %}
{{enum_field["key"] | escape}} = {{enum_field["value"] | append: '' | escape}}
        {%- endif %}
    {%- endfor %}
{%- endfor %}
```
