/**
 *
 */
(function(helper, cfg) {
  var trac;
  function cb(){
    trac = window.nol_t({
        cid: cfg.cid,
        server: cfg.server
      },
      {
        link_overlay: cfg.link_overlay,
        surveys_enabled: cfg.surveys_enabled,
        sample_rate: cfg.sample_rate
      }
    );
    document.getElementById('event-anchor').addEventListener('pager', function(){
      trac.record().post();
    });
  }

  helper.loadScript("//"+(cfg.server||"secure-us")+".imrworldwide.com/v60.js", cb, true);

}(helper, ( window.nielsen_cfg || {
  cid: 'us-803965h',
  server: 'secure-us',
  link_overlay: 0,
  surveys_enabled: 0,
  sample_rate: 0
})));


