var oSVGScript = jQuery("<svg id=sheet width=1800 height=444>");
var oTextBox = jQuery("<input type=text name=textBox id=textBox>").css({
    "padding": "10px",
    "position": "absolute",
    "z-index": "10",
    "top": "1%",
    "left": "29%",
    "border": "thin",
    "border-color": "#007cc0",
    "color": "#007cc0",
    "width": "47em",
    "text-align": "center",
    "background-color": "#f2f2f2",
    "border-style": "dotted"
});
var oButton = jQuery("<input type=image id=talkbutton src=data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgOTYuNjY3IDk2LjY2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTYuNjY3IDk2LjY2NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00OC4zMzMsNzMuMjk2YzkuNTE5LDAsMTcuMjYzLTcuNzQ0LDE3LjI2My0xNy4yNjJWMTcuMjYyQzY1LjU5Niw3Ljc0Myw1Ny44NTIsMCw0OC4zMzMsMCAgICBjLTkuNTE5LDAtMTcuMjYyLDcuNzQzLTE3LjI2MiwxNy4yNjJ2MzguNzczQzMxLjA3MSw2NS41NTMsMzguODE0LDczLjI5Niw0OC4zMzMsNzMuMjk2eiIgZmlsbD0iIzU4OGVkMSIvPgoJCTxwYXRoIGQ9Ik03Ni4wNzgsNDUuNzE1aC0zLjQzN2MtMS4xMDQsMC0yLDAuODk2LTIsMnY3LjAyOWMwLDEyLjMtMTAuMDA4LDIyLjMwOC0yMi4zMDksMjIuMzA4UzI2LjAyNSw2Ny4wNDQsMjYuMDI1LDU0Ljc0NCAgICB2LTcuMDI5YzAtMS4xMDQtMC44OTYtMi0yLTJoLTMuNDM3Yy0xLjEwNCwwLTIsMC44OTYtMiwydjcuMDI5YzAsMTQuNzA3LDExLjQzMywyNy42NjcsMjYuMDI2LDI5LjUwNnY0Ljk4aC0xNS4zNSAgICBjLTEuMTA0LDAtMiwwLjg5Ni0yLDJ2My40MzZjMCwxLjEwNCwwLjg5NiwyLDIsMmgzOC4xMzhjMS4xMDQsMCwyLTAuODk2LDItMlY5MS4yM2MwLTEuMTA0LTAuODk2LTItMi0ySDUyLjA1MXYtNC45OCAgICBjMTQuNTk0LTEuODM4LDI2LjAyNi0xNC43OTksMjYuMDI2LTI5LjUwNnYtNy4wMjlDNzguMDc4LDQ2LjYxLDc3LjE4Miw0NS43MTUsNzYuMDc4LDQ1LjcxNXoiIGZpbGw9IiM1ODhlZDEiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K></input>").css({
    "height": "38px",
    "position": "absolute",
    "left": "71.5%",
    "top": "12px",
    "z-index": "10",
    "height":"30px"
}).click(function () {


//  var scrt=$("<script>").attr("src","https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js");
//
//  $("body").append(scrt);
//  $(body).append(oSVGScript);
    $("#talkbutton").attr('src', "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDc5LjUzNiA3OS41MzciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDc5LjUzNiA3OS41Mzc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNTQuODk0LDUwLjgwM3Y0LjM2NWMwLDcuNDUxLTUuNDQ3LDEzLjYyMy0xMi41NjIsMTQuODUxdjQuMzg2aDMuODU3djUuMTMySDMzLjM1NXYtNS4xMzJoMy44NTUgICB2LTQuMzg2Yy03LjExNy0xLjIyMi0xMi41NTItNy4zOTktMTIuNTUyLTE0Ljg1MXYtNC4zNjVjMC0xLjQxOSwxLjE0OS0yLjU2MywyLjU2NS0yLjU2M2MxLjQxNywwLDIuNTY2LDEuMTQ5LDIuNTY2LDIuNTYzdjQuMzY1ICAgYzAsNS41MDQsNC40NzcsOS45NzgsOS45ODEsOS45NzhjNS41MTIsMCw5Ljk5MS00LjQ3NCw5Ljk5MS05Ljk3OHYtNC4zNjVjMC0xLjQxOSwxLjE0OS0yLjU2MywyLjU2My0yLjU2MyAgIEM1My43NDMsNDguMjQsNTQuODk0LDQ5LjM4NCw1NC44OTQsNTAuODAzeiBNMzkuNzY2LDI4LjU1M2MtNC4yNDksMC03LjY5NSwzLjQzOC03LjY5NSw3LjcwNXYxNy42NTggICBjMCw0LjI0NiwzLjQ0Niw3LjY5OSw3LjY5NSw3LjY5OWM0LjI1OSwwLDcuNzAyLTMuNDUzLDcuNzAyLTcuNjk5VjM2LjI1OEM0Ny40NjgsMzEuOTkxLDQ0LjAyNCwyOC41NTMsMzkuNzY2LDI4LjU1M3ogICAgTTQ5LjI2LDIzLjg2MWMwLTAuMjQ5LTAuMDUyLTAuNDgyLTAuMTM1LTAuNzA5Yy0xLjU3NC0zLjc4OC01LjIzNS02LjI0Ny05LjMxMy02LjI2OGgtMC4xNTIgICBjLTQuMDk0LTAuMDM0LTcuNzY1LDIuMzY0LTkuMzk2LDYuMTI4Yy0wLjM5NCwwLjkzLDAuMDMxLDEuOTkzLDAuOTQyLDIuMzkyYzAuOTM1LDAuMzg4LDIuMDA5LTAuMDMxLDIuNDAyLTAuOTUgICBjMS4wMzMtMi40MTEsMy40Mi0zLjk0OCw2LjAyNy0zLjkzM2gwLjE2YzIuNjA3LDAuMDIxLDQuOTU5LDEuNjEsNS45NzQsNC4wMThjMC4zNTcsMC45MjcsMS40MzUsMS4zNzUsMi4zNjEsMC45ODEgICBDNDguODM1LDI1LjIzMyw0OS4yNDQsMjQuNTY1LDQ5LjI2LDIzLjg2MXogTTUzLjM5MiwxOC40NjNjMC41NDQtMC4zNDUsMC44NS0wLjkzMywwLjg1NC0xLjUzOGMwLTAuMzI5LTAuMDk0LTAuNjczLTAuMjg1LTAuOTcxICAgYy0zLjA0NS00Ljg5NC04LjMwNi03Ljg2My0xNC4wODQtNy44ODloLTAuMTVjLTUuNzc5LTAuMDU0LTExLjA4MSwyLjgzMy0xNC4xOTgsNy42ODJjLTAuNTQyLDAuODQ0LTAuMzA5LDEuOTczLDAuNTM2LDIuNTA5ICAgYzAuODQxLDAuNTUxLDEuOTcsMC4zMTMsMi41MjItMC41NDFjMi40NTctMy44MDEsNi41OTctNi4wNDMsMTEuMTE0LTYuMDE3aDAuMTQ4YzQuNTIyLDAuMDM2LDguNjQ1LDIuMzQzLDExLjAyNiw2LjE3MiAgIEM1MS40MDMsMTguNzQsNTIuNTI2LDE4Ljk5NCw1My4zOTIsMTguNDYzeiBNNjAuNDU0LDExLjc3QzU2LjEwNCw0LjQ2NCw0OC40MzcsMC4wNTcsMzkuOTM4LDBoLTAuMTU3ICAgYy04LjQ5LTAuMDY0LTE2LjIyNiw0LjIzLTIwLjY5MiwxMS40OGMtMC41MjgsMC44NTQtMC4yNjQsMS45NzMsMC42MDEsMi41MTRjMC44NiwwLjUyMiwxLjk4MywwLjI0OCwyLjUwOS0wLjYwMSAgIGMzLjc4LTYuMTU0LDEwLjM1NC05LjgxMSwxNy41NzItOS43NTZoMC4xNDNjNy4xOTcsMC4wNywxMy43MjIsMy44MDYsMTcuNDA4LDEwLjAxMmMwLjUxOSwwLjg1MiwxLjYzNywxLjE0OSwyLjUwNywwLjYyNCAgIGMwLjU2OS0wLjM0NCwwLjg5MS0wLjk0MiwwLjg5MS0xLjU1OUM2MC43MTksMTIuMzk3LDYwLjY0MSwxMi4wNzksNjAuNDU0LDExLjc3eiIgZmlsbD0iIzQzOTNjYyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:22723/C4CVoice/TestMain", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        $("#talkbutton").attr('src', "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgOTYuNjY3IDk2LjY2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTYuNjY3IDk2LjY2NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00OC4zMzMsNzMuMjk2YzkuNTE5LDAsMTcuMjYzLTcuNzQ0LDE3LjI2My0xNy4yNjJWMTcuMjYyQzY1LjU5Niw3Ljc0Myw1Ny44NTIsMCw0OC4zMzMsMCAgICBjLTkuNTE5LDAtMTcuMjYyLDcuNzQzLTE3LjI2MiwxNy4yNjJ2MzguNzczQzMxLjA3MSw2NS41NTMsMzguODE0LDczLjI5Niw0OC4zMzMsNzMuMjk2eiIgZmlsbD0iIzU4OGVkMSIvPgoJCTxwYXRoIGQ9Ik03Ni4wNzgsNDUuNzE1aC0zLjQzN2MtMS4xMDQsMC0yLDAuODk2LTIsMnY3LjAyOWMwLDEyLjMtMTAuMDA4LDIyLjMwOC0yMi4zMDksMjIuMzA4UzI2LjAyNSw2Ny4wNDQsMjYuMDI1LDU0Ljc0NCAgICB2LTcuMDI5YzAtMS4xMDQtMC44OTYtMi0yLTJoLTMuNDM3Yy0xLjEwNCwwLTIsMC44OTYtMiwydjcuMDI5YzAsMTQuNzA3LDExLjQzMywyNy42NjcsMjYuMDI2LDI5LjUwNnY0Ljk4aC0xNS4zNSAgICBjLTEuMTA0LDAtMiwwLjg5Ni0yLDJ2My40MzZjMCwxLjEwNCwwLjg5NiwyLDIsMmgzOC4xMzhjMS4xMDQsMCwyLTAuODk2LDItMlY5MS4yM2MwLTEuMTA0LTAuODk2LTItMi0ySDUyLjA1MXYtNC45OCAgICBjMTQuNTk0LTEuODM4LDI2LjAyNi0xNC43OTksMjYuMDI2LTI5LjUwNnYtNy4wMjlDNzguMDc4LDQ2LjYxLDc3LjE4Miw0NS43MTUsNzYuMDc4LDQ1LjcxNXoiIGZpbGw9IiM1ODhlZDEiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K");
        if (xhttp.readyState !== 4) {
            return;
        }
        if (this.responseText === "" || !this.responseText || this.responseText === " ") {
            sap.m.MessageToast.show("I didn't get you! \n Can you please repeat?", {
                width: "20em"
            });
            var emptyResponseMessage = new SpeechSynthesisUtterance("I did not get you! Can you please repeat?");
            window.speechSynthesis.speak(emptyResponseMessage);
        }
        var oResponse = JSON.parse(this.responseText);
        var aActions = oResponse;
        var iActionsLength = aActions.length;
        var oAction = null;
        var oApplication = sap.client.getCurrentApplication();
        $("#talkbutton").html('Talk');
        for (var i = 0; i < iActionsLength; i++) {
            oAction = aActions[i];
            sActionType = oAction.actionType;
            if (sActionType) {
                switch (sActionType) {
                    case "HeaderData":
                        $("input:text").val(oAction.ObjectKey);
                        break;
                    case "Login":
                        //this._LoginViaCleo(oEvent);
                        if (!oApplication.getUsername()) {
//                            document.getElementById("__screen0-user-inner").value = oAction.username;
//                            document.getElementById("__screen0-pass-inner").value = oAction.password;
                            document.getElementById("__screen0-user-inner").value = "USSALESREP05";
                            document.getElementById("__screen0-pass-inner").value = "Welcome1";
                            var logOnButton = sap.ui.getCore().byId("__screen0-logonBtn");
                            logOnButton.firePress();
                        } else {
                            sap.m.MessageToast.show("'" + oApplication.getUsername() + "' is already logged in!", {
                                width: "20em"
                            });
                            var alreadyLoggedInMessage = new SpeechSynthesisUtterance("'" + oApplication.getUsername() + "' is already logged in!");
                            window.speechSynthesis.speak(alreadyLoggedInMessage);
                        }
                        break;
                    case "LogOff":
                        //this._LogOffViaCleo(oEvent);
                        if (oApplication.getUsername()) {
                            var userName = document.getElementsByClassName("sapUiUfdShellHeadUsrItmName")[0].innerHTML;
                            userName = userName.split(" ")[0];
                            sap.m.MessageToast.show("Have a nice day "+userName+"! See you later..", {
                                width: "20em"
                            });
                            var byeMessage = new SpeechSynthesisUtterance("Have a nice day "+userName+"! See you later..");                                                      
                            window.speechSynthesis.speak(byeMessage);
                            oApplication.logOff(true, true);  
                        } else {
                            sap.m.MessageToast.show("You have already logged off!");
                            var alreadyLoggedOffMessage = new SpeechSynthesisUtterance("You have already logged off!");
                            window.speechSynthesis.speak(alreadyLoggedOffMessage);
                        }
                        break;
                    case "WorkCenterViewNavigation":
                        //this._WorkCenterViewNavigation();
                        oApplication.navigateToWocView(oAction.wocViewUIPath);
                        break;
                    case "ExecuteDefaultSet_FromHomePage":
                        //this._ExecuteDefaultSet_FromHomePage(oEvent);
                        break;
//                    case "OpenExecuteDefaultSetDropDown":
//                        //this._OpenExecuteDefaultSetDropDown();
//                        var aDivs = window.document.getElementsByTagName("div");
//                        var svariantManagementId, ovariantManagement;
//                        var bIsSuccess = false;
//                        for (var i = 0; i < aDivs.length; i++) {
//                            svariantManagementId = aDivs[i].id;
//                            ovariantManagement = sap.ui.getCore().byId(svariantManagementId);
//                            if (ovariantManagement && ovariantManagement.sId && ovariantManagement.sId.indexOf("variantManagement") > -1 && ovariantManagement.sId.indexOf("variantManagement-") === 0) {
//                                ovariantManagement._openVariantSelection();
//                                bIsSuccess = true;
//                                break;
//                            }
//                        }
//                        if (!bIsSuccess) {
//                            sap.m.MessageToast.show("Looks like there is no Default Set drop down here! \n Make sure that you are in the correct screen", {
//                                width: "30em"
//                            });
//                            var openDefaultSetMessage = new SpeechSynthesisUtterance("Looks like there is no Default Set drop down here! Make sure that you are in the correct screen");
//                            window.speechSynthesis.speak(openDefaultSetMessage);
//                        }
//                        break;
                    case "ExecuteDefaultSet":
                        //this._ExecuteDefaultSet();

                        var aDivs = window.document.getElementsByTagName("div");
                        var svariantManagementId, ovariantManagement;
                        var bIsSuccess = false;
                        var sValue = oAction.ObjectKey.toLowerCase(), sItemText = "";
                        var oDefaultSetDropDown;
                        var oList, oItems, sSelectedKey;
                        if (!sValue || sValue === "" || sValue === " ") {
                            continue;
                        }
                        for (var ed = 0; ed < aDivs.length; ed++) {
                            svariantManagementId = aDivs[ed].id;
                            ovariantManagement = sap.ui.getCore().byId(svariantManagementId);
                            if (ovariantManagement && ovariantManagement.sId && ovariantManagement.sId.indexOf("variantManagement") > -1 && ovariantManagement.sId.indexOf("variantManagement-") === -1 && ovariantManagement.sId.indexOf("variantManagementselpage") === -1) {
                                oDefaultSetDropDown = ovariantManagement;
                                oDefaultSetDropDown._openVariantSelection();
                               oList = oDefaultSetDropDown.oVariantList;
                                if (oList) {
                                    sSelectedKey = oList.getSelectedKey();
                                }
                                if (sSelectedKey && sSelectedKey !== sValue) {
                                    oItems = oList.getItems();
                                    for (var j = 0; j < oItems.length; j++) {
                                        sItemText = oItems[j].getText ? oItems[j].getText() : "";
                                        sItemText = sItemText.toLowerCase();
                                        sItemText = sItemText.replace(/ /g, "");
                                        sItemText = sItemText.trim();
                                        if (sItemText === sValue) {
                                            oList._activateItem(oItems[j]);
                                            bIsSuccess = true;
                                            break;
                                        }
                                    }
                                } else {
                                    bIsSuccess = true;
                                    sap.m.MessageToast.show("You are already on " + sValue, {
                                        width: "30em"
                                    });
                                    break;
                                }
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("Looks like default set '" + oAction.ObjectKey + "' is not here!", {
                                width: "30em"
                            });
                            var basicSearchMessage = new SpeechSynthesisUtterance("Looks like default set ' " + oAction.ObjectKey + "' is not here!");
                            window.speechSynthesis.speak(basicSearchMessage);
                        }
                        break;
                    case "BasicSearch":
                        //this._BasicSearch(oEvent);
                        var aButtons = window.document.getElementsByTagName("button");
                        var aDivs = window.document.getElementsByTagName("div");
                        var sSearchButtonId;
                        var oSearchButton;
                        var sSearchFieldId;
                        var oSearchField;
                        var bIsSuccess = false;
                        if (!oAction.ObjectKey || oAction.ObjectKey === "" || oAction.ObjectKey === " ") {
                            continue;
                        }
                        for (var bs = 0; bs < aButtons.length; bs++) {
                            sSearchButtonId = aButtons[bs].id;
                            oSearchButton = sap.ui.getCore().byId(sSearchButtonId);
                            if (oSearchButton && oSearchButton.sId && oSearchButton.sId.indexOf("searchButton") > -1) {
                                oSearchButton.firePress();
                                for (var sf = 0; sf < aDivs.length; sf++) {
                                    sSearchFieldId = aDivs[sf].id;
                                    oSearchField = sap.ui.getCore().byId(sSearchFieldId);
                                    if (oSearchField && oSearchField.sId && oSearchField.sId.indexOf("searchField") > -1) {
                                        oSearchField.setValue(oAction.ObjectKey);
                                        oSearchField.fireSearch({
                                            query: oSearchField.getValue(),
                                            refreshButtonPressed: false,
                                            clearButtonPressed: false
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Make sure that you are in correct screen to perform this action", {
                                width: "30em"
                            });
                            var basicSearchMessage = new SpeechSynthesisUtterance("I did not get you! Make sure that you are in correct screen to perform this action");
                            window.speechSynthesis.speak(basicSearchMessage);
                        }
                        break;
                    case "ClearBasicSearch":
                        //this._ClearBasicSearch(oEvent);
                        var aButtons = window.document.getElementsByTagName("button");
                        var aDivs = window.document.getElementsByTagName("div");
                        var sSearchButtonId;
                        var oSearchButton;
                        var sSearchFieldId;
                        var oSearchField;
                        var bIsSuccess = false;
                        for (var cs = 0; cs < aButtons.length; cs++) {
                            sSearchButtonId = aButtons[cs].id;
                            oSearchButton = sap.ui.getCore().byId(sSearchButtonId);
                            if (oSearchButton && oSearchButton.sId && oSearchButton.sId.indexOf("searchButton") > -1) {
                                oSearchButton.firePress();
                                for (var csj = 0; csj < aDivs.length; csj++) {
                                    sSearchFieldId = aDivs[csj].id;
                                    oSearchField = sap.ui.getCore().byId(sSearchFieldId);
                                    if (oSearchField && oSearchField.sId && oSearchField.sId.indexOf("searchField") > -1) {
                                        if (oSearchField.getValue() !== "") {
                                            oSearchField.setValue("");
                                            oSearchField.fireSearch({
                                                query: oSearchField.getValue(),
                                                refreshButtonPressed: false,
                                                clearButtonPressed: true
                                            });
                                        } else {
                                            sap.m.MessageToast.show("Search is clean as a whistle already!!", {
                                                width: "30em"
                                            });
                                            var clearSearchMessage = new SpeechSynthesisUtterance("Search is clean as a whistle already!!");
                                            window.speechSynthesis.speak(clearSearchMessage);
                                        }
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Make sure that you are in correct screen to perform this action", {
                                width: "30em"
                            });
                            var clearSearchMessage1 = new SpeechSynthesisUtterance("I did not get you! Make sure that you are in correct screen to perform this action");
                            window.speechSynthesis.speak(clearSearchMessage1);
                        }
                        break;
                    case "AlternateVisualizationTableView":
                        //this._AlternateVisualization(oEvent);
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "TableView";
                        var bIsSuccess = false;
                        for (var avt = 0; avt < aButtons.length; avt++) {
                            slayoutToggleButtonId = aButtons[avt].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("layoutToggleButton") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });
                                for (var avtj = 0; avtj < aButtons.length; avtj++) {
                                    sAlternativeVisualizationButtonId = aButtons[avtj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.sId && oAlternativeVisualizationButton.sId.indexOf(sView) > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var viewNotFoundMessage = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(viewNotFoundMessage);
                        }
                        break;
                    case "AlternateVisualizationChunkView":
                        //this._AlternateVisualization(oEvent);
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "ChunkView";
                        var bIsSuccess = false;
                        for (var avch = 0; avch < aButtons.length; avch++) {
                            slayoutToggleButtonId = aButtons[avch].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("layoutToggleButton") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });
                                for (var avchj = 0; avchj < aButtons.length; avchj++) {
                                    sAlternativeVisualizationButtonId = aButtons[avchj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.sId && oAlternativeVisualizationButton.sId.indexOf(sView) > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var viewNotFoundMessage1 = new SpeechSynthesisUtterance("I did not get you! \n Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(viewNotFoundMessage1);
                        }
                        break;
                    case "AlternateVisualizationMapView":
                        //this._AlternateVisualization(oEvent);
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "MapView";
                        var bIsSuccess = false;
                        for (var avm = 0; avm < aButtons.length; avm++) {
                            slayoutToggleButtonId = aButtons[avm].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("layoutToggleButton") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });
                                for (var avmj = 0; avmj < aButtons.length; avmj++) {
                                    sAlternativeVisualizationButtonId = aButtons[avmj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.sId && oAlternativeVisualizationButton.sId.indexOf(sView) > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var viewNotFoundMessage2 = new SpeechSynthesisUtterance("I did not get you! \n Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(viewNotFoundMessage2);
                        }
                        break;
                    case "AlternateVisualizationCalendarView":
                        //this._AlternateVisualization(oEvent);
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "CalendarView";
                        var bIsSuccess = false;
                        for (var avc = 0; avc < aButtons.length; avc++) {
                            slayoutToggleButtonId = aButtons[avc].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("layoutToggleButton") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });
                                for (var avcj = 0; avcj < aButtons.length; avcj++) {
                                    sAlternativeVisualizationButtonId = aButtons[avcj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.sId && oAlternativeVisualizationButton.sId.indexOf(sView) > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var viewNotFoundMessage3 = new SpeechSynthesisUtterance("I did not get you! \n Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(viewNotFoundMessage3);
                        }
                        break;
                    case "OpenTI":
                        //this._OpenTI();
                        var aAObjs = window.document.getElementsByTagName("a");
                        var sTI_Id, oTI, sValue = oAction.ObjectKey, sLinkValue;
                        var bIsSuccess = false;

                        if (!sValue || sValue === "" || sValue === " ") {
                            continue;
                        }

                        for (var ti = 0; ti < aAObjs.length; ti++) {
                            sTI_Id = aAObjs[ti].id;
                            oTI = sap.ui.getCore().byId(sTI_Id);

                            if (oTI && oTI.getText) {
                                sLinkValue = oTI.getText().toString().toLowerCase();
                                sLinkValue = sLinkValue.replace(/ /g, "");
                                sLinkValue = sLinkValue.trim();
                            }
                            if (sLinkValue === sValue.toLowerCase()) {
                                var oLinkWrapper = oTI.getWrapper();
                                if (oLinkWrapper.oNode._a.onClick) {

                                    // onClick event defined -> execute event handler
                                    oLinkWrapper.oController.getEventProcessor().handleEvent(oLinkWrapper.oNode._a.onClick, new sap.client.evt.EventContext(oTI));
                                    bIsSuccess = true;
                                    break;

                                } else {
                                    var oBindingContext = oTI.getBindingContext();
                                    var oRealThingType = oLinkWrapper.getBestMatchThingType(oBindingContext, oLinkWrapper._sRawAddressBindingPath);
                                    if (oRealThingType) {
                                        var oInspectThingType = oRealThingType.thingType["Inspect"];
                                        if (oInspectThingType && oInspectThingType.getTargetFound()) {
                                            oLinkWrapper.oController.getNavigationProcessor().fireThingNavigation(oInspectThingType, oRealThingType.path, null);
                                            bIsSuccess = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("Looks like " + sValue + "  does not exist!", {
                                width: "30em"
                            });
                            var openTIMessage = new SpeechSynthesisUtterance("Looks like " + sValue + "  does not exist!");
                            window.speechSynthesis.speak(openTIMessage);
                        }
                        break;

                    case "GoToFacet":
                        var aDivs = window.document.getElementsByTagName("div");
                        var sTabStripId, oTabStrip, sFacetName, oFacet;
                        var bIsSuccess = false;
                        var sSelectedFacet = oAction.ObjectKey.toLowerCase();

                        if (!sSelectedFacet || sSelectedFacet === "" || sSelectedFacet === " ") {
                            continue;
                        }
                        for (var fi = 0; fi < aDivs.length; fi++) {
                            sTabStripId = aDivs[fi].id;
                            oTabStrip = sap.ui.getCore().byId(sTabStripId);
                            if (oTabStrip && oTabStrip.sId && oTabStrip.sId.indexOf("tabstrip") > -1) {
                                var aItems = oTabStrip.getItems();
                                for (var fj = 0; fj < aItems.length; fj++) {
                                    sFacetName = aItems[fj].getText ? aItems[fj].getText() : "";
                                    sFacetName = sFacetName.toLowerCase();
                                    sFacetName = sFacetName.replace(/ /g, "");
                                    sFacetName = sFacetName.trim();
                                    if (sFacetName === sSelectedFacet) {
                                        oTabStrip._activateItem(aItems[fj]);
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("Looks like facet '" + oAction.ObjectKey + "' is not here!", {
                                width: "30em"
                            });
                            var basicSearchMessage = new SpeechSynthesisUtterance("Looks like facet ' " + oAction.ObjectKey + "' is not here!");
                            window.speechSynthesis.speak(basicSearchMessage);
                        }
                        break;
                    case "CloseTI":
                        //this._CloseTI();
                        var oWindowManager;
                        var oCurrentWindow;
                        oWindowManager = oApplication.getWindowManager();
                        if (oWindowManager) {
                            oCurrentWindow = oWindowManager.getCurrentWindow();
                            if (oCurrentWindow) {
                                oWindowManager.performManualClose(oCurrentWindow.getWindowId());
                            } else {
                                sap.m.MessageToast.show("I can't close this! \n Looks like you are testing me :)", {
                                    width: "20em"
                                });
                                var closeTIMessage = new SpeechSynthesisUtterance("I can not close this! Looks like you are testing me");
                                window.speechSynthesis.speak(closeTIMessage);
                            }
                        } else {
                            sap.m.MessageToast.show("I can't close this! \n Looks like you are testing me :)", {
                                width: "20em"
                            });
                            var closeTIMessage1 = new SpeechSynthesisUtterance("I can not close this! Looks like you are testing me");
                            window.speechSynthesis.speak(closeTIMessage1);
                        }
                        break;

                    case "AVPie":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Pie";
                        var bIsSuccess = false;
                        for (var pie = 0; pie < aButtons.length; pie++) {
                            slayoutToggleButtonId = aButtons[pie].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });

                                for (var piej = 0; piej < aButtons.length; piej++) {
                                    sAlternativeVisualizationButtonId = aButtons[piej].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://pie-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;

                    case "AVTable":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Table";
                        var bIsSuccess = false;
                        for (var table = 0; table < aButtons.length; table++) {
                            slayoutToggleButtonId = aButtons[table].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });
                                for (var tablej = 0; tablej < aButtons.length; tablej++) {
                                    sAlternativeVisualizationButtonId = aButtons[tablej].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                   if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://table-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }

                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;

                    case "AVBar":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Horizontal bar";
                        var bIsSuccess = false;
                        for (var bari = 0; bari < aButtons.length; bari++) {
                            slayoutToggleButtonId = aButtons[bari].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });
                                for (var barij = 0; barij < aButtons.length; barij++) {
                                    sAlternativeVisualizationButtonId = aButtons[barij].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://horizontal-bar-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }

                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;

                    case "AVColumn":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Column";
                        var bIsSuccess = false;
                        for (var coli = 0; coli < aButtons.length; coli++) {
                            slayoutToggleButtonId = aButtons[coli].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });

                                for (var colj = 0; colj < aButtons.length; colj++) {
                                    sAlternativeVisualizationButtonId = aButtons[colj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://vertical-bar-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }

                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;


                    case "AVLine":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Line";
                        var bIsSuccess = false;
                        for (var linei = 0; linei < aButtons.length; linei++) {
                            slayoutToggleButtonId = aButtons[linei].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });

                                for (var linej = 0; linej < aButtons.length; linej++) {
                                    sAlternativeVisualizationButtonId = aButtons[linej].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://line-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }

                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;

//                    case "AVScatter": // TODO: Not sure which one
//                        var aButtons = window.document.getElementsByTagName("button");
//                        var slayoutToggleButtonId;
//                        var olayoutToggleButton;
//                        var sAlternativeVisualizationButtonId;
//                        var oAlternativeVisualizationButton;
//                        var sView = "Pie";
//                        var bIsSuccess = false;
//                        for (var scati = 0; scati < aButtons.length; scati++) {
//                            slayoutToggleButtonId = aButtons[scati].id;
//                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
//                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
//                                olayoutToggleButton.firePress({
//                                    press: true
//                                });
//
//                                for (var scatj = 0; scatj < aButtons.length; scatj++) {
//                                    sAlternativeVisualizationButtonId = aButtons[scatj].id;
//                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
//                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://pie-chart") > -1) {
//                                        oAlternativeVisualizationButton.firePress({
//                                            press: true
//                                        });
//                                        bIsSuccess = true;
//                                        break;
//                                    }
//                                }
//                                break;
//                            }
//                        }
//
//                        if (!bIsSuccess) {
//                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
//                                width: "30em"
//                            });
//                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
//                            window.speechSynthesis.speak(pieView);
//                        }
//                        break;

                    case "AVArea":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Area";
                        var bIsSuccess = false;
                        for (var areai = 0; areai < aButtons.length; areai++) {
                            slayoutToggleButtonId = aButtons[areai].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });

                                for (var areaj = 0; areaj < aButtons.length; areaj++) {
                                    sAlternativeVisualizationButtonId = aButtons[areaj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://area-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }

                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;

                    case "AVBullet":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Bullet";
                        var bIsSuccess = false;
                        for (var bulli = 0; bulli < aButtons.length; bulli++) {
                            slayoutToggleButtonId = aButtons[bulli].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });

                                //

                                for (var bullj = 0; bullj < aButtons.length; bullj++) {
                                    sAlternativeVisualizationButtonId = aButtons[bullj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://extended-horGroup-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }

                        if (!bIsSuccess) {
                           sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;

                    case "AVHeatMap":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Heat map";
                        var bIsSuccess = false;
                        for (var heati = 0; heati < aButtons.length; heati++) {
                            slayoutToggleButtonId = aButtons[heati].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });

                                for (var heatj = 0; heatj < aButtons.length; heatj++) {
                                    sAlternativeVisualizationButtonId = aButtons[heatj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://grid") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }

                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;


//                    case "AVMap": //TODO not sure about this
//                        var aButtons = window.document.getElementsByTagName("button");
//                        var slayoutToggleButtonId;
//                        var olayoutToggleButton;
//                        var sAlternativeVisualizationButtonId;
//                        var oAlternativeVisualizationButton;
//                        var sView = "Pie";
//                        var bIsSuccess = false;
//                        for (var i = 0; i < aButtons.length; i++) {
//                            slayoutToggleButtonId = aButtons[i].id;
//                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
//                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
//                                olayoutToggleButton.firePress({
//                                    press: true
//                                });
//
//                                //
//
//                                for (var j = 0; j < aButtons.length; j++) {
//                                    sAlternativeVisualizationButtonId = aButtons[j].id;
//                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
//                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://pie-chart") > -1) {
//                                        oAlternativeVisualizationButton.firePress({
//                                            press: true
//                                        });
//                                        bIsSuccess = true;
//                                        break;
//                                    }
//                                }
//                                break;
//                            }
//                        }
//
//                        if (!bIsSuccess) {
//                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
//                                width: "30em"
//                            });
//                        }
//                        break;

                    case "AVBubble":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Bubble";
                        var bIsSuccess = false;
                        for (var bubi = 0; bubi < aButtons.length; bubi++) {
                            slayoutToggleButtonId = aButtons[bubi].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });

                                //

                                for (var bubj = 0; bubj < aButtons.length; bubj++) {
                                    sAlternativeVisualizationButtonId = aButtons[bubj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://bubble-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }

                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;

                    case "AVDoughnut":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Doughnut";
                        var bIsSuccess = false;
                        for (var di = 0; di < aButtons.length; di++) {
                            slayoutToggleButtonId = aButtons[di].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });

                                for (var dj = 0; dj < aButtons.length; dj++) {
                                    sAlternativeVisualizationButtonId = aButtons[dj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://extended-donut-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }

                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;

                    case "AVStackedBar":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Stacked bar";
                        var bIsSuccess = false;
                        for (var sbi = 0; sbi < aButtons.length; sbi++) {
                            slayoutToggleButtonId = aButtons[sbi].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });

                                //

                                for (var sbj = 0; sbj < aButtons.length; sbj++) {
                                    sAlternativeVisualizationButtonId = aButtons[sbj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://horizontal-stacked-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                       }

                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;

                    case "AVStackedColumn":
                        var aButtons = window.document.getElementsByTagName("button");
                        var slayoutToggleButtonId;
                        var olayoutToggleButton;
                        var sAlternativeVisualizationButtonId;
                        var oAlternativeVisualizationButton;
                        var sView = "Stacked Column";
                        var bIsSuccess = false;
                        for (var sci = 0; sci < aButtons.length; sci++) {
                            slayoutToggleButtonId = aButtons[sci].id;
                            olayoutToggleButton = sap.ui.getCore().byId(slayoutToggleButtonId);
                            if (olayoutToggleButton && olayoutToggleButton.sId && olayoutToggleButton.sId.indexOf("chartSelectionMenuItem") > -1) {
                                olayoutToggleButton.firePress({
                                    press: true
                                });

                                for (var scj = 0; scj < aButtons.length; scj++) {
                                    sAlternativeVisualizationButtonId = aButtons[scj].id;
                                    oAlternativeVisualizationButton = sap.ui.getCore().byId(sAlternativeVisualizationButtonId);
                                    if (oAlternativeVisualizationButton && oAlternativeVisualizationButton.getIcon && oAlternativeVisualizationButton.getIcon().indexOf("sap-icon://vertical-stacked-chart") > -1) {
                                        oAlternativeVisualizationButton.firePress({
                                            press: true
                                        });
                                        bIsSuccess = true;
                                        break;
                                    }
                                }
                                break;
                            }
                        }

                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var pieView = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(pieView);
                        }
                        break;

                    case "SearchNearBy":
                        //this._AlternateVisualization(oEvent);
                        var aButtons = window.document.getElementsByTagName("button");
                        var sId;
                        var oObj;
                        for (var nearj = 0; nearj < aButtons.length; nearj++) {
                            sId = aButtons[nearj].id;
                            oObj = sap.ui.getCore().byId(sId);
                            if (oObj && oObj.getIcon && oObj.getIcon().indexOf("sap-icon://extended-search-nearby") > -1) {
                                oObj.firePress();
                                bIsSuccess = true;
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("I didn't get you! \n Looks like " + sView + " visualization is not present here!", {
                                width: "30em"
                            });
                            var searchNearByMessage = new SpeechSynthesisUtterance("I did not get you! Looks like " + sView + " visualization is not present here!");
                            window.speechSynthesis.speak(searchNearByMessage);
                        }
                        break;
                    case "ShowNotifications":
                        //this._ShowNotifications();
                        var aDivs = window.document.getElementsByTagName("div");
                        var sId, sIconPath, oNotifications;
                        var bIsSuccess = false;
                        for (var noti = 0; noti < aDivs.length; noti++) {
                            sId = aDivs[noti].id;
                            oNotifications = sap.ui.getCore().byId(sId);
                            if (oNotifications && oNotifications.getIcon) {
                                sIconPath = oNotifications.getIcon();
                            }
                            if (sIconPath && sIconPath.indexOf("sap-icon://notification") > -1) {
                                oNotifications.firePress();
                                bIsSuccess = true;
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("Sorry! I didn't get you \n Could you please repeat?", {
                                width: "25em"
                            });
                            var showNotificationMessage = new SpeechSynthesisUtterance("Sorry! I did not get you Could you please repeat?");
                            window.speechSynthesis.speak(showNotificationMessage);
                        }
                        break;

                    case "ShowRecentHistory":
                        //this._ShowRecentHistory();
                        var aLis = window.document.getElementsByTagName("li");
                        var sLiId, oRecentHistoryControl, sIconPath;
                        var bIsSuccess = false;
                        for (var reci = 0; reci < aLis.length; reci++) {
                            sLiId = aLis[reci].id;
                            oRecentHistoryControl = sap.ui.getCore().byId(sLiId);
                            if (oRecentHistoryControl && oRecentHistoryControl.getIcon) {
                                sIconPath = oRecentHistoryControl.getIcon();
                            }
                            if (sIconPath && sIconPath.indexOf("sap-icon://history") > -1) {
                                oRecentHistoryControl.firePress();
                                bIsSuccess = true;
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("Sorry! I didn't get you \n Could you please repeat?", {
                                width: "25em"
                            });
                            var ShowRecentHistoryMessage = new SpeechSynthesisUtterance("Sorry! I did not get you Could you please repeat?");
                            window.speechSynthesis.speak(ShowRecentHistoryMessage);
                        }
                        break;
                    case "ShowFavorites":
                        //this._ShowFavorites();
                        var aLis = window.document.getElementsByTagName("li");
                        var sLiId, oFavoritesControl, sIconPath;
                        var bIsSuccess = false;
                        for (var fai = 0; fai < aLis.length; fai++) {
                            sLiId = aLis[fai].id;
                            oFavoritesControl = sap.ui.getCore().byId(sLiId);
                            if (oFavoritesControl && oFavoritesControl.getIcon) {
                                sIconPath = oFavoritesControl.getIcon();
                            }
                            if (sIconPath && sIconPath.indexOf("sap-icon://favorite") > -1) {
                                oFavoritesControl.firePress();
                                bIsSuccess = true;
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("Sorry! I didn't get you \n Could you please repeat?", {
                                width: "25em"
                            });
                            var ShowFavoritesMessage = new SpeechSynthesisUtterance("Sorry! I did not get you Could you please repeat?");
                            window.speechSynthesis.speak(ShowFavoritesMessage);
                        }
                        break;
                    case "ShowFlags":
                        //this._ShowFlags();
                        var aLis = window.document.getElementsByTagName("li");
                        var sLiId, oFlagsControl, sIconPath;
                        var bIsSuccess = false;
                        for (var flagi = 0; flagi < aLis.length; flagi++) {
                            sLiId = aLis[flagi].id;
                            oFlagsControl = sap.ui.getCore().byId(sLiId);
                            if (oFlagsControl && oFlagsControl.getIcon) {
                                sIconPath = oFlagsControl.getIcon();
                            }
                            if (sIconPath && sIconPath.indexOf("sap-icon://flag") > -1) {
                                oFlagsControl.firePress();
                                bIsSuccess = true;
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                           sap.m.MessageToast.show("Sorry! I didn't get you \n Could you please repeat?", {
                                width: "25em"
                            });
                            var ShowFlagsMessage = new SpeechSynthesisUtterance("Sorry! I did not get you Could you please repeat?");
                            window.speechSynthesis.speak(ShowFlagsMessage);
                        }
                        break;
                    case "ShowTags":
                        //this._ShowTags();
                        var aLis = window.document.getElementsByTagName("li");
                        var sLiId, oTagsControl, sIconPath;
                        var bIsSuccess = false;
                        for (var tagi = 0; tagi < aLis.length; tagi++) {
                            sLiId = aLis[tagi].id;
                            oTagsControl = sap.ui.getCore().byId(sLiId);
                            if (oTagsControl && oTagsControl.getIcon) {
                                sIconPath = oTagsControl.getIcon();
                            }
                            if (sIconPath && sIconPath.indexOf("sap-icon://blank-tag") > -1) {
                                oTagsControl.firePress();
                                bIsSuccess = true;
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("Sorry! I didn't get you \n Could you please repeat?", {
                                width: "25em"
                            });
                            var ShowTagsMessage = new SpeechSynthesisUtterance("Sorry! I did not get you Could you please repeat?");
                            window.speechSynthesis.speak(ShowTagsMessage);
                        }
                        break;
                    case "ShowMenu":
                        //this._ShowMenu();
                        var aLis = window.document.getElementsByTagName("li");
                        var sLiId, oMenuControl, sIconPath;
                        var bIsSuccess = false;
                        for (var menui = 0; menui < aLis.length; menui++) {
                            sLiId = aLis[menui].id;
                            oMenuControl = sap.ui.getCore().byId(sLiId);
                            if (oMenuControl && oMenuControl.getIcon) {
                                sIconPath = oMenuControl.getIcon();
                            }
                            if (sIconPath && sIconPath.indexOf("sap-icon://menu2") > -1) {
                                oMenuControl.firePress();
                                bIsSuccess = true;
                                break;
                            }
                        }
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("Sorry! I didn't get you \n Could you please repeat?", {
                                width: "25em"
                            });
                            var ShowMenuMessage = new SpeechSynthesisUtterance("Sorry! I did not get you Could you please repeat?");
                            window.speechSynthesis.speak(ShowMenuMessage);
                        }
                        break;
//                    case "HomePage":
//                        oApplication.navigateToWocView("HOMEPAGE");
//                        sap.m.MessageToast.show("Welcome back to Home!");
//                        var HomeMessage = new SpeechSynthesisUtterance("Welcome back to Home!");
//                        window.speechSynthesis.speak(HomeMessage);
//                        break;
                    case "ExecuteAction":
                        var aButtons = window.document.getElementsByTagName("button");
                        var sId, bIsActionFound = false, oActionButton, bIsSuccess = false;
                        var oObj, sButtonModifiedText, oActionButtonMain;
                        var sActionText = oAction.ObjectKey;

                        if (!sActionText || sActionText === "", sActionText === " ") {
                            continue;
                        }

                        for (var actip = 0; actip < aButtons.length; actip++) {
                            sId = aButtons[actip].id;
                            oActionButtonMain = sap.ui.getCore().byId(sId);
                            if (oActionButtonMain && oActionButtonMain.getText && oActionButtonMain.getText() === "Actions") {
                                oActionButtonMain.firePress();
                                for (var acti = 0; acti < aButtons.length; acti++) {
                                    sId = aButtons[acti].id;
                                    oActionButton = sap.ui.getCore().byId(sId);
                                    if (oActionButton && oActionButton.aCustomStyleClasses) {
                                        bIsActionFound = oActionButton.aCustomStyleClasses.some(function (oClass) {
                                            sButtonModifiedText = oActionButton.getText().toLowerCase();
                                            sButtonModifiedText = sButtonModifiedText.replace(/ /g, "");
                                            sButtonModifiedText = sButtonModifiedText.trim();
                                            return (oClass === "sapMActionSheetButton") && (sButtonModifiedText.indexOf(sActionText.toLowerCase()) > -1)
                                        });
                                        if (bIsActionFound) {
                                            oActionButton.firePress();
                                            bIsSuccess = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }

                        
                        if (!bIsSuccess) {
                            sap.m.MessageToast.show("Not able to perform action '" + sActionText + "'", {
                                width: "30em"
                            });
                            var showActionMessage = new SpeechSynthesisUtterance("Not able to perform action '" + sActionText + "'");
                            window.speechSynthesis.speak(showActionMessage);
                        }
                        break;
                    default:
                        //this._LoadHomePage();
                        oApplication.navigateToWocView("HOMEPAGE");
                        sap.m.MessageToast.show("Welcome back to Home!");
                        var HomeMessage1 = new SpeechSynthesisUtterance("Welcome back to Home!");
                        window.speechSynthesis.speak(HomeMessage1);
                        break;
                }
            }
        }
    };
});

$("#textBox").val("Your Text will appear here!");
jQuery("body").append(oButton);
jQuery("body").append(oTextBox);


//document.getElementById(("talkbutton")).addClass("fa-fa-microphone");
//dragElement(document.getElementById(("talkbutton")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
       // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
