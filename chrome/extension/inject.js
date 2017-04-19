/* JQUERY API
  use # and name: starContainer to select element by id;
  use .inner-container to select using css classes;

  return false; to break out 
*/

/* TO DO:
  
  1. clean CSS classes, get rid of all the other antd classes;

*/

/* APPENDING cdn-hosted Kievit Font */
/*var kievitFontCdn = $("<script type='text/javascript'>" + "(function() { var path = '//easy.myfonts.net/v2/js?sid=161086(font-family=FF+Kievit+Pro+Book)&sid=161223(font-family=FF+Kievit+Pro+Medium)&sid=161345(font-family=FF+Kievit+Pro+Bold)&sid=161493(font-family=FF+Kievit+Pro+ExtraLight)&key=32tsYRcV61'," + "protocol = ('https:' == document.location.protocol ? 'https:' : 'http:')," + "trial = document.createElement('script');" + "trial.type = 'text/javascript';" + "trial.async = true;" + "trial.src = protocol + path;" + "var head = document.getElementsByTagName('head')[0];" + "head.appendChild(trial);" + "})();" + "</script>");
$( "head" ).append( kievitFontCdn );*/

//<script type="text/javascript">
//  (function() {
//        var path = '//easy.myfonts.net/v2/js?sid=161086(font-family=FF+Kievit+Pro+Book)&sid=161223(font-family=FF+Kievit+Pro+Medium)&sid=161345(font-family=FF+Kievit+Pro+Bold)&sid=161493(font-family=FF+Kievit+Pro+ExtraLight)&key=32tsYRcV61',
//            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
//            trial = document.createElement('script');
//        trial.type = 'text/javascript';
//        trial.async = true;
//        trial.src = protocol + path;
//        var head = document.getElementsByTagName("head")[0];
//        head.appendChild(trial);
//    })();
// </script>


