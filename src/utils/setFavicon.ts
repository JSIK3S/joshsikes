function setFavicon() {
  const favicon = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
  const emojis = ['🎸', '👨‍💻', '🥷🏻', '🏈', '🎮', '🎬', '🏆', '🏖️', '💡'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  
  if(favicon) {
    favicon.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${randomEmoji}</text></svg>`;
  };
};

export {setFavicon};
