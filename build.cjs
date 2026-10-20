const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=__dirname,read=n=>fs.readFileSync(path.join(root,n),'utf8').replace(/^\uFEFF/,'');
const css=read('style.css'),story=read('story.js'),app=read('app.js');
new vm.Script(story);new vm.Script(app);
if(/<\/script/i.test(story+app))throw Error('Unexpected script closing tag');
const html=read('index.html').replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>').replace('<script src="story.js"></script>','<script>'+story+'</script>').replace('<script src="app.js"></script>','<script>'+app+'</script>');
if(/(?:src|href)="https?:/i.test(html))throw Error('Offline build has external dependency');
fs.writeFileSync(path.join(root,'MINUIT.html'),html);
console.log('MINUIT.html prêt : '+Math.round(Buffer.byteLength(html)/1024)+' Ko, autonome et hors ligne.');
