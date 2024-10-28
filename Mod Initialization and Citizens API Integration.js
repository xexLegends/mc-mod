package com.example.creaturebuilder;

import net.citizensnpcs.api.CitizensAPI;
import net.citizensnpcs.api.npc.NPC;
import net.citizensnpcs.api.npc.NPCRegistry;
import net.citizensnpcs.api.trait.Trait;
import net.citizensnpcs.api.trait.trait.SentinelTrait;
import net.citizensnpcs.api.util.DataKey;
import net.minecraft.entity.player.PlayerEntity;
import net.minecraftforge.event.server.ServerStartingEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;

// Main mod class
@Mod("creaturebuilder")
public class CreatureBuilderMod {
    public static final String MOD_ID = "creaturebuilder";
    private static NPCRegistry npcRegistry;

    public CreatureBuilderMod() {
        // Register mod event listeners
        MinecraftForge.EVENT_BUS.register(this);
    }

    @SubscribeEvent
    public void onServerStarting(ServerStartingEvent event) {
        // Initialize Citizens 2 NPC Registry
        npcRegistry = CitizensAPI.getNPCRegistry();
        System.out.println("Citizens 2 integration initialized!");
    }

    public static NPC createOrFetchNPC(PlayerEntity player, String npcName) {
        // Fetch existing NPC or create a new one
        NPC npc = npcRegistry.getByName(npcName);
        if (npc == null) {
            npc = npcRegistry.createNPC(EntityType.PLAYER, npcName);
            npc.spawn(player.getLocation());
        }
        return npc;
    }
}
