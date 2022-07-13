window.onload = specialsDomInicial;

function agregarEventos()
{
  let listItems = document.getElementsByClassName("specialsPer-listItem");

  for (const item in listItems) {
    
    if (listItems[item].nodeName  === 'A')
      listItems[item].onclick = specialsDom;

  }
  
}


function agregarEventListener()
{
  let listItems = document.getElementsByClassName("specialsPer-listItem");

  for (const item in listItems) {
    
    if (listItems[item].nodeName  === 'A')
      listItems[item].addEventListener("click", specialsDom);

  }
  
}

function specialsDomInicial() {
  
  agregarEventListener();

  let specialsDatos = document.getElementById("row-specials-datos");
  let specialsImg = document.getElementById("row-specials-img");
  let urlImg = "assets/img/specials-1.png";
  let htmlDinamico = "<h3>Architecto ut aperiam autem id</h3>";

  htmlDinamico +=
    "<p class='fst-italic'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>";
  htmlDinamico +=
    "<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil.Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>";

  specialsDatos.innerHTML = "";
  specialsDatos.innerHTML = htmlDinamico;
  specialsImg.src = urlImg;

  

}



function specialsDom() {
  let specialsDatos = document.getElementById("row-specials-datos");
  let specialsImg = document.getElementById("row-specials-img");
  let tab = parseInt(this.name);
  
  let urlImg = "";
  let htmlDinamico = "";

  switch (tab) {
    case 1:
      urlImg = "assets/img/specials-1.png";
      htmlDinamico += "<h3>Architecto ut aperiam autem id</h3>";
      htmlDinamico +=
        "<p class='fst-italic'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>";
      htmlDinamico +=
        "<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil.Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>";
      break;
    case 2:
      urlImg = "assets/img/specials-2.png";
      htmlDinamico += "<h3>Et blanditiis nemo veritatis excepturi</h3>";
      htmlDinamico +=
        "<p class='fst-italic'>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia etreiciendis sunt sunt est</p>";
      htmlDinamico +=
        "<p>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>";
      break;
    case 3:
      urlImg = "assets/img/specials-3.png";
      htmlDinamico +=
        "<h3>Impedit facilis occaecati odio neque aperiam sit</h3>";
      htmlDinamico +=
        "<p class='fst-italic'>Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>";
      htmlDinamico +=
        "<p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>";
      break;
    case 4:
      urlImg = "assets/img/specials-4.png";
      htmlDinamico +=
        "<h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>";
      htmlDinamico +=
        "<p class='fst-italic'>Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>";
      htmlDinamico +=
        "<p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore </p>";
      break;
    case 5:
      urlImg = "assets/img/specials-5.png";
      htmlDinamico +=
        "<h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>";
      htmlDinamico +=
        "<p class='fst-italic'>Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>";
      htmlDinamico +=
        "<p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque quiquibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>";
      break;
  }

  specialsDatos.innerHTML = "";
  specialsDatos.innerHTML = htmlDinamico;
  specialsImg.src = urlImg;
}
