public class NPCModeSwitcher {

    public static void switchMode(NPC npc, String mode) {
        if (mode.equals("creative")) {
            // Use Citizens API to set NPC game mode
            npc.getEntity().setGameMode(GameMode.CREATIVE);
            npc.getDefaultSpeechController().speak(new SpeechContext("Switched to creative mode for faster building!"));
        } else if (mode.equals("survival")) {
            npc.getEntity().setGameMode(GameMode.SURVIVAL);
            npc.getDefaultSpeechController().speak(new SpeechContext("Switched to survival mode for gathering resources!"));
        }
    }
}
