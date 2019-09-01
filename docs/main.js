(function() {
  const chars = [
    {
      name: 'Mario',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/0/0d/MarioHeadSSBU.png/50px-MarioHeadSSBU.png',
    },
    {
      name: 'Donkey Kong',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/b/ba/DonkeyKongHeadSSBU.png/50px-DonkeyKongHeadSSBU.png',
    },
    {
      name: 'Link',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/a/aa/LinkHeadSSBU.png/50px-LinkHeadSSBU.png',
    },
    {
      name: 'Samus',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/7/7f/SamusHeadSSBU.png/50px-SamusHeadSSBU.png',
    },
    {
      name: 'Dark Samus',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/9/96/DarkSamusHeadSSBU.png/50px-DarkSamusHeadSSBU.png',
    },
    {
      name: 'Yoshi',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/0/03/YoshiHeadSSBU.png/50px-YoshiHeadSSBU.png',
    },
    {
      name: 'Kirby',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/9/91/KirbyHeadSSBU.png/50px-KirbyHeadSSBU.png',
    },
    {
      name: 'Fox',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/0/04/FoxHeadSSBU.png/50px-FoxHeadSSBU.png',
    },
    {
      name: 'Pikachu',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/f/fa/PikachuHeadSSBU.png/50px-PikachuHeadSSBU.png',
    },
    {
      name: 'Luigi',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/c/c6/LuigiHeadSSBU.png/50px-LuigiHeadSSBU.png',
    },
    {
      name: 'Ness',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/0/0f/NessHeadSSBU.png/50px-NessHeadSSBU.png',
    },
    {
      name: 'Captain Falcon',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/3/35/CaptainFalconHeadSSBU.png/50px-CaptainFalconHeadSSBU.png',
    },
    {
      name: 'Jigglypuff',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/9/95/JigglypuffHeadSSBU.png/50px-JigglypuffHeadSSBU.png',
    },
    {
      name: 'Peach',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/d/d2/PeachHeadSSBU.png/50px-PeachHeadSSBU.png',
    },
    {
      name: 'Daisy',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/9/96/DaisyHeadSSBU.png/50px-DaisyHeadSSBU.png',
    },
    {
      name: 'Bowser',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/b/b5/BowserHeadSSBU.png/50px-BowserHeadSSBU.png',
    },
    {
      name: 'Ice Climbers',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/8/8b/IceClimbersHeadSSBU.png/50px-IceClimbersHeadSSBU.png',
    },
    {
      name: 'Sheik',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/3/37/SheikHeadSSBU.png/50px-SheikHeadSSBU.png',
    },
    {
      name: 'Zelda',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/c/c1/ZeldaHeadSSBU.png/50px-ZeldaHeadSSBU.png',
    },
    {
      name: 'Dr. Mario',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/7/78/DrMarioHeadSSBU.png/50px-DrMarioHeadSSBU.png',
    },
    {
      name: 'Pichu',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/d/d6/PichuHeadSSBU.png/50px-PichuHeadSSBU.png',
    },
    {
      name: 'Falco',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/2/2f/FalcoHeadSSBU.png/50px-FalcoHeadSSBU.png',
    },
    {
      name: 'Marth',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/b/bd/MarthHeadSSBU.png/50px-MarthHeadSSBU.png',
    },
    {
      name: 'Lucina',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/0/04/LucinaHeadSSBU.png/50px-LucinaHeadSSBU.png',
    },
    {
      name: 'Young Link',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/c/cd/YoungLinkHeadSSBU.png/50px-YoungLinkHeadSSBU.png',
    },
    {
      name: 'Ganondorf',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/7/78/GanondorfHeadSSBU.png/50px-GanondorfHeadSSBU.png',
    },
    {
      name: 'Mewtwo',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/9/96/MewtwoHeadSSBU.png/50px-MewtwoHeadSSBU.png',
    },
    {
      name: 'Roy',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/e/ed/RoyHeadSSBU.png/50px-RoyHeadSSBU.png',
    },
    {
      name: 'Chrom',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/2/25/ChromHeadSSBU.png/50px-ChromHeadSSBU.png',
    },
    {
      name: 'Mr. Game & Watch',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/6/6b/MrGame%26WatchHeadSSBU.png/50px-MrGame%26WatchHeadSSBU.png',
    },
    {
      name: 'Meta Knight',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/d/de/MetaKnightHeadSSBU.png/50px-MetaKnightHeadSSBU.png',
    },
    {
      name: 'Pit',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/a/aa/PitHeadSSBU.png/50px-PitHeadSSBU.png',
    },
    {
      name: 'Dark Pit',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/e/ed/DarkPitHeadSSBU.png/50px-DarkPitHeadSSBU.png',
    },
    {
      name: 'Zero Suit Samus',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/7/71/ZeroSuitSamusHeadSSBU.png/50px-ZeroSuitSamusHeadSSBU.png',
    },
    {
      name: 'Wario',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/0/05/WarioHeadSSBU.png/50px-WarioHeadSSBU.png',
    },
    {
      name: 'Snake',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/9/9a/SnakeHeadSSBU.png/50px-SnakeHeadSSBU.png',
    },
    {
      name: 'Ike',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/b/b2/IkeHeadSSBU.png/50px-IkeHeadSSBU.png',
    },
    {
      name: 'Pokemon Trainer',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/0/09/Pok%C3%A9monTrainerHeadSSBU.png/50px-Pok%C3%A9monTrainerHeadSSBU.png',
    },
    {
      name: 'Diddy Kong',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/3/36/DiddyKongHeadSSBU.png/50px-DiddyKongHeadSSBU.png',
    },
    {
      name: 'Lucas',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/f/ff/LucasHeadSSBU.png/50px-LucasHeadSSBU.png',
    },
    {
      name: 'Sonic',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/7/76/SonicHeadSSBU.png/50px-SonicHeadSSBU.png',
    },
    {
      name: 'King Dedede',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/b/bb/KingDededeHeadSSBU.png/50px-KingDededeHeadSSBU.png',
    },
    {
      name: 'Olimar',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/9/91/OlimarHeadSSBU.png/50px-OlimarHeadSSBU.png',
    },
    {
      name: 'Lucario',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/c/cd/LucarioHeadSSBU.png/50px-LucarioHeadSSBU.png',
    },
    {
      name: 'R.O.B.',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/b/b3/ROBHeadSSBU.png/50px-ROBHeadSSBU.png',
    },
    {
      name: 'Toon Link',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/e/e6/ToonLinkHeadSSBU.png/50px-ToonLinkHeadSSBU.png',
    },
    {
      name: 'Wolf',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/e/e8/WolfHeadSSBU.png/50px-WolfHeadSSBU.png',
    },
    {
      name: 'Villager',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/b/b9/VillagerHeadSSBU.png/50px-VillagerHeadSSBU.png',
    },
    {
      name: 'Mega Man',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/5/55/MegaManHeadSSBU.png/50px-MegaManHeadSSBU.png',
    },
    {
      name: 'Wii Fit Trainer',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/8/87/WiiFitTrainerHeadSSBU.png/50px-WiiFitTrainerHeadSSBU.png',
    },
    {
      name: 'Rosalina & Luma',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/e/e8/RosalinaHeadSSBU.png/50px-RosalinaHeadSSBU.png',
    },
    {
      name: 'Little Mac',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/1/10/LittleMacHeadSSBU.png/50px-LittleMacHeadSSBU.png',
    },
    {
      name: 'Greninja',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/6/65/GreninjaHeadSSBU.png/50px-GreninjaHeadSSBU.png',
    },
    {
      name: 'Palutena',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/a/a9/PalutenaHeadSSBU.png/50px-PalutenaHeadSSBU.png',
    },
    {
      name: 'Pac-Man',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/4/45/Pac-ManHeadSSBU.png/50px-Pac-ManHeadSSBU.png',
    },
    {
      name: 'Robin',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/2/25/RobinHeadSSBU.png/50px-RobinHeadSSBU.png',
    },
    {
      name: 'Shulk',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/c/c1/ShulkHeadSSBU.png/50px-ShulkHeadSSBU.png',
    },
    {
      name: 'Bowser Jr.',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/0/07/BowserJrHeadSSBU.png/50px-BowserJrHeadSSBU.png',
    },
    {
      name: 'Duch Hunt',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/a/a1/DuckHuntHeadSSBU.png/50px-DuckHuntHeadSSBU.png',
    },
    {
      name: 'Ryu',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/f/fb/RyuHeadSSBU.png/50px-RyuHeadSSBU.png',
    },
    {
      name: 'Ken',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/7/72/KenHeadSSBU.png/50px-KenHeadSSBU.png',
    },
    {
      name: 'Cloud',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/3/3b/CloudHeadSSBU.png/50px-CloudHeadSSBU.png',
    },
    {
      name: 'Corrin',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/c/cf/CorrinHeadSSBU.png/50px-CorrinHeadSSBU.png',
    },
    {
      name: 'Bayonetta',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/6/6c/BayonettaHeadSSBU.png/50px-BayonettaHeadSSBU.png',
    },
    {
      name: 'Inkling',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/f/f1/InklingHeadSSBU.png/50px-InklingHeadSSBU.png',
    },
    {
      name: 'Ridley',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/5/5b/RidleyHeadSSBU.png/50px-RidleyHeadSSBU.png',
    },
    {
      name: 'Simon',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/d/df/SimonHeadSSBU.png/50px-SimonHeadSSBU.png',
    },
    {
      name: 'Richter',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/0/07/RichterHeadSSBU.png/50px-RichterHeadSSBU.png',
    },
    {
      name: 'King K. Rool',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/d/de/KingKRoolHeadSSBU.png/50px-KingKRoolHeadSSBU.png',
    },
    {
      name: 'Isabelle',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/2/2f/IsabelleHeadSSBU.png/50px-IsabelleHeadSSBU.png',
    },
    {
      name: 'Incineroar',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/5/50/IncineroarHeadSSBU.png/50px-IncineroarHeadSSBU.png',
    },
    {
      name: 'Piranha Plant',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/3/38/PiranhaPlantHeadSSBU.png/50px-PiranhaPlantHeadSSBU.png',
    },
    {
      name: 'Joker',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/2/25/JokerHeadSSBU.png/50px-JokerHeadSSBU.png',
    },
    {
      name: 'Hero',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/3/3d/HeroHeadSSBU.png/50px-HeroHeadSSBU.png',
    },
    {
      name: 'Mii Brawler',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/d/d8/MiiBrawlerHeadSSBU.png/50px-MiiBrawlerHeadSSBU.png',
    },
    {
      name: 'Mii Swordfighter',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/e/ef/MiiSwordfighterHeadSSBU.png/50px-MiiSwordfighterHeadSSBU.png',
    },
    {
      name: 'Mii Gunner',
      stockIcon: 'https://www.ssbwiki.com/images/thumb/3/3d/MiiGunnerHeadSSBU.png/50px-MiiGunnerHeadSSBU.png',
    },
  ];

  chars.forEach(char => {
    const el = document.createElement('div');
    el.innerHTML = `
      <div class="flex">
        <div><img src="${char.stockIcon}" /></div>
        <div class="flex-1"><input class="width-100" type="range" min="0" max="100" /></div>
      </div>
    `;

    document.body.append(el);
  });
})();
