// for zoom in button
function zoomin()
{
    var GFG = document.getElementById("imgClickAndChange");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth*1.1) + "px";

}

// for zoom out button
function zoomout()
{
    var GFG = document.getElementById("imgClickAndChange");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth/1.1) + "px";

}


// for ajax to fetch unit data in modal
function ajax_modal(id)
{
    // modal ra call kon
    $("#modalCart").modal()

    // ajax kon bara data modal
    if (window.XMLHttpRequest) {
        // script for browser version above IE 7 and the other popular browsers (newer browsers)
        xmlhttp = new XMLHttpRequest();
    } else {
        // script for the IE 5 and 6 browsers (older versions)
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // get the element in which we will use as a placeholder and space for table
            document.getElementById("modal_data_id").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "handle_ajax_modal.php?q="+id, true);
    xmlhttp.send();
}



// for click on map image
$('.clickable').bind('click', function (ev)
{

    // get image width in different screen size and zooms and adjust it
    // 880 means in programmer screen all of numbers get standarded
    var GFG = document.getElementById("imgClickAndChange");
    var currWidth = GFG.clientWidth;
    var screenmodify = 880/currWidth;

    // get click offset for click position
    // and fix numbers for different scrolls because it is for image not window
    var $div = $(ev.target);
    var offset = $div.offset();

    var x = ev.clientX - offset.left + window.scrollX;
    var y = ev.clientY - offset.top + window.scrollY;


    // adjust and modify for different screens and zooms
    x = x * screenmodify;
    y = y * screenmodify;




    // condition in image for click units

    var image_src = document.getElementById('imgClickAndChange').src;


    // floor 0
    if (image_src === "http://localhost:63342/alvandcomplex/img/map_images/0.svg")
    {
        // radif 1
        if (y<60 && y>10)
        {
            // unit 5
            if (x<212 && x>189 && y>12 && y<57)
            {
                ajax_modal(1);
            }

            // unit 7
            if (x<277 && x>244 && y>12 && y<57)
            {
                ajax_modal(2);
            }

            // unit 9
            if (x<342 && x>312 && y>12 && y<57)
            {
                ajax_modal(3);
            }

            // unit 10
            if (x<375 && x>343 && y>12 && y<57)
            {
                ajax_modal(4);
            }

            // unit 11
            if (x<417 && x>376 && y>12 && y<57)
            {
                ajax_modal(5);
            }

            // unit 12
            if (x<448 && x>418 && y>12 && y<57)
            {
                ajax_modal(6);
            }

            // unit 14
            if (x<511 && x>482 && y>12 && y<57)
            {
                ajax_modal(7);
            }

            // unit 16
            if (x<573 && x>539 && y>12 && y<57)
            {
                ajax_modal(8);
            }

            // unit 18
            if (x<640 && x>608 && y>12 && y<57)
            {
                ajax_modal(9);
            }

            // unit 20
            if (x<702 && x>667 && y>12 && y<57)
            {
                ajax_modal(10);
            }

            // unit 22
            if (x<765 && x>734 && y>12 && y<57)
            {
                ajax_modal(11);
            }

            // unit 24
            if (x<834 && x>799 && y>12 && y<57)
            {
                ajax_modal(12);
            }

        }

        // radif 2
        if (y>120 && y<170)
        {
            // unit 48
            if (x<78 && x>50 && y>124 && y<167)
            {
                ajax_modal(13);
            }

            // unit 49
            if (x<101 && x>80 && y>124 && y<167)
            {
                ajax_modal(14);
            }

            // unit 50
            if (x<131 && x>102 && y>124 && y<167)
            {
                ajax_modal(15);
            }

            // unit 51
            if (x<186 && x>162 && y>124 && y<167)
            {
                ajax_modal(16);
            }

            // unit 52
            if (x<211 && x>189 && y>124 && y<167)
            {
                ajax_modal(17);
            }

            // unit 53
            if (x<243 && x>214 && y>124 && y<167)
            {
                ajax_modal(18);
            }

            // unit 54
            if (x<277 && x>244 && y>124 && y<167)
            {
                ajax_modal(19);
            }

            // unit 55
            if (x<311 && x>278 && y>124 && y<167)
            {
                ajax_modal(20);
            }

            // unit 56
            if (x<375 && x>312 && y>124 && y<167)
            {
                ajax_modal(21);
            }

            // unit 57
            if (x<481 && x>417 && y>124 && y<167)
            {
                ajax_modal(22);
            }

            // unit 58
            if (x<512 && x>482 && y>124 && y<167)
            {
                ajax_modal(23);
            }

            // unit 59
            if (x<542 && x>513 && y>124 && y<167)
            {
                ajax_modal(24);
            }

            // unit 60
            if (x<573 && x>543 && y>124 && y<167)
            {
                ajax_modal(25);
            }

            // unit 61
            if (x<607 && x>575 && y>124 && y<167)
            {
                ajax_modal(26);
            }

            // unit 62
            if (x<640 && x>608 && y>124 && y<167)
            {
                ajax_modal(27);
            }

            // unit 63
            if (x<701 && x>667 && y>124 && y<167)
            {
                ajax_modal(28);
            }

            // unit 64
            if (x<733 && x>703 && y>124 && y<167)
            {
                ajax_modal(29);
            }

            // unit 65
            if (x<765 && x>734 && y>124 && y<167)
            {
                ajax_modal(30);
            }

            // unit 66
            if (x<797 && x>766 && y>124 && y<167)
            {
                ajax_modal(31);
            }

            // unit 67
            if (x<834 && x>799 && y>124 && y<167)
            {
                ajax_modal(32);
            }
        }

        // radif 3
        if (y>227 && y<268)
        {
            // unit 90
            if (x<77 && x>49 && y>230 && y<265)
            {
                ajax_modal(33);
            }

            // unit 91
            if (x<105 && x>79 && y>230 && y<265)
            {
                ajax_modal(34);
            }

            // unit 92
            if (x<131 && x>107 && y>230 && y<265)
            {
                ajax_modal(35);
            }

            // unit 93
            if (x<185 && x>162 && y>230 && y<265)
            {
                ajax_modal(36);
            }

            // unit 94
            if (x<212 && x>187 && y>230 && y<265)
            {
                ajax_modal(37);
            }

            // unit 95
            if (x<243 && x>213 && y>230 && y<265)
            {
                ajax_modal(38);
            }

            // unit 96
            if (x<277 && x>251 && y>230 && y<265)
            {
                ajax_modal(39);
            }

            // unit 97
            if (x<310 && x>179 && y>230 && y<265)
            {
                ajax_modal(40);
            }

            // unit 98
            if (x<342 && x>312 && y>230 && y<265)
            {
                ajax_modal(41);
            }

            // unit 99
            if (x<373 && x>344 && y>230 && y<265)
            {
                ajax_modal(42);
            }

            // unit 100
            if (x<448 && x>417 && y>230 && y<265)
            {
                ajax_modal(43);
            }

            // unit 101
            if (x<481 && x>450 && y>230 && y<265)
            {
                ajax_modal(44);
            }

            // unit 102
            if (x<511 && x>483 && y>230 && y<265)
            {
                ajax_modal(45);
            }

            // unit 103
            if (x<538 && x>513 && y>230 && y<265)
            {
                ajax_modal(46);
            }

            // unit 104
            if (x<573 && x>544 && y>230 && y<265)
            {
                ajax_modal(47);
            }

            // unit 105
            if (x<605 && x>575 && y>230 && y<265)
            {
                ajax_modal(48);
            }

            // unit 106
            if (x<641 && x>608 && y>230 && y<265)
            {
                ajax_modal(49);
            }

            // unit 107
            if (x<701 && x>669 && y>230 && y<265)
            {
                ajax_modal(50);
            }

            // unit 108
            if (x<732 && x>702 && y>230 && y<265)
            {
                ajax_modal(51);
            }

            // unit 109
            if (x<765 && x>735 && y>230 && y<265)
            {
                ajax_modal(52);
            }

            // unit 110
            if (x<797 && x>766 && y>230 && y<265)
            {
                ajax_modal(53);
            }

            // unit 111
            if (x<833 && x>799 && y>230 && y<265)
            {
                ajax_modal(54);
            }
        }

        // radif 4
        if (y>328 && y<378)
        {
            // unit 134
            if (x<105 && x>49 && y>331 && y<374)
            {
                ajax_modal(55);
            }

            // unit 135
            if (x<131 && x>107 && y>331 && y<374)
            {
                ajax_modal(56);
            }

            // unit 136
            if (x<185 && x>163 && y>331 && y<374)
            {
                ajax_modal(57);
            }

            // unit 137
            if (x<213 && x>187 && y>331 && y<374)
            {
                ajax_modal(58);
            }

            // unit 138
            if (x<243 && x>214 && y>331 && y<374)
            {
                ajax_modal(59);
            }

            // unit 139
            if (x<277 && x>250 && y>331 && y<374)
            {
                ajax_modal(60);
            }

            // unit 140
            if (x<311 && x>279 && y>331 && y<374)
            {
                ajax_modal(61);
            }

            // unit 141
            if (x<341 && x>313 && y>331 && y<374)
            {
                ajax_modal(62);
            }

            // unit 142
            if (x<373 && x>344 && y>331 && y<374)
            {
                ajax_modal(63);
            }

            // unit 143
            if (x<447 && x>417 && y>331 && y<374)
            {
                ajax_modal(64);
            }

            // unit 144
            if (x<481 && x>449 && y>331 && y<374)
            {
                ajax_modal(65);
            }

            // unit 145
            if (x<511 && x>483 && y>331 && y<374)
            {
                ajax_modal(66);
            }

            // unit 146
            if (x<538 && x>513 && y>331 && y<374)
            {
                ajax_modal(67);
            }

            // unit 147
            if (x<573 && x>544 && y>331 && y<374)
            {
                ajax_modal(68);
            }

            // unit 148
            if (x<605 && x>575 && y>331 && y<374)
            {
                ajax_modal(69);
            }

            // unit 149
            if (x<640 && x>607 && y>331 && y<374)
            {
                ajax_modal(70);
            }

            // unit 150
            if (x<701 && x>669 && y>331 && y<374)
            {
                ajax_modal(71);
            }

            // unit 151
            if (x<733 && x>703 && y>331 && y<374)
            {
                ajax_modal(72);
            }

            // unit 152
            if (x<764 && x>735 && y>331 && y<374)
            {
                ajax_modal(73);
            }

            // unit 153
            if (x<797 && x>766 && y>331 && y<374)
            {
                ajax_modal(74);
            }

            // unit 154
            if (x<834 && x>799 && y>331 && y<374)
            {
                ajax_modal(75);
            }
        }

        // radif 5
        if (y>399 && y<436)
        {
            // unit 155
            if (x<833 && x>799 && y>401 && y<433)
            {
                ajax_modal(76);
            }

            // unit 156
            if (x<796 && x>766 && y>401 && y<433)
            {
                ajax_modal(77);
            }

            // unit 157
            if (x<764 && x>735 && y>401 && y<433)
            {
                ajax_modal(78);
            }

            // unit 159
            if (x<729 && x>703 && y>401 && y<433)
            {
                ajax_modal(80);
            }

            // unit 160
            if (x<701 && x>669 && y>401 && y<433)
            {
                ajax_modal(81);
            }

            // unit 162
            if (x<605 && x>575 && y>401 && y<433)
            {
                ajax_modal(82);
            }

            // unit 164
            if (x<538 && x>513 && y>401 && y<433)
            {
                ajax_modal(83);
            }

            // unit 166
            if (x<481 && x>449 && y>401 && y<433)
            {
                ajax_modal(84);
            }

            // unit 168
            if (x<373 && x>343 && y>401 && y<433)
            {
                ajax_modal(85);
            }

            // unit 170
            if (x<311 && x>278 && y>401 && y<433)
            {
                ajax_modal(86);
            }

            // unit 172
            if (x<243 && x>214 && y>401 && y<433)
            {
                ajax_modal(87);
            }

            // unit 174
            if (x<186 && x>162 && y>401 && y<433)
            {
                ajax_modal(88);
            }

            // unit 176
            if (x<132 && x>106 && y>401 && y<433)
            {
                ajax_modal(89);
            }
        }
    }
    // floor 1
    else
    {
        // radif 1
        if (y>11 && y<57)
        {
            // unit 2
            if (x<100 && x>80 && y>11 && y<57)
            {
                ajax_modal(90);
            }

            // unit 5
            if (x<211 && x>187 && y>11 && y<57)
            {
                ajax_modal(91);
            }

            // unit 7
            if (x<277 && x>250 && y>11 && y<57)
            {
                ajax_modal(92);
            }

            // unit 9
            if (x<341 && x>313 && y>11 && y<57)
            {
                ajax_modal(93);
            }

            // unit 10
            if (x<375 && x>343 && y>11 && y<57)
            {
                ajax_modal(94);
            }

            // unit 11
            if (x<447 && x>418 && y>11 && y<57)
            {
                ajax_modal(95);
            }

            // unit 13
            if (x<511 && x>481 && y>11 && y<57)
            {
                ajax_modal(96);
            }

            // unit 15
            if (x<573 && x>544 && y>11 && y<57)
            {
                ajax_modal(97);
            }

            // unit 17
            if (x<637 && x>607 && y>11 && y<57)
            {
                ajax_modal(98);
            }

            // unit 19
            if (x<701 && x>668 && y>11 && y<57)
            {
                ajax_modal(99);
            }

            // unit 21
            if (x<765 && x>735 && y>11 && y<57)
            {
                ajax_modal(100);
            }

            // unit 23
            if (x<833 && x>799 && y>11 && y<57)
            {
                ajax_modal(101);
            }
        }

        // radif 2
        if (y>83 && y<170)
        {
            // unit 35
            if (x<447 && x>417 && y>86 && y<122)
            {
                ajax_modal(102);
            }

            // unit 41
            if (x<212 && x>187 && y>86 && y<122)
            {
                ajax_modal(103);
            }

            // unit 42
            if (x<185 && x>162 && y>86 && y<122)
            {
                ajax_modal(104);
            }

            // unit 46
            if (x<77 && x>49 && y>126 && y<165)
            {
                ajax_modal(105);
            }

            // unit 47
            if (x<100 && x>79 && y>126 && y<165)
            {
                ajax_modal(106);
            }

            // unit 48
            if (x<129 && x>101 && y>126 && y<165)
            {
                ajax_modal(107);
            }

            // unit 49
            if (x<185 && x>162 && y>126 && y<165)
            {
                ajax_modal(108);
            }

            // unit 50
            if (x<211 && x>187 && y>126 && y<165)
            {
                ajax_modal(109);
            }

            // unit 51
            if (x<242 && x>213 && y>126 && y<165)
            {
                ajax_modal(110);
            }

            // unit 52
            if (x<277 && x>250 && y>126 && y<165)
            {
                ajax_modal(111);
            }

            // unit 53
            if (x<310 && x>278 && y>126 && y<165)
            {
                ajax_modal(112);
            }

            // unit 54
            if (x<342 && x>313 && y>126 && y<165)
            {
                ajax_modal(113);
            }

            // unit 55
            if (x<480 && x>449 && y>126 && y<165)
            {
                ajax_modal(114);
            }

            // unit 56
            if (x<511 && x>482 && y>126 && y<165)
            {
                ajax_modal(115);
            }

            // unit 57
            if (x<543 && x>513 && y>126 && y<165)
            {
                ajax_modal(116);
            }

            // unit 58
            if (x<573 && x>544 && y>126 && y<165)
            {
                ajax_modal(117);
            }

            // unit 59
            if (x<605 && x>575 && y>126 && y<165)
            {
                ajax_modal(118);
            }

            // unit 60
            if (x<637 && x>608 && y>126 && y<165)
            {
                ajax_modal(119);
            }

            // unit 62
            if (x<733 && x>703 && y>126 && y<165)
            {
                ajax_modal(120);
            }

            // unit 63
            if (x<764 && x>735 && y>126 && y<165)
            {
                ajax_modal(121);
            }

            // unit 64
            if (x<797 && x>765 && y>126 && y<165)
            {
                ajax_modal(122);
            }

            // unit 65
            if (x<833 && x>799 && y>126 && y<165)
            {
                ajax_modal(123);
            }
        }

        // radif 3
        if (y>228 && y<270)
        {
            // unit 85
            if (x<77 && x>49 && y>231 && y<265)
            {
                ajax_modal(124);
            }

            // unit 86
            if (x<99 && x>79 && y>231 && y<265)
            {
                ajax_modal(125);
            }

            // unit 87
            if (x<131 && x>101 && y>231 && y<265)
            {
                ajax_modal(126);
            }

            // unit 88
            if (x<185 && x>161 && y>231 && y<265)
            {
                ajax_modal(127);
            }

            // unit 89
            if (x<212 && x>187 && y>231 && y<265)
            {
                ajax_modal(128);
            }

            // unit 90
            if (x<248 && x>214 && y>231 && y<265)
            {
                ajax_modal(129);
            }

            // unit 91
            if (x<276 && x>250 && y>231 && y<265)
            {
                ajax_modal(130);
            }

            // unit 92
            if (x<310 && x>278 && y>231 && y<265)
            {
                ajax_modal(131);
            }

            // unit 93
            if (x<341 && x>313 && y>231 && y<265)
            {
                ajax_modal(132);
            }

            // unit 94
            if (x<373 && x>344 && y>231 && y<265)
            {
                ajax_modal(133);
            }

            // unit 95
            if (x<447 && x>417 && y>231 && y<265)
            {
                ajax_modal(134);
            }

            // unit 96
            if (x<481 && x>450 && y>231 && y<265)
            {
                ajax_modal(135);
            }

            // unit 97
            if (x<511 && x>483 && y>231 && y<265)
            {
                ajax_modal(136);
            }

            // unit 98
            if (x<538 && x>513 && y>231 && y<265)
            {
                ajax_modal(137);
            }

            // unit 99
            if (x<573 && x>544 && y>231 && y<265)
            {
                ajax_modal(138);
            }

            // unit 100
            if (x<605 && x>575 && y>231 && y<265)
            {
                ajax_modal(139);
            }

            // unit 101
            if (x<637 && x>608 && y>231 && y<265)
            {
                ajax_modal(140);
            }

            // unit 102
            if (x<701 && x>669 && y>231 && y<265)
            {
                ajax_modal(141);
            }

            // unit 103
            if (x<733 && x>703 && y>231 && y<265)
            {
                ajax_modal(142);
            }

            // unit 104
            if (x<764 && x>735 && y>231 && y<265)
            {
                ajax_modal(143);
            }

            // unit 105
            if (x<797 && x>767 && y>231 && y<265)
            {
                ajax_modal(144);
            }

            // unit 106
            if (x<834 && x>799 && y>231 && y<265)
            {
                ajax_modal(145);
            }
        }

        // radif 4
        if (y>285 && y<375)
        {
            // unit 168
            if (x<833 && x>735 && y>289 && y<373)
            {
                ajax_modal(180);
            }

            // unit 107
            if (x<733 && x>703 && y>289 && y<329)
            {
                ajax_modal(146);
            }

            // unit 108
            if (x<701 && x>669 && y>289 && y<329)
            {
                ajax_modal(147);
            }

            // unit 126
            if (x<77 && x>49 && y>331 && y<373)
            {
                ajax_modal(148);
            }

            // unit 127
            if (x<99 && x>79 && y>331 && y<373)
            {
                ajax_modal(149);
            }

            // unit 128
            if (x<131 && x>102 && y>331 && y<373)
            {
                ajax_modal(150);
            }

            // unit 129
            if (x<185 && x>133 && y>331 && y<373)
            {
                ajax_modal(151);
            }

            // unit 130
            if (x<212 && x>187 && y>331 && y<373)
            {
                ajax_modal(152);
            }

            // unit 131
            if (x<241 && x>215 && y>331 && y<373)
            {
                ajax_modal(153);
            }

            // unit 132
            if (x<276 && x>251 && y>331 && y<373)
            {
                ajax_modal(154);
            }

            // unit 133
            if (x<310 && x>278 && y>331 && y<373)
            {
                ajax_modal(155);
            }

            // unit 134
            if (x<341 && x>313 && y>331 && y<373)
            {
                ajax_modal(156);
            }

            // unit 135
            if (x<373 && x>343 && y>331 && y<373)
            {
                ajax_modal(157);
            }

            // unit 136
            if (x<447 && x>417 && y>331 && y<373)
            {
                ajax_modal(158);
            }

            // unit 137
            if (x<481 && x>449 && y>331 && y<373)
            {
                ajax_modal(159);
            }

            // unit 138
            if (x<511 && x>483 && y>331 && y<373)
            {
                ajax_modal(160);
            }

            // unit 139
            if (x<538 && x>513 && y>331 && y<373)
            {
                ajax_modal(161);
            }

            // unit 140
            if (x<573 && x>544 && y>331 && y<373)
            {
                ajax_modal(162);
            }

            // unit 141
            if (x<605 && x>575 && y>331 && y<373)
            {
                ajax_modal(163);
            }

            // unit 142
            if (x<640 && x>607 && y>331 && y<373)
            {
                ajax_modal(164);
            }

            // unit 143
            if (x<701 && x>669 && y>331 && y<373)
            {
                ajax_modal(165);
            }

            // unit 144
            if (x<733 && x>703 && y>331 && y<373)
            {
                ajax_modal(166);
            }

        }

        // radif 5
        if (y>395 && y<440)
        {
            // unit 145
            if (x<863 && x>799 && y>400 && y<434)
            {
                ajax_modal(167);
            }

            // unit 147
            if (x<765 && x>735 && y>400 && y<434)
            {
                ajax_modal(168);
            }

            // unit 149
            if (x<701 && x>668 && y>400 && y<434)
            {
                ajax_modal(169);
            }

            // unit 150
            if (x<637 && x>608 && y>400 && y<434)
            {
                ajax_modal(170);
            }

            // unit 152
            if (x<573 && x>545 && y>400 && y<434)
            {
                ajax_modal(171);
            }

            // unit 154
            if (x<511 && x>482 && y>400 && y<434)
            {
                ajax_modal(172);
            }

            // unit 156
            if (x<447 && x>418 && y>400 && y<434)
            {
                ajax_modal(173);
            }

            // unit 157
            if (x<416 && x>376 && y>400 && y<434)
            {
                ajax_modal(174);
            }

            // unit 158
            if (x<374 && x>344 && y>400 && y<434)
            {
                ajax_modal(175);
            }

            // unit 160
            if (x<311 && x>278 && y>400 && y<434)
            {
                ajax_modal(176);
            }

            // unit 162
            if (x<243 && x>214 && y>400 && y<434)
            {
                ajax_modal(177);
            }

            // unit 164
            if (x<185 && x>163 && y>400 && y<434)
            {
                ajax_modal(178);
            }

            // unit 166
            if (x<130 && x>101 && y>400 && y<434)
            {
                ajax_modal(179);
            }
        }
    }

});


// for scrolling with drag
const slider = document.querySelector('.dragandscroll');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});



