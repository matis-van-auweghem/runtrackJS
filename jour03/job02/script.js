$(document).ready(function() {
  function verifierOrdre() {
    let ok = true;

    $("#rainbow .piece").each(function(index) {
      if (parseInt($(this).attr("data-order")) !== index + 1) {
        ok = false;
      }
    });

    $("#message")
      .text(ok ? "Vous avez gagné" : "Vous avez perdu")
      .removeClass("win lose")
      .addClass(ok ? "win" : "lose");
  }

  function melanger() {
    let pieces = $("#rainbow .piece").toArray();

    for (let i = pieces.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }

    $("#rainbow").empty().append(pieces);
    verifierOrdre();
  }

  $("#shuffleBtn").on("click", melanger);

  let dragged = null;

  $("#rainbow").on("dragstart", ".piece", function() {
    dragged = this;
    $(this).addClass("dragging");
  });

  $("#rainbow").on("dragend", ".piece", function() {
    $(this).removeClass("dragging");
    verifierOrdre();
  });

  $("#rainbow").on("dragover", ".piece", function(e) {
    e.preventDefault();
  });

  $("#rainbow").on("drop", ".piece", function(e) {
    e.preventDefault();

    if (!dragged || dragged === this) return;

    let draggedItem = $(dragged);
    let target = $(this);

    if (draggedItem.index() < target.index()) {
      target.after(draggedItem);
    } else {
      target.before(draggedItem);
    }

    verifierOrdre();
  });

  verifierOrdre();
});