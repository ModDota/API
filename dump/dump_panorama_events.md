{| class="wikitable"
! Event
! Panel Event
! Description
|-
| <code>AddStyle(string class)</code>
| Yes
| Add a CSS class to a panel.
|-
| <code>AddStyleToEachChild(string class)</code>
| Yes
| Add a CSS class to all children of this panel.
|-
| <code>AsyncEvent(float delay, event eventToFire)</code>
| No
| Fire another event after a delay (in seconds).
|-
| <code>DOTAHideAbilityTooltip()</code>
| Yes
| Hide the ability tooltip
|-
| <code>DOTAHideBuffTooltip()</code>
| Yes
| Hide the buff tooltip
|-
| <code>DOTAHideEconItemTooltip()</code>
| Yes
| Hide the econ item tooltip.
|-
| <code>DOTAHideProfileCardBattleCupTooltip()</code>
| Yes
| Hide the profile card / battle cup tooltip.
|-
| <code>DOTAHideProfileCardTooltip()</code>
| Yes
| Hide the profile card tooltip.
|-
| <code>DOTAHideTextTooltip()</code>
| Yes
| Hide the text tooltip
|-
| <code>DOTAHideTitleImageTextTooltip()</code>
| Yes
| Hide the title image text tooltip.
|-
| <code>DOTAHideTitleTextTooltip()</code>
| Yes
| Hide the title text tooltip.
|-
| <code>DOTAShowAbilityInventoryItemTooltip(int32 entityIndex, int32 inventorySlot)</code>
| Yes
| Show tooltip for an item in the entityIndex NPC's inventory.
|-
| <code>DOTAShowAbilityTooltip(string abilityName)</code>
| Yes
| Show an ability tooltip.
|-
| <code>DOTAShowAbilityTooltipForEntityIndex(string abilityName, int32 entityIndex)</code>
| Yes
| Show an ability tooltip. Level information comes from the entity specified by the entityIndex.
|-
| <code>DOTAShowAbilityTooltipForLevel(string abilityName, int32)</code>
| Yes
| Show an ability tooltip for a specific level.
|-
| <code>DOTAShowBuffTooltip(int32 entityIndex, int32 buffSerial, bool bOnEnemy)</code>
| Yes
| Show a buff tooltip for the specified entityIndex + buff serial.
|-
| <code>DOTAShowEconItemTooltip(class item_definition_index_t itemDef, class style_index_t styleIndex, int32 heroID)</code>
| Yes
| Show the econ item tooltip for a given item, style, and hero. Use 0 for the default style, and -1 for the default hero.
|-
| <code>DOTAShowProfileCardBattleCupTooltip(uint64 steamID)</code>
| Yes
| Show the battle cup portion of the user's profile card, if it exists
|-
| <code>DOTAShowProfileCardTooltip(uint64 steamID, bool useProName)</code>
| Yes
| Show a user's profile card. Use pro name determines whether to use their professional team name if applicable.
|-
| <code>DOTAShowTextTooltip(string text)</code>
| Yes
| Show a tooltip with the given text.
|-
| <code>DOTAShowTextTooltipStyled(string text, string style)</code>
| Yes
| Show a tooltip with the given text. Also apply a CSS class named "style" to allow custom styling.
|-
| <code>DOTAShowTitleImageTextTooltip(string title, string imagePath, string text)</code>
| Yes
| Show a tooltip with the given title, image, and text.
|-
| <code>DOTAShowTitleImageTextTooltipStyled(string title, string imagePath, string text, string style)</code>
| Yes
| Show a tooltip with the given title, image, and text. Also apply a CSS class named "style" to allow custom styling.
|-
| <code>DOTAShowTitleTextTooltip(string title, string text)</code>
| Yes
| Show a tooltip with the given title and text.
|-
| <code>DOTAShowTitleTextTooltipStyled(string title, string text, string style)</code>
| Yes
| Show a tooltip with the given title and text. Also apply a CSS class named "style" to allow custom styling.
|-
| <code>IfHasClassEvent(string class, event eventToFire)</code>
| Yes
| Fire another event if this panel has a given class.
|-
| <code>IfHoverOtherEvent(string otherPanelID, event eventToFire)</code>
| Yes
| Fire another event if currently hovering over a panel with the given ID.
|-
| <code>IfNotHasClassEvent(string class, event eventToFire)</code>
| Yes
| Fire another event if this panel does not have a given class.
|-
| <code>IfNotHoverOtherEvent(string otherPanelID, event eventToFire)</code>
| Yes
| Fire another event if not currently hovering over a panel with the given ID.
|-
| <code>MovePanelDown(int32 repeatCount)</code>
| Yes
| Move down from the panel. By default, this will change the focus position, but other panel types may implement this differently.
|-
| <code>MovePanelLeft(int32 repeatCount)</code>
| Yes
| Move left from the panel. By default, this will change the focus position, but other panel types may implement this differently.
|-
| <code>MovePanelRight(int32 repeatCount)</code>
| Yes
| Move right from the panel. By default, this will change the focus position, but other panel types may implement this differently.
|-
| <code>MovePanelUp(int32 repeatCount)</code>
| Yes
| Move up from the panel. By default, this will change the focus position, but other panel types may implement this differently.
|-
| <code>PageDown()</code>
| No
| Scroll the panel down by one page.
|-
| <code>PageLeft()</code>
| No
| Scroll the panel left by one page.
|-
| <code>PagePanelDown()</code>
| Yes
| Scroll the panel down by one page.
|-
| <code>PagePanelLeft()</code>
| Yes
| Scroll the panel left by one page.
|-
| <code>PagePanelRight()</code>
| Yes
| Scroll the panel left by one page.
|-
| <code>PagePanelUp()</code>
| Yes
| Scroll the panel up by one page.
|-
| <code>PageRight()</code>
| No
| Scroll the panel right by one page.
|-
| <code>PageUp()</code>
| No
| Scroll the panel up by one page.
|-
| <code>RemoveStyle(string class)</code>
| Yes
| Remove a CSS class from a panel.
|-
| <code>RemoveStyleFromEachChild(string class)</code>
| Yes
| Remove a CSS class from all children of this panel.
|-
| <code>ScrollDown()</code>
| No
| Scroll the panel down by one line.
|-
| <code>ScrollLeft()</code>
| No
| Scroll the panel left by one line.
|-
| <code>ScrollPanelDown()</code>
| Yes
| Scroll the panel down by one line.
|-
| <code>ScrollPanelLeft()</code>
| Yes
| Scroll the panel left by one line.
|-
| <code>ScrollPanelRight()</code>
| Yes
| Scroll the panel right by one line.
|-
| <code>ScrollPanelUp()</code>
| Yes
| Scroll the panel up by one line.
|-
| <code>ScrollRight()</code>
| No
| Scroll the panel right by one line.
|-
| <code>ScrollToBottom()</code>
| Yes
| Scroll this panel to the bottom.
|-
| <code>ScrollToTop()</code>
| Yes
| Scroll this panel to the top.
|-
| <code>ScrollUp()</code>
| No
| Scroll the panel up by one line.
|-
| <code>SetChildPanelsSelected(bool selected)</code>
| Yes
| Set whether any child panels are :selected.
|-
| <code>SetInputFocus()</code>
| Yes
| Set focus to this panel.
|-
| <code>SetPanelEnabled(bool enabled)</code>
| Yes
| Sets whether the given panel is enabled
|-
| <code>SetPanelSelected(bool selected)</code>
| Yes
| Set whether this panel is :selected.
|-
| <code>TogglePanelSelected()</code>
| Yes
| Toggle whether this panel is :selected.
|-
| <code>ToggleStyle(string class)</code>
| Yes
| Toggle whether a panel has the given CSS class.
|}