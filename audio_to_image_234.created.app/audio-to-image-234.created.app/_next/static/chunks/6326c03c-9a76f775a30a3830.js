! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "af279972-459a-4492-9297-f2afb5afc3a8", t._sentryDebugIdIdentifier = "sentry-dbid-af279972-459a-4492-9297-f2afb5afc3a8")
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3886], {
        54908: function(t, e, i) {
            i.d(e, {
                _b: function() {
                    return G
                }
            });
            var s = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239],
                r = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191],
                a = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                n = {
                    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                    5: "class enum extends super const export import",
                    6: "enum",
                    strict: "implements interface let package private protected public static yield",
                    strictBind: "eval arguments"
                },
                o = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
                h = {
                    5: o,
                    "5module": o + " export import",
                    6: o + " const class extends export import super"
                },
                p = /^in(stanceof)?$/,
                c = RegExp("[" + a + "]"),
                l = RegExp("[" + a + "‌‍\xb7̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･]");

            function u(t, e) {
                for (var i = 65536, s = 0; s < e.length && !((i += e[s]) > t); s += 2)
                    if ((i += e[s + 1]) >= t) return !0;
                return !1
            }

            function d(t, e) {
                return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && c.test(String.fromCharCode(t)) : !1 !== e && u(t, r)))
            }

            function f(t, e) {
                return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? t >= 170 && l.test(String.fromCharCode(t)) : !1 !== e && (u(t, r) || u(t, s)))))
            }
            var m = function(t, e) {
                void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop || null, this.updateContext = null
            };

            function x(t, e) {
                return new m(t, {
                    beforeExpr: !0,
                    binop: e
                })
            }
            var g = {
                    beforeExpr: !0
                },
                v = {
                    startsExpr: !0
                },
                y = {};

            function b(t, e) {
                return void 0 === e && (e = {}), e.keyword = t, y[t] = new m(t, e)
            }
            var _ = {
                    num: new m("num", v),
                    regexp: new m("regexp", v),
                    string: new m("string", v),
                    name: new m("name", v),
                    privateId: new m("privateId", v),
                    eof: new m("eof"),
                    bracketL: new m("[", {
                        beforeExpr: !0,
                        startsExpr: !0
                    }),
                    bracketR: new m("]"),
                    braceL: new m("{", {
                        beforeExpr: !0,
                        startsExpr: !0
                    }),
                    braceR: new m("}"),
                    parenL: new m("(", {
                        beforeExpr: !0,
                        startsExpr: !0
                    }),
                    parenR: new m(")"),
                    comma: new m(",", g),
                    semi: new m(";", g),
                    colon: new m(":", g),
                    dot: new m("."),
                    question: new m("?", g),
                    questionDot: new m("?."),
                    arrow: new m("=>", g),
                    template: new m("template"),
                    invalidTemplate: new m("invalidTemplate"),
                    ellipsis: new m("...", g),
                    backQuote: new m("`", v),
                    dollarBraceL: new m("${", {
                        beforeExpr: !0,
                        startsExpr: !0
                    }),
                    eq: new m("=", {
                        beforeExpr: !0,
                        isAssign: !0
                    }),
                    assign: new m("_=", {
                        beforeExpr: !0,
                        isAssign: !0
                    }),
                    incDec: new m("++/--", {
                        prefix: !0,
                        postfix: !0,
                        startsExpr: !0
                    }),
                    prefix: new m("!/~", {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0
                    }),
                    logicalOR: x("||", 1),
                    logicalAND: x("&&", 2),
                    bitwiseOR: x("|", 3),
                    bitwiseXOR: x("^", 4),
                    bitwiseAND: x("&", 5),
                    equality: x("==/!=/===/!==", 6),
                    relational: x("</>/<=/>=", 7),
                    bitShift: x("<</>>/>>>", 8),
                    plusMin: new m("+/-", {
                        beforeExpr: !0,
                        binop: 9,
                        prefix: !0,
                        startsExpr: !0
                    }),
                    modulo: x("%", 10),
                    star: x("*", 10),
                    slash: x("/", 10),
                    starstar: new m("**", {
                        beforeExpr: !0
                    }),
                    coalesce: x("??", 1),
                    _break: b("break"),
                    _case: b("case", g),
                    _catch: b("catch"),
                    _continue: b("continue"),
                    _debugger: b("debugger"),
                    _default: b("default", g),
                    _do: b("do", {
                        isLoop: !0,
                        beforeExpr: !0
                    }),
                    _else: b("else", g),
                    _finally: b("finally"),
                    _for: b("for", {
                        isLoop: !0
                    }),
                    _function: b("function", v),
                    _if: b("if"),
                    _return: b("return", g),
                    _switch: b("switch"),
                    _throw: b("throw", g),
                    _try: b("try"),
                    _var: b("var"),
                    _const: b("const"),
                    _while: b("while", {
                        isLoop: !0
                    }),
                    _with: b("with"),
                    _new: b("new", {
                        beforeExpr: !0,
                        startsExpr: !0
                    }),
                    _this: b("this", v),
                    _super: b("super", v),
                    _class: b("class", v),
                    _extends: b("extends", g),
                    _export: b("export"),
                    _import: b("import", v),
                    _null: b("null", v),
                    _true: b("true", v),
                    _false: b("false", v),
                    _in: b("in", {
                        beforeExpr: !0,
                        binop: 7
                    }),
                    _instanceof: b("instanceof", {
                        beforeExpr: !0,
                        binop: 7
                    }),
                    _typeof: b("typeof", {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0
                    }),
                    _void: b("void", {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0
                    }),
                    _delete: b("delete", {
                        beforeExpr: !0,
                        prefix: !0,
                        startsExpr: !0
                    })
                },
                k = /\r\n?|\n|\u2028|\u2029/,
                C = RegExp(k.source, "g");

            function S(t) {
                return 10 === t || 13 === t || 8232 === t || 8233 === t
            }

            function w(t, e, i) {
                void 0 === i && (i = t.length);
                for (var s = e; s < i; s++) {
                    var r = t.charCodeAt(s);
                    if (S(r)) return s < i - 1 && 13 === r && 10 === t.charCodeAt(s + 1) ? s + 2 : s + 1
                }
                return -1
            }
            var E = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                I = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                A = Object.prototype,
                P = A.hasOwnProperty,
                N = A.toString,
                V = Object.hasOwn || function(t, e) {
                    return P.call(t, e)
                },
                T = Array.isArray || function(t) {
                    return "[object Array]" === N.call(t)
                },
                L = Object.create(null);

            function R(t) {
                return L[t] || (L[t] = RegExp("^(?:" + t.replace(/ /g, "|") + ")$"))
            }

            function D(t) {
                return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(((t -= 65536) >> 10) + 55296, (1023 & t) + 56320)
            }
            var O = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
                B = function(t, e) {
                    this.line = t, this.column = e
                };
            B.prototype.offset = function(t) {
                return new B(this.line, this.column + t)
            };
            var M = function(t, e, i) {
                this.start = e, this.end = i, null !== t.sourceFile && (this.source = t.sourceFile)
            };

            function F(t, e) {
                for (var i = 1, s = 0;;) {
                    var r = w(t, s, e);
                    if (r < 0) return new B(i, e - s);
                    ++i, s = r
                }
            }
            var U = {
                    ecmaVersion: null,
                    sourceType: "script",
                    onInsertedSemicolon: null,
                    onTrailingComma: null,
                    allowReserved: null,
                    allowReturnOutsideFunction: !1,
                    allowImportExportEverywhere: !1,
                    allowAwaitOutsideFunction: null,
                    allowSuperOutsideMethod: null,
                    allowHashBang: !1,
                    checkPrivateFields: !0,
                    locations: !1,
                    onToken: null,
                    onComment: null,
                    ranges: !1,
                    program: null,
                    sourceFile: null,
                    directSourceFile: null,
                    preserveParens: !1
                },
                q = !1;

            function j(t, e) {
                return 2 | (t ? 4 : 0) | (e ? 8 : 0)
            }
            var G = function(t, e, i) {
                    this.options = t = function(t) {
                        var e, i = {};
                        for (var s in U) i[s] = t && V(t, s) ? t[s] : U[s];
                        if ("latest" === i.ecmaVersion ? i.ecmaVersion = 1e8 : null == i.ecmaVersion ? (!q && "object" == typeof console && console.warn && (q = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), i.ecmaVersion = 11) : i.ecmaVersion >= 2015 && (i.ecmaVersion -= 2009), null == i.allowReserved && (i.allowReserved = i.ecmaVersion < 5), t && null != t.allowHashBang || (i.allowHashBang = i.ecmaVersion >= 14), T(i.onToken)) {
                            var r = i.onToken;
                            i.onToken = function(t) {
                                return r.push(t)
                            }
                        }
                        return T(i.onComment) && (i.onComment = (e = i.onComment, function(t, s, r, a, n, o) {
                            var h = {
                                type: t ? "Block" : "Line",
                                value: s,
                                start: r,
                                end: a
                            };
                            i.locations && (h.loc = new M(this, n, o)), i.ranges && (h.range = [r, a]), e.push(h)
                        })), i
                    }(t), this.sourceFile = t.sourceFile, this.keywords = R(h[t.ecmaVersion >= 6 ? 6 : "module" === t.sourceType ? "5module" : 5]);
                    var s = "";
                    !0 !== t.allowReserved && (s = n[t.ecmaVersion >= 6 ? 6 : 5 === t.ecmaVersion ? 5 : 3], "module" === t.sourceType && (s += " await")), this.reservedWords = R(s);
                    var r = (s ? s + " " : "") + n.strict;
                    this.reservedWordsStrict = R(r), this.reservedWordsStrictBind = R(r + " " + n.strictBind), this.input = String(e), this.containsEsc = !1, i ? (this.pos = i, this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(k).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = _.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === t.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null, this.privateNameStack = []
                },
                H = {
                    inFunction: {
                        configurable: !0
                    },
                    inGenerator: {
                        configurable: !0
                    },
                    inAsync: {
                        configurable: !0
                    },
                    canAwait: {
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
                    },
                    allowNewDotTarget: {
                        configurable: !0
                    },
                    inClassStaticBlock: {
                        configurable: !0
                    }
                };
            G.prototype.parse = function() {
                var t = this.options.program || this.startNode();
                return this.nextToken(), this.parseTopLevel(t)
            }, H.inFunction.get = function() {
                return (2 & this.currentVarScope().flags) > 0
            }, H.inGenerator.get = function() {
                return (8 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit
            }, H.inAsync.get = function() {
                return (4 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit
            }, H.canAwait.get = function() {
                for (var t = this.scopeStack.length - 1; t >= 0; t--) {
                    var e = this.scopeStack[t];
                    if (e.inClassFieldInit || 256 & e.flags) return !1;
                    if (2 & e.flags) return (4 & e.flags) > 0
                }
                return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction
            }, H.allowSuper.get = function() {
                var t = this.currentThisScope(),
                    e = t.flags,
                    i = t.inClassFieldInit;
                return (64 & e) > 0 || i || this.options.allowSuperOutsideMethod
            }, H.allowDirectSuper.get = function() {
                return (128 & this.currentThisScope().flags) > 0
            }, H.treatFunctionsAsVar.get = function() {
                return this.treatFunctionsAsVarInScope(this.currentScope())
            }, H.allowNewDotTarget.get = function() {
                var t = this.currentThisScope(),
                    e = t.flags,
                    i = t.inClassFieldInit;
                return (258 & e) > 0 || i
            }, H.inClassStaticBlock.get = function() {
                return (256 & this.currentVarScope().flags) > 0
            }, G.extend = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                for (var i = this, s = 0; s < t.length; s++) i = t[s](i);
                return i
            }, G.parse = function(t, e) {
                return new this(e, t).parse()
            }, G.parseExpressionAt = function(t, e, i) {
                var s = new this(i, t, e);
                return s.nextToken(), s.parseExpression()
            }, G.tokenizer = function(t, e) {
                return new this(e, t)
            }, Object.defineProperties(G.prototype, H);
            var W = G.prototype,
                z = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
            W.strictDirective = function(t) {
                if (this.options.ecmaVersion < 5) return !1;
                for (;;) {
                    I.lastIndex = t, t += I.exec(this.input)[0].length;
                    var e = z.exec(this.input.slice(t));
                    if (!e) return !1;
                    if ("use strict" === (e[1] || e[2])) {
                        I.lastIndex = t + e[0].length;
                        var i = I.exec(this.input),
                            s = i.index + i[0].length,
                            r = this.input.charAt(s);
                        return ";" === r || "}" === r || k.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || "!" === r && "=" === this.input.charAt(s + 1))
                    }
                    t += e[0].length, I.lastIndex = t, t += I.exec(this.input)[0].length, ";" === this.input[t] && t++
                }
            }, W.eat = function(t) {
                return this.type === t && (this.next(), !0)
            }, W.isContextual = function(t) {
                return this.type === _.name && this.value === t && !this.containsEsc
            }, W.eatContextual = function(t) {
                return !!this.isContextual(t) && (this.next(), !0)
            }, W.expectContextual = function(t) {
                this.eatContextual(t) || this.unexpected()
            }, W.canInsertSemicolon = function() {
                return this.type === _.eof || this.type === _.braceR || k.test(this.input.slice(this.lastTokEnd, this.start))
            }, W.insertSemicolon = function() {
                if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
            }, W.semicolon = function() {
                this.eat(_.semi) || this.insertSemicolon() || this.unexpected()
            }, W.afterTrailingComma = function(t, e) {
                if (this.type === t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0
            }, W.expect = function(t) {
                this.eat(t) || this.unexpected()
            }, W.unexpected = function(t) {
                this.raise(null != t ? t : this.start, "Unexpected token")
            };
            var K = function() {
                this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
            };
            W.checkPatternErrors = function(t, e) {
                if (t) {
                    t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
                    var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
                    i > -1 && this.raiseRecoverable(i, e ? "Assigning to rvalue" : "Parenthesized pattern")
                }
            }, W.checkExpressionErrors = function(t, e) {
                if (!t) return !1;
                var i = t.shorthandAssign,
                    s = t.doubleProto;
                if (!e) return i >= 0 || s >= 0;
                i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property")
            }, W.checkYieldAwaitInDefaultParams = function() {
                this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
            }, W.isSimpleAssignTarget = function(t) {
                return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type
            };
            var Q = G.prototype;
            Q.parseTopLevel = function(t) {
                var e = Object.create(null);
                for (t.body || (t.body = []); this.type !== _.eof;) {
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
            var Y = {
                    kind: "loop"
                },
                X = {
                    kind: "switch"
                };
            Q.isLet = function(t) {
                if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
                I.lastIndex = this.pos;
                var e = I.exec(this.input),
                    i = this.pos + e[0].length,
                    s = this.input.charCodeAt(i);
                if (91 === s || 92 === s) return !0;
                if (t) return !1;
                if (123 === s || s > 55295 && s < 56320) return !0;
                if (d(s, !0)) {
                    for (var r = i + 1; f(s = this.input.charCodeAt(r), !0);) ++r;
                    if (92 === s || s > 55295 && s < 56320) return !0;
                    var a = this.input.slice(i, r);
                    if (!p.test(a)) return !0
                }
                return !1
            }, Q.isAsyncFunction = function() {
                if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
                I.lastIndex = this.pos;
                var t, e = I.exec(this.input),
                    i = this.pos + e[0].length;
                return !k.test(this.input.slice(this.pos, i)) && "function" === this.input.slice(i, i + 8) && (i + 8 === this.input.length || !(f(t = this.input.charCodeAt(i + 8)) || t > 55295 && t < 56320))
            }, Q.parseStatement = function(t, e, i) {
                var s, r = this.type,
                    a = this.startNode();
                switch (this.isLet(t) && (r = _._var, s = "let"), r) {
                    case _._break:
                    case _._continue:
                        return this.parseBreakContinueStatement(a, r.keyword);
                    case _._debugger:
                        return this.parseDebuggerStatement(a);
                    case _._do:
                        return this.parseDoStatement(a);
                    case _._for:
                        return this.parseForStatement(a);
                    case _._function:
                        return t && (this.strict || "if" !== t && "label" !== t) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(a, !1, !t);
                    case _._class:
                        return t && this.unexpected(), this.parseClass(a, !0);
                    case _._if:
                        return this.parseIfStatement(a);
                    case _._return:
                        return this.parseReturnStatement(a);
                    case _._switch:
                        return this.parseSwitchStatement(a);
                    case _._throw:
                        return this.parseThrowStatement(a);
                    case _._try:
                        return this.parseTryStatement(a);
                    case _._const:
                    case _._var:
                        return s = s || this.value, t && "var" !== s && this.unexpected(), this.parseVarStatement(a, s);
                    case _._while:
                        return this.parseWhileStatement(a);
                    case _._with:
                        return this.parseWithStatement(a);
                    case _.braceL:
                        return this.parseBlock(!0, a);
                    case _.semi:
                        return this.parseEmptyStatement(a);
                    case _._export:
                    case _._import:
                        if (this.options.ecmaVersion > 10 && r === _._import) {
                            I.lastIndex = this.pos;
                            var n = I.exec(this.input),
                                o = this.pos + n[0].length,
                                h = this.input.charCodeAt(o);
                            if (40 === h || 46 === h) return this.parseExpressionStatement(a, this.parseExpression())
                        }
                        return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === _._import ? this.parseImport(a) : this.parseExport(a, i);
                    default:
                        if (this.isAsyncFunction()) return t && this.unexpected(), this.next(), this.parseFunctionStatement(a, !0, !t);
                        var p = this.value,
                            c = this.parseExpression();
                        if (r === _.name && "Identifier" === c.type && this.eat(_.colon)) return this.parseLabeledStatement(a, p, c, t);
                        return this.parseExpressionStatement(a, c)
                }
            }, Q.parseBreakContinueStatement = function(t, e) {
                var i = "break" === e;
                this.next(), this.eat(_.semi) || this.insertSemicolon() ? t.label = null : this.type !== _.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
                for (var s = 0; s < this.labels.length; ++s) {
                    var r = this.labels[s];
                    if ((null == t.label || r.name === t.label.name) && (null != r.kind && (i || "loop" === r.kind) || t.label && i)) break
                }
                return s === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, i ? "BreakStatement" : "ContinueStatement")
            }, Q.parseDebuggerStatement = function(t) {
                return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement")
            }, Q.parseDoStatement = function(t) {
                return this.next(), this.labels.push(Y), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(_._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(_.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement")
            }, Q.parseForStatement = function(t) {
                this.next();
                var e = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
                if (this.labels.push(Y), this.enterScope(0), this.expect(_.parenL), this.type === _.semi) return e > -1 && this.unexpected(e), this.parseFor(t, null);
                var i = this.isLet();
                if (this.type === _._var || this.type === _._const || i) {
                    var s = this.startNode(),
                        r = i ? "let" : this.value;
                    return (this.next(), this.parseVar(s, !0, r), this.finishNode(s, "VariableDeclaration"), (this.type === _._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === s.declarations.length) ? (this.options.ecmaVersion >= 9 && (this.type === _._in ? e > -1 && this.unexpected(e) : t.await = e > -1), this.parseForIn(t, s)) : (e > -1 && this.unexpected(e), this.parseFor(t, s))
                }
                var a = this.isContextual("let"),
                    n = !1,
                    o = this.containsEsc,
                    h = new K,
                    p = this.start,
                    c = e > -1 ? this.parseExprSubscripts(h, "await") : this.parseExpression(!0, h);
                return this.type === _._in || (n = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (e > -1 ? (this.type === _._in && this.unexpected(e), t.await = !0) : n && this.options.ecmaVersion >= 8 && (c.start !== p || o || "Identifier" !== c.type || "async" !== c.name ? this.options.ecmaVersion >= 9 && (t.await = !1) : this.unexpected()), a && n && this.raise(c.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(c, !1, h), this.checkLValPattern(c), this.parseForIn(t, c)) : (this.checkExpressionErrors(h, !0), e > -1 && this.unexpected(e), this.parseFor(t, c))
            }, Q.parseFunctionStatement = function(t, e, i) {
                return this.next(), this.parseFunction(t, $ | (i ? 0 : J), !1, e)
            }, Q.parseIfStatement = function(t) {
                return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(_._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement")
            }, Q.parseReturnStatement = function(t) {
                return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(_.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement")
            }, Q.parseSwitchStatement = function(t) {
                this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(_.braceL), this.labels.push(X), this.enterScope(0);
                for (var e, i = !1; this.type !== _.braceR;)
                    if (this.type === _._case || this.type === _._default) {
                        var s = this.type === _._case;
                        e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), s ? e.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, e.test = null), this.expect(_.colon)
                    } else e || this.unexpected(), e.consequent.push(this.parseStatement(null));
                return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement")
            }, Q.parseThrowStatement = function(t) {
                return this.next(), k.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement")
            };
            var Z = [];
            Q.parseCatchClauseParam = function() {
                var t = this.parseBindingAtom(),
                    e = "Identifier" === t.type;
                return this.enterScope(e ? 32 : 0), this.checkLValPattern(t, e ? 4 : 2), this.expect(_.parenR), t
            }, Q.parseTryStatement = function(t) {
                if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === _._catch) {
                    var e = this.startNode();
                    this.next(), this.eat(_.parenL) ? e.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0)), e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause")
                }
                return t.finalizer = this.eat(_._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement")
            }, Q.parseVarStatement = function(t, e, i) {
                return this.next(), this.parseVar(t, !1, e, i), this.semicolon(), this.finishNode(t, "VariableDeclaration")
            }, Q.parseWhileStatement = function(t) {
                return this.next(), t.test = this.parseParenExpression(), this.labels.push(Y), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement")
            }, Q.parseWithStatement = function(t) {
                return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement")
            }, Q.parseEmptyStatement = function(t) {
                return this.next(), this.finishNode(t, "EmptyStatement")
            }, Q.parseLabeledStatement = function(t, e, i, s) {
                for (var r = 0, a = this.labels; r < a.length; r += 1) a[r].name === e && this.raise(i.start, "Label '" + e + "' is already declared");
                for (var n = this.type.isLoop ? "loop" : this.type === _._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
                    var h = this.labels[o];
                    if (h.statementStart === t.start) h.statementStart = this.start, h.kind = n;
                    else break
                }
                return this.labels.push({
                    name: e,
                    kind: n,
                    statementStart: this.start
                }), t.body = this.parseStatement(s ? -1 === s.indexOf("label") ? s + "label" : s : "label"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement")
            }, Q.parseExpressionStatement = function(t, e) {
                return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement")
            }, Q.parseBlock = function(t, e, i) {
                for (void 0 === t && (t = !0), void 0 === e && (e = this.startNode()), e.body = [], this.expect(_.braceL), t && this.enterScope(0); this.type !== _.braceR;) {
                    var s = this.parseStatement(null);
                    e.body.push(s)
                }
                return i && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement")
            }, Q.parseFor = function(t, e) {
                return t.init = e, this.expect(_.semi), t.test = this.type === _.semi ? null : this.parseExpression(), this.expect(_.semi), t.update = this.type === _.parenR ? null : this.parseExpression(), this.expect(_.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement")
            }, Q.parseForIn = function(t, e) {
                var i = this.type === _._in;
                return this.next(), "VariableDeclaration" === e.type && null != e.declarations[0].init && (!i || this.options.ecmaVersion < 8 || this.strict || "var" !== e.kind || "Identifier" !== e.declarations[0].id.type) && this.raise(e.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(_.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement")
            }, Q.parseVar = function(t, e, i, s) {
                for (t.declarations = [], t.kind = i;;) {
                    var r = this.startNode();
                    if (this.parseVarId(r, i), this.eat(_.eq) ? r.init = this.parseMaybeAssign(e) : s || "const" !== i || this.type === _._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? s || "Identifier" === r.id.type || e && (this.type === _._in || this.isContextual("of")) ? r.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), t.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(_.comma)) break
                }
                return t
            }, Q.parseVarId = function(t, e) {
                t.id = this.parseBindingAtom(), this.checkLValPattern(t.id, "var" === e ? 1 : 2, !1)
            };
            var $ = 1,
                J = 2;

            function tt(t, e) {
                var i = t.computed,
                    s = t.key;
                return !i && ("Identifier" === s.type && s.name === e || "Literal" === s.type && s.value === e)
            }
            Q.parseFunction = function(t, e, i, s, r) {
                this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === _.star && e & J && this.unexpected(), t.generator = this.eat(_.star)), this.options.ecmaVersion >= 8 && (t.async = !!s), e & $ && (t.id = 4 & e && this.type !== _.name ? null : this.parseIdent(), t.id && !(e & J) && this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
                var a = this.yieldPos,
                    n = this.awaitPos,
                    o = this.awaitIdentPos;
                return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(j(t.async, t.generator)), e & $ || (t.id = this.type === _.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i, !1, r), this.yieldPos = a, this.awaitPos = n, this.awaitIdentPos = o, this.finishNode(t, e & $ ? "FunctionDeclaration" : "FunctionExpression")
            }, Q.parseFunctionParams = function(t) {
                this.expect(_.parenL), t.params = this.parseBindingList(_.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
            }, Q.parseClass = function(t, e) {
                this.next();
                var i = this.strict;
                this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
                var s = this.enterClassBody(),
                    r = this.startNode(),
                    a = !1;
                for (r.body = [], this.expect(_.braceL); this.type !== _.braceR;) {
                    var n = this.parseClassElement(null !== t.superClass);
                    n && (r.body.push(n), "MethodDefinition" === n.type && "constructor" === n.kind ? (a && this.raiseRecoverable(n.start, "Duplicate constructor in the same class"), a = !0) : n.key && "PrivateIdentifier" === n.key.type && function(t, e) {
                        var i = e.key.name,
                            s = t[i],
                            r = "true";
                        return ("MethodDefinition" === e.type && ("get" === e.kind || "set" === e.kind) && (r = (e.static ? "s" : "i") + e.kind), "iget" === s && "iset" === r || "iset" === s && "iget" === r || "sget" === s && "sset" === r || "sset" === s && "sget" === r) ? (t[i] = "true", !1) : !!s || (t[i] = r, !1)
                    }(s, n) && this.raiseRecoverable(n.key.start, "Identifier '#" + n.key.name + "' has already been declared"))
                }
                return this.strict = i, this.next(), t.body = this.finishNode(r, "ClassBody"), this.exitClassBody(), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
            }, Q.parseClassElement = function(t) {
                if (this.eat(_.semi)) return null;
                var e = this.options.ecmaVersion,
                    i = this.startNode(),
                    s = "",
                    r = !1,
                    a = !1,
                    n = "method",
                    o = !1;
                if (this.eatContextual("static")) {
                    if (e >= 13 && this.eat(_.braceL)) return this.parseClassStaticBlock(i), i;
                    this.isClassElementNameStart() || this.type === _.star ? o = !0 : s = "static"
                }
                if (i.static = o, !s && e >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === _.star) && !this.canInsertSemicolon() ? a = !0 : s = "async"), !s && (e >= 9 || !a) && this.eat(_.star) && (r = !0), !s && !a && !r) {
                    var h = this.value;
                    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? n = h : s = h)
                }
                if (s ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = s, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), e < 13 || this.type === _.parenL || "method" !== n || r || a) {
                    var p = !i.static && tt(i, "constructor");
                    p && "method" !== n && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = p ? "constructor" : n, this.parseClassMethod(i, r, a, p && t)
                } else this.parseClassField(i);
                return i
            }, Q.isClassElementNameStart = function() {
                return this.type === _.name || this.type === _.privateId || this.type === _.num || this.type === _.string || this.type === _.bracketL || this.type.keyword
            }, Q.parseClassElementName = function(t) {
                this.type === _.privateId ? ("constructor" === this.value && this.raise(this.start, "Classes can't have an element named '#constructor'"), t.computed = !1, t.key = this.parsePrivateIdent()) : this.parsePropertyName(t)
            }, Q.parseClassMethod = function(t, e, i, s) {
                var r = t.key;
                "constructor" === t.kind ? (e && this.raise(r.start, "Constructor can't be a generator"), i && this.raise(r.start, "Constructor can't be an async method")) : t.static && tt(t, "prototype") && this.raise(r.start, "Classes may not have a static property named prototype");
                var a = t.value = this.parseMethod(e, i, s);
                return "get" === t.kind && 0 !== a.params.length && this.raiseRecoverable(a.start, "getter should have no params"), "set" === t.kind && 1 !== a.params.length && this.raiseRecoverable(a.start, "setter should have exactly one param"), "set" === t.kind && "RestElement" === a.params[0].type && this.raiseRecoverable(a.params[0].start, "Setter cannot use rest params"), this.finishNode(t, "MethodDefinition")
            }, Q.parseClassField = function(t) {
                if (tt(t, "constructor") ? this.raise(t.key.start, "Classes can't have a field named 'constructor'") : t.static && tt(t, "prototype") && this.raise(t.key.start, "Classes can't have a static field named 'prototype'"), this.eat(_.eq)) {
                    var e = this.currentThisScope(),
                        i = e.inClassFieldInit;
                    e.inClassFieldInit = !0, t.value = this.parseMaybeAssign(), e.inClassFieldInit = i
                } else t.value = null;
                return this.semicolon(), this.finishNode(t, "PropertyDefinition")
            }, Q.parseClassStaticBlock = function(t) {
                t.body = [];
                var e = this.labels;
                for (this.labels = [], this.enterScope(320); this.type !== _.braceR;) {
                    var i = this.parseStatement(null);
                    t.body.push(i)
                }
                return this.next(), this.exitScope(), this.labels = e, this.finishNode(t, "StaticBlock")
            }, Q.parseClassId = function(t, e) {
                this.type === _.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, 2, !1)) : (!0 === e && this.unexpected(), t.id = null)
            }, Q.parseClassSuper = function(t) {
                t.superClass = this.eat(_._extends) ? this.parseExprSubscripts(null, !1) : null
            }, Q.enterClassBody = function() {
                var t = {
                    declared: Object.create(null),
                    used: []
                };
                return this.privateNameStack.push(t), t.declared
            }, Q.exitClassBody = function() {
                var t = this.privateNameStack.pop(),
                    e = t.declared,
                    i = t.used;
                if (this.options.checkPrivateFields)
                    for (var s = this.privateNameStack.length, r = 0 === s ? null : this.privateNameStack[s - 1], a = 0; a < i.length; ++a) {
                        var n = i[a];
                        V(e, n.name) || (r ? r.used.push(n) : this.raiseRecoverable(n.start, "Private field '#" + n.name + "' must be declared in an enclosing class"))
                    }
            }, Q.parseExportAllDeclaration = function(t, e) {
                return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseModuleExportName(), this.checkExport(e, t.exported, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== _.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ExportAllDeclaration")
            }, Q.parseExport = function(t, e) {
                if (this.next(), this.eat(_.star)) return this.parseExportAllDeclaration(t, e);
                if (this.eat(_._default)) return this.checkExport(e, "default", this.lastTokStart), t.declaration = this.parseExportDefaultDeclaration(), this.finishNode(t, "ExportDefaultDeclaration");
                if (this.shouldParseExportStatement()) t.declaration = this.parseExportDeclaration(t), "VariableDeclaration" === t.declaration.type ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id, t.declaration.id.start), t.specifiers = [], t.source = null;
                else {
                    if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from")) this.type !== _.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause());
                    else {
                        for (var i = 0, s = t.specifiers; i < s.length; i += 1) {
                            var r = s[i];
                            this.checkUnreserved(r.local), this.checkLocalExport(r.local), "Literal" === r.local.type && this.raise(r.local.start, "A string literal cannot be used as an exported binding without `from`.")
                        }
                        t.source = null
                    }
                    this.semicolon()
                }
                return this.finishNode(t, "ExportNamedDeclaration")
            }, Q.parseExportDeclaration = function(t) {
                return this.parseStatement(null)
            }, Q.parseExportDefaultDeclaration = function() {
                if (this.type === _._function || (t = this.isAsyncFunction())) {
                    var t, e = this.startNode();
                    return this.next(), t && this.next(), this.parseFunction(e, 4 | $, !1, t)
                }
                if (this.type === _._class) {
                    var i = this.startNode();
                    return this.parseClass(i, "nullableID")
                }
                var s = this.parseMaybeAssign();
                return this.semicolon(), s
            }, Q.checkExport = function(t, e, i) {
                t && ("string" != typeof e && (e = "Identifier" === e.type ? e.name : e.value), V(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0)
            }, Q.checkPatternExport = function(t, e) {
                var i = e.type;
                if ("Identifier" === i) this.checkExport(t, e, e.start);
                else if ("ObjectPattern" === i)
                    for (var s = 0, r = e.properties; s < r.length; s += 1) {
                        var a = r[s];
                        this.checkPatternExport(t, a)
                    } else if ("ArrayPattern" === i)
                        for (var n = 0, o = e.elements; n < o.length; n += 1) {
                            var h = o[n];
                            h && this.checkPatternExport(t, h)
                        } else "Property" === i ? this.checkPatternExport(t, e.value) : "AssignmentPattern" === i ? this.checkPatternExport(t, e.left) : "RestElement" === i && this.checkPatternExport(t, e.argument)
            }, Q.checkVariableExport = function(t, e) {
                if (t)
                    for (var i = 0; i < e.length; i += 1) {
                        var s = e[i];
                        this.checkPatternExport(t, s.id)
                    }
            }, Q.shouldParseExportStatement = function() {
                return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
            }, Q.parseExportSpecifier = function(t) {
                var e = this.startNode();
                return e.local = this.parseModuleExportName(), e.exported = this.eatContextual("as") ? this.parseModuleExportName() : e.local, this.checkExport(t, e.exported, e.exported.start), this.finishNode(e, "ExportSpecifier")
            }, Q.parseExportSpecifiers = function(t) {
                var e = [],
                    i = !0;
                for (this.expect(_.braceL); !this.eat(_.braceR);) {
                    if (i) i = !1;
                    else if (this.expect(_.comma), this.afterTrailingComma(_.braceR)) break;
                    e.push(this.parseExportSpecifier(t))
                }
                return e
            }, Q.parseImport = function(t) {
                return this.next(), this.type === _.string ? (t.specifiers = Z, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === _.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ImportDeclaration")
            }, Q.parseImportSpecifier = function() {
                var t = this.startNode();
                return t.imported = this.parseModuleExportName(), this.eatContextual("as") ? t.local = this.parseIdent() : (this.checkUnreserved(t.imported), t.local = t.imported), this.checkLValSimple(t.local, 2), this.finishNode(t, "ImportSpecifier")
            }, Q.parseImportDefaultSpecifier = function() {
                var t = this.startNode();
                return t.local = this.parseIdent(), this.checkLValSimple(t.local, 2), this.finishNode(t, "ImportDefaultSpecifier")
            }, Q.parseImportNamespaceSpecifier = function() {
                var t = this.startNode();
                return this.next(), this.expectContextual("as"), t.local = this.parseIdent(), this.checkLValSimple(t.local, 2), this.finishNode(t, "ImportNamespaceSpecifier")
            }, Q.parseImportSpecifiers = function() {
                var t = [],
                    e = !0;
                if (this.type === _.name && (t.push(this.parseImportDefaultSpecifier()), !this.eat(_.comma))) return t;
                if (this.type === _.star) return t.push(this.parseImportNamespaceSpecifier()), t;
                for (this.expect(_.braceL); !this.eat(_.braceR);) {
                    if (e) e = !1;
                    else if (this.expect(_.comma), this.afterTrailingComma(_.braceR)) break;
                    t.push(this.parseImportSpecifier())
                }
                return t
            }, Q.parseWithClause = function() {
                var t = [];
                if (!this.eat(_._with)) return t;
                this.expect(_.braceL);
                for (var e = {}, i = !0; !this.eat(_.braceR);) {
                    if (i) i = !1;
                    else if (this.expect(_.comma), this.afterTrailingComma(_.braceR)) break;
                    var s = this.parseImportAttribute(),
                        r = "Identifier" === s.key.type ? s.key.name : s.key.value;
                    V(e, r) && this.raiseRecoverable(s.key.start, "Duplicate attribute key '" + r + "'"), e[r] = !0, t.push(s)
                }
                return t
            }, Q.parseImportAttribute = function() {
                var t = this.startNode();
                return t.key = this.type === _.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved), this.expect(_.colon), this.type !== _.string && this.unexpected(), t.value = this.parseExprAtom(), this.finishNode(t, "ImportAttribute")
            }, Q.parseModuleExportName = function() {
                if (this.options.ecmaVersion >= 13 && this.type === _.string) {
                    var t = this.parseLiteral(this.value);
                    return O.test(t.value) && this.raise(t.start, "An export name cannot include a lone surrogate."), t
                }
                return this.parseIdent(!0)
            }, Q.adaptDirectivePrologue = function(t) {
                for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) t[e].directive = t[e].expression.raw.slice(1, -1)
            }, Q.isDirectiveCandidate = function(t) {
                return this.options.ecmaVersion >= 5 && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && ('"' === this.input[t.start] || "'" === this.input[t.start])
            };
            var te = G.prototype;
            te.toAssignable = function(t, e, i) {
                if (this.options.ecmaVersion >= 6 && t) switch (t.type) {
                    case "Identifier":
                        this.inAsync && "await" === t.name && this.raise(t.start, "Cannot use 'await' as identifier inside an async function");
                        break;
                    case "ObjectPattern":
                    case "ArrayPattern":
                    case "AssignmentPattern":
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
            }, te.toAssignableList = function(t, e) {
                for (var i = t.length, s = 0; s < i; s++) {
                    var r = t[s];
                    r && this.toAssignable(r, e)
                }
                if (i) {
                    var a = t[i - 1];
                    6 === this.options.ecmaVersion && e && a && "RestElement" === a.type && "Identifier" !== a.argument.type && this.unexpected(a.argument.start)
                }
                return t
            }, te.parseSpread = function(t) {
                var e = this.startNode();
                return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement")
            }, te.parseRestBinding = function() {
                var t = this.startNode();
                return this.next(), 6 === this.options.ecmaVersion && this.type !== _.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement")
            }, te.parseBindingAtom = function() {
                if (this.options.ecmaVersion >= 6) switch (this.type) {
                    case _.bracketL:
                        var t = this.startNode();
                        return this.next(), t.elements = this.parseBindingList(_.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
                    case _.braceL:
                        return this.parseObj(!0)
                }
                return this.parseIdent()
            }, te.parseBindingList = function(t, e, i, s) {
                for (var r = [], a = !0; !this.eat(t);)
                    if (a ? a = !1 : this.expect(_.comma), e && this.type === _.comma) r.push(null);
                    else if (i && this.afterTrailingComma(t)) break;
                else if (this.type === _.ellipsis) {
                    var n = this.parseRestBinding();
                    this.parseBindingListItem(n), r.push(n), this.type === _.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(t);
                    break
                } else r.push(this.parseAssignableListItem(s));
                return r
            }, te.parseAssignableListItem = function(t) {
                var e = this.parseMaybeDefault(this.start, this.startLoc);
                return this.parseBindingListItem(e), e
            }, te.parseBindingListItem = function(t) {
                return t
            }, te.parseMaybeDefault = function(t, e, i) {
                if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(_.eq)) return i;
                var s = this.startNodeAt(t, e);
                return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern")
            }, te.checkLValSimple = function(t, e, i) {
                void 0 === e && (e = 0);
                var s = 0 !== e;
                switch (t.type) {
                    case "Identifier":
                        this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (s ? "Binding " : "Assigning to ") + t.name + " in strict mode"), s && (2 === e && "let" === t.name && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), i && (V(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), 5 !== e && this.declareName(t.name, e, t.start));
                        break;
                    case "ChainExpression":
                        this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
                        break;
                    case "MemberExpression":
                        s && this.raiseRecoverable(t.start, "Binding member expression");
                        break;
                    case "ParenthesizedExpression":
                        return s && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, i);
                    default:
                        this.raise(t.start, (s ? "Binding" : "Assigning to") + " rvalue")
                }
            }, te.checkLValPattern = function(t, e, i) {
                switch (void 0 === e && (e = 0), t.type) {
                    case "ObjectPattern":
                        for (var s = 0, r = t.properties; s < r.length; s += 1) {
                            var a = r[s];
                            this.checkLValInnerPattern(a, e, i)
                        }
                        break;
                    case "ArrayPattern":
                        for (var n = 0, o = t.elements; n < o.length; n += 1) {
                            var h = o[n];
                            h && this.checkLValInnerPattern(h, e, i)
                        }
                        break;
                    default:
                        this.checkLValSimple(t, e, i)
                }
            }, te.checkLValInnerPattern = function(t, e, i) {
                switch (void 0 === e && (e = 0), t.type) {
                    case "Property":
                        this.checkLValInnerPattern(t.value, e, i);
                        break;
                    case "AssignmentPattern":
                        this.checkLValPattern(t.left, e, i);
                        break;
                    case "RestElement":
                        this.checkLValPattern(t.argument, e, i);
                        break;
                    default:
                        this.checkLValPattern(t, e, i)
                }
            };
            var ti = function(t, e, i, s, r) {
                    this.token = t, this.isExpr = !!e, this.preserveSpace = !!i, this.override = s, this.generator = !!r
                },
                ts = {
                    b_stat: new ti("{", !1),
                    b_expr: new ti("{", !0),
                    b_tmpl: new ti("${", !1),
                    p_stat: new ti("(", !1),
                    p_expr: new ti("(", !0),
                    q_tmpl: new ti("`", !0, !0, function(t) {
                        return t.tryReadTemplateToken()
                    }),
                    f_stat: new ti("function", !1),
                    f_expr: new ti("function", !0),
                    f_expr_gen: new ti("function", !0, !1, null, !0),
                    f_gen: new ti("function", !1, !1, null, !0)
                },
                tr = G.prototype;
            tr.initialContext = function() {
                return [ts.b_stat]
            }, tr.curContext = function() {
                return this.context[this.context.length - 1]
            }, tr.braceIsBlock = function(t) {
                var e = this.curContext();
                return e === ts.f_expr || e === ts.f_stat || (t === _.colon && (e === ts.b_stat || e === ts.b_expr) ? !e.isExpr : t === _._return || t === _.name && this.exprAllowed ? k.test(this.input.slice(this.lastTokEnd, this.start)) : t === _._else || t === _.semi || t === _.eof || t === _.parenR || t === _.arrow || (t === _.braceL ? e === ts.b_stat : t !== _._var && t !== _._const && t !== _.name && !this.exprAllowed))
            }, tr.inGeneratorContext = function() {
                for (var t = this.context.length - 1; t >= 1; t--) {
                    var e = this.context[t];
                    if ("function" === e.token) return e.generator
                }
                return !1
            }, tr.updateContext = function(t) {
                var e, i = this.type;
                i.keyword && t === _.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr
            }, tr.overrideContext = function(t) {
                this.curContext() !== t && (this.context[this.context.length - 1] = t)
            }, _.parenR.updateContext = _.braceR.updateContext = function() {
                if (1 === this.context.length) {
                    this.exprAllowed = !0;
                    return
                }
                var t = this.context.pop();
                t === ts.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr
            }, _.braceL.updateContext = function(t) {
                this.context.push(this.braceIsBlock(t) ? ts.b_stat : ts.b_expr), this.exprAllowed = !0
            }, _.dollarBraceL.updateContext = function() {
                this.context.push(ts.b_tmpl), this.exprAllowed = !0
            }, _.parenL.updateContext = function(t) {
                var e = t === _._if || t === _._for || t === _._with || t === _._while;
                this.context.push(e ? ts.p_stat : ts.p_expr), this.exprAllowed = !0
            }, _.incDec.updateContext = function() {}, _._function.updateContext = _._class.updateContext = function(t) {
                !t.beforeExpr || t === _._else || t === _.semi && this.curContext() !== ts.p_stat || t === _._return && k.test(this.input.slice(this.lastTokEnd, this.start)) || (t === _.colon || t === _.braceL) && this.curContext() === ts.b_stat ? this.context.push(ts.f_stat) : this.context.push(ts.f_expr), this.exprAllowed = !1
            }, _.colon.updateContext = function() {
                "function" === this.curContext().token && this.context.pop(), this.exprAllowed = !0
            }, _.backQuote.updateContext = function() {
                this.curContext() === ts.q_tmpl ? this.context.pop() : this.context.push(ts.q_tmpl), this.exprAllowed = !1
            }, _.star.updateContext = function(t) {
                if (t === _._function) {
                    var e = this.context.length - 1;
                    this.context[e] === ts.f_expr ? this.context[e] = ts.f_expr_gen : this.context[e] = ts.f_gen
                }
                this.exprAllowed = !0
            }, _.name.updateContext = function(t) {
                var e = !1;
                this.options.ecmaVersion >= 6 && t !== _.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e
            };
            var ta = G.prototype;
            ta.checkPropClash = function(t, e, i) {
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
            }, ta.parseExpression = function(t, e) {
                var i = this.start,
                    s = this.startLoc,
                    r = this.parseMaybeAssign(t, e);
                if (this.type === _.comma) {
                    var a = this.startNodeAt(i, s);
                    for (a.expressions = [r]; this.eat(_.comma);) a.expressions.push(this.parseMaybeAssign(t, e));
                    return this.finishNode(a, "SequenceExpression")
                }
                return r
            }, ta.parseMaybeAssign = function(t, e, i) {
                if (this.isContextual("yield")) {
                    if (this.inGenerator) return this.parseYield(t);
                    this.exprAllowed = !1
                }
                var s = !1,
                    r = -1,
                    a = -1,
                    n = -1;
                e ? (r = e.parenthesizedAssign, a = e.trailingComma, n = e.doubleProto, e.parenthesizedAssign = e.trailingComma = -1) : (e = new K, s = !0);
                var o = this.start,
                    h = this.startLoc;
                (this.type === _.parenL || this.type === _.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = "await" === t);
                var p = this.parseMaybeConditional(t, e);
                if (i && (p = i.call(this, p, o, h)), this.type.isAssign) {
                    var c = this.startNodeAt(o, h);
                    return c.operator = this.value, this.type === _.eq && (p = this.toAssignable(p, !1, e)), s || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= p.start && (e.shorthandAssign = -1), this.type === _.eq ? this.checkLValPattern(p) : this.checkLValSimple(p), c.left = p, this.next(), c.right = this.parseMaybeAssign(t), n > -1 && (e.doubleProto = n), this.finishNode(c, "AssignmentExpression")
                }
                return s && this.checkExpressionErrors(e, !0), r > -1 && (e.parenthesizedAssign = r), a > -1 && (e.trailingComma = a), p
            }, ta.parseMaybeConditional = function(t, e) {
                var i = this.start,
                    s = this.startLoc,
                    r = this.parseExprOps(t, e);
                if (this.checkExpressionErrors(e)) return r;
                if (this.eat(_.question)) {
                    var a = this.startNodeAt(i, s);
                    return a.test = r, a.consequent = this.parseMaybeAssign(), this.expect(_.colon), a.alternate = this.parseMaybeAssign(t), this.finishNode(a, "ConditionalExpression")
                }
                return r
            }, ta.parseExprOps = function(t, e) {
                var i = this.start,
                    s = this.startLoc,
                    r = this.parseMaybeUnary(e, !1, !1, t);
                return this.checkExpressionErrors(e) ? r : r.start === i && "ArrowFunctionExpression" === r.type ? r : this.parseExprOp(r, i, s, -1, t)
            }, ta.parseExprOp = function(t, e, i, s, r) {
                var a = this.type.binop;
                if (null != a && (!r || this.type !== _._in) && a > s) {
                    var n = this.type === _.logicalOR || this.type === _.logicalAND,
                        o = this.type === _.coalesce;
                    o && (a = _.logicalAND.binop);
                    var h = this.value;
                    this.next();
                    var p = this.start,
                        c = this.startLoc,
                        l = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, r), p, c, a, r),
                        u = this.buildBinary(e, i, t, l, h, n || o);
                    return (n && this.type === _.coalesce || o && (this.type === _.logicalOR || this.type === _.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(u, e, i, s, r)
                }
                return t
            }, ta.buildBinary = function(t, e, i, s, r, a) {
                "PrivateIdentifier" === s.type && this.raise(s.start, "Private identifier can only be left side of binary expression");
                var n = this.startNodeAt(t, e);
                return n.left = i, n.operator = r, n.right = s, this.finishNode(n, a ? "LogicalExpression" : "BinaryExpression")
            }, ta.parseMaybeUnary = function(t, e, i, s) {
                var r, a = this.start,
                    n = this.startLoc;
                if (this.isContextual("await") && this.canAwait) r = this.parseAwait(s), e = !0;
                else if (this.type.prefix) {
                    var o = this.startNode(),
                        h = this.type === _.incDec;
                    o.operator = this.value, o.prefix = !0, this.next(), o.argument = this.parseMaybeUnary(null, !0, h, s), this.checkExpressionErrors(t, !0), h ? this.checkLValSimple(o.argument) : this.strict && "delete" === o.operator && function t(e) {
                        return "Identifier" === e.type || "ParenthesizedExpression" === e.type && t(e.expression)
                    }(o.argument) ? this.raiseRecoverable(o.start, "Deleting local variable in strict mode") : "delete" === o.operator && function t(e) {
                        return "MemberExpression" === e.type && "PrivateIdentifier" === e.property.type || "ChainExpression" === e.type && t(e.expression) || "ParenthesizedExpression" === e.type && t(e.expression)
                    }(o.argument) ? this.raiseRecoverable(o.start, "Private fields can not be deleted") : e = !0, r = this.finishNode(o, h ? "UpdateExpression" : "UnaryExpression")
                } else if (e || this.type !== _.privateId) {
                    if (r = this.parseExprSubscripts(t, s), this.checkExpressionErrors(t)) return r;
                    for (; this.type.postfix && !this.canInsertSemicolon();) {
                        var p = this.startNodeAt(a, n);
                        p.operator = this.value, p.prefix = !1, p.argument = r, this.checkLValSimple(r), this.next(), r = this.finishNode(p, "UpdateExpression")
                    }
                } else(s || 0 === this.privateNameStack.length) && this.options.checkPrivateFields && this.unexpected(), r = this.parsePrivateIdent(), this.type !== _._in && this.unexpected();
                return !i && this.eat(_.starstar) ? e ? void this.unexpected(this.lastTokStart) : this.buildBinary(a, n, r, this.parseMaybeUnary(null, !1, !1, s), "**", !1) : r
            }, ta.parseExprSubscripts = function(t, e) {
                var i = this.start,
                    s = this.startLoc,
                    r = this.parseExprAtom(t, e);
                if ("ArrowFunctionExpression" === r.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return r;
                var a = this.parseSubscripts(r, i, s, !1, e);
                return t && "MemberExpression" === a.type && (t.parenthesizedAssign >= a.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= a.start && (t.parenthesizedBind = -1), t.trailingComma >= a.start && (t.trailingComma = -1)), a
            }, ta.parseSubscripts = function(t, e, i, s, r) {
                for (var a = this.options.ecmaVersion >= 8 && "Identifier" === t.type && "async" === t.name && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start == 5 && this.potentialArrowAt === t.start, n = !1;;) {
                    var o = this.parseSubscript(t, e, i, s, a, n, r);
                    if (o.optional && (n = !0), o === t || "ArrowFunctionExpression" === o.type) {
                        if (n) {
                            var h = this.startNodeAt(e, i);
                            h.expression = o, o = this.finishNode(h, "ChainExpression")
                        }
                        return o
                    }
                    t = o
                }
            }, ta.shouldParseAsyncArrow = function() {
                return !this.canInsertSemicolon() && this.eat(_.arrow)
            }, ta.parseSubscriptAsyncArrow = function(t, e, i, s) {
                return this.parseArrowExpression(this.startNodeAt(t, e), i, !0, s)
            }, ta.parseSubscript = function(t, e, i, s, r, a, n) {
                var o = this.options.ecmaVersion >= 11,
                    h = o && this.eat(_.questionDot);
                s && h && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
                var p = this.eat(_.bracketL);
                if (p || h && this.type !== _.parenL && this.type !== _.backQuote || this.eat(_.dot)) {
                    var c = this.startNodeAt(e, i);
                    c.object = t, p ? (c.property = this.parseExpression(), this.expect(_.bracketR)) : this.type === _.privateId && "Super" !== t.type ? c.property = this.parsePrivateIdent() : c.property = this.parseIdent("never" !== this.options.allowReserved), c.computed = !!p, o && (c.optional = h), t = this.finishNode(c, "MemberExpression")
                } else if (!s && this.eat(_.parenL)) {
                    var l = new K,
                        u = this.yieldPos,
                        d = this.awaitPos,
                        f = this.awaitIdentPos;
                    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
                    var m = this.parseExprList(_.parenR, this.options.ecmaVersion >= 8, !1, l);
                    if (r && !h && this.shouldParseAsyncArrow()) return this.checkPatternErrors(l, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = u, this.awaitPos = d, this.awaitIdentPos = f, this.parseSubscriptAsyncArrow(e, i, m, n);
                    this.checkExpressionErrors(l, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = d || this.awaitPos, this.awaitIdentPos = f || this.awaitIdentPos;
                    var x = this.startNodeAt(e, i);
                    x.callee = t, x.arguments = m, o && (x.optional = h), t = this.finishNode(x, "CallExpression")
                } else if (this.type === _.backQuote) {
                    (h || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                    var g = this.startNodeAt(e, i);
                    g.tag = t, g.quasi = this.parseTemplate({
                        isTagged: !0
                    }), t = this.finishNode(g, "TaggedTemplateExpression")
                }
                return t
            }, ta.parseExprAtom = function(t, e, i) {
                this.type === _.slash && this.readRegexp();
                var s, r = this.potentialArrowAt === this.start;
                switch (this.type) {
                    case _._super:
                        return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), s = this.startNode(), this.next(), this.type !== _.parenL || this.allowDirectSuper || this.raise(s.start, "super() call outside constructor of a subclass"), this.type !== _.dot && this.type !== _.bracketL && this.type !== _.parenL && this.unexpected(), this.finishNode(s, "Super");
                    case _._this:
                        return s = this.startNode(), this.next(), this.finishNode(s, "ThisExpression");
                    case _.name:
                        var a = this.start,
                            n = this.startLoc,
                            o = this.containsEsc,
                            h = this.parseIdent(!1);
                        if (this.options.ecmaVersion >= 8 && !o && "async" === h.name && !this.canInsertSemicolon() && this.eat(_._function)) return this.overrideContext(ts.f_expr), this.parseFunction(this.startNodeAt(a, n), 0, !1, !0, e);
                        if (r && !this.canInsertSemicolon()) {
                            if (this.eat(_.arrow)) return this.parseArrowExpression(this.startNodeAt(a, n), [h], !1, e);
                            if (this.options.ecmaVersion >= 8 && "async" === h.name && this.type === _.name && !o && (!this.potentialArrowInForAwait || "of" !== this.value || this.containsEsc)) return h = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(_.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(a, n), [h], !0, e)
                        }
                        return h;
                    case _.regexp:
                        var p = this.value;
                        return (s = this.parseLiteral(p.value)).regex = {
                            pattern: p.pattern,
                            flags: p.flags
                        }, s;
                    case _.num:
                    case _.string:
                        return this.parseLiteral(this.value);
                    case _._null:
                    case _._true:
                    case _._false:
                        return (s = this.startNode()).value = this.type === _._null ? null : this.type === _._true, s.raw = this.type.keyword, this.next(), this.finishNode(s, "Literal");
                    case _.parenL:
                        var c = this.start,
                            l = this.parseParenAndDistinguishExpression(r, e);
                        return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(l) && (t.parenthesizedAssign = c), t.parenthesizedBind < 0 && (t.parenthesizedBind = c)), l;
                    case _.bracketL:
                        return s = this.startNode(), this.next(), s.elements = this.parseExprList(_.bracketR, !0, !0, t), this.finishNode(s, "ArrayExpression");
                    case _.braceL:
                        return this.overrideContext(ts.b_expr), this.parseObj(!1, t);
                    case _._function:
                        return s = this.startNode(), this.next(), this.parseFunction(s, 0);
                    case _._class:
                        return this.parseClass(this.startNode(), !1);
                    case _._new:
                        return this.parseNew();
                    case _.backQuote:
                        return this.parseTemplate();
                    case _._import:
                        if (this.options.ecmaVersion >= 11) return this.parseExprImport(i);
                        return this.unexpected();
                    default:
                        return this.parseExprAtomDefault()
                }
            }, ta.parseExprAtomDefault = function() {
                this.unexpected()
            }, ta.parseExprImport = function(t) {
                var e = this.startNode();
                if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === _.parenL && !t) return this.parseDynamicImport(e);
                if (this.type === _.dot) {
                    var i = this.startNodeAt(e.start, e.loc && e.loc.start);
                    return i.name = "import", e.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(e)
                }
                this.unexpected()
            }, ta.parseDynamicImport = function(t) {
                if (this.next(), t.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16) this.eat(_.parenR) ? t.options = null : (this.expect(_.comma), this.afterTrailingComma(_.parenR) ? t.options = null : (t.options = this.parseMaybeAssign(), this.eat(_.parenR) || (this.expect(_.comma), this.afterTrailingComma(_.parenR) || this.unexpected())));
                else if (!this.eat(_.parenR)) {
                    var e = this.start;
                    this.eat(_.comma) && this.eat(_.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e)
                }
                return this.finishNode(t, "ImportExpression")
            }, ta.parseImportMeta = function(t) {
                this.next();
                var e = this.containsEsc;
                return t.property = this.parseIdent(!0), "meta" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), "module" === this.options.sourceType || this.options.allowImportExportEverywhere || this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty")
            }, ta.parseLiteral = function(t) {
                var e = this.startNode();
                return e.value = t, e.raw = this.input.slice(this.start, this.end), 110 === e.raw.charCodeAt(e.raw.length - 1) && (e.bigint = e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal")
            }, ta.parseParenExpression = function() {
                this.expect(_.parenL);
                var t = this.parseExpression();
                return this.expect(_.parenR), t
            }, ta.shouldParseArrow = function(t) {
                return !this.canInsertSemicolon()
            }, ta.parseParenAndDistinguishExpression = function(t, e) {
                var i, s = this.start,
                    r = this.startLoc,
                    a = this.options.ecmaVersion >= 8;
                if (this.options.ecmaVersion >= 6) {
                    this.next();
                    var n, o = this.start,
                        h = this.startLoc,
                        p = [],
                        c = !0,
                        l = !1,
                        u = new K,
                        d = this.yieldPos,
                        f = this.awaitPos;
                    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== _.parenR;) {
                        if (c ? c = !1 : this.expect(_.comma), a && this.afterTrailingComma(_.parenR, !0)) {
                            l = !0;
                            break
                        }
                        if (this.type === _.ellipsis) {
                            n = this.start, p.push(this.parseParenItem(this.parseRestBinding())), this.type === _.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
                            break
                        }
                        p.push(this.parseMaybeAssign(!1, u, this.parseParenItem))
                    }
                    var m = this.lastTokEnd,
                        x = this.lastTokEndLoc;
                    if (this.expect(_.parenR), t && this.shouldParseArrow(p) && this.eat(_.arrow)) return this.checkPatternErrors(u, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = d, this.awaitPos = f, this.parseParenArrowList(s, r, p, e);
                    (!p.length || l) && this.unexpected(this.lastTokStart), n && this.unexpected(n), this.checkExpressionErrors(u, !0), this.yieldPos = d || this.yieldPos, this.awaitPos = f || this.awaitPos, p.length > 1 ? ((i = this.startNodeAt(o, h)).expressions = p, this.finishNodeAt(i, "SequenceExpression", m, x)) : i = p[0]
                } else i = this.parseParenExpression();
                if (!this.options.preserveParens) return i;
                var g = this.startNodeAt(s, r);
                return g.expression = i, this.finishNode(g, "ParenthesizedExpression")
            }, ta.parseParenItem = function(t) {
                return t
            }, ta.parseParenArrowList = function(t, e, i, s) {
                return this.parseArrowExpression(this.startNodeAt(t, e), i, !1, s)
            };
            var tn = [];
            ta.parseNew = function() {
                this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
                var t = this.startNode();
                if (this.next(), this.options.ecmaVersion >= 6 && this.type === _.dot) {
                    var e = this.startNodeAt(t.start, t.loc && t.loc.start);
                    e.name = "new", t.meta = this.finishNode(e, "Identifier"), this.next();
                    var i = this.containsEsc;
                    return t.property = this.parseIdent(!0), "target" !== t.property.name && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty")
                }
                var s = this.start,
                    r = this.startLoc;
                return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), s, r, !0, !1), this.eat(_.parenL) ? t.arguments = this.parseExprList(_.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = tn, this.finishNode(t, "NewExpression")
            }, ta.parseTemplateElement = function(t) {
                var e = t.isTagged,
                    i = this.startNode();
                return this.type === _.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
                    raw: this.value.replace(/\r\n?/g, "\n"),
                    cooked: null
                }) : i.value = {
                    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                    cooked: this.value
                }, this.next(), i.tail = this.type === _.backQuote, this.finishNode(i, "TemplateElement")
            }, ta.parseTemplate = function(t) {
                void 0 === t && (t = {});
                var e = t.isTagged;
                void 0 === e && (e = !1);
                var i = this.startNode();
                this.next(), i.expressions = [];
                var s = this.parseTemplateElement({
                    isTagged: e
                });
                for (i.quasis = [s]; !s.tail;) this.type === _.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(_.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(_.braceR), i.quasis.push(s = this.parseTemplateElement({
                    isTagged: e
                }));
                return this.next(), this.finishNode(i, "TemplateLiteral")
            }, ta.isAsyncProp = function(t) {
                return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === _.name || this.type === _.num || this.type === _.string || this.type === _.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === _.star) && !k.test(this.input.slice(this.lastTokEnd, this.start))
            }, ta.parseObj = function(t, e) {
                var i = this.startNode(),
                    s = !0,
                    r = {};
                for (i.properties = [], this.next(); !this.eat(_.braceR);) {
                    if (s) s = !1;
                    else if (this.expect(_.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(_.braceR)) break;
                    var a = this.parseProperty(t, e);
                    t || this.checkPropClash(a, r, e), i.properties.push(a)
                }
                return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression")
            }, ta.parseProperty = function(t, e) {
                var i, s, r, a, n = this.startNode();
                if (this.options.ecmaVersion >= 9 && this.eat(_.ellipsis)) return t ? (n.argument = this.parseIdent(!1), this.type === _.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(n, "RestElement")) : (n.argument = this.parseMaybeAssign(!1, e), this.type === _.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(n, "SpreadElement"));
                this.options.ecmaVersion >= 6 && (n.method = !1, n.shorthand = !1, (t || e) && (r = this.start, a = this.startLoc), t || (i = this.eat(_.star)));
                var o = this.containsEsc;
                return this.parsePropertyName(n), !t && !o && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(n) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(_.star), this.parsePropertyName(n)) : s = !1, this.parsePropertyValue(n, t, i, s, r, a, e, o), this.finishNode(n, "Property")
            }, ta.parseGetterSetter = function(t) {
                t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);
                var e = "get" === t.kind ? 0 : 1;
                if (t.value.params.length !== e) {
                    var i = t.value.start;
                    "get" === t.kind ? this.raiseRecoverable(i, "getter should have no params") : this.raiseRecoverable(i, "setter should have exactly one param")
                } else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params")
            }, ta.parsePropertyValue = function(t, e, i, s, r, a, n, o) {
                (i || s) && this.type === _.colon && this.unexpected(), this.eat(_.colon) ? (t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, n), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === _.parenL ? (e && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(i, s)) : e || o || !(this.options.ecmaVersion >= 5) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type === _.comma || this.type === _.braceR || this.type === _.eq ? this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type ? ((i || s) && this.unexpected(), this.checkUnreserved(t.key), "await" !== t.key.name || this.awaitIdentPos || (this.awaitIdentPos = r), t.kind = "init", e ? t.value = this.parseMaybeDefault(r, a, this.copyNode(t.key)) : this.type === _.eq && n ? (n.shorthandAssign < 0 && (n.shorthandAssign = this.start), t.value = this.parseMaybeDefault(r, a, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.shorthand = !0) : this.unexpected() : ((i || s) && this.unexpected(), this.parseGetterSetter(t))
            }, ta.parsePropertyName = function(t) {
                if (this.options.ecmaVersion >= 6) {
                    if (this.eat(_.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(_.bracketR), t.key;
                    t.computed = !1
                }
                return t.key = this.type === _.num || this.type === _.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
            }, ta.initFunction = function(t) {
                t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1)
            }, ta.parseMethod = function(t, e, i) {
                var s = this.startNode(),
                    r = this.yieldPos,
                    a = this.awaitPos,
                    n = this.awaitIdentPos;
                return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = t), this.options.ecmaVersion >= 8 && (s.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | j(e, s.generator) | (i ? 128 : 0)), this.expect(_.parenL), s.params = this.parseBindingList(_.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0, !1), this.yieldPos = r, this.awaitPos = a, this.awaitIdentPos = n, this.finishNode(s, "FunctionExpression")
            }, ta.parseArrowExpression = function(t, e, i, s) {
                var r = this.yieldPos,
                    a = this.awaitPos,
                    n = this.awaitIdentPos;
                return this.enterScope(16 | j(i, !1)), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1, s), this.yieldPos = r, this.awaitPos = a, this.awaitIdentPos = n, this.finishNode(t, "ArrowFunctionExpression")
            }, ta.parseFunctionBody = function(t, e, i, s) {
                var r = e && this.type !== _.braceL,
                    a = this.strict,
                    n = !1;
                if (r) t.body = this.parseMaybeAssign(s), t.expression = !0, this.checkParams(t, !1);
                else {
                    var o = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
                    (!a || o) && (n = this.strictDirective(this.end)) && o && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                    var h = this.labels;
                    this.labels = [], n && (this.strict = !0), this.checkParams(t, !a && !n && !e && !i && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, 5), t.body = this.parseBlock(!1, void 0, n && !a), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = h
                }
                this.exitScope()
            }, ta.isSimpleParamList = function(t) {
                for (var e = 0; e < t.length; e += 1)
                    if ("Identifier" !== t[e].type) return !1;
                return !0
            }, ta.checkParams = function(t, e) {
                for (var i = Object.create(null), s = 0, r = t.params; s < r.length; s += 1) {
                    var a = r[s];
                    this.checkLValInnerPattern(a, 1, e ? null : i)
                }
            }, ta.parseExprList = function(t, e, i, s) {
                for (var r = [], a = !0; !this.eat(t);) {
                    if (a) a = !1;
                    else if (this.expect(_.comma), e && this.afterTrailingComma(t)) break;
                    var n = void 0;
                    i && this.type === _.comma ? n = null : this.type === _.ellipsis ? (n = this.parseSpread(s), s && this.type === _.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : n = this.parseMaybeAssign(!1, s), r.push(n)
                }
                return r
            }, ta.checkUnreserved = function(t) {
                var e = t.start,
                    i = t.end,
                    s = t.name;
                this.inGenerator && "yield" === s && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === s && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && "arguments" === s && this.raiseRecoverable(e, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && ("arguments" === s || "await" === s) && this.raise(e, "Cannot use " + s + " in class static initialization block"), this.keywords.test(s) && this.raise(e, "Unexpected keyword '" + s + "'"), (!(this.options.ecmaVersion < 6) || -1 === this.input.slice(e, i).indexOf("\\")) && (this.strict ? this.reservedWordsStrict : this.reservedWords).test(s) && (this.inAsync || "await" !== s || this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + s + "' is reserved"))
            }, ta.parseIdent = function(t) {
                var e = this.parseIdentNode();
                return this.next(!!t), this.finishNode(e, "Identifier"), t || (this.checkUnreserved(e), "await" !== e.name || this.awaitIdentPos || (this.awaitIdentPos = e.start)), e
            }, ta.parseIdentNode = function() {
                var t = this.startNode();
                return this.type === _.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, ("class" === t.name || "function" === t.name) && (this.lastTokEnd !== this.lastTokStart + 1 || 46 !== this.input.charCodeAt(this.lastTokStart)) && this.context.pop(), this.type = _.name) : this.unexpected(), t
            }, ta.parsePrivateIdent = function() {
                var t = this.startNode();
                return this.type === _.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (0 === this.privateNameStack.length ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t
            }, ta.parseYield = function(t) {
                this.yieldPos || (this.yieldPos = this.start);
                var e = this.startNode();
                return this.next(), this.type === _.semi || this.canInsertSemicolon() || this.type !== _.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(_.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression")
            }, ta.parseAwait = function(t) {
                this.awaitPos || (this.awaitPos = this.start);
                var e = this.startNode();
                return this.next(), e.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(e, "AwaitExpression")
            };
            var to = G.prototype;
            to.raise = function(t, e) {
                var i = F(this.input, t),
                    s = SyntaxError(e += " (" + i.line + ":" + i.column + ")");
                throw s.pos = t, s.loc = i, s.raisedAt = this.pos, s
            }, to.raiseRecoverable = to.raise, to.curPosition = function() {
                if (this.options.locations) return new B(this.curLine, this.pos - this.lineStart)
            };
            var th = G.prototype,
                tp = function(t) {
                    this.flags = t, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1
                };
            th.enterScope = function(t) {
                this.scopeStack.push(new tp(t))
            }, th.exitScope = function() {
                this.scopeStack.pop()
            }, th.treatFunctionsAsVarInScope = function(t) {
                return 2 & t.flags || !this.inModule && 1 & t.flags
            }, th.declareName = function(t, e, i) {
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
                        if (o.var.push(t), this.inModule && 1 & o.flags && delete this.undefinedExports[t], 259 & o.flags) break
                    }
                s && this.raiseRecoverable(i, "Identifier '" + t + "' has already been declared")
            }, th.checkLocalExport = function(t) {
                -1 === this.scopeStack[0].lexical.indexOf(t.name) && -1 === this.scopeStack[0].var.indexOf(t.name) && (this.undefinedExports[t.name] = t)
            }, th.currentScope = function() {
                return this.scopeStack[this.scopeStack.length - 1]
            }, th.currentVarScope = function() {
                for (var t = this.scopeStack.length - 1;; t--) {
                    var e = this.scopeStack[t];
                    if (259 & e.flags) return e
                }
            }, th.currentThisScope = function() {
                for (var t = this.scopeStack.length - 1;; t--) {
                    var e = this.scopeStack[t];
                    if (259 & e.flags && !(16 & e.flags)) return e
                }
            };
            var tc = function(t, e, i) {
                    this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new M(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0])
                },
                tl = G.prototype;

            function tu(t, e, i, s) {
                return t.type = e, t.end = i, this.options.locations && (t.loc.end = s), this.options.ranges && (t.range[1] = i), t
            }
            tl.startNode = function() {
                return new tc(this, this.start, this.startLoc)
            }, tl.startNodeAt = function(t, e) {
                return new tc(this, t, e)
            }, tl.finishNode = function(t, e) {
                return tu.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc)
            }, tl.finishNodeAt = function(t, e, i, s) {
                return tu.call(this, t, e, i, s)
            }, tl.copyNode = function(t) {
                var e = new tc(this, t.start, this.startLoc);
                for (var i in t) e[i] = t[i];
                return e
            };
            for (var td = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", tf = td + " Extended_Pictographic", tm = tf + " EBase EComp EMod EPres ExtPict", tx = {
                    9: td,
                    10: tf,
                    11: tf,
                    12: tm,
                    13: tm,
                    14: tm
                }, tg = {
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
                }, tv = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", ty = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", tb = ty + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", t_ = tb + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", tk = t_ + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", tC = tk + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", tS = {
                    9: ty,
                    10: tb,
                    11: t_,
                    12: tk,
                    13: tC,
                    14: tC + " Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz"
                }, tw = {}, tE = 0, tI = [9, 10, 11, 12, 13, 14]; tE < tI.length; tE += 1) ! function(t) {
                var e = tw[t] = {
                    binary: R(tx[t] + " " + tv),
                    binaryOfStrings: R(tg[t]),
                    nonBinary: {
                        General_Category: R(tv),
                        Script: R(tS[t])
                    }
                };
                e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions
            }(tI[tE]);
            var tA = G.prototype,
                tP = function(t, e) {
                    this.parent = t, this.base = e || this
                };
            tP.prototype.separatedFrom = function(t) {
                for (var e = this; e; e = e.parent)
                    for (var i = t; i; i = i.parent)
                        if (e.base === i.base && e !== i) return !0;
                return !1
            }, tP.prototype.sibling = function() {
                return new tP(this.parent, this.base)
            };
            var tN = function(t) {
                this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = tw[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null
            };

            function tV(t) {
                return 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || t >= 91 && t <= 94 || t >= 123 && t <= 125
            }

            function tT(t) {
                return t >= 65 && t <= 90 || t >= 97 && t <= 122
            }

            function tL(t) {
                return tT(t) || 95 === t
            }

            function tR(t) {
                return t >= 48 && t <= 57
            }

            function tD(t) {
                return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
            }

            function tO(t) {
                return t >= 65 && t <= 70 ? 10 + (t - 65) : t >= 97 && t <= 102 ? 10 + (t - 97) : t - 48
            }

            function tB(t) {
                return t >= 48 && t <= 55
            }
            tN.prototype.reset = function(t, e, i) {
                var s = -1 !== i.indexOf("v"),
                    r = -1 !== i.indexOf("u");
                this.start = 0 | t, this.source = e + "", this.flags = i, s && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = r && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = r && this.parser.options.ecmaVersion >= 9)
            }, tN.prototype.raise = function(t) {
                this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t)
            }, tN.prototype.at = function(t, e) {
                void 0 === e && (e = !1);
                var i = this.source,
                    s = i.length;
                if (t >= s) return -1;
                var r = i.charCodeAt(t);
                if (!(e || this.switchU) || r <= 55295 || r >= 57344 || t + 1 >= s) return r;
                var a = i.charCodeAt(t + 1);
                return a >= 56320 && a <= 57343 ? (r << 10) + a - 56613888 : r
            }, tN.prototype.nextIndex = function(t, e) {
                void 0 === e && (e = !1);
                var i = this.source,
                    s = i.length;
                if (t >= s) return s;
                var r, a = i.charCodeAt(t);
                return !(e || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s || (r = i.charCodeAt(t + 1)) < 56320 || r > 57343 ? t + 1 : t + 2
            }, tN.prototype.current = function(t) {
                return void 0 === t && (t = !1), this.at(this.pos, t)
            }, tN.prototype.lookahead = function(t) {
                return void 0 === t && (t = !1), this.at(this.nextIndex(this.pos, t), t)
            }, tN.prototype.advance = function(t) {
                void 0 === t && (t = !1), this.pos = this.nextIndex(this.pos, t)
            }, tN.prototype.eat = function(t, e) {
                return void 0 === e && (e = !1), this.current(e) === t && (this.advance(e), !0)
            }, tN.prototype.eatChars = function(t, e) {
                void 0 === e && (e = !1);
                for (var i = this.pos, s = 0; s < t.length; s += 1) {
                    var r = t[s],
                        a = this.at(i, e);
                    if (-1 === a || a !== r) return !1;
                    i = this.nextIndex(i, e)
                }
                return this.pos = i, !0
            }, tA.validateRegExpFlags = function(t) {
                for (var e = t.validFlags, i = t.flags, s = !1, r = !1, a = 0; a < i.length; a++) {
                    var n = i.charAt(a); - 1 === e.indexOf(n) && this.raise(t.start, "Invalid regular expression flag"), i.indexOf(n, a + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag"), "u" === n && (s = !0), "v" === n && (r = !0)
                }
                this.options.ecmaVersion >= 15 && s && r && this.raise(t.start, "Invalid regular expression flag")
            }, tA.validateRegExpPattern = function(t) {
                this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && function(t) {
                    for (var e in t) return !0;
                    return !1
                }(t.groupNames) && (t.switchN = !0, this.regexp_pattern(t))
            }, tA.regexp_pattern = function(t) {
                t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames = Object.create(null), t.backReferenceNames.length = 0, t.branchID = null, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(41) && t.raise("Unmatched ')'"), (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
                for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
                    var s = i[e];
                    t.groupNames[s] || t.raise("Invalid named capture referenced")
                }
            }, tA.regexp_disjunction = function(t) {
                var e = this.options.ecmaVersion >= 16;
                for (e && (t.branchID = new tP(t.branchID, null)), this.regexp_alternative(t); t.eat(124);) e && (t.branchID = t.branchID.sibling()), this.regexp_alternative(t);
                e && (t.branchID = t.branchID.parent), this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(123) && t.raise("Lone quantifier brackets")
            }, tA.regexp_alternative = function(t) {
                for (; t.pos < t.source.length && this.regexp_eatTerm(t););
            }, tA.regexp_eatTerm = function(t) {
                return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : (t.switchU ? !!this.regexp_eatAtom(t) : !!this.regexp_eatExtendedAtom(t)) && (this.regexp_eatQuantifier(t), !0)
            }, tA.regexp_eatAssertion = function(t) {
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
            }, tA.regexp_eatQuantifier = function(t, e) {
                return void 0 === e && (e = !1), !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
            }, tA.regexp_eatQuantifierPrefix = function(t, e) {
                return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e)
            }, tA.regexp_eatBracedQuantifier = function(t, e) {
                var i = t.pos;
                if (t.eat(123)) {
                    var s = 0,
                        r = -1;
                    if (this.regexp_eatDecimalDigits(t) && (s = t.lastIntValue, t.eat(44) && this.regexp_eatDecimalDigits(t) && (r = t.lastIntValue), t.eat(125))) return -1 !== r && r < s && !e && t.raise("numbers out of order in {} quantifier"), !0;
                    t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = i
                }
                return !1
            }, tA.regexp_eatAtom = function(t) {
                return this.regexp_eatPatternCharacters(t) || t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t)
            }, tA.regexp_eatReverseSolidusAtomEscape = function(t) {
                var e = t.pos;
                if (t.eat(92)) {
                    if (this.regexp_eatAtomEscape(t)) return !0;
                    t.pos = e
                }
                return !1
            }, tA.regexp_eatUncapturingGroup = function(t) {
                var e = t.pos;
                if (t.eat(40)) {
                    if (t.eat(63)) {
                        if (this.options.ecmaVersion >= 16) {
                            var i = this.regexp_eatModifiers(t),
                                s = t.eat(45);
                            if (i || s) {
                                for (var r = 0; r < i.length; r++) {
                                    var a = i.charAt(r);
                                    i.indexOf(a, r + 1) > -1 && t.raise("Duplicate regular expression modifiers")
                                }
                                if (s) {
                                    var n = this.regexp_eatModifiers(t);
                                    i || n || 58 !== t.current() || t.raise("Invalid regular expression modifiers");
                                    for (var o = 0; o < n.length; o++) {
                                        var h = n.charAt(o);
                                        (n.indexOf(h, o + 1) > -1 || i.indexOf(h) > -1) && t.raise("Duplicate regular expression modifiers")
                                    }
                                }
                            }
                        }
                        if (t.eat(58)) {
                            if (this.regexp_disjunction(t), t.eat(41)) return !0;
                            t.raise("Unterminated group")
                        }
                    }
                    t.pos = e
                }
                return !1
            }, tA.regexp_eatCapturingGroup = function(t) {
                if (t.eat(40)) {
                    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : 63 === t.current() && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(41)) return t.numCapturingParens += 1, !0;
                    t.raise("Unterminated group")
                }
                return !1
            }, tA.regexp_eatModifiers = function(t) {
                for (var e, i = "", s = 0; - 1 !== (s = t.current()) && (105 === (e = s) || 109 === e || 115 === e);) i += D(s), t.advance();
                return i
            }, tA.regexp_eatExtendedAtom = function(t) {
                return t.eat(46) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t)
            }, tA.regexp_eatInvalidBracedQuantifier = function(t) {
                return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1
            }, tA.regexp_eatSyntaxCharacter = function(t) {
                var e = t.current();
                return !!tV(e) && (t.lastIntValue = e, t.advance(), !0)
            }, tA.regexp_eatPatternCharacters = function(t) {
                for (var e = t.pos, i = 0; - 1 !== (i = t.current()) && !tV(i);) t.advance();
                return t.pos !== e
            }, tA.regexp_eatExtendedPatternCharacter = function(t) {
                var e = t.current();
                return -1 !== e && 36 !== e && (!(e >= 40) || !(e <= 43)) && 46 !== e && 63 !== e && 91 !== e && 94 !== e && 124 !== e && (t.advance(), !0)
            }, tA.regexp_groupSpecifier = function(t) {
                if (t.eat(63)) {
                    this.regexp_eatGroupName(t) || t.raise("Invalid group");
                    var e = this.options.ecmaVersion >= 16,
                        i = t.groupNames[t.lastStringValue];
                    if (i) {
                        if (e)
                            for (var s = 0; s < i.length; s += 1) i[s].separatedFrom(t.branchID) || t.raise("Duplicate capture group name");
                        else t.raise("Duplicate capture group name")
                    }
                    e ? (i || (t.groupNames[t.lastStringValue] = [])).push(t.branchID) : t.groupNames[t.lastStringValue] = !0
                }
            }, tA.regexp_eatGroupName = function(t) {
                if (t.lastStringValue = "", t.eat(60)) {
                    if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
                    t.raise("Invalid capture group name")
                }
                return !1
            }, tA.regexp_eatRegExpIdentifierName = function(t) {
                if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
                    for (t.lastStringValue += D(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t);) t.lastStringValue += D(t.lastIntValue);
                    return !0
                }
                return !1
            }, tA.regexp_eatRegExpIdentifierStart = function(t) {
                var e, i = t.pos,
                    s = this.options.ecmaVersion >= 11,
                    r = t.current(s);
                return (t.advance(s), 92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (r = t.lastIntValue), d(e = r, !0) || 36 === e || 95 === e) ? (t.lastIntValue = r, !0) : (t.pos = i, !1)
            }, tA.regexp_eatRegExpIdentifierPart = function(t) {
                var e, i = t.pos,
                    s = this.options.ecmaVersion >= 11,
                    r = t.current(s);
                return (t.advance(s), 92 === r && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (r = t.lastIntValue), f(e = r, !0) || 36 === e || 95 === e || 8204 === e || 8205 === e) ? (t.lastIntValue = r, !0) : (t.pos = i, !1)
            }, tA.regexp_eatAtomEscape = function(t) {
                return !!(this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t)) || (t.switchU && (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1)
            }, tA.regexp_eatBackReference = function(t) {
                var e = t.pos;
                if (this.regexp_eatDecimalEscape(t)) {
                    var i = t.lastIntValue;
                    if (t.switchU) return i > t.maxBackReference && (t.maxBackReference = i), !0;
                    if (i <= t.numCapturingParens) return !0;
                    t.pos = e
                }
                return !1
            }, tA.regexp_eatKGroupName = function(t) {
                if (t.eat(107)) {
                    if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue), !0;
                    t.raise("Invalid named reference")
                }
                return !1
            }, tA.regexp_eatCharacterEscape = function(t) {
                return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t)
            }, tA.regexp_eatCControlLetter = function(t) {
                var e = t.pos;
                if (t.eat(99)) {
                    if (this.regexp_eatControlLetter(t)) return !0;
                    t.pos = e
                }
                return !1
            }, tA.regexp_eatZero = function(t) {
                return !(48 !== t.current() || tR(t.lookahead())) && (t.lastIntValue = 0, t.advance(), !0)
            }, tA.regexp_eatControlEscape = function(t) {
                var e = t.current();
                return 116 === e ? (t.lastIntValue = 9, t.advance(), !0) : 110 === e ? (t.lastIntValue = 10, t.advance(), !0) : 118 === e ? (t.lastIntValue = 11, t.advance(), !0) : 102 === e ? (t.lastIntValue = 12, t.advance(), !0) : 114 === e && (t.lastIntValue = 13, t.advance(), !0)
            }, tA.regexp_eatControlLetter = function(t) {
                var e = t.current();
                return !!tT(e) && (t.lastIntValue = e % 32, t.advance(), !0)
            }, tA.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
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
            }, tA.regexp_eatIdentityEscape = function(t) {
                if (t.switchU) return !!this.regexp_eatSyntaxCharacter(t) || !!t.eat(47) && (t.lastIntValue = 47, !0);
                var e = t.current();
                return 99 !== e && (!t.switchN || 107 !== e) && (t.lastIntValue = e, t.advance(), !0)
            }, tA.regexp_eatDecimalEscape = function(t) {
                t.lastIntValue = 0;
                var e = t.current();
                if (e >= 49 && e <= 57) {
                    do t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance(); while ((e = t.current()) >= 48 && e <= 57);
                    return !0
                }
                return !1
            }, tA.regexp_eatCharacterClassEscape = function(t) {
                var e, i = t.current();
                if (100 === i || 68 === i || 115 === i || 83 === i || 119 === i || 87 === i) return t.lastIntValue = -1, t.advance(), 1;
                var s = !1;
                if (t.switchU && this.options.ecmaVersion >= 9 && ((s = 80 === i) || 112 === i)) {
                    if (t.lastIntValue = -1, t.advance(), t.eat(123) && (e = this.regexp_eatUnicodePropertyValueExpression(t)) && t.eat(125)) return s && 2 === e && t.raise("Invalid property name"), e;
                    t.raise("Invalid property name")
                }
                return 0
            }, tA.regexp_eatUnicodePropertyValueExpression = function(t) {
                var e = t.pos;
                if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
                    var i = t.lastStringValue;
                    if (this.regexp_eatUnicodePropertyValue(t)) {
                        var s = t.lastStringValue;
                        return this.regexp_validateUnicodePropertyNameAndValue(t, i, s), 1
                    }
                }
                if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
                    var r = t.lastStringValue;
                    return this.regexp_validateUnicodePropertyNameOrValue(t, r)
                }
                return 0
            }, tA.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) {
                V(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(i) || t.raise("Invalid property value")
            }, tA.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
                return t.unicodeProperties.binary.test(e) ? 1 : t.switchV && t.unicodeProperties.binaryOfStrings.test(e) ? 2 : void t.raise("Invalid property name")
            }, tA.regexp_eatUnicodePropertyName = function(t) {
                var e = 0;
                for (t.lastStringValue = ""; tL(e = t.current());) t.lastStringValue += D(e), t.advance();
                return "" !== t.lastStringValue
            }, tA.regexp_eatUnicodePropertyValue = function(t) {
                var e, i = 0;
                for (t.lastStringValue = ""; tL(e = i = t.current()) || tR(e);) t.lastStringValue += D(i), t.advance();
                return "" !== t.lastStringValue
            }, tA.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
                return this.regexp_eatUnicodePropertyValue(t)
            }, tA.regexp_eatCharacterClass = function(t) {
                if (t.eat(91)) {
                    var e = t.eat(94),
                        i = this.regexp_classContents(t);
                    return t.eat(93) || t.raise("Unterminated character class"), e && 2 === i && t.raise("Negated character class may contain strings"), !0
                }
                return !1
            }, tA.regexp_classContents = function(t) {
                return 93 === t.current() ? 1 : t.switchV ? this.regexp_classSetExpression(t) : (this.regexp_nonEmptyClassRanges(t), 1)
            }, tA.regexp_nonEmptyClassRanges = function(t) {
                for (; this.regexp_eatClassAtom(t);) {
                    var e = t.lastIntValue;
                    if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                        var i = t.lastIntValue;
                        t.switchU && (-1 === e || -1 === i) && t.raise("Invalid character class"), -1 !== e && -1 !== i && e > i && t.raise("Range out of order in character class")
                    }
                }
            }, tA.regexp_eatClassAtom = function(t) {
                var e = t.pos;
                if (t.eat(92)) {
                    if (this.regexp_eatClassEscape(t)) return !0;
                    if (t.switchU) {
                        var i = t.current();
                        (99 === i || tB(i)) && t.raise("Invalid class escape"), t.raise("Invalid escape")
                    }
                    t.pos = e
                }
                var s = t.current();
                return 93 !== s && (t.lastIntValue = s, t.advance(), !0)
            }, tA.regexp_eatClassEscape = function(t) {
                var e = t.pos;
                if (t.eat(98)) return t.lastIntValue = 8, !0;
                if (t.switchU && t.eat(45)) return t.lastIntValue = 45, !0;
                if (!t.switchU && t.eat(99)) {
                    if (this.regexp_eatClassControlLetter(t)) return !0;
                    t.pos = e
                }
                return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t)
            }, tA.regexp_classSetExpression = function(t) {
                var e, i = 1;
                if (this.regexp_eatClassSetRange(t));
                else if (e = this.regexp_eatClassSetOperand(t)) {
                    2 === e && (i = 2);
                    for (var s = t.pos; t.eatChars([38, 38]);) {
                        if (38 !== t.current() && (e = this.regexp_eatClassSetOperand(t))) {
                            2 !== e && (i = 1);
                            continue
                        }
                        t.raise("Invalid character in character class")
                    }
                    if (s !== t.pos) return i;
                    for (; t.eatChars([45, 45]);) this.regexp_eatClassSetOperand(t) || t.raise("Invalid character in character class");
                    if (s !== t.pos) return i
                } else t.raise("Invalid character in character class");
                for (;;)
                    if (!this.regexp_eatClassSetRange(t)) {
                        if (!(e = this.regexp_eatClassSetOperand(t))) return i;
                        2 === e && (i = 2)
                    }
            }, tA.regexp_eatClassSetRange = function(t) {
                var e = t.pos;
                if (this.regexp_eatClassSetCharacter(t)) {
                    var i = t.lastIntValue;
                    if (t.eat(45) && this.regexp_eatClassSetCharacter(t)) {
                        var s = t.lastIntValue;
                        return -1 !== i && -1 !== s && i > s && t.raise("Range out of order in character class"), !0
                    }
                    t.pos = e
                }
                return !1
            }, tA.regexp_eatClassSetOperand = function(t) {
                return this.regexp_eatClassSetCharacter(t) ? 1 : this.regexp_eatClassStringDisjunction(t) || this.regexp_eatNestedClass(t)
            }, tA.regexp_eatNestedClass = function(t) {
                var e = t.pos;
                if (t.eat(91)) {
                    var i = t.eat(94),
                        s = this.regexp_classContents(t);
                    if (t.eat(93)) return i && 2 === s && t.raise("Negated character class may contain strings"), s;
                    t.pos = e
                }
                if (t.eat(92)) {
                    var r = this.regexp_eatCharacterClassEscape(t);
                    if (r) return r;
                    t.pos = e
                }
                return null
            }, tA.regexp_eatClassStringDisjunction = function(t) {
                var e = t.pos;
                if (t.eatChars([92, 113])) {
                    if (t.eat(123)) {
                        var i = this.regexp_classStringDisjunctionContents(t);
                        if (t.eat(125)) return i
                    } else t.raise("Invalid escape");
                    t.pos = e
                }
                return null
            }, tA.regexp_classStringDisjunctionContents = function(t) {
                for (var e = this.regexp_classString(t); t.eat(124);) 2 === this.regexp_classString(t) && (e = 2);
                return e
            }, tA.regexp_classString = function(t) {
                for (var e = 0; this.regexp_eatClassSetCharacter(t);) e++;
                return 1 === e ? 1 : 2
            }, tA.regexp_eatClassSetCharacter = function(t) {
                var e, i = t.pos;
                if (t.eat(92)) return !!(this.regexp_eatCharacterEscape(t) || this.regexp_eatClassSetReservedPunctuator(t)) || (t.eat(98) ? (t.lastIntValue = 8, !0) : (t.pos = i, !1));
                var s = t.current();
                return !(s < 0 || s === t.lookahead() && (33 === s || s >= 35 && s <= 38 || s >= 42 && s <= 44 || 46 === s || s >= 58 && s <= 64 || 94 === s || 96 === s || 126 === s) || 40 === (e = s) || 41 === e || 45 === e || 47 === e || e >= 91 && e <= 93 || e >= 123 && e <= 125) && (t.advance(), t.lastIntValue = s, !0)
            }, tA.regexp_eatClassSetReservedPunctuator = function(t) {
                var e = t.current();
                return !!(33 === e || 35 === e || 37 === e || 38 === e || 44 === e || 45 === e || e >= 58 && e <= 62 || 64 === e || 96 === e || 126 === e) && (t.lastIntValue = e, t.advance(), !0)
            }, tA.regexp_eatClassControlLetter = function(t) {
                var e = t.current();
                return (!!tR(e) || 95 === e) && (t.lastIntValue = e % 32, t.advance(), !0)
            }, tA.regexp_eatHexEscapeSequence = function(t) {
                var e = t.pos;
                if (t.eat(120)) {
                    if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                    t.switchU && t.raise("Invalid escape"), t.pos = e
                }
                return !1
            }, tA.regexp_eatDecimalDigits = function(t) {
                var e = t.pos,
                    i = 0;
                for (t.lastIntValue = 0; tR(i = t.current());) t.lastIntValue = 10 * t.lastIntValue + (i - 48), t.advance();
                return t.pos !== e
            }, tA.regexp_eatHexDigits = function(t) {
                var e = t.pos,
                    i = 0;
                for (t.lastIntValue = 0; tD(i = t.current());) t.lastIntValue = 16 * t.lastIntValue + tO(i), t.advance();
                return t.pos !== e
            }, tA.regexp_eatLegacyOctalEscapeSequence = function(t) {
                if (this.regexp_eatOctalDigit(t)) {
                    var e = t.lastIntValue;
                    if (this.regexp_eatOctalDigit(t)) {
                        var i = t.lastIntValue;
                        e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = 64 * e + 8 * i + t.lastIntValue : t.lastIntValue = 8 * e + i
                    } else t.lastIntValue = e;
                    return !0
                }
                return !1
            }, tA.regexp_eatOctalDigit = function(t) {
                var e = t.current();
                return tB(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1)
            }, tA.regexp_eatFixedHexDigits = function(t, e) {
                var i = t.pos;
                t.lastIntValue = 0;
                for (var s = 0; s < e; ++s) {
                    var r = t.current();
                    if (!tD(r)) return t.pos = i, !1;
                    t.lastIntValue = 16 * t.lastIntValue + tO(r), t.advance()
                }
                return !0
            };
            var tM = function(t) {
                    this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new M(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end])
                },
                tF = G.prototype;

            function tU(t) {
                return "function" != typeof BigInt ? null : BigInt(t.replace(/_/g, ""))
            }
            tF.next = function(t) {
                !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new tM(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
            }, tF.getToken = function() {
                return this.next(), new tM(this)
            }, "undefined" != typeof Symbol && (tF[Symbol.iterator] = function() {
                var t = this;
                return {
                    next: function() {
                        var e = t.getToken();
                        return {
                            done: e.type === _.eof,
                            value: e
                        }
                    }
                }
            }), tF.nextToken = function() {
                var t = this.curContext();
                return (t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length) ? this.finishToken(_.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos())
            }, tF.readToken = function(t) {
                return d(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t)
            }, tF.fullCharCodeAtPos = function() {
                var t = this.input.charCodeAt(this.pos);
                if (t <= 55295 || t >= 56320) return t;
                var e = this.input.charCodeAt(this.pos + 1);
                return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888
            }, tF.skipBlockComment = function() {
                var t = this.options.onComment && this.curPosition(),
                    e = this.pos,
                    i = this.input.indexOf("*/", this.pos += 2);
                if (-1 === i && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
                    for (var s = void 0, r = e;
                        (s = w(this.input, r, this.pos)) > -1;) ++this.curLine, r = this.lineStart = s;
                this.options.onComment && this.options.onComment(!0, this.input.slice(e + 2, i), e, this.pos, t, this.curPosition())
            }, tF.skipLineComment = function(t) {
                for (var e = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !S(s);) s = this.input.charCodeAt(++this.pos);
                this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, i, this.curPosition())
            }, tF.skipSpace = function() {
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
            }, tF.finishToken = function(t, e) {
                this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
                var i = this.type;
                this.type = t, this.value = e, this.updateContext(i)
            }, tF.readToken_dot = function() {
                var t = this.input.charCodeAt(this.pos + 1);
                if (t >= 48 && t <= 57) return this.readNumber(!0);
                var e = this.input.charCodeAt(this.pos + 2);
                return this.options.ecmaVersion >= 6 && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(_.ellipsis)) : (++this.pos, this.finishToken(_.dot))
            }, tF.readToken_slash = function() {
                var t = this.input.charCodeAt(this.pos + 1);
                return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(_.assign, 2) : this.finishOp(_.slash, 1)
            }, tF.readToken_mult_modulo_exp = function(t) {
                var e = this.input.charCodeAt(this.pos + 1),
                    i = 1,
                    s = 42 === t ? _.star : _.modulo;
                return (this.options.ecmaVersion >= 7 && 42 === t && 42 === e && (++i, s = _.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e) ? this.finishOp(_.assign, i + 1) : this.finishOp(s, i)
            }, tF.readToken_pipe_amp = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return e === t ? this.options.ecmaVersion >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(_.assign, 3) : this.finishOp(124 === t ? _.logicalOR : _.logicalAND, 2) : 61 === e ? this.finishOp(_.assign, 2) : this.finishOp(124 === t ? _.bitwiseOR : _.bitwiseAND, 1)
            }, tF.readToken_caret = function() {
                return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(_.assign, 2) : this.finishOp(_.bitwiseXOR, 1)
            }, tF.readToken_plus_min = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return e === t ? 45 === e && !this.inModule && 62 === this.input.charCodeAt(this.pos + 2) && (0 === this.lastTokEnd || k.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(_.incDec, 2) : 61 === e ? this.finishOp(_.assign, 2) : this.finishOp(_.plusMin, 1)
            }, tF.readToken_lt_gt = function(t) {
                var e = this.input.charCodeAt(this.pos + 1),
                    i = 1;
                return e === t ? (i = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i)) ? this.finishOp(_.assign, i + 1) : this.finishOp(_.bitShift, i) : 33 !== e || 60 !== t || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === e && (i = 2), this.finishOp(_.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
            }, tF.readToken_eq_excl = function(t) {
                var e = this.input.charCodeAt(this.pos + 1);
                return 61 === e ? this.finishOp(_.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(_.arrow)) : this.finishOp(61 === t ? _.eq : _.prefix, 1)
            }, tF.readToken_question = function() {
                var t = this.options.ecmaVersion;
                if (t >= 11) {
                    var e = this.input.charCodeAt(this.pos + 1);
                    if (46 === e) {
                        var i = this.input.charCodeAt(this.pos + 2);
                        if (i < 48 || i > 57) return this.finishOp(_.questionDot, 2)
                    }
                    if (63 === e) return t >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(_.assign, 3) : this.finishOp(_.coalesce, 2)
                }
                return this.finishOp(_.question, 1)
            }, tF.readToken_numberSign = function() {
                var t = this.options.ecmaVersion,
                    e = 35;
                if (t >= 13 && (++this.pos, d(e = this.fullCharCodeAtPos(), !0) || 92 === e)) return this.finishToken(_.privateId, this.readWord1());
                this.raise(this.pos, "Unexpected character '" + D(e) + "'")
            }, tF.getTokenFromCode = function(t) {
                switch (t) {
                    case 46:
                        return this.readToken_dot();
                    case 40:
                        return ++this.pos, this.finishToken(_.parenL);
                    case 41:
                        return ++this.pos, this.finishToken(_.parenR);
                    case 59:
                        return ++this.pos, this.finishToken(_.semi);
                    case 44:
                        return ++this.pos, this.finishToken(_.comma);
                    case 91:
                        return ++this.pos, this.finishToken(_.bracketL);
                    case 93:
                        return ++this.pos, this.finishToken(_.bracketR);
                    case 123:
                        return ++this.pos, this.finishToken(_.braceL);
                    case 125:
                        return ++this.pos, this.finishToken(_.braceR);
                    case 58:
                        return ++this.pos, this.finishToken(_.colon);
                    case 96:
                        if (this.options.ecmaVersion < 6) break;
                        return ++this.pos, this.finishToken(_.backQuote);
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
                        return this.finishOp(_.prefix, 1);
                    case 35:
                        return this.readToken_numberSign()
                }
                this.raise(this.pos, "Unexpected character '" + D(t) + "'")
            }, tF.finishOp = function(t, e) {
                var i = this.input.slice(this.pos, this.pos + e);
                return this.pos += e, this.finishToken(t, i)
            }, tF.readRegexp = function() {
                for (var t, e, i = this.pos;;) {
                    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
                    var s = this.input.charAt(this.pos);
                    if (k.test(s) && this.raise(i, "Unterminated regular expression"), t) t = !1;
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
                var o = this.regexpState || (this.regexpState = new tN(this));
                o.reset(i, r, n), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
                var h = null;
                try {
                    h = new RegExp(r, n)
                } catch (t) {}
                return this.finishToken(_.regexp, {
                    pattern: r,
                    flags: n,
                    value: h
                })
            }, tF.readInt = function(t, e, i) {
                for (var s = this.options.ecmaVersion >= 12 && void 0 === e, r = i && 48 === this.input.charCodeAt(this.pos), a = this.pos, n = 0, o = 0, h = 0, p = null == e ? 1 / 0 : e; h < p; ++h, ++this.pos) {
                    var c = this.input.charCodeAt(this.pos),
                        l = void 0;
                    if (s && 95 === c) {
                        r && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === h && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = c;
                        continue
                    }
                    if ((l = c >= 97 ? c - 97 + 10 : c >= 65 ? c - 65 + 10 : c >= 48 && c <= 57 ? c - 48 : 1 / 0) >= t) break;
                    o = c, n = n * t + l
                }
                return (s && 95 === o && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === a || null != e && this.pos - a !== e) ? null : n
            }, tF.readRadixNumber = function(t) {
                var e = this.pos;
                this.pos += 2;
                var i = this.readInt(t);
                return null == i && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (i = tU(this.input.slice(e, this.pos)), ++this.pos) : d(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(_.num, i)
            }, tF.readNumber = function(t) {
                var e, i = this.pos;
                t || null !== this.readInt(10, void 0, !0) || this.raise(i, "Invalid number");
                var s = this.pos - i >= 2 && 48 === this.input.charCodeAt(i);
                s && this.strict && this.raise(i, "Invalid number");
                var r = this.input.charCodeAt(this.pos);
                if (!s && !t && this.options.ecmaVersion >= 11 && 110 === r) {
                    var a = tU(this.input.slice(i, this.pos));
                    return ++this.pos, d(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(_.num, a)
                }
                s && /[89]/.test(this.input.slice(i, this.pos)) && (s = !1), 46 !== r || s || (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), 69 !== r && 101 !== r || s || ((43 === (r = this.input.charCodeAt(++this.pos)) || 45 === r) && ++this.pos, null === this.readInt(10) && this.raise(i, "Invalid number")), d(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                var n = (e = this.input.slice(i, this.pos), s ? parseInt(e, 8) : parseFloat(e.replace(/_/g, "")));
                return this.finishToken(_.num, n)
            }, tF.readCodePoint = function() {
                var t;
                if (123 === this.input.charCodeAt(this.pos)) {
                    this.options.ecmaVersion < 6 && this.unexpected();
                    var e = ++this.pos;
                    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(e, "Code point out of bounds")
                } else t = this.readHexChar(4);
                return t
            }, tF.readString = function(t) {
                for (var e = "", i = ++this.pos;;) {
                    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                    var s = this.input.charCodeAt(this.pos);
                    if (s === t) break;
                    92 === s ? (e += this.input.slice(i, this.pos) + this.readEscapedChar(!1), i = this.pos) : 8232 === s || 8233 === s ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (S(s) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
                }
                return e += this.input.slice(i, this.pos++), this.finishToken(_.string, e)
            };
            var tq = {};
            tF.tryReadTemplateToken = function() {
                this.inTemplateElement = !0;
                try {
                    this.readTmplToken()
                } catch (t) {
                    if (t === tq) this.readInvalidTemplateToken();
                    else throw t
                }
                this.inTemplateElement = !1
            }, tF.invalidStringToken = function(t, e) {
                if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw tq;
                this.raise(t, e)
            }, tF.readTmplToken = function() {
                for (var t = "", e = this.pos;;) {
                    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                    var i = this.input.charCodeAt(this.pos);
                    if (96 === i || 36 === i && 123 === this.input.charCodeAt(this.pos + 1)) {
                        if (this.pos === this.start && (this.type === _.template || this.type === _.invalidTemplate)) {
                            if (36 === i) return this.pos += 2, this.finishToken(_.dollarBraceL);
                            return ++this.pos, this.finishToken(_.backQuote)
                        }
                        return t += this.input.slice(e, this.pos), this.finishToken(_.template, t)
                    }
                    if (92 === i) t += this.input.slice(e, this.pos) + this.readEscapedChar(!0), e = this.pos;
                    else if (S(i)) {
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
            }, tF.readInvalidTemplateToken = function() {
                for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
                    case "\\":
                        ++this.pos;
                        break;
                    case "$":
                        if ("{" !== this.input[this.pos + 1]) break;
                    case "`":
                        return this.finishToken(_.invalidTemplate, this.input.slice(this.start, this.pos));
                    case "\r":
                        "\n" === this.input[this.pos + 1] && ++this.pos;
                    case "\n":
                    case "\u2028":
                    case "\u2029":
                        ++this.curLine, this.lineStart = this.pos + 1
                }
                this.raise(this.start, "Unterminated template")
            }, tF.readEscapedChar = function(t) {
                var e = this.input.charCodeAt(++this.pos);
                switch (++this.pos, e) {
                    case 110:
                        return "\n";
                    case 114:
                        return "\r";
                    case 120:
                        return String.fromCharCode(this.readHexChar(2));
                    case 117:
                        return D(this.readCodePoint());
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
                        if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), t) {
                            var i = this.pos - 1;
                            this.invalidStringToken(i, "Invalid escape sequence in template string")
                        }
                    default:
                        if (e >= 48 && e <= 55) {
                            var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                                r = parseInt(s, 8);
                            return r > 255 && (r = parseInt(s = s.slice(0, -1), 8)), this.pos += s.length - 1, e = this.input.charCodeAt(this.pos), ("0" !== s || 56 === e || 57 === e) && (this.strict || t) && this.invalidStringToken(this.pos - 1 - s.length, t ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(r)
                        }
                        if (S(e)) return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
                        return String.fromCharCode(e)
                }
            }, tF.readHexChar = function(t) {
                var e = this.pos,
                    i = this.readInt(16, t);
                return null === i && this.invalidStringToken(e, "Bad character escape sequence"), i
            }, tF.readWord1 = function() {
                this.containsEsc = !1;
                for (var t = "", e = !0, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
                    var r = this.fullCharCodeAtPos();
                    if (f(r, s)) this.pos += r <= 65535 ? 1 : 2;
                    else if (92 === r) {
                        this.containsEsc = !0, t += this.input.slice(i, this.pos);
                        var a = this.pos;
                        117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                        var n = this.readCodePoint();
                        (e ? d : f)(n, s) || this.invalidStringToken(a, "Invalid Unicode escape"), t += D(n), i = this.pos
                    } else break;
                    e = !1
                }
                return t + this.input.slice(i, this.pos)
            }, tF.readWord = function() {
                var t = this.readWord1(),
                    e = _.name;
                return this.keywords.test(t) && (e = y[t]), this.finishToken(e, t)
            }, G.acorn = {
                Parser: G,
                version: "8.14.0",
                defaultOptions: U,
                Position: B,
                SourceLocation: M,
                getLineInfo: F,
                Node: tc,
                TokenType: m,
                tokTypes: _,
                keywordTypes: y,
                TokContext: ti,
                tokContexts: ts,
                isIdentifierChar: f,
                isIdentifierStart: d,
                Token: tM,
                isNewLine: S,
                lineBreak: k,
                lineBreakG: C,
                nonASCIIwhitespace: E
            }
        }
    }
]);