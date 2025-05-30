/*==========================typing animations========================= */
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  /*==========================aside========================= */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for(let i = 0; i<totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
     
        removeBackSection();
        // Add back-section to previous active section and remove active from all nav items
        for(let j=0; j<totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) 
                {
                    addBackSection(j);
               // allSection[j].classList.add("back-section"); // Fixed typo here (was slassList)
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        // Add active class to clicked nav item and show corresponding section
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
  function removeBackSection()
  {
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
  }
  function addBackSection(num)
  {
    allSection[num].classList.add("back-section");
  }
  function showSection(element)
  {
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
  }
  function updateNav(element)
  {
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
  }
  document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
   const navTogglerBtn = document.querySelector(".nav-toggler"),
       aside = document.querySelector(".aside");
       navTogglerBtn.addEventListener("click", () =>
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++ )
        {
            allSection[i].classList.toggle("open");
        }
    }

// Animación de elementos al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    // Añadir clase 'fade-in' a elementos que queremos animar
    const sections = document.querySelectorAll('.section-title, .service-item, .portfolio-item');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Función para verificar si elemento está en viewport
    function checkVisible() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight * 0.8) {
                element.classList.add('visible');
            }
        });
        
        // Botón volver arriba
        const backToTop = document.querySelector('.back-to-top');
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    // Verificar elementos al cargar y al hacer scroll
    window.addEventListener('scroll', checkVisible);
    window.addEventListener('load', checkVisible);
    
    // Funcionalidad botón volver arriba
    const backToTop = document.querySelector('.back-to-top');
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
