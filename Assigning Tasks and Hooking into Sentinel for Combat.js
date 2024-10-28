public class NPCManager {

    public static void assignBuildTask(NPC npc, String structureType, PlayerEntity player) {
        // Example of assigning a building task to an NPC
        npc.getOrAddTrait(SentinelTrait.class);
        npc.getNavigator().setTarget(player.getLocation());
        npc.getNavigator().getLocalParameters().speedModifier(1.5);

        // Switching NPC to creative mode for building efficiency
        NPCModeSwitcher.switchMode(npc, "creative");
        npc.getDefaultSpeechController().speak(new SpeechContext("I am starting to build the " + structureType + "!"));
    }

    public static void assignGuardTask(NPC npc, PlayerEntity player) {
        // Assign the NPC to protect the player using Sentinel
        SentinelTrait sentinel = npc.getOrAddTrait(SentinelTrait.class);
        sentinel.setGuarding(player);
        npc.getDefaultSpeechController().speak(new SpeechContext("I will protect you while you build!"));
    }
}
