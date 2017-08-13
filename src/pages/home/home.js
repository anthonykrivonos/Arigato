var _this = this;
import { NavController, Platform, Slides, } from 'ionic-angular';
import { Speech } from '../../classes/speech';
slides: Slides;
slides: Slides;
eUrl: 'home.html';
var HomePage = (function () {
    function HomePage() {
    }
    return HomePage;
}());
export { HomePage };
i;
picture: string;
company: string;
email: string;
phone: string;
notes: string;
logger: boolean = true;
true;
boolean;
logger;
b;
stored: any;
stored: any;
oolean;
oid: boolean;
isAndr;
slide: number = 0 = 0;
;
number: slideoid: boolean;
this.global.logger();
ool, function () {
    th, private;
    global: GlobalGlobal, private;
    global: is.hideLogger();
    ;
    hideLogger();
};
this.global.logger('show', function () {
    _this.showLogger();
});
this.global.logger('hide', function () {
    _this.hideLogger();
});
    > {
        this: .
    };
l;
loadi: boole;
text: string;
false;
constructor(pu, , private, plt, Platform, plt, Platformrivate, pprivate, speech, Speech, private, speech, Speechblic, navCtrl, NavController);
{
    slideTolide: numbslidelirsli;
    changeSlide();
    voidvoid: {
        this.slide = this.slide = this.slides.getActiveIndex();
        ;
        ().getActiveIndex.slidesthis;
    }
    {
    }
    Slide();
    hange;
    c;
    this.slide =
        this.slide = de;
    number;
    ToSlide(slidelide, { 250: this.slides.slideTo(2, 500)
    }, goToSlide(), {
        this: .slides.slideTo(2, 500)
    });
}
showLogthis.logger = true;
true;
logger = this.r();
void {
    this: .global.logger(this.editing ? 'hide' : 'show')
};
hdeLogthis.logger = false;
this.logger = false;
this.global.logger(this.editing ? 'hide' : 'show');
();
gerLogedi;
hi;
isAndroiddhis.plt.is('ios') ? 'iosfalseandtrue : an? ' : ios;
' (';
ios;
')t.isthis.pla= orme;
this.plato;
this.platondSpeech();
void {
    this: .loading = false,
    this: .speech.stopListening()
};
text: string;
loading: boolean = false;
constructor(private, speech, Speech);
{ }
beginSpeech();
void {
    this: .loading = true,
    this: .speech.listen(function (text) { return _this.text = text; })
};
endSpeech();
void {
    this: .loading = false,
    this: .speech.stopListening()
};
resetValues();
void {
    default:  = false,
    this: .first_name = "First",
    this: .last_name = "Last",
    this: .middle_initial = "M.",
    this: .picture = "",
    this: .company = "Arigato, Inc.",
    this: .email = "me@arigato.com",
    this: .phone = "(000)000-0000",
    this: .notes = "Tap record to create a contact."
};
nullValues();
void { true: ,
    this: .first_name = null,
    this: .last_name = null,
    this: .middle_initial = null,
    this: .picture = null,
    this: .company = null,
    this: .email = null,
    this: .phone = null,
    this: .notes = null
};
//# sourceMappingURL=home.js.map