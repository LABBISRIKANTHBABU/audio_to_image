! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "42f0267f-a4a0-403e-9efd-527bf91c6659", t._sentryDebugIdIdentifier = "sentry-dbid-42f0267f-a4a0-403e-9efd-527bf91c6659")
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6801], {
        80219: function(t, e, i) {
            i.r(e), i.d(e, {
                Node: function() {
                    return ti
                },
                Parser: function() {
                    return F
                },
                Position: function() {
                    return R
                },
                SourceLocation: function() {
                    return O
                },
                TokContext: function() {
                    return ta
                },
                Token: function() {
                    return tA
                },
                TokenType: function() {
                    return x
                },
                defaultOptions: function() {
                    return D
                },
                getLineInfo: function() {
                    return B
                },
                isIdentifierChar: function() {
                    return m
                },
                isIdentifierStart: function() {
                    return f
                },
                isNewLine: function() {
                    return w
                },
                keywordTypes: function() {
                    return b
                },
                lineBreak: function() {
                    return C
                },
                lineBreakG: function() {
                    return S
                },
                nonASCIIwhitespace: function() {
                    return E
                },
                parse: function() {
                    return tL
                },
                parseExpressionAt: function() {
                    return tR
                },
                tokContexts: function() {
                    return tn
                },
                tokTypes: function() {
                    return k
                },
                tokenizer: function() {
                    return tO
                },
                version: function() {
                    return tV
                }
            });
            var s = {
                    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                    5: "class enum extends super const export import",
                    6: "enum",
                    strict: "implements interface let package private protected public static yield",
                    strictBind: "eval arguments"
                },
                r = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
                a = {
                    5: r,
                    "5module": r + " export import",
                    6: r + " const class extends export import super"
                },
                n = /^in(stanceof)?$/,
                o = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                h = "‌‍\xb7̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
                p = RegExp("[" + o + "]"),
                c = RegExp("[" + o + h + "]");
            o = h = null;
            var u = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
                l = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

            function d(t, e) {
                for (var i = 65536, s = 0; s < e.length; s += 2) {
                    if ((i += e[s]) > t) return !1;
                    if ((i += e[s + 1]) >= t) return !0
                }
            }

            function f(t, e) {
                return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && p.test(String.fromCharCode(t)) : !1 !== e && d(t, u)))
            }

            function m(t, e) {
                return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && c.test(String.fromCharCode(t)) : !1 !== e && (d(t, u) || d(t, l)))))
            }
            var x = function(t, e) {
                void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop || null, this.updateContext = null
            };

            function g(t, e) {
                return new x(t, {
                    beforeExpr: !0,
                    binop: e
                })
            }
            var v = {
                    beforeExpr: !0
                },
                y = {
                    startsExpr: !0
                },
                b = {};

            function _(t, e) {
                return void 0 === e && (e = {}), e.keyword = t, b[t] = new x(t, e)
            }
            var k = {
                    num: new x("num", y),
                    regexp: new x("regexp", y),
                    string: new x("string", y),
                    name: new x("name", y),
                    eof: new x("eof"),
                    bracketL: new x("[", {
                        beforeExpr: !0,
                        startsExpr: !0
                    }),
                    bracketR: new x("]"),
                    braceL: new x("{", {
                        beforeExpr: !0,
                        startsExpr: !0
                    }),
                    braceR: new x("}"),
                    parenL: new x("(", {
                        beforeExpr: !0,
                        startsExpr: !0
                    }),
                    parenR: new x(")"),
                    comma: new x(",", v),
                    semi: new x(";", v),
                    colon: new x(":", v),
                    dot: new x("."),
                    question: new x("?", v),
                    questionDot: new x("?."),
                    arrow: new x("=>", v),
                    template: new x("template"),
                    invalidTemplate: new x("invalidTemplate"),
                    ellipsis: new x("...", v),
                    backQuote: new x("`", y),
                    dollarBraceL: new x("${", {
                        beforeExpr: !0,
                        startsExpr: !0
                    }),
                    eq: new x("=", {
                        beforeExpr: !0,
                        isAssign: !0
                    }),
                    assign: new x("_=", {
                        beforeExpr: !0,
                        isAssign: !0
                    }),
                    incDec: new x("++/--", {
                        prefix: !0,
                        postfix: !0,
                        startsExpr: !0
                    }),
                    prefix: new x("!/~", {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0
                    }),
                    logicalOR: g("||", 1),
                    logicalAND: g("&&", 2),
                    bitwiseOR: g("|", 3),
                    bitwiseXOR: g("^", 4),
                    bitwiseAND: g("&", 5),
                    equality: g("==/!=/===/!==", 6),
                    relational: g("</>/<=/>=", 7),
                    bitShift: g("<</>>/>>>", 8),
                    plusMin: new x("+/-", {
                        beforeExpr: !0,
                        binop: 9,
                        prefix: !0,
                        startsExpr: !0
                    }),
                    modulo: g("%", 10),
                    star: g("*", 10),
                    slash: g("/", 10),
                    starstar: new x("**", {
                        beforeExpr: !0
                    }),
                    coalesce: g("??", 1),
                    _break: _("break"),
                    _case: _("case", v),
                    _catch: _("catch"),
                    _continue: _("continue"),
                    _debugger: _("debugger"),
                    _default: _("default", v),
                    _do: _("do", {
                        isLoop: !0,
                        beforeExpr: !0
                    }),
                    _else: _("else", v),
                    _finally: _("finally"),
                    _for: _("for", {
                        isLoop: !0
                    }),
                    _function: _("function", y),
                    _if: _("if"),
                    _return: _("return", v),
                    _switch: _("switch"),
                    _throw: _("throw", v),
                    _try: _("try"),
                    _var: _("var"),
                    _const: _("const"),
                    _while: _("while", {
                        isLoop: !0
                    }),
                    _with: _("with"),
                    _new: _("new", {
                        beforeExpr: !0,
                        startsExpr: !0
                    }),
                    _this: _("this", y),
                    _super: _("super", y),
                    _class: _("class", y),
                    _extends: _("extends", v),
                    _export: _("export"),
                    _import: _("import", y),
                    _null: _("null", y),
                    _true: _("true", y),
                    _false: _("false", y),
                    _in: _("in", {
                        beforeExpr: !0,
                        binop: 7
                    }),
                    _instanceof: _("instanceof", {
                        beforeExpr: !0,
                        binop: 7
                    }),
                    _typeof: _("typeof", {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0
                    }),
                    _void: _("void", {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0
                    }),
                    _delete: _("delete", {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0
                    })
                },
                C = /\r\n?|\n|\u2028|\u2029/,
                S = RegExp(C.source, "g");

            function w(t, e) {
                return 10 === t || 13 === t || !e && (8232 === t || 8233 === t)
            }
            var E = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                A = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                I = Object.prototype,
                P = I.hasOwnProperty,
                T = I.toString;

            function N(t, e) {
                return P.call(t, e)
            }
            var V = Array.isArray || function(t) {
                return "[object Array]" === T.call(t)
            };

            function L(t) {
                return RegExp("^(?:" + t.replace(/ /g, "|") + ")$")
            }
            var R = function(t, e) {
                this.line = t, this.column = e
            };
            R.prototype.offset = function(t) {
                return new R(this.line, this.column + t)
            };
            var O = function(t, e, i) {
                this.start = e, this.end = i, null !== t.sourceFile && (this.source = t.sourceFile)
            };

            function B(t, e) {
                for (var i = 1, s = 0;;) {
                    S.lastIndex = s;
                    var r = S.exec(t);
                    if (!r || !(r.index < e)) return new R(i, e - s);
                    ++i, s = r.index + r[0].length
                }
            }
            var D = {
                ecmaVersion: 10,
                sourceType: "script",
                onInsertedSemicolon: null,
                onTrailingComma: null,
                allowReserved: null,
                allowReturnOutsideFunction: !1,
                allowImportExportEverywhere: !1,
                allowAwaitOutsideFunction: !1,
                allowHashBang: !1,
                locations: !1,
                onToken: null,
                onComment: null,
                ranges: !1,
                program: null,
                sourceFile: null,
                directSourceFile: null,
                preserveParens: !1
            };

            function M(t, e) {
                return 2 | (t ? 4 : 0) | (e ? 8 : 0)
            }
            var F = function(t, e, i) {
                    this.options = t = function(t) {
                        var e, i = {};
                        for (var s in D) i[s] = t && N(t, s) ? t[s] : D[s];
                        if (i.ecmaVersion >= 2015 && (i.ecmaVersion -= 2009), null == i.allowReserved && (i.allowReserved = i.ecmaVersion < 5), V(i.onToken)) {
                            var r = i.onToken;
                            i.onToken = function(t) {
                                return r.push(t)
                            }
                        }
                        return V(i.onComment) && (i.onComment = (e = i.onComment, function(t, s, r, a, n, o) {
                            var h = {
                                type: t ? "Block" : "Line",
                                value: s,
                                start: r,
                                end: a
                            };
                            i.locations && (h.loc = new O(this, n, o)), i.ranges && (h.range = [r, a]), e.push(h)
                        })), i
                    }(t), this.sourceFile = t.sourceFile, this.keywords = L(a[t.ecmaVersion >= 6 ? 6 : "module" === t.sourceType ? "5module" : 5]);
                    var r = "";
                    if (!0 !== t.allowReserved) {
                        for (var n = t.ecmaVersion; !(r = s[n]); n--);
                        "module" === t.sourceType && (r += " await")
                    }
                    this.reservedWords = L(r);
                    var o = (r ? r + " " : "") + s.strict;
                    this.reservedWordsStrict = L(o), this.reservedWordsStrictBind = L(o + " " + s.strictBind), this.input = String(e), this.containsEsc = !1, i ? (this.pos = i, this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(C).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = k.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === t.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = {}, 0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null
                },
                U = {
                    inFunction: {
                        configurable: !0
                    },
                    inGenerator: {
                        configurable: !0
                    },
                    inAsync: {
                        configurable: !0
                    },
                    allowSuper: {
                        configurable: !0
                    },
                    allowDirectSuper: {
                        configurable: !0
                    },
                    treatFunctionsAsVar: {
                        configurable: !0
                    }
                };
            F.prototype.parse = function() {
                var t = this.options.program || this.startNode();
                return this.nextToken(), this.parseTopLevel(t)
            }, U.inFunction.get = function() {
                return (2 & this.currentVarScope().flags) > 0
            }, U.inGenerator.get = function() {
                return (8 & this.currentVarScope().flags) > 0
            }, U.inAsync.get = function() {
                return (4 & this.currentVarScope().flags) > 0
            }, U.allowSuper.get = function() {
                return (64 & this.currentThisScope().flags) > 0
            }, U.allowDirectSuper.get = function() {
                return (128 & this.currentThisScope().flags) > 0
            }, U.treatFunctionsAsVar.get = function() {
                return this.treatFunctionsAsVarInScope(this.currentScope())
            }, F.prototype.inNonArrowFunction = function() {
                return (2 & this.currentThisScope().flags) > 0
            }, F.extend = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                for (var i = this, s = 0; s < t.length; s++) i = t[s](i);
                return i
            }, F.parse = function(t, e) {
                return new this(e, t).parse()
            }, F.parseExpressionAt = function(t, e, i) {
                var s = new this(i, t, e);
                return s.nextToken(), s.parseExpression()
            }, F.tokenizer = function(t, e) {
                return new this(e, t)
            }, Object.defineProperties(F.prototype, U);
            var q = F.prototype,
                G = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;

            function H() {
                this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
            }
            q.strictDirective = function(t) {
                for (;;) {
                    A.lastIndex = t, t += A.exec(this.input)[0].length;
                    var e = G.exec(this.input.slice(t));
                    if (!e) return !1;
                    if ("use strict" === (e[1] || e[2])) {
                        A.lastIndex = t + e[0].length;
                        var i = A.exec(this.input),
                            s = i.index + i[0].length,
                            r = this.input.charAt(s);
                        return ";" === r || "}" === r || C.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || "!" === r && "=" === this.input.charAt(s + 1))
                    }
                    t += e[0].length, A.lastIndex = t, t += A.exec(this.input)[0].length, ";" === this.input[t] && t++
                }
            }, q.eat = function(t) {
                return this.type === t && (this.next(), !0)
            }, q.isContextual = function(t) {
                return this.type === k.name && this.value === t && !this.containsEsc
            }, q.eatContextual = function(t) {
                return !!this.isContextual(t) && (this.next(), !0)
            }, q.expectContextual = function(t) {
                this.eatContextual(t) || this.unexpected()
            }, q.canInsertSemicolon = function() {
                return this.type === k.eof || this.type === k.braceR || C.test(this.input.slice(this.lastTokEnd, this.start))
            }, q.insertSemicolon = function() {
                if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
            }, q.semicolon = function() {
                this.eat(k.semi) || this.insertSemicolon() || this.unexpected()
            }, q.afterTrailingComma = function(t, e) {
                if (this.type === t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0
            }, q.expect = function(t) {
                this.eat(t) || this.unexpected()
            }, q.unexpected = function(t) {
                this.raise(null != t ? t : this.start, "Unexpected token")
            }, q.checkPatternErrors = function(t, e) {
                if (t) {
                    t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
                    var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
                    i > -1 && this.raiseRecoverable(i, "Parenthesized pattern")
                }
            }, q.checkExpressionErrors = function(t, e) {
                if (!t) return !1;
                var i = t.shorthandAssign,
                    s = t.doubleProto;
                if (!e) return i >= 0 || s >= 0;
                i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property")
            }, q.checkYieldAwaitInDefaultParams = function() {
                this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
            }, q.isSimpleAssignTarget = function(t) {
                return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type
            };
            var W = F.prototype;
            W.parseTopLevel = function(t) {
                var e = {};
                for (t.body || (t.body = []); this.type !== k.eof;) {
                    var i = this.parseStatement(null, !0, e);
                    t.body.push(i)
                }
                if (this.inModule)
                    for (var s = 0, r = Object.keys(this.undefinedExports); s < r.length; s += 1) {
                        var a = r[s];
                        this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined")
                    }
                return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program")
            };
            var j = {
                    kind: "loop"
                },
                z = {
                    kind: "switch"
                };
            W.isLet = function(t) {
                if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
                A.lastIndex = this.pos;
                var e = A.exec(this.input),
                    i = this.pos + e[0].length,
                    s = this.input.charCodeAt(i);
                if (91 === s) return !0;
                if (t) return !1;
                if (123 === s) return !0;
                if (f(s, !0)) {
                    for (var r = i + 1; m(this.input.charCodeAt(r), !0);) ++r;
                    var a = this.input.slice(i, r);
                    if (!n.test(a)) return !0
                }
                return !1
            }, W.isAsyncFunction = function() {
                if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
                A.lastIndex = this.pos;
                var t = A.exec(this.input),
                    e = this.pos + t[0].length;
                return !C.test(this.input.slice(this.pos, e)) && "function" === this.input.slice(e, e + 8) && (e + 8 === this.input.length || !m(this.input.charAt(e + 8)))
            }, W.parseStatement = function(t, e, i) {
                var s, r = this.type,
                    a = this.startNode();
                switch (this.isLet(t) && (r = k._var, s = "let"), r) {
                    case k._break:
                    case k._continue:
                        return this.parseBreakContinueStatement(a, r.keyword);
                    case k._debugger:
                        return this.parseDebuggerStatement(a);
                    case k._do:
                        return this.parseDoStatement(a);
                    case k._for:
                        return this.parseForStatement(a);
                    case k._function:
                        return t && (this.strict || "if" !== t && "label" !== t) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(a, !1, !t);
                    case k._class:
                        return t && this.unexpected(), this.parseClass(a, !0);
                    case k._if:
                        return this.parseIfStatement(a);
                    case k._return:
                        return this.parseReturnStatement(a);
                    case k._switch:
                        return this.parseSwitchStatement(a);
                    case k._throw:
                        return this.parseThrowStatement(a);
                    case k._try:
                        return this.parseTryStatement(a);
                    case k._const:
                    case k._var:
                        return s = s || this.value, t && "var" !== s && this.unexpected(), this.parseVarStatement(a, s);
                    case k._while:
                        return this.parseWhileStatement(a);
                    case k._with:
                        return this.parseWithStatement(a);
                    case k.braceL:
                        return this.parseBlock(!0, a);
                    case k.semi:
                        return this.parseEmptyStatement(a);
                    case k._export:
                    case k._import:
                        if (this.options.ecmaVersion > 10 && r === k._import) {
                            A.lastIndex = this.pos;
                            var n = A.exec(this.input),
                                o = this.pos + n[0].length,
                                h = this.input.charCodeAt(o);
                            if (40 === h || 46 === h) return this.parseExpressionStatement(a, this.parseExpression())
                        }
                        return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === k._import ? this.parseImport(a) : this.parseExport(a, i);
                    default:
                        if (this.isAsyncFunction()) return t && this.unexpected(), this.next(), this.parseFunctionStatement(a, !0, !t);
                        var p = this.value,
                            c = this.parseExpression();
                        if (r === k.name && "Identifier" === c.type && this.eat(k.colon)) return this.parseLabeledStatement(a, p, c, t);
                        return this.parseExpressionStatement(a, c)
                }
            }, W.parseBreakContinueStatement = function(t, e) {
                var i = "break" === e;
                this.next(), this.eat(k.semi) || this.insertSemicolon() ? t.label = null : this.type !== k.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
                for (var s = 0; s < this.labels.length; ++s) {
                    var r = this.labels[s];
                    if ((null == t.label || r.name === t.label.name) && (null != r.kind && (i || "loop" === r.kind) || t.label && i)) break
                }
                return s === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, i ? "BreakStatement" : "ContinueStatement")
            }, W.parseDebuggerStatement = function(t) {
                return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement")
            }, W.parseDoStatement = function(t) {
                return this.next(), this.labels.push(j), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(k._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(k.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement")
            }, W.parseForStatement = function(t) {
                this.next();
                var e = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
                if (this.labels.push(j), this.enterScope(0), this.expect(k.parenL), this.type === k.semi) return e > -1 && this.unexpected(e), this.parseFor(t, null);
                var i = this.isLet();
                if (this.type === k._var || this.type === k._const || i) {
                    var s = this.startNode(),
                        r = i ? "let" : this.value;
                    return (this.next(), this.parseVar(s, !0, r), this.finishNode(s, "VariableDeclaration"), (this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === s.declarations.length) ? (this.options.ecmaVersion >= 9 && (this.type === k._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.parseForIn(t, s)) : (e > -1 && this.unexpected(e), this.parseFor(t, s))
                }
                var a = new H,
                    n = this.parseExpression(!0, a);
                return this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === k._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.toAssignable(n, !1, a), this.checkLVal(n), this.parseForIn(t, n)) : (this.checkExpressionErrors(a, !0), e > -1 && this.unexpected(e), this.parseFor(t, n))
            }, W.parseFunctionStatement = function(t, e, i) {
                return this.next(), this.parseFunction(t, K | (i ? 0 : X), !1, e)
            }, W.parseIfStatement = function(t) {
                return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(k._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement")
            }, W.parseReturnStatement = function(t) {
                return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(k.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement")
            }, W.parseSwitchStatement = function(t) {
                this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(k.braceL), this.labels.push(z), this.enterScope(0);
                for (var e, i = !1; this.type !== k.braceR;)
                    if (this.type === k._case || this.type === k._default) {
                        var s = this.type === k._case;
                        e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), s ? e.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, e.test = null), this.expect(k.colon)
                    } else e || this.unexpected(), e.consequent.push(this.parseStatement(null));
                return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement")
            }, W.parseThrowStatement = function(t) {
                return this.next(), C.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement")
            };
            var Q = [];
            W.parseTryStatement = function(t) {
                if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === k._catch) {
                    var e = this.startNode();
                    if (this.next(), this.eat(k.parenL)) {
                        e.param = this.parseBindingAtom();
                        var i = "Identifier" === e.param.type;
                        this.enterScope(i ? 32 : 0), this.checkLVal(e.param, i ? 4 : 2), this.expect(k.parenR)
                    } else this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0);
                    e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause")
                }
                return t.finalizer = this.eat(k._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement")
            }, W.parseVarStatement = function(t, e) {
                return this.next(), this.parseVar(t, !1, e), this.semicolon(), this.finishNode(t, "VariableDeclaration")
            }, W.parseWhileStatement = function(t) {
                return this.next(), t.test = this.parseParenExpression(), this.labels.push(j), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement")
            }, W.parseWithStatement = function(t) {
                return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement")
            }, W.parseEmptyStatement = function(t) {
                return this.next(), this.finishNode(t, "EmptyStatement")
            }, W.parseLabeledStatement = function(t, e, i, s) {
                for (var r = 0, a = this.labels; r < a.length; r += 1) a[r].name === e && this.raise(i.start, "Label '" + e + "' is already declared");
                for (var n = this.type.isLoop ? "loop" : this.type === k._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
                    var h = this.labels[o];
                    if (h.statementStart === t.start) h.statementStart = this.start, h.kind = n;
                    else break
                }
                return this.labels.push({
                    name: e,
                    kind: n,
                    statementStart: this.start
                }), t.body = this.parseStatement(s ? -1 === s.indexOf("label") ? s + "label" : s : "label"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement")
            }, W.parseExpressionStatement = function(t, e) {
                return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement")
            }, W.parseBlock = function(t, e, i) {
                for (void 0 === t && (t = !0), void 0 === e && (e = this.startNode()), e.body = [], this.expect(k.braceL), t && this.enterScope(0); this.type !== k.braceR;) {
                    var s = this.parseStatement(null);
                    e.body.push(s)
                }
                return i && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement")
            }, W.parseFor = function(t, e) {
                return t.init = e, this.expect(k.semi), t.test = this.type === k.semi ? null : this.parseExpression(), this.expect(k.semi), t.update = this.type === k.parenR ? null : this.parseExpression(), this.expect(k.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement")
            }, W.parseForIn = function(t, e) {
                var i = this.type === k._in;
                return this.next(), "VariableDeclaration" === e.type && null != e.declarations[0].init && (!i || this.options.ecmaVersion < 8 || this.strict || "var" !== e.kind || "Identifier" !== e.declarations[0].id.type) ? this.raise(e.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer") : "AssignmentPattern" === e.type && this.raise(e.start, "Invalid left-hand side in for-loop"), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(k.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement")
            }, W.parseVar = function(t, e, i) {
                for (t.declarations = [], t.kind = i;;) {
                    var s = this.startNode();
                    if (this.parseVarId(s, i), this.eat(k.eq) ? s.init = this.parseMaybeAssign(e) : "const" !== i || this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" === s.id.type || e && (this.type === k._in || this.isContextual("of")) ? s.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(s, "VariableDeclarator")), !this.eat(k.comma)) break
                }
                return t
            }, W.parseVarId = function(t, e) {
                t.id = this.parseBindingAtom(), this.checkLVal(t.id, "var" === e ? 1 : 2, !1)
            };
            var K = 1,
                X = 2;
            W.parseFunction = function(t, e, i, s) {
                this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === k.star && e & X && this.unexpected(), t.generator = this.eat(k.star)), this.options.ecmaVersion >= 8 && (t.async = !!s), e & K && (t.id = 4 & e && this.type !== k.name ? null : this.parseIdent(), t.id && !(e & X) && this.checkLVal(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
                var r = this.yieldPos,
                    a = this.awaitPos,
                    n = this.awaitIdentPos;
                return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(M(t.async, t.generator)), e & K || (t.id = this.type === k.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i, !1), this.yieldPos = r, this.awaitPos = a, this.awaitIdentPos = n, this.finishNode(t, e & K ? "FunctionDeclaration" : "FunctionExpression")
            }, W.parseFunctionParams = function(t) {
                this.expect(k.parenL), t.params = this.parseBindingList(k.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
            }, W.parseClass = function(t, e) {
                this.next();
                var i = this.strict;
                this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
                var s = this.startNode(),
                    r = !1;
                for (s.body = [], this.expect(k.braceL); this.type !== k.braceR;) {
                    var a = this.parseClassElement(null !== t.superClass);
                    a && (s.body.push(a), "MethodDefinition" === a.type && "constructor" === a.kind && (r && this.raise(a.start, "Duplicate constructor in the same class"), r = !0))
                }
                return this.strict = i, this.next(), t.body = this.finishNode(s, "ClassBody"), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
            }, W.parseClassElement = function(t) {
                var e = this;
                if (this.eat(k.semi)) return null;
                var i = this.startNode(),
                    s = function(t, s) {
                        void 0 === s && (s = !1);
                        var r = e.start,
                            a = e.startLoc;
                        return !!e.eatContextual(t) && (!(e.type === k.parenL || s && e.canInsertSemicolon()) || (i.key && e.unexpected(), i.computed = !1, i.key = e.startNodeAt(r, a), i.key.name = t, e.finishNode(i.key, "Identifier"), !1))
                    };
                i.kind = "method", i.static = s("static");
                var r = this.eat(k.star),
                    a = !1;
                !r && (this.options.ecmaVersion >= 8 && s("async", !0) ? (a = !0, r = this.options.ecmaVersion >= 9 && this.eat(k.star)) : s("get") ? i.kind = "get" : s("set") && (i.kind = "set")), i.key || this.parsePropertyName(i);
                var n = i.key,
                    o = !1;
                return i.computed || i.static || ("Identifier" !== n.type || "constructor" !== n.name) && ("Literal" !== n.type || "constructor" !== n.value) ? i.static && "Identifier" === n.type && "prototype" === n.name && this.raise(n.start, "Classes may not have a static property named prototype") : ("method" !== i.kind && this.raise(n.start, "Constructor can't have get/set modifier"), r && this.raise(n.start, "Constructor can't be a generator"), a && this.raise(n.start, "Constructor can't be an async method"), i.kind = "constructor", o = t), this.parseClassMethod(i, r, a, o), "get" === i.kind && 0 !== i.value.params.length && this.raiseRecoverable(i.value.start, "getter should have no params"), "set" === i.kind && 1 !== i.value.params.length && this.raiseRecoverable(i.value.start, "setter should have exactly one param"), "set" === i.kind && "RestElement" === i.value.params[0].type && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params"), i
            }, W.parseClassMethod = function(t, e, i, s) {
                return t.value = this.parseMethod(e, i, s), this.finishNode(t, "MethodDefinition")
            }, W.parseClassId = function(t, e) {
                this.type === k.name ? (t.id = this.parseIdent(), e && this.checkLVal(t.id, 2, !1)) : (!0 === e && this.unexpected(), t.id = null)
            }, W.parseClassSuper = function(t) {
                t.superClass = this.eat(k._extends) ? this.parseExprSubscripts() : null
            }, W.parseExport = function(t, e) {
                if (this.next(), this.eat(k.star)) return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseIdent(!0), this.checkExport(e, t.exported.name, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== k.string && this.unexpected(), t.source = this.parseExprAtom(), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
                if (this.eat(k._default)) {
                    if (this.checkExport(e, "default", this.lastTokStart), this.type === k._function || (i = this.isAsyncFunction())) {
                        var i, s = this.startNode();
                        this.next(), i && this.next(), t.declaration = this.parseFunction(s, 4 | K, !1, i)
                    } else if (this.type === k._class) {
                        var r = this.startNode();
                        t.declaration = this.parseClass(r, "nullableID")
                    } else t.declaration = this.parseMaybeAssign(), this.semicolon();
                    return this.finishNode(t, "ExportDefaultDeclaration")
                }
                if (this.shouldParseExportStatement()) t.declaration = this.parseStatement(null), "VariableDeclaration" === t.declaration.type ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id.name, t.declaration.id.start), t.specifiers = [], t.source = null;
                else {
                    if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from")) this.type !== k.string && this.unexpected(), t.source = this.parseExprAtom();
                    else {
                        for (var a = 0, n = t.specifiers; a < n.length; a += 1) {
                            var o = n[a];
                            this.checkUnreserved(o.local), this.checkLocalExport(o.local)
                        }
                        t.source = null
                    }
                    this.semicolon()
                }
                return this.finishNode(t, "ExportNamedDeclaration")
            }, W.checkExport = function(t, e, i) {
                t && (N(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0)
            }, W.checkPatternExport = function(t, e) {
                var i = e.type;
                if ("Identifier" === i) this.checkExport(t, e.name, e.start);
                else if ("ObjectPattern" === i)
                    for (var s = 0, r = e.properties; s < r.length; s += 1) {
                        var a = r[s];
                        this.checkPatternExport(t, a)
                    } else if ("ArrayPattern" === i)
                        for (var n = 0, o = e.elements; n < o.length; n += 1) {
                            var h = o[n];
                            h && this.checkPatternExport(t, h)
                        } else "Property" === i ? this.checkPatternExport(t, e.value) : "AssignmentPattern" === i ? this.checkPatternExport(t, e.left) : "RestElement" === i ? this.checkPatternExport(t, e.argument) : "ParenthesizedExpression" === i && this.checkPatternExport(t, e.expression)
            }, W.checkVariableExport = function(t, e) {
                if (t)
                    for (var i = 0; i < e.length; i += 1) {
                        var s = e[i];
                        this.checkPatternExport(t, s.id)
                    }
            }, W.shouldParseExportStatement = function() {
                return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
            }, W.parseExportSpecifiers = function(t) {
                var e = [],
                    i = !0;
                for (this.expect(k.braceL); !this.eat(k.braceR);) {
                    if (i) i = !1;
                    else if (this.expect(k.comma), this.afterTrailingComma(k.braceR)) break;
                    var s = this.startNode();
                    s.local = this.parseIdent(!0), s.exported = this.eatContextual("as") ? this.parseIdent(!0) : s.local, this.checkExport(t, s.exported.name, s.exported.start), e.push(this.finishNode(s, "ExportSpecifier"))
                }
                return e
            }, W.parseImport = function(t) {
                return this.next(), this.type === k.string ? (t.specifiers = Q, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === k.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration")
            }, W.parseImportSpecifiers = function() {
                var t = [],
                    e = !0;
                if (this.type === k.name) {
                    var i = this.startNode();
                    if (i.local = this.parseIdent(), this.checkLVal(i.local, 2), t.push(this.finishNode(i, "ImportDefaultSpecifier")), !this.eat(k.comma)) return t
                }
                if (this.type === k.star) {
                    var s = this.startNode();
                    return this.next(), this.expectContextual("as"), s.local = this.parseIdent(), this.checkLVal(s.local, 2), t.push(this.finishNode(s, "ImportNamespaceSpecifier")), t
                }
                for (this.expect(k.braceL); !this.eat(k.braceR);) {
                    if (e) e = !1;
                    else if (this.expect(k.comma), this.afterTrailingComma(k.braceR)) break;
                    var r = this.startNode();
                    r.imported = this.parseIdent(!0), this.eatContextual("as") ? r.local = this.parseIdent() : (this.checkUnreserved(r.imported), r.local = r.imported), this.checkLVal(r.local, 2), t.push(this.finishNode(r, "ImportSpecifier"))
                }
                return t
            }, W.adaptDirectivePrologue = function(t) {
                for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) t[e].directive = t[e].expression.raw.slice(1, -1)
            }, W.isDirectiveCandidate = function(t) {
                return "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && ('"' === this.input[t.start] || "'" === this.input[t.start])
            };
            var Y = F.prototype;
            Y.toAssignable = function(t, e, i) {
                if (this.options.ecmaVersion >= 6 && t) switch (t.type) {
                    case "Identifier":
                        this.inAsync && "await" === t.name && this.raise(t.start, "Cannot use 'await' as identifier inside an async function");
                        break;
                    case "ObjectPattern":
                    case "ArrayPattern":
                    case "RestElement":
                        break;
                    case "ObjectExpression":
                        t.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);
                        for (var s = 0, r = t.properties; s < r.length; s += 1) {
                            var a = r[s];
                            this.toAssignable(a, e), "RestElement" === a.type && ("ArrayPattern" === a.argument.type || "ObjectPattern" === a.argument.type) && this.raise(a.argument.start, "Unexpected token")
                        }
                        break;
                    case "Property":
                        "init" !== t.kind && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);
                        break;
                    case "ArrayExpression":
                        t.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(t.elements, e);
                        break;
                    case "SpreadElement":
                        t.type = "RestElement", this.toAssignable(t.argument, e), "AssignmentPattern" === t.argument.type && this.raise(t.argument.start, "Rest elements cannot have a default value");
                        break;
                    case "AssignmentExpression":
                        "=" !== t.operator && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
                    case "AssignmentPattern":
                        break;
                    case "ParenthesizedExpression":
                        this.toAssignable(t.expression, e, i);
                        break;
                    case "ChainExpression":
                        this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                        break;
                    case "MemberExpression":
                        if (!e) break;
                    default:
                        this.raise(t.start, "Assigning to rvalue")
                } else i && this.checkPatternErrors(i, !0);
                return t
            }, Y.toAssignableList = function(t, e) {
                for (var i = t.length, s = 0; s < i; s++) {
                    var r = t[s];
                    r && this.toAssignable(r, e)
                }
                if (i) {
                    var a = t[i - 1];
                    6 === this.options.ecmaVersion && e && a && "RestElement" === a.type && "Identifier" !== a.argument.type && this.unexpected(a.argument.start)
                }
                return t
            }, Y.parseSpread = function(t) {
                var e = this.startNode();
                return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement")
            }, Y.parseRestBinding = function() {
                var t = this.startNode();
                return this.next(), 6 === this.options.ecmaVersion && this.type !== k.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement")
            }, Y.parseBindingAtom = function() {
                if (this.options.ecmaVersion >= 6) switch (this.type) {
                    case k.bracketL:
                        var t = this.startNode();
                        return this.next(), t.elements = this.parseBindingList(k.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
                    case k.braceL:
                        return this.parseObj(!0)
                }
                return this.parseIdent()
            }, Y.parseBindingList = function(t, e, i) {
                for (var s = [], r = !0; !this.eat(t);)
                    if (r ? r = !1 : this.expect(k.comma), e && this.type === k.comma) s.push(null);
                    else if (i && this.afterTrailingComma(t)) break;
                else if (this.type === k.ellipsis) {
                    var a = this.parseRestBinding();
                    this.parseBindingListItem(a), s.push(a), this.type === k.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(t);
                    break
                } else {
                    var n = this.parseMaybeDefault(this.start, this.startLoc);
                    this.parseBindingListItem(n), s.push(n)
                }
                return s
            }, Y.parseBindingListItem = function(t) {
                return t
            }, Y.parseMaybeDefault = function(t, e, i) {
                if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(k.eq)) return i;
                var s = this.startNodeAt(t, e);
                return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern")
            }, Y.checkLVal = function(t, e, i) {
                switch (void 0 === e && (e = 0), t.type) {
                    case "Identifier":
                        2 === e && "let" === t.name && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (e ? "Binding " : "Assigning to ") + t.name + " in strict mode"), i && (N(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), 0 !== e && 5 !== e && this.declareName(t.name, e, t.start);
                        break;
                    case "ChainExpression":
                        this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                        break;
                    case "MemberExpression":
                        e && this.raiseRecoverable(t.start, "Binding member expression");
                        break;
                    case "ObjectPattern":
                        for (var s = 0, r = t.properties; s < r.length; s += 1) {
                            var a = r[s];
                            this.checkLVal(a, e, i)
                        }
                        break;
                    case "Property":
                        this.checkLVal(t.value, e, i);
                        break;
                    case "ArrayPattern":
                        for (var n = 0, o = t.elements; n < o.length; n += 1) {
                            var h = o[n];
                            h && this.checkLVal(h, e, i)
                        }
                        break;
                    case "AssignmentPattern":
                        this.checkLVal(t.left, e, i);
                        break;
                    case "RestElement":
                        this.checkLVal(t.argument, e, i);
                        break;
                    case "ParenthesizedExpression":
                        this.checkLVal(t.expression, e, i);
                        break;
                    default:
                        this.raise(t.start, (e ? "Binding" : "Assigning to") + " rvalue")
                }
            };
            var Z = F.prototype;
            Z.checkPropClash = function(t, e, i) {
                if ((!(this.options.ecmaVersion >= 9) || "SpreadElement" !== t.type) && (!(this.options.ecmaVersion >= 6) || !t.computed && !t.method && !t.shorthand)) {
                    var s, r = t.key;
                    switch (r.type) {
                        case "Identifier":
                            s = r.name;
                            break;
                        case "Literal":
                            s = String(r.value);
                            break;
                        default:
                            return
                    }
                    var a = t.kind;
                    if (this.options.ecmaVersion >= 6) {
                        "__proto__" === s && "init" === a && (e.proto && (i ? i.doubleProto < 0 && (i.doubleProto = r.start) : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), e.proto = !0);
                        return
                    }
                    var n = e[s = "$" + s];
                    n ? ("init" === a ? this.strict && n.init || n.get || n.set : n.init || n[a]) && this.raiseRecoverable(r.start, "Redefinition of property") : n = e[s] = {
                        init: !1,
                        get: !1,
                        set: !1
                    }, n[a] = !0
                }
            }, Z.parseExpression = function(t, e) {
                var i = this.start,
                    s = this.startLoc,
                    r = this.parseMaybeAssign(t, e);
                if (this.type === k.comma) {
                    var a = this.startNodeAt(i, s);
                    for (a.expressions = [r]; this.eat(k.comma);) a.expressions.push(this.parseMaybeAssign(t, e));
                    return this.finishNode(a, "SequenceExpression")
                }
                return r
            }, Z.parseMaybeAssign = function(t, e, i) {
                if (this.isContextual("yield")) {
                    if (this.inGenerator) return this.parseYield(t);
                    this.exprAllowed = !1
                }
                var s = !1,
                    r = -1,
                    a = -1;
                e ? (r = e.parenthesizedAssign, a = e.trailingComma, e.parenthesizedAssign = e.trailingComma = -1) : (e = new H, s = !0);
                var n = this.start,
                    o = this.startLoc;
                (this.type === k.parenL || this.type === k.name) && (this.potentialArrowAt = this.start);
                var h = this.parseMaybeConditional(t, e);
                if (i && (h = i.call(this, h, n, o)), this.type.isAssign) {
                    var p = this.startNodeAt(n, o);
                    return p.operator = this.value, p.left = this.type === k.eq ? this.toAssignable(h, !1, e) : h, s || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= p.left.start && (e.shorthandAssign = -1), this.checkLVal(h), this.next(), p.right = this.parseMaybeAssign(t), this.finishNode(p, "AssignmentExpression")
                }
                return s && this.checkExpressionErrors(e, !0), r > -1 && (e.parenthesizedAssign = r), a > -1 && (e.trailingComma = a), h
            }, Z.parseMaybeConditional = function(t, e) {
                var i = this.start,
                    s = this.startLoc,
                    r = this.parseExprOps(t, e);
                if (this.checkExpressionErrors(e)) return r;
                if (this.eat(k.question)) {
                    var a = this.startNodeAt(i, s);
                    return a.test = r, a.consequent = this.parseMaybeAssign(), this.expect(k.colon), a.alternate = this.parseMaybeAssign(t), this.finishNode(a, "ConditionalExpression")
                }
                return r
            }, Z.parseExprOps = function(t, e) {
                var i = this.start,
                    s = this.startLoc,
                    r = this.parseMaybeUnary(e, !1);
                return this.checkExpressionErrors(e) ? r : r.start === i && "ArrowFunctionExpression" === r.type ? r : this.parseExprOp(r, i, s, -1, t)
            }, Z.parseExprOp = function(t, e, i, s, r) {
                var a = this.type.binop;
                if (null != a && (!r || this.type !== k._in) && a > s) {
                    var n = this.type === k.logicalOR || this.type === k.logicalAND,
                        o = this.type === k.coalesce;
                    o && (a = k.logicalAND.binop);
                    var h = this.value;
                    this.next();
                    var p = this.start,
                        c = this.startLoc,
                        u = this.parseExprOp(this.parseMaybeUnary(null, !1), p, c, a, r),
                        l = this.buildBinary(e, i, t, u, h, n || o);
                    return (n && this.type === k.coalesce || o && (this.type === k.logicalOR || this.type === k.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(l, e, i, s, r)
                }
                return t
            }, Z.buildBinary = function(t, e, i, s, r, a) {
                var n = this.startNodeAt(t, e);
                return n.left = i, n.operator = r, n.right = s, this.finishNode(n, a ? "LogicalExpression" : "BinaryExpression")
            }, Z.parseMaybeUnary = function(t, e) {
                var i, s = this.start,
                    r = this.startLoc;
                if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) i = this.parseAwait(), e = !0;
                else if (this.type.prefix) {
                    var a = this.startNode(),
                        n = this.type === k.incDec;
                    a.operator = this.value, a.prefix = !0, this.next(), a.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), n ? this.checkLVal(a.argument) : this.strict && "delete" === a.operator && "Identifier" === a.argument.type ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode") : e = !0, i = this.finishNode(a, n ? "UpdateExpression" : "UnaryExpression")
                } else {
                    if (i = this.parseExprSubscripts(t), this.checkExpressionErrors(t)) return i;
                    for (; this.type.postfix && !this.canInsertSemicolon();) {
                        var o = this.startNodeAt(s, r);
                        o.operator = this.value, o.prefix = !1, o.argument = i, this.checkLVal(i), this.next(), i = this.finishNode(o, "UpdateExpression")
                    }
                }
                return !e && this.eat(k.starstar) ? this.buildBinary(s, r, i, this.parseMaybeUnary(null, !1), "**", !1) : i
            }, Z.parseExprSubscripts = function(t) {
                var e = this.start,
                    i = this.startLoc,
                    s = this.parseExprAtom(t);
                if ("ArrowFunctionExpression" === s.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return s;
                var r = this.parseSubscripts(s, e, i);
                return t && "MemberExpression" === r.type && (t.parenthesizedAssign >= r.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= r.start && (t.parenthesizedBind = -1)), r
            }, Z.parseSubscripts = function(t, e, i, s) {
                for (var r = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start == 5 && this.potentialArrowAt === t.start, a = !1;;) {
                    var n = this.parseSubscript(t, e, i, s, r, a);
                    if (n.optional && (a = !0), n === t || "ArrowFunctionExpression" === n.type) {
                        if (a) {
                            var o = this.startNodeAt(e, i);
                            o.expression = n, n = this.finishNode(o, "ChainExpression")
                        }
                        return n
                    }
                    t = n
                }
            }, Z.parseSubscript = function(t, e, i, s, r, a) {
                var n = this.options.ecmaVersion >= 11,
                    o = n && this.eat(k.questionDot);
                s && o && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
                var h = this.eat(k.bracketL);
                if (h || o && this.type !== k.parenL && this.type !== k.backQuote || this.eat(k.dot)) {
                    var p = this.startNodeAt(e, i);
                    p.object = t, p.property = h ? this.parseExpression() : this.parseIdent("never" !== this.options.allowReserved), p.computed = !!h, h && this.expect(k.bracketR), n && (p.optional = o), t = this.finishNode(p, "MemberExpression")
                } else if (!s && this.eat(k.parenL)) {
                    var c = new H,
                        u = this.yieldPos,
                        l = this.awaitPos,
                        d = this.awaitIdentPos;
                    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
                    var f = this.parseExprList(k.parenR, this.options.ecmaVersion >= 8, !1, c);
                    if (r && !o && !this.canInsertSemicolon() && this.eat(k.arrow)) return this.checkPatternErrors(c, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = u, this.awaitPos = l, this.awaitIdentPos = d, this.parseArrowExpression(this.startNodeAt(e, i), f, !0);
                    this.checkExpressionErrors(c, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = l || this.awaitPos, this.awaitIdentPos = d || this.awaitIdentPos;
                    var m = this.startNodeAt(e, i);
                    m.callee = t, m.arguments = f, n && (m.optional = o), t = this.finishNode(m, "CallExpression")
                } else if (this.type === k.backQuote) {
                    (o || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                    var x = this.startNodeAt(e, i);
                    x.tag = t, x.quasi = this.parseTemplate({
                        isTagged: !0
                    }), t = this.finishNode(x, "TaggedTemplateExpression")
                }
                return t
            }, Z.parseExprAtom = function(t) {
                this.type === k.slash && this.readRegexp();
                var e, i = this.potentialArrowAt === this.start;
                switch (this.type) {
                    case k._super:
                        return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), e = this.startNode(), this.next(), this.type !== k.parenL || this.allowDirectSuper || this.raise(e.start, "super() call outside constructor of a subclass"), this.type !== k.dot && this.type !== k.bracketL && this.type !== k.parenL && this.unexpected(), this.finishNode(e, "Super");
                    case k._this:
                        return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
                    case k.name:
                        var s = this.start,
                            r = this.startLoc,
                            a = this.containsEsc,
                            n = this.parseIdent(!1);
                        if (this.options.ecmaVersion >= 8 && !a && "async" === n.name && !this.canInsertSemicolon() && this.eat(k._function)) return this.parseFunction(this.startNodeAt(s, r), 0, !1, !0);
                        if (i && !this.canInsertSemicolon()) {
                            if (this.eat(k.arrow)) return this.parseArrowExpression(this.startNodeAt(s, r), [n], !1);
                            if (this.options.ecmaVersion >= 8 && "async" === n.name && this.type === k.name && !a) return n = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(k.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(s, r), [n], !0)
                        }
                        return n;
                    case k.regexp:
                        var o = this.value;
                        return (e = this.parseLiteral(o.value)).regex = {
                            pattern: o.pattern,
                            flags: o.flags
                        }, e;
                    case k.num:
                    case k.string:
                        return this.parseLiteral(this.value);
                    case k._null:
                    case k._true:
                    case k._false:
                        return (e = this.startNode()).value = this.type === k._null ? null : this.type === k._true, e.raw = this.type.keyword, this.next(), this.finishNode(e, "Literal");
                    case k.parenL:
                        var h = this.start,
                            p = this.parseParenAndDistinguishExpression(i);
                        return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(p) && (t.parenthesizedAssign = h), t.parenthesizedBind < 0 && (t.parenthesizedBind = h)), p;
                    case k.bracketL:
                        return e = this.startNode(), this.next(), e.elements = this.parseExprList(k.bracketR, !0, !0, t), this.finishNode(e, "ArrayExpression");
                    case k.braceL:
                        return this.parseObj(!1, t);
                    case k._function:
                        return e = this.startNode(), this.next(), this.parseFunction(e, 0);
                    case k._class:
                        return this.parseClass(this.startNode(), !1);
                    case k._new:
                        return this.parseNew();
                    case k.backQuote:
                        return this.parseTemplate();
                    case k._import:
                        if (this.options.ecmaVersion >= 11) return this.parseExprImport();
                        return this.unexpected();
                    default:
                        this.unexpected()
                }
            }, Z.parseExprImport = function() {
                var t = this.startNode();
                this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
                var e = this.parseIdent(!0);
                switch (this.type) {
                    case k.parenL:
                        return this.parseDynamicImport(t);
                    case k.dot:
                        return t.meta = e, this.parseImportMeta(t);
                    default:
                        this.unexpected()
                }
            }, Z.parseDynamicImport = function(t) {
                if (this.next(), t.source = this.parseMaybeAssign(), !this.eat(k.parenR)) {
                    var e = this.start;
                    this.eat(k.comma) && this.eat(k.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e)
                }
                return this.finishNode(t, "ImportExpression")
            }, Z.parseImportMeta = function(t) {
                this.next();
                var e = this.containsEsc;
                return t.property = this.parseIdent(!0), "meta" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), "module" !== this.options.sourceType && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty")
            }, Z.parseLiteral = function(t) {
                var e = this.startNode();
                return e.value = t, e.raw = this.input.slice(this.start, this.end), 110 === e.raw.charCodeAt(e.raw.length - 1) && (e.bigint = e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal")
            }, Z.parseParenExpression = function() {
                this.expect(k.parenL);
                var t = this.parseExpression();
                return this.expect(k.parenR), t
            }, Z.parseParenAndDistinguishExpression = function(t) {
                var e, i = this.start,
                    s = this.startLoc,
                    r = this.options.ecmaVersion >= 8;
                if (this.options.ecmaVersion >= 6) {
                    this.next();
                    var a, n = this.start,
                        o = this.startLoc,
                        h = [],
                        p = !0,
                        c = !1,
                        u = new H,
                        l = this.yieldPos,
                        d = this.awaitPos;
                    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== k.parenR;) {
                        if (p ? p = !1 : this.expect(k.comma), r && this.afterTrailingComma(k.parenR, !0)) {
                            c = !0;
                            break
                        }
                        if (this.type === k.ellipsis) {
                            a = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === k.comma && this.raise(this.start, "Comma is not permitted after the rest element");
                            break
                        }
                        h.push(this.parseMaybeAssign(!1, u, this.parseParenItem))
                    }
                    var f = this.start,
                        m = this.startLoc;
                    if (this.expect(k.parenR), t && !this.canInsertSemicolon() && this.eat(k.arrow)) return this.checkPatternErrors(u, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = l, this.awaitPos = d, this.parseParenArrowList(i, s, h);
                    (!h.length || c) && this.unexpected(this.lastTokStart), a && this.unexpected(a), this.checkExpressionErrors(u, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = d || this.awaitPos, h.length > 1 ? ((e = this.startNodeAt(n, o)).expressions = h, this.finishNodeAt(e, "SequenceExpression", f, m)) : e = h[0]
                } else e = this.parseParenExpression();
                if (!this.options.preserveParens) return e;
                var x = this.startNodeAt(i, s);
                return x.expression = e, this.finishNode(x, "ParenthesizedExpression")
            }, Z.parseParenItem = function(t) {
                return t
            }, Z.parseParenArrowList = function(t, e, i) {
                return this.parseArrowExpression(this.startNodeAt(t, e), i)
            };
            var $ = [];
            Z.parseNew = function() {
                this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
                var t = this.startNode(),
                    e = this.parseIdent(!0);
                if (this.options.ecmaVersion >= 6 && this.eat(k.dot)) {
                    t.meta = e;
                    var i = this.containsEsc;
                    return t.property = this.parseIdent(!0), "target" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction() || this.raiseRecoverable(t.start, "'new.target' can only be used in functions"), this.finishNode(t, "MetaProperty")
                }
                var s = this.start,
                    r = this.startLoc,
                    a = this.type === k._import;
                return t.callee = this.parseSubscripts(this.parseExprAtom(), s, r, !0), a && "ImportExpression" === t.callee.type && this.raise(s, "Cannot use new with import()"), this.eat(k.parenL) ? t.arguments = this.parseExprList(k.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = $, this.finishNode(t, "NewExpression")
            }, Z.parseTemplateElement = function(t) {
                var e = t.isTagged,
                    i = this.startNode();
                return this.type === k.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
                    raw: this.value,
                    cooked: null
                }) : i.value = {
                    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                    cooked: this.value
                }, this.next(), i.tail = this.type === k.backQuote, this.finishNode(i, "TemplateElement")
            }, Z.parseTemplate = function(t) {
                void 0 === t && (t = {});
                var e = t.isTagged;
                void 0 === e && (e = !1);
                var i = this.startNode();
                this.next(), i.expressions = [];
                var s = this.parseTemplateElement({
                    isTagged: e
                });
                for (i.quasis = [s]; !s.tail;) this.type === k.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(k.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(k.braceR), i.quasis.push(s = this.parseTemplateElement({
                    isTagged: e
                }));
                return this.next(), this.finishNode(i, "TemplateLiteral")
            }, Z.isAsyncProp = function(t) {
                return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === k.name || this.type === k.num || this.type === k.string || this.type === k.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === k.star) && !C.test(this.input.slice(this.lastTokEnd, this.start))
            }, Z.parseObj = function(t, e) {
                var i = this.startNode(),
                    s = !0,
                    r = {};
                for (i.properties = [], this.next(); !this.eat(k.braceR);) {
                    if (s) s = !1;
                    else if (this.expect(k.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(k.braceR)) break;
                    var a = this.parseProperty(t, e);
                    t || this.checkPropClash(a, r, e), i.properties.push(a)
                }
                return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression")
            }, Z.parseProperty = function(t, e) {
                var i, s, r, a, n = this.startNode();
                if (this.options.ecmaVersion >= 9 && this.eat(k.ellipsis)) return t ? (n.argument = this.parseIdent(!1), this.type === k.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(n, "RestElement")) : (this.type === k.parenL && e && (e.parenthesizedAssign < 0 && (e.parenthesizedAssign = this.start), e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)), n.argument = this.parseMaybeAssign(!1, e), this.type === k.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(n, "SpreadElement"));
                this.options.ecmaVersion >= 6 && (n.method = !1, n.shorthand = !1, (t || e) && (r = this.start, a = this.startLoc), t || (i = this.eat(k.star)));
                var o = this.containsEsc;
                return this.parsePropertyName(n), !t && !o && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(n) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(k.star), this.parsePropertyName(n, e)) : s = !1, this.parsePropertyValue(n, t, i, s, r, a, e, o), this.finishNode(n, "Property")
            }, Z.parsePropertyValue = function(t, e, i, s, r, a, n, o) {
                if ((i || s) && this.type === k.colon && this.unexpected(), this.eat(k.colon)) t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, n), t.kind = "init";
                else if (this.options.ecmaVersion >= 6 && this.type === k.parenL) e && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(i, s);
                else if (e || o || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === k.comma || this.type === k.braceR || this.type === k.eq) this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? ((i || s) && this.unexpected(), this.checkUnreserved(t.key), "await" !== t.key.name || this.awaitIdentPos || (this.awaitIdentPos = r), t.kind = "init", e ? t.value = this.parseMaybeDefault(r, a, t.key) : this.type === k.eq && n ? (n.shorthandAssign < 0 && (n.shorthandAssign = this.start), t.value = this.parseMaybeDefault(r, a, t.key)) : t.value = t.key, t.shorthand = !0) : this.unexpected();
                else {
                    (i || s) && this.unexpected(), t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);
                    var h = "get" === t.kind ? 0 : 1;
                    if (t.value.params.length !== h) {
                        var p = t.value.start;
                        "get" === t.kind ? this.raiseRecoverable(p, "getter should have no params") : this.raiseRecoverable(p, "setter should have exactly one param")
                    } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
                }
            }, Z.parsePropertyName = function(t) {
                if (this.options.ecmaVersion >= 6) {
                    if (this.eat(k.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(k.bracketR), t.key;
                    t.computed = !1
                }
                return t.key = this.type === k.num || this.type === k.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
            }, Z.initFunction = function(t) {
                t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1)
            }, Z.parseMethod = function(t, e, i) {
                var s = this.startNode(),
                    r = this.yieldPos,
                    a = this.awaitPos,
                    n = this.awaitIdentPos;
                return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = t), this.options.ecmaVersion >= 8 && (s.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | M(e, s.generator) | (i ? 128 : 0)), this.expect(k.parenL), s.params = this.parseBindingList(k.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0), this.yieldPos = r, this.awaitPos = a, this.awaitIdentPos = n, this.finishNode(s, "FunctionExpression")
            }, Z.parseArrowExpression = function(t, e, i) {
                var s = this.yieldPos,
                    r = this.awaitPos,
                    a = this.awaitIdentPos;
                return this.enterScope(16 | M(i, !1)), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1), this.yieldPos = s, this.awaitPos = r, this.awaitIdentPos = a, this.finishNode(t, "ArrowFunctionExpression")
            }, Z.parseFunctionBody = function(t, e, i) {
                var s = e && this.type !== k.braceL,
                    r = this.strict,
                    a = !1;
                if (s) t.body = this.parseMaybeAssign(), t.expression = !0, this.checkParams(t, !1);
                else {
                    var n = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
                    (!r || n) && (a = this.strictDirective(this.end)) && n && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                    var o = this.labels;
                    this.labels = [], a && (this.strict = !0), this.checkParams(t, !r && !a && !e && !i && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLVal(t.id, 5), t.body = this.parseBlock(!1, void 0, a && !r), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = o
                }
                this.exitScope()
            }, Z.isSimpleParamList = function(t) {
                for (var e = 0; e < t.length; e += 1)
                    if ("Identifier" !== t[e].type) return !1;
                return !0
            }, Z.checkParams = function(t, e) {
                for (var i = {}, s = 0, r = t.params; s < r.length; s += 1) {
                    var a = r[s];
                    this.checkLVal(a, 1, e ? null : i)
                }
            }, Z.parseExprList = function(t, e, i, s) {
                for (var r = [], a = !0; !this.eat(t);) {
                    if (a) a = !1;
                    else if (this.expect(k.comma), e && this.afterTrailingComma(t)) break;
                    var n = void 0;
                    i && this.type === k.comma ? n = null : this.type === k.ellipsis ? (n = this.parseSpread(s), s && this.type === k.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : n = this.parseMaybeAssign(!1, s), r.push(n)
                }
                return r
            }, Z.checkUnreserved = function(t) {
                var e = t.start,
                    i = t.end,
                    s = t.name;
                this.inGenerator && "yield" === s && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === s && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(s) && this.raise(e, "Unexpected keyword '" + s + "'"), (!(this.options.ecmaVersion < 6) || -1 === this.input.slice(e, i).indexOf("\\")) && (this.strict ? this.reservedWordsStrict : this.reservedWords).test(s) && (this.inAsync || "await" !== s || this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + s + "' is reserved"))
            }, Z.parseIdent = function(t, e) {
                var i = this.startNode();
                return this.type === k.name ? i.name = this.value : this.type.keyword ? (i.name = this.type.keyword, ("class" === i.name || "function" === i.name) && (this.lastTokEnd !== this.lastTokStart + 1 || 46 !== this.input.charCodeAt(this.lastTokStart)) && this.context.pop()) : this.unexpected(), this.next(!!t), this.finishNode(i, "Identifier"), t || (this.checkUnreserved(i), "await" !== i.name || this.awaitIdentPos || (this.awaitIdentPos = i.start)), i
            }, Z.parseYield = function(t) {
                this.yieldPos || (this.yieldPos = this.start);
                var e = this.startNode();
                return this.next(), this.type === k.semi || this.canInsertSemicolon() || this.type !== k.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(k.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression")
            }, Z.parseAwait = function() {
                this.awaitPos || (this.awaitPos = this.start);
                var t = this.startNode();
                return this.next(), t.argument = this.parseMaybeUnary(null, !1), this.finishNode(t, "AwaitExpression")
            };
            var J = F.prototype;
            J.raise = function(t, e) {
                var i = B(this.input, t),
                    s = SyntaxError(e += " (" + i.line + ":" + i.column + ")");
                throw s.pos = t, s.loc = i, s.raisedAt = this.pos, s
            }, J.raiseRecoverable = J.raise, J.curPosition = function() {
                if (this.options.locations) return new R(this.curLine, this.pos - this.lineStart)
            };
            var tt = F.prototype,
                te = function(t) {
                    this.flags = t, this.var = [], this.lexical = [], this.functions = []
                };
            tt.enterScope = function(t) {
                this.scopeStack.push(new te(t))
            }, tt.exitScope = function() {
                this.scopeStack.pop()
            }, tt.treatFunctionsAsVarInScope = function(t) {
                return 2 & t.flags || !this.inModule && 1 & t.flags
            }, tt.declareName = function(t, e, i) {
                var s = !1;
                if (2 === e) {
                    var r = this.currentScope();
                    s = r.lexical.indexOf(t) > -1 || r.functions.indexOf(t) > -1 || r.var.indexOf(t) > -1, r.lexical.push(t), this.inModule && 1 & r.flags && delete this.undefinedExports[t]
                } else if (4 === e) this.currentScope().lexical.push(t);
                else if (3 === e) {
                    var a = this.currentScope();
                    s = this.treatFunctionsAsVar ? a.lexical.indexOf(t) > -1 : a.lexical.indexOf(t) > -1 || a.var.indexOf(t) > -1, a.functions.push(t)
                } else
                    for (var n = this.scopeStack.length - 1; n >= 0; --n) {
                        var o = this.scopeStack[n];
                        if (o.lexical.indexOf(t) > -1 && !(32 & o.flags && o.lexical[0] === t) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(t) > -1) {
                            s = !0;
                            break
                        }
                        if (o.var.push(t), this.inModule && 1 & o.flags && delete this.undefinedExports[t], 3 & o.flags) break
                    }
                s && this.raiseRecoverable(i, "Identifier '" + t + "' has already been declared")
            }, tt.checkLocalExport = function(t) {
                -1 === this.scopeStack[0].lexical.indexOf(t.name) && -1 === this.scopeStack[0].var.indexOf(t.name) && (this.undefinedExports[t.name] = t)
            }, tt.currentScope = function() {
                return this.scopeStack[this.scopeStack.length - 1]
            }, tt.currentVarScope = function() {
                for (var t = this.scopeStack.length - 1;; t--) {
                    var e = this.scopeStack[t];
                    if (3 & e.flags) return e
                }
            }, tt.currentThisScope = function() {
                for (var t = this.scopeStack.length - 1;; t--) {
                    var e = this.scopeStack[t];
                    if (3 & e.flags && !(16 & e.flags)) return e
                }
            };
            var ti = function(t, e, i) {
                    this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new O(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0])
                },
                ts = F.prototype;

            function tr(t, e, i, s) {
                return t.type = e, t.end = i, this.options.locations && (t.loc.end = s), this.options.ranges && (t.range[1] = i), t
            }
            ts.startNode = function() {
                return new ti(this, this.start, this.startLoc)
            }, ts.startNodeAt = function(t, e) {
                return new ti(this, t, e)
            }, ts.finishNode = function(t, e) {
                return tr.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
            }, ts.finishNodeAt = function(t, e, i, s) {
                return tr.call(this, t, e, i, s)
            };
            var ta = function(t, e, i, s, r) {
                    this.token = t, this.isExpr = !!e, this.preserveSpace = !!i, this.override = s, this.generator = !!r
                },
                tn = {
                    b_stat: new ta("{", !1),
                    b_expr: new ta("{", !0),
                    b_tmpl: new ta("${", !1),
                    p_stat: new ta("(", !1),
                    p_expr: new ta("(", !0),
                    q_tmpl: new ta("`", !0, !0, function(t) {
                        return t.tryReadTemplateToken()
                    }),
                    f_stat: new ta("function", !1),
                    f_expr: new ta("function", !0),
                    f_expr_gen: new ta("function", !0, !1, null, !0),
                    f_gen: new ta("function", !1, !1, null, !0)
                },
                to = F.prototype;
            to.initialContext = function() {
                return [tn.b_stat]
            }, to.braceIsBlock = function(t) {
                var e = this.curContext();
                return e === tn.f_expr || e === tn.f_stat || (t === k.colon && (e === tn.b_stat || e === tn.b_expr) ? !e.isExpr : t === k._return || t === k.name && this.exprAllowed ? C.test(this.input.slice(this.lastTokEnd, this.start)) : t === k._else || t === k.semi || t === k.eof || t === k.parenR || t === k.arrow || (t === k.braceL ? e === tn.b_stat : t !== k._var && t !== k._const && t !== k.name && !this.exprAllowed))
            }, to.inGeneratorContext = function() {
                for (var t = this.context.length - 1; t >= 1; t--) {
                    var e = this.context[t];
                    if ("function" === e.token) return e.generator
                }
                return !1
            }, to.updateContext = function(t) {
                var e, i = this.type;
                i.keyword && t === k.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr
            }, k.parenR.updateContext = k.braceR.updateContext = function() {
                if (1 === this.context.length) {
                    this.exprAllowed = !0;
                    return
                }
                var t = this.context.pop();
                t === tn.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr
            }, k.braceL.updateContext = function(t) {
                this.context.push(this.braceIsBlock(t) ? tn.b_stat : tn.b_expr), this.exprAllowed = !0
            }, k.dollarBraceL.updateContext = function() {
                this.context.push(tn.b_tmpl), this.exprAllowed = !0
            }, k.parenL.updateContext = function(t) {
                var e = t === k._if || t === k._for || t === k._with || t === k._while;
                this.context.push(e ? tn.p_stat : tn.p_expr), this.exprAllowed = !0
            }, k.incDec.updateContext = function() {}, k._function.updateContext = k._class.updateContext = function(t) {
                !t.beforeExpr || t === k.semi || t === k._else || t === k._return && C.test(this.input.slice(this.lastTokEnd, this.start)) || (t === k.colon || t === k.braceL) && this.curContext() === tn.b_stat ? this.context.push(tn.f_stat) : this.context.push(tn.f_expr), this.exprAllowed = !1
            }, k.backQuote.updateContext = function() {
                this.curContext() === tn.q_tmpl ? this.context.pop() : this.context.push(tn.q_tmpl), this.exprAllowed = !1
            }, k.star.updateContext = function(t) {
                if (t === k._function) {
                    var e = this.context.length - 1;
                    this.context[e] === tn.f_expr ? this.context[e] = tn.f_expr_gen : this.context[e] = tn.f_gen
                }
                this.exprAllowed = !0
            }, k.name.updateContext = function(t) {
                var e = !1;
                this.options.ecmaVersion >= 6 && t !== k.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e
            };
            var th = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
                tp = th + " Extended_Pictographic",
                tc = {
                    9: th,
                    10: tp,
                    11: tp
                },
                tu = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
                tl = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
                td = tl + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
                tf = {
                    9: tl,
                    10: td,
                    11: td + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"
                },
                tm = {};

            function tx(t) {
                var e = tm[t] = {
                    binary: L(tc[t] + " " + tu),
                    nonBinary: {
                        General_Category: L(tu),
                        Script: L(tf[t])
                    }
                };
                e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions
            }
            tx(9), tx(10), tx(11);
            var tg = F.prototype,
                tv = function(t) {
                    this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = tm[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = []
                };

            function ty(t) {
                return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(((t -= 65536) >> 10) + 55296, (1023 & t) + 56320)
            }

            function tb(t) {
                return 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || t >= 91 && t <= 94 || t >= 123 && t <= 125
            }

            function t_(t) {
                return t >= 65 && t <= 90 || t >= 97 && t <= 122
            }

            function tk(t) {
                return t_(t) || 95 === t
            }

            function tC(t) {
                return t >= 48 && t <= 57
            }

            function tS(t) {
                return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
            }

            function tw(t) {
                return t >= 65 && t <= 70 ? 10 + (t - 65) : t >= 97 && t <= 102 ? 10 + (t - 97) : t - 48
            }

            function tE(t) {
                return t >= 48 && t <= 55
            }
            tv.prototype.reset = function(t, e, i) {
                var s = -1 !== i.indexOf("u");
                this.start = 0 | t, this.source = e + "", this.flags = i, this.switchU = s && this.parser.options.ecmaVersion >= 6, this.switchN = s && this.parser.options.ecmaVersion >= 9
            }, tv.prototype.raise = function(t) {
                this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t)
            }, tv.prototype.at = function(t, e) {
                void 0 === e && (e = !1);
                var i = this.source,
                    s = i.length;
                if (t >= s) return -1;
                var r = i.charCodeAt(t);
                if (!(e || this.switchU) || r <= 55295 || r >= 57344 || t + 1 >= s) return r;
                var a = i.charCodeAt(t + 1);
                return a >= 56320 && a <= 57343 ? (r << 10) + a - 56613888 : r
            }, tv.prototype.nextIndex = function(t, e) {
                void 0 === e && (e = !1);
                var i = this.source,
                    s = i.length;
                if (t >= s) return s;
                var r, a = i.charCodeAt(t);
                return !(e || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s || (r = i.charCodeAt(t + 1)) < 56320 || r > 57343 ? t + 1 : t + 2
            }, tv.prototype.current = function(t) {
                return void 0 === t && (t = !1), this.at(this.pos, t)
            }, tv.prototype.lookahead = function(t) {
                return void 0 === t && (t = !1), this.at(this.nextIndex(this.pos, t), t)
            }, tv.prototype.advance = function(t) {
                void 0 === t && (t = !1), this.pos = this.nextIndex(this.pos, t)
            }, tv.prototype.eat = function(t, e) {
                return void 0 === e && (e = !1), this.current(e) === t && (this.advance(e), !0)
            }, tg.validateRegExpFlags = function(t) {
                for (var e = t.validFlags, i = t.flags, s = 0; s < i.length; s++) {
                    var r = i.charAt(s); - 1 === e.indexOf(r) && this.raise(t.start, "Invalid regular expression flag"), i.indexOf(r, s + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag")
                }
            }, tg.validateRegExpPattern = function(t) {
                this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && t.groupNames.length > 0 && (t.switchN = !0, this.regexp_pattern(t))
            }, tg.regexp_pattern = function(t) {
                t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames.length = 0, t.backReferenceNames.length = 0, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(41) && t.raise("Unmatched ')'"), (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
                for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
                    var s = i[e]; - 1 === t.groupNames.indexOf(s) && t.raise("Invalid named capture referenced")
                }
            }, tg.regexp_disjunction = function(t) {
                for (this.regexp_alternative(t); t.eat(124);) this.regexp_alternative(t);
                this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(123) && t.raise("Lone quantifier brackets")
            }, tg.regexp_alternative = function(t) {
                for (; t.pos < t.source.length && this.regexp_eatTerm(t););
            }, tg.regexp_eatTerm = function(t) {
                return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : (t.switchU ? !!this.regexp_eatAtom(t) : !!this.regexp_eatExtendedAtom(t)) && (this.regexp_eatQuantifier(t), !0)
            }, tg.regexp_eatAssertion = function(t) {
                var e = t.pos;
                if (t.lastAssertionIsQuantifiable = !1, t.eat(94) || t.eat(36)) return !0;
                if (t.eat(92)) {
                    if (t.eat(66) || t.eat(98)) return !0;
                    t.pos = e
                }
                if (t.eat(40) && t.eat(63)) {
                    var i = !1;
                    if (this.options.ecmaVersion >= 9 && (i = t.eat(60)), t.eat(61) || t.eat(33)) return this.regexp_disjunction(t), t.eat(41) || t.raise("Unterminated group"), t.lastAssertionIsQuantifiable = !i, !0
                }
                return t.pos = e, !1
            }, tg.regexp_eatQuantifier = function(t, e) {
                return void 0 === e && (e = !1), !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
            }, tg.regexp_eatQuantifierPrefix = function(t, e) {
                return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e)
            }, tg.regexp_eatBracedQuantifier = function(t, e) {
                var i = t.pos;
                if (t.eat(123)) {
                    var s = 0,
                        r = -1;
                    if (this.regexp_eatDecimalDigits(t) && (s = t.lastIntValue, t.eat(44) && this.regexp_eatDecimalDigits(t) && (r = t.lastIntValue), t.eat(125))) return -1 !== r && r < s && !e && t.raise("numbers out of order in {} quantifier"), !0;
                    t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = i
                }
                return !1
            }, tg.regexp_eatAtom = function(t) {
                return this.regexp_eatPatternCharacters(t) || t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t)
            }, tg.regexp_eatReverseSolidusAtomEscape = function(t) {
                var e = t.pos;
                if (t.eat(92)) {
                    if (this.regexp_eatAtomEscape(t)) return !0;
                    t.pos = e
                }
                return !1
            }, tg.regexp_eatUncapturingGroup = function(t) {
                var e = t.pos;
                if (t.eat(40)) {
                    if (t.eat(63) && t.eat(58)) {
                        if (this.regexp_disjunction(t), t.eat(41)) return !0;
                        t.raise("Unterminated group")
                    }
                    t.pos = e
                }
                return !1
            }, tg.regexp_eatCapturingGroup = function(t) {
                if (t.eat(40)) {
                    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : 63 === t.current() && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(41)) return t.numCapturingParens += 1, !0;
                    t.raise("Unterminated group")
                }
                return !1
            }, tg.regexp_eatExtendedAtom = function(t) {
                return t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t)
            }, tg.regexp_eatInvalidBracedQuantifier = function(t) {
                return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1
            }, tg.regexp_eatSyntaxCharacter = function(t) {
                var e = t.current();
                return !!tb(e) && (t.lastIntValue = e, t.advance(), !0)
            }, tg.regexp_eatPatternCharacters = function(t) {
                for (var e = t.pos, i = 0; - 1 !== (i = t.current()) && !tb(i);) t.advance();
                return t.pos !== e
            }, tg.regexp_eatExtendedPatternCharacter = function(t) {
                var e = t.current();
                return -1 !== e && 36 !== e && (!(e >= 40) || !(e <= 43)) && 46 !== e && 63 !== e && 91 !== e && 94 !== e && 124 !== e && (t.advance(), !0)
            }, tg.regexp_groupSpecifier = function(t) {
                if (t.eat(63)) {
                    if (this.regexp_eatGroupName(t)) {
                        -1 !== t.groupNames.indexOf(t.lastStringValue) && t.raise("Duplicate capture group name"), t.groupNames.push(t.lastStringValue);
                        return
                    }
                    t.raise("Invalid group")
                }
            }, tg.regexp_eatGroupName = function(t) {
                if (t.lastStringValue = "", t.eat(60)) {
                    if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
                    t.raise("Invalid capture group name")
                }
                return !1
            }, tg.regexp_eatRegExpIdentifierName = function(t) {
                if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
                    for (t.lastStringValue += ty(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t);) t.lastStringValue += ty(t.lastIntValue);
                    return !0
                }
                return !1
            }, tg.regexp_eatRegExpIdentifierStart = function(t) {
                var e, i = t.pos,
                    s = this.options.ecmaVersion >= 11,
                    r = t.current(s);
                return (t.advance(s), 92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (r = t.lastIntValue), f(e = r, !0) || 36 === e || 95 === e) ? (t.lastIntValue = r, !0) : (t.pos = i, !1)
            }, tg.regexp_eatRegExpIdentifierPart = function(t) {
                var e, i = t.pos,
                    s = this.options.ecmaVersion >= 11,
                    r = t.current(s);
                return (t.advance(s), 92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (r = t.lastIntValue), m(e = r, !0) || 36 === e || 95 === e || 8204 === e || 8205 === e) ? (t.lastIntValue = r, !0) : (t.pos = i, !1)
            }, tg.regexp_eatAtomEscape = function(t) {
                return !!(this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t)) || (t.switchU && (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1)
            }, tg.regexp_eatBackReference = function(t) {
                var e = t.pos;
                if (this.regexp_eatDecimalEscape(t)) {
                    var i = t.lastIntValue;
                    if (t.switchU) return i > t.maxBackReference && (t.maxBackReference = i), !0;
                    if (i <= t.numCapturingParens) return !0;
                    t.pos = e
                }
                return !1
            }, tg.regexp_eatKGroupName = function(t) {
                if (t.eat(107)) {
                    if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue), !0;
                    t.raise("Invalid named reference")
                }
                return !1
            }, tg.regexp_eatCharacterEscape = function(t) {
                return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t)
            }, tg.regexp_eatCControlLetter = function(t) {
                var e = t.pos;
                if (t.eat(99)) {
                    if (this.regexp_eatControlLetter(t)) return !0;
                    t.pos = e
                }
                return !1
            }, tg.regexp_eatZero = function(t) {
                return !(48 !== t.current() || tC(t.lookahead())) && (t.lastIntValue = 0, t.advance(), !0)
            }, tg.regexp_eatControlEscape = function(t) {
                var e = t.current();
                return 116 === e ? (t.lastIntValue = 9, t.advance(), !0) : 110 === e ? (t.lastIntValue = 10, t.advance(), !0) : 118 === e ? (t.lastIntValue = 11, t.advance(), !0) : 102 === e ? (t.lastIntValue = 12, t.advance(), !0) : 114 === e && (t.lastIntValue = 13, t.advance(), !0)
            }, tg.regexp_eatControlLetter = function(t) {
                var e = t.current();
                return !!t_(e) && (t.lastIntValue = e % 32, t.advance(), !0)
            }, tg.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
                void 0 === e && (e = !1);
                var i = t.pos,
                    s = e || t.switchU;
                if (t.eat(117)) {
                    if (this.regexp_eatFixedHexDigits(t, 4)) {
                        var r, a = t.lastIntValue;
                        if (s && a >= 55296 && a <= 56319) {
                            var n = t.pos;
                            if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) {
                                var o = t.lastIntValue;
                                if (o >= 56320 && o <= 57343) return t.lastIntValue = (a - 55296) * 1024 + (o - 56320) + 65536, !0
                            }
                            t.pos = n, t.lastIntValue = a
                        }
                        return !0
                    }
                    if (s && t.eat(123) && this.regexp_eatHexDigits(t) && t.eat(125) && (r = t.lastIntValue) >= 0 && r <= 1114111) return !0;
                    s && t.raise("Invalid unicode escape"), t.pos = i
                }
                return !1
            }, tg.regexp_eatIdentityEscape = function(t) {
                if (t.switchU) return !!this.regexp_eatSyntaxCharacter(t) || !!t.eat(47) && (t.lastIntValue = 47, !0);
                var e = t.current();
                return 99 !== e && (!t.switchN || 107 !== e) && (t.lastIntValue = e, t.advance(), !0)
            }, tg.regexp_eatDecimalEscape = function(t) {
                t.lastIntValue = 0;
                var e = t.current();
                if (e >= 49 && e <= 57) {
                    do t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance(); while ((e = t.current()) >= 48 && e <= 57);
                    return !0
                }
                return !1
            }, tg.regexp_eatCharacterClassEscape = function(t) {
                var e = t.current();
                if (100 === e || 68 === e || 115 === e || 83 === e || 119 === e || 87 === e) return t.lastIntValue = -1, t.advance(), !0;
                if (t.switchU && this.options.ecmaVersion >= 9 && (80 === e || 112 === e)) {
                    if (t.lastIntValue = -1, t.advance(), t.eat(123) && this.regexp_eatUnicodePropertyValueExpression(t) && t.eat(125)) return !0;
                    t.raise("Invalid property name")
                }
                return !1
            }, tg.regexp_eatUnicodePropertyValueExpression = function(t) {
                var e = t.pos;
                if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
                    var i = t.lastStringValue;
                    if (this.regexp_eatUnicodePropertyValue(t)) {
                        var s = t.lastStringValue;
                        return this.regexp_validateUnicodePropertyNameAndValue(t, i, s), !0
                    }
                }
                if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
                    var r = t.lastStringValue;
                    return this.regexp_validateUnicodePropertyNameOrValue(t, r), !0
                }
                return !1
            }, tg.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) {
                N(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(i) || t.raise("Invalid property value")
            }, tg.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
                t.unicodeProperties.binary.test(e) || t.raise("Invalid property name")
            }, tg.regexp_eatUnicodePropertyName = function(t) {
                var e = 0;
                for (t.lastStringValue = ""; tk(e = t.current());) t.lastStringValue += ty(e), t.advance();
                return "" !== t.lastStringValue
            }, tg.regexp_eatUnicodePropertyValue = function(t) {
                var e, i = 0;
                for (t.lastStringValue = ""; tk(e = i = t.current()) || tC(e);) t.lastStringValue += ty(i), t.advance();
                return "" !== t.lastStringValue
            }, tg.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
                return this.regexp_eatUnicodePropertyValue(t)
            }, tg.regexp_eatCharacterClass = function(t) {
                if (t.eat(91)) {
                    if (t.eat(94), this.regexp_classRanges(t), t.eat(93)) return !0;
                    t.raise("Unterminated character class")
                }
                return !1
            }, tg.regexp_classRanges = function(t) {
                for (; this.regexp_eatClassAtom(t);) {
                    var e = t.lastIntValue;
                    if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                        var i = t.lastIntValue;
                        t.switchU && (-1 === e || -1 === i) && t.raise("Invalid character class"), -1 !== e && -1 !== i && e > i && t.raise("Range out of order in character class")
                    }
                }
            }, tg.regexp_eatClassAtom = function(t) {
                var e = t.pos;
                if (t.eat(92)) {
                    if (this.regexp_eatClassEscape(t)) return !0;
                    if (t.switchU) {
                        var i = t.current();
                        (99 === i || tE(i)) && t.raise("Invalid class escape"), t.raise("Invalid escape")
                    }
                    t.pos = e
                }
                var s = t.current();
                return 93 !== s && (t.lastIntValue = s, t.advance(), !0)
            }, tg.regexp_eatClassEscape = function(t) {
                var e = t.pos;
                if (t.eat(98)) return t.lastIntValue = 8, !0;
                if (t.switchU && t.eat(45)) return t.lastIntValue = 45, !0;
                if (!t.switchU && t.eat(99)) {
                    if (this.regexp_eatClassControlLetter(t)) return !0;
                    t.pos = e
                }
                return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
            }, tg.regexp_eatClassControlLetter = function(t) {
                var e = t.current();
                return (!!tC(e) || 95 === e) && (t.lastIntValue = e % 32, t.advance(), !0)
            }, tg.regexp_eatHexEscapeSequence = function(t) {
                var e = t.pos;
                if (t.eat(120)) {
                    if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                    t.switchU && t.raise("Invalid escape"), t.pos = e
                }
                return !1
            }, tg.regexp_eatDecimalDigits = function(t) {
                var e = t.pos,
                    i = 0;
                for (t.lastIntValue = 0; tC(i = t.current());) t.lastIntValue = 10 * t.lastIntValue + (i - 48), t.advance();
                return t.pos !== e
            }, tg.regexp_eatHexDigits = function(t) {
                var e = t.pos,
                    i = 0;
                for (t.lastIntValue = 0; tS(i = t.current());) t.lastIntValue = 16 * t.lastIntValue + tw(i), t.advance();
                return t.pos !== e
            }, tg.regexp_eatLegacyOctalEscapeSequence = function(t) {
                if (this.regexp_eatOctalDigit(t)) {
                    var e = t.lastIntValue;
                    if (this.regexp_eatOctalDigit(t)) {
                        var i = t.lastIntValue;
                        e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = 64 * e + 8 * i + t.lastIntValue : t.lastIntValue = 8 * e + i
                    } else t.lastIntValue = e;
                    return !0
                }
                return !1
            }, tg.regexp_eatOctalDigit = function(t) {
                var e = t.current();
                return tE(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1)
            }, tg.regexp_eatFixedHexDigits = function(t, e) {
                var i = t.pos;
                t.lastIntValue = 0;
                for (var s = 0; s < e; ++s) {
                    var r = t.current();
                    if (!tS(r)) return t.pos = i, !1;
                    t.lastIntValue = 16 * t.lastIntValue + tw(r), t.advance()
                }
                return !0
            };
            var tA = function(t) {
                    this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new O(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end])
                },
                tI = F.prototype;

            function tP(t) {
                return "function" != typeof BigInt ? null : BigInt(t.replace(/_/g, ""))
            }

            function tT(t) {
                return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(((t -= 65536) >> 10) + 55296, (1023 & t) + 56320)
            }
            tI.next = function(t) {
                !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new tA(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
            }, tI.getToken = function() {
                return this.next(), new tA(this)
            }, "undefined" != typeof Symbol && (tI[Symbol.iterator] = function() {
                var t = this;
                return {
                    next: function() {
                        var e = t.getToken();
                        return {
                            done: e.type === k.eof,
                            value: e
                        }
                    }
                }
            }), tI.curContext = function() {
                return this.context[this.context.length - 1]
            }, tI.nextToken = function() {
                var t = this.curContext();
                return (t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length) ? this.finishToken(k.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos())
            }, tI.readToken = function(t) {
                return f(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t)
            }, tI.fullCharCodeAtPos = function() {
                var t = this.input.charCodeAt(this.pos);
                return t <= 55295 || t >= 57344 ? t : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888
            }, tI.skipBlockComment = function() {
                var t, e = this.options.onComment && this.curPosition(),
                    i = this.pos,
                    s = this.input.indexOf("*/", this.pos += 2);
                if (-1 === s && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations)
                    for (S.lastIndex = i;
                        (t = S.exec(this.input)) && t.index < this.pos;) ++this.curLine, this.lineStart = t.index + t[0].length;
                this.options.onComment && this.options.onComment(!0, this.input.slice(i + 2, s), i, this.pos, e, this.curPosition())
            }, tI.skipLineComment = function(t) {
                for (var e = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !w(s);) s = this.input.charCodeAt(++this.pos);
                this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, i, this.curPosition())
            }, tI.skipSpace = function() {
                t: for (; this.pos < this.input.length;) {
                    var t = this.input.charCodeAt(this.pos);
                    switch (t) {
                        case 32:
                        case 160:
                            ++this.pos;
                            break;
                        case 13:
                            10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                        case 10:
                        case 8232:
                        case 8233:
                            ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
                            break;
                        case 47:
                            switch (this.input.charCodeAt(this.pos + 1)) {
                                case 42:
                                    this.skipBlockComment();
                                    break;
                                case 47:
                                    this.skipLineComment(2);
                                    break;
                                default:
                                    break t
                            }
                            break;
                        default:
                            if (t > 8 && t < 14 || t >= 5760 && E.test(String.fromCharCode(t))) ++this.pos;
                            else break t
                    }
                }
            }, tI.finishToken = function(t, e) {
                this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
                var i = this.type;
                this.type = t, this.value = e, this.updateContext(i)
            }, tI.readToken_dot = function() {
                var t = this.input.charCodeAt(this.pos + 1);
                if (t >= 48 && t <= 57) return this.readNumber(!0);
                var e = this.input.charCodeAt(this.pos + 2);
                return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(k.ellipsis)) : (++this.pos, this.finishToken(k.dot))
            }, tI.readToken_slash = function() {
                var t = this.input.charCodeAt(this.pos + 1);
                return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(k.assign, 2) : this.finishOp(k.slash, 1)
            }, tI.readToken_mult_modulo_exp = function(t) {
                var e = this.input.charCodeAt(this.pos + 1),
                    i = 1,
                    s = 42 === t ? k.star : k.modulo;
                return (this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++i, s = k.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e) ? this.finishOp(k.assign, i + 1) : this.finishOp(s, i)
            }, tI.readToken_pipe_amp = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return e === t ? this.options.ecmaVersion >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(k.assign, 3) : this.finishOp(124 === t ? k.logicalOR : k.logicalAND, 2) : 61 === e ? this.finishOp(k.assign, 2) : this.finishOp(124 === t ? k.bitwiseOR : k.bitwiseAND, 1)
            }, tI.readToken_caret = function() {
                return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(k.assign, 2) : this.finishOp(k.bitwiseXOR, 1)
            }, tI.readToken_plus_min = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return e === t ? 45 === e && !this.inModule && 62 === this.input.charCodeAt(this.pos + 2) && (0 === this.lastTokEnd || C.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(k.incDec, 2) : 61 === e ? this.finishOp(k.assign, 2) : this.finishOp(k.plusMin, 1)
            }, tI.readToken_lt_gt = function(t) {
                var e = this.input.charCodeAt(this.pos + 1),
                    i = 1;
                return e === t ? (i = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i)) ? this.finishOp(k.assign, i + 1) : this.finishOp(k.bitShift, i) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (i = 2), this.finishOp(k.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
            }, tI.readToken_eq_excl = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return 61 === e ? this.finishOp(k.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(k.arrow)) : this.finishOp(61 === t ? k.eq : k.prefix, 1)
            }, tI.readToken_question = function() {
                var t = this.options.ecmaVersion;
                if (t >= 11) {
                    var e = this.input.charCodeAt(this.pos + 1);
                    if (46 === e) {
                        var i = this.input.charCodeAt(this.pos + 2);
                        if (i < 48 || i > 57) return this.finishOp(k.questionDot, 2)
                    }
                    if (63 === e) return t >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(k.assign, 3) : this.finishOp(k.coalesce, 2)
                }
                return this.finishOp(k.question, 1)
            }, tI.getTokenFromCode = function(t) {
                switch (t) {
                    case 46:
                        return this.readToken_dot();
                    case 40:
                        return ++this.pos, this.finishToken(k.parenL);
                    case 41:
                        return ++this.pos, this.finishToken(k.parenR);
                    case 59:
                        return ++this.pos, this.finishToken(k.semi);
                    case 44:
                        return ++this.pos, this.finishToken(k.comma);
                    case 91:
                        return ++this.pos, this.finishToken(k.bracketL);
                    case 93:
                        return ++this.pos, this.finishToken(k.bracketR);
                    case 123:
                        return ++this.pos, this.finishToken(k.braceL);
                    case 125:
                        return ++this.pos, this.finishToken(k.braceR);
                    case 58:
                        return ++this.pos, this.finishToken(k.colon);
                    case 96:
                        if (this.options.ecmaVersion < 6) break;
                        return ++this.pos, this.finishToken(k.backQuote);
                    case 48:
                        var e = this.input.charCodeAt(this.pos + 1);
                        if (120 === e || 88 === e) return this.readRadixNumber(16);
                        if (this.options.ecmaVersion >= 6) {
                            if (111 === e || 79 === e) return this.readRadixNumber(8);
                            if (98 === e || 66 === e) return this.readRadixNumber(2)
                        }
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        return this.readNumber(!1);
                    case 34:
                    case 39:
                        return this.readString(t);
                    case 47:
                        return this.readToken_slash();
                    case 37:
                    case 42:
                        return this.readToken_mult_modulo_exp(t);
                    case 124:
                    case 38:
                        return this.readToken_pipe_amp(t);
                    case 94:
                        return this.readToken_caret();
                    case 43:
                    case 45:
                        return this.readToken_plus_min(t);
                    case 60:
                    case 62:
                        return this.readToken_lt_gt(t);
                    case 61:
                    case 33:
                        return this.readToken_eq_excl(t);
                    case 63:
                        return this.readToken_question();
                    case 126:
                        return this.finishOp(k.prefix, 1)
                }
                this.raise(this.pos, "Unexpected character '" + tT(t) + "'")
            }, tI.finishOp = function(t, e) {
                var i = this.input.slice(this.pos, this.pos + e);
                return this.pos += e, this.finishToken(t, i)
            }, tI.readRegexp = function() {
                for (var t, e, i = this.pos;;) {
                    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
                    var s = this.input.charAt(this.pos);
                    if (C.test(s) && this.raise(i, "Unterminated regular expression"), t) t = !1;
                    else {
                        if ("[" === s) e = !0;
                        else if ("]" === s && e) e = !1;
                        else if ("/" === s && !e) break;
                        t = "\\" === s
                    }++this.pos
                }
                var r = this.input.slice(i, this.pos);
                ++this.pos;
                var a = this.pos,
                    n = this.readWord1();
                this.containsEsc && this.unexpected(a);
                var o = this.regexpState || (this.regexpState = new tv(this));
                o.reset(i, r, n), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
                var h = null;
                try {
                    h = new RegExp(r, n)
                } catch (t) {}
                return this.finishToken(k.regexp, {
                    pattern: r,
                    flags: n,
                    value: h
                })
            }, tI.readInt = function(t, e, i) {
                for (var s = this.options.ecmaVersion >= 12 && void 0 === e, r = i && 48 === this.input.charCodeAt(this.pos), a = this.pos, n = 0, o = 0, h = 0, p = null == e ? 1 / 0 : e; h < p; ++h, ++this.pos) {
                    var c = this.input.charCodeAt(this.pos),
                        u = void 0;
                    if (s && 95 === c) {
                        r && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === h && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = c;
                        continue
                    }
                    if ((u = c >= 97 ? c - 97 + 10 : c >= 65 ? c - 65 + 10 : c >= 48 && c <= 57 ? c - 48 : 1 / 0) >= t) break;
                    o = c, n = n * t + u
                }
                return (s && 95 === o && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === a || null != e && this.pos - a !== e) ? null : n
            }, tI.readRadixNumber = function(t) {
                var e = this.pos;
                this.pos += 2;
                var i = this.readInt(t);
                return null == i && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (i = tP(this.input.slice(e, this.pos)), ++this.pos) : f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(k.num, i)
            }, tI.readNumber = function(t) {
                var e, i = this.pos;
                t || null !== this.readInt(10, void 0, !0) || this.raise(i, "Invalid number");
                var s = this.pos - i >= 2 && 48 === this.input.charCodeAt(i);
                s && this.strict && this.raise(i, "Invalid number");
                var r = this.input.charCodeAt(this.pos);
                if (!s && !t && this.options.ecmaVersion >= 11 && 110 === r) {
                    var a = tP(this.input.slice(i, this.pos));
                    return ++this.pos, f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(k.num, a)
                }
                s && /[89]/.test(this.input.slice(i, this.pos)) && (s = !1), 46 !== r || s || (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), 69 !== r && 101 !== r || s || ((43 === (r = this.input.charCodeAt(++this.pos)) || 45 === r) && ++this.pos, null === this.readInt(10) && this.raise(i, "Invalid number")), f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                var n = (e = this.input.slice(i, this.pos), s ? parseInt(e, 8) : parseFloat(e.replace(/_/g, "")));
                return this.finishToken(k.num, n)
            }, tI.readCodePoint = function() {
                var t;
                if (123 === this.input.charCodeAt(this.pos)) {
                    this.options.ecmaVersion < 6 && this.unexpected();
                    var e = ++this.pos;
                    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(e, "Code point out of bounds")
                } else t = this.readHexChar(4);
                return t
            }, tI.readString = function(t) {
                for (var e = "", i = ++this.pos;;) {
                    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                    var s = this.input.charCodeAt(this.pos);
                    if (s === t) break;
                    92 === s ? (e += this.input.slice(i, this.pos) + this.readEscapedChar(!1), i = this.pos) : (w(s, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
                }
                return e += this.input.slice(i, this.pos++), this.finishToken(k.string, e)
            };
            var tN = {};
            tI.tryReadTemplateToken = function() {
                this.inTemplateElement = !0;
                try {
                    this.readTmplToken()
                } catch (t) {
                    if (t === tN) this.readInvalidTemplateToken();
                    else throw t
                }
                this.inTemplateElement = !1
            }, tI.invalidStringToken = function(t, e) {
                if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw tN;
                this.raise(t, e)
            }, tI.readTmplToken = function() {
                for (var t = "", e = this.pos;;) {
                    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                    var i = this.input.charCodeAt(this.pos);
                    if (96 === i || 36 === i && 123 === this.input.charCodeAt(this.pos + 1)) {
                        if (this.pos === this.start && (this.type === k.template || this.type === k.invalidTemplate)) {
                            if (36 === i) return this.pos += 2, this.finishToken(k.dollarBraceL);
                            return ++this.pos, this.finishToken(k.backQuote)
                        }
                        return t += this.input.slice(e, this.pos), this.finishToken(k.template, t)
                    }
                    if (92 === i) t += this.input.slice(e, this.pos) + this.readEscapedChar(!0), e = this.pos;
                    else if (w(i)) {
                        switch (t += this.input.slice(e, this.pos), ++this.pos, i) {
                            case 13:
                                10 === this.input.charCodeAt(this.pos) && ++this.pos;
                            case 10:
                                t += "\n";
                                break;
                            default:
                                t += String.fromCharCode(i)
                        }
                        this.options.locations && (++this.curLine, this.lineStart = this.pos), e = this.pos
                    } else ++this.pos
                }
            }, tI.readInvalidTemplateToken = function() {
                for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
                    case "\\":
                        ++this.pos;
                        break;
                    case "$":
                        if ("{" !== this.input[this.pos + 1]) break;
                    case "`":
                        return this.finishToken(k.invalidTemplate, this.input.slice(this.start, this.pos))
                }
                this.raise(this.start, "Unterminated template")
            }, tI.readEscapedChar = function(t) {
                var e = this.input.charCodeAt(++this.pos);
                switch (++this.pos, e) {
                    case 110:
                        return "\n";
                    case 114:
                        return "\r";
                    case 120:
                        return String.fromCharCode(this.readHexChar(2));
                    case 117:
                        return tT(this.readCodePoint());
                    case 116:
                        return "	";
                    case 98:
                        return "\b";
                    case 118:
                        return "\v";
                    case 102:
                        return "\f";
                    case 13:
                        10 === this.input.charCodeAt(this.pos) && ++this.pos;
                    case 10:
                        return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
                    case 56:
                    case 57:
                        if (t) {
                            var i = this.pos - 1;
                            return this.invalidStringToken(i, "Invalid escape sequence in template string"), null
                        }
                    default:
                        if (e >= 48 && e <= 55) {
                            var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                                r = parseInt(s, 8);
                            return r > 255 && (r = parseInt(s = s.slice(0, -1), 8)), this.pos += s.length - 1, e = this.input.charCodeAt(this.pos), ("0" !== s || 56 === e || 57 === e) && (this.strict || t) && this.invalidStringToken(this.pos - 1 - s.length, t ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(r)
                        }
                        if (w(e)) return "";
                        return String.fromCharCode(e)
                }
            }, tI.readHexChar = function(t) {
                var e = this.pos,
                    i = this.readInt(16, t);
                return null === i && this.invalidStringToken(e, "Bad character escape sequence"), i
            }, tI.readWord1 = function() {
                this.containsEsc = !1;
                for (var t = "", e = !0, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
                    var r = this.fullCharCodeAtPos();
                    if (m(r, s)) this.pos += r <= 65535 ? 1 : 2;
                    else if (92 === r) {
                        this.containsEsc = !0, t += this.input.slice(i, this.pos);
                        var a = this.pos;
                        117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                        var n = this.readCodePoint();
                        (e ? f : m)(n, s) || this.invalidStringToken(a, "Invalid Unicode escape"), t += tT(n), i = this.pos
                    } else break;
                    e = !1
                }
                return t + this.input.slice(i, this.pos)
            }, tI.readWord = function() {
                var t = this.readWord1(),
                    e = k.name;
                return this.keywords.test(t) && (e = b[t]), this.finishToken(e, t)
            };
            var tV = "7.4.1";

            function tL(t, e) {
                return F.parse(t, e)
            }

            function tR(t, e, i) {
                return F.parseExpressionAt(t, e, i)
            }

            function tO(t, e) {
                return F.tokenizer(t, e)
            }
            F.acorn = {
                Parser: F,
                version: tV,
                defaultOptions: D,
                Position: R,
                SourceLocation: O,
                getLineInfo: B,
                Node: ti,
                TokenType: x,
                tokTypes: k,
                keywordTypes: b,
                TokContext: ta,
                tokContexts: tn,
                isIdentifierChar: m,
                isIdentifierStart: f,
                Token: tA,
                isNewLine: w,
                lineBreak: C,
                lineBreakG: S,
                nonASCIIwhitespace: E
            }
        }
    }
]);