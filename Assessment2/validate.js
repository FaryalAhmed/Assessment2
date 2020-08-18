$(document).ready(function() {
    // initialization
    $('input[name*=percent]').prop("checked", true);
    $('input[name*=flat]').prop("checked", false);
    $('input[type=number].percent').val(0);
    $('input[type=number].flat').val(1);

    // update
    updateBoxes();

    // register change event
    $("input[type=checkbox]").change(function() {
        // find other name
        self = $(this).attr('name');
        if (self.indexOf("percent") > 0) {
            other = self.replace("percent", "flat");
        }
        else {
            other = self.replace("flat", "percent");
        }
        
        // deselect other if selected
        if ($('input[name=' + other + ']').is(":checked")) {
            $('input[name=' + other + ']').prop("checked", false);
        }
        // else keep current selected
        else {
            $('input[name=' + self + ']').prop("checked", true);
        }
        
        // update
        updateBoxes();
    });
});

// update function
function updateBoxes() {
    $("input[type=checkbox]:checked").parent("td").addClass("selected");
    $("input[type=checkbox]:not(:checked)").parent("td").removeClass("selected");
    $("td.selected").children("input[type=number]").prop("disabled", false);
    $("td:not(.selected)").children("input[type=number]").prop("disabled", true);
}