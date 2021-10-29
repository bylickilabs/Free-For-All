// Server-side

mp.events.addCommand("ffa", (player)=>{
    player.call("ffaBrowser")
});

mp.events.add('ffaone', (player)=>{
    player.position = new mp.Vector3(161.4342498779297,-990.9143676757812,30.091922760009766)
    player.notify("You entered Zone 1")
    player.giveWeapon([0xDD5DF8D9,0xBFEFFF6D,0x624FE830, 0x61012683, 0x9D1F17E6,0xAF113F99], 1000);
});

mp.events.add('ffatwo', (player)=>{
    player.position = new mp.Vector3(279.4896240234375,945.3909301757812,210.9430694580078)
    player.notify("You entered Zone 2")
    player.giveWeapon([0xDD5DF8D9,0xBFEFFF6D,0x624FE830, 0x61012683, 0x9D1F17E6,0xAF113F99], 1000);
});

mp.events.add('ffathree', (player)=>{
    player.position = new mp.Vector3(-1093.7034912109375,4943.60986328125,218.3388671875)
    player.notify("You entered Zone 3")
    player.giveWeapon([0xDD5DF8D9,0xBFEFFF6D,0x624FE830, 0x61012683, 0x9D1F17E6,0xAF113F99], 1000);
});

console.log('[FFA] Running!')
