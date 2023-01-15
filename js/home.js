console.log('ho')
const home=document.querySelector(".home")
async function get_img() {

    const requestURL = '../gallery.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const gallery = await response.json();
    console.log(gallery[0].name)
    gallery.forEach(e => {
        console.log(home)
        home.innerHTML+=
            `
            <!-- image -->
            <div class="image">
                <img  src="./assets/${e.url}" alt="">
                <!-- info -->
                <div class="img-info">
                    <p>${e.name}</p>
                    <a href="">
                        More Photos
                    </a>
                </div>
                <!-- End info  -->
            </div>
            <!-- End image -->
            `
        
    });
    
}
get_img()