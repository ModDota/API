class modifier_panic extends CDOTA_Modifier_Lua {
    // Set state
    CheckState(): {[state: number]: boolean} {
        return {
            [modifierstate.MODIFIER_STATE_COMMAND_RESTRICTED] : true
        };
    }

    // Declare functions
    DeclareFunctions(): modifierfunction[] {
        return [
            modifierfunction.MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE
        ];
    }

    GetModifierMoveSpeed_Absolute(): number { return 540; }

    // Run when modifier instance is created
    OnCreated(params: table): void {
        // Think every second
        this.StartIntervalThink(0.3);
    }

    // Called when intervalThink is triggered
    OnIntervalThink(): void {
        const parent = this.GetParent();

        // Check if parent is not too far from origin
        if (parent.GetAbsOrigin().Length2D() < 500) {
            parent.MoveToPosition(parent.GetAbsOrigin() + RandomVector(400));
        } else {
            // Otherwise redirect in the direction of the origin
            parent.MoveToPosition(RandomVector(300));
        }
    }
}