---
layout: null
permalink: /lua_bots/docs
---
```lua
{%- assign override = site.data.override_lua_bots %}
{% for server_class in site.data.lua_bots %}
    {% if server_class[0] != "Global" %}
 --- @class {{ server_class[0] }} {% if server_class[1] contains "extends" %} : {{server_class[1].extends}}{% endif %}
--- {{server_class[1].description}}
    {% endif %}
    {% for function in server_class[1].functions %}
        {%- assign function_override = nil %}
        {%- if override contains server_class[0] %}
            {%- for override_class in override %}
                {%- if override_class[0] != server_class[0] %}{% continue %}{% endif %}
                {%- if override_class[1].functions contains function[0] %}
                    {%- for override_function in override_class[1].functions %}
                        {%- if override_function[0] != function[0] %}{% continue %}{% endif %}
                        {%- assign function_override = override_function[1] %}
                        {%- break %}
                    {%- endfor %}
                {%- endif %}
                {%- break %}
            {%- endfor %}            
        {%- endif %}
--- {% if function[1] contains "description" %}{{function[1].description}}{% endif %}{%- if function[1] contains "args" %}
            {%- for arg in function[1].args %}
                {%- assign arg_index = forloop.index0 %}
                {%- assign var_type = arg %}
                {%- if function[1] contains "arg_names" %}
                    {%- assign var_name = function[1].arg_names[forloop.index0] %}
                {%- else %}
                    {%- capture var_name %}{{var_type}}_{{forloop.index}}{%- endcapture %}
                {%- endif %}
                {%- if function_override %}
                    {%- if function_override contains "args" %}
                        {%- assign var_type = function_override.args[arg_index] %}
                    {%- endif %}
                    {%- if function_override contains "arg_names" %}   
                        {%- assign var_name = function_override.arg_names[arg_index] %}
                    {%- else if (function[1] contains "arg_names") == false %}  
                        {%- capture var_name %}{{var_type}}_{{arg_index | increment}}{%- endcapture %}
                    {%- endif %}
                {%- endif %}
--- @param {{var_name}} {{var_type}}
            {%- endfor %}
        {%- endif %}
        {%- if function_override contains "return" %}
--- @return {{function_override.return}}
        {%- else %}
--- @return {{function[1].return | default: "void"}}
        {%- endif %}
function {% if server_class[0] != "Global" %}{{server_class[0]}}:{% endif %}{{function[0]}}({%- if function[1] contains "args" %}
            {%- for arg in function[1].args %}
                {%- assign arg_index = forloop.index0 %}
                {%- assign var_type = arg %}
                {%- if function[1] contains "arg_names" %}
                    {%- assign var_name = function[1].arg_names[forloop.index0] %}
                {%- else %}
                    {%- capture var_name %}{{var_type}}_{{forloop.index}}{%- endcapture %}
                {%- endif %}
                {%- if function_override %}
                    {%- if function_override contains "args" %}
                        {%- assign var_type = function_override.args[arg_index] %}
                    {%- endif %}
                    {%- if function_override contains "arg_names" %}   
                        {%- assign var_name = function_override.arg_names[arg_index] %}
                    {%- else if (function[1] contains "arg_names") == false %}  
                        {%- capture var_name %}{{var_type}}_{{arg_index | increment}}{%- endcapture %}
                    {%- endif %}
                {%- endif %}
                {{-var_name-}}
                {%- if forloop.last != true %}, {% endif %}
            {%- endfor %}
        {%- endif %})
end
    {% endfor %}
{% endfor %}
```