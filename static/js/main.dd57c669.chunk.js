(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),l=(n(16),n(4)),c=n(5),s=n(6),u=n(8),d=n(7),m=n(1),h=n(9);n(17),n(18);var g=function(e){return o.a.createElement("div",null,e.grid_matrix.map(function(t,n){return o.a.createElement("div",null,t.row_array.map(function(t,a){var r={borderStyle:"none",backgroundColor:t.color,height:"30px",width:"30px",margin:"2px"};return o.a.createElement("button",{style:r,onClick:function(){e.changeColor(n,a)}})}))}))},w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).addRow=function(){n.setState({rows:n.state.rows+1});for(var e=[],t=0;t<n.state.columns;t++)e[t]={row_index:n.state.grid_matrix.length,column_index:t,color:"grey"};n.setState(function(t){return t.grid_matrix.push({row_array:e})}),console.log(n.state.grid_matrix)},n.deleteRow=function(){n.state.rows>0&&(n.setState({rows:n.state.rows-1}),n.setState(function(e){return e.grid_matrix.pop()}))},n.addCol=function(){n.setState({columns:n.state.columns+1});for(var e=function(e){n.setState(function(t){return t.grid_matrix[e].row_array[n.state.grid_matrix[e].row_array.length]={row_index:e,column_index:n.state.columns,color:"grey"}})},t=0;t<n.state.grid_matrix.length;t++)e(t)},n.deleteCol=function(){if(n.state.columns>0){n.setState({columns:n.state.columns-1});for(var e=function(e){n.setState(function(t){return t.grid_matrix[e].row_array.pop()})},t=0;t<n.state.grid_matrix.length;t++)e(t)}},n.state={clickedColor:"red",columns:0,rows:0,grid_matrix:[],main_div_style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.addRow=n.addRow.bind(Object(m.a)(n)),n.deleteRow=n.deleteRow.bind(Object(m.a)(n)),n.changeColor=n.changeColor.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"changeColor",value:function(e,t){var n=this;this.setState(function(a){return a.grid_matrix[e].row_array[t].color=n.state.clickedColor})}},{key:"render",value:function(){return o.a.createElement("div",{style:this.state.main_div_style},o.a.createElement("h1",null,"Pixelate"),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.addRow},"Add Row"),o.a.createElement("button",{onClick:this.deleteRow},"Delete Row"),o.a.createElement("button",{onClick:this.addCol},"Add Column"),o.a.createElement("button",{onClick:this.deleteCol},"Delete Column"),o.a.createElement("select",{name:"clickedColor",onChange:this.handleChange,value:this.state.clickedColor},o.a.createElement("option",{value:"red"},"Red"),o.a.createElement("option",{value:"blue"},"Blue"),o.a.createElement("option",{value:"black"},"Black"),o.a.createElement("option",{value:"white"},"White"))),o.a.createElement("br",null),o.a.createElement(g,{grid_matrix:this.state.grid_matrix,changeColor:this.changeColor}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.dd57c669.chunk.js.map