/* ------ WALL MENU ------ */
/* 1 */
$(document).ready(function(){
var wallMenuContainer = $("<div class='wall-menu' display='none' width='50' height='200'><div class='wall-menu-inner'><div class='wall-menu-button-container-star' id='wallMenuStarButton'><i class='fa fa-star' aria-hidden='true'></i></div><div class='wall-menu-transparent-divider'></div><div class='wall-menu-button-container' id='wallMenuSendButton'><i class='fa fa-paper-plane-o' aria-hidden='true'></i></div></div></div>");
$( "body" ).append( wallMenuContainer );
/*2*/
var wallMenuFriendsContainer = $("<div class='wall-menu-friends-container' id='wallMenuFriendsContainer'><div class='wall-menu-friends-inner'></div></div>");
$( "body" ).append( wallMenuFriendsContainer );

/* 3 send to a friend's email*/
var emailButtonContainer = $("<div class='email-button-container' id='emailButtonContainer'></div><div class='email-button-inner' id='emailButtonInner'></div>");
$( "body" ).append( emailButtonContainer );
// append this two guys independetly 
// <div class='email-form-container' id='emailFormContainer'><div class='email-form-inner' id='emailFormInner'></div></div>
      var emailIconUniqueId = 'emailIconUniqueId';
      var arrowIconContainer = $("<div class='envelope-icon-container' id=" + emailIconUniqueId + "><div class='envelope-icon-inner'><i class='fa fa-envelope-o' aria-hidden='true'></i></div></div>");
      $( arrowIconContainer ).appendTo( '#emailButtonContainer' ); // was sendCaption

      var emailBarInner = $("<div class='email-bar-inner' id='emailBarInner'><div class='email-bar-inner-upper'><input class='email-bar-input' type='text' placeholder='type email here..'></input><div class='email-send-button' id='emailSendButton'>send</div></div><div class='email-bar-inner-lower'> <input class='email-lower-checkbox' type='checkbox' name='vehicle' value='Bike' checked><div class='email-save-text'>save it for later</div></div></div>");
      $( emailBarInner ).appendTo( '#emailButtonInner' ); // was sendCaption

      var sentPopover = $("<div class='sent-confirmation-popover' id='sentConfirmationPopover'><div class='sent-popover-inner'><div class='sent-popover-icon'><i class='fa fa-check' aria-hidden='true'></i></div><div class='sent-popover-text'>Sent!</div></div></div>");
      //$( sentPopover ).appendTo( '#body' ); // was sendCaption
      $( "body" ).append( sentPopover );
      


var enteredArea = false;

$("body").on("mousemove", function(event) {
    var windowWidth = $(window).width();
    var areaThreshold = windowWidth - 60;
    /* WALL MENU SEND BUTTON events */


    if ( event.pageX > areaThreshold && event.pageX < windowWidth && !enteredArea ) {
        console.log(new Date().toLocaleTimeString() + 'enteredArea before = ', enteredArea);
        enteredArea = !enteredArea;
        console.log('enteredArea after changing value = ', enteredArea);
        /*console.log('MOUSE NEARING THE EDGE at ', event.pageX);*/
        $(".wall-menu").finish().fadeIn(400)
        .css({
        position: 'absolute', /* this is the key to render it anywhere */
        top: event.pageY - 100 + "px",
        left: windowWidth - 50 + "px" 
     });


      // EMAIL FORM CONFIRM: when clicking on 'send' in the email form, show 'sent' animation & hide email form.
      $(".email-send-button").click(function(){
        console.log('CLICK! email-send-button')
        $(".sent-confirmation-popover").finish().fadeIn(400) // animation
        .css({
        position: 'absolute', /* this is the key to render it anywhere */
        top: event.pageY + 300 + 'px',
        left: windowWidth - 150  + 'px', // was 300
     });

        // ALLOW to retoggle the animation multiple times in a row.
        if (!$('.email-button-container:hover').length > 0) {
          console.log('hiding animation popover')
          // hide sent-confirmation-popover
          setTimeout(function(){
          $(".sent-confirmation-popover").fadeOut(200) // animation
         }, 1000);
        }
           /*$(".sent-confirmation-popover")
                .css({
                display: 'none'
             });*/

        console.log('FIND solution here when you click again multiple times')
        //$(".sent-confirmation-popover").finish().hide(20)
        $(".email-button-inner").fadeOut(300); // gotta hide again or will work only once;
      })      
        
        function renderAddEmailBar(){
        console.log('event.pageY, windowWidth:  ', event.pageY, windowWidth)
        $(".email-button-container").click(function() { // was mouseenter
          console.log('mouseenter emailButtonContainer')
          $("#emailButtonInner").finish().fadeIn(200)
          .css({
           position: 'absolute',
           top: event.pageY + 300 + 'px',
           left: windowWidth - 250  + 'px', // was 300
         })

          if ($('.email-button-inner:hover').length > 0) {
                console.log('MOUSEOVER email-button-inner');
                return false; // leave friends-container open
              }
              else {
                console.log('NOT on email-button-inner, hide ')
                //$(".email-button-inner").fadeOut(200);
                //$(".email-button-container").hide(300); // was finish().hide(300)
              }

        }).mouseleave(function(){
          console.log('mouseleave')
          //$(".email-button-inner").finish().toggle(100);
          //$(".email-button-container").finish().toggle(100);
        })
        };


          $("#wallMenuSendButton").mouseenter(function() {
              var that = this;
              //timer = setTimeout(function(){
                /*console.log('MOUSE ENTER send button entered ')*/
                $(".wall-menu-friends-container").show(300) // was finish().show(300)
                  .css({
                  position: 'absolute', /* this is the key to render it anywhere */
                  top: event.pageY + 100 + "px",
                  left: windowWidth - 50 + "px" 
               });
                  $(".email-button-container").show(300) // was finish().show(300)
                  .css({
                  position: 'absolute', /* this is the key to render it anywhere */
                  top: event.pageY + 300 + "px",
                  left: windowWidth - 50 + "px" 
               });
                  renderAddEmailBar();

                  /*$('#thumbs div').removeClass('hovered'); // IMPORTANT -> 2nd time;
                  $(that).addClass('hovered');*/
              //}, 300);
          }).mouseleave(function() {
            /*console.log('MOUSELEAVE wallMenuSendButton ')*/

            //$("body").on('mousemove', function(){
             if ($('.wall-menu-friends-container:hover').length > 0) {
                console.log('MOUSEOVER wall-menu-friends-container');
                return false; // leave friends-container open
              }
              else {
                console.log('not on friends container, will hide friends menu')
                $(".wall-menu-friends-container").hide(300);
                $(".email-button-container").hide(300); // was finish().hide(300)
              }
            //});

            /*if ($(".wall-menu-friends-container").mouseover()){
              $("#wallMenuSendButton").mouseleave(function() {
                $(".wall-menu-friends-container").finish().hide(300) // was .finish().hide()
               })
              console.log('.wall-menu-friends-container.mouseover() about to return false')
              return false;
              //console.log(new Date().toLocaleTimeString() + '2+. mouse over friends menu, dont hide it')
              //return false;  
            }
            else {
              console.log('2. HIDE friends container via toggle  ')
              //hide it
            }*/
          }); 

    } // end of if apparently  

    
    
     if ( event.pageX < areaThreshold && enteredArea || event.pageX > windowWidth ) {
      
      if ($('.email-button-inner:hover').length > 0) {
        console.log('hovering on email-button-inner, dont hide it');
      } else {
      console.log('else: hiding the wall-menu -> out of area')
        $(".email-button-inner").fadeOut(300);
        $(".email-button-container").fadeOut(300);

      $(".wall-menu-friends-container").hide(300);
      $(".wall-menu").finish().fadeOut(300); /* was hide before. */
      enteredArea = !enteredArea;

      }

    }
    /*else {
      $(".wall-menu").hide(100);
    }*/
    
}); // end of onmousemove *apparently* 


var friendsData = {
        friends: [ 
        { src: 'https://pbs.twimg.com/profile_images/778560718706728960/dxuyrAn__400x400.jpg',
          summary: 'The bill was rejected due to Republicans controlling congress. Most people will lose basic healthcare',
          stars: 124,
          name: 'Frank',
          notification: { item: 'Top restaurants in Montmartre', date: 'April 21'}
        },
        { src: 'https://i.ytimg.com/vi/vt79JcPfZQA/maxresdefault.jpg',
          summary: 'Republicans vetoed against healthcare reform, undoing Obama s efforts to provide what is a basic rights in most other western societies',
          stars: 12,
          name: 'Jack',
          notification: { item: 'Backpropagation made clear', date: 'March 27'}
        },
        { src: 'https://blog.fogcreek.com/wp-content/uploads/2015/04/The-Effective-Engineer-Interview-with-Edmond-Lau-1.jpg',
          summary: 'The bill was fought against by Republicans',
          stars: 3,
          name: 'Aldous',
          notification: { item: 'Best GRE studying strategy', date: 'March 25'}
        },
        { src: 'https://image.slidesharecdn.com/151028razorfishmachinelearningafhfilm-151120125646-lva1-app6891/95/machine-learning-artificial-intelligences-influence-on-marketing-21-638.jpg?cb=1448024678',
          summary: 'Democrats could not get the bill passed because they have no control whatsoever in Congress',
          stars: 1,
          name: 'Jen',
          notification: { item: 'Learn Python the Hard Way', date: 'March 23'}
        } 
       ]
      }

/*4*/
var friendsArrayFromServer = friendsData.friends;
/*for ( var indexL = 0; indexL < friendsArrayFromServer.length; indexL++){
  var singleFriendContainer = document.createElement('div') // new
  singleFriendContainer.className = 'single-friend-container';
   $( singleFriendContainer ).appendTo( '.wall-menu-friends-inner' );
}*/

$.each(friendsArrayFromServer, function(index, value){
 // 1 SingleFriendContainer -> for darkened background effect
 var singleFriendContainer = document.createElement('div') 
  singleFriendContainer.className = 'single-friend-container';
  singleFriendContainer.id = value.name + 'Container';
  var poundedSingleFriendContainer = '#' + singleFriendContainer.id;
  console.log(singleFriendContainer.id)
  console.log(new Date().toLocaleTimeString() + 'poundedSingleFriendContainer: ', poundedSingleFriendContainer);
   $( singleFriendContainer ).appendTo( '.wall-menu-friends-inner' ); 
  
  // 2 SingleFriend -> friend photo
  var singleFriend = document.createElement('div');
        singleFriend.className = 'wall-menu-single-friend';
        singleFriend.id = value.name + 'id';
        singleFriend.style.backgroundImage = "url(" + value.src + ")";
        var poundSingleFriendId = '#' + singleFriend.id
        $( singleFriend ).appendTo( poundedSingleFriendContainer );

      // 3 send caption -> for checkbox & animation
      var sendCaption = document.createElement('div');
      sendCaption.className = 'single-friend-send-caption';
      //sendCaption.style.background = 'yellow';
      sendCaption.id = value.name + 'sendCaption';
      sendCaption.style.display = 'none';
      var poundSendCaption = '#' + sendCaption.id;

      var arrowUniqueId = 'arrowIcon' + value.name;
      var poundArrowUniqueId = '#' + arrowUniqueId;
      var arrowIconContainer = $("<div class='small-icon-container' id=" + arrowUniqueId + "><div class='small-icon-inner'><i class='fa fa-paper-plane-o' aria-hidden='true'></i></div></div>");
      $( arrowIconContainer ).appendTo( poundSingleFriendId ); // was sendCaption
      
      var checkboxUniqueId = value.name + 'Checkbox';
      var poundCheckboxUniqueId = '#' + checkboxUniqueId;
      var checkboxIconContainer = $("<div class='checkbox-icon-container' id=" + checkboxUniqueId + "><div class='checkbox-icon-inner'><i class='fa fa-check' aria-hidden='true'></i></div></div>");
      $( checkboxIconContainer ).appendTo( poundSingleFriendId );

      console.log('ADD spinners icon here')
      var spinnerUniqueId = value.name + 'Spinner';
      var poundSpinnerUniqueId = '#' + spinnerUniqueId;
      var spinnerInnerUniqueId = value.name + 'spinnerInnerUniqueId'; // just to try to set css fontSize using $
      var spinnerIconContainer = $("<div class='small-icon-container' id=" + spinnerUniqueId + "><div class='small-icon-inner' id=" + spinnerInnerUniqueId +"><i class='fa fa-spinner fa-pulse fa-3x fa-fw'></i></div></div>");
      $( spinnerIconContainer ).appendTo( poundSingleFriendId );
      
      var poundSpinnerInnerUniqueId = '#' + spinnerInnerUniqueId;
      $( poundSpinnerInnerUniqueId ).css({ fontSize: '8px', marginTop: '6px', paddingRight: '5px' /*background: 'yellow'*/ }); // for spinner -> to see if works. 

      var singleFriendState = {
        itemClicked: false,
      }

      function showAndHide(mainFunction, callback){
        mainFunction();
        if(callback){
          callback()
        }
      }

      $( poundSingleFriendId ).mouseenter(function(){
        console.log('singleFriendState.itemClicked: ', singleFriendState.itemClicked);
        if (!singleFriendState.itemClicked){
        console.log('singleFriend.id CLICKED: ', singleFriend.id );
        $(poundArrowUniqueId).toggle(300); // was show
        }
       });
      $( poundSingleFriendId ).mouseleave(function(){
        console.log('singleFriend.id CLICKED: ', singleFriend.id );
        $(poundArrowUniqueId).hide(300); // was show
       });

      $( poundSingleFriendId ).click(function(){
        console.log('CLICK, singleFriend.id CLICKED: ', singleFriend.id );

        function renderSpinnerAndCheck(callback){
          console.log(new Date().toLocaleTimeString() + ' renderSpinnerAndCheck() ');
          $(poundArrowUniqueId).fadeOut(50); // hide arrow IMMEDIATELY
          //$(poundSpinnerUniqueId).css({ fontSize: 'small' });
          console.log(new Date().toLocaleTimeString() + ' renderSpinnerAndCheck(), point is will fire spinner.show() below and then go on to the callback.')
          $(poundSpinnerUniqueId).fadeIn({
            duration: 500,
            complete: function(){
              console.log('spinner completed, now wait 2500 and then hide');
              setTimeout(function(){
              $(poundSpinnerUniqueId).fadeOut({
                duration: 100,
                complete: function(){
                  console.log('hide spinner via toggle(), here you you should add the toggle checkbox');
                  $( poundCheckboxUniqueId ).fadeIn(200);
                }
              });
             }, 1500)
            }
          }); // was show(300)
        
         if(callback){
          callback()
          console.log(new Date().toLocaleTimeString() + ' this should be the last thing that fires, after the callback even ')
         }
        } // end of renderSpinnerAndCheck

        function renderSpinnerCallback(){
          console.log('NOT BEING RENDERED NOW, can be added as callback.');
          console.log('renderSpinnerCallback()');
          $(poundArrowUniqueId).hide(200); // hide arrow 
          if (!singleFriendState.itemClicked){
         $(poundCheckboxUniqueId).toggle(200); // display checkbox
         }
        singleFriendState.itemClicked = !singleFriendState.itemClicked; // set it to true to avoid toggling arrow again
        }

        function aCallBackTest(){ console.log(new Date().toLocaleTimeString() + ' TIME: check the time, aCallBackTest() ')};
        
        renderSpinnerAndCheck(function(){
          aCallBackTest();
        }); // takes a callback if needed.

       }) // end of click
     }); // end of each.
      

        //document.getElementById(singleFriend.id).onclick = function(e) {
          //  $(sendCaption.id).show(300);
            /*$(checkboxPoundedId).finish().toggle(300)
            .css({
            position: 'absolute'
            });*/
        //})

for ( var indexJ = 0; indexJ < friendsArrayFromServer.length; indexJ++){       
        var name = friendsArrayFromServer[indexJ].name; 
        var friendPoundedId = '#' + name;
        var checkboxUniqueId = name + 'Checkbox';
        /* two variants: checkbox and 'sent to frank background' */
        var sentBackgroundContainer = $("<div class='sent-background-container' id=" + checkboxUniqueId + "><div class='sent-background-inner'>Sent to " + name + "!" + "</div></div>"); 
        var checkboxIconContainer = $("<div class='checkbox-icon-container' id=" + checkboxUniqueId + "><div class='checkbox-icon-inner'><i class='fa fa-check' aria-hidden='true'></i></div></div>");
        var containerId = "#" + name + 'Container';
        //console.log(containerId);
        //$( checkboxIconContainer ).appendTo( '.single-friend-container' );
        var checkboxPoundedId = "#" + checkboxUniqueId;
  /*document.getElementById(name).onclick = function(e) {
            $(checkboxPoundedId).finish().toggle(300)
            .css({
            position: 'absolute'
            });*/

            /*$(checkboxPoundedId).css({
              background: 'black',
              opacity: 0.5
            })*/
  console.log('index, value.name: ', name)
 //})
 }
}); /* end document.ready() */

