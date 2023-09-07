(function () {
  'use strict';
    //active link on click
    let link_prev='link_home';
    let nav_links = document.querySelectorAll('.nav-link');
    for(let x = 0; x < nav_links.length; x++) { 
      nav_links[x].addEventListener('click', function(e){
        document.getElementById(link_prev).classList.remove('active');
        document.getElementById(e.target.id).classList.add('active');
        link_prev=e.target.id;
      });     
    }
    //SHOW/HIDE MENU
    document.getElementById('open_menu').addEventListener('click', function(e) {
        if(document.getElementById('navbarCollapse').style.visibility == 'visible'){
              document.getElementById('navbarCollapse').style.visibility = 'hidden';
              document.getElementById('navbarCollapse').classList.remove('show');
        }else{
            document.getElementById('navbarCollapse').style.visibility = 'visible';
            document.getElementById('navbarCollapse').classList.add('show');
        }
    });     
        
    //IMGS HEADER
    document.getElementById('img_header-controls-right').addEventListener('click', function(e) {
        if(this.getAttribute('data-allow-click')=='1'){
           changeImgsHeader('next'); 
        }        
    });
    
    document.getElementById('img_header-controls-left').addEventListener('click', function(e) {
       if(this.getAttribute('data-allow-click')=='1'){
           changeImgsHeader('prev');
       }
    });
    
    //MENU
    getCatsMenu();
    filterMenuItems('all');
    /*Click in menu categories*/
    const btn_port_clicked = document.getElementsByClassName('btn-menu');

    for(let i = 0; i < btn_port_clicked.length; i++) {
      btn_port_clicked[i].addEventListener('click', function(e) {
        let num = this.getAttribute('data-filter');
        filterMenuItems(num); 
        addActiveBtnMenu(this);
      });
    } 
    
    //TESTIMONIALS
    getTestimonialsItems();
    
    //CONTACT
    //send form
    document.getElementById('form_send').addEventListener('click', function(e) {
        checkForm();
    });
    //show/hide error messages when sending the form
    let form_inputs = document.getElementsByClassName('form-control');
    for(let i = 0; i < form_inputs.length; i++) {
        //show
      form_inputs[i].addEventListener('keyup', function(e){
        let id =this.getAttribute('id');
        let valor= this.value;
        valor=valor.trim();
        if(valor.length>0){
            if(id!='email'){
                document.getElementById(id+'_error').style.display='none';
            }else{
                if(!regExpEmail.test(valor)) {
                    document.getElementById(id+'_error').style.display='block'; 
                    this.focus();
                }else{
                   document.getElementById(id+'_error').style.display='none'; 
                }
            }       
        }else{
           this.focus();
           document.getElementById(id+'_error').style.display='block';
        }      
      });
       //hide 
     form_inputs[i].addEventListener('blur', function(e){
        let id =this.getAttribute('id');
        document.getElementById(id+'_error').style.display='none';             
      }); 
    }
    window.addEventListener('scroll', function(){
       let pos_y_window = window.scrollY;
       let pos_y_cont = document.getElementById('about-us').offsetTop;
        if(pos_y_window >= pos_y_cont){
           document.getElementById('to_top').style.display='block';
        }else{
            document.getElementById('to_top').style.display='none';
        }
       
    });
    //Animate on scroll plugin
    const josh = new Josh({
     onDOMChange: true,
    });
    
    //hide loader
    window.addEventListener('load', function(){
       document.getElementById('loader').remove();
    });
})();