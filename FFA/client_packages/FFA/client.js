var ffaBrowser = null;

mp.events.add('ffaBrowser', () =>{
    if(!ffaBrowser){
        ffaBrowser = mp.browsers.new('package://FFA/index.html')
        mp.gui.cursor.show(true,true)
    }
});

mp.events.add('ffaone', () =>{
    mp.events.callRemote("ffaone")
    mp.gui.cursor.show(false,false)
    ffaBrowser.destroy();
    ffaBrowser = null;
});

mp.events.add('ffatwo', () =>{
    mp.events.callRemote("ffatwo")
    mp.gui.cursor.show(false,false)
    ffaBrowser.destroy();
    ffaBrowser = null;
});

mp.events.add('ffathree', () =>{
    mp.events.callRemote("ffathree")
    mp.gui.cursor.show(false,false)
    ffaBrowser.destroy();
    ffaBrowser = null;
});