const items = [
    {brand:"Carhartt WIP",item:"Detroit jacket",price:42,was:68,size:"M",cond:"Good",tag:"−38%"},
    {brand:"Levi's",item:"501 straight jeans",price:24,size:"32/32",cond:"Very good"},
    {brand:"Arc'teryx",item:"Beta rain shell",price:95,size:"L",cond:"Like new"},
    {brand:"COS",item:"Wool crewneck",price:18,was:29,size:"S",cond:"Good",tag:"−38%"},
    {brand:"Dr. Martens",item:"1460 boots",price:55,size:"EU42",cond:"Very good"},
    {brand:"Uniqlo",item:"Fleece pullover",price:12,size:"M",cond:"Good"},
    {brand:"Patagonia",item:"Better Sweater vest",price:38,size:"L",cond:"Very good"},
    {brand:"Ganni",item:"Printed midi skirt",price:29,was:45,size:"S",cond:"Like new",tag:"−36%"},
    {brand:"Stüssy",item:"Logo cap",price:16,size:"One size",cond:"Good"},
    {brand:"Acne Studios",item:"Wool scarf",price:34,size:"One size",cond:"Very good"},
  ];

  const grid = document.getElementById('grid');
  grid.innerHTML = items.map(it => `
    <div class="card">
      <div class="thumb">
        ${it.tag ? `<div class="tag">${it.tag}</div>` : ''}
        <div class="heart">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A8A82" stroke-width="2">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
          </svg>
        </div>
        photo
      </div>
      <div class="info">
        <div class="price">€${it.price}${it.was ? `<span class="was">€${it.was}</span>` : ''}</div>
        <div class="brand">${it.brand}</div>
        <div class="meta">${it.item} · ${it.size} · ${it.cond}</div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelector('.chip.active').classList.remove('active');
      chip.classList.add('active');
    });
  });