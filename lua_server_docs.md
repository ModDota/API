---
layout: null
permalink: /lua_server/docs
---
```lua
{%- assign override = site.data.override_lua_server %}
{% for server_class in site.data.lua_server %}
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
        {%- assign return_type = nil %}
        {%- if function_override contains "return" %}
            {%- assign return_type = function_override.return %}
        {%- else %}
            {%- capture return_type %}{{function[1].return | default: "void"}}{%- endcapture %}
        {%- endif %}
        
        {%- if return_type == "int" %}
            {%- assign return_type = "number" %}
        {%- endif %}
        {%- if return_type == "float" %}
            {%- assign return_type = "number" %}
        {%- endif %}
        {%- if return_type == "bool" %}
            {%- assign return_type = "boolean" %}
        {%- endif %}
        {%- if return_type == "cstring" %}
            {%- assign return_type = "string" %}
        {%- endif %}
        {%- if return_type == "variant" %}
            {%- assign return_type = "any" %}
        {%- endif %}
        {%- if return_type == "<unknown>" %}
            {%- assign return_type = "any" %}
        {%- endif %}
--- {% if function[1] contains "description" %}{{function[1].description}}{% endif %}{%- if function[1] contains "args" %}
            {%- for arg in function[1].args %}
                {%- assign arg_index = forloop.index0 %}
                {%- assign var_type = arg %}
                {%- if function_override contains "args" %}
                    {%- assign var_type = function_override.args[arg_index] %}
                {%- endif %}
                
                {%- if var_type == "int" %}
                    {%- assign var_type = "number" %}
                {%- endif %}
                {%- if var_type == "float" %}
                    {%- assign var_type = "number" %}
                {%- endif %}
                {%- if var_type == "bool" %}
                    {%- assign var_type = "boolean" %}
                {%- endif %}
                {%- if var_type == "cstring" %}
                    {%- assign var_type = "string" %}
                {%- endif %}
                {%- if var_type == "variant" %}
                    {%- assign var_type = "any" %}
                {%- endif %}
                {%- if var_type == "<unknown>" %}
                    {%- assign var_type = "any" %}
                {%- endif %}

                {%- if function[1] contains "arg_names" %}
                    {%- assign var_name = function[1].arg_names[forloop.index0] %}
                {%- else %}
                    {%- capture var_name %}{{var_type}}_{{forloop.index}}{%- endcapture %}
                {%- endif %}
                {%- if function_override contains "arg_names" %}   
                    {%- assign var_name = function_override.arg_names[arg_index] %}
                {%- endif %}
--- @param {{var_name}} {{var_type}}
            {%- endfor %}
        {%- endif %}
--- @return {{return_type}}
function {% if server_class[0] != "Global" %}{{server_class[0]}}:{% endif %}{{function[0]}}({%- if function[1] contains "args" %}
            {%- for arg in function[1].args %}
                {%- assign arg_index = forloop.index0 %}
                {%- assign var_type = arg %}
                {%- if function_override contains "args" %}
                    {%- assign var_type = function_override.args[arg_index] %}
                {%- endif %}

                {%- if var_type == "int" %}
                    {%- assign var_type = "number" %}
                {%- endif %}
                {%- if var_type == "float" %}
                    {%- assign var_type = "number" %}
                {%- endif %}
                {%- if var_type == "bool" %}
                    {%- assign var_type = "boolean" %}
                {%- endif %}
                {%- if var_type == "cstring" %}
                    {%- assign var_type = "string" %}
                {%- endif %}
                {%- if var_type == "variant" %}
                    {%- assign var_type = "any" %}
                {%- endif %}
                {%- if var_type == "<unknown>" %}
                    {%- assign var_type = "any" %}
                {%- endif %}

                {%- if function[1] contains "arg_names" %}
                    {%- assign var_name = function[1].arg_names[forloop.index0] %}
                {%- else %}
                    {%- capture var_name %}{{var_type}}_{{forloop.index}}{%- endcapture %}
                {%- endif %}
                {%- if function_override contains "arg_names" %}   
                    {%- assign var_name = function_override.arg_names[arg_index] %}
                {%- endif %}
                {{-var_name-}}
                {%- if forloop.last != true %}, {% endif %}
            {%- endfor %}
        {%- endif %})
end
    {% endfor %}
{% endfor %}

--- @return table<modifierstate, boolean>
function CDOTA_Modifier_Lua:CheckState()
end

--- @return modifierfunction[]
function CDOTA_Modifier_Lua:DeclareFunctions()
end

{%- for enum_class in site.data.lua_server_enums %}
    {%- if enum_class[0] == "modifierfunction" %}
        {% for enum_field in enum_class[1] %}
            {%- if enum_field contains "description" %}
function CDOTA_Modifier_Lua:{{enum_field["description"] | escape}}()
end
            {%- endif %}
        {%- endfor %}
    {%- endif %}
{%- endfor %}

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
