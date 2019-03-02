---
layout: page
title: Lua (Server)
permalink: /lua_server/
---

* TOC
{:toc}

{% for server_class in site.data.lua_server %}
## {{ server_class[0] }}
{% if server_class[1] contains "extends" %}*extends **{{server_class[1].extends}}***  {% endif %}

{% for function in server_class[1].functions %}
* {{function[0]}}(
{% if function[1] contains "args" %}{%for arg in function[1].args %}{% if function[1] contains "arg_names" %}*{{arg}}* {{function[1].arg_names[forloop.index0]}}{% else %}{{arg}}{% endif %}{% if forloop.last != true %}, {% endif %}{% endfor %}{% endif %} ) : {{function[1].return | default: "void"}}
{% if function[1] contains "description" %}    * {{function[1].description}}{% endif %}
{% endfor %}
{% endfor %}