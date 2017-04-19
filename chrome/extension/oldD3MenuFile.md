// ADDING CHECKBOX to friends list container
var sentIconContainer = $("<div class='sent-icon-container' id='sentIconContainer'><div class='sent-icon-inner'><i class='fa fa-check' aria-hidden='true'></i></div></div>");
        $( sentIconContainer ).appendTo( '.wall-menu-single-friend' );
     
        /*$( ".tags-menu-container" ).append( singleTag );    */
        $( singleFriend ).appendTo( '.wall-menu-friends-inner' );
        console.log('singleFriend appended!', singleFriend);

        $('.wall-menu-single-friend').bind("click", function (e) {
          console.log('single friend clicked')
            $(".sent-icon-container").finish().toggle(100)
            .css({
            position: 'absolute', /* this is the key to render it anywhere */
            /*top: event.pageY + 100 + "px",
            left: windowWidth - 50 + "px" */
            });
        })

//


var $d3library = ("<script src='https://d3js.org/d3.v3.min.js' charset='utf-8'></script>");
$( "head" ).append( $d3library );
import React, { Component } from 'react';
import { render } from 'react-dom';
import Dock from 'react-dock';

import 'antd/dist/antd.css';
import { Button, notification } from 'antd';
import { Card as CardAntd } from 'antd';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import $ from 'jquery';
var d3 = require('d3');
import './d3menu.js';
import * as firebase from 'firebase';

import './sideWheelMenu.js';

/* initializing firebase database */
const projectId = 'libry-81fd5';
const databaseURL = "https://libry-81fd5.firebaseio.com/";
const firebaseApiKey = "AIzaSyCPuRUo8juo7R-54ghbRdX7gKpIjjGWlLs"
const config = {  
      apiKey: firebaseApiKey,
      authDomain: "libry-81fd5.firebaseapp.com",
      databaseURL: databaseURL,
      storageBucket: "gs://libry-81fd5.appspot.com",
    };
const fb = firebase
              .initializeApp(config)
              .database()
              .ref();


var NotificationSystem = require('react-notification-system');

