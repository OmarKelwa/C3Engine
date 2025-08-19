(function(){
  var langToggle = document.getElementById('langToggle');
  var isArabic = true;
  function setTexts(){
    var nodes = document.querySelectorAll('.i18n');
    nodes.forEach(function(node){
      var ar = node.getAttribute('data-ar');
      var en = node.getAttribute('data-en');
      node.textContent = isArabic ? (ar || node.textContent) : (en || node.textContent);
    });
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }
  if(langToggle){
    langToggle.addEventListener('click', function(){
      isArabic = !isArabic;
      setTexts();
    });
  }
  var year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }
  setTexts();
})();

