---
layout: null
permalink: /lua_server/docs
---
```lua
{% for server_class in site.data.lua_server %}
{% if server_class[0] != "Global" %}
--- @class {{ server_class[0] }} {% if server_class[1] contains "extends" %} : {{server_class[1].extends}}{% endif %}
--- {{server_class[1].description}}
{% endif %}
{% for function in server_class[1].functions %}
--- {% if function[1] contains "description" %}{{function[1].description}}{% endif %}{% if function[1] contains "args" %}{%for arg in function[1].args %}{% if function[1] contains "arg_names" %}
--- @param {{function[1].arg_names[forloop.index0]}} {{arg}}{% else %}
--- @param {{arg}}_{{forloop.index}} {{arg}}{% endif %}{% endfor %}{% endif %}
--- @return {{function[1].return | default: "void"}}
function {% if server_class[0] != "Global" %}{{server_class[0]}}:{% endif %}{{function[0]}}({% if function[1] contains "args" %}{%for arg in function[1].args %}{% if function[1] contains "arg_names" %}{{function[1].arg_names[forloop.index0]}}{% else %}{{arg}}_{{forloop.index}}{% endif %}{% if forloop.last != true %}, {% endif %}{% endfor %}{% endif %})
end
{% endfor %}
{% endfor %}

--- @type CScriptParticleManager
ParticleManager = {}

--- @type CScriptHeroList
HeroList = {}

--- @type CDOTAGamerules
GameRules = {}

--- @type CDOTA_PlayerResource
PlayerResource = {}

--- @type CEntities
Entities = {}

--- @type Convars
ConVars = {}

--- @type CCustomGameEventManager
CustomGameEventManager = {}

--- @type CCustomNetTableManager
CustomNetTables = {}

--- @type CDOTATutorial
Tutorial = {}
```
