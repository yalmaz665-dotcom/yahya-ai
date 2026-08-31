export interface Env {
  AI: Ai;
}

const SYSTEM = `
Sen ADANA §•YAHYA•§.16 adlı yapay zekâ asistanısın.
Türkçe konuş. Kullanıcının diline uyum sağla.
Yardımcı, doğal, açık ve uygulanabilir cevaplar ver.
Kendini gerçek bir insan olarak tanıtma.
Kullanıcı bir görev istediğinde önce amacı anla, sonra kısa bir plan ve uygulanabilir sonucu ver.
Gereksiz tekrar yapma.
`;

const HTML = `<!doctype html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#000">
<title>ADANA §•YAHYA•§.16</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:100%;height:100%;background:#000;color:#eee;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif}
body{overflow:hidden}button,input,textarea{font:inherit}
#app{width:100%;height:100dvh;display:flex;flex-direction:column;position:relative}
header{height:60px;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:.5px solid #222;flex-shrink:0;background:#000;z-index:5}
.title-group{display:flex;align-items:center;gap:10px}.logo{width:30px;height:30px;border:1px solid #555;border-radius:9px;display:grid;place-items:center;color:#fff;font-size:11px;font-weight:800}.app-title{font-size:14px;font-weight:600}
#menu-btn{background:transparent;border:0;padding:7px;cursor:pointer}#menu-btn span{display:block;width:20px;height:1.5px;background:#fff;margin:4px}
#menu{display:none;position:absolute;top:54px;right:14px;background:#090909;border:.5px solid #333;border-radius:10px;padding:6px;z-index:20;min-width:180px;box-shadow:0 12px 35px #000}
#menu.open{display:block}.menuitem{padding:10px 12px;color:#ddd;font-size:13px;border-radius:7px}.menuitem:hover,.menuitem.active{background:#171717;color:#fff}
.panel{display:none;flex:1;min-height:0}.panel.active{display:flex;flex-direction:column}
#messages{flex:1;overflow-y:auto;padding:18px 16px 18px;display:flex;flex-direction:column;gap:12px}
.msg{max-width:min(86%,720px);font-size:13.5px;line-height:1.65;padding:11px 14px;white-space:pre-wrap;word-break:break-word}.msg.user{align-self:flex-end;background:#fff;color:#000;border-radius:13px 13px 3px 13px}.msg.ai{align-self:flex-start;background:#0b0b0b;border:.5px solid #252525;color:#e8e8e8;border-radius:13px 13px 13px 3px}
#welcome{margin:auto;text-align:center;max-width:650px;padding:30px}.mark{font-size:38px;font-weight:900;letter-spacing:-2px;margin-bottom:15px}.welcome-title{font-size:26px;font-weight:700;margin-bottom:8px}.welcome-sub{font-size:13px;color:#777;line-height:1.6}
.loading{display:none;color:#777;font-size:12px;padding:0 16px 7px}.loading.show{display:block}
#error{display:none;color:#ff7373;font-size:12px;padding:0 16px 7px}.error-show{display:block!important}
footer{padding:10px 16px 18px;border-top:.5px solid #222;flex-shrink:0;background:#000}.input-row{display:flex;gap:8px;align-items:flex-end;background:#090909;border:.5px solid #333;border-radius:10px;padding:6px 6px 6px 12px}
#qinput{flex:1;min-width:0;max-height:130px;resize:none;overflow:auto;background:transparent;border:0;outline:0;color:#fff;font-size:13.5px;padding:8px 0}#qinput::placeholder{color:#555}
#ask-btn{background:#fff;color:#000;border:0;border-radius:7px;padding:9px 15px;font-size:12.5px;font-weight:600;cursor:pointer}#ask-btn:disabled{opacity:.4}
#panel-gecmis,#panel-ayarlar{overflow:auto;padding:18px 16px}.section-title{font-size:17px;font-weight:700;margin-bottom:14px}.history-label{font-size:12px;color:#777;margin-bottom:10px}.history-item{padding:12px 0;border-bottom:.5px solid #222;font-size:13px;color:#ddd}
.setting-row{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:.5px solid #222}.setting-label{font-size:13px}.toggle{width:38px;height:22px;border-radius:11px;background:#333;position:relative}.toggle.on{background:#fff}.knob{width:18px;height:18px;border-radius:50%;position:absolute;top:2px;left:2px;background:#888;transition:.15s}.toggle.on .knob{left:18px;background:#000}
.tools{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}.chip{border:.5px solid #333;background:#0b0b0b;color:#ccc;padding:8px 10px;border-radius:8px;font-size:12px}
@media(max-width:600px){.msg{max-width:92%}.welcome-title{font-size:23px}}
</style>
</head>
<body>
<div id="app">
<header>
 <div class="title-group"><div class="logo">Y</div><span class="app-title">🤖•YAHYA•§.16</span></div>
 <button id="menu-btn" aria-label="Menü"><span></span><span></span><span></span></button>
</header>
<div id="menu">
 <div class="menuitem active" data-tab="sohbet">Sohbet</div>
 <div class="menuitem" data-tab="gecmis">Geçmiş</div>
 <div class="menuitem" data-tab="ayarlar">Ayarlar</div>
</div>

<section id="panel-sohbet" class="panel active">
 <div id="messages">
  <div id="welcome"><div class="mark">§•YAHYA•§</div><div class="welcome-title">Nasıl yardımcı olabilirim?</div><div class="welcome-sub">Soru sor, kod yazdır, bir proje planla veya bir görevi adım adım çöz.</div><div class="tools"><span class="chip">Kod yaz</span><span class="chip">Plan oluştur</span><span class="chip">Fikir üret</span></div></div>
 </div>
 <div id="loading" class="loading">§•YAHYA•§ düşünüyor…</div>
 <div id="error" ></div>
 <footer><div class="input-row"><textarea id="qinput" rows="1" placeholder="sorunu bekliyorum"></textarea><button id="ask-btn">gönder 😊</button></div></footer>
</section>

<section id="panel-gecmis" class="panel">
 <div class="section-title">Geçmiş sohbetler</div><div class="history-label">Bu cihazda saklanan konuşmalar</div><div id="history-list"></div>
</section>

<section id="panel-ayarlar" class="panel">
 <div class="section-title">Ayarlar</div>
 <div class="setting-row"><span class="setting-label">Karanlık tema</span><div id="toggle1" class="toggle on"><div class="knob"></div></div></div>
 <div class="setting-row"><span class="setting-label">Bildirimler</span><div id="toggle2" class="toggle"><div class="knob"></div></div></div>
 <div class="setting-row"><span class="setting-label">Sohbet geçmişini temizle</span><button id="clear" class="chip">Temizle</button></div>
</section>
</div>

<script>
const $=id=>document.getElementById(id);
const menu=$("menu"), messages=$("messages"), input=$("qinput"), ask=$("ask-btn"), loading=$("loading"), error=$("error");
let history=JSON.parse(localStorage.getItem("yahya_history")||"[]");

function save(){localStorage.setItem("yahya_history",JSON.stringify(history));renderHistory()}
function addMsg(text,user){
 $("welcome")?.remove();
 const el=document.createElement("div"); el.className="msg "+(user?"user":"ai"); el.textContent=text; messages.appendChild(el);
 messages.scrollTop=messages.scrollHeight; return el;
}
function renderHistory(){
 const box=$("history-list"); box.innerHTML="";
 history.filter(x=>x.role==="user").slice(-30).reverse().forEach(x=>{const d=document.createElement("div");d.className="history-item";d.textContent=x.content;box.appendChild(d)})
}
function switchTab(tab){
 document.querySelectorAll(".menuitem").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));
 ["sohbet","gecmis","ayarlar"].forEach(x=>$("panel-"+x).classList.toggle("active",x===tab));
 menu.classList.remove("open");
}
document.querySelectorAll(".menuitem").forEach(x=>x.onclick=()=>switchTab(x.dataset.tab));
$("menu-btn").onclick=e=>{e.stopPropagation();menu.classList.toggle("open")};
document.onclick=()=>menu.classList.remove("open");

history.slice(-30).forEach(x=>addMsg(x.content,x.role==="user")); renderHistory();

async function askQuestion(){
 const q=input.value.trim(); error.classList.remove("error-show"); error.textContent="";
 if(!q){error.textContent="Lütfen bir soru yazın.";error.classList.add("error-show");return}
 addMsg(q,true); history.push({role:"user",content:q}); save(); input.value=""; input.style.height="auto"; ask.disabled=true; loading.classList.add("show");
 const ai=addMsg("",false);
 try{
   const r=await fetch("/api/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:history.slice(-20)})});
   if(!r.ok) throw new Error(await r.text());
   const data=await r.json(); ai.textContent=data.response||"Yanıt alınamadı.";
   history.push({role:"assistant",content:ai.textContent}); save();
 }catch(e){ai.textContent="Şu anda yanıt alınamadı.";error.textContent="Bağlantı veya model ayarını kontrol edin.";error.classList.add("error-show")}
 finally{loading.classList.remove("show");ask.disabled=false;input.focus()}
}
ask.onclick=askQuestion;
input.onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();askQuestion()}};
input.oninput=()=>{input.style.height="auto";input.style.height=Math.min(input.scrollHeight,130)+"px"};
document.querySelectorAll(".toggle").forEach(x=>x.onclick=()=>x.classList.toggle("on"));
$("clear").onclick=()=>{history=[];localStorage.removeItem("yahya_history");messages.innerHTML="";messages.appendChild(Object.assign(document.createElement("div"),{id:"welcome",innerHTML:'<div class="mark">§•YAHYA•§</div><div class="welcome-title">Nasıl yardımcı olabilirim?</div><div class="welcome-sub">Yeni bir sohbet başlat.</div>'}));renderHistory()};
</script>
</body>
</html>`;

const headers = {
  "content-type": "text/html; charset=UTF-8",
  "cache-control": "no-store"
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({ok: true, name: "ADANA §•YAHYA•§.16"});
    }

    if (url.pathname === "/api/chat" && request.method === "POST") {
      try {
        const body = await request.json() as {messages?: {role:"user"|"assistant",content:string}[]};
        const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
        const result = await env.AI.run("@cf/openai/gpt-oss-20b", {
          messages: [
            {role: "system", content: SYSTEM},
            ...messages
          ],
          max_tokens: 1200
        } as any);

        const response = typeof result === "string"
          ? result
          : (result as any)?.response ?? "";

        return Response.json({response});
      } catch (e) {
        return Response.json({error: "AI isteği başarısız oldu.", detail: String(e)}, {status: 500});
      }
    }

    return new Response(HTML, {headers});
  }
};
