import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="91.18" height="23" viewBox="0 0 24.125 6.085">
    <path d="M7.968 2.367q.031.225.123.336.166.202.571.202.243 0 .394-.053.287-.102.287-.38 0-.163-.142-.252-.143-.087-.447-.153l-.347-.078q-.512-.116-.708-.252-.331-.226-.331-.71 0-.44.32-.731.32-.292.941-.292.518 0 .883.276.367.274.385.797h-.658Q9.22.78 8.98.657 8.82.573 8.582.573q-.264 0-.422.107-.158.107-.158.298 0 .176.155.262.1.058.427.136l.566.136q.371.089.56.238.294.231.294.67 0 .449-.345.747-.343.296-.97.296-.64 0-1.008-.292-.367-.293-.367-.805zM8.633 0zM10.473.1h.697v2.016q0 .338.08.494.124.275.543.275.416 0 .54-.275.08-.156.08-.494V.1h.697v2.016q0 .522-.163.814-.302.534-1.154.534-.853 0-1.157-.534-.163-.292-.163-.814zm1.32 0zM13.72 3.38V.1h.678v1.25h1.281V.1h.68v3.28h-.68V1.914h-1.281V3.38zM17.87 2.14h.833l-.41-1.29zM17.913.1h.774l1.161 3.28h-.743l-.211-.675h-1.208l-.227.674h-.716zm.382 0zM20.213.1h.719l1.306 2.29V.1h.638v3.28h-.685l-1.34-2.33v2.33h-.638zM21.57.093zM24.102 3.38h-.68V.1h.68zm-.34-3.344z" 
    fill={fill}
    />
    
    <path d="M8.807 4.798q-.113-.552-.679-.554-.355-.002-.58.209-.231.213-.234.712-.002.38.176.643.177.27.578.277.35-.004.528-.187.176-.174.23-.434h-.172q-.049.21-.188.341-.139.137-.366.14-.35-.005-.487-.249-.07-.111-.102-.252-.03-.136-.03-.284-.003-.322.144-.545.144-.225.46-.231.449-.007.551.414zM9.799 6.074q.27-.003.426-.186.155-.174.158-.478 0-.284-.144-.472-.146-.186-.44-.19-.29.004-.437.19-.146.188-.146.472.003.328.172.493.163.168.41.17zm.428-.664q0 .21-.097.367-.102.162-.331.165-.21-.002-.316-.15-.111-.144-.111-.382 0-.212.1-.37.099-.158.327-.162.231.002.33.153.1.15.098.38zM10.966 5.362q-.002-.125.032-.239.04-.102.126-.172.088-.071.224-.073.33 0 .325.34v.821h.146v-.823q0-.08-.007-.153-.01-.071-.056-.137-.143-.185-.384-.179-.128 0-.223.056-.097.056-.183.153V4.78h-.146v1.26h.146zM12.28 5.645q.012.183.134.302.12.124.345.127.226 0 .37-.095.14-.093.143-.273 0-.092-.032-.153-.035-.063-.093-.102-.056-.04-.128-.066-.074-.023-.15-.041-.156-.031-.276-.082-.058-.027-.091-.066-.037-.04-.037-.102.002-.21.283-.216.14 0 .232.058.09.06.109.206h.148q-.065-.403-.486-.395-.209.002-.323.1-.119.098-.119.26 0 .089.036.15.034.06.093.1.058.036.131.058.037.012.073.02.034.009.07.022l.152.028q.035.007.07.02.034.01.058.024.058.024.092.068.032.044.032.111 0 .095-.076.162-.074.07-.235.072-.319.007-.377-.297zM14.17 5.925q-.058.017-.119.017-.088 0-.107-.044-.022-.044-.02-.133v-.862h.236V4.78h-.236v-.35h-.146v.35h-.176v.123h.176v.92q0 .135.062.195.056.056.163.056.055-.003.1-.016.04-.01.067-.014zM14.724 5.422q-.002-.218.085-.369.09-.148.331-.148v-.158q-.155 0-.252.058-.098.06-.158.211h-.006V4.78h-.145v1.26h.145zM16.405 5.466q0 .211-.1.34-.099.133-.283.136-.329-.002-.324-.336V4.78h-.146v.83q-.002.198.1.327.1.134.348.137.083-.003.148-.025.063-.02.109-.049.049-.033.085-.07.037-.034.063-.065v.174h.146V4.78h-.146zM18.115 5.177q-.078-.433-.522-.43-.282.005-.428.198-.151.195-.151.468 0 .283.141.468.141.188.438.193.237-.003.371-.132.134-.126.17-.338h-.155q-.056.333-.386.338-.224-.005-.324-.167-.1-.158-.1-.362-.002-.207.102-.368.1-.163.322-.167.293.004.374.299zM19.04 5.925q-.059.017-.12.017-.087 0-.106-.044-.023-.044-.02-.133v-.862h.236V4.78h-.236v-.35h-.146v.35h-.177v.123h.177v.92q0 .135.062.195.055.056.162.056.056-.003.1-.016.041-.01.067-.014zM19.609 6.04V4.78h-.146v1.26zm.007-1.534V4.29h-.16v.216zM20.652 6.074q.27-.003.426-.186.155-.174.158-.478 0-.284-.144-.472-.146-.186-.44-.19-.29.004-.437.19-.146.188-.146.472.003.328.172.493.163.168.41.17zm.428-.664q0 .21-.097.367-.102.162-.331.165-.209-.002-.316-.15-.111-.144-.111-.382 0-.212.1-.37t.327-.162q.231.002.33.153.1.15.098.38zM21.82 5.362q-.003-.125.031-.239.04-.102.126-.172.088-.071.224-.073.33 0 .326.34v.821h.146v-.823q0-.08-.008-.153-.01-.071-.055-.137-.144-.185-.385-.179-.128 0-.223.056-.097.056-.183.153V4.78h-.145v1.26h.145zM23.133 5.645q.012.183.134.302.121.124.345.127.226 0 .37-.095.14-.093.143-.273 0-.092-.032-.153-.035-.063-.093-.102-.056-.04-.128-.066-.073-.023-.15-.041-.156-.031-.276-.082-.058-.027-.091-.066-.037-.04-.037-.102.002-.21.284-.216.138 0 .23.058.091.06.11.206h.148q-.065-.403-.486-.395-.209.002-.323.1-.118.098-.118.26 0 .089.035.15.035.06.093.1.058.036.131.058.037.012.073.02.034.009.071.022l.15.028q.036.007.07.02.035.01.059.024.058.024.092.068.032.044.032.111 0 .095-.076.162-.074.07-.234.072-.32.007-.378-.297z" 
    fill={fill}
    />
  
    <path d="M1.37 1.484a.835.838 0 01-1.174-.105A.835.838 0 01.296.2.835.838 0 011.47.297a.835.838 0 01-.091 1.18m2.193.006a.835.838 0 01-1.175-.104.835.838 0 01.1-1.179.835.838 0 011.176.096.835.838 0 01-.092 1.18m2.193.008a.835.838 0 01-1.174-.105.835.838 0 01.1-1.178.835.838 0 011.175.096.835.838 0 01-.091 1.18m-.01 2.21a.835.838 0 01-1.174-.105.835.838 0 01.1-1.179.835.838 0 011.175.096.835.838 0 01-.091 1.18m-2.212.008a.835.838 0 01-1.175-.105.835.838 0 01.1-1.179.835.838 0 011.176.096.835.838 0 01-.092 1.18m-2.211.008a.835.838 0 01-1.175-.105.835.838 0 01.1-1.178.835.838 0 011.175.096.835.838 0 01-.091 1.18m-.01 2.21a.835.838 0 01-1.174-.105.835.838 0 01.1-1.179.835.838 0 011.175.096.835.838 0 01-.091 1.18m2.193.007a.835.838 0 01-1.175-.105.835.838 0 01.1-1.178.835.838 0 011.176.096.835.838 0 01-.092 1.18m2.193.007A.835.838 0 014.6 5.784a.835.838 0 01.1-1.179.835.838 0 011.176.096.835.838 0 01-.091 1.18"
    fill={fill}
    />
</svg>


  );
}