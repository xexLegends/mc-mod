public class EconomyHandler {

    public static void payForTask(PlayerEntity player, NPC npc, int cost) {
        int balance = EconomySystem.getPlayerBalance(player);
        if (balance >= cost) {
            EconomySystem.payPlayer(player, cost);
            npc.getDefaultSpeechController().speak(new SpeechContext("Task started! Your balance is now " + balance + " coins."));
        } else {
            npc.getDefaultSpeechController().speak(new SpeechContext("You need " + (cost - balance) + " more coins to start this task."));
        }
    }
}
