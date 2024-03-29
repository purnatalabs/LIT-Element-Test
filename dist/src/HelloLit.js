import { __decorate } from "tslib";
import { html, css, LitElement, property } from 'lit-element';

export class HelloLit extends LitElement {

    static get properties() {
        return {
            myArray: { type: Array }
        };
    }

    constructor() {
        super(...arguments);
        this.title = 'HySecure';
        this.appLogo = './images/Logo.svg'
        this.help_link = 'https://docs.accops.com/hysecure_develop/index.html';
        this.label = 'data';
        this.myArray = [''];
    }
    get PrimaryNav() {
        return  html`
            <button class="navtabImg" data-index={{index}} {{active}}>
                <i class="material-icons-outlined">{{icon}}</i>
                <p class="icon-name">{{label}}</p>
            </button>   
    `}

    get SecondaryNav(){
        return html`
            <button class="subTab" data-primary-index="{{primaryIndex}}" data-index="{{index}}" {{active}}>
                <p>{{label}}</p>
            </button>
    `}

    get TertiaryNav() {
        return html`
            <button class="thirdButtonTab" data-primary-index="{{primaryIndex}}" data-secondary-index="{{secondaryIndex}}" data-index="{{index}}" {{active}}>
                <p>{{label}}</p>
            </button>
    `}

    // get SecondaryNav() {
    //     return  html`
    //     <button class="navtabImg" data-index={{index}} {{active}}>
    //         <i class="material-icons-outlined">{{icon}}</i>
    //         <p class="icon-name">{{label}}</p>
    //     </button>   
    // `}
  
    onPageLoad() {
        this.renderPrimaryNav();
        var firstTabIndex = 0;
        // var header = document.getElementById('heading');
        // var navObj = navtabs[firstTabIndex];
        const myArray = this.myArray;
        // header.innerText = navObj.name;
        // if (myArray[firstTabIndex].children) {
        //     renderSecondaryNav(firstTabIndex);
        // } else {
        //     openUrlInIframe(navObj);
        // }
        const theme = localStorage.getItem("theme");
        if (theme == "dark") {
            document.body.classList.add("dark");
        }
    }