class InjectApp extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };

    fb.on('value', snapshot => {
      const store = snapshot.val();
      console.log('STORE, ', store);
      this.setState({ store })
    })


    /* ciaoClass is display: none so won't show up unless clicked */

    /* TRY append the yellowSquare and see if it works that way */
    
    /*var $yellowSquare = $("<div class='yellowSquareElement'></div>");
    $( "body" ).append( $yellowSquare );*/


    /* FINALLY issue was the fucking point */
    /*var ciaoDiv3 = ("<div class='yellowSquareElement'>CiaoDiv3</div>");
    var $newdiv1 = $( "<div id='object1' class='ciaoClass' >CiaoTwo<div>CiaoThree</div></div>");
        $(ciaoDiv3).appendTo('body')
        .css({
          top: "500px",
          left: "500px"
      });*/

    /* actual radial menu -> set to display:none */
    var $radialMenu = $("<nav class='circular-menu'><div class='circleRadial'><a id='homeIcon' class='fa fa-home fa-2x'></a><a href='' class='fa fa-facebook fa-2x'></a><a href='' class='fa fa-twitter fa-2x'></a><a href='' class='fa fa-linkedin fa-2x'></a><a href='' class='fa fa-github fa-2x'></a><a href='' class='fa fa-rss fa-2x'></a><a href='' class='fa fa-pinterest fa-2x'></a><a href='' class='fa fa-asterisk fa-2x'></a></div><a href='' class='menu-button fa fa-bars fa-2x'></a></nav>");
    $( "body" ).append( $radialMenu); /* this appends to the bottom of the body, not where the cursors 
   is, and is hidden by display: none */
    

    /* STEP 0 Add FontAwesome Icons */
    var fontAwesomeLink = $("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>");
    $( "head" ).append( fontAwesomeLink );

   /* STEP 1 */
    var newContextMenu = $("<div class='new-context-menu' display='none' width='400' height='400'><div class='new-context-menu-inner'><div class='new-context-menu-button-container' id='newContextMenuStarButton'><i class='fa fa-star' aria-hidden='true'></i></div><div class='new-context-menu-button-container' id='newContextMenuSendButton'><i class='fa fa-paper-plane-o' aria-hidden='true'></i></div></div></div>");
    $( "body" ).append( newContextMenu );

    // possible alternative solution using JQUERY
    /*    $.contextMenu({
        selector: '.body',
        items: {
            copy: {
                name: "Copy",
                callback: function(key, opt){
                    alert("Clicked on " + key);
                }
            }
        }
    });*/

    document.getElementById('newContextMenuStarButton').onclick = function(e) {
      console.log('NEW CONTEXT MENU STAR CLICKED')
    }
    
    document.getElementById('newContextMenuSendButton').onclick = function(e) {
      console.log('NEW CONTEXT MENU SEND CLICKED')
    }



    var $d3MenuSvg = $("<svg class='svg-holder' display='none' width='400' height='400'><g id='menu-holder' transform='translate(100,100)'></g></svg>");
    $( "body" ).append( $d3MenuSvg);


    /* WHEEL MENU */
  /*  var $wheelMenu = $("<div class='wheel-button'>ciao</div>");
    $( "body" )
    .css({
      left: '100px',
      top: '100px'
    })
    .append( $wheelMenu);

    $(".wheel-button").wheelmenu({
    trigger: "hover",
    animation: "fly", 
    animationSpeed: "fast"
  });*/
    console.log('$.fn.wheelmenu() => ',$.fn.wheelmenu());

    console.log('this, before execute() ', this);

 /*  the action is just an alert displaying the string  */ 
 function execute(that){

    console.log('INSIDE execute', that);
    /*that.addNotification();*/
      // here's not defined 
     var data = [
        { name: '1th Save to LIBRY -> initially 5 items - push 2 more items in menu',
          icon: "https://cdn0.iconfinder.com/data/icons/education-vol-01-2/32/pin-pushpin-mark-stationery-office-32.png", 
          action: function(){
            console.log('1th save called, data = ', data.length)
            if ( data.length == 5 ){
            setTimeout(function(d) { 
              /*  adding 3 button-items-sections to the menu */
            data.push({ 
                name: '1a (6th) item BACK ARROW -> pop() & Go Back to initial state',
                icon : "https://cdn1.iconfinder.com/data/icons/user-interface-01/96/Asset_50-128.png ", 
                action: function(){
            /*  onHover, remove (pop) two items off the menu */ 
            if (data.length >= 5) {
            setTimeout(function(d) { 
              data.pop();
              data.pop();
              m.show(data);
            }, 200);
           console.log('1a or 6 th element added, data: ', data.length);
            }
          }
        });
          data.push({ 
                  name: '1b or 7th item',
                  icon : "https://github.com/favicon.ico", 
                  action: function(){
                    /*that.addDataToFirebase({ ciao: 'hola' })*/
                    that.addNotification();
                  } });
            m.show(data); /*  display menu with 6th and 7th items added */ 
          console.log('items added to data' + ' , data.length = ', data.length);
        }, 200); 
          console.log(data.length);
          }
         } /*  end of if statement */
        },
       { name: '2. SHIP to a friend, the right end segment, as a try',
                  /* OR: https://cdn1.iconfinder.com/data/icons/user-interface-01/119/Asset_21-128.png*/
          icon : "https://cdn0.iconfinder.com/data/icons/education-vol-01-2/32/mail-email-letter-cover-envelope-card-inbox-32.png",
          action: function(x){ 
          console.log(x*x);
          console.log('SHIP TO A FRIEND, or 2nd item ')} 
        },
        { name: '3th item PEN&paper, top segment action, can be handled outside also', 
            /*  https://cdn0.iconfinder.com/data/icons/education-vol-01-2/32/pencil-write-draw-education-school-stationery-32.png https://cdn1.iconfinder.com/data/icons/user-interface-01/95/Asset_68-128.png*/
          icon : "https://cdn0.iconfinder.com/data/icons/education-vol-01-2/32/pencil-write-draw-education-school-stationery-32.png", 
          action: function(){
            console.log('now data.length = ', data.length);
            console.log('top segment of the menu invoked')}
        },
        /* https://cdn4.iconfinder.com/data/icons/logos-4/24/Chrome-128.png
       // screenshot ICON
       https://cdn1.iconfinder.com/data/icons/business-management-and-growth-20/64/1019-128.png
        */
        { name: '4th. Chrome Icon -> open default context menu',
          icon : "https://cdn3.iconfinder.com/data/icons/social-media-logos-ii-filled-line/2048/5343_-_Google_Chrome-32.png", 
          action: function(){console.log('chrome button')}
        },
        { name: '5th upper left, SCREENSHOT',
         /*  https://cdn1.iconfinder.com/data/icons/business-management-and-growth-20/64/1019-128.png 
         https://cdn0.iconfinder.com/data/icons/education-vol-01-2/32/paper-report-document-letter-file-journal-article-32.png
         */
         icon : "https://cdn0.iconfinder.com/data/icons/education-vol-01-2/32/paper-report-document-letter-file-journal-article-32.png", 
         action: "I am the screenshot Menu Segment " 
        } 
    ];


    // Show menu launch
    var m = new d3.radialMenu().radius(40)
                  .thickness(30)
                  .appendTo("#menu-holder")
                  .show(data);

  /*  this will add onmouse event only to the one at the top; */ 
/*   document.querySelector('.menu-segment').onmouseover = function(event) {
      console.log('BEFORE TIMEOUT');
      setTimeout(function(d) { 
        data.push({ icon : "https://github.com/favicon.ico", action: "segment 5" });
        data.push({ icon : "https://github.com/favicon.ico", action: "segment 6" });
        data.push({ icon : "https://github.com/favicon.ico", action: "segment 7" });
        
        m.show(data);
    }, 300); 
      
      console.log('AFTER INVOKED .menu-segment onmouseover invoked');
   event.preventDefault(); 
} */
  

    // Add data
/*     setTimeout(function(d) { 
        data.push({ icon : "https://github.com/favicon.ico", action: "segment 5" });
        data.push({ icon : "https://github.com/favicon.ico", action: "segment 6" });
        data.push({ icon : "https://github.com/favicon.ico", action: "segment 7" });
        
        m.show(data);
    }, 3000); */

    // Remove data
 /*    setTimeout(function(d) { 
        data.pop();
        data.pop();
        data.pop();
        data.pop();
        m.show(data);
    }, 6000); */

    // Hide menu
/*     setTimeout(function(d) {
       m.hide();
    }, 1000); */

} /* end of execute function */ 

