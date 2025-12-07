// AniPFP 2025
(() => {
  const e = webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (let m in req.c) if (req.c[m].exports?.getCurrentUser) return req.c[m].exports;}]);
  webpackChunkdiscord_app.pop(); const UserStore = e.getCurrentUser ? e : Object.values(e.find(m => m?.getCurrentUser)).find(m => m.getCurrentUser);
  const forceAnim = () => { const me = UserStore.getCurrentUser(); if (me && me.avatar && !me.avatar.startsWith?.("a_")) me.avatar = "a_" + me.avatar; };
  forceAnim(); setInterval(forceAnim, 5000);
  const css = `@keyframes spin{border-color:#ff004d #ff9900 #ffff00 #00ff00 #0099ff #ff00ff;transform:rotate(360deg)}
  img.avatarHint-1Z3C8c,img[src*="/avatars/"]{border:5px solid;border-radius:50%;animation:spin 4s linear infinite;box-shadow:0 0 20px #00ffff!important}`;
  const style = document.createElement("style"); style.innerHTML = css; document.head.appendChild(style);
})();