    renderPrimaryNav() {
        const myArray = this.myArray;
        let primaryNav =  this.renderRoot.getElementById('primaryTab');
        let menuItemTemplate =  this.PrimaryNav;
        let html = '';
        for (var i = 0; i < myArray.length; i++) {
            var menuItemHtml = menuItemTemplate;
            menuItemHtml = menuItemHtml.strings[0].replace('{{index}}', i);
            menuItemHtml = menuItemHtml.replace('{{icon}}', myArray[i].icon);
            menuItemHtml = menuItemHtml.replace('{{label}}', myArray[i].name);
            menuItemHtml = menuItemHtml.replace('{{active}}', i === 0 ? 'data-active' : '');

            html += menuItemHtml;
        }
        primaryNav.innerHTML = html;
    
        this.renderRoot.getElementById('primaryTab')
        .addEventListener('click', function (e) {
            var target = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
            if (target.tagName === 'BUTTON') {
                var index = parseInt(target.getAttribute('data-index'));
                var navObj = myArray[index];
                var current = this.querySelector(".navtabImg[data-active]");

                if (current) current.removeAttribute('data-active');
                target.setAttribute('data-active', '');

                document.body.classList.remove('hasSecondary');
                document.body.classList.remove('hasTertiary');

                // var secondaryTab = this.renderRoot.getElementById('secondaryTabIndex').innerHTML;
                // secondaryTab = '';
                // var tertiaryTab = this.renderRoot.getElementById('TertiaryTabIndex').innerHTML;
                // tertiaryTab =  '';

                if (navObj && navObj.children.length > 0) {
                    this.renderSecondaryNav(index);
                } else {
                    document.body.classList.remove('hasSecondary');
                    document.body.classList.remove('hasTertiary');
                    openUrlInIframe(navObj);
                }
            }
        });   
    }   

renderSecondaryNav(tabIndex) {
    var myArray = this.myArray;
    var navObj = myArray[tabIndex];
    var secondaryNav = this.renderRoot.getElementById('secondaryTabIndex');
    var secondaryMenuItemTemplate = this.SecondaryNav;
    var html = '';

    for (var i = 0; i < navObj.children.length; i++) {
        var menuItemHtml = secondaryMenuItemTemplate;
        menuItemHtml = menuItemHtml.replace('{{active}}', i === 0 ? 'data-active' : '');
        menuItemHtml = menuItemHtml.replace('{{label}}', navObj.children[i].name);
        menuItemHtml = menuItemHtml.replace('{{primaryIndex}}', tabIndex);
        menuItemHtml = menuItemHtml.replace('{{index}}', i);

        html += menuItemHtml;
    }

    secondaryNav.innerHTML = html;

    if (navObj.children[0].children && navObj.children[0].children.length > 0) {
        renderTertiaryNav(tabIndex, 0);
    } else {
        document.body.classList.add('hasSecondary');
        document.body.classList.remove('hasTertiary');
        openUrlInIframe(navObj.children[0]);
    }
}
    toggleDarkMode() {
        this.renderRoot.firstElementChild.classList.toggle('dark');
        if (this.renderRoot.firstElementChild.classList.contains('dark')) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "");
        }
        var iframeDoc = this.shadowRoot.getElementById('iframeIndex').contentDocument;
        if (iframeDoc) {
            iframeDoc.body.classList.toggle('dark');
        }
        const ImageId = this.shadowRoot.getElementById('themeIcon');
        if (ImageId.textContent.match("dark_mode")) {
            ImageId.textContent = "light_mode";
        } else {
            ImageId.textContent = "dark_mode";
        }
    }

    render() {
        return html`   
        <section class="" @click=${this.onPageLoad}>     
            <div class="headerHySecure mainHeader">
                <a href="javascript:void(0)">
                <div class="topLeftBox">
                
                    <img class="imgLogo" src=${this.appLogo} alt="">
                    <p class="title">${this.title}</p>
                </div>
                </a>
                <div class="topRightBox" id="header">
                    <!-- SecondLevel Tab Buttons -->
                    <div class="secondaryTab" id="secondaryTabIndex">
                    
                    </div>
                    <div class="listing">
                        <i @click=${this.toggleDarkMode} id="themeIcon" class="material-icons-outlined icons">dark_mode</i>
                        <a href=${this.help_link} target="_blank">
                            <i class="material-icons-outlined icons">help</i>
                        </a>
                    </div>
                </div>
            </div>
        
            <div class="mainBlock">
            <div class="primaryTab" id="primaryTab">
            </div>
    
            <div class="content" id="RightContentTab">
    
                <div class="tertiaryTab" id="TertiaryTabIndex">
                </div>
                <div class="iframeTab">
                    <iframe id="iframeIndex"></iframe>
                </div>
            </div>
        </div>
        </section>
      `;
    }
   

}
HelloLit.styles = css`
    
    body {
        margin: 0;
        height: 100%;
        background: #ffffff;
    }
    
    p {
        margin: 0px;
        text-align: center;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: 600;
    }

    .dark {
        background: #2c2c2c;
    }
    
    .dark .topLeftBox {
        background: #353535;
        border-right: 1px solid #5D5350;
    }

    .dark .primaryTab {
        background: #353535;
        border-right: 1px solid #353535;
    }
    
    .dark .navtabImg, .dark .drkThirdlvlBtn button {
        color: #bab5b4;
    }

    .dark .navtabImg:hover, .dark .subTab:hover, .dark .thirdButtonTab {
        color: #ffffff;
    }

    .dark .secondaryTab {
        overflow: auto;
    }
    
    .dark .tertiaryTab {
        width: 100%;
    }

    .dark .tertiaryTab .thirdButtonTab:hover {
        color: #F69C83;
        background: #353535;
    }

    .dark .thirdButtonTab[data-active] {
        box-sizing: border-box;
        color: #F69C83 !important;
        background: #2C2C2C !important;
    }

    .headerHySecure {
        height: 48px;
        justify-content: space-between;
        text-align: left;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }
    
    .imgLogo {
        padding: 4px 22px 0;
    }
    .title {
        font-weight: normal;
        letter-spacing: 0.355556px;
        color: #f05a30;
        font-size: 8.88889px;
        line-height: 12px;
        margin: -5px;
    }
    
    .topLeftBox {
        position: absolute;
        top: 0;
        left: 0;
        width: 72px;
        height: 48px;
        background: #e8e6e6;
        border-right: 1px solid #e8e6e6;
        border-right: 1px solid #e8e6e6;
    
    }
    
    .topRightBox {
        display: flex;
        align-content: center;
        justify-content: space-between;
        background: #f37b59;
    }
    
    .icons {
        font-size: 18px !important;
        height: 20px;
        color: #fdefea;
        cursor: pointer;
    }
    
    .icons:hover {
        color: #ffffff;
    }
    
    .primaryTab {
        width: 72px;
        height: calc(100vh - 48px);
        background: #F5F5F5;
        border-right: 1px solid #e8e6e6;
        position: fixed;
        top: 48px;
        left: 0;
        overflow: auto;
    }
    
    .navtabImg {
        color: #a39d9b;
        text-decoration: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: 0;
    }
    
    .navtabImg:hover {
        color: #180905;
    }
    
    .content {
        position: relative;
        top: 48px;
        margin-left: 73px;
    }
    
    .primaryTab::-webkit-scrollbar {
        width: 5px;
    }
    
    .secondaryTab {
        white-space: nowrap;
    }
    
    .tertiaryTab {
        white-space: nowrap;
        display: inline-block;
    }
    .subTab {
        color: #FBCDC1;
        overflow: hidden;
        background-color: transparent;
        cursor: pointer;
        border: none;
        outline: 0;
    }
    
    /* Change background color of buttons on hover */
    
    .subTab:hover {
        color: #ffffff;
        /* border-bottom-color: #96837e; */
    }
    
    .thirdButtonTab {
        font-family: Segoe UI;
        overflow: hidden;
        background-color: transparent;
        cursor: pointer;
        color: #FFFFFF;
        border: none;
        outline: 0;
    }
    
    .tertiaryTab .thirdButtonTab:hover {
        color: #f05a30;
        background: #fdefea;
    }
    
    .navtabImg[data-active] {
        color: #f37b59 !important;
        border-right: 5px solid #f37b59;
        border-radius: 0px;
    }
    .navtabImg .icon {
        -webkit-filter: hue-rotate(180deg);
        filter: hue-rotate(180deg);
    }
    .subTab[data-active] {
        position: relative;
        color: #ffffff !important;
        border-radius: 0px;
    }
    .subTab[data-active]::before{
        content: '';
        position: absolute;
        border-top: 5px solid #ffffff;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: calc(100% - 32px);
        margin-left: 16px;
    }
    .thirdButtonTab[data-active] {
        background: #ffffff !important;
        box-sizing: border-box;
        color: #F37B59 !important;
    }
    @media (min-width: 768px) {
        .topRightBox {
            margin-left: 72px;
            padding-right: 4px;
        }
    
        .navtabImg {
            padding: 10px 0px;
            text-align: center;
            width: 72px;
            height: 72px;
            border-right:5px solid transparent;
        }
        .icon-name {
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.4px;
            font-weight: normal;
        }
        .subTab {
            padding: 14.5px 16px;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.1px;
        }
    
        .tertiaryTab {
            background: #F69C83;
            width: 100%;
        }
    
        .thirdButtonTab {
            padding: 8px 16px;
            border-radius: 0px;
        }
    
        .thirdButtonTab p {
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.4px;
        }
    
        .iframeTab {
            margin: 8px 0 0px;
        }
        .tabLinks {
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 1.25px;
        }
    
        .listing {
            width: 96px;
            height: 48px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }

    .secondaryTab,
    .hasSecondary .tertiaryTab,
    .tertiaryTab {
        display: none;
    }

    .hasSecondary .secondaryTab,
    .hasTertiary .secondaryTab {
        display: block;
    }

    .hasTertiary .tertiaryTab {
        display: inline-flex;
    }

    iframe {
        border: 0;
        width: 100%;
        height: calc(100vh - 124px);
    }
    .hasSecondary iframe {
        height: calc(100vh - 60px) !important;
    }
    .hasTertiary iframe {
        height: calc(100vh - 92px) !important;
    }

  `;
__decorate([
    property({ type: String })
], HelloLit.prototype, "title", void 0);
__decorate([
    property({ type: String })
], HelloLit.prototype, "personName", void 0);
__decorate([
    property({ type: Number })
], HelloLit.prototype, "counter", void 0);