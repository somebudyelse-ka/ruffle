document.getElementById("app").appendChild(Object.assign(document.createElement("iframe"),{style:"width:100vw;height:100vh;border:none;position:absolute;top:0px;left:0px",src:URL.createObjectURL(new Blob([`<!doctype html>
<html>
<style>
.fullscreen, ruffle-player {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
}
</style>
<label for="input">Upload your SWF file here:&nbsp;</label>
<input type="file" id="input" accept=".swf">
<div id="container"></div>
<script src="https://cdn.jsdelivr.net/combine/gh/somebudyelse-ka/ruffle/patchka.js,gh/somebudyelse-ka/ruffle/ruffle.js"><\/script>
<script>
input.onchange = async () => {
    if(input.files.length) {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        container.appendChild(player);
        container.classList.add("fullscreen");
        player.ruffle().load({ data: await input.files[0].arrayBuffer() });
    }
}
<\/script>
</html>`]))}));