// Fire straight away -> timeout for the animation
  setTimeout(function(d) {
        console.log('NOW it.s bound correctly, inside setTimeOut ', this);
        var that = this;
       execute(that);
  }.bind(this), 100) /* try add bind(this) somewhere here */


    
    /* this prepares circle nodes to be opened (animation via js) */
    var items = document.querySelectorAll('.circleRadial a');
      for(var i = 0, l = items.length; i < l; i++) {
        items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
        
        items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
      };
      /* NOW it works correctly, this is just to
      somehow 'activate' this CSS transition,
      it needs be called only once */
      document.querySelector('.circleRadial').classList.toggle('open');    
    /* define here single event handlers for menu icons */
      document.getElementById('homeIcon').onmouseover = function(e) {
        e.preventDefault();
        console.log('.circle -> open  will close the circle');

        /* YOU ARE HERE, it works! */
        var ciaoDiv3 = ("<div class='yellowSquareElement'>CiaoDiv3</div>");
        var $newdiv1 = $( "<div id='object1' class='ciaoClass' >CiaoTwo<div>CiaoThree</div></div>");
      
        $(ciaoDiv3).appendTo('body')
        .css({
          top: e.pageY + "px",
          left: e.pageX + "px"
      });

        /*$(".circular-menu").finish().toggle(100).
    // WHERE: display where the mouse cursor is;
        css({
            top: event.pageY - 90 + "px",
            left: event.pageX - 90 + "px"
        });*/


        /*var ciaoDiv = ("<div class='.yellowSquareElement'>CiaoDiv</div>");
        $(ciaoDiv).appendTo('body').css({
          top: e.pageY + "px",
          left: e.pageX + "px"
          });*/

        /*$(".yelloSquareElement").finish().toggle(100).
    // WHERE: display where the mouse cursor is;
        css({
            top: event.pageY - 90 + "px",
            left: event.pageX - 90 + "px"
          });*/
        /* you may want to correct the name of the class below
        since you changed to circleRadial or something of the
        sort I believe */ 
        /* expected outcome is menu being closed */

          /* this SEEM to cause issues */
         /*document.querySelector('.circleRadial').classList.toggle('open');*/
       }   

    console.log('constructor invoked');
    this.addNotification = this.addNotification.bind(this);
  }

  /* this.buttonOnClick was clicked from button to -> toggle side deck */
  buttonOnClick = () => { /* this is Dock stuff */
    this.setState({ isVisible: !this.state.isVisible });
  };
  /* this isn't used, it's for Antd notification component  */
  openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

