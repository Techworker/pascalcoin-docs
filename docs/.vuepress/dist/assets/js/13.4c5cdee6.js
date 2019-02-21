(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{191:function(a,e,t){"use strict";t.r(e);var n=t(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"pip-0006-salvage-orphaned-transactions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pip-0006-salvage-orphaned-transactions","aria-hidden":"true"}},[a._v("#")]),a._v(" PIP-0006: Salvage orphaned transactions")]),a._v(" "),t("pre",[a._v("  PIP: 6\n  Title: Salvage orphaned transactions\n  Type: Backend \n  Impact: None\n  Author: Herman Schoenfeld "),t("i",[a._v("<herman@sphere10.com>")]),a._v("\n  Comments-URI: N/A\n  Status: Active\n  Created: 2017-05-01\n")]),a._v(" "),t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[a._v("#")]),a._v(" Summary")]),a._v(" "),t("p",[a._v("When a block is orphaned, it's containing transactions should be re-added back to the Pending Pool and relayed to connected nodes. This ensures that operations never disappear from the blockchain once re-added, since they will be re-mined in future blocks when orphaned.")]),a._v(" "),t("h2",{attrs:{id:"motivation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivation","aria-hidden":"true"}},[a._v("#")]),a._v(" Motivation")]),a._v(" "),t("p",[a._v("Many users have reported withdrawal transactions not being found in the PascalCoin blockchain. Whilst there could be many reasons for this, it is currently possible for operations to go missing in PascalCoin since this PIP functionality is not currently implemented.")]),a._v(" "),t("h2",{attrs:{id:"specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specification","aria-hidden":"true"}},[a._v("#")]),a._v(" Specification")]),a._v(" "),t("p",[a._v("When orphaning a set of blocks, the following additional steps should occur:")]),a._v(" "),t("ul",[t("li",[a._v("Let Old = all operations from the set of orphaned blocks")]),a._v(" "),t("li",[a._v("Let New = all operations from set of replacement blocks")]),a._v(" "),t("li",[a._v("Let Orphans = New SET-SUBTRACTION Old")]),a._v(" "),t("li",[a._v("For each operation x in Orphans\n"),t("ul",[t("li",[a._v("add x to the local nodes pending pool")]),a._v(" "),t("li",[a._v("notify all connected nodes of x")])])])]),a._v(" "),t("h2",{attrs:{id:"rationale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rationale","aria-hidden":"true"}},[a._v("#")]),a._v(" Rationale")]),a._v(" "),t("p",[a._v("This functionality is standard across cryptocurrencies and should be present in PascalCoin.")]),a._v(" "),t("h2",{attrs:{id:"reference-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation","aria-hidden":"true"}},[a._v("#")]),a._v(" Reference Implementation")]),a._v(" "),t("p",[a._v("This PIP has been implemented in V2 by Albert Molina.")]),a._v(" "),t("h2",{attrs:{id:"backwards-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility","aria-hidden":"true"}},[a._v("#")]),a._v(" Backwards Compatibility")]),a._v(" "),t("p",[a._v("Changes all fully backwards compatible.")])])}],!1,null,null,null);e.default=i.exports}}]);