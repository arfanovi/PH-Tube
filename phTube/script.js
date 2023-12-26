


const tubeData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    return data.data;
  };

  
  // Display data category
  const displayData = async (id) => {
    const tubeLoaded = await tubeData(id);
    const heroContainer = document.getElementById('heroTube-container');
    heroContainer.innerHTML = '';
  
    tubeLoaded.forEach((data) => {
      const createData = document.createElement('div');
      createData.classList = `card bg-slate-100 p-4 shadow-xl`;
  
      createData.innerHTML = `
        <div>
          <figure><img class="w-full h-64 object-cover" src="${data.thumbnail}" alt="PHeroTube" /></figure> 
        </div>
  
        <div class="grid grid-cols-2 mt-4 "> 
          <div>
            <figure><img class="w-16 h-16 bg-gray-300 rounded-full overflow-hidden object-cover" src="${data.authors[0].profile_picture}" alt="Ph" /></figure>
          </div>
          <div>
            <h2 class="card-title text-black font-bold ">${data.title}</h2>
            <p class =" font-bold ">${data.authors[0].profile_name}</p>
            <p>${data.others.views}</p>
          </div>
        </div>
      `;
  
      heroContainer.appendChild(createData);
    });
  };
  
      // Button handlers
    document.querySelectorAll('.button button').forEach((button) => {
    button.addEventListener('click', (event) => {
         const id = event.target.getAttribute('category');
          displayData(id);
        });
    });
    displayDataByCategory('1000');


 