function updateRankPointsValue(questionNum) {
    if ($('#' + FEEDBACK_QUESTION_RANKPOINTS + '-' + questionNum).val() < 1) {
        $('#' + FEEDBACK_QUESTION_RANKPOINTS + '-' + questionNum).val(1);
    }
}

function addRankOption(questionNum) {
    var questionId = '#form_editquestion-' + questionNum;
    
    var curNumberOfChoiceCreated = parseInt($('#' + FEEDBACK_QUESTION_NUMBEROFCHOICECREATED + '-' + questionNum).val());
        
    $('<div id="rankOptionRow-' + curNumberOfChoiceCreated + '-' + questionNum + '">'
          + '<div class="input-group">'
              + '<input type="text" name="' + FEEDBACK_QUESTION_RANKOPTION + '-' + curNumberOfChoiceCreated + '" '
                      + 'id="' + FEEDBACK_QUESTION_RANKOPTION + '-' + curNumberOfChoiceCreated + '-' + questionNum + '" '
                      + 'class="form-control rankOptionTextBox">'
              + '<span class="input-group-btn">'
                  + '<button class="btn btn-default removeOptionLink" id="rankRemoveOptionLink" '
                          + 'onclick="removeRankOption(' + curNumberOfChoiceCreated + ',' + questionNum + ')" tabindex="-1">'
                      + '<span class="glyphicon glyphicon-remove"></span>'
                  + '</button>'
              + '</span>'
          + '</div>'
        + '</div>'
    ).insertBefore($('#rankAddOptionRow-' + questionNum));

    $('#' + FEEDBACK_QUESTION_NUMBEROFCHOICECREATED + '-' + questionNum).val(curNumberOfChoiceCreated + 1);
    
    if ($(questionId).attr('editStatus') === 'hasResponses') {
        $(questionId).attr('editStatus', 'mustDeleteResponses');
    }
}

function hideRankOptionTable(questionNum) {
    $('#' + FEEDBACK_QUESTION_RANKOPTIONTABLE + '-' + questionNum).hide();
}

function removeRankOption(index, questionNum) {
    var questionId = '#form_editquestion-' + questionNum;
    var $thisRow = $('#rankOptionRow-' + index + '-' + questionNum);
    
    // count number of child rows the table have and - 1 because of 'add option' button
    var numberOfOptions = $thisRow.parent().children('div').length - 1;
    
    if (numberOfOptions <= 2) {
        $thisRow.find('input').val('');
    } else {
        $thisRow.remove();
    
        if ($(questionId).attr('editStatus') === 'hasResponses') {
            $(questionId).attr('editStatus', 'mustDeleteResponses');
        }
    }
}

