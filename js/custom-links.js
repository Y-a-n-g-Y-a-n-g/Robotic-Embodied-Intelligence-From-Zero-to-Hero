// src/js/custom-links.js
(function () {
  function addCustomLinks() {
    // 默认主题顶部右侧按钮容器
    var right = document.querySelector(".menu-bar .right-buttons");
    if (!right) return;

    // 你要插入的外部链接配置
    var links = [
      {
        href: "http://localhost:3000/",
        title: "EN",
        label: "EN"      // 显示在按钮上的字符，可以换成 Emoji 等
      },

    ];

    links.forEach(function (cfg) {
      var a = document.createElement("a");
      a.href = cfg.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "menu-bar-item custom-ext-link";
      a.title = cfg.title;
      a.textContent = cfg.label;     // 这里用纯文本/Emoji

      // 插入到右侧按钮区域（可以改成 appendChild）
      right.insertBefore(a, right.firstChild);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addCustomLinks);
  } else {
    addCustomLinks();
  }
})();
