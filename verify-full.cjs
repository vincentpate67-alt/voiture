const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const elements=new Map(),storage=new Map();
function el(){return {value:'',textContent:'',innerHTML:'',children:[],hidden:false,open:false,disabled:false,style:{setProperty(){}},classList:{toggle(){}},replaceChildren(){this.children=[]},append(x){this.children.push(x)},querySelectorAll(){return []},insertAdjacentHTML(pos,s){this.innerHTML+=s},scrollIntoView(){},focus(){},setAttribute(){},showModal(){this.open=true},close(){this.open=false},click(){if(!this.disabled&&this.onclick)this.onclick()}}}
const node=s=>{if(!elements.has(s))elements.set(s,el());return elements.get(s)};
const sandbox={console,document:{querySelector:node,querySelectorAll:()=>[],createElement:el,body:el(),documentElement:el(),addEventListener(){}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},window:{scrollTo(){}},setTimeout,clearTimeout,Blob,URL};
const ctx=vm.createContext(sandbox),run=s=>vm.runInContext(s,ctx),source=n=>fs.readFileSync(__dirname+'/'+n,'utf8');
run(source('story.js'));run(source('app.js'));
const data=JSON.parse(run('JSON.stringify({BOOK,ITEMS,ENDINGS})'));
assert.equal(data.BOOK.length,24);
let cases=0;
for(const [ci,c] of data.BOOK.entries()){
 assert.equal(c.places.length,3);assert.equal(c.decision.choices.length,4);assert.ok(c.intro.length>150);
 for(const [li,l] of c.places.entries()){
  assert.equal(l.actions.length,3);
  for(const [ai,a] of l.actions.entries()){
   assert.ok(a.text.length>100);if(a.item)assert.ok(data.ITEMS[a.item]);if(a.effect?.item)assert.ok(data.ITEMS[a.effect.item]);
   for(const low of [true,false]){
    run(`state=base();state.started=true;state.name='<Camille>';state.alias='C';state.phrase='À bientôt <3';state.code='0427';state.ch=${ci};state.loc=${li};state.screen='location';state.pace='relaxed';Object.keys(state.skills).forEach(k=>state.skills[k]=${low?0:6});Object.keys(state.relations).forEach(k=>state.relations[k]=${low?-5:8});`);
    if(!low){if(a.need)run(`state.flags[${JSON.stringify(a.need)}]=true`);if(a.support)run(`state.flags[${JSON.stringify(a.support)}]=true`)}
    node('#actionInput').value=a.input?.kind==='code'?(low?'0000':'0427'):'Un message <script> & personnel';
    run(`perform(${li},${ai})`);assert.equal(run('state.screen'),'result');assert.equal(run('state.spent'),a.cost);assert.equal(node('#choices').children.length,4);assert.equal(run('valid(state)'),true,run('JSON.stringify(state)'));
    const before=run('JSON.stringify({proof:state.proof,skills:state.skills,notes:state.notes,time:state.spent})');run(`perform(${li},${ai})`);assert.equal(run('JSON.stringify({proof:state.proof,skills:state.skills,notes:state.notes,time:state.spent})'),before,'Re-reading must not duplicate rewards');
    if(a.test||a.need||a.relation||a.input?.kind==='code')assert.equal(run('state.result.passed'),!low,'Condition on '+ci+'/'+li+'/'+ai);
    const snapshot=run('JSON.stringify(state)');run(`restore(JSON.parse(${JSON.stringify(snapshot)}));render()`);assert.equal(run('state.screen'),'result');cases++;
   }
  }
 }
 for(let i=0;i<4;i++){run(`state=base();state.started=true;state.ch=${ci};finalChoice(${i});render()`);assert.equal(run('state.screen'),'bridge');assert.equal(run('valid(state)'),true,run('JSON.stringify(state)'));cases++}
}
// Entire campaigns, with all four final destinations and different skill profiles.
for(let policy=0;policy<8;policy++){
 run(`state=base();state.started=true;state.name='Test';state.alias='T';state.phrase='La lumière reste';state.code='0427';state.pace=${JSON.stringify(policy%2?'relaxed':'normal')};startChapter()`);
 for(let ci=0;ci<24;ci++){
  for(let li=0;li<3;li++)for(let offset=0;offset<2;offset++){
   const ai=(offset+policy)%3,a=data.BOOK[ci].places[li].actions[ai];node('#actionInput').value=a.input?.kind==='code'?(policy%2?'0427':'1111'):'Je reviendrai.';
   if(run(`left()>=${a.cost}`))run(`perform(${li},${ai});render()`);
  }
  run(`finalChoice(${policy%4});next()`);assert.equal(run('valid(state)'),true,run('JSON.stringify(state)'));
 }
 assert.equal(run('state.screen'),'ending');assert.equal(run('state.decisions.length'),24);assert.ok(!node('#story').innerHTML.includes('undefined'));cases++;
}
// Budget exhaustion, dialogue limit, single award for item inspection.
run("state=base();state.started=true;state.spent=budget();perform(0,0)");assert.equal(run('Object.keys(state.read).length'),0);
run("state=base();state.started=true;state.pace='relaxed';perform(0,0);perform(0,1);perform(0,2)");assert.equal(run('Object.keys(state.read).length'),2);
run("state=base();item('ticket');inspect('ticket')");node('#turn').click();node('#turn').click();const proof=run('state.proof');node('#turn').click();node('#turn').click();node('#turn').click();assert.equal(run('state.proof'),proof);
run("state=base();apply({promise:{id:'p',text:'Test',due:0,who:'sam'}});apply({fulfill2:'p'});state.ch=1;expire()");assert.equal(run('state.promises[0].status'),'kept');
run("state=base();apply({promise:{id:'p',text:'Test',due:0,who:'sam'}});state.ch=1;expire();apply({fulfill:'p'})");assert.equal(run('state.promises[0].status'),'broken');
run("state=base();state.started=true;state.name='C';startChapter();state.proof=9;restore(state.checkpoint)");assert.equal(run('state.proof'),0);
run("state=base();state.notes=[{text:'<img src=x onerror=alert(1)>',type:'indice',ch:1}];tab='notes';panel()");assert.ok(!node('#noteList').innerHTML.includes('<img'));
for(const bad of ["x.skills.calm='7'","x.notes=[{}]","x.bag=['__proto__']","x.promises=[{}]","x.screen='bridge'","x.result={};x.screen='result'","x.screen='ending';x.ending='bad'"]){assert.equal(run(`(()=>{const x=base();${bad};return valid(x)})()`),false)}
const reload=new vm.Script(source('app.js'));storage.set('minuit-full-v1',JSON.stringify({v:1,screen:'bad'}));
const freshCtx=vm.createContext({...sandbox});vm.runInContext(source('story.js'),freshCtx);reload.runInContext(freshCtx);assert.equal(vm.runInContext('state.screen',freshCtx),'home');
// Narrative counts exclude source identifiers and count text shown to the player.
const texts=[];for(const c of data.BOOK){texts.push(c.intro,c.hub||'',c.decision.text);for(const l of c.places){texts.push(l.text);for(const a of l.actions)texts.push(a.text,a.success||'',a.fail||'')}for(const d of c.decision.choices)texts.push(d.after);for(const e of c.echo||[])texts.push(e.text)}for(const o of Object.values(data.ITEMS))texts.push(...o.views);for(const v of Object.values(data.ENDINGS))texts.push(typeof v==='string'?v:v.text);
const report={checks:cases,chapters:24,encounters:72,actions:216,majorDecisions:24,items:Object.keys(data.ITEMS).length,narrativeWords:texts.join(' ').split(/\s+/).filter(Boolean).length,endingRoutes:4,fullCampaigns:8};
fs.writeFileSync(__dirname+'/verification.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));


