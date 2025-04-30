import React, { useEffect } from 'react';

const Search = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const searchPanel =  document.getElementById("search-panel")
    script.src = "https://tp.media/content?currency=usd&campaign_id=100&promo_id=7879&plain=true&no_labels=&border_radius=0&color_focused=%2332a8dd&special=%23C4C4C4&secondary=%23FFFFFF&light=%23FFFFFF&dark=%23262626&color_icons=%2332a8dd&color_button=%2332a8dd&primary_override=%2332a8dd&searchUrl=search.rivaltrip.com%23%2Fflights&locale=en_us&powered_by=false&show_hotels=false&shmarker=396866&trs=198424" ;
    script.type = "text/javascript";
    script.charset = "utf-8";
    searchPanel.innerHTML = ""
    searchPanel.appendChild(script);

    return () => {
      // Cleanup: Remove the script when component unmounts
      searchPanel.removeChild(script);
    };
  }, []);

  return  <div id="search-panel" className="w-[90%]  mx-auto " ></div>   
  
};

export default Search;