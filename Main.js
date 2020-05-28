//To prevent a bug in IE where the global use of the 'viz' variable
//  interferes with the div id 'viz' (in the html), the following line is needed:
//  Note: this line does not appear in the tutorial videos but should still be used
//    and is in all of the included js files. 
var vizContainer, workbook;

window.onload = function() {
    var vizDiv = document.getElementById('vizcontainer');
    var vizURL = "https://visualdiscovery.premierinc.com/t/Premier_Advanced_Business_Intelligence/views/GPOConversionResults-Version2_1_0/SummaryChart?:showVizHome[]=n&:showAppBanner=false&:origin=viz_share_link&:jsdebug=y&:display_count=n&:showVizHome=n";
    var options = {
        width: '88%',
        height: '90vh',
        hideToolbar: true,
        hideTabs: true,
        onFirstInteractive: function() {
            workbook = viz.getWorkbook();
            activeSheet = workbook.getActiveSheet();
            getVizData();
        }
    };
    viz = new tableauSoftware.Viz(vizDiv, vizURL, options);
};

function switchView(sheetName) {
    workbook = viz.getWorkbook();
    workbook.activateSheetAsync(sheetName);
}