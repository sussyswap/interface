(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[16],{2020:function(e,r,t){},2076:function(e,r,t){"use strict";t.r(r);var s=t(23),c=t(3),n=t(6),a=t(2),g=t(5),i=t(126),l=t(35),w=t(24),o=t(272),j=t(570),h=t(95),d=t(575),b=t(141),z=t(207),m=t(1874),u=t(101),x=t(183),p=t(57),f=t(285),O=t(807),N=t(1),y=t(139),k=(t(383),t(2020),"hwks9j7 rgw6ezeu rgw6ez52p rgw6ezci rgw6eztm rgw6ez101 rgw6ez10f rgw6ezi5 rgw6ezhs"),T="hwks9jm rgw6ezc4 rgw6ez52v rgw6ez10m rgw6ezh6",_="hwks9jy rgw6ez52v rgw6ezbx rgw6ezo6",v=t(0),E=a.default.a.withConfig({componentId:"sc-cb512n-0"})(["position:absolute;right:32px;top:32px;color:",";cursor:pointer;"," @media only screen and (max-width:","){right:12px;top:28px;}"],(function(e){return e.theme.textSecondary}),j.a,(function(e){var r=e.theme;return"".concat(r.breakpoint.sm,"px")}));r.default=function(){var e=Object(N.useState)(3e3),r=Object(n.a)(e,2),t=r[0],a=r[1],j=Object(N.useState)(!1),S=Object(n.a)(j,2),C=S[0],F=S[1],R=Object(x.n)((function(e){return e.txHash})),U=Object(x.n)((function(e){return e.purchasedWithErc20})),I=Object(x.n)((function(e){return e.setState})),B=Object(x.n)((function(e){return e.state})),q=Object(N.useRef)(B),D=Object(x.o)((function(e){return e.transactionResponse})),P=Object(x.o)((function(e){return e.setTransactionResponse})),W=Object(x.i)(),H=Object(y.b)(1,R,y.a.TRANSACTION),L=(B===p.l.Success||B===p.l.Failed)&&B,A=Object(l.useTrace)({modal:w.InterfaceModalName.NFT_TX_COMPLETE}),M=Object(N.useMemo)((function(){return Object(f.C)(D,t)}),[D,t]),V=M.nftsPurchased,Y=M.nftsNotPurchased,G=M.showPurchasedModal,J=M.showRefundModal,X=M.totalPurchaseValue,Z=M.totalRefundValue,K=M.totalUSDRefund,Q=M.txFeeFiat;function $(){P({}),I(p.l.New)}Object(N.useEffect)((function(){Object(f.i)().then((function(e){a(null!==e&&void 0!==e?e:0)}))}),[]),Object(N.useEffect)((function(){x.n.subscribe((function(e){return q.current=e.state}))}),[]);return Object(v.jsx)(v.Fragment,{children:L&&Object(v.jsxs)(d.a,{children:[Object(v.jsx)(m.a,{onClick:$}),Object(v.jsxs)(h.b,{className:"hwks9j1 rgw6ez2qg rgw6ez2wv rgw6ez36e rgw6ez2n5 rgw6ez4ry rgw6ez4wm rgw6ez1lf rgw6ez1dg rgw6ez1do rgw6ez3l6 rgw6ez3r1 rgw6ez3y0 rgw6ez4cl rgw6ez8ah",onClick:$,children:[G&&Object(v.jsx)(l.Trace,{name:w.NFTEventName.NFT_BUY_BAG_SUCCEEDED,properties:Object(c.a)(Object(c.a)({buy_quantity:V.length,usd_value:parseFloat(Object(i.formatEther)(X))*t,transaction_hash:R,using_erc20:U},Object(O.a)(V)),A),shouldLogImpression:!0,children:Object(v.jsxs)(h.b,{className:"hwks9j3 rgw6ez5dj rgw6ez801 rgw6ez4ry rgw6ez4r6 rgw6ez1lm rgw6ez4wt rgw6ez1dg rgw6ez1do rgw6ez34g rgw6ez34h rgw6ez2l7 rgw6ez2l8",onClick:m.b,children:[Object(v.jsx)(z.Z,{color:u.d.color.pink400,width:"36",height:"36",className:"rgw6ez4wf rgw6ez3mj rgw6ez3nx rgw6ez3zr rgw6ez406"}),Object(v.jsxs)(h.b,{display:"flex",flexWrap:"wrap",width:"full",height:"min",children:[Object(v.jsx)("h1",{className:k,children:Object(v.jsx)(g.b,{id:"Complete!"})}),Object(v.jsx)("p",{className:"hwks9jd rgw6ez52p rgw6ezc4 rgw6ez1dg rgw6ez4tp rgw6eztm rgw6ez101 rgw6ez10f rgw6ezjb",children:Object(v.jsx)(g.b,{id:"Uniswap has granted your wish!"})})]}),Object(v.jsx)(E,{onClick:function(){window.open(Object(f.s)(V,H),"newwindow","left=".concat((window.screen.width-560)/2,", top=").concat((window.screen.height-480)/2,", width=").concat(560,", height=").concat(480))},target:"_blank",children:Object(v.jsx)(z.Y,{width:32,height:32,color:u.c.colors.textSecondary})}),Object(v.jsx)(h.b,{className:"hwks9jf rgw6ez4ry rgw6ez4r6 rgw6ez1dg rgw6ez8ah rgw6ez4v9",style:{maxHeight:V.length>32?W?"172px":"292px":"min-content"},children:Object(s.a)(V).map((function(e,r){return Object(v.jsx)("img",{className:Object(o.default)("hwks9jh rgw6ez7zp rgw6ez4js",V.length>1&&"rgw6ezul rgw6ezv0 rgw6ezhr rgw6ezi6"),style:{maxHeight:"".concat(Object(f.w)(V.length,W),"px"),maxWidth:"".concat(Object(f.w)(V.length,W),"px")},src:e.imageUrl,alt:e.name},r)}))}),V.length>32&&Object(v.jsx)(h.b,{className:"hwks9jk"}),Object(v.jsxs)(h.b,{display:"flex",width:"full",height:"min",flexDirection:"row",marginTop:{sm:"20",md:"20"},flexWrap:{sm:"wrap",md:"nowrap"},alignItems:"center",paddingRight:"40",paddingLeft:"40",className:"rgw6ez52p rgw6ezc4",justifyContent:"space-between",children:[Object(v.jsxs)(b.c,{children:[Object(v.jsxs)(h.b,{marginRight:"16",children:[V.length," NFT",1===V.length?"":"s"]}),Object(v.jsxs)(h.b,{children:[Object(f.m)(X.toString())," ETH"]})]}),Object(v.jsx)("a",{href:H,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:Object(v.jsx)(h.b,{color:"textSecondary",fontWeight:"normal",children:Object(v.jsx)(g.b,{id:"View on Etherscan"})})})]})]})}),J&&(G?Object(v.jsx)(l.Trace,{name:w.NFTEventName.NFT_BUY_BAG_REFUNDED,properties:Object(c.a)({buy_quantity:V.length,fail_quantity:Y.length,refund_amount_usd:K,transaction_hash:R},A),shouldLogImpression:!0,children:Object(v.jsxs)(h.b,{className:"hwks9js rgw6ez5dj rgw6ez801 rgw6ez4ry rgw6ez4r6 rgw6ez349 rgw6ez34o rgw6ez2x9 rgw6ez2xv rgw6ez2rf rgw6ez2ru rgw6ez1lm rgw6ez1dg rgw6ez1do rgw6ez4wt rgw6ez11e",onClick:m.b,children:[Object(v.jsxs)(h.b,{display:"inline-flex",flexWrap:"wrap",width:{sm:"full",md:"half"},paddingRight:{sm:"0",md:"32"},children:[Object(v.jsx)(z.F,{color:"pink"}),Object(v.jsx)("p",{className:"hwks9ju rgw6ez52p rgw6ezeu rgw6ezcb rgw6ezo6 rgw6ez101 rgw6ezh6 rgw6ezn8",children:"Instant Refund"}),Object(v.jsxs)("p",{className:"hwks9jw rgw6ez52p rgw6ezc4 rgw6eztm rgw6ez101 rgw6ez11l rgw6ezix rgw6ez1dg",children:["Uniswap returned"," ",Object(v.jsxs)("span",{style:{fontWeight:"700"},children:[Object(f.m)(Z.toString())," ETH"]})," ","back to your wallet for unavailable items."]}),Object(v.jsxs)(h.b,{display:"flex",flexWrap:"wrap",bottom:"24",width:"full",alignSelf:"flex-end",position:{sm:"absolute",md:"static"},children:[Object(v.jsxs)("p",{className:T,style:{marginBottom:"2px"},children:[Object(f.m)(Z.toString())," ETH"]}),Object(v.jsx)("p",{className:_,children:Object(f.n)(K)}),Object(v.jsxs)("p",{className:T,style:{width:"100%"},children:["for ",Y.length," unavailable item",1===Y.length?"":"s","."]}),Object(v.jsx)(h.b,{position:{sm:"absolute",md:"relative"},right:{sm:"0",md:"auto"},bottom:{sm:"0",md:"auto"},justifyContent:{sm:"flex-end",md:"flex-start"},textAlign:{sm:"right",md:"left"},flexShrink:"0",marginRight:{sm:"40",md:"24"},width:{sm:"half",md:"auto"},children:Object(v.jsx)("a",{href:H,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:Object(v.jsx)(h.b,{fontWeight:"normal",marginTop:"16",color:"textSecondary",className:T,children:"View on Etherscan"})})})]})]}),Object(v.jsx)(h.b,{className:"hwks9j10 rgw6ez1lm rgw6ez1lg rgw6ez1dg rgw6ez1da rgw6ez4r6 rgw6ez8ah rgw6ez4uh rgw6ez4s5 rgw6ez2qv",children:Y.map((function(e,r){return Object(v.jsx)(h.b,{display:"flex",flexWrap:"wrap",height:"min",width:"52",children:Object(v.jsx)("img",{className:"hwks9j12 rgw6ez1i4 rgw6ez1a5 rgw6ez7zh rgw6ezul rgw6ezhd",src:e.imageUrl,alt:e.name},r)},r)}))}),Object(v.jsx)(h.b,{className:"hwks9j14 rgw6ez1dg rgw6ez1da rgw6eztm rgw6ez4au"})]})}):Object(v.jsx)(l.Trace,{name:w.NFTEventName.NFT_BUY_BAG_REFUNDED,properties:Object(c.a)({buy_quantity:0,fail_quantity:Y.length,refund_amount_usd:K},A),shouldLogImpression:!0,children:Object(v.jsxs)(h.b,{className:"hwks9j16 rgw6ez5dj rgw6ez801 rgw6ez4ry rgw6ez4r6 rgw6ez101 rgw6ez4tp rgw6eztm rgw6ezso rgw6ez3b2 rgw6ez1lm",onClick:m.b,children:[Object(v.jsx)(h.b,{marginLeft:"auto",marginRight:"auto",display:"flex",children:B===p.l.Success?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(z.F,{}),Object(v.jsx)("h1",{className:k,children:"Instant Refund"})]}):Object(v.jsx)("h1",{className:k,children:"Failed Transaction"})}),Object(v.jsxs)("p",{className:"hwks9j1c rgw6ez52p rgw6ezc4 rgw6eztm rgw6ez101 rgw6ez110",children:[B===p.l.Success&&"Selected item".concat(1===V.length?" is":"s are"," no longer available. Uniswap instantly refunded you for this incomplete transaction. "),Object(f.o)(Q)," was used for gas in attempt to complete this transaction. For support, please visit our ",Object(v.jsx)("a",{href:"https://discord.gg/FCfyBSbCU5",children:"Discord"})]}),Object(v.jsxs)(h.b,{className:"hwks9j1e rgw6ez1dg",children:[Y.length>=3&&Object(v.jsxs)(h.b,{className:"rgw6ez70p rgw6ez7zh rgw6ez4ry rgw6ez4r6 rgw6ez10m rgw6ezhd rgw6ez1i4 rgw6ez7y5",onClick:function(){F(!C)},children:[!C&&Object(v.jsx)(h.b,{paddingLeft:"20",paddingTop:"8",paddingBottom:"8",children:Y.slice(0,3).map((function(e,r){return Object(v.jsx)("img",{style:{zIndex:2-r},className:"hwks9j1j rgw6ez7zd rgw6ez1h5 rgw6ez196 rgw6ez4wt",src:e.imageUrl,alt:e.name},r)}))}),Object(v.jsxs)(h.b,{color:C?"textPrimary":"textSecondary",className:"hwks9j1l rgw6ez52v rgw6eze9 rgw6ezc4 rgw6ez32w rgw6ez2jn rgw6ez2qg",children:["Unavailable",Object(v.jsxs)(h.b,{className:"hwks9j1n rgw6eze9 rgw6ezbx rgw6ez4ry",children:[Y.length," item",1===Y.length?"":"s"]})]}),Object(v.jsx)(z.r,{className:"".concat(!C&&"hwks9j1t"," ").concat("hwks9j1s rgw6ezn7 rgw6eznl rgw6ez101 rgw6ez1g6 rgw6ez187")})]}),(C||Y.length<3)&&Y.map((function(e,r){return Object(v.jsxs)(h.b,{backgroundColor:"backgroundSurface",display:"flex",padding:"4",marginBottom:"1",borderRadius:"8",children:[Object(v.jsx)(h.b,{className:"hwks9j1o",children:Object(v.jsx)("img",{className:"hwks9j1q rgw6ez7zd rgw6ez1me rgw6ez252 rgw6ez1ef rgw6ez1p4 rgw6ez4xe",src:e.imageUrl,alt:e.name})}),Object(v.jsxs)(h.b,{flexWrap:"wrap",marginTop:"4",children:[Object(v.jsx)(h.b,{marginLeft:"4",width:"full",display:"flex",children:Object(v.jsxs)("p",{className:T,style:{marginBottom:"2px"},children:[Object(f.m)(e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice)," ","ETH"]})}),Object(v.jsx)(h.b,{color:"textPrimary",className:_,children:B===p.l.Success?"Refunded":e.name})]})]},r)}))]}),C&&Object(v.jsx)(h.b,{className:"hwks9j1f"}),Object(v.jsxs)("p",{className:T,style:{marginBottom:"2px"},children:[Object(f.m)(Z.toString())," ETH"]}),Object(v.jsx)("p",{className:_,children:Object(f.n)(K)}),Object(v.jsx)(h.b,{className:"hwks9j9 rgw6ez52v rgw6ezbq rgw6ez4ry rgw6ez3k rgw6ez1lm rgw6ez3tc",marginLeft:"auto",marginRight:"0",children:Object(v.jsx)("a",{href:H,target:"_blank",rel:"noreferrer",children:Object(v.jsx)(h.b,{className:"hwks9jb rgw6ez52v rgw6ezbq rgw6eze9 rgw6ez110",children:"View on Etherscan"})})}),Object(v.jsxs)("p",{className:T,children:["for ",Y.length," unavailable item",1===Y.length?"":"s","."]}),Object(v.jsxs)(h.b,{as:"button",border:"none",backgroundColor:"accentAction",cursor:"pointer",className:"hwks9j18 rgw6ez1hc rgw6ez4tp rgw6ezeu rgw6ezc4 rgw6ez50d rgw6ez6yv rgw6ez4ry rgw6ez3k rgw6eztm rgw6ez101 rgw6ez11l",type:"button",onClick:function(){return $()},children:[Object(v.jsx)(z.h,{className:"rgw6ez7n1 rgw6ezoy rgw6ezwj"}),"Return to Marketplace"]})]})}))]})]})})}}}]);
//# sourceMappingURL=16.3ccf0233.chunk.js.map