/*--------------------------------------------*/

/* STEP 0 Add FontAwesome Icons */
var fontAwesomeLink = $("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>");
$( "head" ).append( fontAwesomeLink );


/*var $d3library = ("<script src='https://d3js.org/d3.v3.min.js' charset='utf-8'></script>");
$( "head" ).append( $d3library );*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import Dock from 'react-dock';

import 'antd/dist/antd.css';
import './injectMenu.css';

import { Button, notification } from 'antd';
import { Card as CardAntd } from 'antd';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import $ from 'jquery';
/*var d3 = require('d3');
import './d3menu.js';*/
import * as firebase from 'firebase';

/*import './sideWheelMenu.js';*/

/* initializing firebase database */
const projectId = 'libry-81fd5';
const databaseURL = "https://libry-81fd5.firebaseio.com/";
const firebaseApiKey = "hidden"
const config = {  
      apiKey: firebaseApiKey,
      authDomain: "libry-81fd5.firebaseapp.com",
      databaseURL: databaseURL,
      storageBucket: "gs://libry-81fd5.appspot.com",
    };

    /* HERE IS THE ISSUE, it's with the FireBase call that blocks everything 
    NOT CSS or any appending function call. */
/*const fb = firebase
              .initializeApp(config)
              .database()
              .ref();*/

