    // ==UserScript==
    // @name         视频
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  try to take over the world!
    // @author       You
    // @match        http://*user.hnzjpx.net/user/trainingclass*
    // @grant        none
    // ==/UserScript==


    const data = [
        {
          type: 'type1',
          download: './zip/个人博客模板-1页.rar',
          src: './img/个人博客模板-1页.png',
          href: './img/个人博客模板-1页.png',
        },
        // ... 其他数据
      ];
      
      const search = document.getElementById('search');
      const searchBtn = document.getElementById('searchBtn');
      const typeSelect = document.getElementById('typeSelect');
      const content = document.getElementById('content');
      
      function render() {
        const searchValue = search.value.trim().toLowerCase();
        const typeValue = typeSelect.value;
      
        const filteredData = data.filter(item => {
          if (typeValue !== 'all' && item.type !== typeValue) {
            return false;
          }
          if (searchValue && !item.src.toLowerCase().includes(searchValue)) {
            return false;
          }
          return true;
        });
      
        content.innerHTML = '';
      
        filteredData.forEach(item => {
          const c_items = document.createElement('div');
          c_items.className = 'c_items';
      
          const a1 = document.createElement('a');
          a1.setAttribute('download', item.download);
          a1.setAttribute('href', item.download1);
      
          const img = document.createElement('img');
          img.setAttribute('src', item.src);
          img.setAttribute('alt', '');
      
          a1.appendChild(img);
          c_items.appendChild(a1);
      
          const a2 = document.createElement('a');
          a2.setAttribute('href', item.href);
          a2.textContent = '查看大图';
      
          c_items.appendChild(a2);
          content.appendChild(c_items);
        });
      }
      
      searchBtn.addEventListener('click', render);
      typeSelect.addEventListener('change', render);
      
      render();


