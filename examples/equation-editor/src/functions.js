// Copyright 2018 Quip

// Scraped from https://khan.github.io/KaTeX/function-support.html
// using this script in the JS console (and then cleaned up by hand)
//
// var groups = {};
// var currentGroup;
//
// document.querySelectorAll("td,h2,h3").forEach(node => {
//     if (node.nodeName == "H2" || node.nodeName == "H3") {
//         currentGroup = [];
//         groups[node.textContent] = currentGroup;
//     } else if (node.nodeName == "TD" && !node.querySelector(".katex") ) {
//         currentGroup.push(node.textContent.trim());
//     }
// });
//
// copy(JSON.stringify(groups, undefined, 2));

class Groups {
    constructor(...groups) {
        this.groups = groups;
    }
}

class Group {
    constructor(label, gridSize, expressions) {
        this.label = label;
        this.gridSize = gridSize;
        this.expressions = expressions.map(e => {
            var help;
            if (e instanceof Array) {
                [e, help] = e;
            }
            return new Expression(e, help);
        });
    }
}

class Expression {
    constructor(expression, help) {
        this.expression = expression;
        this.help = help;
    }
}

export default new Groups(
  new Group("Accents", 50, [
    "a'",
    "a''",
    "a^{\\prime}",
    "\\acute{a}",
    "\\bar{y}",
    "\\breve{a}",
    "\\check{a}",
    "\\dot{a}",
    "\\ddot{a}",
    "\\grave{a}",
    "\\hat{\\theta}",
    "\\tilde{a}",
    "\\vec{F}",
    "\\overline{AB}",
    "\\underline{AB}",
  ]),
  new Group("Delimiters", 50, [
    "( )",
    "[ ]",
    "\\{\\,\\}",
    "\\langle\\rangle",
    "|",
    "\\|",
    "\\lvert\\rvert",
    "\\lVert\\rVert",
    "\\vert",
    "\\Vert",
    "\\lgroup\\rgroup",
    "\\lbrack\\rbrack",
    "\\lbrace\\rbrace",
    "\\lceil\\rceil",
    "\\lfloor\\rfloor",
    "\\ulcorner\\urcorner",
    "\\lt\\gt",
    "\\llcorner\\lrcorner",
    "\\backslash",
    "\\lmoustache\\rmoustache",
    "\\uparrow",
    "\\downarrow",
    "\\updownarrow",
    "\\Uparrow",
    "\\Downarrow",
    "\\Updownarrow",
    "\\left.",
    "\\right."
  ]),
  new Group("Delimiter Sizing", 50, [
    "\\left( \\LARGE{AB} \\right)",
    "( \\big( \\Big( \\bigg( \\Bigg(",
    "\\left",
    "\\middle",
    "\\right",
    "\\big",
    "\\Big",
    "\\bigg",
    "\\Bigg",
    "\\bigl",
    "\\Bigl",
    "\\biggl",
    "\\Biggl",
    "\\bigr",
    "\\Bigr",
    "\\biggr",
    "\\Biggr"
  ]),
  new Group("Environments", 100, [
    "\\begin{matrix}\n   a & b \\\\\n   c & d\n\\end{matrix}",
    "\\begin{pmatrix}\n   a & b \\\\\n   c & d\n\\end{pmatrix}",
    "\\begin{bmatrix}\n   a & b \\\\\n   c & d\n\\end{bmatrix}",
    "\\begin{vmatrix}\n   a & b \\\\\n   c & d\n\\end{vmatrix}",
    "\\begin{Vmatrix}\n   a & b \\\\\n   c & d\n\\end{Vmatrix}",
    "\\begin{Bmatrix}\n   a & b \\\\\n   c & d\n\\end{Bmatrix}",
    "\\begin{array}{c|c}\n   a & b \\\\\n   c & d\n\\end{array}",
    "x = \\begin{cases}\n   a &\\text{if } b  \\\\\n   c &\\text{if } d\n\\end{cases}",
    "\\begin{aligned}\n   a&=b+c \\\\\n   d+e&=f\n\\end{aligned}"
  ]),
  new Group("Greek Letters", 50, [
    "\\Gamma",
    "\\Delta",
    "\\Theta",
    "\\Lambda",
    "\\Xi",
    "\\Pi",
    "\\Sigma",
    "\\Upsilon",
    "\\Phi",
    "\\Psi",
    "\\Omega",
    "\\alpha",
    "\\beta",
    "\\gamma",
    "\\delta",
    "\\epsilon",
    "\\zeta",
    "\\eta",
    "\\theta",
    "\\iota",
    "\\kappa",
    "\\lambda",
    "\\mu",
    "\\nu",
    "\\xi",
    "\\omicron",
    "\\pi",
    "\\rho",
    "\\sigma",
    "\\tau",
    "\\upsilon",
    "\\phi",
    "\\chi",
    "\\psi",
    "\\omega",
    "\\varepsilon",
    "\\varkappa",
    "\\vartheta",
    "\\varpi",
    "\\varrho",
    "\\varsigma",
    "\\varphi",
    "\\digamma"
  ]),
  new Group("Other Letters", 50, [
    "\\imath",
    "\\jmath",
    "\\aleph",
    "\\beth",
    "\\gimel",
    "\\daleth",
    "\\eth",
    "\\Finv",
    "\\Game",
    "\\ell",
    "\\hbar",
    "\\hslash",
    "\\Im",
    "\\Re",
    "\\wp",
    "\\partial",
    "\\nabla",
  ]),
  new Group("Overlap", 50, [
    "{=}\\llap{/\\,}",
    "\\rlap{\\,/}{=}"
  ]),
  new Group("Spacing", 50, [
    ["\\!", "– ³∕₁₈ em space"],
    ["\\,", "³∕₁₈ em space"],
    ["\\:", "⁴∕₁₈ em space"],
    ["\\;", "⁵∕₁₈ em space"],
    ["\\enspace", "½ em space"],
    ["\\quad", "1 em space"],
    ["\\qquad", "2 em space"],
    ["~", "non-breaking space"],
    ["\\space", "non-breaking space"],
    ["\\phantom{content}", "space the width and height of content"],
    ["\\kern{1em}", "space, width = distance Accepts em, ex, or mu units."]
  ]),
  new Group("Vertical Layout", 50, [
    "x_n",
    "\\stackrel{!}{=}",
    "e^x",
    "\\overset{!}{=}",
    "\\underset{!}{=}",
    "_u^o",
    "a \\atop b",
  ]),
  new Group("Logic and Set Theory", 50, [
    "\\forall",
    "\\complement",
    "\\therefore",
    "\\neg or \\lnot",
    "\\exists",
    "\\subset",
    "\\because",
    "\\emptyset or \\varnothing",
    "\\nexists",
    "\\supset",
    "\\mapsto",
    "\\in",
    "\\mid",
    "\\to",
    "\\implies",
    "\\notin",
    "\\land",
    "\\gets",
    "\\impliedby",
    "\\ni",
    "\\lor",
    "\\leftrightarrow",
    "\\iff"
  ]),
  new Group("Big Operators", 50, [
    "\\sum",
    "\\prod",
    "\\bigvee",
    "\\bigotimes",
    "\\int",
    "\\coprod",
    "\\bigwedge",
    "\\bigoplus",
    "\\iint",
    "\\intop",
    "\\bigcap",
    "\\bigodot",
    "\\iiint",
    "\\smallint",
    "\\bigcup",
    "\\biguplus",
    "\\oint",
    "\\bigsqcup",
  ]),
  new Group("Binary Operators", 50, [
    "+",
    "-",
    "⋅",
    "/",
    "*",
    "\\cdotp",
    "\\intercal",
    "\\centerdot",
    "\\land",
    "\\rhd",
    "\\circ",
    "\\leftthreetimes",
    "\\rightthreetimes",
    "\\circledast",
    "\\ldotp",
    "\\rtimes",
    "\\amalg",
    "\\circledcirc",
    "\\lor",
    "\\setminus",
    "\\ast",
    "\\circleddash",
    "\\lessdot",
    "\\smallsetminus",
    "\\barwedge",
    "\\Cup",
    "\\lhd",
    "\\sqcap",
    "\\bigcirc",
    "\\cup",
    "\\ltimes",
    "\\sqcup",
    "\\bmod",
    "\\curlyvee",
    "\\mod",
    "\\times",
    "\\boxdot",
    "\\curlywedge",
    "\\mp",
    "\\unlhd",
    "\\boxminus",
    "\\div",
    "\\odot",
    "\\unrhd",
    "\\boxplus",
    "\\divideontimes",
    "\\ominus",
    "\\uplus",
    "\\boxtimes",
    "\\dotplus",
    "\\oplus",
    "\\vee",
    "\\bullet",
    "\\doublebarwedge",
    "\\otimes",
    "\\veebar",
    "\\Cap",
    "\\doublecap",
    "\\oslash",
    "\\wedge",
    "\\cap",
    "\\doublecup",
    "\\pm",
    "\\wr",
    "\\cdot",
    "\\gtrdot",
    "x \\pod a",
    "x \\pmod a"
  ]),
  new Group("Binomial Coefficients", 50, [
    "\\binom{n}{k}",
    "\\dbinom{n}{k}",
    "\\left\\langlen \\atop k\\right\\rangle",
    "{n}\\choose{k}",
    "\\tbinom{n}{k}",
  ]),
  new Group("Fractions", 50, [
    "\\frac{a}{b}",
    "\\dfrac{a}{b}",
    "{a}/{b}",
    "{a}\\over{b}",
    "\\tfrac{a}{b}",
  ]),
  new Group("Math Operators", 50, [
    "\\arcsin",
    "\\cotg",
    "\\ln",
    "\\det",
    "\\arccos",
    "\\coth",
    "\\log",
    "\\gcd",
    "\\arctan",
    "\\csc",
    "\\sec",
    "\\inf",
    "\\arctg",
    "\\ctg",
    "\\sin",
    "\\lim",
    "\\arcctg",
    "\\cth",
    "\\sinh",
    "\\liminf",
    "\\arg",
    "\\deg",
    "\\sh",
    "\\limsup",
    "\\ch",
    "\\dim",
    "\\tan",
    "\\max",
    "\\cos",
    "\\exp",
    "\\tanh",
    "\\min",
    "\\cosec",
    "\\hom",
    "\\tg",
    "\\Pr",
    "\\cosh",
    "\\ker",
    "\\th",
    "\\sup",
    "\\cot",
    "\\lg",
  ]),
  new Group("Sqrt", 50, [
    "\\sqrt{x}",
    "\\sqrt[3]{x}"
  ]),
  new Group("Relations", 50, [
    "=",
    "<",
    ">",
    ":",
    "\\approx",
    "\\approxeq",
    "\\asymp",
    "\\backepsilon",
    "\\backsim",
    "\\backsimeq",
    "\\between",
    "\\bowtie",
    "\\bumpeq",
    "\\Bumpeq",
    "\\circeq",
    "\\cong",
    "\\curlyeqprec",
    "\\curlyeqsucc",
    "\\dashv",
    "\\doteq",
    "\\Doteq",
    "\\doteqdot",
    "\\eqcirc",
    "\\eqsim",
    "\\eqslantgtr",
    "\\eqslantless",
    "\\equiv",
    "\\fallingdotseq",
    "\\frown",
    "\\ge",
    "\\geq",
    "\\geqq",
    "\\geqslant",
    "\\gg",
    "\\ggg",
    "\\gggtr",
    "\\gt",
    "\\gtrapprox",
    "\\gtreqless",
    "\\gtreqqless",
    "\\gtrless",
    "\\gtrsim",
    "\\in",
    "\\Join",
    "\\le",
    "\\leq",
    "\\leqq",
    "\\leqslant",
    "\\lessapprox",
    "\\lesseqgtr",
    "\\lesseqqgtr",
    "\\lessgtr",
    "\\lesssim",
    "\\ll",
    "\\lll",
    "\\llless",
    "\\lt",
    "\\mid",
    "\\models",
    "\\multimap",
    "\\owns",
    "\\parallel",
    "\\perp",
    "\\pitchfork",
    "\\prec",
    "\\precapprox",
    "\\preccurlyeq",
    "\\preceq",
    "\\precsim",
    "\\propto",
    "\\risingdotseq",
    "\\shortmid",
    "\\shortparallel",
    "\\sim",
    "\\simeq",
    "\\smallfrown",
    "\\smallsmile",
    "\\smile",
    "\\sqsubset",
    "\\sqsubseteq",
    "\\sqsupset",
    "\\sqsupseteq",
    "\\subset",
    "\\Subset",
    "\\subseteq",
    "\\subseteqq",
    "\\succ",
    "\\succapprox",
    "\\succcurlyeq",
    "\\succeq",
    "\\succsim",
    "\\supset",
    "\\Supset",
    "\\supseteq",
    "\\supseteqq",
    "\\thickapprox",
    "\\thicksim",
    "\\trianglelefteq",
    "\\triangleq",
    "\\trianglerighteq",
    "\\varpropto",
    "\\vartriangle",
    "\\vartriangleleft",
    "\\vartriangleright",
    "\\vdash",
    "\\vDash",
    "\\Vdash",
    "\\Vvdash"
  ]),
  new Group("Negated Relations", 50, [
    "\\gnapprox",
    "\\gneq",
    "\\gneqq",
    "\\gnsim",
    "\\gvertneqq",
    "\\lnapprox",
    "\\lneq",
    "\\lneqq",
    "\\lnsim",
    "\\lvertneqq",
    "\\ncong",
    "\\ne",
    "\\neq",
    "\\ngeq",
    "\\ngeqq",
    "\\ngeqslant",
    "\\ngtr",
    "\\ni",
    "\\nleq",
    "\\nleqq",
    "\\nleqslant",
    "\\nless",
    "\\nmid",
    "\\notin",
    "\\nparallel",
    "\\nprec",
    "\\npreceq",
    "\\nshortmid",
    "\\nshortparallel",
    "\\nsim",
    "\\nsubseteq",
    "\\nsubseteqq",
    "\\nsucc",
    "\\nsucceq",
    "\\nsupseteq",
    "\\nsupseteqq",
    "\\ntriangleleft",
    "\\ntrianglelefteq",
    "\\ntriangleright",
    "\\ntrianglerighteq",
    "\\nvdash",
    "\\nvDash",
    "\\nVdash",
    "\\nVDash",
    "\\precnapprox",
    "\\precneqq",
    "\\precnsim",
    "\\subsetneq",
    "\\subsetneqq",
    "\\succnapprox",
    "\\succneqq",
    "\\succnsim",
    "\\supsetneq",
    "\\supsetneqq",
    "\\varsubsetneq",
    "\\varsubsetneqq",
    "\\varsupsetneq",
    "\\varsupsetneqq",
  ]),
  new Group("Arrows", 50, [
    "\\circlearrowleft",
    "\\circlearrowright",
    "\\curvearrowleft",
    "\\curvearrowright",
    "\\dashleftarrow",
    "\\dashrightarrow",
    "\\downarrow",
    "\\Downarrow",
    "\\downdownarrows",
    "\\downharpoonleft",
    "\\downharpoonright",
    "\\gets",
    "\\hookleftarrow",
    "\\hookrightarrow",
    "\\iff",
    "\\impliedby",
    "\\implies",
    "\\leadsto",
    "\\leftarrow",
    "\\Leftarrow",
    "\\leftarrowtail",
    "\\leftharpoondown",
    "\\leftharpoonup",
    "\\leftleftarrows",
    "\\leftrightarrow",
    "\\Leftrightarrow",
    "\\leftrightarrows",
    "\\leftrightharpoons",
    "\\leftrightsquigarrow",
    "\\Lleftarrow",
    "\\longleftarrow",
    "\\Longleftarrow",
    "\\longleftrightarrow",
    "\\Longleftrightarrow",
    "\\longmapsto",
    "\\longrightarrow",
    "\\Longrightarrow",
    "\\looparrowleft",
    "\\looparrowright",
    "\\Lsh",
    "\\mapsto",
    "\\nearrow",
    "\\nleftarrow",
    "\\nLeftarrow",
    "\\nleftrightarrow",
    "\\nLeftrightarrow",
    "\\nrightarrow",
    "\\nRightarrow",
    "\\nwarrow",
    "\\restriction",
    "\\rightarrow",
    "\\Rightarrow",
    "\\rightarrowtail",
    "\\rightharpoondown",
    "\\rightharpoonup",
    "\\rightleftarrows",
    "\\rightleftharpoons",
    "\\rightrightarrows",
    "\\rightsquigarrow",
    "\\Rrightarrow",
    "\\Rsh",
    "\\searrow",
    "\\swarrow",
    "\\to",
    "\\twoheadleftarrow",
    "\\twoheadrightarrow",
    "\\uparrow",
    "\\Uparrow",
    "\\updownarrow",
    "\\Updownarrow",
    "\\upharpoonleft",
    "\\upharpoonright",
    "\\upuparrows",
  ]),
  new Group("Class Assignment", 50, [
    "\\mathbin",
    "\\mathclose",
    "\\mathinner",
    "\\mathop",
    "\\mathopen",
    "\\mathord",
    "\\mathpunct",
    "\\mathrel"
  ]),
  new Group("Color", 80, [
    "\\color{blue}{F=ma}",
    "\\color{#228B22}{F=ma}"
  ]),
  new Group("Font", 50, [
    "\\mathrm{AB}",
    "\\mathbf{AB}",
    "\\mathit{AB}",
    "\\mathsf{AB}",
    "\\mathtt{AB}",
    "\\textrm{AB}",
    "\\textbf{AB}",
    "\\textit{AB}",
    "\\textsf{AB}",
    "\\texttt{AB}",
    "\\rm{AB}",
    "\\bf{AB}",
    "\\it{AB}",
    "\\sf{AB}",
    "\\tt{AB}",
    "\\textnormal{AB}",
    "\\bold{AB}",
    "\\Bbb{AB}",
    "\\frak{AB}",
    "\\text{AB}",
    "\\mathcal{AB}",
    "\\mathbb{AB}",
    "\\mathfrak{AB}",
    "\\mathscr{AB}"
  ]),
  new Group("Size", 100, [
    "\\Huge AB",
    "\\huge AB",
    "\\LARGE AB",
    "\\Large AB",
    "\\large AB",
    "\\normalsize AB",
    "\\small AB",
    "\\footnotesize AB",
    "\\scriptsize AB",
    "\\tiny AB"
  ]),
  new Group("Style", 60, [
    "\\displaystyle\\sum_{i=1}^n",
    "\\textstyle\\sum_{i=1}^n",
    ["\\scriptstyle x", "The size of a first sub/superscript"],
    ["\\scriptscriptstyle x", "The size of subsequent sub/superscripts"],
    "\\lim\\limits_x",
    "\\lim\\nolimits_x",
    ["\\text{x}", "\\text{…} will accept characters from Latin-1, Cyrillic, or CJK (Hiragana, Katakana, CJK ideograms, and Hangul)."]
  ]),
  new Group("Symbols and Punctuation", 50, [
    "---",
    "--",
    "\"",
    "`",
    "``",
    "\"",
    "\\_",
    "\\&",
    "\\#",
    "\\%",
    "\\$",
    "\\angle",
    "\\backprime",
    "\\bigstar",
    "\\bigtriangledown",
    "\\bigtriangleup",
    "\\blacklozenge",
    "\\blacksquare",
    "\\blacktriangle",
    "\\blacktriangledown",
    "\\blacktriangleleft",
    "\\blacktriangleright",
    "\\bot",
    "\\Box",
    "\\cdots",
    "\\checkmark",
    "\\circledR",
    "\\circledS",
    "\\clubsuit",
    "\\colon",
    "\\dag",
    "\\dagger",
    "\\ddag",
    "\\ddagger",
    "\\ddots",
    "\\degree",
    "\\diagdown",
    "\\diagup",
    "\\diamond",
    "\\Diamond",
    "\\diamondsuit",
    "\\flat",
    "\\heartsuit",
    "\\infty",
    "\\ldots",
    "\\lozenge",
    "\\maltese",
    "\\mathellipsis",
    "\\measuredangle",
    "\\mho",
    "\\nabla",
    "\\natural",
    "\\pounds",
    "\\prime",
    "\\sharp",
    "\\spadesuit",
    "\\sphericalangle",
    "\\square",
    "\\star",
    "\\surd",
   "\\textellipsis",
    "\\top",
    "\\triangle",
    "\\triangledown",
    "\\triangleleft",
    "\\triangleright",
    "\\vdots",
    "\\yen",
    "\\KaTeX",
  ])
);