const herokuAppAPI = 'https://libry-backend.herokuapp.com/api/Articles';


var NotificationSystem = require('react-notification-system');

class InjectApp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isVisible: false,
      savedItemTitle: 'not saved yet'
    };

    console.log('not fetching Store from fb anymore')
    /*fb.on('value', snapshot => {
      const store = snapshot.val();
      console.log('STORE, ', store);
      this.setState({ store })
    })*/

    console.log('constructor invoked');
    this.addNotification = this.addNotification.bind(this);
    this.postSavedItem = this.postSavedItem.bind(this);
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
  
  document.getElementById('wallMenuStarButton').onmouseenter = function(e) {
      console.log('SAVE ITEM, add setTimeout with 300ms delay to render card.')
      this.addNotification();
    }.bind(this);
  /* ISSUE: it may take up to a second to take the screenshot back here from background.js, so if it's taken 
  while the page is loading is an issue, can be solved adding a spinner icon */
  /*  setTimeout(function(){
    this.addNotification();
  }.bind(this), 1500);*/

    /* ALGORITHM to get text&css -- FETCH HTML NODE ON CLICK */
    $(window).click(function(e) {
      var x = e.clientX, y = e.clientY,
      elementMouseIsOver = document.elementFromPoint(x, y);
    /* get computed CSS (stored by Chrome in CSSrules and rules) */
    var computedCSS = window.getComputedStyle(elementMouseIsOver);
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


  /* NOT IN USE, previous approach -  not being called/used now */
 _addNotification(event) {
    event.preventDefault();
    this.refs.notificationSystem.addNotification({
      message: 'Notification message',
      level: 'success'
    });
  }

postSavedItem(item){
  console.log('postSavedItem(), item: ', item);

    let query = {
      // end: { $gt: new Date().valueOf() }, // UNCOMMENT if you want to visualize future events ONLY
      $limit: 10,
      //$sort: { start: -1 }
    };
  console.log('calling fetch');
  console.log(`${herokuAppAPI}?${JSON.stringify(query)}`);
  fetch(`${herokuAppAPI}?${JSON.stringify(query)}`, {
  method: 'get'
  }).then(response => response.json())
    .then(function(data) {
    console.log('new fetch get call, DATA: ', data);
    
    }).catch(function(err) {
      console.log('new fetch get call, err: ', err);
    });

    //console.log('JSON.stringify(item): ', JSON.stringify(item));


    fetch(`${herokuAppAPI}`, {
      //Headers: 'Content-Type: multipart/form-data',
      headers: {'Content-Type': 'application/json'},
      method: 'post',
      //body: JSON.stringify(item),
      body: JSON.stringify(item)
      }).then(function(response) {
      console.log('new fetch post call, response: ', response);
      }).catch(function(err) {
        console.log('new fetch post call, err: ', err);
      });

  /*$.ajax({
    url: 'https://libry-backend.herokuapp.com/api/Articles',
    type: 'POST',
    data: item,   
    success: function(result, status){
      console.log('NO JSON, only item: result, status: ', result, status);
    }
  })

  $.ajax({
    url: 'https://libry-backend.herokuapp.com/api/Articles',
    type: 'POST',
    data: JSON.stringify(item),   
    success: function(result, status){
      console.log('JSON.stringify(item): result, status: ', result, status);
    }
  })*/



  /*  fetch(`${herokuAppAPI}`, {
      method: 'POST',
      body: JSON.stringify(item)
    })
  .then(response => response.json())
 
  .then(data => {
    console.log('response: data: ', data)
 })
  .catch(err => {
    console.log('ERR', err);
    this.setState({ errorMsg: err.reason })
  })
  .done();*/

}


/* TAKE SCREENSHOT and RENDER CARD ANIMATION */
addNotification(notification) {

    // check if page has been saved already;
    var pageTitle = document.getElementsByTagName("title")[0].innerHTML;
    if ( pageTitle === this.state.savedItemTitle ){ 
      console.log('ADD HERE tooltip to display message -> Page has been saved already!')
      // toggle 'page saved already' animation here.
      return false; 
    }


    /* 1. take the screenshot in backround files */
    chrome.runtime.sendMessage({msg: "capture"}, function(response) {
          var screenshot = response.imgSrc;
          this.setState({ screenshot });
    }.bind(this))
    /* 2. FETCH DATA from page and render the card on top of a notification view in top right corner*/
  setTimeout(function(){ 
    var title = document.getElementsByTagName("title")[0].innerHTML; // fetch title
    var description = $('meta[name="description"]').attr('content'); // and description
    if (!description){ description = 'No description available' };

    var twitterDescription;
    var twitterDescriptionName = $('meta[name="twitter:description"]').attr('content');
    var twitterDescriptionProperty = $('meta[property="twitter:description"]').attr('content');
    if(twitterDescriptionName){
    twitterDescription = twitterDescriptionName;
  }
      else {
        if (twitterDescriptionProperty){
      twitterDescription = twitterDescriptionProperty;
    } else { twitterDescription = 'set page url here' }
    };

    // fetch thumbnail
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    console.log(new Date().toLocaleTimeString() + 'link.href', link.href);
    if (!link.href){

      console.log('NO link thumbnail, add go to alternative thumbnail here, like colored box')
    }

    var libryObject = {
      title: title,
      description: description,
      link: link,
      thumbnail: link.href,
      screenshot: this.state.screenshot,
      twitterDescription: twitterDescription
    }

      //screenshot: this.state.screenshot,
      //thumbnail: link.href,
    var libryObjectWithoutLink = {
      title: title,
      description: description,
      twitterDescription: twitterDescription
    }

    var simpleObject = {
      title: 'will it work with one string field only?',
      link: 'I am a link'
    }


    this.setState({ title: title });

    // push data to firebase
    //this.addDataToFirebase(libryObject);

        /* 3. RENDER notification with screenshot, description, title, favicon thumbnail */
      this.notifications.addNotification({
            /* the original notification 'view' is still here, 
            does not get displayed because the style is commented out */
            // title={title}
            level: 'info',
            children: (
            <div style={{ zIndex: 2147483647,
                          position: 'relative'}}>
             <CardAntd 
               bodyStyle={{ padding: 0 }}
               title={
                <div className='head-title-container'>
                  <div className='head-title-thumbnail-container'>
                    <img src={link.href} width={30}/>
                  </div>
                  <div className='head-title-inner-title'>
                    {title}
                  </div>
                </div>
              }
               style={{ height: 320, width: 280 }}
               >
               {/*<div className='card-screenshot-container'>*/}
                  <img src={this.state.screenshot} width="100%" />
                  {/*<p className='cardDescriptionStyle'>{description}</p>*/}
                <div className='card-body-descriptions'>
                  <div>{description}</div>
                  <div>{twitterDescription}</div>
                </div>
                {/*</div>*/}
                </CardAntd>
              </div>
            )
           })

          this.postSavedItem(libryObject);

     }.bind(this), 300)
  } 

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
