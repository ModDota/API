---
layout: null
permalink: /lua_server_enums/declatation
---

```lua
{%- for enum_class in site.data.lua_server_enums %}
    {%- if enum_class[0] != "_Unscoped" %}
@CompileMembersOnly
declare enum {{enum_class[0] | escape}} {
    {%- endif %}
    {%- for enum_field in enum_class[1] %}
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
    /**
     * {{enum_field["description"] | escape}}
     */
        {%- endif %}
        {%- assign prefix = "    " %}
        {%- assign suffix = "" %}
        {%- if enum_class[0] == "_Unscoped" %}
            {%- assign prefix = "declare var " %}
            {%- assign suffix = ";" %}
        {%- else %}
            {%- if forloop.last == false %}
                {%- assign suffix = "," %}
            {%- endif %}
        {%- endif %}
{{prefix}}{{enum_field["key"] | escape}} = {{enum_field["value"] | append: '' | escape}}{{suffix}}
        {%- endif %}
    {%- endfor %}
    {%- if enum_class[0] != "_Unscoped" %}
}
    {% endif %}
{%- endfor %}
```
