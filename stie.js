/*=======Ver: 7.2.70212========*/
/*DHTMLMenu, (c) 2006, SourceTec Software Co.,LTD  -  www.sothink.com*/
function stgPStr(p){var s="",its="",scr=p.typ&2,v=p.typ&1,f=p.frm?1:st_css;with(p){its+=scr?"<table id='"+ids+"sct' cellpadding=0 cellspacing=0 "+stgCss("tb",f)+">"+(v?"<tr "+stgCss("tr",f)+">":"")+"<td  id='"+ids+"s0' valign='middle' "+stgCss("td",f)+">"+stgIStr(sc[0])+"</td>"+(v?"</tr><tr "+stgCss("tr",f)+">":""):"";its+=scr?"<td  id='"+ids+"scc' "+stgCss("td",f)+"><div  id='"+ids+"sc' "+stgCss("dv",f)+">":"";its+="<table cellpadding=0 cellspacing="+mar+" id='"+ids+"tb' "+stgCss("tb",f)+" align="+stHAL[hal]+">";for(var j=0;j<is.length;j++)its+=(v?"<tr "+stgCss("tr",f)+">":"")+"<td "+stgCss("td",f)+" valign='middle'>"+stgIStr(is[j])+"</td>"+(v?"</tr>":"");its+="</table>";its+=scr?"</div></td>":"";	its+=scr?(v?"</tr><tr "+stgCss("tr",f)+">":"")+"<td id='"+ids+"s1' valign='middle' "+stgCss("td",f)+">"+stgIStr(sc[1])+"</td>"+(v?"</tr>":"")+"</table>":"";s+="<table cellpadding=0 cellspacing=0 id='"+ids+"' "+stgCss("tb",f,stgBd(bdW,bd,bdC)+(wid?"width:"+stAdb(wid)+";":"")+(hei?"height:"+stAdb(hei)+";":""))+" align="+stHAL[hal]+" "+stgEnt(p)+">";if(decH[0])s+="<tr "+stgCss("tr",f)+">"+(decW[3]?"<td id='"+ids+"c0'  "+stgCss("td",f,(decW[3]>0?"width:"+decW[3]+"px;":"")+(decH[0]>0?"height:"+decH[0]+"px;":""))+">"+stgImg(p.ids+"cor0",cor[0],decW[3],decH[0],0,p.frm)+"</td>":"")+"<td id='"+ids+"d0' "+stgCss("td",f,stgBg(decBC[0],decBI[0],decBR[0],p.frm))+">"+stgImg(p.ids+"dec0",dec[0],decW[0],decH[0],decB[0],p.frm)+"</td>"+(decW[1]?"<td id='"+ids+"c1' "+stgCss("td",f,(decW[1]>0?"width:"+decW[1]+"px;":"")+(decH[0]>0?"height:"+decH[0]+"px;":""))+">"+stgImg(p.ids+"cor1",cor[1],decW[1],decH[0],0,p.frm)+"</td>":"")+"</tr>";s+="<tr "+stgCss("tr",f)+">"+(decW[3]?"<td id='"+ids+"d3' "+stgCss("td",f,stgBg(decBC[3],decBI[3],decBR[3],p.frm))+">"+stgImg(ids+"dec3",dec[3],decW[3],decH[3],decB[3],p.frm)+"</td>":"")+"<td id='"+ids+"txt' "+stgCss("td",f,stgBg(bgC,bgI,bgR,p.frm))+">"+its+"</td>"+(decW[1]?"<td id='"+ids+"d1' "+stgCss("td",f,stgBg(decBC[1],decBI[1],decBR[1],p.frm))+">"+stgImg(ids+"dec1",dec[1],decW[1],decH[1],decB[1],p.frm)+"</td>":"")+"</tr>";if(decH[2])s+="<tr "+stgCss("tr",f)+">"+(decW[3]?"<td id='"+ids+"c3' "+stgCss("td",f,(decW[3]>0?"width:"+decW[3]+"px;":"")+(decH[2]>0?"height:"+decH[2]+"px;":""))+">"+stgImg(ids+"cor3",cor[3],decW[3],decH[2],0,p.frm)+"</td>":"")+"<td id='"+ids+"d2' "+stgCss("td",f,stgBg(decBC[2],decBI[2],decBR[2],p.frm))+">"+stgImg(ids+"dec2",dec[2],decW[2],decH[2],decB[2],p.frm)+"</td>"+(decW[1]?"<td id='"+ids+"c2' "+stgCss("td",f,(decW[1]>0?"width:"+decW[1]+"px;":"")+(decH[2]>0?"height:"+decH[2]+"px;":""))+">"+stgImg(ids+"cor2",cor[2],decW[1],decH[2],0,p.frm)+"</td>":"")+"</tr>";s+="</table>";}return s }
function stgIStr(i){var s="",t=i.typ&3,f=i.frm?1:st_css;with(i){s+=lnk?"<a  href=\""+(lnk=="@"?"#":lnk.replace(/\"/g,"&quot;").replace(/\'/g,"&#39;"))+"\" target='"+(lnk=="@"?"_self":tar)+"' "+stgClk(i)+" id='"+i.ids+"lnk' "+stgCss("a",f,"text-decoration:none")+(i.stus?" onmouseover=\"return top.status='"+stus.replace(/\\/g,"\\\\").replace(/\"/g,"&quot;").replace(/\'/g,"\\\'")+"'\" onmouseout=\"top.status='';return true\"":"")+">":"";s+="<table cellspacing=0 cellpadding="+pad+(tip?" title=\""+tip+"\"":"")+" id='"+ids+"' "+stgCss("tb",f,"font-sytle:normal;"+(wid?"width:"+stAdb(wid)+";":"")+(st_nav.os=="mac"&&hei=="100%"||!hei?"":"height:"+stAdb(hei)+";")+stgBd(bdW,bd,bdC[(stat&07000000)>>18])+stgBg(bgC[(stat&07000)>>9],bgI[(stat&070000)>>12],bgR[(stat&0700000)>>15],i.frm)+stgCur(lnk&&lnk!="@"?cur[1]:cur[0]))+" "+stgEnt(i)+" align='"+stHAL[hal]+"'>";s+=icoW&&icoH?"<td id='"+ids+"il' "+stgCss("td",f,"width:"+lw+"px;")+">"+stgImg(ids+"ico",ico[(stat&070)>>3],icoW,icoH,icoB,i.frm)+"</td>":"";s+="<td id='"+ids+"im' align='"+stHAL[thal]+"' valign='"+stVAL[tval]+"' "+stgCss("td",f,stgFnt(colr[(stat&070000000)>>21],fnt[(stat&0700000000)>>24],dec[(stat&07000000000)>>27]))+" nowrap>";s+=t==2?stgImg(ids+"img",img[stat&7],imgW,imgH,imgB,i.frm):txt;	s+="</td>";		s+=arrW&&arrH?"<td id='"+ids+"ir' "+stgCss("td",f,"width:"+rw+"px;")+" align='right'>"+stgImg(ids+"arr",arr[(stat&0700)>>6],arrW,arrH,arrB,i.frm)+"</td>":"";s+="</table>";	s+=lnk?"</a>":"";	}return s;}
function stAdb(s,b){if(!b) b=0;if(isNaN(s)){if(s.charAt(s.length-1)=="%") return s;else if(s.substr(s.length-2)=="px") return (parseInt(s)+2*b)+"px"}else return (parseInt(s)+2*b)+"px"}
function stgObj(i,w){if(!w)w=window;return w.document.all[i];}
function stgBd(w,s,c){if(s=="none") return "";return (w?"border-width:"+w+"px;":"")+"border-style:"+stBDS[s]+";"+(c?"border-color:"+c+";":"")}
function stgBg(c,i,r,f){if(f && i) i=stabsL(i);return "background-color:"+c+(i?";background-image:url("+i+");background-repeat:"+stREP[r]:"")+";"}
function stgCur(c){if(!c.indexOf("url(")&&st_nav.ver<6) return;return c?"cursor:"+c+";":"";}
function stgFnt(c,f,d){return (c?"color:"+c+";":"")+(f?"font:"+f+";":"")+stgTd(d)}
function stgTd(v,f){if(f) return (v?(v&1?"underline ":"")+(v&2?"line-through ":"")+(v&4?"overline":""):"none");return "text-decoration:"+(v?(v&1?"underline ":"")+(v&2?"line-through ":"")+(v&4?"overline":""):"none")+";";}
function stgFilt(p){var s="";with(p){s+=eff[0]?eff[0]+" ":"";s+=eff[1]?eff[1]+" ":"";s+=(opc==100?"":"Alpha(opacity="+opc	+") ");if(shad)s+=shad==1?"dropshadow(color="+sdC+",offx="+stre+",offy="+stre+",positive=1)":"Shadow(color="+sdC+",direction=135,strength="+stre+") ";}if(s)s="filter:"+s+";";return s;}
function stsEnt(e,o,ei,d){var t=eval(d);if(!t) return;switch(ei){case 0:if(!t.isOv&&e.toElement&&o.contains(e.toElement)){eval(t.onmouseover+"(t)");t.isOv=1;}break;case 1:if(t.isOv&&(!e.toElement||!o.contains(e.toElement))){eval(t.onmouseout+"(t)");t.isOv=0;}break;case 2:if((st_ms[t.mid].cks&4) && t.subP &&((e.srcElement.id==t.ids+"arr" || e.srcElement.id==t.ids+"ir")&&!st_ms[t.mid].rtl || (e.srcElement.id==t.ids+"ico" || e.srcElement.id==t.ids+"il")&&st_ms[t.mid].rtl )){t.disable=false;stshP(t.subP);return;}if(e.shiftKey)	eval(t.onclick+"(t,1)");else eval(t.onclick+"(t)");break;case 3:eval(t.onmousedown+"(t)");break;case 4:eval(t.onmouseup+"(t)");break;}}
function staddP(p,w){if(!w)w=window;var es=s="",d=w.document;if(w!=window) {p.frm=w.name;for(var j=0;j<p.is.length;j++)p.is[j].frm=w.name;if((p.typ&2)==2){p.sc[0].frm=w.name;p.sc[1].frm=w.name;}}else if(p.frm){p.frm=0;for(var j=0;j<p.is.length;j++)p.is[j].frm=0;if((p.typ&2)==2){p.sc[0].frm=0;p.sc[1].frm=0;}}if(p.isSt){d.write("<div "+stgCss("dv",st_css,"visibility:hidden;display:block;width:100%;padding:"+p.stre+"px;"+stgFilt(p))+" id='"+p.ids+"dv'>"+stgPStr(p)+"</div>");return true}if(st_nav.ver>=5&&st_nav.os!="mac")es+="try{";else es+="if(stwinr(w)){";es+="s=\"<div \"+stgCss(\"dv\",p.frm?1:st_css,\"position:absolute;left:0px;top:-9999px;width:"+(st_nav.ver>6?"expression(document.all('"+p.ids+"').offsetWidth)":"1px")+";visibility:hidden;z-index:\"+p.zid+\";padding:\"+p.stre+\"px;\"+stgFilt(p))+\" id='\"+p.ids+\"dv'>\"+stgPStr(p)+\"</div>\";if(st_nav.ver<5||st_nav.os==\"mac\")d.body.insertAdjacentHTML(\"beforeEnd\",s);else d.body.insertAdjacentHTML(\"afterBegin\",s);";es+="true";if(st_nav.ver>=5&&st_nav.os!="mac"){es+="}catch(e){";es+="if(p.frm){";es+="p.frm=0;";es+="for(var j=0;j<p.is.length;j++)p.is[j].frm=0;";es+="if((p.typ&2)==2)p.sc[0].frm=p.sc[1].frm=0;}";es+="false;";es+="}"}else es+="}else false";return eval(es)}
function stsPop(p,w){if(!w)w=window;var scr=p.typ&2;p._layer=stgObj(p.ids,w);	p._shell=stgObj(p.ids+"dv",w);p._tb=stgObj(p.ids+"tb",w);if(scr)p._sc=stgObj(p.ids+"sc",w);if(p.decH[0]) p._dec0=stgObj(p.ids+"d0",w);if(p.decW[1]) p._dec1=stgObj(p.ids+"d1",w);if(p.decH[2]) p._dec2=stgObj(p.ids+"d2",w);if(p.decW[3])p._dec3=stgObj(p.ids+"d3",w);if(p.decH[0]&&p.decW[3]) p._cor0=stgObj(p.ids+"c0",w);if(p.decH[0]&&p.decW[1]) p._cor1=stgObj(p.ids+"c1",w);if(p.decH[2]&&p.decW[1]) p._cor2=stgObj(p.ids+"c2",w);if(p.decH[2]&&p.decW[3]) p._cor3=stgObj(p.ids+"c3",w);stpPre(p,w);	}
function stpPre(p,w){if((p.typ&2)/2) {for(var j=0;j<2;j++){stsIt(p.sc[j],w);if(p.typ&1)p.sc[j]._layer.parentElement.parentElement.style.display="none";else p.sc[j]._layer.parentElement.style.display="none";}}for(var j=0;j<p.is.length;j++)stsIt(p.is[j],w);if(!p.isSt&&!st_nav.typ&&st_nav.ver<5){var rc=stgRc(p._layer);p._shell.style.width=rc[2]+"px";p._shell.style.height=rc[3]+"px";}}
function stsIt(i,w){i._layer=stgObj(i.ids,w);i._font=stgObj(i.ids+"im",w);if(i.icoW) i._left=stgObj(i.ids+"ico",w);if(i.arrW) i._right=stgObj(i.ids+"arr",w);if((i.typ&3)==2) i._img=stgObj(i.ids+"img",w);if(i.lnk)	i._anchor=stgObj(i.ids+"lnk",w);	if(i.hei=="100%"){if(i.parP.isSt&&!st_lded)st_ld.push(new Function("var i;if(i=stgObj('"+i.ids+"'))i.style.height=i.parentElement.offsetHeight+'px'"));else i._layer.style.height=i._layer.parentElement.offsetHeight+"px";}}
function stgRc(o){if(!o) return;var x=y=w=h=0;w=o.offsetWidth;h=o.offsetHeight;if(st_nav.os=="mac"&&o.tagName=="TABLE"){x+=parseInt(document.body.leftMargin);if(document.body.offsetTop<0)y+=Math.abs(document.body.offsetTop)*2;if(o.style.borderWidth&&parseInt(o.style.borderWidth)){x-=parseInt(o.style.borderWidth);y-=parseInt(o.style.borderWidth);}else if(o.border){x-=o.border;y-=o.border;}}	while(o){x+=o.offsetLeft;y+=o.offsetTop;if(o.parentNode&&o.parentNode.tagName=="DIV"){if(o.parentNode.style.overflow.toLowerCase()=="hidden"){x-=o.parentElement.scrollLeft;y-=o.parentElement.scrollTop;}if(STM_RTL&&o.parentNode.style.position.toLowerCase()=="absolute"&&st_nav.ver>5){x-=o.offsetLeft;x+=isNaN(parseInt(o.parentNode.style.padding))?parseInt(o.parentNode.style.padding):0 }}o=o.offsetParent;}return [x,y,w,h]}
function stckL(d,w){if(!w)w=window;var l,es="";if(d.isSt) return true;if(st_nav.ver>=5)	es+="try{";else es+="if(stwinr(w)){";es+="d._layer&&d._layer==stgObj(d.ids,w)";if(st_nav.ver>=5)es+="}	catch(e){false}";else es+="}else false";return eval(es)}
function stcIt(i,f){if(i.lock||i.stat==f) return;var m=st_ms[i.mid];	if(i._layer){if(!stusrE(4,i,m)) return;	var o=i._layer,l=i._left,r=i._right,im=i._img,fn=i._font,d;with(i){d=stat^f;if(o){if((d&07000)&&bgC[(stat&07000)>>9]!=bgC[(f&07000)>>9]){o.style.backgroundColor=bgC[(f&07000)>>9];}if(((d&070000)&&bgI[(stat&070000)>>12]!=bgI[(f&070000)>>12])||((d&0700000)&&bgR[(stat&0700000)>>15]!=bgR[(f&0700000)>>15])){o.style.backgroundImage="url("+bgI[(f&070000)>>12]+")";o.style.backgroundRepeat=stREP[bgR[(f&0700000)>>15]];}if((d&070000000)&&colr[(stat&070000000)>>21]!=colr[(f&070000000)>>21])fn.style.color=colr[(f&070000000)>>21];if((d&0700000000)&&fnt[(stat&0700000000)>>24]!=fnt[(f&0700000000)>>24])fn.style.font=fnt[(f&0700000000)>>24];		if((d&07000000000)&&dec[(stat&07000000000)>>27]!=dec[(f&07000000000)>>27])fn.style.textDecoration=stgTd(dec[(f&07000000000)>>27],1);	if((d&07000000)&&bdC[(stat&07000000)>>18]!=bdC[(f&07000000)>>18])o.style.borderColor=bdC[(f&07000000)>>18];}if(l){if((d&070)&&ico[(stat&070)>>3]!=ico[(f&070)>>3])l.src=ico[(f&070)/010]?ico[(f&070)>>3]:m.bnk;}if(r){if((d&0700)&&arr[(stat&0700)>>6]!=arr[(f&0700)>>6])r.src=arr[(f&0700)>>6]?arr[(f&0700)>>6]:m.bnk;}if(im){if((d&7)&&img[stat&7]!=img[f&7])im.src=img[f&7]?img[f&7]:m.bnk;}	stat=f;}if(!stusrE(5,i,st_ms[i.mid])) return;}}
function stick(i,f){i.disable=true;if(i.myclick&&!i.myclick()) return;var m=st_ms[i.mid],sp=i.subP,pp=i.parP;		if((m.cks&4)&&sp&&!sp.isSh)stshP(st_ms[sp.mid].ps[sp.id]);if(i.lnk)	m.ckhd=1;if(i.frm&&i.lnk){stcIt(i,i.oust);i.isOv=0;i.parP.isOv=0;sthdPX(i.parP,3);stusrE(6,i.parP,m); m.isOv=0;}else if((m.cks&1)&&!m.ckd) {m.ckd=1;for(var j=0;j<m.ps.length;j++){if(j&&!(m.ps[j].isSh&&!m.hdp)) m.ps[j].lock=0;if(!(m.cks&2))for(var k=0;k<m.ps[j].is.length;k++)m.ps[j].is[k].lock=0;}stcIt(i,i.ovst);if(!(i.lnk&&i.subP&&i.subP.frm)&&i.subP&&!i.subP.isSh){var pp=i.parP;for(var j=0;j<pp.is.length;j++)if(pp.is[j]!=i){if(pp.is[j].subP){clearTimeout(pp.is[j].subP.tid);sthdPX(pp.is[j].subP,1);}else stcIt(pp.is[j],pp.is[j].oust);}stshP(i.subP);}}if(i.lnk&&i.subP&&i.subP.frm&&i.subP.isSh)sthdPX(i.subP,3);	if(i.lnk&&!m.hdp&&m.cfrm)for(var j=0;j<m.ps.length;j++)if(m.ps[j].lock&&m.ps[j].frm)m.ps[j].lock=0;if(i.lnk){if(f) i._anchor.target="_blank";i._anchor.click();if(f) i._anchor.target=i.tar;}}
function stiov(i){	if(i.myover&&!i.myover()) return;var m=st_ms[i.mid],sp=i.subP,pp=i.parP;	stcIt(i,i.ovst);if(i.stus&&!i.lnk)top.status=i.stus;for(var j=0;j<pp.is.length;j++)if(pp.is[j]!=i){if(pp.is[j].subP){clearTimeout(pp.is[j].subP.tid);sthdPX(pp.is[j].subP,1);}else stcIt(pp.is[j],pp.is[j].oust);}if(sp){clearTimeout(sp.tid);if(!sp.isSh&&!(m.cks&4))sp.tid=setTimeout("stshP(st_ms["+sp.mid+"].ps["+sp.id+"]);",pp.typ&1?m.deSV:m.deSH);}}
function stiou(i){if(i.myout&&!i.myout()) return;var m=st_ms[i.mid],sp=i.subP;if(!sp||!sp.isSh)	stcIt(i,i.oust);if(sp){clearTimeout(sp.tid);sp.tid=setTimeout("sthdPX(st_ms["+sp.mid+"].ps["+sp.id+"],1)",m.deHd);}if(i.stus&&!i.lnk)top.status="";}
function stpov(p){st_ms[p.mid].isOv=1;if(p.myover&&!p.myover()) return;clearTimeout(p.tid);while(p.parI){stcIt(p.parI,p.parI.ovst);clearTimeout(p.parI.parP.tid);p=p.parI.parP;}}
function stpou(p){	if(p.myout&&!p.myout()) return;var m=st_ms[p.mid];var cs="stusrE(6,st_ms["+p.mid+"].ps["+p.id+"],st_ms["+p.mid+"]);st_ms["+p.mid+"].isOv=0";p.tid=setTimeout("sthdPX(st_ms["+p.mid+"].ps["+p.id+"]);"+cs,m.deHd);}
function stshP(p){var o,m=st_ms[p.mid],w=p.id?stgtfrm(m):window;if(m.ckhd)m.ckhd=0;if(!stckL(p,w)){if(w&&(w!=window||!m.cfrm)&&staddP(p,w))stsPop(p,w);else if(m.cfsh&&!stckL(p))if(staddP(p))	stsPop(p);else return;else if(!m.cfsh)	return;	}if(p.lock||p.isSh) return;if(o=p._shell)	{if(!stusrE(0,p,m)) return;	if(!p.isSt){var xy=stgPxy(p,1);o.style.left=xy[0]+"px";o.style.top=xy[1]+"px";}o.style.visibility="visible";p.isSh=1;if(!m.hdp)	p.lock=1;if(!stusrE(1,p,m)) return;}}
function sthdP(p){var m=st_ms[p.mid],o;if(p.lock||!p.isSh) return;	if(p.frm){var w=stgtfrm(m);if(!stckL(p,w)) {p._layer=0;p.isSh=0;return;}}else if(!p._layer) return;	if(o=p._shell){		if(!stusrE(2,p,m)) return;	o.style.visibility="hidden";	p.isSh=0;if(!stusrE(3,p,m)) return;	}}
function sthdPX(p,f){var tp=p,cp;if(f==1)tp=p;else while(1){if(!tp.parI) break;if(f!=3&&(tp.parI.parP.isOv||!tp.parI.parP.isSh||tp.parI.parP.isSt)) break;tp=tp.parI.parP;}var ps=[tp],j,k;k=0;while(1){cp=ps[k];if(k==ps.length) break;for(j=0;j<cp.is.length;j++)	if(cp.is[j].subP&&cp.is[j].subP.isSh) ps.push(cp.is[j].subP);k++;}for(j=ps.length;j>0;j--)if(ps[j-1].isSh) {if(!f&&ps[j-1].isSt) continue;if((f==3||f==1)&&(!ps[j-1].id||ps[j-1].isSt))continue;if(f==3||f==4)ps[j-1].lock=0;sthdP(ps[j-1]);if(ps[j-1].parI) stcIt(ps[j-1].parI,ps[j-1].parI.oust);}}
function stgPxy(p,f){		var m=st_ms[p.mid],mx=eval(m.x),my=eval(m.y);mx=isNaN(mx)?0:mx;my=isNaN(my)?0:my;	var irc=p.parI?stgRc(p.parI._layer):[mx,my,0,0],prc=stgRc(p._shell),xd=p.dir&3,yd=(p.dir&12)/4,x=y=0,win=window,cf=p.frm&&p.frm!=window.name;var xd=p.dir&3,yd=(p.dir&12)/4;if(cf)win=stgtfrm(m);var cl=stgcl(win),ct=stgct(win),cw=stgcw(win),ch=stgch(win);switch(xd){case 0:x=irc[0]-prc[2];break;case 1:x=irc[0];break;case 2:x=irc[0]+irc[2]-prc[2];break;case 3:x=irc[0]+irc[2];}switch(yd){case 0:y=irc[1]-prc[3];break;case 1:y=irc[1];break;case 2:y=irc[1]+irc[3]-prc[3];break;case 3:y=irc[1]+irc[3];}if(cf&&p.frm!=p.parI.frm){switch(m.cfD){case 0:y=0;break;case 1:y=ch-prc[3];break;case 2:x=0;break;case 3:x=cw-prc[2];break;}x+=cl;y+=ct;x=x+m.cfX;y=y+m.cfY;if(m.sfrn){var wcl=stgcl(),wct=stgct();if(!m.cfD||m.cfD==1)x-=wcl;if(m.cfD==2||m.cfD==3)y-=wct;}}y+=p.offY;x+=p.offX;x-=xd?p.stre:0;y-=yd?p.stre:0;	if(f&&p.id){	if(x+prc[2]>cl+cw) x=cl+cw-prc[2];if(y+prc[3]>ct+ch) y=ct+ch-prc[3];		if(x<cl-p.stre) x=cl-p.stre;if(y<ct-p.stre) y=ct-p.stre;}		p._rc=[x,y,prc[2],prc[3]];return [x,y]}
function stgImg(id,s,w,h,b,f){if(!s){s=st_cm.bnk;w=w==-1?1:w;h=h==-1?1:h;}if(f)s=stabsL(s);return "<img id='"+id+"' src='"+s+"'"+(w!=-1?" width="+w:"")+(h!=-1?" height="+h:"")+" border="+b+">";}
function stmvto(xy,p){if(p.isSt||!p.isSh) return;var l=p._shell;l.style.left=xy[0]+"px";l.style.top=xy[1]+"px";p._rc[0]=xy[0];p._rc[1]=xy[1];}
function stgcl(w){if(!w)w=window; return (w.document.compatMode=="CSS1Compat"?w.document.documentElement:w.document.body).scrollLeft;}
function stgct(w){if(!w)w=window; return (w.document.compatMode=="CSS1Compat"?w.document.documentElement:w.document.body).scrollTop;}
function stgcw(w){if(!w)w=window; return (w.document.compatMode=="CSS1Compat"?w.document.documentElement:w.document.body).clientWidth;}
function stgch(w){if(!w)w=window; return (w.document.compatMode=="CSS1Compat"?w.document.documentElement:w.document.body).clientHeight;}
function stwinr(w){if(!w) return false;if(w.document.readyState=="complete") return true;return false;}
