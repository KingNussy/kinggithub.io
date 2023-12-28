data = [{
    'img1': 'CharacterData.jpg',
    'img2': 'verstappen-pictures.jpg',
    'title': 'Fan Web Char Aznable',
    'subtitle': 'Zeon',
    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente quo, provident fuga pariatur fugiat'
}, {
    'img1': 'CharacterData.jpg',
    'img2': 'verstappen-pictures.jpg',
    'title': 'Fan Web Char Aznable',
    'subtitle': 'Zeon',
    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente quo, provident fuga pariatur fugiat'
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
        <div class="img-project">
            <img src="'+element.img1'" alt="">
            <img src="${element.img2}" alt="">
        </div> 
        <div class="desc-project">
            <h1>${element.title}</h1>
            <h2>${element.subtitle}</h2>
            <h2>${element.desc}</h2>
            <button class="read-more">Read More</button>
        </div>
    </div>`
});