addDataToFirebase(data){
  fb.child('libryObjects').push(data, response => response)
}

componentDidMount(){

  console.log('COMPONENTDidMount');

  $("body").on("mousemove",function(event) {
    if (event.pageX > 1180) {
        console.log('MOUSE NEARING THE EDGE');
    }
});



    $(document).bind("contextmenu", function(event) {
      /*event.preventDefault();*/
      console.log('CONTEXT MENU reactivated');
      console.log('event ', event )
    /* this is the second step, revealing the radial-menu, the first step is rendering the square where the cursor is */
        /*document.querySelector('.menu-button').onclick = function(e) {
          console.log('querySelector function in constructor called');
           e.preventDefault(); document.querySelector('.circleRadial').classList.toggle('open');
        }*/
    

    $(".new-context-menu").finish().toggle(100).
    css({
        position: 'absolute', /* this is the key to render it anywhere */
        top: event.pageY - 54 + "px",
        left: event.pageX + "px"
    });


    /* PREVIOUS D3 menu */
    /*$(".svg-holder").finish().toggle(100).
    css({
        position: 'absolute', 
        top: event.pageY - 90 + "px",
        left: event.pageX - 90 + "px"
    });*/

    // If the document is clicked somewhere
      $(document).bind("mousedown", function (e) {
    // If the clicked element is not the menu
        if (!$(e.target).parents(".new-context-menu").length > 0) {
        // Hide it
        $(".new-context-menu").hide(100);
      }
    });

 }.bind(this)); /*end of bind context menu function call */

     /* // this seem to BE a COPY use it as a reference 
      document.getElementById('homeIcon').onmouseover = function(e) {
        console.log('.circle -> open closes the circle');
        e.preventDefault();
        // expected outcome is menu being closed 

        // define a entire new element like a square that has nothing 
        to do with circleRadial and render it
        onmouse over 
        $(".yelloSquareElement").finish().toggle(100).
    // WHERE: display where the mouse cursor is;
    css({
        top: event.pageY - 90 + "px",
        left: event.pageX - 90 + "px"
    });

          // THS needs to be working otherwise it does not work well. 
         document.querySelector('.circleRadial').classList.toggle('open');     
       } */



    /* FETCH HTML NODE ON CLICK */
    $(window).click(function(e) {
      /* click and select HTML node (node at the bottommost) */
    var x = e.clientX, y = e.clientY,
    elementMouseIsOver = document.elementFromPoint(x, y);
    console.log(elementMouseIsOver) // no id 
    /* get the computed CSS (stored by Chrome in CSSrules and rules) */
    var computedCSS = window.getComputedStyle(elementMouseIsOver);

     /*const injectDOM = document.createElement('div');
      injectDOM.className = 'inject-react-example';
      injectDOM.style.textAlign = 'center';*/

      /* this one is working fine */
      /*document.body.appendChild(elementMouseIsOver);*/

    /*var fetchedElement = document.getElementById(elementMouseIsOver);
    console.log(fetchedElement);*/
    /*alert(elementMouseIsOver);*/

  }.bind(this)); /* END of contextMenu onClick event function call */

        /*chrome.runtime.sendMessage({msg: "capture"}, function(response) {
          console.log(response.done);
          var screenshot = response.imgSrc;
          this.setState({ screenshot });
          console.log('this.state in chrome.runtime ', this.state);
    }.bind(this));*/

      /* this is just to demonstrate how the exhchange w/ background work */
      chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        /* callback */
        console.log(response.farewell);
      });                       
  } /* END of componentDidMount */

  /* previous approach -  not being called/used now */
 _addNotification(event) {
  console.log('1. addNotification invoked');
    event.preventDefault();
    this.refs.notificationSystem.addNotification({
      message: 'Notification message',
      level: 'success'
    });
  }


  /* NOTIFICATION ANIMA */
  /* changed the ref, before there was no function call there. */
   addNotification(notification) {
    /* take the screenshot in backround files */
    chrome.runtime.sendMessage({msg: "capture"}, function(response) {
          var screenshot = response.imgSrc;
          this.setState({ screenshot });
    }.bind(this))
    /* here the state hasn't been updated yet, hence why won't render the screenshtot*/
    /*console.log('outside runtime function, ', this.state);*/
    /* display the card on top of a notification view in top right corner*/
  setTimeout(function(){ /* works fine now */
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var description = $('meta[name="description"]').attr('content');
    if (!description){ description = ' ' };

    var descriptionNull = null;

    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';

    var libryObject = {
      title: title,
      description: description,
      link: link,
      thumbnail: link.href,
      screenshot: this.state.screenshot
    }


    this.addDataToFirebase(libryObject);

        /* render notification with screenshot, description, title, favicon thumbnail */
          this.notifications.addNotification({
            /* the original notification 'view' is still here, 
            does not get displayed because the style is commented out */
            // bodyStyle={{ padding: 0 }} // will render the screenshot to full card size
            level: 'info',
            children: (
             <CardAntd 
               bodyStyle={{ padding: 0 }}
               title={title}
               extra={
                <img src={link.href} width={35}/>}
               style={{ width: 320, height: 320 }}
               >
                  <img src={this.state.screenshot} width="75%" />
                  <p className='cardDescriptionStyle'>{description}</p>
                </CardAntd>
            )
           })
     }.bind(this), 300)
  } /* end of addNotification*/


  render() {

    /* just an experiment, not being used at the moment */
    const dummyText = 'hey how are you!';
    const TestCards = () => (
      <Card style={{width: '350px'}}>
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title="Avatar style title"
          subtitle="Subtitle here"
        />
        <CardMedia
          aspectRatio="wide"
          image="https://placeimg.com/800/450/nature"
        />
        <CardTitle
          title="Title goes here"
          subtitle="Subtitle here"
        />
        <CardText>{dummyText}</CardText>
        <CardActions >
          <Button label="Action 1" />
          <Button label="Action 2" />
        </CardActions>
      </Card>
     );

    console.log('RENDER inject')

    return (
      <div>
    {/*  <TestCards/>
      <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title="Avatar style title"
          subtitle="Subtitle here"
        />*/}
  
        { /* <Button type="primary" id='LibryButton' onMouseEnter={this.addNotification}>
          Save to Libry
        </Button> */ }

       <NotificationSystem ref={ref => this.notifications = ref} />
        <Dock
          position="right"
          dimMode="transparent"
          defaultSize={0.4}
          isVisible={this.state.isVisible}
        >
         <CardAntd title="Card in the Dock" extra={<a href="#">More</a>} style={{ width: 320 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </CardAntd>
        <Button type="primary" >
          Screenshot here
        </Button>
          <iframe
            style={{
              width: '100%',
              height: '100%',
            }}
            frameBorder={0}
            allowTransparency="true"
            src={chrome.extension.getURL(`inject.html?protocol=${location.protocol}`)}
          />
        </Dock>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react-example';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});
