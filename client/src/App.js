import React, { useEffect } from "react";
import { useState } from "react";
import { useInterval } from "./components/useInterval";
import Logo from "./assets/images/assets_logo.svg";
import LettersJ from "./assets/images/assets_letters-j.svg";
import Illu1 from "./assets/images/assets_illu1_remake.svg";
import Illu2 from "./assets/images/assets_illu2-remake_2.svg";
import Illu3 from "./assets/images/assets_illu3.svg";
import LetterA from "./assets/images/assets_letters-a.svg";
import LetterZ from "./assets/images/assets_letters-z.svg";
import TopArrow from "./assets/images/assets_2_arrow-top.svg";
import TopRightArrow from "./assets/images/assets_2_arrow-top-r.svg";
import Piano from "./assets/images/assets_keyboard.svg";
import Sheep from "./assets/images/assets_sheep.svg";
import Eye from "./assets/images/assets_eye.svg";
import Mouth from "./assets/images/assets_mouth.svg";
import Top from "./assets/images/assets_arrow.svg";
import Player from "./components/Player";
import $ from "jquery";

import "./App.css";

const App = () => {
  const [songInfo, setSongInfo] = useState("");

  useEffect(() => {
    console.log("hello");
    var t = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
      e = new Date(),
      n = e.getDay(),
      a = e.getHours(),
      i = t[n - 1];
    i = 0 === n ? t[6] : t[n - 1];
    var s = $("#" + i);
    $(".row-show", s).each(function () {
      var t = $(this).find(".hour").text().split(":")[0];
      return parseInt(t) >= parseInt(a)
        ? ($(this)
            .prev(".row-show")
            .append('<div class="playing-bullet"></div>'),
          !1)
        : parseInt(t) === parseInt(a)
        ? ($(this).append('<div class="playing-bullet"></div>'), !1)
        : void 0;
    });
  }, []);

  useEffect(() => {
    fetchSongInfo();
  }, []);

  useInterval(() => {
    fetchSongInfo();
  }, 10000);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fetchSongInfo = async () => {
    const options = {
      method: "GET",
      headers: new Headers({ "Content-Type": "text/plain;charset=utf-8"})
    };
    const result = await fetch(
      "https://gofm-api.vercel.app/currentsong",
      options
    );
    const data = await result.text();
    console.log(data);
    setSongInfo(data);
  };

  return (
    <div className="App site-background-color">
      <header className="App-header">
        <div className="logo">
          <a href="/" className="logo" title="Jazz FM Romania">
            <img
              className="img-fluid w-100"
              src={Logo}
              alt="Jazz FM Romania"
              title="Jazz FM Romania"
            />
          </a>
        </div>
        <Player url="https://live.gofm.ro:2000/stream/goFM.ro" />
        <div className="meta-info">
          <div className="label">Now playing</div>
          <div id="artist">{songInfo?.split("-")[0]?.trim()}</div>
          <div id="song">{songInfo?.split("-")[1]?.trim()}</div>
        </div>
      </header>
      <div className="purple-bk">
        <img src={Illu1} alt="" />
      </div>
      <div className="how-to yellow-bg">
        <div className="row step">
          <div className="col-12 col-md-8">
            <div className="big-title">
              <h2>
                How to
                <br />
                listen
                <br />
                to
              </h2>
            </div>
            <div>
              <div className="col-8">
                <img className="img-fluid mt-25" src={LettersJ} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="bullet-big d-none d-md-block"></div>
            <div className="schedule mt_19">
              <h3 className="f_11">
                <span className="no">1 </span>FM
              </h3>
              <div className="table-schedule">
                <div className="row-schedule">
                  <div className="name">Braşov</div>
                  <div className="right text-uppercase">#</div>
                </div>

                <div className="row-schedule">
                  <div className="name">Bucureşti</div>
                  <div className="right text-uppercase">#</div>
                </div>
                <div className="row-schedule">
                  <div className="name">Cluj Napoca</div>
                  <div className="right text-uppercase">#</div>
                </div>
                <div className="row-schedule">
                  <div className="name">Constanţa</div>
                  <div className="right text-uppercase">#</div>
                </div>
                <div className="row-schedule">
                  <div className="name">Craiova</div>
                  <div className="right text-uppercase">#</div>
                </div>
                <div className="row-schedule">
                  <div className="name">Iaşi</div>
                  <div className="right text-uppercase">#</div>
                </div>
                <div className="row-schedule">
                  <div className="name">Oradea</div>
                  <div className="right text-uppercase">#</div>
                </div>
                <div className="row-schedule">
                  <div className="name">Timişoara</div>
                  <div className="right text-uppercase">#</div>
                </div>
                <div className="row-schedule">
                  <div className="name">Sibiu</div>
                  <div className="right text-uppercase">#</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-2040">
          <div className="col-12 col-md-7 col-lg-8 order-md-2">
            <img className="img-fluid letter" src={LetterA} alt="" />
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <div className="schedule">
              <h3 className="f_11">
                <span className="no">2 </span>Online
              </h3>
              <div className="table-schedule">
                <div className="row-schedule">
                  <div className="name">
                    <a href="#">gofm.io</a>
                  </div>
                  <div className="right arr">
                    <a href="">
                      <img src={TopArrow} alt="" />
                    </a>
                  </div>
                </div>
                <div className="row-schedule">
                  <div className="name">
                    <a
                      href="https://tunein.com/radio/goFM-1032-s140487"
                      target="_blank"
                    >
                      TuneIn
                    </a>
                  </div>
                  <div className="right arr">
                    <a href="https://tunein.com/radio/goFM-1032-s140487">
                      <img src={TopRightArrow} alt="" />
                    </a>
                  </div>
                </div>
                <div className="row-schedule">
                  <div className="name">
                    <a
                      href="http://streema.com/radios/play/GoFm_103.2_FM"
                      target="_blank"
                    >
                      Streema
                    </a>
                  </div>
                  <div className="right arr">
                    <a href="http://streema.com/radios/play/GoFm_103.2_FM">
                      <img src={TopRightArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row step">
          <div className="col-12 order-md-2">
            <div className="letterz">
              <div className="col-6 col-md-6">
                <img className="img-fluid letter" src={LetterZ} alt="" />
              </div>
              <div className="col-6 col-md-6">
                <img className="img-fluid letter" src={LetterZ} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 offset-md-6">
            <div className="schedule">
              <h3 className="f_11">
                <span className="no">3 </span>Devices
              </h3>
            </div>
          </div>
          <div className="col-12 pb-2040">
            <div className="schedule">
              <div className="table-schedule">
                <div className="row-schedule big">
                  <div className="name">Apple Siri</div>
                  <div className="right text-uppercase">
                    "Hey Siri, Play GO FM Romania!"
                  </div>
                </div>
                <div className="row-schedule big">
                  <div className="name">Google Home</div>
                  <div className="right text-uppercase">
                    "Ok Google, Play GO FM Romania!"
                  </div>
                </div>
                <div className="row-schedule big">
                  <div className="name">Amazon Echo</div>
                  <div className="right text-uppercase">
                    "Alexa, play GO FM Romania!"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ilu purple-bk">
          <img className="ilu2" src={Illu2} alt="" />
        </div>
        <div className="row pt-48">
          <div className="big-title schedule-text">
            <h2>
              Sched
              <br />
              ule
            </h2>
          </div>
          <div className="col-md-6">
            <div className="bullet-big d-none d-md-block"></div>
          </div>
        </div>
        <div className="row wrapper-weeks">
          <div className="week col-12 col-md-4 offset-md-8" id="mon">
            <h3 className="expand">Mon</h3>
            <div className="table-shows expandable">
              <div className="row-show">
                <div className="hour">06:00</div>
                <div className="show">Good Morning Jazz</div>
              </div>
              <div className="row-show">
                <div className="hour">09:00</div>
                <div className="show">Offizz Time</div>
              </div>
              <div className="row-show">
                <div className="hour">13:00</div>
                <div className="show">My Generation</div>
              </div>
              <div className="row-show">
                <div className="hour">17:00</div>
                <div className="show">Jazz, Soul &amp; Blues</div>
              </div>
              <div className="row-show">
                <div className="hour">21:00</div>
                <div className="show">Taxi Blues</div>
              </div>
              <div className="row-show">
                <div className="hour">23:00</div>
                <div className="show">Jazz by Night</div>
              </div>
              <div className="row-show d-none">
                <div className="hour">24:00</div>
              </div>
            </div>
          </div>
          <div className="week col-12 col-md-4" id="tue">
            <h3 className="expand">Tue</h3>
            <div className="table-shows expandable">
              <div className="row-show">
                <div className="hour">06:00</div>
                <div className="show">Good Morning Jazz</div>
              </div>
              <div className="row-show">
                <div className="hour">09:00</div>
                <div className="show">Offizz Time</div>
              </div>
              <div className="row-show">
                <div className="hour">13:00</div>
                <div className="show">My Generation</div>
              </div>
              <div className="row-show">
                <div className="hour">17:00</div>
                <div className="show">Jazz, Soul &amp; Blues</div>
              </div>
              <div className="row-show">
                <div className="hour">21:00</div>
                <div className="show">Jazz Variations</div>
              </div>
              <div className="row-show">
                <div className="hour">23:00</div>
                <div className="show">Jazz by Night</div>
              </div>
              <div className="row-show d-none">
                <div className="hour">24:00</div>
              </div>
            </div>
          </div>
          <div className="week col-12 col-md-4" id="wed">
            <h3 className="expand">Wed</h3>
            <div className="table-shows expandable">
              <div className="row-show">
                <div className="hour">06:00</div>
                <div className="show">Good Morning Jazz</div>
              </div>
              <div className="row-show">
                <div className="hour">09:00</div>
                <div className="show">Offizz Time</div>
              </div>
              <div className="row-show">
                <div className="hour">13:00</div>
                <div className="show">My Generation</div>
              </div>
              <div className="row-show">
                <div className="hour">17:00</div>
                <div className="show">Jazz, Soul &amp; Blues</div>
              </div>
              <div className="row-show">
                <div className="hour">21:00</div>
                <div className="show">Jazz Talk</div>
              </div>
              <div className="row-show">
                <div className="hour">23:00</div>
                <div className="show">Jazz by Night</div>
              </div>
              <div className="row-show d-none">
                <div className="hour">24:00</div>
              </div>
            </div>
          </div>
          <div className="week col-12 col-md-4 offset-md-4" id="thu">
            <h3 className="expand">Thu</h3>
            <div className="table-shows expandable">
              <div className="row-show">
                <div className="hour">06:00</div>
                <div className="show">Good Morning Jazz</div>
              </div>
              <div className="row-show">
                <div className="hour">09:00</div>
                <div className="show">Offizz Time</div>
              </div>
              <div className="row-show">
                <div className="hour">13:00</div>
                <div className="show">My Generation</div>
              </div>
              <div className="row-show">
                <div className="hour">17:00</div>
                <div className="show">Jazz, Soul &amp; Blues</div>
              </div>
              <div className="row-show">
                <div className="hour">21:00</div>
                <div className="show">Live in Concert</div>
              </div>
              <div className="row-show">
                <div className="hour">23:00</div>
                <div className="show">Jazz by Night</div>
              </div>
              <div className="row-show d-none">
                <div className="hour">24:00</div>
              </div>
            </div>
          </div>
          <div className="week col-12 col-md-4 offset-md-8" id="fri">
            <h3 className="expand">Fri</h3>
            <div className="table-shows expandable">
              <div className="row-show">
                <div className="hour">06:00</div>
                <div className="show">Good Morning Jazz</div>
              </div>
              <div className="row-show">
                <div className="hour">09:00</div>
                <div className="show">Offizz Time</div>
              </div>
              <div className="row-show">
                <div className="hour">13:00</div>
                <div className="show">My Generation</div>
              </div>
              <div className="row-show">
                <div className="hour">17:00</div>
                <div className="show">Jazz, Soul &amp; Blues</div>
              </div>
              <div className="row-show">
                <div className="hour">21:00</div>
                <div className="show">Vibe Ride</div>
              </div>
              <div className="row-show">
                <div className="hour">23:00</div>
                <div className="show">Jazz by Night</div>
              </div>
              <div className="row-show d-none">
                <div className="hour">24:00</div>
              </div>
            </div>
          </div>
          <div className="week col-12 col-md-4" id="sat">
            <h3 className="expand">Sat</h3>
            <div className="table-shows expandable">
              <div className="row-show">
                <div className="hour">06:00</div>
                <div className="show">Good Morning Jazz</div>
              </div>
              <div className="row-show">
                <div className="hour">09:00</div>
                <div className="show">Espresso</div>
              </div>
              <div className="row-show">
                <div className="hour">13:00</div>
                <div className="show">Lazy weekend</div>
              </div>
              <div className="row-show">
                <div className="hour">21:00</div>
                <div className="show">Jazz Boulevard</div>
              </div>
              <div className="row-show">
                <div className="hour">23:00</div>
                <div className="show">Jazz by Night</div>
              </div>
              <div className="row-show d-none">
                <div className="hour">24:00</div>
              </div>
            </div>
          </div>
          <div className="week col-12 col-md-4" id="sun">
            <h3 className="expand active">Sun</h3>
            <div className="table-shows expandable expanded">
              <div className="row-show">
                <div className="hour">06:00</div>
                <div className="show">Good Morning Jazz</div>
              </div>
              <div className="row-show">
                <div className="hour">09:00</div>
                <div className="show">Espresso</div>
              </div>
              <div className="row-show">
                <div className="hour">13:00</div>
                <div className="show">Lazy weekend</div>
              </div>
              <div className="row-show">
                <div className="hour">21:00</div>
                <div className="show">Love Story</div>
              </div>
              <div className="row-show">
                <div className="hour">23:00</div>
                <div className="show">Jazz by Night</div>
              </div>
              <div className="row-show d-none">
                <div className="hour">24:00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="marquee-ash">
          <hr className="bk-black" />
          <p>
            JAZZ FM ROMANIA JAZZ FM ROMANIA JAZZ FM ROMANIA JAZZ FM ROMANIA JAZZ
            FM ROMANIA JAZZ FM ROMANIA
          </p>
          <hr className="bk-black" />
        </div>
        <div className="marquee-ash-right">
          <p>
            SIBIU ONLINE CLUJ ONLINE Braşov ONLINE SIBIU ONLINE CLUJ ONLINE
            Braşov ONLINE
          </p>
          <hr className="bk-black" />
        </div>
        <div className="marquee-ash">
          <p>
            SIBIU ONLINE CLUJ ONLINE Braşov ONLINE SIBIU ONLINE CLUJ ONLINE
            Braşov ONLINE
          </p>
          <hr className="bk-black" />
        </div>
        <div className="yellow-bg center-align">
          <div className="col-md-8 offset-md-2">
            <img className="img-fluid w-100 illu-piano" src={Piano} alt="" />
          </div>
        </div>
        <div className="jazz-in-ro blue-bk">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 offset-md-1">
                <div className="wrapper-sticky">
                  <img className="img-fluid sheep" src={Sheep} alt="" />
                </div>
              </div>
              <div className="col-md-6 offset-md-1">
                <h2 className="f_11">
                  Jazz in
                  <br /> Romania
                </h2>
                <div className="schedule">
                  <div className="table-schedule">
                    <div className="row-schedule">
                      <div className="name">Jazz în Church</div>
                      <div className="right text-uppercase">Bucureşti</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Green Hours Jazz Fest</div>
                      <div className="right text-uppercase">Bucureşti</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Bucharest Jazz Festival</div>
                      <div className="right text-uppercase">Bucureşti</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Ziua Internaţională a Jazzului</div>
                      <div className="right text-uppercase">Naţional</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Jazz City</div>
                      <div className="right text-uppercase">Iaşi</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Jazz în the Park</div>
                      <div className="right text-uppercase">Cluj</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Jazz TM</div>
                      <div className="right text-uppercase">Timişoara</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Gărâna Jazz Festival</div>
                      <div className="right text-uppercase">Gărâna</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Roland Jazz Festival</div>
                      <div className="right text-uppercase">Sângeorz-Băi</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Ciuc Jazz Festival</div>
                      <div className="right text-uppercase">Miercurea Ciuc</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Sibiu Jazz Festival</div>
                      <div className="right text-uppercase">Sibiu</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Deva Jazz Festival</div>
                      <div className="right text-uppercase">Deva</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">
                        Braşov Jazz &amp; Blues Festival
                      </div>
                      <div className="right text-uppercase">Braşov</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Smida Jazz Festival</div>
                      <div className="right text-uppercase">Smida</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">
                        Festivalul Internaţional Studenţesc de Jazz
                      </div>
                      <div className="right text-uppercase">Târgu-Mureş</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">
                        Bucharest International Jazz Competition &amp; Festival
                      </div>
                      <div className="right text-uppercase">Bucureşti</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">
                        Festivalul internaţional de Jazz „Johnny Răducanu”
                      </div>
                      <div className="right text-uppercase">Brăila</div>
                    </div>
                    <div className="row-schedule">
                      <div className="name">Transilvania Jazz Festival</div>
                      <div className="right text-uppercase">Cluj</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ilu purple-bk">
          <div className="col-12">
            <img src={Illu3} alt="" />
          </div>
        </div>
        <div className="yellow-bg container-fluid contact">
          <div className="row pt-48 site-background-color">
            <div className="big-title col-md-6">
              <div className="wrapper-stick" id="contact">
                <h2>
                  Cont
                  <br />
                  act
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bullet-big d-none d-md-block"></div>
              <div className="schedule mt_26">
                <div className="table-schedule">
                  <div className="row-schedule">
                    <p>
                      Calea Victoriei 120
                      <br />
                      Bucharest, Sector 1, Romania
                      <br />
                      +4 031 433 4711
                    </p>
                  </div>
                  <div className="row-schedule">
                    <div className="name">General enquiries</div>
                    <div className="right">
                      <a href="mailto:co%6E%74act@j%61zzfm.ro">
                        contact@jazzfm.ro
                      </a>
                    </div>
                  </div>
                  <div className="row-schedule">
                    <div className="name">Music submission</div>
                    <div className="right">
                      <a href="mailto:music@jazzfm.ro">music@jazzfm.ro</a>
                    </div>
                  </div>
                  <div className="row-schedule flex-base">
                    <div className="name f_11 facebook">
                      <a href="http://fb.com/jazzfm.ro" target="_blank">
                        Facebook
                      </a>
                    </div>
                    <div className="right">
                      <a href="http://fb.com/jazzfm.ro" target="_blank">
                        <img className="w50" src={TopRightArrow} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="row-schedule">
                    <img className="img-fluid eye" src={Eye} alt="" />
                  </div>
                  <div className="row-schedule">
                    <a className="font_4_120" href="terms.html">
                      Terms
                    </a>
                  </div>
                  <div className="row-schedule">
                    <a className="font_4_120" href="privacy.html">
                      Privacy
                    </a>
                  </div>
                  <div className="row-schedule">
                    <p>©2022, Jazz FM Romania.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container-fluid">
            <div className="col-sm-6 purple-bk box-footer">
              <div className="col-md-10">
                <img className="img-fluid" src={Mouth} alt="" />
              </div>
            </div>
            <div className="col-sm-6 red-bk box-footer">
              <div className="gotop" id="topbtn">
                <button className="scroll-to-top" onClick={scrollToTop}>
                  <img className="img-fluid" src={Top} alt="" />
                </button>
              </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
