/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'gouldwallet\'">' + entity + '</span>' + html;
	}
	var icons = {
		'gould-gouldWallet': '&#xe900;',
		'gould-home': '&#xe901;',
		'gould-home2': '&#xe902;',
		'gould-home3': '&#xe903;',
		'gould-office': '&#xe904;',
		'gould-newspaper': '&#xe905;',
		'gould-pencil': '&#xe906;',
		'gould-pencil2': '&#xe907;',
		'gould-quill': '&#xe908;',
		'gould-pen': '&#xe909;',
		'gould-blog': '&#xe90a;',
		'gould-eyedropper': '&#xe90b;',
		'gould-droplet': '&#xe90c;',
		'gould-paint-format': '&#xe90d;',
		'gould-image': '&#xe90e;',
		'gould-images': '&#xe90f;',
		'gould-camera': '&#xe910;',
		'gould-headphones': '&#xe911;',
		'gould-music': '&#xe912;',
		'gould-play': '&#xe913;',
		'gould-film': '&#xe914;',
		'gould-video-camera': '&#xe915;',
		'gould-dice': '&#xe916;',
		'gould-pacman': '&#xe917;',
		'gould-spades': '&#xe918;',
		'gould-clubs': '&#xe919;',
		'gould-diamonds': '&#xe91a;',
		'gould-bullhorn': '&#xe91b;',
		'gould-connection': '&#xe91c;',
		'gould-podcast': '&#xe91d;',
		'gould-feed': '&#xe91e;',
		'gould-mic': '&#xe91f;',
		'gould-book': '&#xe920;',
		'gould-books': '&#xe921;',
		'gould-library': '&#xe922;',
		'gould-file-text': '&#xe923;',
		'gould-profile': '&#xe924;',
		'gould-file-empty': '&#xe925;',
		'gould-files-empty': '&#xe926;',
		'gould-file-text2': '&#xe927;',
		'gould-file-picture': '&#xe928;',
		'gould-file-music': '&#xe929;',
		'gould-file-play': '&#xe92a;',
		'gould-file-video': '&#xe92b;',
		'gould-file-zip': '&#xe92c;',
		'gould-copy': '&#xe92d;',
		'gould-paste': '&#xe92e;',
		'gould-stack': '&#xe92f;',
		'gould-folder': '&#xe930;',
		'gould-folder-open': '&#xe931;',
		'gould-folder-plus': '&#xe932;',
		'gould-folder-minus': '&#xe933;',
		'gould-folder-download': '&#xe934;',
		'gould-folder-upload': '&#xe935;',
		'gould-price-tag': '&#xe936;',
		'gould-price-tags': '&#xe937;',
		'gould-barcode': '&#xe938;',
		'gould-qrcode': '&#xe939;',
		'gould-ticket': '&#xe93a;',
		'gould-cart': '&#xe93b;',
		'gould-coin-dollar': '&#xe93c;',
		'gould-coin-euro': '&#xe93d;',
		'gould-coin-pound': '&#xe93e;',
		'gould-coin-yen': '&#xe93f;',
		'gould-credit-card': '&#xe940;',
		'gould-calculator': '&#xe941;',
		'gould-lifebuoy': '&#xe942;',
		'gould-phone': '&#xe943;',
		'gould-phone-hang-up': '&#xe944;',
		'gould-address-book': '&#xe945;',
		'gould-envelop': '&#xe946;',
		'gould-pushpin': '&#xe947;',
		'gould-location': '&#xe948;',
		'gould-location2': '&#xe949;',
		'gould-compass': '&#xe94a;',
		'gould-compass2': '&#xe94b;',
		'gould-map': '&#xe94c;',
		'gould-map2': '&#xe94d;',
		'gould-history': '&#xe94e;',
		'gould-clock': '&#xe94f;',
		'gould-clock2': '&#xe950;',
		'gould-alarm': '&#xe951;',
		'gould-bell': '&#xe952;',
		'gould-stopwatch': '&#xe953;',
		'gould-calendar': '&#xe954;',
		'gould-printer': '&#xe955;',
		'gould-keyboard': '&#xe956;',
		'gould-display': '&#xe957;',
		'gould-laptop': '&#xe958;',
		'gould-mobile': '&#xe959;',
		'gould-mobile2': '&#xe95a;',
		'gould-tablet': '&#xe95b;',
		'gould-tv': '&#xe95c;',
		'gould-drawer': '&#xe95d;',
		'gould-drawer2': '&#xe95e;',
		'gould-box-add': '&#xe95f;',
		'gould-box-remove': '&#xe960;',
		'gould-download': '&#xe961;',
		'gould-upload': '&#xe962;',
		'gould-floppy-disk': '&#xe963;',
		'gould-drive': '&#xe964;',
		'gould-database': '&#xe965;',
		'gould-undo': '&#xe966;',
		'gould-redo': '&#xe967;',
		'gould-undo2': '&#xe968;',
		'gould-redo2': '&#xe969;',
		'gould-forward': '&#xe96a;',
		'gould-reply': '&#xe96b;',
		'gould-bubble': '&#xe96c;',
		'gould-bubbles': '&#xe96d;',
		'gould-bubbles2': '&#xe96e;',
		'gould-bubble2': '&#xe96f;',
		'gould-bubbles3': '&#xe970;',
		'gould-bubbles4': '&#xe971;',
		'gould-user': '&#xe972;',
		'gould-users': '&#xe973;',
		'gould-user-plus': '&#xe974;',
		'gould-user-minus': '&#xe975;',
		'gould-user-check': '&#xe976;',
		'gould-user-tie': '&#xe977;',
		'gould-quotes-left': '&#xe978;',
		'gould-quotes-right': '&#xe979;',
		'gould-hour-glass': '&#xe97a;',
		'gould-spinner': '&#xe97b;',
		'gould-spinner2': '&#xe97c;',
		'gould-spinner3': '&#xe97d;',
		'gould-spinner4': '&#xe97e;',
		'gould-spinner5': '&#xe97f;',
		'gould-spinner6': '&#xe980;',
		'gould-spinner7': '&#xe981;',
		'gould-spinner8': '&#xe982;',
		'gould-spinner9': '&#xe983;',
		'gould-spinner10': '&#xe984;',
		'gould-spinner11': '&#xe985;',
		'gould-binoculars': '&#xe986;',
		'gould-search': '&#xe987;',
		'gould-zoom-in': '&#xe988;',
		'gould-zoom-out': '&#xe989;',
		'gould-enlarge': '&#xe98a;',
		'gould-shrink': '&#xe98b;',
		'gould-enlarge2': '&#xe98c;',
		'gould-shrink2': '&#xe98d;',
		'gould-key': '&#xe98e;',
		'gould-key2': '&#xe98f;',
		'gould-lock': '&#xe990;',
		'gould-unlocked': '&#xe991;',
		'gould-wrench': '&#xe992;',
		'gould-equalizer': '&#xe993;',
		'gould-equalizer2': '&#xe994;',
		'gould-cog': '&#xe995;',
		'gould-cogs': '&#xe996;',
		'gould-hammer': '&#xe997;',
		'gould-magic-wand': '&#xe998;',
		'gould-aid-kit': '&#xe999;',
		'gould-bug': '&#xe99a;',
		'gould-pie-chart': '&#xe99b;',
		'gould-stats-dots': '&#xe99c;',
		'gould-stats-bars': '&#xe99d;',
		'gould-stats-bars2': '&#xe99e;',
		'gould-trophy': '&#xe99f;',
		'gould-gift': '&#xe9a0;',
		'gould-glass': '&#xe9a1;',
		'gould-glass2': '&#xe9a2;',
		'gould-mug': '&#xe9a3;',
		'gould-spoon-knife': '&#xe9a4;',
		'gould-leaf': '&#xe9a5;',
		'gould-rocket': '&#xe9a6;',
		'gould-meter': '&#xe9a7;',
		'gould-meter2': '&#xe9a8;',
		'gould-hammer2': '&#xe9a9;',
		'gould-fire': '&#xe9aa;',
		'gould-lab': '&#xe9ab;',
		'gould-magnet': '&#xe9ac;',
		'gould-bin': '&#xe9ad;',
		'gould-bin2': '&#xe9ae;',
		'gould-briefcase': '&#xe9af;',
		'gould-airplane': '&#xe9b0;',
		'gould-truck': '&#xe9b1;',
		'gould-road': '&#xe9b2;',
		'gould-accessibility': '&#xe9b3;',
		'gould-target': '&#xe9b4;',
		'gould-shield': '&#xe9b5;',
		'gould-power': '&#xe9b6;',
		'gould-switch': '&#xe9b7;',
		'gould-power-cord': '&#xe9b8;',
		'gould-clipboard': '&#xe9b9;',
		'gould-list-numbered': '&#xe9ba;',
		'gould-list': '&#xe9bb;',
		'gould-list2': '&#xe9bc;',
		'gould-tree': '&#xe9bd;',
		'gould-menu': '&#xe9be;',
		'gould-menu2': '&#xe9bf;',
		'gould-menu3': '&#xe9c0;',
		'gould-menu4': '&#xe9c1;',
		'gould-cloud': '&#xe9c2;',
		'gould-cloud-download': '&#xe9c3;',
		'gould-cloud-upload': '&#xe9c4;',
		'gould-cloud-check': '&#xe9c5;',
		'gould-download2': '&#xe9c6;',
		'gould-upload2': '&#xe9c7;',
		'gould-download3': '&#xe9c8;',
		'gould-upload3': '&#xe9c9;',
		'gould-sphere': '&#xe9ca;',
		'gould-earth': '&#xe9cb;',
		'gould-link': '&#xe9cc;',
		'gould-flag': '&#xe9cd;',
		'gould-attachment': '&#xe9ce;',
		'gould-eye': '&#xe9cf;',
		'gould-eye-plus': '&#xe9d0;',
		'gould-eye-minus': '&#xe9d1;',
		'gould-eye-blocked': '&#xe9d2;',
		'gould-bookmark': '&#xe9d3;',
		'gould-bookmarks': '&#xe9d4;',
		'gould-sun': '&#xe9d5;',
		'gould-contrast': '&#xe9d6;',
		'gould-brightness-contrast': '&#xe9d7;',
		'gould-star-empty': '&#xe9d8;',
		'gould-star-half': '&#xe9d9;',
		'gould-star-full': '&#xe9da;',
		'gould-heart': '&#xe9db;',
		'gould-heart-broken': '&#xe9dc;',
		'gould-man': '&#xe9dd;',
		'gould-woman': '&#xe9de;',
		'gould-man-woman': '&#xe9df;',
		'gould-happy': '&#xe9e0;',
		'gould-happy2': '&#xe9e1;',
		'gould-smile': '&#xe9e2;',
		'gould-smile2': '&#xe9e3;',
		'gould-tongue': '&#xe9e4;',
		'gould-tongue2': '&#xe9e5;',
		'gould-sad': '&#xe9e6;',
		'gould-sad2': '&#xe9e7;',
		'gould-wink': '&#xe9e8;',
		'gould-wink2': '&#xe9e9;',
		'gould-grin': '&#xe9ea;',
		'gould-grin2': '&#xe9eb;',
		'gould-cool': '&#xe9ec;',
		'gould-cool2': '&#xe9ed;',
		'gould-angry': '&#xe9ee;',
		'gould-angry2': '&#xe9ef;',
		'gould-evil': '&#xe9f0;',
		'gould-evil2': '&#xe9f1;',
		'gould-shocked': '&#xe9f2;',
		'gould-shocked2': '&#xe9f3;',
		'gould-baffled': '&#xe9f4;',
		'gould-baffled2': '&#xe9f5;',
		'gould-confused': '&#xe9f6;',
		'gould-confused2': '&#xe9f7;',
		'gould-neutral': '&#xe9f8;',
		'gould-neutral2': '&#xe9f9;',
		'gould-hipster': '&#xe9fa;',
		'gould-hipster2': '&#xe9fb;',
		'gould-wondering': '&#xe9fc;',
		'gould-wondering2': '&#xe9fd;',
		'gould-sleepy': '&#xe9fe;',
		'gould-sleepy2': '&#xe9ff;',
		'gould-frustrated': '&#xea00;',
		'gould-frustrated2': '&#xea01;',
		'gould-crying': '&#xea02;',
		'gould-crying2': '&#xea03;',
		'gould-point-up': '&#xea04;',
		'gould-point-right': '&#xea05;',
		'gould-point-down': '&#xea06;',
		'gould-point-left': '&#xea07;',
		'gould-warning': '&#xea08;',
		'gould-notification': '&#xea09;',
		'gould-question': '&#xea0a;',
		'gould-plus': '&#xea0b;',
		'gould-minus': '&#xea0c;',
		'gould-info': '&#xea0d;',
		'gould-cancel-circle': '&#xea0e;',
		'gould-blocked': '&#xea0f;',
		'gould-cross': '&#xea10;',
		'gould-checkmark': '&#xea11;',
		'gould-checkmark2': '&#xea12;',
		'gould-spell-check': '&#xea13;',
		'gould-enter': '&#xea14;',
		'gould-exit': '&#xea15;',
		'gould-play2': '&#xea16;',
		'gould-pause': '&#xea17;',
		'gould-stop': '&#xea18;',
		'gould-previous': '&#xea19;',
		'gould-next': '&#xea1a;',
		'gould-backward': '&#xea1b;',
		'gould-forward2': '&#xea1c;',
		'gould-play3': '&#xea1d;',
		'gould-pause2': '&#xea1e;',
		'gould-stop2': '&#xea1f;',
		'gould-backward2': '&#xea20;',
		'gould-forward3': '&#xea21;',
		'gould-first': '&#xea22;',
		'gould-last': '&#xea23;',
		'gould-previous2': '&#xea24;',
		'gould-next2': '&#xea25;',
		'gould-eject': '&#xea26;',
		'gould-volume-high': '&#xea27;',
		'gould-volume-medium': '&#xea28;',
		'gould-volume-low': '&#xea29;',
		'gould-volume-mute': '&#xea2a;',
		'gould-volume-mute2': '&#xea2b;',
		'gould-volume-increase': '&#xea2c;',
		'gould-volume-decrease': '&#xea2d;',
		'gould-loop': '&#xea2e;',
		'gould-loop2': '&#xea2f;',
		'gould-infinite': '&#xea30;',
		'gould-shuffle': '&#xea31;',
		'gould-arrow-up-left': '&#xea32;',
		'gould-arrow-up': '&#xea33;',
		'gould-arrow-up-right': '&#xea34;',
		'gould-arrow-right': '&#xea35;',
		'gould-arrow-down-right': '&#xea36;',
		'gould-arrow-down': '&#xea37;',
		'gould-arrow-down-left': '&#xea38;',
		'gould-arrow-left': '&#xea39;',
		'gould-arrow-up-left2': '&#xea3a;',
		'gould-arrow-up2': '&#xea3b;',
		'gould-arrow-up-right2': '&#xea3c;',
		'gould-arrow-right2': '&#xea3d;',
		'gould-arrow-down-right2': '&#xea3e;',
		'gould-arrow-down2': '&#xea3f;',
		'gould-arrow-down-left2': '&#xea40;',
		'gould-arrow-left2': '&#xea41;',
		'gould-circle-up': '&#xea42;',
		'gould-circle-right': '&#xea43;',
		'gould-circle-down': '&#xea44;',
		'gould-circle-left': '&#xea45;',
		'gould-tab': '&#xea46;',
		'gould-move-up': '&#xea47;',
		'gould-move-down': '&#xea48;',
		'gould-sort-alpha-asc': '&#xea49;',
		'gould-sort-alpha-desc': '&#xea4a;',
		'gould-sort-numeric-asc': '&#xea4b;',
		'gould-sort-numberic-desc': '&#xea4c;',
		'gould-sort-amount-asc': '&#xea4d;',
		'gould-sort-amount-desc': '&#xea4e;',
		'gould-command': '&#xea4f;',
		'gould-shift': '&#xea50;',
		'gould-ctrl': '&#xea51;',
		'gould-opt': '&#xea52;',
		'gould-checkbox-checked': '&#xea53;',
		'gould-checkbox-unchecked': '&#xea54;',
		'gould-radio-checked': '&#xea55;',
		'gould-radio-checked2': '&#xea56;',
		'gould-radio-unchecked': '&#xea57;',
		'gould-crop': '&#xea58;',
		'gould-make-group': '&#xea59;',
		'gould-ungroup': '&#xea5a;',
		'gould-scissors': '&#xea5b;',
		'gould-filter': '&#xea5c;',
		'gould-font': '&#xea5d;',
		'gould-ligature': '&#xea5e;',
		'gould-ligature2': '&#xea5f;',
		'gould-text-height': '&#xea60;',
		'gould-text-width': '&#xea61;',
		'gould-font-size': '&#xea62;',
		'gould-bold': '&#xea63;',
		'gould-underline': '&#xea64;',
		'gould-italic': '&#xea65;',
		'gould-strikethrough': '&#xea66;',
		'gould-omega': '&#xea67;',
		'gould-sigma': '&#xea68;',
		'gould-page-break': '&#xea69;',
		'gould-superscript': '&#xea6a;',
		'gould-subscript': '&#xea6b;',
		'gould-superscript2': '&#xea6c;',
		'gould-subscript2': '&#xea6d;',
		'gould-text-color': '&#xea6e;',
		'gould-pagebreak': '&#xea6f;',
		'gould-clear-formatting': '&#xea70;',
		'gould-table': '&#xea71;',
		'gould-table2': '&#xea72;',
		'gould-insert-template': '&#xea73;',
		'gould-pilcrow': '&#xea74;',
		'gould-ltr': '&#xea75;',
		'gould-rtl': '&#xea76;',
		'gould-section': '&#xea77;',
		'gould-paragraph-left': '&#xea78;',
		'gould-paragraph-center': '&#xea79;',
		'gould-paragraph-right': '&#xea7a;',
		'gould-paragraph-justify': '&#xea7b;',
		'gould-indent-increase': '&#xea7c;',
		'gould-indent-decrease': '&#xea7d;',
		'gould-share': '&#xea7e;',
		'gould-new-tab': '&#xea7f;',
		'gould-embed': '&#xea80;',
		'gould-embed2': '&#xea81;',
		'gould-terminal': '&#xea82;',
		'gould-share2': '&#xea83;',
		'gould-mail': '&#xea84;',
		'gould-mail2': '&#xea85;',
		'gould-mail3': '&#xea86;',
		'gould-mail4': '&#xea87;',
		'gould-amazon': '&#xea88;',
		'gould-google': '&#xea89;',
		'gould-google2': '&#xea8a;',
		'gould-google3': '&#xea8b;',
		'gould-google-plus': '&#xea8c;',
		'gould-google-plus2': '&#xea8d;',
		'gould-google-plus3': '&#xea8e;',
		'gould-hangouts': '&#xea8f;',
		'gould-google-drive': '&#xea90;',
		'gould-facebook': '&#xea91;',
		'gould-facebook2': '&#xea92;',
		'gould-instagram': '&#xea93;',
		'gould-whatsapp': '&#xea94;',
		'gould-spotify': '&#xea95;',
		'gould-telegram': '&#xea96;',
		'gould-twitter': '&#xea97;',
		'gould-vine': '&#xea98;',
		'gould-vk': '&#xea99;',
		'gould-renren': '&#xea9a;',
		'gould-sina-weibo': '&#xea9b;',
		'gould-rss': '&#xea9c;',
		'gould-rss2': '&#xea9d;',
		'gould-youtube': '&#xea9e;',
		'gould-youtube2': '&#xea9f;',
		'gould-twitch': '&#xeaa0;',
		'gould-vimeo': '&#xeaa1;',
		'gould-vimeo2': '&#xeaa2;',
		'gould-lanyrd': '&#xeaa3;',
		'gould-flickr': '&#xeaa4;',
		'gould-flickr2': '&#xeaa5;',
		'gould-flickr3': '&#xeaa6;',
		'gould-flickr4': '&#xeaa7;',
		'gould-dribbble': '&#xeaa8;',
		'gould-behance': '&#xeaa9;',
		'gould-behance2': '&#xeaaa;',
		'gould-deviantart': '&#xeaab;',
		'gould-500px': '&#xeaac;',
		'gould-steam': '&#xeaad;',
		'gould-steam2': '&#xeaae;',
		'gould-dropbox': '&#xeaaf;',
		'gould-onedrive': '&#xeab0;',
		'gould-github': '&#xeab1;',
		'gould-npm': '&#xeab2;',
		'gould-basecamp': '&#xeab3;',
		'gould-trello': '&#xeab4;',
		'gould-wordpress': '&#xeab5;',
		'gould-joomla': '&#xeab6;',
		'gould-ello': '&#xeab7;',
		'gould-blogger': '&#xeab8;',
		'gould-blogger2': '&#xeab9;',
		'gould-tumblr': '&#xeaba;',
		'gould-tumblr2': '&#xeabb;',
		'gould-yahoo': '&#xeabc;',
		'gould-yahoo2': '&#xeabd;',
		'gould-tux': '&#xeabe;',
		'gould-appleinc': '&#xeabf;',
		'gould-finder': '&#xeac0;',
		'gould-android': '&#xeac1;',
		'gould-windows': '&#xeac2;',
		'gould-windows8': '&#xeac3;',
		'gould-soundcloud': '&#xeac4;',
		'gould-soundcloud2': '&#xeac5;',
		'gould-skype': '&#xeac6;',
		'gould-reddit': '&#xeac7;',
		'gould-hackernews': '&#xeac8;',
		'gould-wikipedia': '&#xeac9;',
		'gould-linkedin': '&#xeaca;',
		'gould-linkedin2': '&#xeacb;',
		'gould-lastfm': '&#xeacc;',
		'gould-lastfm2': '&#xeacd;',
		'gould-delicious': '&#xeace;',
		'gould-stumbleupon': '&#xeacf;',
		'gould-stumbleupon2': '&#xead0;',
		'gould-stackoverflow': '&#xead1;',
		'gould-pinterest': '&#xead2;',
		'gould-pinterest2': '&#xead3;',
		'gould-xing': '&#xead4;',
		'gould-xing2': '&#xead5;',
		'gould-flattr': '&#xead6;',
		'gould-foursquare': '&#xead7;',
		'gould-yelp': '&#xead8;',
		'gould-paypal': '&#xead9;',
		'gould-chrome': '&#xeada;',
		'gould-firefox': '&#xeadb;',
		'gould-IE': '&#xeadc;',
		'gould-edge': '&#xeadd;',
		'gould-safari': '&#xeade;',
		'gould-opera': '&#xeadf;',
		'gould-file-pdf': '&#xeae0;',
		'gould-file-openoffice': '&#xeae1;',
		'gould-file-word': '&#xeae2;',
		'gould-file-excel': '&#xeae3;',
		'gould-libreoffice': '&#xeae4;',
		'gould-html-five': '&#xeae5;',
		'gould-html-five2': '&#xeae6;',
		'gould-css3': '&#xeae7;',
		'gould-git': '&#xeae8;',
		'gould-codepen': '&#xeae9;',
		'gould-svg': '&#xeaea;',
		'gould-IcoMoon': '&#xeaeb;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/gould-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
