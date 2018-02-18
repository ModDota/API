# API
This repository aims to document the different interfaces relevant to Dota 2 Modding. It uses these to render http://docs.moddota.com/ and provides a repository for TypeScript declarations to be used for Panorama UI or with [TypescriptToLua](https://github.com/Perryvw/TypescriptToLua) for game code.

## File Structure
### /_data
Contains raw dumps from the engine

### /declarations/panorama/
TypeScript declarations for Panorama.
* **dota.d.ts** Declarations for interfacing with the game engine.
* **dota_enums.d.ts** Declarations for enumerations used in Panorama.
* **dota_panels.d.ts** Declarations for Panel interaction in Panorama.

### /declarations/server/
TypeScript declarations for the lua API (see [TypescriptToLua](https://github.com/Perryvw/TypescriptToLua)).
* **dota-api.d.ts** Declarations for the Lua API.
* **dota-enums.d.ts** Declarations of Lua enums.
* **dota-gameevents.d.ts** Declarations of the different game events and their event contents.
* **dota-modifier-properties.d.ts** Declarations for modifier properties on Lua modifiers.
* **dota-std.d.ts** Lua std functions used for Dota modding.

### /examples/vscript/
Example TypeScript code.
