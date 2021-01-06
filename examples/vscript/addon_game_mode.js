require("lib.typescript");
// Link lua modifier
LinkLuaModifier("modifier_panic", "modifiers/modifier_panic.lua", LuaModifierType.LUA_MODIFIER_MOTION_NONE);
function Precache(context) {
    // Nothing to precache...
}
function Activate() {
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
function OnStateChange() {
    const state = GameRules.State_Get();
    if (state == DOTA_GameState.DOTA_GAMERULES_STATE_PRE_GAME) {
        // Start game as soon as we hit the pregame
        StartGame();
    }
}
function StartGame() {
    // Figure out who the players in the game are
    let players = [];
    for (let pID = 0; pID < DOTALimits_t.DOTA_MAX_TEAM_PLAYERS; pID++) {
        if (PlayerResource.IsValidPlayer(pID)) {
            players.push(pID);
        }
    }
    // Create instance of our game mode object
    const myGameMode = new MyGameMode(players);
    myGameMode.Init();
}
class MyGameMode {
    constructor(players) {
        this.players = players;
    }
    Init() {
        // Print number of players
        print(`Starting game with ${this.players.length} players!`);
        // Listen for spawns
        ListenToGameEvent("npc_spawned", (event) => this.OnNpcSpawn(event), null);
        // Set ExecuteOrder filter
        GameRules.GetGameModeEntity().SetExecuteOrderFilter((ctx, order) => this.OnExecuteOrder(order), this);
    }
    OnNpcSpawn(event) {
        // Apply our lua modifier to the spawned unit
        // We can cast to npc since this is the 'npc_spawned' event
        const unit = EntIndexToHScript(event.entindex);
        unit.AddNewModifier(null, null, "modifier_panic", { duration: 8 });
    }
    OnExecuteOrder(order) {
        print(order.order_type);
        return true;
    }
}
