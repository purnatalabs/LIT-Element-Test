import './styles.css';

(function () {
    var navtabs = [{
        name: "Monitor",
        icon: "bar_chart",
        children: [{
            name: "Dashboard",
            url: "" // HYSECURE STATUS/Dash Board

        }, {
            name: "Active Users",
            children: [{
                name: "Active Users",
                url: "" //  HYSECURE STATUS/Active Users
            }, {
                name: "Turbo Users",
                url: "" //  HYSECURE STATUS/Turbo Active Users
            }, {
                name: "Remote Meeting Users",
                url: "" //  REMOTE MEETINGS/Live Users
            }]
        }]
    }, {
        name: "Users",
        icon: "person",
        children: [{
            name: "Registered Users",
            url: "profileManager.cgi"
        }, {
            name: "Local Users",
            url: "userManager.cgi?type=5" //  AUTH MANAGEMENT/Local Users

        }, {
            name: "Local Groups",
            url: "ugManager.cgi?type=3" //  AUTH MANAGEMENT/Local Groups
        }]
    }, {
        name: "Apps",
        icon: "widgets",
        children: [{
            name: "Apps",
            url: "Application.cgi?type=3" //  ACCESS MANAGEMENT/Application
        }, {
            name: "App Groups",
            url: "appGrpManager.cgi?type=3" //  ACCESS MANAGEMENT/Application Groups
        }]
    }, {
        name: "Devices",
        icon: "computer",
        url: "",
        children: [{
            name: "Devices",
            url: "loginPolicy.cgi?type=9"
        }]

    } //, {
        //     name: "Locations",
        //     icon: "location_on",
        //     url: " ",
        //     children: [{
        //         name: "Locations",
        //         url: ""
        //     }, {
        //         name: "Location Groups",
        //         url: ""
        //     }]
        // }
        , {
        name: "Policies",
        icon: "settings_ethernet",
        url: " ",
        children: [{
            name: "ACL",
            url: "aclManager.cgi?type=0" // ACCESS MANAGEMENT/Access Control
        }, {
            name: "HYID",
            url: "otpManager.cgi" //  AUTH MANAGEMENT/HyID Policy
        }, {
            name: "Endpoint Security Policies",
            url: "",
            children: [{
                name: "Host Scan",
                url: "policyManager.cgi?type=30" //  ENDPOINT MANAGEMENT/HOST SCAN POLICY
            }, {
                name: "Device Profiles",
                url: "zoneManager.cgi?type=5" //  ENDPOINT MANAGEMENT/Device Profiles
            }]
        }, {
            name: "Password",
            url: "renewexp.cgi"
        }, {
            name: "Client Profiles",
            url: "clientInfo.cgi?type=15" //  ENDPOINT MANAGEMENT/Client Profile
        }, {
            name: "IP Address Pools",
            url: "virtualIpPoolMngment.cgi?type=0" //  RESOURCES/IP Address Pools
        }, {
            name: "Time Access Filter",
            url: "accTimeManager.cgi?type=3" //  RESOURCES/Access Filters
        }, {
            name: "Hardware Tokens",
            url: "hardwareTokenManager.cgi?type=0" //  RESOURCES/Hardware Tokens
        }]
    }, {
        name: "Reports",
        icon: "article",
        children: [{
            name: "Logs",
            url: "",
            children: [{
                name: "Activity",
                url: "LogBrowser.cgi?type=1", //  LOGGING/Activity Logs
            }, {
                name: "User",
                url: "LogBrowser.cgi?type=2" //  LOGGING/User Logs
            }, {
                name: "Admin",
                url: "LogBrowser.cgi?type=4" //  LOGGING/Admin Logs
            }, {
                name: "HyID",
                url: "LogBrowser.cgi?type=5" // LOGGING/HyID Logs
            }, {
                name: "Endpoint Scan",
                url: "LogBrowser.cgi?type=3" //  LOGGING/End Point Logs
            },
                //  {
                //     name: "Debug",
                //     url: "" //  LOGGING/Log Archiving Settings to fill
                // }
            ]
        }, {
            name: "Reports",
            url: "",
            children: [{
                name: "General",
                url: "Report.cgi?type=1" // REPORTS AND ALERTS/ General Report
            }, {
                name: "User",
                url: "Report.cgi?type=2" // REPORTS AND ALERTS/ User Based Report
            }, {
                name: "Domain",
                url: "Report.cgi?type=3" // REPORTS AND ALERTS/Domain Based Report
            }, {
                name: "Apps",
                url: "Report.cgi?type=4" // REPORTS AND ALERTS/Application Based Report
            }]
        }]
    }, {
        name: "Diagnose",
        icon: "build",
        children: [{
            name: "Ping",
            url: "ping.cgi?type=1" // HOST MAINTAINANCE/ Ping
        }, {
            name: "Trace Route",
            url: "trace.cgi?type=1" // HOST MAINTAINANCE/ Traceroute
        }, {
            name: "Telnet",
            url: "telnet.cgi?type=1" // HOST MAINTAINANCE/ Telenet
        }, // {
        //     name: "NETWORK TRACE",
        //     url: ""
        // },
        /*{
            name: "Compliance Status",
            url: "LSstatus.cgi?type=1" // HOST MAINTAINANCE/ Liscense Status
        },*/ {
            name: "Power",
            url: "SysConfig.cgi?type=7" // HOST MAINTAINANCE/ Shutdown/Restart
        }
        ]
    }, {
        name: "Settings",
        icon: "settings",
        children: [{
            name: "General Settings",
            url: "",
            children: [{
                name: "Backup & Restore",
                url: "BackupRestore.cgi?type=1" // HOST MAINTAINANCE/ BACKUP and RESTORE
            }, {
                name: "Auto Backup",
                url: "BackupManager.cgi?type=1"
            }, {
                name: "License Management",
                url: "LSstatus.cgi?type=1"
            }, {
                name: "Firmware Upgrade",
                url: "UpgradeAppliance.cgi?type=1" // HOST MAINTAINANCE/ Firmware Upgrade
            }, {
                name: "SSL Certificate",
                url: "extCertUpload.cgi?type=1" // RESOURCES External SSl Certificate
            }]
        }, {
            name: "Authentication",
            url: "",
            children: [{
                name: "Authentication Servers",
                url: "BAConfig.cgi?type=30" //  AUTH MANAGEMENT/Authentication Servers
            }, {
                name: "Authentication Domain",
                url: "authDomainManager.cgi?type=1" //  AUTH MANAGEMENT/Authentication Domain 
            },
            {
                name: "HySecure Domain",
                url: "realm.cgi?type=1" //  ACCESS MANAGEMENT/HySecure Domain
            }
            ]
        }, {
            name: "Services Config",
            url: "",
            children: [
                //     
                {
                    name: "Database",
                    url: "ChangeState.cgi?type=4" //   HOST CONFIGURATION/Database Configuration
                },
                // {
                //     name: "RADIUS Server",
                //     url: ""
                // },
                {
                    name: "SSH Server",
                    url: "ChangeState.cgi?type=6" //   HOST CONFIGURATION/SSH Configuration
                }, {
                    name: "HyLite Services",
                    url: "Thinviewconfig.cgi?type=1" // HOST CONFIGURATION/hyLite Services
                }, {
                    name: "Remote Meeting",
                    url: "progateUser.cgi?type=2" // REMOTE MEETINGS/Configuration
                }, {
                    name: "Turbo Tunnel",
                    url: "turboInterfaceMgmt.cgi?type=0" //  HOST CONFIGURATION/Turbo Gateway Interfaces
                }, {
                    name: "Gateway State",
                    url: "ChangeState.cgi" // HYSECURE STATUS/HySecure Gateway State
                }
            ]
        }, {
            name: "Global",
            url: "",
            children: [{
                name: "Server",
                url: "clientTime.cgi"
            }, {
                name: "Client",
                url: "clientInfo.cgi?type=20" // ENDPOINT MANAGEMEN/Global Client Settings
            }]
        }, {
            name: "Network Settings",
            url: "",
            children: [{
                name: "Network",
                url: "SysConfig.cgi?type=1" //  HOST CONFIGURATION/Network Configuration
            }, {
                name: "Routes",
                url: "route.cgi?type=10"
            }]
        }, {
            name: "Messaging",
            url: "",
            children: [{
                name: "SMTP",
                url: "smtpChange.cgi" // HOST CONFIGURATION/SMTP Server
            }, {
                name: "SMS Gateway",
                url: "IspManager.cgi?type=13" // HOST CONFIGURATION/SMS GATEWAY
            }]
        }, {
            name: "Logs",
            url: "",
            children: [{
                name: "Log Archival",
                url: "Logs.cgi?type=2"
            }, {
                name: "Syslog",
                url: "syslog.cgi?type=0" //   LOGGING/Sys Log Settings
            },/* {
                name: "Accops Reporting Server",
                url: ""
            },*/ {
                name: "Alert Manager",
                url: "AlertManager.cgi?type=1" //  REPORTS AND ALERTS/Alret Manager
            }]
        }, {
            name: "Cluster",
            url: "",
            children: [{
                name: "Manage",
                url: "HAsettings.cgi?type=1"
            }, {
                name: "Configure",
                url: function () {
                    var tempMenu = top.frames['IFrametree'];
                    var lnkConfig = tempMenu.document.getElementById('lnkConfig');
                    return lnkConfig ? lnkConfig.getAttribute('href') || 'SetInstallation.cgi?type=1' : '#';
                } // Configuration linkto fill
            }]
        }, {
            name: "Theme",
            url: "customPolicy.cgi?type=1"
        }]
    }]

    function onPageLoad() {
        renderPrimaryNav();
        var firstTabIndex = 0;
        // var header = document.getElementById('heading');
        // var navObj = navtabs[firstTabIndex];

        // header.innerText = navObj.name;
        if (navtabs[firstTabIndex].children) {
            renderSecondaryNav(firstTabIndex);
        } else {
            openUrlInIframe(navObj);
        }
        const theme = localStorage.getItem("theme");
        if (theme == "dark") {
            document.body.classList.add("dark");
        }
    }

    function renderPrimaryNav() {
        var primaryNav = document.getElementById('primaryTab');
        var menuItemTemplate = document.getElementById('MenuIconTemplate').innerHTML;
        var html = '';

        for (var i = 0; i < navtabs.length; i++) {
            var menuItemHtml = menuItemTemplate;
            menuItemHtml = menuItemHtml.replace('{{index}}', i);
            menuItemHtml = menuItemHtml.replace('{{icon}}', navtabs[i].icon);
            menuItemHtml = menuItemHtml.replace('{{label}}', navtabs[i].name);
            menuItemHtml = menuItemHtml.replace('{{active}}', i === 0 ? 'data-active' : '');

            html += menuItemHtml;
        }
        primaryNav.innerHTML = html;
    }

    function renderSecondaryNav(tabIndex) {
        var navObj = navtabs[tabIndex];
        var secondaryNav = document.getElementById('secondaryTabIndex');
        var secondaryMenuItemTemplate = document.getElementById("RightContentTemplate").innerHTML;
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

    function renderTertiaryNav(primaryTabIndex, secondaryTabIndex) {
        var primaryNavObj = navtabs[primaryTabIndex];
        var secondaryNavObj = primaryNavObj.children[secondaryTabIndex];
        var tertiaryNav = document.getElementById('TertiaryTabIndex');
        var tertiaryMenuItemTemplate = document.getElementById("RightContentSubTabTemplate").innerHTML;
        var html = '';

        for (var i = 0; i < secondaryNavObj.children.length; i++) {
            var menuItemHtml = tertiaryMenuItemTemplate;
            menuItemHtml = menuItemHtml.replace('{{active}}', i === 0 ? 'data-active' : '');
            menuItemHtml = menuItemHtml.replace('{{label}}', secondaryNavObj.children[i].name);
            menuItemHtml = menuItemHtml.replace('{{primaryIndex}}', primaryTabIndex);
            menuItemHtml = menuItemHtml.replace('{{secondaryIndex}}', secondaryTabIndex);
            menuItemHtml = menuItemHtml.replace('{{index}}', i);

            html += menuItemHtml;
        }
        tertiaryNav.innerHTML = html;

        document.body.classList.remove('hasSecondary');
        document.body.classList.add('hasTertiary');
        openUrlInIframe(secondaryNavObj.children[0]);
    }

    var _loaderHandle;
    function openUrlInIframe(navObj) {
        var iframe = document.getElementById('iframeIndex');
        iframe.src = typeof navObj.url === typeof function () { } ? navObj.url() : navObj.url;
        _loaderHandle = setTimeout(function () {
            var loader = document.getElementById('loader');
            loader.style.display = 'block';
            _loaderHandle = undefined;
        }, 250);
    }

    var iframe = document.getElementById('iframeIndex');
    iframe.onload = function () {
        if (document.body.classList.contains('dark') && (document.body.lastElementChild.contentDocument != "null")) {
            iframe.contentDocument.body.classList.add('dark');
        }
        var loader = document.getElementById('loader');
        loader.style.display = 'none';

        if (_loaderHandle) {
            clearTimeout(_loaderHandle);
        }
    }

    document.getElementById('primaryTab')
        .addEventListener('click', function (e) {
            var target = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
            if (target.tagName === 'BUTTON') {
                var index = parseInt(target.getAttribute('data-index'));
                var navObj = navtabs[index];
                var current = document.querySelector(".navtabImg[data-active]");

                if (current) current.removeAttribute('data-active');
                target.setAttribute('data-active', '');

                document.body.classList.remove('hasSecondary');
                document.body.classList.remove('hasTertiary');

                document.getElementById('secondaryTabIndex').innerHTML = '';
                document.getElementById('TertiaryTabIndex').innerHTML = '';

                if (navObj && navObj.children.length > 0) {
                    renderSecondaryNav(index);
                } else {
                    document.body.classList.remove('hasSecondary');
                    document.body.classList.remove('hasTertiary');
                    openUrlInIframe(navObj);
                }
            }
        });

    document.getElementById('secondaryTabIndex')
        .addEventListener('click', function (e) {
            var target = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
            if (target.tagName === 'BUTTON') {
                var primaryIndex = parseInt(target.getAttribute('data-primary-index'));
                var index = parseInt(target.getAttribute('data-index'));
                var secondaryNavItem = navtabs[primaryIndex].children[index];
                var secondaryNavChildren = secondaryNavItem.children;
                var current = document.querySelector(".subTab[data-active]");

                if (current) current.removeAttribute('data-active');
                target.setAttribute('data-active', '');

                document.getElementById('TertiaryTabIndex').innerHTML = '';

                if (secondaryNavChildren && secondaryNavChildren.length > 0) {
                    renderTertiaryNav(primaryIndex, index);
                } else {
                    document.body.classList.add('hasSecondary');
                    document.body.classList.remove('hasTertiary');
                    openUrlInIframe(secondaryNavItem);
                }
            }
        });

    document.getElementById('TertiaryTabIndex')
        .addEventListener('click', function (e) {
            var target = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
            if (target.tagName === 'BUTTON') {
                var primaryIndex = parseInt(target.getAttribute('data-primary-index'));
                var secondaryIndex = parseInt(target.getAttribute('data-secondary-index'));
                var index = parseInt(target.getAttribute('data-index'));
                var navobj = navtabs[primaryIndex].children[secondaryIndex].children[index];
                var current = document.querySelector(".thirdButtonTab[data-active]");

                if (current) current.removeAttribute('data-active');
                target.setAttribute('data-active', '');

                document.body.classList.remove('hasSecondary');
                document.body.classList.add('hasTertiary');

                openUrlInIframe(navobj);
            }
        });

    onPageLoad()
})();
