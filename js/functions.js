//fadeIn and fadeOut
function fadeOut(el){
    if(el.classList.contains('fadeIn')){
      el.classList.remove('fadeIn'); 
    }
      el.classList.add('fadeOut');//add classes in css
}
function fadeIn(el){
    setTimeout(function(){
        if(el.classList.contains('fadeOut')){
            el.classList.remove('fadeOut'); 
        }
       el.classList.add('fadeIn'); 
    }, 150);   
}
//HEADER IMGS
function changeImgsHeader(dir){
  fadeOut(document.getElementById('dish-source'));
    
  let img =document.getElementById('dish-source');
  let cur_num =img.getAttribute('data-cur-num');
    cur_num = parseFloat(cur_num);
  let num;

    if(dir=='next'){
        num =cur_num+1;       
    }else{
        num =cur_num-1;        
    }
    
    if(num==3){
        document.getElementById('img_header-controls-right').setAttribute('data-allow-click', '0');
    }else{
        document.getElementById('img_header-controls-right').setAttribute('data-allow-click', '1');
    }
    if(num==1){
            document.getElementById('img_header-controls-left').setAttribute('data-allow-click', '0');
    }else{
        document.getElementById('img_header-controls-left').setAttribute('data-allow-click', '1');
    }
   
  document.getElementById('dish-source').setAttribute('data-cur-num', num);
  document.getElementById('dish-source').src='imgs/img-dish-'+num+'.png';
  fadeIn(document.getElementById('dish-source'));
}

//MENU
/*show menu categories*/
function getCatsMenu(){
    document.getElementById('menu-cats').innerHTML='<li class="btn-menu active_btn" data-filter="all">All</li>';
   
    for(let i=0; i<menu_cats.length; i++){
        document.getElementById('menu-cats').innerHTML+='<li class="btn-menu" data-filter="'+menu_cats[i].nid_cat+'">'+menu_cats[i].alias+'</div>';
    }
}

/*add class active to btns portfolio*/
function addActiveBtnMenu(elemento){
    let current = document.getElementsByClassName('active_btn');
    current[0].className = current[0].className.replace(' active_btn', '');
    elemento.className += ' active_btn';  
}


/*filter by portfolio category, click en each category*/
function filterMenuItems(num_cat){
    let resultado=menu_items;
    if(num_cat!='all'){
       resultado = menu_items.filter(item =>item.nid_cat==num_cat);
    }
    fadeOut(document.getElementById('data-menu'));
    document.getElementById('data-menu').innerHTML='';
        for(let i=0; i<resultado.length; i++){
            document.getElementById('data-menu').innerHTML+='<div class="p-3 col-sm-12 col-md-6 col-lg-4">'+
                '<div class="card m-0 p-0 shadow josh-js" data-josh-anim-name="fadeInUp">'+
                  '<img src="'+resultado[i].img_portada+'" class="card-img-top img-fluid" alt="'+resultado[i].titulo+'">'+
                  '<div class="card-body">'+
                   '<div class="row font-bold">'+
                       '<div class="col-md-6 my-1 text-start">'+resultado[i].titulo+'</div>'+
                       '<div class="col-md-6 my-1 color2 text-md-start text-lg-end">'+resultado[i].price+'</div>'+
                    '</div>'+
                    '<div class="row">'+
                       '<div class="col">'+resultado[i].descrip+'</div>'+
                   '</div>'+
                     '<div class="row"><div class="col my-1">'+
                        getStars(resultado[i].stars);
                      '</div></div>'+
                   '</div>'+            
                  '</div>'+
                '</div>'+
              '</div>';
        }
    fadeIn(document.getElementById('data-menu'));
}

function getStars(item_stars){
    let total_stars=5;
    let add_html='';
    for(let y=0; y<item_stars; y++){
        add_html+='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>';
    }
    if(item_stars<total_stars){
        let left_stars=total_stars -item_stars;
        for(let x=0; x<left_stars; x++){
            add_html+='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>';
        }
    }
    return add_html;
}
//TESTIMONIALS
function getTestimonialsItems(){  
    document.getElementById('data-testimonials').innerHTML='';
        for(let i=0; i<testimonials_items.length; i++){
            document.getElementById('data-testimonials').innerHTML+='<div class="cont-testim col-md-12 col-lg-4">'+
            '<div class="card mx-0 shadow josh-js" data-josh-anim-name="fadeInUp">'+
             '<div class="test-img-top d-flex justify-content-end pe-4">'+
                '<img src="'+testimonials_items[i].pic+'" class="img-fluid" alt="'+testimonials_items[i].name+'">'+ 
             '</div>'+              
              '<div class="card-body">'+
               '<div class="row my-1">'+
                   '<div class="col-md-12 col-sm-6 text-start font-bold text-uppercase">'+testimonials_items[i].name+'</div>'+
                   '<div class="col-md-12 col-sm-6 text-start">'+testimonials_items[i].job+'</div>'+
                '</div>'+
                '<div class="row mb-1 mt-4">'+
                   '<div class="col text-start">'+testimonials_items[i].text+'</div>'+
               '</div>'+         
              '</div>'+
            '</div>'+
      '</div>';
    }    
}

//CONTACT
//check and send contact form
function checkForm(){
    let ok = true;
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
   
    if( (name.value == '') && ok){
        document.getElementById('name_error').style.display='block';
        name.focus();
        ok = false;
    }
	if( ( (email.value =='') || (!regExpEmail.test(email.value)) ) && ok){
        document.getElementById('email_error').style.display='block';
        email.focus();
        ok = false;
    }

    if( (message.value == '') && ok){
        document.getElementById('message_error').style.display='block';
        message.focus();
        ok = false;
    }  
    			
    if(ok){		
        document.getElementById('message_sent_ok').style.display='block'; 
        name.value = '';
        email.value = '';
        message.value = '';
        return false;
       /* let datos = 'name='+encodeURIComponent(name.value)+'&email='+encodeURIComponent(email.value)+'&message='+encodeURIComponent(message.value);
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {  
            if (this.readyState == 4 && this.status == 200) {
                let result= this.responseText;
                document.getElementById('message_sent_ok').style.display='block'; 
                name.value = '';
                email.value = '';
                message.value = '';
                return false;
            }else{
                document.getElementById('message_sent_ok').style.display='none';
                return false;
            }
        }; 
        
        xhr.open('POST', 'php/contact-form.php', true);  
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
         
        xhr.send(datos);*/
    } 
}