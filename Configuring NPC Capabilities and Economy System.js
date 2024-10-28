public class ConfigManager {
    private static boolean economyEnabled = true;
    private static boolean combatEnabled = true;

    public static boolean isEconomyEnabled() {
        return economyEnabled;
    }

    public static void toggleEconomy() {
        economyEnabled = !economyEnabled;
        System.out.println("Economy system " + (economyEnabled ? "enabled" : "disabled") + "!");
    }

    public static boolean isCombatEnabled() {
        return combatEnabled;
    }

    public static void toggleCombat() {
        combatEnabled = !combatEnabled;
        System.out.println("Combat system " + (combatEnabled ? "enabled" : "disabled") + "!");
    }
}
