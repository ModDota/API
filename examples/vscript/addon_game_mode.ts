require("lib.typescript");

// Link lua modifier
LinkLuaModifier("modifier_panic", "modifiers/modifier_panic.lua", LuaModifierType.LUA_MODIFIER_MOTION_NONE);

function Precache(context: CScriptPrecacheContext): void {
    // Nothing to precache...
}

function Activate(): void {
    // Set general settings
    const mode = GameRules.GetGameModeEntity();
    mode.SetFogOfWarDisabled(true);
    mode.SetCustomGameForceHero("npc_dota_hero_jakiro");
    mode.SetWeatherEffectsDisabled(true);
    mode.SetCustomAttributeDerivedStatValue(AttributeDerivedStats.DOTA_ATTRIBUTE_AGILITY_ARMOR, 0);
    GameRules.SetHeroRespawnEnabled(false);

    // Listen for state change
    ListenToGameEvent("game_rules_state_change", OnStateChange, null);
}

function OnStateChange(): void {
    const state = GameRules.State_Get();

    if (state == DOTA_GameState.DOTA_GAMERULES_STATE_PRE_GAME) {
        // Start game as soon as we hit the pregame
        StartGame();
    }
}

function StartGame(): void {
    // Figure out who the players in the game are
    let players: PlayerID[] = [];
    for (let pID = 0; pID < DOTALimits_t.DOTA_MAX_TEAM_PLAYERS; pID++) {
        if (PlayerResource.IsValidPlayer(<PlayerID>pID)) {
            players.push(<PlayerID>pID);
        }
    }

    // Create instance of our game mode object
    const myGameMode = new MyGameMode(players);
    myGameMode.Init();
}

class MyGameMode {
    // Declare instance variables
    players: PlayerID[];

    constructor(players: PlayerID[]) {
        this.players = players;
    }

    Init() {
        // Print number of players
        print(`Starting game with ${this.players.length} players!`);

        // Listen for spawns
        ListenToGameEvent("npc_spawned", (event: NpcSpawnedEvent) => this.OnNpcSpawn(event), null);
    }

    OnNpcSpawn(event: NpcSpawnedEvent) {
        // Apply our lua modifier to the spawned unit
        // We can cast to npc since this is the 'npc_spawned' event
        const unit = EntIndexToHScript(event.entindex) as CDOTA_BaseNPC;
        unit.AddNewModifier(null, null, "modifier_panic", {duration: 8});
    }
}