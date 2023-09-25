import React from 'react';
import {Grid} from "@mui/material";
import PersonalizedCard from "../components/PersonalizedCard.jsx";

const Potions = () => {

    const potions = [
        {
            "id": "84d0e169-1b55-45b3-8328-29942238e535",
            "type": "potion",
            "attributes": {
                "slug": "ageing-potion",
                "name": "Ageing Potion",
                "effect": "Aged drinker temporarily",
                "side_effects": null,
                "characteristics": "Green",
                "time": null,
                "difficulty": "Advanced",
                "ingredients": "Newt spleens, Bananas, An orange snake, A green leaf",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/5/51/Ageing_Potion_PM.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Ageing_Potion"
            }
        },
        {
            "id": "d0f198da-2cfc-47b7-9a3e-d3fdc1d91993",
            "type": "potion",
            "attributes": {
                "slug": "alihotsy-draught",
                "name": "Alihotsy Draught",
                "effect": "Uncontrollable laughter",
                "side_effects": null,
                "characteristics": "Blue fumes and colour",
                "time": null,
                "difficulty": null,
                "ingredients": "Alihotsy",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/4/46/Alihotsy_Draught.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Alihotsy_Draught"
            }
        },
        {
            "id": "c851281c-4a7f-4938-a7d8-6ea904279aff",
            "type": "potion",
            "attributes": {
                "slug": "amortentia",
                "name": "Amortentia",
                "effect": "Love potion that caused a powerful infatuation or obsession in the drinker",
                "side_effects": null,
                "characteristics": "Mother-of-pearl sheen, Spiralling steam, Scent was multi-faceted and varied based on what the person liked",
                "time": null,
                "difficulty": "Advanced",
                "ingredients": "Pearl Dust",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/4/49/Amortentia.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Amortentia"
            }
        },
        {
            "id": "866ad016-a87b-4e6f-a3a5-8c94a3968329",
            "type": "potion",
            "attributes": {
                "slug": "angel-s-trumpet-draught",
                "name": "Angel's Trumpet Draught",
                "effect": "Poisonous",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": "Angel's Trumpet",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/c/c8/Angels_Trumpet_Draught.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Angel's_Trumpet_Draught"
            }
        },
        {
            "id": "802689a4-2ee9-415b-9a2d-465cd10488b8",
            "type": "potion",
            "attributes": {
                "slug": "antidote",
                "name": "Antidote",
                "effect": null,
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Antidote"
            }
        },
        {
            "id": "19940cfb-8582-44fe-8ceb-dafe2801c03c",
            "type": "potion",
            "attributes": {
                "slug": "antidote-to-common-poisons",
                "name": "Antidote to Common Poisons",
                "effect": "Counteracted the effects of common poisons",
                "side_effects": null,
                "characteristics": "Teal-coloured",
                "time": null,
                "difficulty": "Beginner to Moderate",
                "ingredients": "1 Bezoar, 2 measures of Standard Ingredient, 1 pinch of unicorn horn, 2 mistletoe berries",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/9/96/Antidote-to-common-poisons.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Antidote_to_Common_Poisons"
            }
        },
        {
            "id": "924b5040-16ba-4e65-b969-4f726f6a0cde",
            "type": "potion",
            "attributes": {
                "slug": "antidote-to-uncommon-poisons",
                "name": "Antidote to Uncommon Poisons",
                "effect": "Cures the effects of minor poisons",
                "side_effects": null,
                "characteristics": "Green in colour",
                "time": null,
                "difficulty": "Moderate",
                "ingredients": "Fire Seeds, Powdered graphorn horn, Billywig stings, Chizpurfle carapaces",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/b/bd/Antidote_to_Uncommon_Poisons.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Antidote_to_Uncommon_Poisons"
            }
        },
        {
            "id": "4441a90b-605d-4e9c-9861-bf4230305b42",
            "type": "potion",
            "attributes": {
                "slug": "antidote-to-veritaserum",
                "name": "Antidote to Veritaserum",
                "effect": "Counters the effect of Veritaserum",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": "Advanced",
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/3/3e/Antidote_to_Veritaserum_HM.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Antidote_to_Veritaserum"
            }
        },
        {
            "id": "5e041014-4814-4f44-a1ab-896d98d3f124",
            "type": "potion",
            "attributes": {
                "slug": "anti-paralysis-potion",
                "name": "Anti-Paralysis Potion",
                "effect": "Cured paralysis",
                "side_effects": null,
                "characteristics": "Pink in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/a/aa/Anti-Paralysis_Potion.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Anti-Paralysis_Potion"
            }
        },
        {
            "id": "6882b682-d095-4f6d-be6a-c558e2caa3e1",
            "type": "potion",
            "attributes": {
                "slug": "armadillo-bile-mixture",
                "name": "Armadillo Bile Mixture",
                "effect": "Corrosive",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": "Bat wings, Armadillo bile, Wormwood, Armotentia, Acromantula venom, Aconite, Water (likely)",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/0/0a/Armadillo_Bile_Mixture.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Armadillo_Bile_Mixture"
            }
        },
        {
            "id": "8d0d6b9f-414a-4d91-a7c8-fe6b5a6d60c8",
            "type": "potion",
            "attributes": {
                "slug": "babbling-beverage",
                "name": "Babbling Beverage",
                "effect": "Caused the drinker to speak nonsense",
                "side_effects": null,
                "characteristics": "Red or yellow in colour, Smelt like bubblegum",
                "time": null,
                "difficulty": "Moderate",
                "ingredients": "Valerian sprigs, Aconite, Dittany",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/5/5d/HM_y3_Babbling_Beverage.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Babbling_Beverage"
            }
        },
        {
            "id": "710e0a6f-cfa3-418d-a4ae-571d47137686",
            "type": "potion",
            "attributes": {
                "slug": "baneberry-potion",
                "name": "Baneberry Potion",
                "effect": "Poison",
                "side_effects": null,
                "characteristics": "Blood red",
                "time": null,
                "difficulty": null,
                "ingredients": "Baneberry",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/9/93/Baneberry_Potion.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Baneberry_Potion"
            }
        },
        {
            "id": "bbe5d5e2-9561-41c3-9e98-f6bfb272e80e",
            "type": "potion",
            "attributes": {
                "slug": "baruffio-s-brain-elixir",
                "name": "Baruffio's Brain Elixir",
                "effect": "Allegedly increases one's brain power",
                "side_effects": "Possibly harmful mental side effects if brewed incorrectly",
                "characteristics": "Green in colour",
                "time": "Twelve hours",
                "difficulty": null,
                "ingredients": "Leaping Toadstools, Frog brains, Runespoor eggs, Powdered dragon claw",
                "inventors": "Baruffio (presumed)",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/8/8d/Baruffio%E2%80%99s_Brain_Elixir_HM.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Baruffio's_Brain_Elixir"
            }
        },
        {
            "id": "98d42a4c-07a8-4722-a926-7a1e3771d8fc",
            "type": "potion",
            "attributes": {
                "slug": "beautification-potion",
                "name": "Beautification Potion",
                "effect": "Enhances the attractiveness of the drinker's physical appearance",
                "side_effects": null,
                "characteristics": "Changes colour, Emits multi-colour bubbles",
                "time": null,
                "difficulty": "Moderate",
                "ingredients": "Fairy wings, Morning dew, Rose Petals, Lady's Mantle, Unicorn hair, Ginger roots, Boomslang skin",
                "inventors": "Zygmunt Budge, Sacharissa Tugwood",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/8/8b/Beautification_Potion_Bottle.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Beautification_Potion"
            }
        },
        {
            "id": "6c2424ba-c925-4c91-89aa-da3fdd4518f6",
            "type": "potion",
            "attributes": {
                "slug": "befuddlement-draught",
                "name": "Befuddlement Draught",
                "effect": "Recklessness",
                "side_effects": null,
                "characteristics": "Dark green or red in colour",
                "time": null,
                "difficulty": "Ordinary Wizarding Level",
                "ingredients": "Scurvy grass, Lovage, Sneezewort",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/d/d3/BefuddlementDraughtHM.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Befuddlement_Draught"
            }
        },
        {
            "id": "954a6e63-9d9c-4ddc-b9f6-b6c259d47bc5",
            "type": "potion",
            "attributes": {
                "slug": "blood-replenishing-potion",
                "name": "Blood-Replenishing Potion",
                "effect": "Replenishes lost blood",
                "side_effects": null,
                "characteristics": "Dark red in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/4/49/BloodReplenishingPotionHM.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Blood-Replenishing_Potion"
            }
        },
        {
            "id": "51264a62-3f63-4767-90ef-e9383b6a8d36",
            "type": "potion",
            "attributes": {
                "slug": "bloodroot-poison",
                "name": "Bloodroot Poison",
                "effect": "Poisonous",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": "Bloodroot",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/e/eb/Bloodroot_Poison.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Bloodroot_Poison"
            }
        },
        {
            "id": "a1cbba54-01e7-49e6-a2a3-42d4482b95f5",
            "type": "potion",
            "attributes": {
                "slug": "bruise-removal-paste",
                "name": "Bruise removal paste",
                "effect": "Healed bruises in an hour",
                "side_effects": null,
                "characteristics": "Thick, yellow paste",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": "Fred and George Weasley",
                "manufacturers": "Fred and George Weasley",
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Bruise_removal_paste"
            }
        },
        {
            "id": "0f382a76-134b-4c7b-b3d9-aeaaa2ce95ff",
            "type": "potion",
            "attributes": {
                "slug": "bulgeye-potion",
                "name": "Bulgeye Potion",
                "effect": "Causes eyes to bulge (presumably)",
                "side_effects": null,
                "characteristics": "Emerald green in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/2/25/Bulgeye.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Bulgeye_Potion"
            }
        },
        {
            "id": "e94c7570-6791-48fb-b1ce-2f189e1b6742",
            "type": "potion",
            "attributes": {
                "slug": "bundimun-pomade",
                "name": "Bundimun Pomade",
                "effect": null,
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Bundimun_Pomade"
            }
        },
        {
            "id": "38b1187e-0ee2-46c7-9f78-ba4a276ca16d",
            "type": "potion",
            "attributes": {
                "slug": "bundimun-secretion",
                "name": "Bundimun Secretion",
                "effect": null,
                "side_effects": null,
                "characteristics": "Lime green in colour, Emits vapours",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/a/a0/Ooze.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Bundimun_Secretion"
            }
        },
        {
            "id": "3c5d3d5d-b469-45e3-aed4-68b4b91ab8fb",
            "type": "potion",
            "attributes": {
                "slug": "burn-healing-paste",
                "name": "Burn-healing paste",
                "effect": "Healed burns",
                "side_effects": null,
                "characteristics": "Orange in colour, Thick consistency",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Burn-Healing_Paste"
            }
        },
        {
            "id": "95fafbfc-6caf-4fef-a468-61946a6a81b9",
            "type": "potion",
            "attributes": {
                "slug": "burning-bitterroot-balm",
                "name": "Burning Bitterroot Balm",
                "effect": "Soothing",
                "side_effects": null,
                "characteristics": "Blue-coloured",
                "time": null,
                "difficulty": null,
                "ingredients": "Bitter root",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/b/bc/Burning_Bitterroot_Balm.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Burning_Bitterroot_Balm"
            }
        },
        {
            "id": "9d494492-4cf6-4f0b-a1d1-fcbc449bea3b",
            "type": "potion",
            "attributes": {
                "slug": "calming-draught",
                "name": "Calming Draught",
                "effect": "Calms the drinker",
                "side_effects": "Unpleasant results if consumed by certain animals, Burning mouth sensation, watery eyes or uncontrollable sobbing if too much peppermint oil added",
                "characteristics": "Blue in colour",
                "time": null,
                "difficulty": "Moderate to Advanced",
                "ingredients": "Lavender, Crocodile heart, Peppermint",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/0/06/HM_y4_Calming_Draught.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Calming_Draught"
            }
        },
        {
            "id": "0560ca45-4806-4165-91c1-5a2b21cc3611",
            "type": "potion",
            "attributes": {
                "slug": "caxambu-style-borborygmus-potion",
                "name": "Caxambu Style Borborygmus Potion",
                "effect": "Provokes stomach growling",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": "Apothecary Department",
                "image": "https://static.wikia.nocookie.net/harrypotter/images/8/8a/Caxambu_Style_Borborygmus_Potion.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Caxambu_Style_Borborygmus_Potion"
            }
        },
        {
            "id": "a87f0575-fc5c-469a-b19f-84cceaa678f8",
            "type": "potion",
            "attributes": {
                "slug": "cheese-based-potions",
                "name": "Cheese-Based Potions",
                "effect": null,
                "side_effects": null,
                "characteristics": "Yellow in colour",
                "time": null,
                "difficulty": "Advanced",
                "ingredients": "Cheese",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/3/39/Cheese_Based_Potion_HM_Icon.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Cheese-Based_Potions"
            }
        },
        {
            "id": "218eec6c-829b-4be3-becf-443a5d63ec19",
            "type": "potion",
            "attributes": {
                "slug": "chelidonium-miniscula",
                "name": "Chelidonium Miniscula",
                "effect": null,
                "side_effects": null,
                "characteristics": "Dark yellow in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/e/e3/Chelidonium_Miniscula.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Chelidonium_Miniscula"
            }
        },
        {
            "id": "88ef8349-b43f-4c8e-8b47-dac5a213008a",
            "type": "potion",
            "attributes": {
                "slug": "confusing-concoction",
                "name": "Confusing Concotion",
                "effect": "Confusion",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": "Moderate to advanced",
                "ingredients": "Scurvy grass, Lovage, Sneezewort",
                "inventors": null,
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Confusing_Concoction"
            }
        },
        {
            "id": "dfbea5f2-23f0-4b63-9382-e549c3e33967",
            "type": "potion",
            "attributes": {
                "slug": "cough-potion",
                "name": "Cough Potion",
                "effect": "Cured coughing",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": "Advanced",
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/6/6e/Cough_Potion_HM_Icon.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Cough_potion"
            }
        },
        {
            "id": "3b34b543-ee1b-409d-90fa-dde3553ccc2d",
            "type": "potion",
            "attributes": {
                "slug": "cupid-crystals",
                "name": "Cupid Crystals",
                "effect": "Causes the drinker to become infatuated with the giver of the potion",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": "Pearl Dust",
                "inventors": "Fred and George Weasley",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/9/97/CupidCrystals.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Cupid_Crystals"
            }
        },
        {
            "id": "07aa85ca-bc47-490f-af19-f93552e3d48c",
            "type": "potion",
            "attributes": {
                "slug": "cure-for-boils",
                "name": "Cure for Boils",
                "effect": "Removes boils",
                "side_effects": "Causes nasty boils to erupt on skin if brewed badly",
                "characteristics": "Blue in colour, Emits pink smoke when completed",
                "time": null,
                "difficulty": "Beginner",
                "ingredients": "Dried nettles, 6 snake fangs, 4 horned slugs, 2 porcupine quills, Pungous Onions, Flobberworm Mucus, Ginger root, Shrake spines",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/4/4b/Cure_for_Boils_2.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Cure_for_Boils"
            }
        },
        {
            "id": "67809c80-057d-4f1e-a58b-257505d23e0f",
            "type": "potion",
            "attributes": {
                "slug": "dawdle-draught",
                "name": "Dawdle Draught",
                "effect": "Helps deal with Traces",
                "side_effects": null,
                "characteristics": "Orange in colour",
                "time": "Six hours",
                "difficulty": null,
                "ingredients": "Valerian root, Sopophorous bean, Butterscotch, Hermit crab shell",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/b/b6/Dawdle_Draught.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Dawdle_Draught"
            }
        },
        {
            "id": "b4755ad6-c75e-4564-8d29-888a0aabc4d1",
            "type": "potion",
            "attributes": {
                "slug": "death-cap-draught",
                "name": "Death-Cap Draught",
                "effect": "Poisonous",
                "side_effects": null,
                "characteristics": "Red in colour",
                "time": null,
                "difficulty": null,
                "ingredients": "Death-Cap",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/7/7f/Death-Cap_Draught.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Death-Cap_Draught"
            }
        },
        {
            "id": "dcc6dab2-e06a-4436-a9b0-0927a1d2810c",
            "type": "potion",
            "attributes": {
                "slug": "death-potion",
                "name": "Death potion",
                "effect": "Highly corrosive, death on contact",
                "side_effects": null,
                "characteristics": "Black in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": "Magical Congress of the United States of America (presumably)",
                "image": "https://static.wikia.nocookie.net/harrypotter/images/3/3d/Death_Potion_FB1.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Death_potion"
            }
        },
        {
            "id": "3b1ef716-67cf-4866-bfe4-80358a4760c9",
            "type": "potion",
            "attributes": {
                "slug": "deflating-draught",
                "name": "Deflating Draught",
                "effect": "Deflated the target",
                "side_effects": null,
                "characteristics": "Green in colour",
                "time": null,
                "difficulty": "Ordinary Wizarding Level",
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/9/9b/Deflating_Draught_HM.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Deflating_Draught"
            }
        },
        {
            "id": "c071b1e9-b2f6-4e58-a4e2-5aefbd4ebdef",
            "type": "potion",
            "attributes": {
                "slug": "developing-solution",
                "name": "Developing solution",
                "effect": "Develops moving photographs",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Developing_solution"
            }
        },
        {
            "id": "361a3e4c-fb7c-4724-a8b6-3f62eaac930e",
            "type": "potion",
            "attributes": {
                "slug": "dizziness-draught",
                "name": "Dizziness Draught",
                "effect": "Dizziness",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/3/37/Dizziness_Draught.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Dizziness_Draught"
            }
        },
        {
            "id": "295eed6e-9cbc-48e4-afe7-b122efe3cd33",
            "type": "potion",
            "attributes": {
                "slug": "dogbane-potion",
                "name": "Dogbane Potion",
                "effect": "Poisonous to dogs (possibly)",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": "Dogbane (possibly)",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/e/e9/Dogbane_Potion.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Dogbane_Potion"
            }
        },
        {
            "id": "ab3ac8a0-abce-44ae-8e68-f1f4c654c5cc",
            "type": "potion",
            "attributes": {
                "slug": "dogbreath-potion",
                "name": "Dogbreath Potion",
                "effect": "Gives drinker fiery breath",
                "side_effects": null,
                "characteristics": "Purple-coloured",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/6/68/Dogbreath_Potion.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Dogbreath_Potion"
            }
        },
        {
            "id": "0da081d7-319d-46d6-a291-22927cd9f49c",
            "type": "potion",
            "attributes": {
                "slug": "doxycide",
                "name": "Doxycide",
                "effect": "Temporarily stunned Doxies so that the pests could be removed from a home",
                "side_effects": null,
                "characteristics": "Black in colour, Typically delivered as a spray",
                "time": null,
                "difficulty": "Moderate",
                "ingredients": "Bundimun Ooze, Streeler shells, Dragon liver, Hemlock essence, Tormentil tincture, Cowbane essence",
                "inventors": "Zygmunt Budge",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/d/d1/Doxycide-potion-part-2.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Doxycide"
            }
        },
        {
            "id": "14c8279b-3fca-4b28-b7e3-b1d36a4431ed",
            "type": "potion",
            "attributes": {
                "slug": "dragon-dung-fertiliser",
                "name": "Dragon dung fertiliser",
                "effect": "Promotes the growth of plants",
                "side_effects": null,
                "characteristics": "Light green in colour",
                "time": null,
                "difficulty": "Moderate/Advanced",
                "ingredients": "Sloth brain, 7 pieces of Dragon dung, Stewed Mandrake, 2 rat spleens, Toasted dragonfly thoraxes, 3 Flying Seahorses",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/7/70/Dragon_dung_fertiliser.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Dragon_dung_Fertiliser"
            }
        },
        {
            "id": "b9d5dcca-b374-4cda-be0f-d695f0324399",
            "type": "potion",
            "attributes": {
                "slug": "dragon-poison",
                "name": "Dragon Poison",
                "effect": "Poisonous",
                "side_effects": null,
                "characteristics": "Dark green in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/9/92/Dragon_Poison.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Dragon_Poison"
            }
        },
        {
            "id": "eb77454b-694f-4f8e-ad5f-c38c839e0b66",
            "type": "potion",
            "attributes": {
                "slug": "dragon-tonic",
                "name": "Dragon Tonic",
                "effect": "Cures sick dragons",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": "1 Eagle owl feather, 3 Peacock feathers, 3 Giant Purple Toad warts",
                "inventors": null,
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Dragon_Tonic"
            }
        },
        {
            "id": "62daec13-4393-4637-bc87-ba336fdf4568",
            "type": "potion",
            "attributes": {
                "slug": "draught-of-living-death",
                "name": "Draught of Living Death",
                "effect": "Caused the drinker to fall into a deep, death-like slumber",
                "side_effects": null,
                "characteristics": "Turned pale lilac colour then clear",
                "time": null,
                "difficulty": "Advanced",
                "ingredients": "Standard potioning water, Powdered Root of Asphodel, Infusion of Wormwood, Valerian root, A Sopophorous bean, A Sloth brain, Moondew, Flower head",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/e/e8/Draught_of_living_death.gif",
                "wiki": "https://harrypotter.fandom.com/wiki/Draught_of_Living_Death"
            }
        },
        {
            "id": "b3b0761e-3264-4e20-b696-d044d3184ca6",
            "type": "potion",
            "attributes": {
                "slug": "draught-of-peace",
                "name": "Draught of Peace",
                "effect": "Relieved anxiety",
                "side_effects": "Overdoing the ingredients may have resulted in a long or irreversible sleep",
                "characteristics": "Emitted light silver vapour",
                "time": "90 minutes",
                "difficulty": "Advanced",
                "ingredients": "Powdered moonstone, Syrup of Hellebore, Stewed Mandrake, Powdered Unicorn horn, Powdered Porcupine quills",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/c/cf/Draught_of_Peace_HM.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Draught_of_Peace"
            }
        },
        {
            "id": "adb78591-6fc8-451a-b15f-d91c9be7030e",
            "type": "potion",
            "attributes": {
                "slug": "drowsiness-draught",
                "name": "Drowsiness Draught",
                "effect": "Induces drowsiness",
                "side_effects": null,
                "characteristics": "Produces light purple steam",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/9/94/Drowsiness_Draught.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Drowsiness_Draught"
            }
        },
        {
            "id": "abe8b07d-8a91-4132-9b3a-0c09a712b805",
            "type": "potion",
            "attributes": {
                "slug": "dr-ubbly-s-oblivious-unction",
                "name": "Dr Ubbly's Oblivious Unction",
                "effect": "Healed wounds left by negative thoughts",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": "Dr Ubbly (presumably)",
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Dr_Ubbly's_Oblivious_Unction"
            }
        },
        {
            "id": "1f775873-85b2-4b92-a914-3b790c3993e1",
            "type": "potion",
            "attributes": {
                "slug": "elixir-of-life",
                "name": "Elixir of Life",
                "effect": "Immortality",
                "side_effects": "Drinker becomes dependent upon advanced age",
                "characteristics": null,
                "time": null,
                "difficulty": "One of a kind",
                "ingredients": null,
                "inventors": "Nicolas Flamel (by inventing the Philosopher's Stone)",
                "manufacturers": "The Philosopher's Stone",
                "image": "https://static.wikia.nocookie.net/harrypotter/images/2/25/Elixir_of_Life.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Elixir_of_Life"
            }
        },
        {
            "id": "cf487460-dc5c-491b-98dd-8d9672cb6fc6",
            "type": "potion",
            "attributes": {
                "slug": "elixir-to-induce-euphoria",
                "name": "Elixir to Induce Euphoria",
                "effect": "Induces happiness",
                "side_effects": "Excessive singing, Nose-tweaking",
                "characteristics": "Sunshine yellow in colour, Emits rainbow when finished",
                "time": null,
                "difficulty": "Advanced",
                "ingredients": "Shrivelfig, Porcupine quills, Peppermint sprigs, Sopophorous beans, Wormwood",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/6/65/Elixir_to_Induce_Euphoria.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Elixir_to_Induce_Euphoria"
            }
        },
        {
            "id": "2e442dbe-688e-415a-8833-6933ca70dffd",
            "type": "potion",
            "attributes": {
                "slug": "emerald-potion",
                "name": "Emerald Potion",
                "effect": "Induced fear, delirium, intense stomach pain and extreme thirst in the drinker",
                "side_effects": null,
                "characteristics": "Emerald green in colour, Glows phosphorescently",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": "Lord Voldemort (quite possibly)",
                "manufacturers": "Lord Voldemort (quite possibly)",
                "image": "https://static.wikia.nocookie.net/harrypotter/images/6/68/Emerald_Green_Potion.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Emerald_Potion"
            }
        },
        {
            "id": "e5d13d6e-3e9e-4d1b-9b22-61c7cb88c21e",
            "type": "potion",
            "attributes": {
                "slug": "erumpent-potion",
                "name": "Erumpent Potion",
                "effect": "Explodes when touched",
                "side_effects": null,
                "characteristics": "Green or orange in colour",
                "time": null,
                "difficulty": "Ordinary Wizarding Level",
                "ingredients": "Erumpent horn (presumably), Erumpent tail (presumably), Exploding Fluid (presumably)",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/3/3a/ErumpentPotionHM.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Erumpent_Potion"
            }
        },
        {
            "id": "4136bfd4-045c-43e6-b30b-74e74d4865bb",
            "type": "potion",
            "attributes": {
                "slug": "essence-of-insanity",
                "name": "Essence of Insanity",
                "effect": "Mental instability",
                "side_effects": null,
                "characteristics": "Green in colour",
                "time": null,
                "difficulty": "Advanced",
                "ingredients": "Frog brains, Beetle Eyes",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/a/a7/Essence_of_Insanity_HM_Icon.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Essence_of_Insanity"
            }
        },
        {
            "id": "5ff297b2-a87b-4299-8f0e-9530c065b81e",
            "type": "potion",
            "attributes": {
                "slug": "everklena",
                "name": "Everklena",
                "effect": "Supposedly cleaned, but actually spawned mould and grime",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": "Erica Stainwright",
                "manufacturers": "Erica Stainwright",
                "image": "https://static.wikia.nocookie.net/harrypotter/images/f/fd/Everklena.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Everklena"
            }
        },
        {
            "id": "993cd1c8-bee2-4066-baa6-54e9769503b0",
            "type": "potion",
            "attributes": {
                "slug": "everlasting-elixirs",
                "name": "Everlasting Elixirs",
                "effect": "Permanent magical effects",
                "side_effects": null,
                "characteristics": "Blue in colour",
                "time": null,
                "difficulty": "Advanced",
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/7/7f/Everlasting_Elixir_HM_Icon.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Everlasting_Elixirs"
            }
        },
        {
            "id": "b3a74139-d6a9-489e-a637-2034a7381caf",
            "type": "potion",
            "attributes": {
                "slug": "exploding-potion",
                "name": "Exploding Potion",
                "effect": "Volatile mixture",
                "side_effects": null,
                "characteristics": "Acid-green or blue in colour",
                "time": null,
                "difficulty": null,
                "ingredients": "An ice pop, A red spider, Flowers",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/6/6c/Exploding_Fluid.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Exploding_Potion"
            }
        },
        {
            "id": "bb26fd58-f36c-4a18-8c50-8df2930eeed9",
            "type": "potion",
            "attributes": {
                "slug": "exstimulo-potion",
                "name": "Exstimulo Potion",
                "effect": "Increases the spell power of a single spell cast",
                "side_effects": null,
                "characteristics": "Sky  blue in colour",
                "time": "Two hours",
                "difficulty": "Beginner",
                "ingredients": "Re'em blood, Granian hair, Snowdrop, Bitter root",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/e/e5/Exstimulo_Potion.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Exstimulo_Potion"
            }
        },
        {
            "id": "f712c189-eb16-40b5-b7b9-1ec2d281e67f",
            "type": "potion",
            "attributes": {
                "slug": "fake-protective-potions",
                "name": "Fake protective potions",
                "effect": "Supposedly protect the drinker from the effects of dark magic (likely useless)",
                "side_effects": "Likely harmful side effects",
                "characteristics": "Fraudulent solutions",
                "time": null,
                "difficulty": null,
                "ingredients": "Bubotuber Pus, Gravy",
                "inventors": null,
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Fake_protective_potions"
            }
        },
        {
            "id": "6defd17d-7f4a-4fb2-a1df-b5dbf4e939e9",
            "type": "potion",
            "attributes": {
                "slug": "fatiguing-fusion",
                "name": "Fatiguing Fusion",
                "effect": "Causes fatigue",
                "side_effects": null,
                "characteristics": "Green-coloured smoke",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/f/fc/Fatiguing_Fusion.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Fatiguing_Fusion"
            }
        },
        {
            "id": "21d24625-2542-4a57-be31-d1a8017112d0",
            "type": "potion",
            "attributes": {
                "slug": "felix-felicis",
                "name": "Felix Felicis",
                "effect": "Makes the drinker lucky",
                "side_effects": "Giddiness and recklessness with overuse, Extremely toxic in large quantities, Highly disastrous if brewed incorrectly",
                "characteristics": "Molten gold in colour, Droplets leap like goldfish above potion's surface when in cauldron",
                "time": "Six months",
                "difficulty": "Advanced",
                "ingredients": "Ashwinder egg, Squill bulb, Murtlap tentacles, Tincture of thyme, Occamy eggshell, Powdered common rue",
                "inventors": "Zygmunt Budge",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/8/84/Felix_Felicis_Phial_HBP.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Felix_Felicis"
            }
        },
        {
            "id": "b9847413-b4eb-4e51-bb83-0f9181f3b552",
            "type": "potion",
            "attributes": {
                "slug": "fergus-fungal-budge",
                "name": "Fergus Fungal Budge",
                "effect": "Treats ringworm, fungicide",
                "side_effects": "Potential negative side effects if used by elves",
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": "Onion juice, Jewelweed, Neem oil",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/d/d0/Fergus_Fungal_Budge.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Fergus_Fungal_Budge"
            }
        },
        {
            "id": "c2ef0304-8f3c-4423-b4e7-24562b05d3b8",
            "type": "potion",
            "attributes": {
                "slug": "fire-breathing-potion",
                "name": "Fire-Breathing Potion",
                "effect": "Makes a human breath fire",
                "side_effects": "Can burn skin",
                "characteristics": "Fiery orange in colour",
                "time": null,
                "difficulty": null,
                "ingredients": "Mint, Valerian Sprigs, Fire Seeds, Powdered dragon horn, Lavender",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/6/66/HM_y2_Fire-Breathing_Potion.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Fire-Breathing_Potion"
            }
        },
        {
            "id": "54cc9eed-28c9-4b33-b98f-3e889bd90cf5",
            "type": "potion",
            "attributes": {
                "slug": "fire-protection-potion",
                "name": "Fire-Protection Potion",
                "effect": "Protects drinker from fire",
                "side_effects": "Sensation of ice flooding body",
                "characteristics": "Blue in colour",
                "time": null,
                "difficulty": "Beginner",
                "ingredients": "Bursting mushrooms, Salamander blood, Wartcap powder",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/8/8e/HM_y2_Fire_Protection_Potion.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Fire_Protection_Potion"
            }
        },
        {
            "id": "5ee8d5a9-054d-4cb5-baa8-ef3a62895605",
            "type": "potion",
            "attributes": {
                "slug": "first-love-beguiling-bubbles",
                "name": "First Love Beguiling Bubbles",
                "effect": "Causes the drinker to become infatuated with the giver of the potion",
                "side_effects": null,
                "characteristics": "Red in colour",
                "time": null,
                "difficulty": null,
                "ingredients": "Pearl Dust",
                "inventors": "Fred and George Weasley",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/9/9a/BeguilingBubbles.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/First_Love_Beguiling_Bubbles"
            }
        },
        {
            "id": "851ee753-9081-4eb1-ae92-91413e9f6f26",
            "type": "potion",
            "attributes": {
                "slug": "flesh-eating-slug-repellent",
                "name": "Flesh-Eating Slug Repellent",
                "effect": "Repels Flesh-Eating Slugs",
                "side_effects": null,
                "characteristics": "Water-clear in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/b/ba/Flesh-eating-slug-repellent-lrg.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Flesh-Eating_Slug_Repellent"
            }
        },
        {
            "id": "a5f9daf8-8d19-4558-8cf5-85e8259d934e",
            "type": "potion",
            "attributes": {
                "slug": "forgetfulness-potion",
                "name": "Forgetfulness Potion",
                "effect": "Memory loss",
                "side_effects": null,
                "characteristics": "Orange in colour",
                "time": null,
                "difficulty": "Beginner",
                "ingredients": "2 drops of Lethe River Water, 2 Valerian sprigs, 2 measures of Standard Ingredient, 4 mistletoe berries",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/a/aa/Forgetfulness-potion.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Forgetfulness_Potion"
            }
        },
        {
            "id": "4af8aa41-8881-4eec-8197-0bd231041c5a",
            "type": "potion",
            "attributes": {
                "slug": "frog-parts-mixture",
                "name": "Frog Parts Mixture",
                "effect": null,
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": "Frog parts",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/d/dd/Frog_Parts_Mixture.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Frog_Parts_Mixture"
            }
        },
        {
            "id": "a4019e8e-9d0b-48fc-b9a9-0703d36253a8",
            "type": "potion",
            "attributes": {
                "slug": "fungiface-potion",
                "name": "Fungiface Potion",
                "effect": "Causes the drinker's face to break out in fungi",
                "side_effects": null,
                "characteristics": "Red in colour",
                "time": null,
                "difficulty": null,
                "ingredients": "Fungi (presumably)",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/c/ca/Fungiface_Potion.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Fungiface_Potion"
            }
        },
        {
            "id": "4ce472b4-777c-4bc2-8a3f-be2664ef8dbe",
            "type": "potion",
            "attributes": {
                "slug": "garrotting-gas",
                "name": "Garrotting Gas",
                "effect": "Causes choking, possibly suffocation",
                "side_effects": null,
                "characteristics": "Colourless",
                "time": null,
                "difficulty": "Advanced",
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/3/32/Garrotting_Gas_HM.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Garrotting_Gas"
            }
        },
        {
            "id": "a17febae-7d00-40f1-adba-b0d2b2c64608",
            "type": "potion",
            "attributes": {
                "slug": "girding-potion",
                "name": "Girding Potion",
                "effect": "Prolonged endurance",
                "side_effects": null,
                "characteristics": "Green or red in colour, Foul odour",
                "time": null,
                "difficulty": "Moderate",
                "ingredients": "Dragonfly thoraxes, Flying Seahorses, Doxy eggs, Fairy wings",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/0/02/Girding_Potion_HBPG.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Girding_Potion"
            }
        },
        {
            "id": "6da7bfdc-1add-4dfe-94d2-a332b8d3011d",
            "type": "potion",
            "attributes": {
                "slug": "thick-golden-potion",
                "name": "Golden potion",
                "effect": "Healing, curse quarantining",
                "side_effects": null,
                "characteristics": "Golden in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/6/6f/Thick_golden_potion.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Thick_golden_potion"
            }
        },
        {
            "id": "26332d12-5282-4dca-b396-447bb9491f95",
            "type": "potion",
            "attributes": {
                "slug": "grand-pepperup-potion",
                "name": "Grand Pepperup Potion",
                "effect": "Relieved and/or cured cold symptoms",
                "side_effects": "Caused steam to come out of the drinker's ears for a few hours",
                "characteristics": "Red in colour",
                "time": null,
                "difficulty": null,
                "ingredients": "Octopus Powder, Bicorn horn, Mandrake Root",
                "inventors": "Glover Hipworth (possibly)",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/a/a0/Grand_Pepperup_Potion.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Grand_Pepperup_Potion"
            }
        },
        {
            "id": "73c0c09c-2da1-4438-813b-95883a037625",
            "type": "potion",
            "attributes": {
                "slug": "grand-wiggenweld-potion",
                "name": "Grand Wiggenweld Potion",
                "effect": "Heals injuries, restores stamina",
                "side_effects": null,
                "characteristics": "Green in colour",
                "time": null,
                "difficulty": "Beginner",
                "ingredients": "Octopus Powder, Unicorn horn, Wolfsbane",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/2/26/Grand_Wiggenweld_Potion.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Grand_Wiggenweld_Potion"
            }
        },
        {
            "id": "20673dea-c802-4876-89b6-0b6ca6c837e2",
            "type": "potion",
            "attributes": {
                "slug": "gregory-s-unctuous-unction",
                "name": "Gregory's Unctuous Unction",
                "effect": "Made the drinker think the one who gave them the potion was their best friend",
                "side_effects": null,
                "characteristics": "Green smoke",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": "Gregory the Smarmy",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/0/0a/Gregory%27s_Unctuous_Unction.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Gregory's_Unctuous_Unction"
            }
        },
        {
            "id": "e7cf0374-b7ff-44e8-b7c8-56b8c0829593",
            "type": "potion",
            "attributes": {
                "slug": "hair-raising-potion",
                "name": "Hair-Raising Potion",
                "effect": "Raises hair up on end",
                "side_effects": null,
                "characteristics": "Green in colour",
                "time": null,
                "difficulty": "Beginner to Ordinary Wizarding Level",
                "ingredients": "Rat tails, Porcupine quills, Billywig stings",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/b/bb/Hair_Raising_Potion_HM_Icon.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Hair-Raising_Potion"
            }
        },
        {
            "id": "76cafafd-ad6f-46b7-934b-6f365fb9dbad",
            "type": "potion",
            "attributes": {
                "slug": "hate-potion",
                "name": "Hate Potion",
                "effect": "Revealed the worst traits of a person to the drinker",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Hate_Potion"
            }
        },
        {
            "id": "a7829c10-32a3-4df5-846c-236af1175daa",
            "type": "potion",
            "attributes": {
                "slug": "healing-potion",
                "name": "Healing Potion",
                "effect": "Healing, replenishes lost health and stamina to the drinker",
                "side_effects": null,
                "characteristics": "Blood red in colour",
                "time": "Two hours",
                "difficulty": "Beginner",
                "ingredients": "Wormwood, Bubotuber pus, Dittany, Dragon liver",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/e/ec/Healing_Potion_WU.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Healing_Potion"
            }
        },
        {
            "id": "12806bc1-859c-409c-a801-96f85c44595a",
            "type": "potion",
            "attributes": {
                "slug": "heartbreak-teardrops",
                "name": "Heartbreak Teardrops",
                "effect": "Causes the drinker to become infatuated with the giver of the potion",
                "side_effects": null,
                "characteristics": "Red in colour",
                "time": null,
                "difficulty": null,
                "ingredients": "Pearl Dust",
                "inventors": "Fred and George Weasley",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/f/ff/HeartbreakTeardrops.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Heartbreak_Teardrops"
            }
        },
        {
            "id": "bcc0abd5-13ce-44cf-aad0-f676b56cf6fc",
            "type": "potion",
            "attributes": {
                "slug": "herbicide-potion",
                "name": "Herbicide Potion",
                "effect": "Killed or damaged plants",
                "side_effects": null,
                "characteristics": "Green",
                "time": null,
                "difficulty": "Advanced or Beginner",
                "ingredients": "Flobberworm Mucus, Horklump juice, Lionfish spines, Standard Ingredient",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/d/d0/Herbicide.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Herbicide_Potion"
            }
        },
        {
            "id": "2cc829f9-0c07-404d-b5cd-80310a460af0",
            "type": "potion",
            "attributes": {
                "slug": "hiccoughing-solution",
                "name": "Hiccoughing Solution",
                "effect": "Presumably causes hiccoughs",
                "side_effects": null,
                "characteristics": "Yellow in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/9/92/HiccoughingSolution.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Hiccoughing_Solution"
            }
        },
        {
            "id": "8a490148-83c9-46ff-b235-850dc862e2ea",
            "type": "potion",
            "attributes": {
                "slug": "invigoration-draught",
                "name": "Invigoration Draught",
                "effect": "Energised the drinker",
                "side_effects": null,
                "characteristics": "Orange or blue in colour",
                "time": "Three hours",
                "difficulty": "Ordinary Wizarding Level",
                "ingredients": "Alihotsy leaves, Dried billywig stings, Peppermint, Stewed Mandrake, Infusion of Wormwood, Honeywater, Vervain infusion, Scurvy grass, Lovage",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/9/98/Invigoration-draught.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Invigoration_Draught"
            }
        },
        {
            "id": "3a05793b-8d8f-4775-9cc7-fd5f79bc4fb5",
            "type": "potion",
            "attributes": {
                "slug": "invisibility-potion",
                "name": "Invisibility Potion",
                "effect": "Temporary invisibility",
                "side_effects": null,
                "characteristics": "Silver in colour, Very bubbly",
                "time": null,
                "difficulty": "Moderate",
                "ingredients": "Cherries, Chicken, Spiders",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/f/fa/Invisibility_potion.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Invisibility_Potion"
            }
        },
        {
            "id": "15e0a3ac-1e09-48b5-9bb7-2e771c106ae2",
            "type": "potion",
            "attributes": {
                "slug": "jawbind-potion",
                "name": "Jawbind potion",
                "effect": "Causes lockjaw",
                "side_effects": null,
                "characteristics": "Blue in colour and misty",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/3/3e/Jawbind_Potion.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Jawbind_Potion"
            }
        },
        {
            "id": "63ac0cd9-dc78-4d69-a887-429af2a383b0",
            "type": "potion",
            "attributes": {
                "slug": "kissing-concoction",
                "name": "Kissing Concoction",
                "effect": "Causes the drinker to become infatuated with the giver of the potion",
                "side_effects": null,
                "characteristics": "Clear in colour",
                "time": null,
                "difficulty": null,
                "ingredients": "Pearl Dust",
                "inventors": "Fred and George Weasley",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/e/e0/KissingConcoction.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Kissing_Concoction"
            }
        },
        {
            "id": "eef674f3-57c9-4767-b25a-6091a580339f",
            "type": "potion",
            "attributes": {
                "slug": "laugh-inducing-potion",
                "name": "Laugh-inducing Potion",
                "effect": "Provokes uncontrollable laughter",
                "side_effects": null,
                "characteristics": "Red-coloured when finished",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/d/da/Laugh-inducing_Potion.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Laugh-inducing_Potion"
            }
        },
        {
            "id": "b41ceefa-c970-4202-a694-d9a54c08d98e",
            "type": "potion",
            "attributes": {
                "slug": "laxative-potion",
                "name": "Laxative Potion",
                "effect": "Laxative",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": "Two scrumples of an unknown ingredient, An ingredient used in a furnace, Agrimonia",
                "inventors": null,
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Laxative_Potion"
            }
        },
        {
            "id": "08c773cd-f53b-4c8f-a792-71057a83e76f",
            "type": "potion",
            "attributes": {
                "slug": "love-potion",
                "name": "Love potion",
                "effect": "Infatuation with whoever offered the potion",
                "side_effects": "Embarrassment on the part of the drinker",
                "characteristics": "Pink in colour",
                "time": null,
                "difficulty": "Advanced",
                "ingredients": "Ashwinder eggs, Rose thorns, Peppermint, Powdered Moonstone, Pearl Dust, Rose Petals",
                "inventors": "Laverne de Montmorency, Fred Weasley, George Weasley",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/3/39/Bottle-of-love-potion-lrg.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Love_Potion"
            }
        },
        {
            "id": "cde209bf-577e-4bb6-9451-d9ce2834c92b",
            "type": "potion",
            "attributes": {
                "slug": "love-potion-antidote",
                "name": "Love Potion Antidote",
                "effect": "Serves as an antidote for Love Potion",
                "side_effects": null,
                "characteristics": "Clear, colourless",
                "time": null,
                "difficulty": null,
                "ingredients": "Wiggentree twigs, Castor oil, Extract of Gurdyroot",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/9/9a/Love_Potion_Antidote.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Love_Potion_Antidote"
            }
        },
        {
            "id": "87dffa3a-3417-422d-888b-c9c0f1e55dbf",
            "type": "potion",
            "attributes": {
                "slug": "madame-glossy-s-silver-polish",
                "name": "Madame Glossy's Silver Polish",
                "effect": "Polishes silver objects",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": "Madame Glossy's Finest Cleaning Products Ltd.",
                "image": "https://static.wikia.nocookie.net/harrypotter/images/d/df/Madame_Glossy%27s_Silver_Polish.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Madame_Glossy's_Silver_Polish"
            }
        },
        {
            "id": "25283b96-dffa-491f-916b-2483827e48dc",
            "type": "potion",
            "attributes": {
                "slug": "malevolent-mixture",
                "name": "Malevolent Mixture",
                "effect": "Poison or other foul effects (most likely)",
                "side_effects": null,
                "characteristics": "Purple in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/b/bd/Malevolent_Mixture.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Malevolent_Mixture"
            }
        },
        {
            "id": "de184b2e-2899-4e17-896c-2c4654d17de5",
            "type": "potion",
            "attributes": {
                "slug": "mandrake-restorative-draught",
                "name": "Mandrake Restorative Draught",
                "effect": "Returns transfigured or cursed individuals to their original state",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": "Stewed Mandrake",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/a/ae/Mandrake_Restorative_Draught_HM.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Mandrake_Restorative_Draught"
            }
        },
        {
            "id": "cb269007-186a-4185-b52a-b3dd69e22282",
            "type": "potion",
            "attributes": {
                "slug": "manegro-potion",
                "name": "Manegro Potion",
                "effect": "Rapid hair growth",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/e/e0/Manegro_Potion.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Manegro_Potion"
            }
        },
        {
            "id": "b9f3f7c3-188e-43a0-a445-dcb5965e5598",
            "type": "potion",
            "attributes": {
                "slug": "maximum-turbo-farts-potion",
                "name": "Maximum Turbo Farts Potion",
                "effect": "Excessive flatulence",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/3/30/MaximumTurboFartsPotion.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Maximum_Turbo_Farts_Potion"
            }
        },
        {
            "id": "744a8a76-e0af-43b4-a4ac-9e5048cd906a",
            "type": "potion",
            "attributes": {
                "slug": "memory-potion",
                "name": "Memory Potion",
                "effect": "Enhanced the drinker's memory",
                "side_effects": null,
                "characteristics": "Golden in colour",
                "time": "Two hours and fifteen minutes",
                "difficulty": "Advanced",
                "ingredients": "Jobberknoll feathers, Stewed Mandrake, Powdered Sage, Galanthus Nivalis, Alihotsy, Peppermint, Eel eyes",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/0/07/Memory_Potion_HM_Icon.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Memory_Potion"
            }
        },
        {
            "id": "d487742f-1cce-48bc-be45-63cbc3b92e7e",
            "type": "potion",
            "attributes": {
                "slug": "moonseed-poison",
                "name": "Moonseed Poison",
                "effect": "Poisonous",
                "side_effects": null,
                "characteristics": "Silver in colour",
                "time": null,
                "difficulty": null,
                "ingredients": "Moonseed",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/6/6b/Moonseed_Poison.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Moonseed_Poison"
            }
        },
        {
            "id": "058f70c9-6d90-4b0b-a7e3-e504efaf3eae",
            "type": "potion",
            "attributes": {
                "slug": "mopsus-potion",
                "name": "Mopsus Potion",
                "effect": "Gives seer-like powers (possibly), Gives telekinetic powers (possibly)",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/4/4a/MopsusPotion.png",
                "wiki": "https://harrypotter.fandom.com/wiki/Mopsus_Potion"
            }
        },
        {
            "id": "c469629a-e124-4717-93c3-a1e03e1565c3",
            "type": "potion",
            "attributes": {
                "slug": "mouth-itching-antidote",
                "name": "Mouth Itching Antidote",
                "effect": "Cured mouth itching",
                "side_effects": null,
                "characteristics": "Pale green in colour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/f/fa/Mouth_Itching_Antidote.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Mouth_Itching_Antidote"
            }
        },
        {
            "id": "b5ebccd6-5cc9-4943-8c62-ebf27fa23700",
            "type": "potion",
            "attributes": {
                "slug": "mrs-scower-s-all-purpose-magical-mess-remover",
                "name": "Mrs Skower's All-Purpose Magical Mess Remover",
                "effect": "Cleans stains",
                "side_effects": null,
                "characteristics": "Strong acrid odour",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": "Mrs Skower (presumably) (after 1492)",
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/5/53/Mrs_Scower%27s_All_Purpose_Magical_Mess_Remover.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Mrs_Scower's_All-Purpose_Magical_Mess_Remover"
            }
        },
        {
            "id": "9a3a55f3-0b0d-4f18-a348-f3a145d1d908",
            "type": "potion",
            "attributes": {
                "slug": "muffling-draught",
                "name": "Muffling Draught",
                "effect": "Prevents inhaler from speaking",
                "side_effects": null,
                "characteristics": "Produces blue-coloured fumes",
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/e/ed/Muffling_Draught.JPG",
                "wiki": "https://harrypotter.fandom.com/wiki/Muffling_Draught"
            }
        },
        {
            "id": "be388256-7df9-465c-af78-7fa4319b1fd2",
            "type": "potion",
            "attributes": {
                "slug": "murtlap-essence",
                "name": "Murtlap Essence",
                "effect": "Soothes and heals cuts and abrasions",
                "side_effects": null,
                "characteristics": "Blue in colour",
                "time": null,
                "difficulty": null,
                "ingredients": "Murtlap tentacles",
                "inventors": null,
                "manufacturers": null,
                "image": "https://static.wikia.nocookie.net/harrypotter/images/b/b6/Murtlap_Essence.jpg",
                "wiki": "https://harrypotter.fandom.com/wiki/Murtlap_Essence"
            }
        },
        {
            "id": "1260a25a-2545-448c-aea1-8d015d0647ee",
            "type": "potion",
            "attributes": {
                "slug": "narglecide",
                "name": "Narglecide",
                "effect": "Killed Nargles",
                "side_effects": null,
                "characteristics": null,
                "time": null,
                "difficulty": null,
                "ingredients": null,
                "inventors": null,
                "manufacturers": null,
                "image": null,
                "wiki": "https://harrypotter.fandom.com/wiki/Narglecide"
            }
        }
    ]

    const renderPotions = () =>{
        return potions.map((potion, index) =>
            <Grid item xs={2} sm={4} md={4} key={index}>
                <PersonalizedCard key={potion.id} dataObject={potion}></PersonalizedCard>
            </Grid>
        )
    }

    return (
        <div>
            <Grid container spacing={{sm:2, md:3}} columns={{ xs: 4, sm: 8, md: 16 }}>
                {renderPotions()}
            </Grid>
        </div>
    );
};

export default Potions;
