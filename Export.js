function exportToPDF() {
    viz.showExportPDFDialog();
}

function exportCrossTab() {

    viz.showExportCrossTabDialog();

}

if (document.addEventListener) {

    window.addEventListener("load", initializeViz, false);

} else if (document.attachEvent) {

    window.attachEvent("onload", initializeViz);

}

function DownImg()

{

    viz.showExportImageDialog();
}

function exportData() {

    viz.showExportDataDialog();

}

function Print_page() {

    window.print();

}


// Hide submenus
$('#body-row .collapse').collapse('hide');

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-left');

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

function SidebarCollapse() {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if (SeparatorTitle.hasClass('d-flex')) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }

    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}

//sidebar height fix

$(document).ready(function() {
    var height = Math.max($(".sidebar").height(), $(".vizcontainer").height());
    $(".sidebar").height(height);
    $(".vizcontainer").height(height);
});