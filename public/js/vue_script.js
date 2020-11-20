//var brg1 = new BurgerInfo('Favorit','Kajsas Favorit', 'Äpple och Ost','https://www.oliviascuisine.com/wp-content/uploads/2016/09/apple-bacon-brie-burger.jpg', true, true)
//var brg2 = new BurgerInfo('Favorit','Kajsas Favorit', 'Äpple och Ost','https://www.oliviascuisine.com/wp-content/uploads/2016/09/apple-bacon-brie-burger.jpg', false, true)
//var brg3 = new BurgerInfo('Billiga','Kajsas Billiga', 'Köttfärsås och Salsa','https://www.oliviascuisine.com/wp-content/uploads/2020/04/homemade-sloppy-joes-recipe-683x1024.jpg',false, false)
//var brg4 = new BurgerInfo('Texmex','Kajsas Texmex', 'Kött och Chips','https://inquiringchef.com/wp-content/uploads/2019/08/Tex-Mex-Burgers-with-Guacamole_1-500x375.jpg', false, false)
//var brg5 = new BurgerInfo('Äckliga','Kajsas Äckliga', 'Kött och Cheddar','https://c.cdn-expressen.se/images/ce/64/ce64a5eb75e14b4f961a169db782a6a4/16x9/450.jpg', false, false)
//var burgers = [brg1, brg2, brg3, brg4, brg5]

'use strict';
var socket = io();

var vm = new Vue({
    el: '#allt',

    data: {
      burgers: burgers,
      mapPin: {
        details: {
          x: 0,
          y: 0
        }
      },

    },

    methods: {
      addOrder: function(event) {
        socket.emit("addOrder", {
          orderId: Math.floor(Math.random()*(100-1+1)+1),
          details: this.mapPin.details,
          personalInfo: "Contact Info: " + getContactInfo() ,
          orderItems: "Orded Burger: " + getBurgerArray()
        });
        confirmationText.textContent = "Din orderinformation: " + getContactInfo();
        confirmationTextBurger.textContent = "Vald(a) burgare: " + getBurgerArray();
      },

      displayOrder: function(event) {
        var offset = {
          x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top
        };
        this.mapPin = {
          details: {
            x: event.clientX - 10 - offset.x,
            y: event.clientY - 10 - offset.y
          },
        };
      }


    }
  }


)



var vm = new Vue()
