(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(29),s=n.n(i),r=(n(40),n(17)),o=n.n(r),j=n(18),l=n(30),m=n(13),d=n(77),b=n(73),u=n(31),h=(n(42),n(1));var O=function(){return Object(h.jsx)(b.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)("h1",{className:"header",children:"The Shoppies"})})})},x=n(79),v=n(78),f=n(33),N=n(32),p=n(34),g=n(74);n(44);var S=function(e){return Object(h.jsx)(b.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(x.a,{children:Object(h.jsx)(x.a.Body,{children:Object(h.jsx)(v.a,{children:Object(h.jsxs)(v.a.Group,{className:"formInput",children:[Object(h.jsx)(f.a,{className:"movieTitleSearch",children:"Movie Title"}),Object(h.jsxs)(p.a,{className:"movieSearch",children:[Object(h.jsx)(g.a,{className:"searchIcon"}),Object(h.jsx)(N.a,{className:"movieInput",value:e.value,placeholder:"Search for Movies Here",onChange:e.onChange})]})]})})})})})})},y=(n(48),n(80)),I=n(75);n(49);var T=function(e){return Object(h.jsxs)("div",{className:"nominateBanner",children:[Object(h.jsx)(b.a,{children:Object(h.jsxs)(u.a,{className:"movieTitle",children:[e.title,"  (",e.year,")"]})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(y.a,{className:"nominateBtn",onClick:function(){e.nominateMovie(e.movie)},disabled:-1!==e.disabled.indexOf(e.movie.imdbID),children:[Object(h.jsx)("span",{className:"mr-2",children:"Nominate"}),Object(h.jsx)(I.a,{})]})})})]})};var C=function(e){return Object(h.jsxs)("div",{className:"d-flex",children:[e.movies.length?Object(h.jsx)("div",{}):Object(h.jsx)(x.a,{className:"noResultsCard",children:Object(h.jsx)(x.a.Title,{className:"noResults",children:"No search results to display yet"})}),e.movies.map((function(t,n){return Object(h.jsxs)("div",{className:"image-container justify-content-start m-3",children:[Object(h.jsx)("img",{src:t.Poster,alt:"moviePoster"}),Object(h.jsx)("div",{className:"d-flex align-items-center overlay justify-content-center",children:Object(h.jsx)(T,{movie:t,title:t.Title,year:t.Year,nominateMovie:e.nominateMovie,disabled:e.disabled})})]})}))]})},M=n(76);n(50);var k=function(e){return Object(h.jsxs)("div",{className:"overlayBanner",children:[Object(h.jsx)(b.a,{children:Object(h.jsxs)(u.a,{className:"nomineeTitle",children:[e.nominee.Title,"  (",e.nominee.Year,")"]})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(y.a,{className:"removeBtn",onClick:function(){return e.removeNomination(e.nominee.imdbID)},children:[Object(h.jsx)("span",{className:"mr-2",children:"Remove"}),Object(h.jsx)(M.a,{})]})})})]})};n(51);var w=function(e){return Object(h.jsxs)("div",{className:"d-flex",children:[e.nominees.length?Object(h.jsx)("div",{}):Object(h.jsx)(x.a,{className:"noNomineesCard",children:Object(h.jsx)(x.a.Title,{className:"noNominees",children:'No movies nominated yet. Search for Movies, and click on the "Nomiate" button to nominate!'})}),e.nominees.map((function(t,n){return Object(h.jsxs)("div",{className:"image-container justify-content-start m-3",children:[Object(h.jsx)("img",{src:t.Poster,alt:"moviePoster"}),Object(h.jsx)("div",{className:"d-flex align-items-center overlay justify-content-center",children:Object(h.jsx)(k,{nominee:t,removeNomination:e.removeNomination})})]})}))]})},B=(n(52),n(53),n(35)),P=n.n(B),R=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(m.a)(i,2),r=s[0],x=s[1],v=Object(c.useState)([]),f=Object(m.a)(v,2),N=f[0],p=f[1],g=Object(c.useState)([]),y=Object(m.a)(g,2),I=y[0],T=y[1];Object(c.useEffect)((function(){k(n)}),[n]),Object(c.useEffect)((function(){M()}),[]);var M=function(){var e=JSON.parse(localStorage.getItem("nominee"));p(e||[])};var k=function(e){P.a.get("https://www.omdbapi.com/?s=".concat(e,"&type=movie&apikey=a1e90d82")).then((function(e){e.data.Search&&x(e.data.Search)})).catch((function(e){return console.log(e)}))},B=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[].concat(Object(j.a)(N),[t]),p(n),c=[].concat(Object(j.a)(I),[t.imdbID]),T(c),localStorage.setItem("nominee",JSON.stringify(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(d.a,{fluid:!0,className:"movieApp",children:[Object(h.jsx)(O,{}),Object(h.jsx)(S,{onChange:function(e){var t=e.target.value;a(t)},value:n}),Object(h.jsx)(b.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)("h4",{className:"searchResultsHeader",children:"Search Results"})})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(C,{movies:r,disabled:I,nominateMovie:B})})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)("h4",{className:"searchResultsHeader",children:"Nominees"})})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(w,{nominees:N,removeNomination:function(e){var t=N.filter((function(t){if(t.imdbID!==e)return t})),n=I.filter((function(t){if(t!==e)return t}));T(n),p(t),localStorage.setItem("nominee",JSON.stringify(t))}})})})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root")),D()}},[[72,1,2]]]);
//# sourceMappingURL=main.1e7cab7e.chunk.js.map